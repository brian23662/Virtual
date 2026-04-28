import { NextRequest, NextResponse } from "next/server";

/**
 * Plain Language API
 * - Receives the page's main content text
 * - Asks Claude (via Anthropic API) to rewrite it in plain, friendly language
 * - Returns the result for display in the on-page accessibility helper
 *
 * This is a deliberate accessibility enhancement: it helps users with cognitive
 * disabilities, ESL/LEP visitors, and anyone who finds standard web copy dense.
 */
export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "No text provided." }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      // Graceful fallback for the demo — return a helpful message rather than 500
      return NextResponse.json({
        summary:
          "The plain-language helper is set up but needs an Anthropic API key to be configured before it can run. Once that's in place, this button will turn the page you're reading into a short, friendly summary anyone can understand at a glance.",
      });
    }

    const trimmed = text.slice(0, 6000);

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 600,
        system:
          "You rewrite website content in plain, friendly English at roughly a 6th-grade reading level. " +
          "Keep it accurate, warm, and short. Use short sentences. Use simple words. Break it into a few short paragraphs. " +
          "Do not add anything that is not in the original text. Do not include calls to action. Do not use markdown. " +
          "Just the plain summary, no preamble.",
        messages: [
          {
            role: "user",
            content: `Please rewrite this webpage content in plain language:\n\n${trimmed}`,
          },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Anthropic API error:", res.status, errText);
      return NextResponse.json(
        { error: "Plain-language helper is temporarily unavailable." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const summary =
      data?.content?.[0]?.text?.trim() ??
      "We couldn't summarize this page right now. Please try again or call 866-440-9140 for help.";

    return NextResponse.json({ summary });
  } catch (err) {
    console.error("Plain-language route error:", err);
    return NextResponse.json(
      { error: "Plain-language helper is temporarily unavailable." },
      { status: 500 }
    );
  }
}
