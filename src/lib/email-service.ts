import { userWelcomeEmail, adminNotificationEmail, EmailData } from './email-templates';

export interface EmailConfig {
  userEmail: string;
  adminEmail: string;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPassword: string;
}

export class EmailService {
  private config: EmailConfig;

  constructor(config: EmailConfig) {
    this.config = config;
  }

  async sendWelcomeEmail(userEmail: string): Promise<{ success: boolean; error?: string }> {
    try {
      const emailData: EmailData = { userEmail };
      const email = userWelcomeEmail(emailData);
      
      // In production, you would use a real email service like:
      // - SendGrid
      // - Mailgun
      // - AWS SES
      // - Nodemailer with SMTP
      
      console.log('📧 Welcome email would be sent to:', userEmail);
      console.log('Subject:', email.subject);
      
      // For now, we'll just log the email content
      // In a real implementation, you would send the actual email here
      
      return { success: true };
    } catch (error) {
      console.error('Error sending welcome email:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async sendAdminNotification(userEmail: string): Promise<{ success: boolean; error?: string }> {
    try {
      const emailData: EmailData = { userEmail };
      const email = adminNotificationEmail(emailData);
      
      console.log('📧 Admin notification would be sent to:', this.config.adminEmail);
      console.log('Subject:', email.subject);
      console.log('New user email:', userEmail);
      
      // For now, we'll just log the email content
      // In a real implementation, you would send the actual email here
      
      return { success: true };
    } catch (error) {
      console.error('Error sending admin notification:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async sendWaitlistEmails(userEmail: string): Promise<{ 
    success: boolean; 
    userEmailSent: boolean; 
    adminEmailSent: boolean; 
    errors?: string[] 
  }> {
    const errors: string[] = [];
    
    // Send welcome email to user
    const userResult = await this.sendWelcomeEmail(userEmail);
    if (!userResult.success) {
      errors.push(`User email failed: ${userResult.error}`);
    }
    
    // Send notification to admin
    const adminResult = await this.sendAdminNotification(userEmail);
    if (!adminResult.success) {
      errors.push(`Admin email failed: ${adminResult.error}`);
    }
    
    return {
      success: userResult.success && adminResult.success,
      userEmailSent: userResult.success,
      adminEmailSent: adminResult.success,
      errors: errors.length > 0 ? errors : undefined
    };
  }
}

// Email service configuration
export const getEmailConfig = (): EmailConfig => {
  return {
    userEmail: process.env.USER_EMAIL || 'user@example.com',
    adminEmail: process.env.ADMIN_EMAIL || 'admin@designbell.com',
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: parseInt(process.env.SMTP_PORT || '587'),
    smtpUser: process.env.SMTP_USER || '',
    smtpPassword: process.env.SMTP_PASSWORD || ''
  };
};

// Create email service instance
export const emailService = new EmailService(getEmailConfig());
