import * as React from 'react';

interface EmailVerificationTemplateProps {
  email: string;
  verificationLink: string;
}

export function EmailVerificationTemplate({ email, verificationLink }: EmailVerificationTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#1E66FF' }}>Welcome to GrowthPilot!</h1>
      <p>Hi there,</p>
      <p>Thank you for signing up with <strong>{email}</strong>. Please verify your email address to get started.</p>
      <a 
        href={verificationLink} 
        style={{ 
          display: 'inline-block', 
          padding: '12px 24px', 
          backgroundColor: '#1E66FF', 
          color: '#ffffff', 
          textDecoration: 'none', 
          borderRadius: '8px',
          margin: '20px 0'
        }}
      >
        Verify Email Address
      </a>
      <p>Or copy and paste this link into your browser:</p>
      <p style={{ color: '#666', fontSize: '14px', wordBreak: 'break-all' }}>{verificationLink}</p>
      <p style={{ marginTop: '30px', color: '#999', fontSize: '12px' }}>
        This link will expire in 24 hours. If you didn't create an account, you can safely ignore this email.
      </p>
    </div>
  );
}

interface PasswordResetTemplateProps {
  email: string;
  resetLink: string;
}

export function PasswordResetTemplate({ email, resetLink }: PasswordResetTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#1E66FF' }}>Reset Your Password</h1>
      <p>Hi there,</p>
      <p>We received a request to reset the password for <strong>{email}</strong>.</p>
      <a 
        href={resetLink} 
        style={{ 
          display: 'inline-block', 
          padding: '12px 24px', 
          backgroundColor: '#1E66FF', 
          color: '#ffffff', 
          textDecoration: 'none', 
          borderRadius: '8px',
          margin: '20px 0'
        }}
      >
        Reset Password
      </a>
      <p>Or copy and paste this link into your browser:</p>
      <p style={{ color: '#666', fontSize: '14px', wordBreak: 'break-all' }}>{resetLink}</p>
      <p style={{ marginTop: '30px', color: '#999', fontSize: '12px' }}>
        This link will expire in 1 hour. If you didn't request a password reset, you can safely ignore this email.
      </p>
    </div>
  );
}
