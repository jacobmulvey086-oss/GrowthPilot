'use client';

import { Card, CardContent } from '@/components/ui/card';

interface Streak {
  currentStreak: number;
  longestStreak: number;
  lastCheckIn: string | null;
}

interface StreakDisplayProps {
  streak: Streak | null;
}

export function StreakDisplay({ streak }: StreakDisplayProps) {
  if (!streak) return null;

  const currentStreak = streak.currentStreak;
  const longestStreak = streak.longestStreak;

  return (
    <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-none">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🔥</div>
          <div>
            <div className="text-white text-2xl font-bold">{currentStreak} Day{currentStreak !== 1 ? 's' : ''}</div>
            <div className="text-white/80 text-sm">Current Streak</div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-white text-xl font-semibold">{longestStreak}</div>
          <div className="text-white/80 text-xs">Best Streak</div>
        </div>
      </CardContent>
    </Card>
  );
}
