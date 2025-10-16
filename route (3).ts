import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailVerificationTemplate } from '@/components/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export async function POST(req: NextRequest) {
  try {
    const { email, token } = await req.json();
    
    if (!email || !token) {
      return NextResponse.json(
        { error: 'Email and token are required' },
        { status: 400 }
      );
    }

    const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/verify-email?token=${token}`;

    const { data, error } = await resend.emails.send({
      from: 'GrowthPilot <notifications@growth-pilot.com>',
      to: email,
      subject: 'Verify your email address',
      react: EmailVerificationTemplate({ email, verificationLink }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send verification email' },
      { status: 500 }
    );
  }
}
