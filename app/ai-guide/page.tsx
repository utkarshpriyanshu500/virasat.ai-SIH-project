"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type ChatMessage = {
  role: "user" | "ai";
  text: string;
};

type HeritageLink = {
  name: string;
  slug: string;
};

/* ---------------------------------------------------------
   MAKE HERITAGE NAMES CLICKABLE
   --------------------------------------------------------- */

function makeHeritageLinks(
  text: string,
  heritageLinks: HeritageLink[]
) {
  if (!heritageLinks.length) {
    return text;
  }

  const sortedLinks = [...heritageLinks]
    .filter((item) => item.name && item.slug)
    .sort((a, b) => b.name.length - a.name.length);

  const pattern = sortedLinks
    .map((item) =>
      item.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    )
    .join("|");

  if (!pattern) {
    return text;
  }

  const regex = new RegExp(`(${pattern})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const matchedHeritage = sortedLinks.find(
      (item) =>
        item.name.toLowerCase() === part.toLowerCase()
    );

    if (matchedHeritage) {
      return (
        <Link
          key={index}
          href={`/explore/${matchedHeritage.slug}`}
          className="font-semibold text-[#7b3f00] underline decoration-[#b8895b] underline-offset-2 transition hover:text-[#5f3000]"
        >
          {part}
        </Link>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

/* ---------------------------------------------------------
   FORMAT INLINE TEXT
   --------------------------------------------------------- */

function formatInlineText(
  text: string,
  heritageLinks: HeritageLink[]
) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return parts.map((part, index) => {
    if (
      part.startsWith("**") &&
      part.endsWith("**")
    ) {
      return (
        <strong key={index} className="font-bold">
          {makeHeritageLinks(
            part.slice(2, -2),
            heritageLinks
          )}
        </strong>
      );
    }

    if (
      part.startsWith("*") &&
      part.endsWith("*")
    ) {
      return (
        <em key={index}>
          {makeHeritageLinks(
            part.slice(1, -1),
            heritageLinks
          )}
        </em>
      );
    }

    return (
      <span key={index}>
        {makeHeritageLinks(part, heritageLinks)}
      </span>
    );
  });
}

/* ---------------------------------------------------------
   FORMATTED MESSAGE
   --------------------------------------------------------- */

function FormattedMessage({
  text,
  heritageLinks,
}: {
  text: string;
  heritageLinks: HeritageLink[];
}) {
  const cleanedText = text
    .replace(/\\###/g, "###")
    .replace(/\\\*/g, "*")
    .replace(/\r\n/g, "\n");

  const lines = cleanedText.split("\n");

  return (
    <div className="space-y-3 text-sm leading-6">
      {lines.map((line, index) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return (
            <div
              key={index}
              className="h-1"
            />
          );
        }

        /* Markdown headings */

        if (trimmed.startsWith("###")) {
          const heading = trimmed
            .replace(/^#{1,6}\s*/, "")
            .trim();

          return (
            <h3
              key={index}
              className="mt-3 text-base font-bold text-[#7b3f00]"
            >
              {formatInlineText(
                heading,
                heritageLinks
              )}
            </h3>
          );
        }

        /* Bullet: • */

        if (trimmed.startsWith("•")) {
          const content = trimmed
            .replace(/^•\s*/, "")
            .trim();

          return (
            <div
              key={index}
              className="flex items-start gap-2"
            >
              <span className="mt-1 font-bold text-[#7b3f00]">
                •
              </span>

              <span className="flex-1">
                {formatInlineText(
                  content,
                  heritageLinks
                )}
              </span>
            </div>
          );
        }

        /* Bullet: - */

        if (trimmed.startsWith("- ")) {
          const content = trimmed
            .substring(2)
            .trim();

          return (
            <div
              key={index}
              className="flex items-start gap-2"
            >
              <span className="mt-1 font-bold text-[#7b3f00]">
                •
              </span>

              <span className="flex-1">
                {formatInlineText(
                  content,
                  heritageLinks
                )}
              </span>
            </div>
          );
        }

        /* Bullet: * */

        if (trimmed.startsWith("* ")) {
          const content = trimmed
            .substring(2)
            .trim();

          return (
            <div
              key={index}
              className="flex items-start gap-2"
            >
              <span className="mt-1 font-bold text-[#7b3f00]">
                •
              </span>

              <span className="flex-1">
                {formatInlineText(
                  content,
                  heritageLinks
                )}
              </span>
            </div>
          );
        }

        /* Numbered list */

        const numberedMatch = trimmed.match(
          /^(\d+)\.\s+(.+)$/
        );

        if (numberedMatch) {
          return (
            <div
              key={index}
              className="flex items-start gap-2"
            >
              <span className="font-bold text-[#7b3f00]">
                {numberedMatch[1]}.
              </span>

              <span className="flex-1">
                {formatInlineText(
                  numberedMatch[2],
                  heritageLinks
                )}
              </span>
            </div>
          );
        }

        /* Normal paragraph */

        return (
          <p key={index}>
            {formatInlineText(
              trimmed,
              heritageLinks
            )}
          </p>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------
   AI GUIDE PAGE
   --------------------------------------------------------- */

export default function AIGuidePage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] =
    useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const [heritageLinks, setHeritageLinks] =
    useState<HeritageLink[]>([]);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(null);

  const suggestedQuestions = [
    "Tell me about Kathak",
    "What are famous Indian textiles?",
    "What heritage places can I visit in Uttar Pradesh?",
    "Tell me about Banarasi Silk",
  ];

  /* ---------------------------------------------------------
     AUTO SCROLL
     --------------------------------------------------------- */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /* ---------------------------------------------------------
     SEND MESSAGE
     --------------------------------------------------------- */

  async function sendMessage(text?: string) {
    const userMessage = (text ?? message).trim();

    if (!userMessage || loading) {
      return;
    }

    setMessage("");

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      if (Array.isArray(data.heritageLinks)) {
        setHeritageLinks(data.heritageLinks);
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "ai",
          text: data.reply,
        },
      ]);
    } catch (error) {
        console.error("CHAT ERROR:", error);

        const errorMessage =
          error instanceof Error ? error.message : "";

        const isQuotaError =
          errorMessage.includes("429") ||
          errorMessage.includes("RESOURCE_EXHAUSTED") ||
          errorMessage.includes("quota");

        setMessages((previous) => [
          ...previous,
          {
            role: "ai",
            text: isQuotaError
              ? "The AI Guide has temporarily reached its usage limit. Please try again later."
              : "Sorry, I couldn't connect to the AI Guide right now. Please try again.",
          },
        ]);
      } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen border-b border-[#e5d5bf] bg-transparent">

      {/* ---------------------------------------------------
          HEADER
          --------------------------------------------------- */}

      <header className="border-b border-[#e5d5bf] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">

          <Link
            href="/"
            className="text-xl font-bold text-[#7b3f00] sm:text-2xl"
          >
            Virasat.ai
            <span className="ml-2 hidden text-sm font-medium text-[#a05a2c] sm:inline">
              — Artifacts of India
            </span>
          </Link>

          <Link
            href="/"
            className="shrink-0 rounded-full border border-[#7b3f00] px-4 py-2 text-xs font-semibold text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white sm:px-5 sm:text-sm"
          >
            ← Back to Home
          </Link>

        </div>
      </header>

      {/* ---------------------------------------------------
          AI GUIDE
          --------------------------------------------------- */}

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">

        {/* PAGE HEADING */}

        <div className="mb-8 text-center sm:mb-10">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#e5d5bf] bg-white text-4xl shadow-sm">
            🤖
          </div>

          <h1 className="text-3xl font-bold text-[#3b2416] sm:text-4xl">
            Virasat AI Guide
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#7b5f4d] sm:text-base">
            Your AI guide to India&apos;s culture and heritage
          </p>

        </div>

        {/* CHAT BOX */}

        <div className="overflow-hidden rounded-3xl border border-[#e5d5bf] bg-white shadow-xl">

          {/* CHAT HEADER */}

          <div className="flex items-center justify-between gap-4 bg-[#7b3f00] px-4 py-5 text-white sm:px-6">

            <div className="min-w-0">
              <h2 className="text-base font-bold sm:text-lg">
                🪷 AI Heritage Guide
              </h2>

              <p className="mt-1 text-xs text-[#f7e7d0] sm:text-sm">
                Ask me anything about Indian cultural heritage.
              </p>
            </div>

            {messages.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setMessages([]);
                  setHeritageLinks([]);
                }}
                className="shrink-0 rounded-full border border-white/40 px-3 py-2 text-xs font-semibold transition hover:bg-white/10 sm:px-4"
              >
                Clear
              </button>
            )}

          </div>

          {/* MESSAGE AREA */}

          <div className="min-h-[420px] max-h-[560px] space-y-5 overflow-y-auto p-4 sm:p-6">

            {/* WELCOME MESSAGE */}

            {messages.length === 0 && (
              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0dfc7] text-lg sm:h-10 sm:w-10">
                  🤖
                </div>

                <div className="max-w-[88%] rounded-2xl rounded-tl-none border border-[#eadbc8] bg-[#f7f1e3] px-4 py-4 sm:max-w-[80%] sm:px-5">

                  <p className="text-sm font-semibold leading-6 text-[#4b382d]">
                    Namaste! 👋
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#4b382d]">
                    I&apos;m your Virasat AI Guide. Ask me about India&apos;s
                    monuments, dances, textiles, crafts, traditions,
                    festivals, and more.
                  </p>

                </div>

              </div>
            )}

            {/* CONVERSATION */}

            {messages.map((chat, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 sm:gap-3 ${
                  chat.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {/* AI AVATAR */}

                {chat.role === "ai" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0dfc7] text-lg sm:h-10 sm:w-10">
                    🤖
                  </div>
                )}

                {/* MESSAGE */}

                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3.5 sm:max-w-[80%] sm:px-5 sm:py-4 ${
                    chat.role === "user"
                      ? "rounded-br-none bg-[#7b3f00] text-white shadow-sm"
                      : "rounded-bl-none border border-[#eadbc8] bg-[#f7f1e3] text-[#4b382d]"
                  }`}
                >
                  {chat.role === "ai" ? (
                    <FormattedMessage
                      text={chat.text}
                      heritageLinks={heritageLinks}
                    />
                  ) : (
                    <p className="whitespace-pre-wrap text-sm leading-6">
                      {chat.text}
                    </p>
                  )}
                </div>

                {/* USER AVATAR */}

                {chat.role === "user" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7b3f00] text-sm text-white sm:h-10 sm:w-10">
                    👤
                  </div>
                )}

              </div>
            ))}

            {/* THINKING */}

            {loading && (
              <div className="flex items-end gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0dfc7] text-lg sm:h-10 sm:w-10">
                  🤖
                </div>

                <div className="rounded-2xl rounded-bl-none border border-[#eadbc8] bg-[#f7f1e3] px-4 py-3.5 sm:px-5 sm:py-4">

                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[#654b3b]">
                      Thinking
                    </span>

                    <span className="animate-bounce text-[#654b3b]">
                      .
                    </span>

                    <span
                      className="animate-bounce text-[#654b3b]"
                      style={{
                        animationDelay: "0.15s",
                      }}
                    >
                      .
                    </span>

                    <span
                      className="animate-bounce text-[#654b3b]"
                      style={{
                        animationDelay: "0.3s",
                      }}
                    >
                      .
                    </span>
                  </div>

                </div>

              </div>
            )}

            {/* SUGGESTED QUESTIONS */}

            {messages.length === 0 && (
              <div className="pt-3 sm:pt-4">

                <p className="mb-3 text-sm font-semibold text-[#654b3b]">
                  Try asking:
                </p>

                <div className="flex flex-wrap gap-2.5">

                  {suggestedQuestions.map(
                    (question) => (
                      <button
                        type="button"
                        key={question}
                        onClick={() =>
                          sendMessage(question)
                        }
                        disabled={loading}
                        className="rounded-full border border-[#d8c2a8] bg-[#fffaf2] px-3.5 py-2 text-left text-xs text-[#654b3b] transition hover:border-[#7b3f00] hover:bg-[#f7f1e3] hover:text-[#7b3f00] disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:text-sm"
                      >
                        {question}
                      </button>
                    )
                  )}

                </div>

              </div>
            )}

            {/* AUTO SCROLL TARGET */}

            <div ref={messagesEndRef} />

          </div>

          {/* INPUT */}

          <div className="border-t border-[#e5d5bf] bg-[#fffaf2] p-3 sm:p-5">

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2 sm:gap-3"
            >

              <input
                type="text"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                placeholder="Ask about Indian heritage..."
                disabled={loading}
                className="min-w-0 flex-1 rounded-full border border-[#d8c2a8] bg-white px-4 py-3 text-sm text-[#3b2416] outline-none transition placeholder:text-[#9a8473] focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10 disabled:bg-gray-100 sm:px-5"
              />

              <button
                type="submit"
                disabled={
                  loading || !message.trim()
                }
                className="shrink-0 rounded-full bg-[#7b3f00] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#5f3000] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6"
              >
                {loading ? "..." : "Send"}
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}