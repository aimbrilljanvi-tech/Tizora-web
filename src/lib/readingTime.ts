/**
 * Real reading time from real content length.
 *
 * Counts every human-readable word in whatever you pass (strings, arrays, nested objects such as a
 * blog's content blocks + FAQs, or a case study's data), skipping URLs, paths and bare numbers, and
 * divides by an average adult reading speed.
 */
const WORDS_PER_MINUTE = 200;

const isNonProse = (s: string) => /^(https?:)?\/\//.test(s) || /^\/[\w./-]*$/.test(s) || /^[\d\s.,%+-]+$/.test(s);

export function countWords(value: unknown): number {
  if (typeof value === 'string') {
    const t = value.trim();
    return !t || isNonProse(t) ? 0 : t.split(/\s+/).length;
  }
  if (Array.isArray(value)) return value.reduce((sum: number, v) => sum + countWords(v), 0);
  if (value && typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).reduce((sum: number, v) => sum + countWords(v), 0);
  }
  return 0;
}

/** Whole minutes, never less than 1. */
export function readingMinutes(value: unknown): number {
  return Math.max(1, Math.ceil(countWords(value) / WORDS_PER_MINUTE));
}

/** "2026-09-23" -> "September 23, 2026" (same style the blog cards already use). */
export function formatIsoDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
