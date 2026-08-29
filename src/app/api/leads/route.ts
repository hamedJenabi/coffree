import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedKinds = new Set(["member", "cafe"]);

function readString(payload: Record<string, unknown>, key: string) {
  const value = payload[key];
  return typeof value === "string" ? value.trim() : "";
}

function invalid(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return invalid("Invalid JSON payload.");
  }

  const kind = readString(payload, "kind");
  const name = readString(payload, "name");
  const email = readString(payload, "email").toLowerCase();
  const area = readString(payload, "area");
  const cafeName = readString(payload, "cafeName");
  const drink = readString(payload, "drink");
  const eligibleDrinks = readString(payload, "eligibleDrinks");

  if (!allowedKinds.has(kind)) {
    return invalid("Lead kind must be member or cafe.");
  }

  if (!name || !emailPattern.test(email) || !area) {
    return invalid("Name, email, and area are required.");
  }

  if (kind === "member" && !drink) {
    return invalid("Usual order is required.");
  }

  if (kind === "cafe" && (!cafeName || !eligibleDrinks)) {
    return invalid("Cafe name and eligible drinks are required.");
  }

  const record = {
    id: crypto.randomUUID(),
    kind,
    name,
    email,
    area,
    cafeName: cafeName || null,
    drink: drink || null,
    eligibleDrinks: eligibleDrinks || null,
    createdAt: new Date().toISOString(),
  };

  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "leads.jsonl");

  await mkdir(dataDir, { recursive: true });
  await appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8");

  return NextResponse.json({ ok: true });
}
