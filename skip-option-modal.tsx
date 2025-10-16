'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Goal } from '@/types/path';

interface SkipOptionModalProps {
  isOpen: boolean;
  currentGoal: Goal;
  onSkip: () => void;
  onKeepLearning: () => void;
}

export function SkipOptionModal({ 
  isOpen, 
  currentGoal,
  onSkip, 
  onKeepLearning 
}: SkipOptionModalProps) {
  const nextGoal = currentGoal === '$1k/mo' ? '$5k/mo' : '$10k/mo';

  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onKeepLearning()}>
      <DialogContent className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">
            Already making {currentGoal}?
          </DialogTitle>
          <DialogDescription className="text-gray-300 pt-2">
            If you're already generating {currentGoal} or feel comfortable with the basics, 
            you can skip ahead to more advanced strategies for {nextGoal}.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[rgba(255,255,255,0.12)]">
            <p className="text-sm text-gray-300">
              <strong className="text-white">Recommended if:</strong>
              <br />
              • You're already earning {currentGoal}
              <br />
              • You have working systems in place
              <br />
              • You're ready for advanced scaling tactics
            </p>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2">
          <Button
            onClick={onSkip}
            className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 rounded-xl"
          >
            Skip to {nextGoal} strategies →
          </Button>
          <Button
            onClick={onKeepLearning}
            variant="outline"
            className="w-full border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#333333] text-white h-12 rounded-xl"
          >
            Keep learning from the start
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
