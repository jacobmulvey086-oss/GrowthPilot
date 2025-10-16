'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Goal, Niche } from '@/types/path';
import { GOALS, NICHES } from '@/lib/path-data';
import { CapitalCheck } from '@/components/capital-check';
import { Path } from '@/components/path';
import { AuthPage } from '@/components/auth-page';
import { AIChatbot } from '@/components/ai-chatbot';
import { useAuth } from '@/contexts/AuthContext';
import { StreakDisplay } from '@/components/streak-display';
import { UserMenu } from '@/components/user-menu';
import { sdk } from "@farcaster/miniapp-sdk";

type Screen = 'auth' | 'home' | 'capital-check' | 'path';

export default function Home() {
  const { isAuthenticated, user, streak, progress, updateSelections, isLoading } = useAuth();
  
  useEffect(() => {
    const initializeFarcaster = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (document.readyState !== 'complete') {
          await new Promise(resolve => {
            if (document.readyState === 'complete') {
              resolve(void 0);
            } else {
              window.addEventListener('load', () => resolve(void 0), { once: true });
            }
          });
        }

        await sdk.actions.ready();
        console.log("Farcaster SDK initialized successfully - app fully loaded");
      } catch (error) {
        console.error('Failed to initialize Farcaster SDK:', error);
        setTimeout(async () => {
          try {
            await sdk.actions.ready();
            console.log('Farcaster SDK initialized on retry');
          } catch (retryError) {
            console.error('Farcaster SDK retry failed:', retryError);
          }
        }, 1000);
      }
    };
    initializeFarcaster();
  }, []);

  const [screen, setScreen] = useState<Screen>('auth');
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [selectedNiche, setSelectedNiche] = useState<Niche | null>(null);

  const [hasInitialized, setHasInitialized] = useState<boolean>(false);

  // Smart Navigation: When user is authenticated, check if they have previous selections
  useEffect(() => {
    if (!isLoading && isAuthenticated && !hasInitialized) {
      // Check if user has previously selected a goal and niche
      if (progress && progress.currentGoal && progress.niche) {
        // Load their previous selections
        setSelectedGoal(progress.currentGoal as Goal);
        setSelectedNiche(progress.niche as Niche);
        
        // Skip directly to their checklist (path screen)
        setScreen('path');
      } else {
        // New user or no selections yet - show the home screen to choose
        setScreen('home');
      }
      setHasInitialized(true);
    } else if (!isAuthenticated && !isLoading) {
      // Not authenticated - show auth screen
      setScreen('auth');
      setHasInitialized(false);
    }
  }, [isAuthenticated, progress, isLoading, hasInitialized]);

  // Handle logout - navigate to auth screen when user logs out
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      setScreen('auth');
      setSelectedGoal(null);
      setSelectedNiche(null);
    }
  }, [isAuthenticated, isLoading]);

  const canProceed = selectedGoal !== null && selectedNiche !== null;

  const handleGetPath = (): void => {
    if (canProceed) {
      // Save selections when user clicks Get Path
      if (selectedGoal && selectedNiche) {
        updateSelections(selectedGoal, selectedNiche);
      }
      setScreen('capital-check');
    }
  };

  const handleBack = (): void => {
    setScreen('home');
  };

  const handleContinue = (): void => {
    setScreen('path');
  };

  const handleAuthSuccess = (): void => {
    setScreen('home');
  };

  const handleScaleUp = (newGoal: Goal): void => {
    setSelectedGoal(newGoal);
    setScreen('capital-check');
  };

  const handleBackToHome = (): void => {
    setScreen('home');
  };

  const handleSkipToAdvanced = (): void => {
    const nextGoal = selectedGoal === '$1k/mo' ? '$5k/mo' : '$10k/mo';
    setSelectedGoal(nextGoal as Goal);
    setScreen('path');
  };

  if (screen === 'auth') {
    return <AuthPage onSuccess={handleAuthSuccess} />;
  }

  if (screen === 'capital-check' && selectedGoal && selectedNiche) {
    return (
      <>
        <CapitalCheck
          goal={selectedGoal}
          niche={selectedNiche}
          onBack={handleBack}
          onContinue={handleContinue}
          onSkipToAdvanced={handleSkipToAdvanced}
        />
        <AIChatbot goal={selectedGoal} niche={selectedNiche} />
      </>
    );
  }

  if (screen === 'path' && selectedGoal && selectedNiche) {
    return (
      <>
        <Path 
          goal={selectedGoal} 
          niche={selectedNiche}
          isPro={user?.isPro || false}
          onScaleUp={handleScaleUp}
          onBackToHome={handleBackToHome}
        />
        <AIChatbot goal={selectedGoal} niche={selectedNiche} />
      </>
    );
  }

  return (
    <>
      {/* User Menu (Hamburger) */}
      {isAuthenticated && <UserMenu />}
      
      <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16">
        <div className="max-w-2xl mx-auto">
          {/* Show streak only for Pro users */}
          {isAuthenticated && user?.isPro && streak && streak.currentStreak > 0 && (
            <div className="mb-6">
              <StreakDisplay streak={streak} />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight text-white">
            Find your direction to $10k a month
          </h1>

          <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl mb-6">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>Choose your income goal</h2>
                <div className="grid grid-cols-3 gap-3">
                  {GOALS.map((goal: Goal) => (
                    <Button
                      key={goal}
                      onClick={() => setSelectedGoal(goal)}
                      variant={selectedGoal === goal ? 'default' : 'outline'}
                      className={`h-14 text-lg rounded-xl font-semibold ${
                        selectedGoal === goal
                          ? 'bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white'
                          : 'border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#333333] text-white'
                      }`}
                    >
                      {goal}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[rgba(255,255,255,0.12)]" />

              <div>
                <h2 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>Choose your niche</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {NICHES.map((niche: Niche) => (
                    <Button
                      key={niche}
                      onClick={() => setSelectedNiche(niche)}
                      variant={selectedNiche === niche ? 'default' : 'outline'}
                      className={`h-14 text-base rounded-xl font-semibold ${
                        selectedNiche === niche
                          ? 'bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white'
                          : 'border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#333333] text-white'
                      }`}
                    >
                      {niche}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={handleGetPath}
            disabled={!canProceed}
            className={`w-full h-14 text-lg font-semibold rounded-xl ${
              canProceed
                ? 'bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white'
                : 'bg-[#2A2A2A] text-gray-500 cursor-not-allowed'
            }`}
          >
            GET PATH
          </Button>

          {!canProceed && (
            <p className="text-center text-white text-sm mt-4">
              Select both goal and niche to continue
            </p>
          )}
        </div>
      </div>
      <AIChatbot />
    </>
  );
}
