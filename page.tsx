'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail } from 'lucide-react';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email) {
      setError('Please enter your email address');
      setIsLoading(false);
      return;
    }

    // Generate reset token
    const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    const expiry = Date.now() + 3600000; // 1 hour

    // Store reset token
    const resetTokens = JSON.parse(localStorage.getItem('resetTokens') || '{}');
    resetTokens[token] = { email, expiry };
    localStorage.setItem('resetTokens', JSON.stringify(resetTokens));

    try {
      // Send reset email
      const response = await fetch('/api/send-reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reset email');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16 flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl">
            <CardContent className="p-8 text-center">
              <Mail className="w-16 h-16 mx-auto mb-4 text-[#1E66FF]" />
              <h2 className="text-2xl font-bold mb-2">Check Your Email</h2>
              <p className="text-gray-400 mb-6">
                If an account exists for {email}, you will receive a password reset link shortly.
              </p>
              <Button
                onClick={() => router.push('/')}
                className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
              >
                Back to Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16 flex items-center justify-center">
      <div className="max-w-md w-full">
        <button
          onClick={() => router.push('/')}
          className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Sign In
        </button>

        <h1 className="text-4xl font-bold text-center mb-2">Forgot Password</h1>
        <p className="text-gray-400 text-center mb-8">
          Enter your email and we'll send you a reset link
        </p>

        <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="bg-[#1A1A1A] border-[rgba(255,255,255,0.12)] text-white mt-1"
                  placeholder="your@email.com"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
