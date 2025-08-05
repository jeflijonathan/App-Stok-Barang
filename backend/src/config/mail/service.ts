import { getMailerInstance } from "./mail";

export async function sendEmailWithHtml(
  to: string,
  subject: string,
  htmlContent: string
) {
  const { transporter, from } = getMailerInstance();

  await transporter.sendMail({
    from,
    to,
    subject,
    html: htmlContent,
  });
}
