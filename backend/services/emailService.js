import { Resend } from "resend";
import dotenv from "dotenv";
import { email } from "zod";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (name, email, message) => {
  await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL,
    to: process.env.CONTACT_TO_EMAIL,
    subject: `Message from ${name}`,
    html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
  });
};