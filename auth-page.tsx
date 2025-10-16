'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Mail } from 'lucide-react';

interface AuthPageProps {
  onSuccess: () => void;
}

export function AuthPage({ onSuccess }: AuthPageProps) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [showEmailSent, setShowEmailSent] = useState<boolean>(false);
  const { login, signup } = useAuth();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const success = isLogin ? login(email, password) : signup(email, password);

    if (success) {
      if (!isLogin) {
        // Send verification email for new signups
        sendVerificationEmail(email);
        setShowEmailSent(true);
        setTimeout(() => setShowEmailSent(false), 5000);
      }
      onSuccess();
    } else {
      setError(isLogin ? 'Invalid email or password' : 'Email already exists');
    }
  };

  const sendVerificationEmail = async (userEmail: string): Promise<void> => {
    // Generate verification token
    const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    const expiry = Date.now() + 86400000; // 24 hours

    // Store verification token
    const verificationTokens = JSON.parse(localStorage.getItem('verificationTokens') || '{}');
    verificationTokens[token] = { email: userEmail, expiry };
    localStorage.setItem('verificationTokens', JSON.stringify(verificationTokens));

    try {
      await fetch('/api/send-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, token }),
      });
    } catch (err) {
      console.error('Failed to send verification email:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16 flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-2">
          Welcome to GrowthPilot
        </h1>
        <p className="text-gray-400 text-center mb-8">
          {isLogin ? 'Sign in to continue your journey' : 'Create account to get started'}
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

              <div>
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    className="bg-[#1A1A1A] border-[rgba(255,255,255,0.12)] text-white mt-1 pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              {showEmailSent && (
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 p-3 rounded-lg">
                  <Mail size={16} />
                  <span>Verification email sent! Check your inbox.</span>
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => router.push('/forgot-password')}
                    className="text-sm text-[#1E66FF] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
                className="text-[#1E66FF] hover:underline"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-gray-500 text-sm text-center mt-6">
          {isLogin ? 'First 7 tasks are free for everyone' : 'Get 7 free starter tasks instantly'}
        </p>
      </div>
    </div>
  );
}
