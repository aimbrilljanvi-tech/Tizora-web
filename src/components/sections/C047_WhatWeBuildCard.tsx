'use client';

import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface WhatWeBuildCardItem {
  number: string;
  title: string;
  description: string;
  tags?: string[];
  /** Shown as the bold "Best for:" line at the bottom of the card. */
  whenToUse?: string;
  image?: {
    src?: string;
    alt?: string;
  };
}

export interface WhatWeBuildCardProps {
  items: WhatWeBuildCardItem[];
  background?: string;
  accentColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  borderColor?: string;
}

/**
 * Static image on the left, a single swapping card on the right -- a dark
 * header with prev/next controls, an accent label, description, bullet list
 * and a "Best for" line -- instead of the C042 accordion-list layout.
 */
export function WhatWeBuildCard({
  items,
  background = 'transparent',
  accentColor = '#556B2F',
  titleColor = '#ffffff',
  descriptionColor = 'rgba(31, 39, 16, 0.8)',
  borderColor = 'rgba(31, 39, 16, 0.15)',
}: WhatWeBuildCardProps) {
  const [index, setIndex] = useState(0);
  const safeIndex = Math.min(Math.max(index, 0), items.length - 1);
  const active = items[safeIndex];

  // A single shared image for the whole section, independent of the active card.
  const commonImage = useMemo(() => items.find((item) => item.image?.src)?.image, [items]);

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section
      data-component-id="C047"
      data-component-name="WhatWeBuildCard"
      className="w-full"
      style={{ background }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[427fr_757fr] gap-3 items-stretch">
        {/* Left: image (shared, does not change with the active card) */}
        <div className="relative min-h-[352px] lg:min-h-[460px] rounded-[10px] overflow-hidden bg-[#F5F5F5]">
          {commonImage?.src && (
            <Image
              src={commonImage.src}
              alt={commonImage.alt || 'What we build'}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-[10px]"
            />
          )}
        </div>

        {/* Right: card */}
        <div
          className="rounded-[10px] overflow-hidden border flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          style={{ borderColor }}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 bg-primary px-6 py-4 sm:px-7 sm:py-5">
            <h3
              className="text-[20px] sm:text-[24px] font-normal tracking-tight leading-snug"
              style={{ color: titleColor }}
            >
              {active.title}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous"
                className="w-9 h-9 rounded-md bg-white hover:bg-white/90 transition-colors flex items-center justify-center"
                style={{ color: accentColor }}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next"
                className="w-9 h-9 rounded-md bg-white hover:bg-white/90 transition-colors flex items-center justify-center"
                style={{ color: accentColor }}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <AnimatePresence mode="wait">
            <motion.div
              key={safeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col gap-5 p-6 sm:p-7"
            >
              <p className="text-[17px] leading-relaxed" style={{ color: descriptionColor }}>
                {active.description}
              </p>

              {active.tags && active.tags.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {active.tags.map((tag, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[16px] leading-relaxed"
                      style={{ color: descriptionColor }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                        style={{ backgroundColor: accentColor }}
                      />
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              {active.whenToUse && (
                <p
                  className="text-[16px] leading-relaxed pt-4 border-t mt-auto"
                  style={{ color: descriptionColor, borderColor }}
                >
                  <strong style={{ color: accentColor }}>Best for: </strong>
                  {active.whenToUse}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
