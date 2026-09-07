import Image from "next/image";
import { getArchiveSearchUrl } from "@/lib/config";

type HeritageCardProps = {
  name: string;
  category: string;
  location: string;
  description: string;
  slug?: string;
  image?: string;
};

export default function HeritageCard({
  name,
  category,
  location,
  description,
  slug,
  image,
}: HeritageCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#e4d4c0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden bg-[#d9c2a3]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-5xl">🏛️</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a05a2c]">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#3b2416]">
          {name}
        </h3>

        <p className="mt-2 text-sm text-[#7b5f4d]">
          📍 {location}
        </p>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#654b3b]">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          {slug ? (
            <a
              href={`/explore/${slug}`}
              className="inline-flex items-center gap-1 rounded-full border border-[#7b3f00]/30 bg-[#fffaf2] px-4 py-2 text-sm font-semibold text-[#7b3f00] transition-all hover:bg-[#7b3f00] hover:text-white"
            >
              Explore
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          ) : (
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-[#7b3f00]/30 bg-[#fffaf2] px-4 py-2 text-sm font-semibold text-[#7b3f00] transition-all hover:bg-[#7b3f00] hover:text-white"
            >
              Explore
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>
          )}

          <a
            href={getArchiveSearchUrl(name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#7b3f00] bg-white px-3.5 py-2 text-sm font-semibold text-[#7b3f00] transition-all hover:bg-[#7b3f00] hover:text-white"
            title={`Find photos and visual records for ${name} in Virasat Archive`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            </svg>
            <span>Find Images</span>
          </a>
        </div>
      </div>
    </article>
  );
}