/**
 * Compute a 1–2 character “initial” for a group name:
 *  • Multi-word names: first letters of the first two words (“Foo Bar” → “FB”)
 *  • Single-word (≥2 letters): first two letters (“Roommates” → “RO”)
 *  • Single-letter: that letter
 *  • Empty: “?”
 */
export function getGroupInitial(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return '?';
  }
  if (words.length === 1) {
    const w = words[0];
    return w.length >= 2
      ? w.slice(0, 2).toUpperCase()
      : w.charAt(0).toUpperCase();
  }
  // two-word acronym
  return (
    words[0].charAt(0).toUpperCase() +
    words[1].charAt(0).toUpperCase()
  );
}
