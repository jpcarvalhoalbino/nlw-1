import nodemailer from "nodemailer";
import { MailProvider, SendMailData } from "./mail-provider";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b9f12e32b5c49f",
    pass: "458c16af72e2fd"
  }
});
export class NodemailerMailProvider implements MailProvider {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <no-reply@gmail.com>",
      to: "João Pedro <jpcalbino2002@gmail.com>",
      subject,
      html: body,
    });
  }
}
