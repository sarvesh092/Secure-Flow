import { MailtrapClient } from "mailtrap";
import "dotenv/config";

export const MailClient = new MailtrapClient({
  token: process.env.MAIL_TOKEN,
});

const senderMailID = "hello@demomailtrap.co";

export const sender = {
  email: senderMailID,
  name: "welcome to Secureflow",
};



