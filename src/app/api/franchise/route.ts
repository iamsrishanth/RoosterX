import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  investment?: string | number;
  message?: string;
};

function fail(field: string, message: string, status = 400) {
  return NextResponse.json({ ok: false, field, message }, { status });
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return fail("form", "Invalid request body.");
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim() || null;
  const investmentRaw = body.investment;

  // server-side validation
  if (name.length < 2) return fail("name", "Please enter your full name.");
  if (phone.length < 7) return fail("phone", "Please enter a valid phone number.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return fail("email", "Please enter a valid email address.");
  const investment = typeof investmentRaw === "number" ? investmentRaw : Number(investmentRaw);
  if (!Number.isFinite(investment) || investment <= 0)
    return fail("investment", "Please enter your overall investment in Lakhs.");

  try {
    const record = await db.franchiseEnquiry.create({
      data: { name, phone, email, investment, message },
    });
    return NextResponse.json({
      ok: true,
      id: record.id,
      message: "Enquiry received. Our franchise team will be in touch shortly.",
    });
  } catch (e) {
    console.error("Franchise enquiry insert failed:", e);
    return NextResponse.json(
      { ok: false, field: "form", message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  // simple list for admin/debug - returns count only to avoid leaking PII
  try {
    const count = await db.franchiseEnquiry.count();
    return NextResponse.json({ ok: true, count });
  } catch (e) {
    return NextResponse.json({ ok: true, count: 0 });
  }
}
