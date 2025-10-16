'use client';

import { useState } from 'react';
import type { Goal, Niche } from '@/types/path';
import { getPathData } from '@/lib/path-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Info } from 'lucide-react';
import { SkipOptionModal } from '@/components/skip-option-modal';

interface CapitalCheckProps {
  goal: Goal;
  niche: Niche;
  onBack: () => void;
  onContinue: () => void;
  onSkipToAdvanced?: () => void;
}

export function CapitalCheck({ goal, niche, onBack, onContinue, onSkipToAdvanced }: CapitalCheckProps) {
  const pathData = getPathData(goal, niche);
  const [showSkipModal, setShowSkipModal] = useState<boolean>(false);

  // Only show skip option if not already at highest tier
  const canSkip = goal === '$1k/mo' || goal === '$5k/mo';

  if (!pathData) {
    return <div className="text-white">Path not found</div>;
  }

  const handleSkip = (): void => {
    setShowSkipModal(false);
    if (onSkipToAdvanced) {
      onSkipToAdvanced();
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16">
      <div className="max-w-2xl mx-auto">
        {/* Back button at top */}
        <Button 
          onClick={onBack}
          variant="ghost"
          className="mb-4 hover:bg-[#2A2A2A] text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Badge 
          variant="secondary" 
          className="mb-6 bg-[#1E66FF] text-white hover:bg-[#1E66FF]/90 text-sm px-4 py-2"
        >
          Goal: {goal}
        </Badge>

        <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl">
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-white">Recommended starting capital:</h2>
              <p className="text-3xl font-bold text-[#1E66FF]">{pathData.capital.range}</p>
            </div>

            <div className="h-px bg-[rgba(255,255,255,0.12)]" />

            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">What you will use it for</h3>
              <ul className="space-y-2">
                {pathData.capital.uses.map((use: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#1E66FF] mt-1">•</span>
                    <span className="text-white">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 text-sm text-white">
              <Info className="w-4 h-4" />
              <span>This ensures the highest chance of success</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3 mt-6">
          <Button 
            onClick={onContinue}
            className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
          >
            I have this
          </Button>
          
          {canSkip && (
            <Button 
              onClick={() => setShowSkipModal(true)}
              variant="outline"
              className="w-full border-[#1E66FF] bg-transparent hover:bg-[#1E66FF]/10 text-[#1E66FF] h-12 text-lg rounded-xl"
            >
              Already making {goal}? Skip ahead →
            </Button>
          )}

          <Button 
            onClick={onBack}
            variant="outline"
            className="w-full border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#2A2A2A] text-white h-12 text-lg rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to goals
          </Button>
        </div>
      </div>

      {canSkip && (
        <SkipOptionModal
          isOpen={showSkipModal}
          currentGoal={goal}
          onSkip={handleSkip}
          onKeepLearning={() => setShowSkipModal(false)}
        />
      )}
    </div>
  );
}
