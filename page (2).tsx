'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'success' | 'invalid'>('idle');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (!token) {
      setStatus('invalid');
      return;
    }

    // Verify the token
    const resetTokens = JSON.parse(localStorage.getItem('resetTokens') || '{}');
    const tokenData = resetTokens[token];

    if (!tokenData) {
      setStatus('invalid');
      return;
    }

    // Check if token is expired (1 hour)
    if (Date.now() > tokenData.expiry) {
      setStatus('invalid');
      delete resetTokens[token];
      localStorage.setItem('resetTokens', JSON.stringify(resetTokens));
      return;
    }

    setEmail(tokenData.email);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setError('');

    if (!password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const token = searchParams.get('token');
    if (!token) return;

    // Update password
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[email]) {
      users[email].password = password;
      localStorage.setItem('users', JSON.stringify(users));

      // Remove used token
      const resetTokens = JSON.parse(localStorage.getItem('resetTokens') || '{}');
      delete resetTokens[token];
      localStorage.setItem('resetTokens', JSON.stringify(resetTokens));

      setStatus('success');
    } else {
      setError('User not found');
    }
  };

  if (status === 'invalid') {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16 flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl">
            <CardContent className="p-8 text-center">
              <XCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h2 className="text-2xl font-bold mb-2">Invalid Link</h2>
              <p className="text-gray-400 mb-6">This password reset link is invalid or has expired.</p>
              <Button
                onClick={() => router.push('/')}
                className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
              >
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-8 pt-16 flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h2 className="text-2xl font-bold mb-2">Password Reset Successful!</h2>
              <p className="text-gray-400 mb-6">Your password has been updated successfully.</p>
              <Button
                onClick={() => router.push('/')}
                className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
              >
                Sign In
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
        <h1 className="text-4xl font-bold text-center mb-2">Reset Password</h1>
        <p className="text-gray-400 text-center mb-8">Enter your new password</p>

        <Card className="bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] rounded-2xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="password" className="text-white">New Password</Label>
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

              <div>
                <Label htmlFor="confirmPassword" className="text-white">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                    className="bg-[#1A1A1A] border-[rgba(255,255,255,0.12)] text-white mt-1 pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white h-12 text-lg rounded-xl"
              >
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
