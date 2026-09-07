/**
 * Configuration constants and helpers for the Virasat ecosystem.
 * Configurable via NEXT_PUBLIC_ARCHIVE_URL with safe local development fallback.
 */

export const ARCHIVE_URL: string =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_ARCHIVE_URL
    ? process.env.NEXT_PUBLIC_ARCHIVE_URL.replace(/\/$/, "")
    : "http://127.0.0.1:5050");

/**
 * Builds the URL to virasat.archive that automatically populates and runs
 * the Wikimedia image search for a specific cultural heritage item.
 *
 * @example
 * getArchiveSearchUrl("Kathak") // "http://127.0.0.1:5050/?q=Kathak"
 */
export function getArchiveSearchUrl(query: string): string {
  const cleanQ = (query || "").trim();
  if (!cleanQ) return ARCHIVE_URL;
  return `${ARCHIVE_URL}/?q=${encodeURIComponent(cleanQ)}`;
}
