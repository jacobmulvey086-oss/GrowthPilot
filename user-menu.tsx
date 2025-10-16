'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, LogOut, Crown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { PaywallModal } from '@/components/paywall-modal';

export function UserMenu() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showPaywall, setShowPaywall] = useState<boolean>(false);

  const handleLogout = (): void => {
    logout();
    setIsOpen(false);
  };

  const handleManageSubscription = (): void => {
    if (user?.isPro) {
      // For Pro users - open Stripe customer portal
      window.open('https://billing.stripe.com/p/login/test_placeholder', '_blank');
    } else {
      // For free users - show upgrade modal
      setShowPaywall(true);
    }
    setIsOpen(false);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 right-4 z-50 text-white hover:bg-[#2A2A2A]"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="bg-[#2A2A2A] border-l border-[rgba(255,255,255,0.12)] text-white w-80"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="text-white text-xl">Account Settings</SheetTitle>
            <SheetDescription className="text-gray-400">
              {user?.email || 'Loading...'}
            </SheetDescription>
          </SheetHeader>

          <div className="mt-8 space-y-4">
            {/* Subscription Status */}
            <div className="bg-[#1A1A1A] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Crown className={`h-5 w-5 ${user?.isPro ? 'text-[#FFD700]' : 'text-gray-500'}`} />
                <h3 className="font-semibold text-white">
                  {user?.isPro ? 'Premium Member' : 'Free Plan'}
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                {user?.isPro 
                  ? 'You have access to all premium features' 
                  : 'Upgrade to unlock all features'}
              </p>
            </div>

            {/* Manage Subscription Button */}
            <Button
              onClick={handleManageSubscription}
              className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 rounded-xl"
            >
              {user?.isPro ? 'Manage Subscription' : 'Upgrade to Premium'}
            </Button>

            {/* Logout Button */}
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-[#333333] text-white h-12 rounded-xl"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Paywall Modal for Free Users */}
      {showPaywall && (
        <PaywallModal
          isOpen={showPaywall}
          onClose={() => setShowPaywall(false)}
        />
      )}
    </>
  );
}
