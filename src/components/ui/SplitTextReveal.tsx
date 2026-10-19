'use client';

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

export interface SplitTextRevealProps {
  text: string;
  className?: string;
  /** 'mount' animates immediately (hero titles); 'inView' animates once scrolled into view (section headings). */
  trigger?: 'mount' | 'inView';
  /** Base delay in seconds before the first word starts. */
  delay?: number;
  /** Stagger increment per word, in seconds. */
  wordDelay?: number;
}

const wordVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Word-by-word reveal: splits text into words, each masked in an
 * overflow-hidden span, sliding up + fading in with a per-word stagger.
 *
 * Uses a single parent variant + staggerChildren instead of one
 * whileInView observer per word — with 10+ words that was creating that
 * many independent IntersectionObservers, which is what made the reveal
 * unreliable (some words firing, others stuck hidden). One observer on the
 * container, propagating "visible" down to children, is the robust pattern.
 */
export function SplitTextReveal({ text, className, trigger = 'mount', delay = 0, wordDelay = 0.06 }: SplitTextRevealProps) {
  const lines = text.split('\n');

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { delayChildren: delay, staggerChildren: wordDelay } },
  };

  const triggerProps = trigger === 'mount'
    ? { animate: 'visible' }
    : { whileInView: 'visible', viewport: { once: true, amount: 0.4 } };

  return (
    <motion.span className={className} initial="hidden" variants={containerVariants} {...triggerProps}>
      {lines.map((line, lineIdx) => {
        const words = line.split(' ');
        return (
          <span key={lineIdx} className="block">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em]">
                <motion.span className="inline-block" variants={wordVariants}>
                  {word}{i !== words.length - 1 ? ' ' : ''}
                </motion.span>
              </span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
}