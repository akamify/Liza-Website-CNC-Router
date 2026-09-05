import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "enquiries.json");
const RESEND_API_URL = "https://api.resend.com/emails";

function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload) {
  const fullName = normalizeString(payload.fullName);
  const phone = normalizeString(payload.phone);
  const email = normalizeString(payload.email);
  const machineType = normalizeString(payload.machineType);
  const message = normalizeString(payload.message);
  const phoneDigits = phone.replace(/\D/g, "");

  if (fullName.length < 2) {
    return "Full name is required.";
  }

  if (phoneDigits.length < 7) {
    return "A valid phone number is required.";
  }

  if (!email) {
    return "Email address is required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!machineType) {
    return "Machine type is required.";
  }

  if (message.length < 10) {
    return "Requirement details are too short.";
  }

  return null;
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const ownerEmail = process.env.ENQUIRY_OWNER_EMAIL;

  if (!apiKey || !fromEmail || !ownerEmail) {
    throw new Error(
      "Email service is not configured. Please set RESEND_API_KEY, RESEND_FROM_EMAIL, and ENQUIRY_OWNER_EMAIL."
    );
  }

  return {
    apiKey,
    fromEmail,
    ownerEmail,
  };
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function enquiryRows(enquiry) {
  return [
    ["Reference ID", enquiry.referenceId],
    ["Submitted At", enquiry.submittedAt],
    ["Full Name", enquiry.fullName],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
    ["Company / Workshop", enquiry.company || "-"],
    ["City", enquiry.city || "-"],
    ["Machine Type", enquiry.machineType],
    ["Material / Application", enquiry.material || "-"],
    ["Requirement Details", enquiry.message],
  ];
}

function buildOwnerEmail(enquiry) {
  const rows = enquiryRows(enquiry)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #d9e2ec;font-weight:700;color:#0f172a;background:#f8fafc;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #d9e2ec;color:#1e293b;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.55;color:#0f172a;">
      <h2 style="margin:0 0 12px;">New CNC Enquiry Received</h2>
      <p style="margin:0 0 18px;">A customer submitted an enquiry from the LIZA CNC website.</p>
      <table style="width:100%;max-width:720px;border-collapse:collapse;font-size:14px;">${rows}</table>
    </div>`;
}

function buildCustomerEmail(enquiry) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;">
      <h2 style="margin:0 0 12px;">Thank you for contacting LIZA CNC</h2>
      <p style="margin:0 0 14px;">Hello ${escapeHtml(enquiry.fullName)},</p>
      <p style="margin:0 0 14px;">We have received your CNC machine enquiry. Our team will review your requirement and contact you soon.</p>
      <p style="margin:0 0 14px;"><strong>Reference ID:</strong> ${escapeHtml(enquiry.referenceId)}</p>
      <p style="margin:0 0 14px;"><strong>Machine Type:</strong> ${escapeHtml(enquiry.machineType)}</p>
      <p style="margin:0;">Regards,<br/>LIZA Enterprise and Technology</p>
    </div>`;
}

async function sendResendEmail({ apiKey, fromEmail, to, subject, html, replyTo }) {
  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    let details = "";

    try {
      const errorPayload = await response.json();
      details = errorPayload.message || errorPayload.error || "";
    } catch {
      details = await response.text();
    }

    throw new Error(details || "Resend email delivery failed.");
  }
}

async function sendEnquiryEmails(enquiry) {
  const emailConfig = getEmailConfig();

  await Promise.all([
    sendResendEmail({
      ...emailConfig,
      to: emailConfig.ownerEmail,
      subject: `New CNC enquiry ${enquiry.referenceId} - ${enquiry.fullName}`,
      html: buildOwnerEmail(enquiry),
      replyTo: enquiry.email,
    }),
    sendResendEmail({
      ...emailConfig,
      to: enquiry.email,
      subject: `LIZA CNC enquiry received - ${enquiry.referenceId}`,
      html: buildCustomerEmail(enquiry),
      replyTo: emailConfig.ownerEmail,
    }),
  ]);
}

async function readExistingEnquiries() {
  try {
    const content = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function saveEnquiryLocally(enquiry) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });

    const existing = await readExistingEnquiries();
    existing.unshift(enquiry);

    await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf8");
  } catch (error) {
    console.warn("Enquiry local file save skipped:", error);
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();
    const referenceId = `ENQ-${Date.now()}`;
    const enquiry = {
      referenceId,
      submittedAt,
      fullName: normalizeString(payload.fullName),
      phone: normalizeString(payload.phone),
      email: normalizeString(payload.email),
      company: normalizeString(payload.company),
      city: normalizeString(payload.city),
      machineType: normalizeString(payload.machineType),
      material: normalizeString(payload.material),
      message: normalizeString(payload.message),
    };

    await sendEnquiryEmails(enquiry);
    await saveEnquiryLocally(enquiry);

    return NextResponse.json({
      ok: true,
      referenceId,
    });
  } catch (error) {
    console.error("Enquiry submission failed:", error);

    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}
