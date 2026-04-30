import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, website } = body;

  // Honeypot: bots fill this, humans don't
  if (website) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
  }

  if (message.length > 2000) {
    return Response.json({ error: "Nachricht zu lang" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: `SingoTec Kontakt <${process.env.RESEND_FROM}>`,
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Fehler beim Senden. Bitte versuche es später erneut." }, { status: 500 });
  }
}
