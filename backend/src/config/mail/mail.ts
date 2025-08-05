import nodemailer, { Transporter } from "nodemailer";

interface MailerConfig {
  transporter: Transporter;
  from: string;
}

let mailerInstance: MailerConfig | null = null;

export function initializeMailer() {
  console.log("===== Initialize Mailer =====");
  const confHost = process.env.MAILER_HOST;
  const confPort = parseInt(process.env.MAILER_PORT || "5343", 10);
  const email = process.env.MAILER_EMAIL;
  const password = process.env.MAILER_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "Mailer email and password must be set in environment variables"
    );
  }

  const transporter = nodemailer.createTransport({
    host: confHost,
    port: confPort,
    secure: false,
    auth: {
      user: email,
      pass: password,
    },
  });

  mailerInstance = {
    transporter,
    from: email,
  };
}

export function getMailerInstance(): MailerConfig {
  if (!mailerInstance) {
    throw new Error(
      "Mailer is not initialized. Please call initializeMailer first."
    );
  }
  return mailerInstance;
}
