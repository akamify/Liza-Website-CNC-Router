import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "enquiries.json");

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

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

    await fs.mkdir(DATA_DIR, { recursive: true });

    const existing = await readExistingEnquiries();
    existing.unshift(enquiry);

    await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf8");

    return NextResponse.json({
      ok: true,
      referenceId,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}
