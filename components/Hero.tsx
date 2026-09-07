import Link from "next/link";
import { ARCHIVE_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-12 text-center sm:pt-14 md:pt-16 lg:pt-20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
        Virasat.ai — Artifacts of India
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[#3b2416] md:text-7xl">
        Explore the Heritage of India
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#654b3b]">
        Discover India&apos;s diverse traditions, arts, crafts, dances,
        clothing, monuments and lesser-known cultural treasures.
      </p>

      {/* Cultural Heritage Verse */}
      <div className="my-8 max-w-2xl rounded-2xl border border-[#e4d4c0]/80 bg-[#fffaf2]/70 px-6 py-5 shadow-xs backdrop-blur-xs sm:px-8 sm:py-6">
        <div className="space-y-3.5 font-serif text-base italic leading-relaxed text-[#3b2416] sm:text-lg">
          <p>
            Har mod par nayi kahani, har kala hai nirali,<br />
            Bharat ki dharti sabse pyari aur nirali.
          </p>

          <p>
            Kahin Kathak ki thirkan,<br />
            kahin Bhangra ki shaan,<br />
            Tajmahal, Qutub Minar gaate itihaas mahaan.
          </p>

          <p>
            Kahin Eid ki raunaq, kahin Diwali ka prakaash,<br />
            Anekta mein ekta se mahke har aakaash,<br />
            Is paavan aur amar dharohar ka,<br />
            jag mein hai alag hi vaas.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <Link
          href="/explore"
          className="rounded-full bg-[#7b3f00] px-7 py-3 font-semibold text-white transition hover:bg-[#5f3000]"
        >
          Explore Heritage
        </Link>

        <Link
          href="/ai-guide"
          className="rounded-full border border-[#7b3f00] px-7 py-3 font-semibold text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white"
        >
          AI Guide
        </Link>

        <a
          href={ARCHIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#7b3f00] px-7 py-3 font-semibold text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white"
        >
          Explore Virasat Image Archive
        </a>
      </div>
    </section>
  );
}