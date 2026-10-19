'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ImageIcon } from 'lucide-react';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { inlineLinks } from '@/lib/caseStudyLinks';

export interface ProcessUIStep {
  /** Pill text; defaults to "Step N". */
  label?: string;
  title: string;
  description: string;
  /** Illustration for the step. When omitted, the image well stays empty with a faint icon. */
  image?: string;
  imageAlt?: string;
}

export interface ProcessUIProps {
  heading: string;
  /** Optional line under the heading. */
  description?: string;
  steps: ProcessUIStep[];
  /**
   * Most steps shown side by side on wide screens (default 4). With more steps than this,
   * the row becomes a swipeable carousel with previous/next arrows.
   */
  maxVisible?: 2 | 3 | 4;
  /** "contain" (default) frames illustrations on a grey panel; "cover" lets photos fill the whole slot. */
  imageFit?: 'contain' | 'cover';
}

// Grid columns by step count (Tailwind needs literal class names).
const LG_COLS: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

// Carousel slide widths: most of the width on phones, two per view on tablets, `maxVisible` on desktop.
const SLIDE_BASIS: Record<number, string> = {
  2: 'basis-[85%] md:basis-1/2',
  3: 'basis-[85%] md:basis-1/2 lg:basis-1/3',
  4: 'basis-[85%] md:basis-1/2 lg:basis-1/4',
};


/**
 * Step-by-step process on a light card (no side guides): a centred heading, a row of step pills, and one column per step (title, description, illustration well) split by hairlines.
 * Hovering, focusing or tapping a step makes it active: its pill turns olive (#003640) and its well
 * fills the column edge to edge. More steps than `maxVisible` turn the row into a carousel.
 */
export function ProcessUI({ heading, description, steps, maxVisible = 4, imageFit = 'contain' }: ProcessUIProps) {
  const cover = imageFit === 'cover';
  const [active, setActive] = useState(0);
  const isCarousel = steps.length > maxVisible;
  // Text-only processes (no step has an illustration) skip the image wells entirely.
  const hasImages = steps.some((s) => s.image);
  const trackRef = useRef<HTMLOListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }, []);

  useEffect(() => {
    if (!isCarousel) return;
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [isCarousel, updateEdges]);

  /** Scrolls one slide left or right and makes the step now leading the view active. */
  const go = (dir: -1 | 1) => {
    const el = trackRef.current;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) return;
    const width = first.offsetWidth;
    const next = Math.max(0, Math.min(steps.length - 1, Math.round(el.scrollLeft / width) + dir));
    el.scrollTo({ left: next * width, behavior: 'smooth' });
    setActive(next);
  };

  return (
    <section
      data-component-id="C056"
      data-component-name="ProcessUI"
      className="w-full bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] rounded-[20px] bg-[#fbfbfb] px-4 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.04] sm:px-8 lg:px-12 xl:px-14">
        <div className="pb-12 pt-14 sm:pb-14 sm:pt-16 lg:pt-[72px]">
          <h2 className="mx-auto max-w-[760px] px-4 text-center text-[28px] font-normal leading-[1.15] tracking-tight text-primary sm:text-[40px]">
            {heading}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-[680px] px-4 text-center text-[15px] leading-relaxed text-muted sm:text-[17px]">
              {inlineLinks(description)}
            </p>
          )}

          <ol
            ref={isCarousel ? trackRef : undefined}
            onScroll={isCarousel ? updateEdges : undefined}
            className={`m-0 mt-10 list-none p-0 sm:mt-12 ${
              isCarousel
                ? 'flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                : `grid grid-cols-1 md:grid-cols-2 ${LG_COLS[steps.length] ?? 'lg:grid-cols-4'}`
            }`}
          >
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <li
                  key={step.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`flex flex-col ${isCarousel ? `shrink-0 snap-start ${SLIDE_BASIS[maxVisible]}` : 'pt-6 first:pt-0 md:pt-0'}`}
                >
                  {/* Pill */}
                  <div>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      className={`rounded-[8px] px-3 py-2 text-[13px] leading-none transition-colors duration-300 ${
                        isActive
                          ? 'border border-[#003640] bg-[#003640] text-white'
                          : 'border border-[#003640]/15 bg-[#003640]/[0.06] text-[#003640] hover:bg-[#003640]/10'
                      }`}
                    >
                      {step.label ?? `Step ${i + 1}`}
                    </button>
                  </div>


                  {/* Column body, split from its neighbour by a hairline */}
                  <div
                    className={`mt-3 flex flex-1 flex-col md:border-[rgba(0,0,0,0.14)] ${
                      isCarousel
                        ? i > 0 ? 'md:border-l' : ''
                        : // Grid: a divider only between neighbours in the same row (2 per row on tablets, all in one row on desktop).
                          `${i % 2 ? 'md:border-l' : ''} ${i > 0 ? 'lg:border-l' : ''}`
                    }`}
                  >
                    <div className="px-3.5 pb-6 pt-7 lg:px-5">
                      <h3 className="text-[17px] font-normal leading-snug tracking-tight text-primary">{step.title}</h3>
                      <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{inlineLinks(step.description)}</p>
                    </div>

                    {/* Illustration well: inset card normally, edge-to-edge when active */}
                    {hasImages && (
                    <div
                      className={`mt-auto h-[130px] sm:h-[170px] lg:h-[200px] transition-[padding,background-color] duration-300 ${
                        cover ? 'p-4 lg:p-5' : isActive ? 'bg-[#f1f2f4] p-0' : 'bg-transparent p-4 lg:p-5'
                      }`}
                    >
                      <div
                        className={`relative flex h-full w-full items-center justify-center overflow-hidden transition-[border-radius,background-color] duration-300 ${
                          cover ? 'rounded-[5px]' : isActive ? 'rounded-none bg-transparent' : 'rounded-[8px] bg-[#f1f2f4]'
                        }`}
                      >
                        {step.image ? (
                          <Image
                            src={step.image}
                            alt={step.imageAlt ?? step.title}
                            fill
                            sizes="(min-width: 1024px) 240px, (min-width: 768px) 45vw, 90vw"
                            className={cover ? 'object-cover' : 'object-contain p-3'}
                          />
                        ) : (
                          <ImageIcon aria-hidden className="h-7 w-7 text-black/15" strokeWidth={1.25} />
                        )}
                      </div>
                    </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          {isCarousel && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={edges.start}
                aria-label="Previous step"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-primary transition-colors hover:border-[#003640] hover:bg-[#003640] hover:text-white disabled:pointer-events-none disabled:opacity-35"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </button>
              <span className="min-w-[4.5rem] text-center text-[13px] tabular-nums text-muted">
                {active + 1} / {steps.length}
              </span>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={edges.end}
                aria-label="Next step"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-primary transition-colors hover:border-[#003640] hover:bg-[#003640] hover:text-white disabled:pointer-events-none disabled:opacity-35"
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
