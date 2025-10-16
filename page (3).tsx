'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState<string>('Verifying your email...');

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (!token) {
      setStatus('error');
      setMessage('Invalid verification link');
      return;
    }

    // Verify the token
    const verificationTokens = JSON.parse(localStorage.getItem('verificationTokens') || '{}');
    const tokenData = verificationTokens[token];

    if (!tokenData) {
      setStatus('error');
      setMessage('Invalid or expired verification link');
      return;
    }

    // Check if token is expired (24 hours)
    if (Date.now() > tokenData.expiry) {
      setStatus('error');
      setMessage('Verification link has expired');
      delete verificationTokens[token];
      localStorage.setItem('verificationTokens', JSON.stringify(verificationTokens));
      return;
    }

    // Mark user as verified
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[tokenData.email]) {
      users[tokenData.email].emailVerified = true;
      localStorage.setItem('users', JSON.stringify(users));
      
      // Update current user if logged in
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (currentUser && currentUser.email === tokenData.email) {
        currentUser.emailVerified = true;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }

      // Remove used token
      delete verificationTokens[token];
      localStorage.setItem('verificationTokens', JSON.stringify(verificationTokens));

      setStatus('success');
      setMessage('Email verified successfully!');
    } else {
      setStatus('error');
      setMessage('User not found');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16 flex items-center justify-center">
      <div className="max-w-md w-full">
        <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl">
          <CardContent className="p-8 text-center">
            {status === 'verifying' && (
              <>
                <Loader2 className="w-16 h-16 mx-auto mb-4 animate-spin text-[#1E66FF]" />
                <h2 className="text-2xl font-bold mb-2">Verifying Email</h2>
                <p className="text-gray-400">{message}</p>
              </>
            )}

            {status === 'success' && (
              <>
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h2 className="text-2xl font-bold mb-2">Email Verified!</h2>
                <p className="text-gray-400 mb-6">{message}</p>
                <Button
                  onClick={() => router.push('/')}
                  className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
                >
                  Continue to GrowthPilot
                </Button>
              </>
            )}

            {status === 'error' && (
              <>
                <XCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
                <h2 className="text-2xl font-bold mb-2">Verification Failed</h2>
                <p className="text-gray-400 mb-6">{message}</p>
                <Button
                  onClick={() => router.push('/')}
                  className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
                >
                  Back to Home
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
