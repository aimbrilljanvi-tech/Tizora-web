'use client';

import Image, { ImageProps, type ImageLoaderProps } from 'next/image';

/**
 * Cloudinary: request the exact width the browser needs, in its best format (AVIF/WebP) at
 * automatic quality, straight from Cloudinary's CDN. Existing transforms in the URL (e.g. e_trim)
 * are kept and applied first; the resize is chained after them. Passing quality 90 or more (for
 * diagrams and other images with small text) asks Cloudinary for its best automatic quality.
 */
function cloudinaryLoader({ src, width, quality }: ImageLoaderProps): string {
  const marker = '/image/upload/';
  const at = src.indexOf(marker);
  if (at === -1) return src;
  const base = src.slice(0, at + marker.length);
  const parts = src.slice(at + marker.length).split('/');
  // Insert before the version segment (v123...) when present, else before the public id.
  let insertAt = parts.findIndex((p) => /^v\d+$/.test(p));
  if (insertAt === -1) insertAt = parts.findIndex((p) => !/^[a-z]{1,3}_[^/]*$/.test(p.split(',')[0]));
  if (insertAt === -1) insertAt = 0;
  parts.splice(insertAt, 0, `f_auto,${quality && quality >= 90 ? 'q_auto:best' : 'q_auto'},c_limit,w_${width}`);
  return base + parts.join('/');
}

/** Unsplash (imgix): same idea, set width, auto format and a sensible quality. */
function unsplashLoader({ src, width, quality }: ImageLoaderProps): string {
  const url = new URL(src);
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', String(quality ?? 75));
  url.searchParams.set('auto', 'format');
  url.searchParams.delete('h');
  return url.toString();
}

/**
 * Thin wrapper around next/image for content-driven images.
 * - Cloudinary and Unsplash images load directly from their CDNs at the right width and in a
 *   modern format (no round trip through the Next image optimizer, so first loads are fast).
 * - Other remote and local images use Next's built-in optimizer.
 * - Animated GIFs skip optimization so their animation is kept.
 */
export function ContentImage({ src, unoptimized, loader, ...props }: ImageProps) {
  const url = typeof src === 'string' ? src : '';
  const isGif = url.toLowerCase().endsWith('.gif');
  let cdnLoader = loader;
  if (!cdnLoader && !isGif) {
    if (url.startsWith('https://res.cloudinary.com/')) cdnLoader = cloudinaryLoader;
    else if (url.startsWith('https://images.unsplash.com/')) cdnLoader = unsplashLoader;
  }
  return <Image src={src} loader={cdnLoader} unoptimized={unoptimized ?? isGif} {...props} />;
}
