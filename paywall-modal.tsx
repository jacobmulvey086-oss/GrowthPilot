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
import { Check, Lock } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaywallModal({ isOpen, onClose }: PaywallModalProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { upgradeToPro, user } = useAuth();

  const handleUpgrade = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user?.email || '' })
      });

      const data = await response.json();
      
      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url;
      } else {
        // Fallback for development
        upgradeToPro();
        onClose();
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      // Fallback for development
      upgradeToPro();
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] text-white max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#1E66FF] rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">Unlock All Tasks</DialogTitle>
          <DialogDescription className="text-gray-400 text-center">
            Upgrade to Premium to access all 70 tasks and complete your full path to success
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 my-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-[#1E66FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">Unlock all 70 tasks</p>
              <p className="text-sm text-gray-400">Complete 10 comprehensive sets of growth strategies</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-[#1E66FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">Access all 12 paths</p>
              <p className="text-sm text-gray-400">Try any income goal and business niche combination</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-[#1E66FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">Advanced strategies</p>
              <p className="text-sm text-gray-400">Learn scaling tactics that professionals use</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-[#1E66FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">Smart push notifications</p>
              <p className="text-sm text-gray-400">Get reminded every 2-3 hours to complete tasks</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-[#1E66FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">Daily streak tracking</p>
              <p className="text-sm text-gray-400">Build momentum with daily check-ins and streak rewards</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-[#1E66FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">Priority support</p>
              <p className="text-sm text-gray-400">Get help when you need it most</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-xl p-4 text-center mb-4">
          <p className="text-3xl font-bold text-[#1E66FF] mb-1">$10/month</p>
          <p className="text-sm text-gray-400">Cancel anytime, no strings attached</p>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2">
          <Button
            onClick={handleUpgrade}
            disabled={isLoading}
            className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
          >
            {isLoading ? 'Loading...' : 'Upgrade to Premium'}
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#333333] text-white h-12 rounded-xl"
          >
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
