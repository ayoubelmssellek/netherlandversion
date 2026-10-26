import { NextResponse } from "next/server";
import { isMailConfigured, sendReviewSubmissionEmail } from "@/lib/mail";

type Body = {
  name?: string;
  email?: string;
  location?: string;
  rating?: number | string;
  comment?: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    // Honeypot
    if (String(body.website || "").trim()) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "")
      .trim()
      .toLowerCase();
    const location = String(body.location || "").trim();
    const comment = String(body.comment || "").trim();
    const rating = Number(body.rating);

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: "Vul je naam in." }, { status: 400 });
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "Vul een geldig e-mailadres in." }, { status: 400 });
    }
    if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ ok: false, error: "Kies een score van 1 tot 5." }, { status: 400 });
    }
    if (!comment || comment.length < 15) {
      return NextResponse.json(
        { ok: false, error: "Schrijf een reactie van minstens 15 tekens." },
        { status: 400 },
      );
    }
    if (comment.length > 800) {
      return NextResponse.json({ ok: false, error: "De reactie is te lang." }, { status: 400 });
    }

    const review = {
      name: name.slice(0, 80),
      email: email.slice(0, 120),
      location: location.slice(0, 80),
      rating: Math.round(rating),
      comment: comment.slice(0, 800),
    };

    if (!isMailConfigured()) {
      return NextResponse.json({
        ok: true,
        mailSent: false,
        warning: "SMTP is niet ingesteld. Verzending alleen in development geaccepteerd.",
      });
    }

    const result = await sendReviewSubmissionEmail(review);
    return NextResponse.json({ ok: true, mailSent: result.sent });
  } catch (error) {
    console.error("[reviews]", error);
    return NextResponse.json(
      { ok: false, error: "De beoordeling kon niet worden verstuurd. Probeer het opnieuw of neem contact op met support." },
      { status: 500 },
    );
  }
}
