export interface EmailData {
  userEmail: string;
  userName?: string;
}

export const userWelcomeEmail = (data: EmailData) => ({
  subject: "Welcome to DesignBell! 🎉",
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to DesignBell</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to DesignBell! 🎉</h1>
          <p>Construction Law Made Simple</p>
        </div>
        <div class="content">
          <h2>Hello ${data.userEmail},</h2>
          
          <p>Thank you for joining the DesignBell waitlist! We're excited to have you on board and can't wait to revolutionize how you handle construction law.</p>
          
          <p>As a founding member, you'll get:</p>
          <ul>
            <li>✅ <strong>Early access</strong> to our platform</li>
            <li>✅ <strong>Discounted pricing</strong> for life</li>
            <li>✅ <strong>Priority support</strong> from our team</li>
            <li>✅ <strong>Exclusive updates</strong> on our progress</li>
          </ul>
          
          <p>We'll be launching on <strong>September 25, 2025</strong>, and you'll be among the first to experience our AI-powered legal assistant built specifically for Aussie builders, subcontractors, and tradies.</p>
          
          <p>In the meantime, we'll keep you updated on our progress and send you valuable construction law tips and insights.</p>
          
          <p>Warm regards,<br>
          <strong>The DesignBell Team</strong></p>
        </div>
        <div class="footer">
          <p>DesignBell - Construction Law Made Simple</p>
          <p>Headquartered in Wyoming, US</p>
        </div>
      </div>
    </body>
    </html>
  `,
  text: `
Welcome to DesignBell! 🎉

Hello ${data.userEmail},

Thank you for joining the DesignBell waitlist! We're excited to have you on board and can't wait to revolutionize how you handle construction law.

As a founding member, you'll get:
✅ Early access to our platform
✅ Discounted pricing for life  
✅ Priority support from our team
✅ Exclusive updates on our progress

We'll be launching on September 25, 2025, and you'll be among the first to experience our AI-powered legal assistant built specifically for Aussie builders, subcontractors, and tradies.

In the meantime, we'll keep you updated on our progress and send you valuable construction law tips and insights.

Warm regards,
The DesignBell Team

DesignBell - Construction Law Made Simple
Headquartered in Wyoming, US
  `
});

export const adminNotificationEmail = (data: EmailData) => ({
  subject: "New Waitlist Registration - DesignBell",
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Waitlist Registration</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 5px; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-top: 10px; }
        .info-box { background: #e8f4fd; border-left: 4px solid #3498db; padding: 15px; margin: 15px 0; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🔔 New Waitlist Registration</h2>
        </div>
        <div class="content">
          <p>A new user has joined the DesignBell waitlist!</p>
          
          <div class="info-box">
            <h3>Registration Details:</h3>
            <p><strong>Email:</strong> ${data.userEmail}</p>
            <p><strong>Registration Time:</strong> ${new Date().toLocaleString('en-US', { 
              timeZone: 'UTC',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} UTC</p>
          </div>
          
          <p>This user will receive a welcome email and be added to our founding members list.</p>
          
          <p>You can view all waitlist registrations in your admin panel.</p>
          
          <p>Best regards,<br>
          <strong>DesignBell System</strong></p>
        </div>
        <div class="footer">
          <p>DesignBell Admin Notification</p>
        </div>
      </div>
    </body>
    </html>
  `,
  text: `
New Waitlist Registration - DesignBell

A new user has joined the DesignBell waitlist!

Registration Details:
Email: ${data.userEmail}
Registration Time: ${new Date().toLocaleString('en-US', { 
  timeZone: 'UTC',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})} UTC

This user will receive a welcome email and be added to our founding members list.

You can view all waitlist registrations in your admin panel.

Best regards,
DesignBell System
  `
});
