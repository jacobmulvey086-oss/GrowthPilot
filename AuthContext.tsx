'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  email: string;
  isPro: boolean;
  createdAt: string;
  emailVerified?: boolean;
}

interface Streak {
  currentStreak: number;
  longestStreak: number;
  lastCheckIn: string | null;
}

interface UserProgress {
  currentGoal: string | null;
  niche: string | null;
  completedTasks: number[];
}

interface AuthContextType {
  user: User | null;
  streak: Streak | null;
  progress: UserProgress | null;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string) => boolean;
  logout: () => void;
  upgradeToPro: () => void;
  saveProgress: (completedTasks: number[]) => void;
  updateSelections: (goal: string, niche: string) => void;
  checkIn: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [streak, setStreak] = useState<Streak | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      
      // Load streak data
      const storedStreak = localStorage.getItem(`streak_${userData.email}`);
      if (storedStreak) {
        setStreak(JSON.parse(storedStreak));
      } else {
        setStreak({
          currentStreak: 0,
          longestStreak: 0,
          lastCheckIn: null
        });
      }
      
      // Load progress data
      const storedProgress = localStorage.getItem(`progress_${userData.email}`);
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress));
      } else {
        setProgress({
          currentGoal: null,
          niche: null,
          completedTasks: []
        });
      }
    }
    setIsLoading(false);
  }, []);

  const signup = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[email]) {
      return false;
    }

    const newUser: User = {
      email,
      isPro: false,
      createdAt: new Date().toISOString(),
      emailVerified: false
    };

    users[email] = {
      ...newUser,
      password
    };

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setUser(newUser);
    
    // Initialize streak
    const initialStreak: Streak = {
      currentStreak: 0,
      longestStreak: 0,
      lastCheckIn: null
    };
    localStorage.setItem(`streak_${email}`, JSON.stringify(initialStreak));
    setStreak(initialStreak);
    
    // Initialize progress
    const initialProgress: UserProgress = {
      currentGoal: null,
      niche: null,
      completedTasks: []
    };
    localStorage.setItem(`progress_${email}`, JSON.stringify(initialProgress));
    setProgress(initialProgress);
    
    return true;
  };

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userData = users[email];

    if (userData && userData.password === password) {
      const user: User = {
        email: userData.email,
        isPro: userData.isPro || false,
        createdAt: userData.createdAt,
        emailVerified: userData.emailVerified || false
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      setUser(user);
      
      // Load streak data
      const storedStreak = localStorage.getItem(`streak_${email}`);
      if (storedStreak) {
        setStreak(JSON.parse(storedStreak));
      } else {
        const initialStreak: Streak = {
          currentStreak: 0,
          longestStreak: 0,
          lastCheckIn: null
        };
        localStorage.setItem(`streak_${email}`, JSON.stringify(initialStreak));
        setStreak(initialStreak);
      }
      
      // Load progress data
      const storedProgress = localStorage.getItem(`progress_${email}`);
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress));
      } else {
        const initialProgress: UserProgress = {
          currentGoal: null,
          niche: null,
          completedTasks: []
        };
        localStorage.setItem(`progress_${email}`, JSON.stringify(initialProgress));
        setProgress(initialProgress);
      }
      
      return true;
    }
    return false;
  };

  const logout = (): void => {
    localStorage.removeItem('currentUser');
    setUser(null);
    setStreak(null);
    setProgress(null);
  };

  const upgradeToPro = (): void => {
    if (user) {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      const updatedUser = { ...user, isPro: true };
      
      users[user.email] = { ...users[user.email], isPro: true };
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  const saveProgress = (completedTasks: number[]): void => {
    if (!user || !progress) return;
    
    const updatedProgress: UserProgress = {
      ...progress,
      completedTasks
    };
    
    localStorage.setItem(`progress_${user.email}`, JSON.stringify(updatedProgress));
    setProgress(updatedProgress);
  };

  const updateSelections = (goal: string, niche: string): void => {
    if (!user || !progress) return;
    
    const updatedProgress: UserProgress = {
      ...progress,
      currentGoal: goal,
      niche
    };
    
    localStorage.setItem(`progress_${user.email}`, JSON.stringify(updatedProgress));
    setProgress(updatedProgress);
  };

  const checkIn = (): void => {
    if (!user || !streak) return;
    
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    
    if (streak.lastCheckIn === today) {
      // Already checked in today
      return;
    }
    
    const lastCheckIn = streak.lastCheckIn ? new Date(streak.lastCheckIn) : null;
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    let newStreak = streak.currentStreak;
    
    if (!lastCheckIn) {
      // First check-in
      newStreak = 1;
    } else if (streak.lastCheckIn === yesterdayStr) {
      // Checked in yesterday, continue streak
      newStreak = streak.currentStreak + 1;
    } else {
      // Streak broken, start over
      newStreak = 1;
    }
    
    const updatedStreak: Streak = {
      currentStreak: newStreak,
      longestStreak: Math.max(newStreak, streak.longestStreak),
      lastCheckIn: today
    };
    
    localStorage.setItem(`streak_${user.email}`, JSON.stringify(updatedStreak));
    setStreak(updatedStreak);
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

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
