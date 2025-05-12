import { MailClient, sender } from "./mailtrap.config.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./email.templates.js";

export const sendVerificationMail = async (email, verificationCode) => {
  const recipient = [{ email }];

  try {
    const response = await MailClient.send({
      from: sender,
      to: recipient,
      subject: "verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationCode
      ),
      category: "Email verification",
    });
    console.log("Email sent successfully!!", response);
  } catch (error) {
    console.error("Failed to send verification email");
    throw new Error(`Error while sending mail ${error}`);
  }
};
export const welcomeEmail = async (username, email) => {
  const recipient = [{ email }];
  console.log("emy", email);

  try {
    await MailClient.send({
      from: sender,
      to: recipient,
      template_uuid: "01924f52-1de1-4956-abc3-ec119f5bc86f",
      template_variables: {
        company_info_name: "Secureflow",
        name: username,
        company_info_address: "delhi india",
        company_info_city: "Delhi",
        company_info_zip_code: "5689930",
        company_info_country: "India",
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
export const sendResetPasswordMail = async (email, link) => {
  const recipient = [{ email }];
  try {
    await MailClient.send({
      from: sender,
      to: recipient,
      subject: "reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", link),
      category: "Password Reset",
    });
  } catch (error) {
    console.error("Failed to send reset password email");
    throw new Error(`Error while sending mail ${error}`);
  }
};
export const sendPasswordChangedsuccessfully = async (email) => {
  const recipient = [{ email }];
  try {
    await MailClient.send({
      from: sender,
      to: recipient,
      subject: "password reset succesfully",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Success Password Reset",
    });
  } catch (error) {
    throw new Error(`Error while sending mail ${error}`);
  }
};
