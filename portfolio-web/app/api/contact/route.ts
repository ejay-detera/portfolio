import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.enum([
    "Web app",
    "Mobile app",
    "Database/backend",
    "Internship/role",
    "Other",
  ]),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(30, "Project details must be at least 30 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

// Simple in-memory rate limiting map (IP -> timestamp)
// shortcut: in-memory map per instance, upgrade to Upstash Redis if high volume
const rateLimitMap = new Map<string, number>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "local";
    const now = Date.now();
    const lastRequestTime = rateLimitMap.get(ip);

    if (lastRequestTime && now - lastRequestTime < 10000) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before sending again." },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, projectType, budget, timeline, message } = parsed.data;

    // Resend integration if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Inquiry <onboarding@resend.dev>",
          to: "edetera41@gmail.com",
          reply_to: email,
          subject: `Portfolio Inquiry: ${projectType} from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget || "Not specified"}\nTimeline: ${timeline || "Not specified"}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        console.error("Resend API failed", await res.text());
        return NextResponse.json(
          { error: "Failed to dispatch email. Please use direct email as fallback." },
          { status: 502 }
        );
      }
    } else {
      // Local development without API key logs to console
      console.log("Inquiry received (RESEND_API_KEY not configured in env):", {
        name,
        email,
        projectType,
        budget,
        timeline,
        message,
      });
    }

    return NextResponse.json({ success: true, message: "Inquiry received" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

