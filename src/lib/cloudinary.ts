/**
 * Adds automatic format, quality and a width cap to a Cloudinary upload URL, so a large
 * PNG source is served as a small WebP/AVIF. URLs that already carry transforms, and
 * non-Cloudinary URLs, are returned unchanged. `quality` is Cloudinary's q_ value, e.g. "auto"
 * (default) or "auto:best" for diagrams with small text.
 */
export function cloudinaryOptimized(src: string, width = 1600, quality = 'auto'): string {
  const m = src.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(.*)$/);
  if (!m) return src;
  const [, base, rest] = m;
  // Only a version ("v123/...") or a plain public id follows /upload/ when no transforms are set.
  const firstSegment = rest.split('/')[0];
  if (rest.includes('/') && !/^v\d+$/.test(firstSegment)) return src;
  return `${base}f_auto,q_${quality},c_limit,w_${width}/${rest}`;
}
