import Link from "next/link";
import { ARCHIVE_URL } from "@/lib/config";

export default function AboutSection() {
  return (
    <>
      {/* What is Virasat.ai? */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
              About Virasat.ai
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#3b2416] md:text-5xl">
              Connecting India&apos;s Heritage with the Digital World
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#654b3b]">
              Virasat.ai is an interactive platform created to help people
              discover, understand and appreciate the rich cultural heritage
              of India. From classical dances and traditional textiles to
              historic monuments and lesser-known cultural treasures,
              Virasat.ai brings diverse traditions together in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-transparent px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
              Why It Matters
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#3b2416] md:text-5xl">
              Preserving Heritage Through Awareness
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#654b3b]">
              India&apos;s cultural heritage is vast, diverse and constantly
              evolving. Awareness and accessibility can help younger
              generations connect with traditions that deserve to be
              remembered and celebrated.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🌏</div>

              <h3 className="mt-5 text-2xl font-bold text-[#3b2416]">
                Discover
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Explore cultural traditions, monuments, crafts and artistic
                practices from different regions of India.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">📚</div>

              <h3 className="mt-5 text-2xl font-bold text-[#3b2416]">
                Understand
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Learn about the history, significance and regional identity
                behind India&apos;s cultural heritage.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">❤️</div>

              <h3 className="mt-5 text-2xl font-bold text-[#3b2416]">
                Preserve
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Encourage awareness and appreciation so that India&apos;s
                diverse heritage continues to be valued by future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore + AI Guide + Image Archive */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {/* Explore */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#7b3f00] p-8 text-white md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2d2b2]">
                Explore
              </p>

              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Discover Heritage Across India
              </h2>

              <p className="mt-4 leading-7 text-[#f8e8d8]">
                Explore heritage through an interactive map, search and
                categories covering traditions from different parts of India.
              </p>
            </div>

            <div>
              <a
                href="/explore"
                className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#7b3f00] transition hover:bg-[#f7f1e3]"
              >
                Explore Heritage →
              </a>
            </div>
          </div>

          {/* AI Guide */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#d9c2a3] bg-white p-8 shadow-sm md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
                AI Guide
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#3b2416] md:text-3xl">
                Ask About India&apos;s Heritage
              </h2>

              <p className="mt-4 leading-7 text-[#654b3b]">
                Curious about a dance, craft, monument or tradition? Our
                upcoming AI cultural guide will help you discover and learn
                about India&apos;s heritage through natural conversations.
              </p>
            </div>

            <div>
              <Link
                href="/ai-guide"
                className="mt-7 inline-block rounded-full border border-[#7b3f00] px-7 py-3 font-semibold text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white"
              >
                AI Guide →
              </Link>
            </div>
          </div>

          {/* Image Archive (virasat.archive) */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#e4d4c0] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl" role="img" aria-label="Image Archive">🖼️</span>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
                  Image Archive
                </p>
              </div>

              <h2 className="mt-3 text-2xl font-bold text-[#3b2416] md:text-3xl">
                Discover India&apos;s Heritage Through Images
              </h2>

              <p className="mt-4 leading-7 text-[#654b3b]">
                Explore a visual archive of India&apos;s cultural heritage, discover photographs and artworks from across the country, and find images for heritage research and exploration.
              </p>
            </div>

            <div>
              <a
                href={ARCHIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-full border border-[#7b3f00] bg-white px-7 py-3 font-semibold text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white"
              >
                Explore Image Archive →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}