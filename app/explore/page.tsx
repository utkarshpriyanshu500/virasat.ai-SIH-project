"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import dynamic from "next/dynamic";

const HeritageMap = dynamic(
  () => import("@/components/HeritageMap"),
  { ssr: false }
);
import Navbar from "@/components/Navbar";
import HeritageCard from "@/components/HeritageCard";
import { ARCHIVE_URL } from "@/lib/config";

type Heritage = {
  id: number;
  name: string;
  category: string;
  location: string;
  description: string | null;
  slug: string;
  image: string | null;
  latitude: number | null;
  longitude: number | null;
};

type Submission = {
  id: number;
  submission_type: "community" | "artisan";
  name: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string | null;
  status: string;
};

export default function ExplorePage() {
  const [heritage, setHeritage] = useState<Heritage[]>([]);
  const [submissions, setSubmissions] = useState<Heritage[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchHeritage() {
      setLoading(true);
      setError("");

      // Fetch official heritage entries
      const {
        data: heritageData,
        error: heritageError,
      } = await supabase
        .from("heritage")
        .select("*")
        .order("id", { ascending: true });

      if (heritageError) {
        console.error("Heritage error:", heritageError);
        setError(heritageError.message);
        setLoading(false);
        return;
      }

      // Fetch approved community/artisan submissions
      const {
        data: submissionData,
        error: submissionError,
      } = await supabase
        .from("heritage_submissions")
        .select(
          "id, submission_type, name, title, category, location, description, image, status"
        )
        .eq("status", "approved")
        .order("id", { ascending: true });

      if (submissionError) {
        console.error("Submission error:", submissionError);

        // Don't break the whole Explore page if submissions fail.
        setSubmissions([]);
      } else {
        const convertedSubmissions: Heritage[] = (submissionData || []).map(
          (item: Submission) => ({
            id: -item.id,
            name: item.title,
            category: item.category,
            location: item.location,
            description: item.description,
            slug: `community-${item.id}`,
            image: item.image,
            latitude: null,
            longitude: null,
          })
        );

        setSubmissions(convertedSubmissions);
      }

      setHeritage(heritageData || []);
      setLoading(false);
    }

    fetchHeritage();
  }, []);

  // Combine official heritage + approved community/artisan heritage
  const allHeritage = [...heritage, ...submissions];

  // Create categories dynamically
  const categories = [
    "All",
    ...Array.from(
      new Set(allHeritage.map((item) => item.category))
    ),
  ];

  const filteredHeritage = allHeritage.filter((item) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText) ||
      item.location.toLowerCase().includes(searchText) ||
      (item.description || "").toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
              Explore
            </p>

            <h1 className="mt-2 text-4xl font-bold text-[#3b2416] md:text-5xl">
              Discover India&apos;s Heritage
            </h1>

            <p className="mt-4 max-w-2xl text-[#654b3b]">
              Explore traditional dances, textiles, embroidery, historic
              monuments and heritage shared by communities across India.
            </p>
          </div>

          <a
            href={ARCHIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-[#7b3f00] bg-[#fffaf2] px-5 py-2.5 text-sm font-semibold text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white md:self-end"
            title="Browse open-access visual archives on virasat.archive"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            </svg>
            <span>Explore Visual Archive</span>
          </a>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
  <div className="relative">
    <input
      type="text"
      placeholder="Search heritage, category or location..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-2xl border border-[#d9c2a3] bg-white/95 px-5 py-4 pr-12 text-[#3b2416] shadow-sm outline-none transition placeholder:text-[#9a8473] focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10"
    />

    {search && (
      <button
        type="button"
        onClick={() => setSearch("")}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#7b3f00] transition hover:scale-110"
        aria-label="Clear search"
      >
        ×
      </button>
    )}
  </div>
</section>

      {/* Categories */}
        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex flex-wrap gap-2.5">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
             className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              category === item
                ? "bg-[#7b3f00] text-white shadow-sm"
                : "border border-[#7b3f00]/40 bg-white/70 text-[#7b3f00] hover:border-[#7b3f00] hover:bg-[#7b3f00] hover:text-white"
            }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Map */}
      <HeritageMap category={category} />

      {/* Results */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        {loading ? (
          <div className="py-16 text-center">
            <p className="text-lg font-semibold text-[#7b3f00]">
              Loading heritage...
            </p>
          </div>
        ) : error ? (
          <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-red-700">
            <p className="font-semibold">
              Unable to load heritage data.
            </p>

            <p className="mt-2 text-sm">{error}</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-[#654b3b]">
                Showing {filteredHeritage.length} of {allHeritage.length}{" "}
                heritage entries
              </p>
            </div>

            {filteredHeritage.length === 0 ? (
              <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
                <p className="text-xl font-semibold text-[#3b2416]">
                  No heritage found
                </p>

                <p className="mt-2 text-[#654b3b]">
                  Try a different search or category.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredHeritage.map((item) => (
                  <HeritageCard
                    key={`${item.id}-${item.slug}`}
                    name={item.name}
                    category={item.category}
                    location={item.location}
                    description={item.description || ""}
                    slug={item.slug}
                    image={item.image || undefined}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}