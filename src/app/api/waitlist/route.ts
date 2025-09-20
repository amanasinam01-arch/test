import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/email-service';
import { realEmailService } from '@/lib/email-service-real';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Valid email is required' },
        { status: 400 }
      );
    }
    
    // Check if SMTP is configured
    const isSMTPConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASSWORD);
    
    // Use real email service if SMTP is configured, otherwise use mock service
    const emailServiceToUse = isSMTPConfigured ? realEmailService : emailService;
    
    // Send emails to both user and admin
    const result = await emailServiceToUse.sendWaitlistEmails(email);
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Welcome email sent! Check your inbox.',
        userEmailSent: result.userEmailSent,
        adminEmailSent: result.adminEmailSent
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to send emails',
        errors: result.errors
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
