'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';

export interface InShortProps {
  /** Lead-in shown before the text, e.g. "In short." */
  lead?: string;
  /** The short definition: plain text, so search and AI answer engines can quote it as is. */
  text: string;
  /** Element id (the page's speakable schema points at it). */
  id?: string;
}

/** One word that darkens from faint to full colour as its slice of the scroll progress passes. */
function Word({ children, progress, range, className, still }: { children: string; progress: MotionValue<number>; range: [number, number]; className?: string; still: boolean }) {
  const opacity = useTransform(progress, range, [still ? 1 : 0.18, 1]);
  return (
    <motion.span style={{ opacity }} className={className}>
      {children}
    </motion.span>
  );
}

/**
 * A plain-text definition directly under a hero: one or two sentences that say what the page is
 * about. Centred; the words darken one by one as the paragraph scrolls into view. The full text is
 * always in the HTML, and with reduced motion it shows at full colour straight away.
 */
export function InShort({ lead = 'In short.', text, id = 'in-short' }: InShortProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.6'] });

  const words = [...lead.split(' ').map((w) => ({ w, lead: true })), ...text.split(' ').map((w) => ({ w, lead: false }))];
  const n = words.length;

  return (
    <section
      data-component-id="C057"
      data-component-name="InShort"
      className="w-full bg-background border-b border-border/40 pt-14 pb-14 lg:pt-20 lg:pb-20"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <p
          ref={ref}
          id={id}
          className="mx-auto max-w-4xl text-center text-[20px] sm:text-[24px] lg:text-[28px] font-normal leading-[1.45] tracking-tight text-primary"
        >
          {words.map(({ w, lead: isLead }, i) => {
            const cls = isLead ? 'text-accent' : undefined;
            const word = i < n - 1 ? `${w} ` : w;
            // Same markup either way (no hydration mismatch); with reduced motion the words simply start at full colour.
            return (
              <Word key={i} progress={scrollYProgress} range={[i / n, (i + 1) / n]} className={cls} still={!!reduce}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
