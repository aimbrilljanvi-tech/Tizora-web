'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface CommunityGridProps {
  data: {
    tagline: string;
    headingPart1: string;
    headingHighlight: string;
    headingPart2: string;
    buttonText: string;
    buttonAction?: () => void;
    /** Where the button goes. When set, the button is a link. */
    buttonHref?: string;
    images: string[]; // exactly 8 images expected
  };
  className?: string; // Optional override for the section wrapper
  /** Render the heading as the page's h1 (when this section is the page hero). */
  headingAs?: 'h1' | 'h2';
}

export function CommunityGrid({ data, className = "py-16 sm:py-24", headingAs = "h2" }: CommunityGridProps) {
  const Heading = headingAs;
  // Use unique images from data
  const imgs = data.images;

  // Define the grid cell layout for 8 columns x 4 rows
  // Creating a chessboard pattern of alternating 'img' and 'blank' cells
  const layout = [
    // Row 0
    { type: 'img', index: 0 },
    { type: 'blank' },
    { type: 'img', index: 1 },
    { type: 'blank' },
    { type: 'img', index: 2 },
    { type: 'blank' },
    { type: 'img', index: 3 },
    { type: 'blank' },

    // Row 1
    { type: 'blank' },
    { type: 'img', index: 4 },
    { type: 'blank' },
    { type: 'img', index: 5 },
    { type: 'blank' },
    { type: 'img', index: 6 },
    { type: 'blank' },
    { type: 'img', index: 7 },

    // Row 2 (starts with text block col-span-3 row-span-2)
    { type: 'text' },
    { type: 'blank' },
    { type: 'img', index: 8 },
    { type: 'blank' },
    { type: 'img', index: 9 },
    { type: 'blank' },

    // Row 3 (starts at col 3 because of text block)
    { type: 'img', index: 10 },
    { type: 'blank' },
    { type: 'img', index: 11 },
    { type: 'blank' },
    { type: 'img', index: 12 },
  ];

  return (
    <section data-component-id="C028" data-component-name="CommunityGrid" className={`w-full bg-white overflow-hidden ${className}`}>
      <div className="w-full h-full">

        {/* The Grid Container - Using 1px gap and background color to draw thin lines */}
        <div className="bg-border/60 gap-[1px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border-y border-border/60 overflow-hidden">

          {layout.map((cell, i) => {

            if (cell.type === 'text') {
              return (
                <div
                  key={i}
                  className="bg-white col-span-2 md:col-span-4 lg:col-span-3 row-span-1 md:row-span-2 p-8 lg:p-12 flex flex-col justify-center items-start order-first lg:order-none"
                >
                  <div className="mb-8 inline-flex items-center justify-center px-3 py-1 rounded-full border border-border/50 text-[10px] sm:text-[11px] font-medium tracking-[0.1em] text-muted uppercase bg-surface">
                    {data.tagline}
                  </div>

                  <Heading className="text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-normal text-primary tracking-tight mb-12 max-w-lg">
                    {data.headingPart1}{' '}
                    <span className="text-muted/70">{data.headingHighlight}</span>{' '}
                    {data.headingPart2}
                  </Heading>

                  {data.buttonHref ? (
                    <Link
                      href={data.buttonHref}
                      className="flex items-center gap-3 bg-primary hover:opacity-90 text-white transition-colors duration-300 rounded-[6px] px-6 py-3 text-[14px] font-medium shadow-sm"
                    >
                      {data.buttonText}
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </Link>
                  ) : (
                  <button
                    onClick={data.buttonAction}
                    className="flex items-center gap-3 bg-primary hover:opacity-90 text-white transition-colors duration-300 rounded-[6px] px-6 py-3 text-[14px] font-medium shadow-sm"
                  >
                    {data.buttonText}
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </button>
                  )}
                </div>
              );
            }

            if (cell.type === 'img') {
              // Create pseudo-random but deterministic timing per cell
              // Increased duration so it stays visible longer, accounting for the new gaps
              const duration = 9 + (i % 4) * 3;
              const delay = (i * 0.7) % 5;

              // Give each cell a unique slice of images so they never show duplicates
              // Since there are 13 image cells, we distribute the total images across them.
              const cellImages = imgs.length >= 13
                ? imgs.filter((_, idx) => idx % 13 === cell.index)
                : imgs;

              return (
                <div key={i} className={`bg-white p-2 sm:p-4 lg:p-5 items-center justify-center h-full min-h-[120px] ${cell.index === 12 ? 'hidden lg:flex' : 'flex'}`}>
                  <AnimatedCell images={cellImages} delay={delay} duration={duration} />
                </div>
              );
            }

            if (cell.type === 'blank') {
              return (
                <div key={i} className="bg-white hidden lg:block h-full min-h-[120px]" />
              );
            }

            return null;
          })}

        </div>
      </div>
    </section>
  );
}

function AnimatedCell({ images, delay }: { images: string[], delay: number, duration: number }) {
  // Server and client must agree on the first-rendered image, so start
  // deterministically (index 0) and only randomize once mounted -- picking
  // Math.random() here directly would render a different index on the
  // server than on the client and break hydration.
  const [index, setIndex] = React.useState(0);

  // All cells start invisible to create a "slowly appearing" effect on mount
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;
    let currentTimeout: NodeJS.Timeout;

    setIndex(Math.floor(Math.random() * images.length));

    const loop = (isCurrentlyVisible: boolean) => {
      if (!isMounted) return;

      if (isCurrentlyVisible) {
        // It is visible. Stay visible for a random duration (4 to 9 seconds).
        const visibleTime = 4000 + Math.random() * 5000;
        currentTimeout = setTimeout(() => {
          if (!isMounted) return;
          setIsVisible(false); // Trigger fade out

          // Wait 1.5s for fade out transition to finish
          currentTimeout = setTimeout(() => {
             if (!isMounted) return;
             // Swap image while perfectly invisible
             setIndex(Math.floor(Math.random() * images.length));
             loop(false); // Move to hidden state loop
          }, 1500);
        }, visibleTime);
      } else {
        // It is hidden. Stay hidden for a random duration (3 to 7 seconds gap).
        const hiddenTime = 3000 + Math.random() * 4000;
        currentTimeout = setTimeout(() => {
          if (!isMounted) return;
          setIsVisible(true); // Trigger fade in
          loop(true); // Move to visible state loop
        }, hiddenTime);
      }
    };

    // Stagger the initial appearance using the unique delay
    const initialTimer = setTimeout(() => {
      if (!isMounted) return;
      setIsVisible(true); // First fade in!

      // Let it stay visible for its first cycle, then start the loop
      currentTimeout = setTimeout(() => {
        loop(true);
      }, 5000 + Math.random() * 4000);
    }, delay * 1000);

    return () => {
      isMounted = false;
      clearTimeout(initialTimer);
      clearTimeout(currentTimeout);
    };
  }, [images.length, delay]);

  return (
    <motion.div
      className="w-full aspect-square !rounded-none overflow-hidden bg-surface relative"
      style={{ borderRadius: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <Image
        src={images[index]}
        alt="Community Member"
        fill
        sizes="(min-width: 1024px) 20vw, 33vw"
        className="object-cover !rounded-none"
        style={{ borderRadius: 0 }}
      />
    </motion.div>
  );
}