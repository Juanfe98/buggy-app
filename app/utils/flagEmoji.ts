/**
 * Convert an ISO 3166-1 alpha-2 country code into its corresponding flag emoji.
 *
 * This works by mapping each letter (A–Z) to the Regional Indicator Symbol
 * Unicode block (U+1F1E6–U+1F1FF).
 *
 * @param countryCode - Two-letter country code (e.g. "us", "GB")
 * @returns The flag emoji (e.g. "🇺🇸" for "US")
 */
export function getFlagEmoji(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(0x1f1e6 + char.charCodeAt(0) - 65),
    );
}
