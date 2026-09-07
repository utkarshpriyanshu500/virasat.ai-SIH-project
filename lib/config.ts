/**
 * Configuration constants and helpers for the Virasat ecosystem.
 */

export const ARCHIVE_URL =
  process.env.NEXT_PUBLIC_ARCHIVE_URL?.replace(/\/$/, "") ||
  "https://virasat-archive.onrender.com";

/**
 * Builds the URL to Virasat Archive and optionally searches for
 * a specific cultural heritage item.
 *
 * @example
 * getArchiveSearchUrl("Kathak")
 * // "https://virasat-archive.onrender.com/?q=Kathak"
 */
export function getArchiveSearchUrl(query: string): string {
  const cleanQ = (query || "").trim();

  if (!cleanQ) {
    return ARCHIVE_URL;
  }

  return `${ARCHIVE_URL}/?q=${encodeURIComponent(cleanQ)}`;
}