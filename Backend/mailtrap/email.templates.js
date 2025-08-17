export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email - SecureFlow</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #e0e0e0; max-width: 600px; margin: 0 auto; padding: 0; background-color: #121212;">
  <div style="background: #1e1e1e; padding: 30px 20px; text-align: center; border-top: 4px solid #7b1fa2;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Verify Your Email</h1>
  </div>
  <div style="background-color: #1e1e1e; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); margin-bottom: 20px;">
    <p style="margin: 0 0 20px 0; color: #e0e0e0;">Hello,</p>
    <p style="margin: 0 0 20px 0; color: #e0e0e0;">Thank you for signing up to SecureFlow! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 36px; font-weight: 700; letter-spacing: 3px; color: #bb86fc; background: rgba(187, 134, 252, 0.1); padding: 15px 25px; border-radius: 8px; display: inline-block;">{verificationCode}</span>
    </div>
    <p style="margin: 0 0 15px 0; color: #e0e0e0;">Please enter this code on the verification page to complete your registration.</p>
    <p style="margin: 0 0 20px 0; color: #e0e0e0;">This code will expire in 15 minutes for security reasons.</p>
    <p style="margin: 0 0 25px 0; color: #e0e0e0;">If you didn't create an account with us, please ignore this email.</p>
    <p style="margin: 0; color: #e0e0e0;">Best regards,<br><strong>The SecureFlow Team</strong></p>
  </div>
  <div style="text-align: center; color: #9e9e9e; font-size: 12px; line-height: 1.5; padding: 20px 0;">
    <p style="margin: 0 0 5px 0;">This is an automated message, please do not reply to this email.</p>
    <p style="margin: 0;">&copy; ${new Date().getFullYear()} SecureFlow. All rights reserved.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful - SecureFlow</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container {
        width: 100% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #121212; color: #e0e0e0; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px; margin: 0 auto;">
    <!-- Header -->
    <tr>
      <td style="padding: 30px 20px; background: #1e1e1e; text-align: center; border-top: 4px solid #7b1fa2;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #ffffff;">Password Reset Successful</h1>
      </td>
    </tr>
    
    <!-- Main Content -->
    <tr>
      <td style="padding: 30px; background-color: #1e1e1e; border-radius: 0 0 8px 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
        <p style="margin: 0 0 20px 0;">Hello,</p>
        <p style="margin: 0 0 20px 0;">We're writing to confirm that your SecureFlow account password has been successfully reset.</p>
        
        <!-- Success Icon -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 30px auto;">
          <tr>
            <td style="background-color: #7b1fa2; width: 60px; height: 60px; border-radius: 50%; text-align: center; line-height: 60px; font-size: 30px; color: white;">
              ✓
            </td>
          </tr>
        </table>

        <!-- Security Notice -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: rgba(123, 31, 162, 0.1); border-left: 4px solid #7b1fa2; padding: 15px; margin: 25px 0; border-radius: 0 4px 4px 0;">
          <tr>
            <td>
              <p style="margin: 0 0 10px 0; font-weight: 600; display: flex; align-items: center;">
                <span style="color: #bb86fc; margin-right: 8px;">⚠️</span> Security Notice
              </p>
              <p style="margin: 0; font-size: 14px;">
                If you did not initiate this password reset, please contact our support team immediately at <a href="mailto:support@secureflow.app" style="color: #bb86fc; text-decoration: none;">support@secureflow.app</a>.
              </p>
            </td>
          </tr>
        </table>

        <!-- Security Tips -->
        <p style="margin: 0 0 15px 0; font-weight: 600;">For your security, we recommend that you:</p>
        <ul style="margin: 0 0 25px 0; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Use a strong, unique password</li>
          <li style="margin-bottom: 8px;">Enable two-factor authentication in your account settings</li>
          <li>Regularly update your password and never reuse old passwords</li>
        </ul>

        <p style="margin: 0 0 25px 0;">Thank you for helping us keep your account secure.</p>
        <p style="margin: 0;">Best regards,<br><strong>The SecureFlow Team</strong></p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 0; text-align: center; color: #9e9e9e; font-size: 12px; line-height: 1.5;">
        <p style="margin: 0 0 5px 0;">This is an automated message, please do not reply to this email.</p>
        <p style="margin: 0;">&copy; ${new Date().getFullYear()} SecureFlow. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password - SecureFlow</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #e0e0e0; max-width: 600px; margin: 0 auto; padding: 0; background-color: #121212;">
  <div style="background: #1e1e1e; padding: 30px 20px; text-align: center; border-top: 4px solid #7b1fa2;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Reset Your Password</h1>
  </div>
  <div style="background-color: #1e1e1e; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); margin-bottom: 20px;">
    <p style="margin: 0 0 20px 0; color: #e0e0e0;">Hello,</p>
    <p style="margin: 0 0 20px 0; color: #e0e0e0;">We received a request to reset your SecureFlow account password. If you didn't make this request, please ignore this email.</p>
    <p style="margin: 0 0 20px 0; color: #e0e0e0;">To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 35px 0;">
      <a href="{resetURL}" style="background: linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(123, 31, 162, 0.3); transition: all 0.3s ease;">
        Reset Password
      </a>
    </div>
    <div style="background-color: rgba(123, 31, 162, 0.1); border-left: 4px solid #7b1fa2; padding: 15px; margin: 25px 0; border-radius: 0 4px 4px 0;">
      <p style="margin: 0 0 10px 0; color: #e0e0e0; font-weight: 600; display: flex; align-items: center;">
        <span style="color: #bb86fc; margin-right: 8px;">🔒</span> Security Notice
      </p>
      <p style="margin: 0; color: #e0e0e0; font-size: 14px;">
        For your security, this link will expire in 1 hour. Never share your password or this link with anyone.
      </p>
    </div>
    <p style="margin: 0; color: #e0e0e0;">Best regards,<br><strong>The SecureFlow Team</strong></p>
  </div>
  <div style="text-align: center; color: #9e9e9e; font-size: 12px; line-height: 1.5; padding: 20px 0;">
    <p style="margin: 0 0 5px 0;">This is an automated message, please do not reply to this email.</p>
    <p style="margin: 0;">&copy; ${new Date().getFullYear()} SecureFlow. All rights reserved.</p>
  </div>
</body>
</html>
`;
