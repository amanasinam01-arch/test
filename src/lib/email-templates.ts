export interface EmailData {
  userEmail: string;
  userName?: string;
}

export const userWelcomeEmail = (data: EmailData) => ({
  subject: "Welcome to TQN! 🎉",
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to TQN</title>
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
          <h1>Welcome to TQN! 🎉</h1>
          <p>Construction Law Made Simple</p>
        </div>
        <div class="content">
          <h2>Hello ${data.userEmail},</h2>
          
          <p>Thank you for joining the TQN waitlist!🎉</p>
          
          <p> We're excited to have you on board and can't wait to revolutionize how you handle construction law.</p>
        
          <p>Warm regards,<br>
          <strong>The TQN Team</strong></p>
        </div>
      </div>
    </body>
    </html>
  `,
  text: `
Welcome to TQN! 🎉

Hello ${data.userEmail},

Thank you for joining the TQN Join List. 🎉
We are happy to welcome you and will soon send you important information and updates via email.

Warm regards,
The TQN Team
  `
});

export const adminNotificationEmail = (data: EmailData) => ({
  subject: "New Waitlist Registration - TQN",
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
        <div class="content">
          <p>A new user has joined the waitlist!</p>
          
          <div class="info-box">
            <h3>Registration Details:</h3>
            <p><strong>Email:</strong> ${data.userEmail}</p>
          </div>
      </div>
    </body>
    </html>
  `,
  text: `
New Waitlist Registration - TQN

A new user has joined the TQN waitlist!

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
TQN System
  `
});
