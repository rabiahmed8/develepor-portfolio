import { NextResponse } from "next/server";
import { contactInfo } from "@/data/portfolioData";

const LIMITS = { name: 100, email: 200, message: 5000, need: 60, website: 300 };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

/** Returns a trimmed string no longer than `max`, or "" when the value isn't a usable string. */
const field = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field, bots do. Pretend it worked.
  if (field(body.company, 200)) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const name = field(body.name, LIMITS.name);
  const email = field(body.email, LIMITS.email);
  const message = field(body.message, LIMITS.message);
  const need = field(body.need, LIMITS.need);
  const website = field(body.website, LIMITS.website);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    // Never report success for a message that went nowhere.
    console.error("Contact form: RESEND_API_KEY is not set, message was not delivered.");
    return NextResponse.json({ error: "Messaging is not set up yet." }, { status: 503 });
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ...(need ? [["Needs", need]] : []),
    ...(website ? [["Website", website]] : []),
  ];
  const html =
    rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join("") +
    `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendApiKey}` },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.CONTACT_RECEIVER_EMAIL || contactInfo.email,
        reply_to: email,
        subject: need ? `New enquiry (${need}) from ${name}` : `New message from ${name} via portfolio`,
        html,
      }),
    });

    if (!response.ok) {
      console.error("Contact form: Resend rejected the message:", response.status, await response.text());
      return NextResponse.json({ error: "The message could not be sent." }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact form: could not reach Resend:", error);
    return NextResponse.json({ error: "The message could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ success: true, message: "Message sent." }, { status: 200 });
}
