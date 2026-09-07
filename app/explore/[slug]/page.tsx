import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";
import { getArchiveSearchUrl } from "@/lib/config";

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
  latitude: number | null;
  longitude: number | null;
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function HeritageDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  let heritage: Heritage | null = null;
  let submission: Submission | null = null;

  /*
   * 1. Check the original 31 heritage entries
   */
  const { data: heritageData, error: heritageError } =
    await supabase
      .from("heritage")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

  if (heritageError) {
    console.error("Heritage detail error:", heritageError);
  }

  if (heritageData) {
    heritage = heritageData;
  }

  /*
   * 2. If it isn't an official heritage entry,
   *    check whether it is a community/artisan submission.
   *
   *    Example:
   *    community-10
   */
  if (!heritage && slug.startsWith("community-")) {
    const submissionId = Number(
      slug.replace("community-", "")
    );

    if (!Number.isNaN(submissionId)) {
      const { data: submissionData, error: submissionError } =
        await supabase
          .from("heritage_submissions")
          .select(
            "id, submission_type, name, title, category, location, description, image, status, latitude, longitude"
          )
          .eq("id", submissionId)
          .eq("status", "approved")
          .maybeSingle();

      if (submissionError) {
        console.error(
          "Submission detail error:",
          submissionError
        );
      }

      if (submissionData) {
        submission = submissionData;
      }
    }
  }

  /*
   * 3. If nothing was found, show a friendly 404-style page.
   */
  if (!heritage && !submission) {
    return (
      <main className="min-h-screen bg-transparent">
        <Navbar />

        <section className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-6 py-16">
          <div className="w-full rounded-3xl border border-[#e4d4c0] bg-white p-10 text-center shadow-lg">
            <div className="text-6xl">🏛️</div>

            <h1 className="mt-5 text-3xl font-bold text-[#3b2416]">
              Heritage Not Found
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-[#654b3b]">
              We couldn't find this heritage entry. It may have
              been removed or is no longer available.
            </p>

            <a
              href="/explore"
              className="mt-7 inline-flex rounded-full bg-[#7b3f00] px-6 py-3 font-semibold text-white transition hover:bg-[#5f3000]"
            >
              ← Back to Explore
            </a>
          </div>
        </section>
      </main>
    );
  }

  /*
   * 4. Convert submission data into the same structure
   *    used by official heritage entries.
   */
  const item = heritage
    ? {
        name: heritage.name,
        category: heritage.category,
        location: heritage.location,
        description: heritage.description,
        image: heritage.image,
        latitude: heritage.latitude,
        longitude: heritage.longitude,
        source: "Official Virasat.ai Heritage",
        submittedBy: null,
      }
    : {
        name: submission!.title,
        category: submission!.category,
        location: submission!.location,
        description: submission!.description,
        image: submission!.image,
        latitude: submission!.latitude,
        longitude: submission!.longitude,
        source:
          submission!.submission_type === "artisan"
            ? "Community Artisan Submission"
            : "Community Heritage Submission",
        submittedBy: submission!.name,
      };

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        {/* Back button */}
        <a
          href="/explore"
          className="inline-flex items-center rounded-full border border-[#7b3f00]/30 bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white"
        >
          ← Back to Explore
        </a>

        {/* Main content */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#e4d4c0] bg-white shadow-xl">
          {/* Image */}
          <div className="relative h-[280px] w-full overflow-hidden bg-[#d9c2a3] sm:h-[380px] md:h-[500px]">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-7xl">🏛️</span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">
                {item.category}
              </p>

              <h1 className="mt-2 text-3xl font-bold text-white drop-shadow-md sm:text-4xl md:text-5xl">
                {item.name}
              </h1>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Source */}
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#fff4e5] px-4 py-2 text-sm font-semibold text-[#7b3f00]">
                {item.source}
              </span>

              {submission && (
                <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                  ✓ Approved
                </span>
              )}
            </div>

            {/* Location */}
            <div className="rounded-2xl bg-[#fffaf2] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a05a2c]">
                Location
              </p>

              <p className="mt-2 text-lg font-semibold text-[#3b2416]">
                📍 {item.location}
              </p>
            </div>

            {/* Description */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a05a2c]">
                About
              </p>

              <p className="mt-3 whitespace-pre-line text-base leading-8 text-[#654b3b]">
                {item.description ||
                  "No description available for this heritage entry."}
              </p>
            </div>

            {/* Submission information */}
            {submission && (
              <div className="mt-8 rounded-2xl border border-[#e4d4c0] bg-[#faf6ef] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a05a2c]">
                  Community Contribution
                </p>

                <p className="mt-2 text-[#654b3b]">
                  Shared by{" "}
                  <span className="font-semibold text-[#3b2416]">
                    {item.submittedBy}
                  </span>
                </p>

                <p className="mt-1 text-sm text-[#7b5f4d]">
                  This heritage entry was submitted by the
                  Virasat.ai community and approved for public
                  discovery.
                </p>
              </div>
            )}

            {/* Coordinates */}
            {item.latitude !== null &&
              item.longitude !== null && (
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a05a2c]">
                    Map Coordinates
                  </p>

                  <p className="mt-2 text-sm text-[#7b5f4d]">
                    {item.latitude}, {item.longitude}
                  </p>
                </div>
              )}

            {/* Bottom buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/explore"
                className="inline-flex items-center rounded-full bg-[#7b3f00] px-6 py-3 font-semibold text-white transition hover:bg-[#5f3000]"
              >
                ← Explore More Heritage
              </a>

              <a
                href={getArchiveSearchUrl(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#7b3f00] bg-[#fffaf2] px-6 py-3 font-semibold text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white"
                title={`Find photos and visual records for ${item.name} in Virasat Archive`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
                <span>Find Images in Archive</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}