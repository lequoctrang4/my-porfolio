import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, you would generate a PDF here
  // For now, we'll redirect to the static PDF
  return NextResponse.redirect(new URL("/resume.pdf", process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"))
}
