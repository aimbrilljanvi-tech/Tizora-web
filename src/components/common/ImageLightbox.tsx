'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cloudinaryOptimized } from '@/lib/cloudinary';

interface ImageLightboxProps {
  /** Full-size image shown in the overlay. */
  src: string;
  alt: string;
  /** Optional caption under the enlarged image. */
  caption?: string;
  /** The inline image; clicking it opens the overlay. */
  children: ReactNode;
}

/**
 * Wraps an inline image so a click opens it full size in an overlay with a close button.
 * Closes on the close button, a click on the backdrop, or Escape. Wide diagrams can be
 * scrolled sideways on phones so their labels stay readable.
 */
export function ImageLightbox({ src, alt, caption, children }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open the full-size image"
        className="block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
      >
        {children}
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={caption ?? 'Full-size image'}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b1f24]/90 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-colors hover:bg-[#003640] hover:text-white sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-h-[82vh] w-full max-w-[1600px] overflow-auto rounded-[10px] bg-white p-3 sm:p-6"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                // Full-size view: best automatic quality, up to 3200px wide, so small labels stay sharp.
                src={cloudinaryOptimized(src, 3200, 'auto:best')}
                alt={alt}
                className="mx-auto block h-auto w-full min-w-[900px] sm:min-w-0"
              />
            </div>
            {caption && (
              <p className="mt-4 max-w-3xl text-center text-[13.5px] leading-relaxed text-white/80">{caption}</p>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
