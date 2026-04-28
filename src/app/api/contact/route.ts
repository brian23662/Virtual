import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy init — don't construct Resend at module load (breaks build without env var)
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

interface QuoteRequest {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  service: string;
  appointmentType?: string;
  date?: string;
  time?: string;
  duration?: string;
  videoPlatform?: string;
  details: string;
  // Honeypot
  website?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as QuoteRequest;

    // Honeypot — bots fill the hidden 'website' field
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    // Basic validation
    if (!body.name || !body.email || !body.service || !body.details) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const recipient = process.env.QUOTE_RECIPIENT_EMAIL || "info@virtualvri.com";
    const sender = process.env.RESEND_FROM_EMAIL || "Virtual VRI <onboarding@resend.dev>";

    const resend = getResend();
    if (!resend) {
      // Demo-friendly fallback so the form still gives feedback before keys are configured
      console.warn("[contact] RESEND_API_KEY missing — request received but not emailed:", body);
      return NextResponse.json({
        ok: true,
        demo: true,
        note: "Demo mode: form payload accepted but not emailed (no RESEND_API_KEY configured).",
      });
    }

    // Email to Linda / Melissa (the team)
    const internalHtml = `
      <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #252b2c; max-width: 600px; margin: 0 auto;">
        <div style="background: #462e66; color: #f4f6f6; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 0; font-size: 22px;">New Quote Request</h1>
          <p style="margin: 6px 0 0 0; color: #a2dfeb; font-size: 13px;">via virtualvri.com</p>
        </div>
        <div style="background: #f4f6f6; padding: 28px; border-radius: 0 0 12px 12px; border: 1px solid #bfbcc4;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: 600; width: 140px; vertical-align: top;">Name</td><td style="padding: 8px 0;">${escapeHtml(body.name)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Email</td><td style="padding: 8px 0;"><a href="mailto:${encodeURIComponent(body.email)}">${escapeHtml(body.email)}</a></td></tr>
            ${body.phone ? `<tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Phone</td><td style="padding: 8px 0;">${escapeHtml(body.phone)}</td></tr>` : ""}
            ${body.organization ? `<tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Organization</td><td style="padding: 8px 0;">${escapeHtml(body.organization)}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Service</td><td style="padding: 8px 0;">${escapeHtml(body.service)}</td></tr>
            ${body.appointmentType ? `<tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Type</td><td style="padding: 8px 0;">${escapeHtml(body.appointmentType)}</td></tr>` : ""}
            ${body.date ? `<tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Date</td><td style="padding: 8px 0;">${escapeHtml(body.date)}</td></tr>` : ""}
            ${body.time ? `<tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Time</td><td style="padding: 8px 0;">${escapeHtml(body.time)}</td></tr>` : ""}
            ${body.duration ? `<tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Duration</td><td style="padding: 8px 0;">${escapeHtml(body.duration)}</td></tr>` : ""}
            ${body.videoPlatform ? `<tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Platform</td><td style="padding: 8px 0;">${escapeHtml(body.videoPlatform)}</td></tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #bfbcc4;">
            <p style="font-weight: 600; margin: 0 0 8px 0;">Details</p>
            <p style="white-space: pre-wrap; line-height: 1.6; margin: 0;">${escapeHtml(body.details)}</p>
          </div>
        </div>
      </div>
    `;

    // Confirmation email to the requester
    const confirmHtml = `
      <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #252b2c; max-width: 600px; margin: 0 auto;">
        <div style="background: #462e66; color: #f4f6f6; padding: 28px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 600;">We received your request</h1>
          <p style="margin: 10px 0 0 0; color: #a2dfeb; font-size: 14px;">Virtual VRI · Video Remote Interpreting</p>
        </div>
        <div style="background: #f4f6f6; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #bfbcc4;">
          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">Hi ${escapeHtml(body.name.split(" ")[0])},</p>
          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
            Thank you for reaching out. We'll review your request and get back to you within
            <strong>2 business hours</strong>.
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
            If your need is urgent, please call us at
            <a href="tel:8664409140" style="color: #14accc; font-weight: 600;">866-440-9140</a>.
          </p>
          <div style="background: white; border-radius: 8px; padding: 20px; border-left: 4px solid #14accc;">
            <p style="margin: 0 0 6px 0; font-size: 13px; color: #6f627c; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Your request</p>
            <p style="margin: 0; font-size: 15px;"><strong>Service:</strong> ${escapeHtml(body.service)}</p>
            ${body.date ? `<p style="margin: 4px 0 0 0; font-size: 15px;"><strong>Date:</strong> ${escapeHtml(body.date)} ${body.time ? "at " + escapeHtml(body.time) : ""}</p>` : ""}
          </div>
          <p style="font-size: 14px; color: #6f627c; line-height: 1.6; margin: 28px 0 0 0;">
            — Linda &amp; the Virtual VRI team
          </p>
        </div>
      </div>
    `;

    // Send both emails in parallel
    const [internal, confirm] = await Promise.allSettled([
      resend.emails.send({
        from: sender,
        to: recipient,
        replyTo: body.email,
        subject: `New quote request — ${body.service} (${body.name})`,
        html: internalHtml,
      }),
      resend.emails.send({
        from: sender,
        to: body.email,
        subject: "We received your Virtual VRI request",
        html: confirmHtml,
      }),
    ]);

    // Log failures but still return success to the user if at least the internal one went through
    if (internal.status === "rejected") {
      console.error("Internal email failed:", internal.reason);
      return NextResponse.json(
        { error: "We couldn't send your request. Please call 866-440-9140." },
        { status: 500 }
      );
    }
    if (confirm.status === "rejected") {
      console.error("Confirmation email failed:", confirm.reason);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote request error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please call 866-440-9140 for help." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
