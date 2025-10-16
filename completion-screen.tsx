'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, TrendingUp, RotateCcw } from 'lucide-react';
import type { Goal } from '@/types/path';

interface CompletionScreenProps {
  currentGoal: Goal;
  currentSet: number;
  totalSets: number;
  isFullyComplete: boolean;
  isPro: boolean;
  onScaleUp: () => void;
  onStayHere: () => void;
  onReviewAgain: () => void;
}

export function CompletionScreen({ 
  currentGoal, 
  currentSet, 
  totalSets, 
  isFullyComplete,
  isPro,
  onScaleUp, 
  onStayHere,
  onReviewAgain 
}: CompletionScreenProps) {
  const nextGoal = currentGoal === '$1k/mo' ? '$5k/mo' : currentGoal === '$5k/mo' ? '$10k/mo' : null;
  const isFreeUserCompletingSet1 = !isPro && currentSet === 1;

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1E66FF] mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">
            {isFullyComplete ? 'Congratulations! 🎉' : isFreeUserCompletingSet1 ? 'Great Start! 🎯' : 'Great Progress! 🎯'}
          </h1>
          <p className="text-white text-lg">
            {isFullyComplete 
              ? `You've completed all 70 tasks for ${currentGoal}!`
              : isFreeUserCompletingSet1
              ? `You've completed your first 7 tasks!`
              : `You've completed Set ${currentSet} of ${totalSets}!`
            }
          </p>
        </div>

        <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl mb-6">
          <CardContent className="p-6 space-y-4">
            <p className="text-white">
              {isFullyComplete 
                ? "You've mastered all the strategies and are fully equipped to build and scale your business!"
                : isFreeUserCompletingSet1
                ? "You've taken the first crucial steps! Upgrade to Premium to unlock all 63 remaining advanced tasks and accelerate your journey to success."
                : "You're making excellent progress! Keep up the momentum and continue to the next set of tasks."
              }
            </p>

            {isFullyComplete && nextGoal && (
              <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[rgba(255,255,255,0.12)]">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#1E66FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Ready to scale higher?</h3>
                    <p className="text-sm text-gray-300">
                      Learn advanced strategies to reach {nextGoal} and beyond.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!isFullyComplete && isFreeUserCompletingSet1 && (
              <div className="bg-[#1E66FF]/10 rounded-lg p-4 border border-[#1E66FF]/30">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#1E66FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Unlock Premium Benefits</h3>
                    <ul className="text-sm text-gray-300 space-y-1 mt-2">
                      <li>✓ Access all 70 tasks (63 more advanced strategies)</li>
                      <li>✓ Complete step-by-step guidance</li>
                      <li>✓ AI chatbot support</li>
                      <li>✓ Only $10/month</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {!isFullyComplete && !isFreeUserCompletingSet1 && (
              <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[rgba(255,255,255,0.12)]">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#1E66FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Keep going!</h3>
                    <p className="text-sm text-gray-300">
                      You have {totalSets - currentSet} more sets to unlock even more advanced strategies.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-3">
          {isFullyComplete && nextGoal && (
            <Button
              onClick={onScaleUp}
              className="w-full h-14 text-lg font-semibold rounded-xl bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white"
            >
              Scale to {nextGoal} →
            </Button>
          )}

          {!isFullyComplete && isFreeUserCompletingSet1 && (
            <Button
              onClick={() => {
                const event = new CustomEvent('openPaywall');
                window.dispatchEvent(event);
              }}
              className="w-full h-14 text-lg font-semibold rounded-xl bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white"
            >
              Upgrade to Premium - $10/mo →
            </Button>
          )}
          {!isFullyComplete && !isFreeUserCompletingSet1 && (
            <Button
              onClick={onReviewAgain}
              className="w-full h-14 text-lg font-semibold rounded-xl bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white"
            >
              Continue to Next Set →
            </Button>
          )}

          <Button
            onClick={onReviewAgain}
            variant="outline"
            className="w-full h-12 rounded-xl border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#2A2A2A] text-white flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Review tasks again
          </Button>

          {isFullyComplete && (
            <Button
              onClick={onStayHere}
              variant="ghost"
              className="w-full h-12 rounded-xl text-gray-400 hover:text-white hover:bg-[#2A2A2A]"
            >
              Back to dashboard
            </Button>
          )}
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          {isFullyComplete 
            ? 'Remember: knowledge without action is just information. Start building today! 💪'
            : 'Take action on what you learned, then move forward! 💪'
          }
        </p>
      </div>
    </div>
  );
}
