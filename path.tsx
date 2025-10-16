'use client';

import { useState, useEffect } from 'react';
import type { Goal, Niche } from '@/types/path';
import { getPathData, getPathKey } from '@/lib/path-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckSquare, Square, Lock, Settings, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { UserMenu } from '@/components/user-menu';
import type { Progress as ProgressType } from '@/types/path';
import { PaywallModal } from '@/components/paywall-modal';
import { CompletionScreen } from '@/components/completion-screen';
import { NotificationService } from '@/services/notifications';
import { RecurringNotificationService } from '@/services/recurring-notifications';
import { useAuth } from '@/contexts/AuthContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface PathProps {
  goal: Goal;
  niche: Niche;
  isPro: boolean;
  onScaleUp?: (newGoal: Goal) => void;
  onBackToHome?: () => void;
}

export function Path({ goal, niche, isPro, onScaleUp, onBackToHome }: PathProps) {
  const pathData = getPathData(goal, niche);
  const pathKey = getPathKey(goal, niche);
  const { saveProgress, checkIn, user } = useAuth();
  
  // Make progress account-specific by including user email in the key
  const progressKey = user ? `path-progress-${user.email}` : 'path-progress';
  const [progress, setProgress] = useLocalStorage<ProgressType>(progressKey, {});
  const [showPaywall, setShowPaywall] = useState<boolean>(false);
  const [showCompletion, setShowCompletion] = useState<boolean>(false);
  const [viewingSet, setViewingSet] = useState<number>(0); // Which set the user is currently viewing

  const TASKS_PER_SET = 7;
  const FREE_SETS = 1; // Only first set (7 tasks) is free
  const TOTAL_SETS = 10;

  useEffect(() => {
    // Request notification permissions on mount
    NotificationService.requestPermission();
    
    // Listen for paywall open events from completion screen
    const handleOpenPaywall = (): void => {
      setShowPaywall(true);
      setShowCompletion(false);
    };
    
    window.addEventListener('openPaywall', handleOpenPaywall);
    
    return () => {
      window.removeEventListener('openPaywall', handleOpenPaywall);
    };
  }, []);

  if (!pathData) {
    return <div className="text-white">Path not found</div>;
  }

  // Initialize progress for 70 tasks if needed
  const stepProgress = progress[pathKey] || Array(70).fill(false);
  
  // Calculate total completed count
  const completedCount = stepProgress.filter((completed: boolean) => completed).length;
  
  // Determine which tasks to show based on viewingSet
  const startIndex = viewingSet * TASKS_PER_SET;
  const endIndex = Math.min(startIndex + TASKS_PER_SET, 70);
  const currentTasks = pathData.steps.slice(startIndex, endIndex);
  
  // Calculate progress within current viewing set
  const tasksInCurrentSet = stepProgress.slice(startIndex, endIndex);
  const completedInCurrentSet = tasksInCurrentSet.filter((completed: boolean) => completed).length;
  const progressPercent = Math.round((completedInCurrentSet / TASKS_PER_SET) * 100);
  const isSetComplete = completedInCurrentSet === TASKS_PER_SET && currentTasks.length === TASKS_PER_SET;

  useEffect(() => {
    if (isSetComplete && viewingSet < TOTAL_SETS - 1) {
      // Show completion for this set
      setShowCompletion(true);
    } else if (viewingSet === TOTAL_SETS - 1 && completedInCurrentSet === currentTasks.length) {
      // Show final completion
      setShowCompletion(true);
    }
  }, [isSetComplete, viewingSet, completedInCurrentSet, currentTasks.length]);

  const toggleStep = (localIndex: number): void => {
    const globalIndex = startIndex + localIndex;
    
    // Check if this set is locked (free users only get first set = 7 tasks)
    const setNumber = Math.floor(globalIndex / TASKS_PER_SET);
    if (setNumber >= FREE_SETS && !isPro) {
      setShowPaywall(true);
      return;
    }

    const newStepProgress = [...stepProgress];
    newStepProgress[globalIndex] = !newStepProgress[globalIndex];
    
    setProgress({
      ...progress,
      [pathKey]: newStepProgress
    });

    // Save progress to localStorage
    const completedIndices = newStepProgress
      .map((completed: boolean, index: number) => completed ? index : -1)
      .filter((index: number) => index !== -1);
    saveProgress(completedIndices);
    
    // Only track streaks and send notifications for Pro users
    if (isPro) {
      checkIn();

      // Schedule recurring notification reminders
      const newCompletedCount = newStepProgress.filter((c: boolean) => c).length;
      const incompleteTasks = 70 - newCompletedCount;
      if (incompleteTasks > 0) {
        RecurringNotificationService.scheduleRecurringReminders(incompleteTasks);
      } else {
        RecurringNotificationService.cancelAllReminders();
      }
    }
  };

  const resetChecklist = (): void => {
    const newProgress = { ...progress };
    delete newProgress[pathKey];
    setProgress(newProgress);
    setShowCompletion(false);
  };

  const handleScaleUp = (): void => {
    const nextGoal = goal === '$1k/mo' ? '$5k/mo' : goal === '$5k/mo' ? '$10k/mo' : null;
    if (nextGoal && onScaleUp) {
      onScaleUp(nextGoal as Goal);
      setShowCompletion(false);
    }
  };

  const handleStayHere = (): void => {
    if (onBackToHome) {
      onBackToHome();
    }
    setShowCompletion(false);
  };

  const handleReviewAgain = (): void => {
    resetChecklist();
    setShowCompletion(false);
  };

  const completeAll = (): void => {
    const newStepProgress = [...stepProgress];
    const maxTask = isPro ? 70 : (FREE_SETS * TASKS_PER_SET); // 70 for pro, 7 for free
    
    for (let i = 0; i < maxTask; i++) {
      newStepProgress[i] = true;
    }
    
    setProgress({
      ...progress,
      [pathKey]: newStepProgress
    });
  };

  // Navigation functions
  const goToPreviousSet = (): void => {
    if (viewingSet > 0) {
      setViewingSet(viewingSet - 1);
    }
  };

  const goToNextSet = (): void => {
    const nextSet = viewingSet + 1;
    // Free users can only view first set, pro users can view all
    if (nextSet < TOTAL_SETS) {
      if (!isPro && nextSet >= FREE_SETS) {
        setShowPaywall(true);
        return;
      }
      setViewingSet(nextSet);
    }
  };

  if (showCompletion) {
    const isFullyComplete = viewingSet === TOTAL_SETS - 1 && completedInCurrentSet === currentTasks.length;
    return (
      <CompletionScreen
        currentGoal={goal}
        currentSet={viewingSet + 1}
        totalSets={TOTAL_SETS}
        isFullyComplete={isFullyComplete}
        isPro={isPro}
        onScaleUp={handleScaleUp}
        onStayHere={handleStayHere}
        onReviewAgain={handleReviewAgain}
      />
    );
  }

  return (
    <>
      {/* User Menu (Hamburger) */}
      <UserMenu />
      
      <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16">
        <div className="max-w-2xl mx-auto">
        <Button
          onClick={onBackToHome}
          variant="ghost"
          className="mb-4 flex items-center gap-2 text-white hover:bg-[#2A2A2A] px-2"
          aria-label="Back to home"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </Button>

        <Badge 
          variant="secondary" 
          className="mb-4 bg-[#1E66FF] text-white hover:bg-[#1E66FF]/90 text-sm px-4 py-2"
        >
          {goal} · {niche}
        </Badge>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">
            Your path to {goal} in {niche}
          </h1>
          <Button
            onClick={onBackToHome}
            variant="ghost"
            className="flex items-center gap-2 text-white hover:bg-[#2A2A2A]"
            aria-label="Change goal or niche"
          >
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Change</span>
          </Button>
        </div>

        {isPro && (
          <div className="mb-4 bg-[#1E66FF]/10 border border-[#1E66FF]/30 rounded-lg p-3">
            <p className="text-sm text-white">
              ✨ Pro Member: All 70 tasks unlocked!
            </p>
          </div>
        )}

        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-white mb-2">
            <span>Set {viewingSet + 1} of {TOTAL_SETS}</span>
            <span>{completedCount} total tasks completed</span>
          </div>
        </div>

        {/* Set Navigation Buttons */}
        <div className="flex gap-3 mb-6">
          <Button
            onClick={goToPreviousSet}
            disabled={viewingSet === 0}
            variant="outline"
            className="flex-1 border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#2A2A2A] text-white h-12 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Previous Set
          </Button>
          <Button
            onClick={goToNextSet}
            disabled={viewingSet === TOTAL_SETS - 1}
            variant="outline"
            className="flex-1 border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#2A2A2A] text-white h-12 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next Set
            <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>

        <div className="mb-6 space-y-2">
          <div className="flex justify-between text-sm text-white">
            <span>{completedInCurrentSet} of {currentTasks.length} complete in this set</span>
            <span>{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} className="h-2 bg-[#2A2A2A]" />
        </div>

        <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl mb-6">
          <CardContent className="p-4 space-y-3">
            {currentTasks.map((step: string, localIndex: number) => {
              const globalIndex = startIndex + localIndex;
              const isCompleted = stepProgress[globalIndex];
              const setNumber = Math.floor(globalIndex / TASKS_PER_SET);
              const isLocked = setNumber >= FREE_SETS && !isPro;
              
              return (
                <button
                  key={globalIndex}
                  onClick={() => toggleStep(localIndex)}
                  className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors text-left ${
                    isLocked 
                      ? 'opacity-70 cursor-pointer hover:bg-[#333333]' 
                      : 'hover:bg-[#333333]'
                  }`}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {isLocked ? (
                      <Lock className="w-6 h-6 text-gray-500" />
                    ) : isCompleted ? (
                      <CheckSquare className="w-6 h-6 text-[#1E66FF]" />
                    ) : (
                      <Square className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <span 
                    className={`flex-1 ${
                      isCompleted && !isLocked
                        ? 'text-gray-500 line-through opacity-60' 
                        : isLocked
                        ? 'text-gray-400'
                        : 'text-white'
                    }`}
                  >
                    {isLocked ? '🔒 Upgrade to Premium to unlock this task' : step}
                  </span>
                </button>
              );
            })}
          </CardContent>
        </Card>

        <div className="flex gap-3 mb-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="outline"
                className="flex-1 border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#2A2A2A] text-white h-12 rounded-xl"
              >
                Complete All
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] text-white">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-white">Complete all tasks?</AlertDialogTitle>
                <AlertDialogDescription className="text-white">
                  This will mark all {isPro ? '70' : '7'} accessible tasks as complete.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#333333] text-white">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction 
                  onClick={completeAll}
                  className="bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white"
                >
                  Complete All
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="outline"
                className="flex-1 border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#2A2A2A] text-white h-12 rounded-xl"
              >
                Reset Checklist
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] text-white">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-white">Reset your progress?</AlertDialogTitle>
                <AlertDialogDescription className="text-white">
                  This will clear all checkmarks for this path. You can start fresh anytime.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#333333] text-white">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction 
                  onClick={resetChecklist}
                  className="bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white"
                >
                  Reset
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <PaywallModal isOpen={showPaywall} onClose={() => setShowPaywall(false)} />
      </div>
      </div>
    </>
  );
}
