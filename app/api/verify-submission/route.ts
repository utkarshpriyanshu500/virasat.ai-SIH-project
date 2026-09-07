import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "GEMINI_API_KEY is missing from .env.local",
        },
        { status: 500 }
      );
    }

    const submission = await request.json();

    const ai = new GoogleGenAI({
      apiKey,
    });

    const prompt = `
You are an AI verification assistant for Virasat.ai,
a platform for discovering and preserving Indian cultural heritage.

Analyze this community/artisan submission.

TITLE: ${submission.title}
CATEGORY: ${submission.category}
LOCATION: ${submission.location}
DESCRIPTION: ${submission.description}

Determine whether this submission is relevant to Indian cultural heritage.

Return ONLY valid JSON in exactly this format:

{
  "status": "passed",
  "score": 95,
  "reason": "Short explanation"
}

Rules:
- status must be exactly "passed", "review", or "failed"
- score must be an integer from 0 to 100
- reason must be a short explanation
- Do not include Markdown
- Do not include code fences
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text;

    if (!text) {
      return NextResponse.json(
        {
          error: "Gemini returned an empty response.",
        },
        { status: 500 }
      );
    }

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json(
        {
          error: "Gemini returned invalid JSON.",
          raw: text,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("GEMINI VERIFICATION ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Unknown Gemini API error",
      },
      { status: 500 }
    );
  }
}