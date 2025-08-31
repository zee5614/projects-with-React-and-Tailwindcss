// api/contact.js
import nodemailer from "nodemailer";

function required(v) {
  return typeof v === "string" && v.trim().length > 0;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body || {};

  if (!required(name) || !required(email) || !required(message)) {
    return res
      .status(400)
      .json({ ok: false, error: "name, email and message are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `Portfolio contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      replyTo: email,
    });

    return res
      .status(200)
      .json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error("❌ Email send error:", err);
    return res
      .status(500)
      .json({ ok: false, error: "Failed to send email" });
  }
}
