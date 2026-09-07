import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { supabase } from "@/lib/supabase";

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

    const body = await request.json();

    const message = body?.message;
    const history = body?.history || [];

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        {
          error: "Please provide a valid message.",
        },
        { status: 400 }
      );
    }

    /*
     * -------------------------------------------------------
     * GET HERITAGE DATA
     * -------------------------------------------------------
     */

    const { data: heritageData, error: heritageError } =
      await supabase
        .from("heritage")
        .select(
          "name, category, location, description, slug"
        )
        .limit(100);

    if (heritageError) {
      console.error(
        "SUPABASE HERITAGE ERROR:",
        heritageError
      );
    }

    /*
     * -------------------------------------------------------
     * PREPARE HERITAGE CONTEXT
     * -------------------------------------------------------
     */

    let heritageContext =
      "No heritage database data available.";

    if (heritageData && heritageData.length > 0) {
      heritageContext = heritageData
        .map(
          (item: {
            name: string;
            category: string;
            location: string;
            description: string | null;
            slug: string;
          }) => {
            return `
Name: ${item.name}
Category: ${item.category}
Location: ${item.location}
Description: ${item.description || "No description available."}
Slug: ${item.slug}
`;
          }
        )
        .join("\n");
    }

    /*
     * -------------------------------------------------------
     * CONVERSATION HISTORY
     * -------------------------------------------------------
     */

    let conversationHistory = "";

    if (Array.isArray(history)) {
      conversationHistory = history
        .map(
          (item: {
            role: string;
            text: string;
          }) => {
            const speaker =
              item.role === "user"
                ? "User"
                : "Virasat AI Guide";

            return `${speaker}: ${item.text}`;
          }
        )
        .join("\n\n");
    }

    /*
     * -------------------------------------------------------
     * GEMINI
     * -------------------------------------------------------
     */

    const ai = new GoogleGenAI({
      apiKey,
    });

    const prompt = `
You are "Virasat AI Guide", the cultural heritage assistant for Virasat.ai — Artifacts of India.

Your purpose is to help users discover and understand India's:

- Cultural heritage
- Monuments
- Classical and folk dances
- Music
- Traditional textiles
- Handicrafts
- Paintings
- Festivals
- Architecture
- Cuisine
- Regional traditions

You have access to Virasat.ai's official heritage database below.

When a user's question relates to something in the database, use the database information as your primary source.

Do not invent database entries.

If the user asks about a heritage item that exists in the database, use its name, category, location and description.

If the user asks for heritage recommendations or asks what heritage exists in a particular place or category, use the database whenever possible.

If the requested information is not present in the database, you may use your general knowledge, but do not pretend that it came from the database.

IMPORTANT FORMATTING RULES:

1. Do NOT use Markdown.
2. Do NOT use ** for bold.
3. Do NOT use * for italic.
4. Do NOT use # or ### headings.
5. Do NOT use backslashes.
6. Use simple plain text.
7. For sections, write the heading on its own line.
8. For lists, use the bullet character "•" followed by a space.
9. Leave a blank line between sections.
10. Do not use Markdown formatting of any kind.

CONVERSATION HISTORY:

${conversationHistory || "No previous conversation."}

VIRASAT.AI HERITAGE DATABASE:

${heritageContext}

CURRENT USER QUESTION:

${message}

IMPORTANT:

- Use conversation history to understand follow-up questions.
- If the user asks "what about its location?", understand what "its" refers to from the conversation.
- Focus primarily on Indian culture and heritage.
- If the question is unrelated to Indian heritage, politely explain that you are designed mainly for Indian cultural heritage.
- Do not pretend to know uncertain facts.
- Use simple language suitable for students and general visitors.
- Keep responses reasonably short.
- Do not use Markdown.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    const reply = response.text;

    if (!reply) {
      return NextResponse.json(
        {
          error: "Gemini returned an empty response.",
        },
        { status: 500 }
      );
    }

    /*
     * -------------------------------------------------------
     * CLEAN RESPONSE
     * -------------------------------------------------------
     */

    const cleanedReply = reply
      .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      )
      .replace(/&#(\d+);/g, (_, num) =>
        String.fromCharCode(parseInt(num, 10))
      )
      .replace(/\*\*•\*\*/g, "•")
      .replace(/\*\*•/g, "•")
      .replace(/•\s*/g, "• ")
      .replace(/\\\*/g, "*")
      .replace(/\\#/g, "#");

    /*
     * -------------------------------------------------------
     * RETURN HERITAGE LINKS DATA
     * -------------------------------------------------------
     *
     * This gives the frontend the actual names and slugs
     * from Supabase.
     */

    const heritageLinks =
      heritageData?.map(
        (item: {
          name: string;
          slug: string;
        }) => ({
          name: item.name,
          slug: item.slug,
        })
      ) || [];

    return NextResponse.json({
      reply: cleanedReply,
      heritageLinks,
    });
  } catch (error: any) {
    console.error("CHAT GEMINI ERROR:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Something went wrong while contacting Gemini.",
      },
      { status: 500 }
    );
  }
}