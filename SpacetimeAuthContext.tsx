'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useSpacetime } from '@/hooks/use-spacetime';
import type { User as SpacetimeUser, UserProgress, Streak } from '@/spacetime_module_bindings';

interface User {
  email: string;
  isPro: boolean;
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  streak: Streak | null;
  progress: UserProgress | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  upgradeToPro: () => Promise<void>;
  saveProgress: (completedTasks: number[]) => Promise<void>;
  updateSelections: (goal: string, niche: string) => Promise<void>;
  checkIn: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple hash function for passwords (in production, use proper hashing on backend)
function simpleHash(str: string): string {
  let hash: number = 0;
  for (let i = 0; i < str.length; i++) {
    const char: number = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}

export function SpacetimeAuthProvider({ children }: { children: ReactNode }) {
  const { connection, isConnected } = useSpacetime();
  const [user, setUser] = useState<User | null>(null);
  const [streak, setStreak] = useState<Streak | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Subscribe to user data changes
  useEffect(() => {
    if (!connection || !isConnected) return;

    const currentEmail = localStorage.getItem('currentUserEmail');
    if (!currentEmail) {
      setIsLoading(false);
      return;
    }

    // Subscribe to user table
    const userUpdateCallback = (_ctx: any, _oldRow: any, newRow: any) => {
      if (newRow.email === currentEmail) {
        setUser({
          email: newRow.email,
          isPro: newRow.isPro,
          createdAt: new Date(Number(newRow.createdAt.microsSinceUnixEpoch) / 1000)
        });
      }
    };
    connection.db.user.onUpdate(userUpdateCallback);

    // Subscribe to streak table
    const streakUpdateCallback = (_ctx: any, _oldRow: any, newRow: any) => {
      if (newRow.email === currentEmail) {
        setStreak(newRow);
      }
    };
    connection.db.streak.onUpdate(streakUpdateCallback);

    // Subscribe to progress table
    const progressUpdateCallback = (_ctx: any, _oldRow: any, newRow: any) => {
      if (newRow.email === currentEmail) {
        setProgress(newRow);
      }
    };
    connection.db.userProgress.onUpdate(progressUpdateCallback);

    // Load initial data
    connection.reducers.getUserData(currentEmail);

    // Get current data from cache
    const userData = connection.db.user.email.find(currentEmail);
    if (userData) {
      setUser({
        email: userData.email,
        isPro: userData.isPro,
        createdAt: new Date(Number(userData.createdAt.microsSinceUnixEpoch) / 1000)
      });
    }

    const streakData = connection.db.streak.email.find(currentEmail);
    if (streakData) {
      setStreak(streakData);
    }

    const progressData = connection.db.userProgress.email.find(currentEmail);
    if (progressData) {
      setProgress(progressData);
    }

    setIsLoading(false);

    return () => {
      connection.db.user.removeOnUpdate(userUpdateCallback);
      connection.db.streak.removeOnUpdate(streakUpdateCallback);
      connection.db.userProgress.removeOnUpdate(progressUpdateCallback);
    };
  }, [connection, isConnected]);

  const signup = async (email: string, password: string): Promise<boolean> => {
    if (!connection || !isConnected) {
      console.error('Not connected to SpacetimeDB');
      return false;
    }

    try {
      const passwordHash = simpleHash(password);
      connection.reducers.createUser(email, passwordHash);

      // Wait briefly for the database to process
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check if user was created
      const userData = connection.db.user.email.find(email);
      if (userData) {
        localStorage.setItem('currentUserEmail', email);
        setUser({
          email: userData.email,
          isPro: userData.isPro,
          createdAt: new Date(Number(userData.createdAt.microsSinceUnixEpoch) / 1000)
        });

        // Get streak and progress data
        connection.reducers.getUserData(email);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    if (!connection || !isConnected) {
      console.error('Not connected to SpacetimeDB');
      return false;
    }

    try {
      const passwordHash = simpleHash(password);
      connection.reducers.authenticateUser(email, passwordHash);

      // Wait briefly for authentication
      await new Promise(resolve => setTimeout(resolve, 500));

      const userData = connection.db.user.email.find(email);
      if (userData && userData.passwordHash === passwordHash) {
        localStorage.setItem('currentUserEmail', email);
        setUser({
          email: userData.email,
          isPro: userData.isPro,
          createdAt: new Date(Number(userData.createdAt.microsSinceUnixEpoch) / 1000)
        });

        // Get streak and progress data
        connection.reducers.getUserData(email);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = (): void => {
    localStorage.removeItem('currentUserEmail');
    setUser(null);
    setStreak(null);
    setProgress(null);
  };

  const upgradeToPro = async (): Promise<void> => {
    if (!connection || !user) return;
    connection.reducers.updateSubscription(user.email, true);
  };

  const saveProgress = async (completedTasks: number[]): Promise<void> => {
    if (!connection || !user) return;
    connection.reducers.saveProgress(user.email, completedTasks);
  };

  const checkIn = async (): Promise<void> => {
    if (!connection || !user) return;
    connection.reducers.checkIn(user.email);
  };

  const updateSelections = async (goal: string, niche: string): Promise<void> => {
    if (!connection || !user) return;
    connection.reducers.updateUserSelections(user.email, goal, niche);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      streak,
      progress,
      login, 
      signup, 
      logout, 
      upgradeToPro,
      saveProgress,
      updateSelections,
      checkIn,
      isAuthenticated: !!user,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useSpacetimeAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSpacetimeAuth must be used within SpacetimeAuthProvider');
  }
  return context;
}
