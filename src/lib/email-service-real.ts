import { userWelcomeEmail, adminNotificationEmail, EmailData } from './email-templates';
import nodemailer from 'nodemailer';

export interface EmailConfig {
  userEmail: string;
  adminEmail: string;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPassword: string;
}

export class RealEmailService {
  private config: EmailConfig;
  private transporter: nodemailer.Transporter;

  constructor(config: EmailConfig) {
    this.config = config;
    
    // Create transporter
    this.transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: config.smtpPort,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.smtpUser,
        pass: config.smtpPassword,
      },
    });
  }

  async sendWelcomeEmail(userEmail: string): Promise<{ success: boolean; error?: string }> {
    try {
      const emailData: EmailData = { userEmail };
      const email = userWelcomeEmail(emailData);
      
      const mailOptions = {
        from: `"DesignBell" <${this.config.smtpUser}>`,
        to: userEmail,
        subject: email.subject,
        text: email.text,
        html: email.html,
      };

      await this.transporter.sendMail(mailOptions);
      console.log('✅ Welcome email sent to:', userEmail);
      
      return { success: true };
    } catch (error) {
      console.error('❌ Error sending welcome email:', error);
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
      
      const mailOptions = {
        from: `"DesignBell System" <${this.config.smtpUser}>`,
        to: this.config.adminEmail,
        subject: email.subject,
        text: email.text,
        html: email.html,
      };

      await this.transporter.sendMail(mailOptions);
      console.log('✅ Admin notification sent to:', this.config.adminEmail);
      
      return { success: true };
    } catch (error) {
      console.error('❌ Error sending admin notification:', error);
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
export const getRealEmailConfig = (): EmailConfig => {
  return {
    userEmail: process.env.USER_EMAIL || 'user@example.com',
    adminEmail: process.env.ADMIN_EMAIL || 'admin@designbell.com',
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: parseInt(process.env.SMTP_PORT || '587'),
    smtpUser: process.env.SMTP_USER || '',
    smtpPassword: process.env.SMTP_PASSWORD || ''
  };
};

// Create real email service instance
export const realEmailService = new RealEmailService(getRealEmailConfig());
