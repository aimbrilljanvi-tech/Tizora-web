'use client';

import { motion } from 'motion/react';
import { SplitTextReveal } from '../ui/SplitTextReveal';
import { SECTION_LABEL } from '../ui/labelStyles';

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface StatBandProps {
  tagTitle?: string;
  heading?: string;
  stats: StatItem[];
}

export function StatBand({ tagTitle, heading, stats }: StatBandProps) {
  return (
    <section
      data-component-id="C043"
      data-component-name="StatBand"
      className="w-full bg-[#fff8f0] border-y border-primary/25 py-16 lg:py-20"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
        {(tagTitle || heading) && (
          <div className="mb-12 lg:mb-16 max-w-2xl">
            {tagTitle && (
              <span className={`${SECTION_LABEL} mb-4 block`}>
                {tagTitle}
              </span>
            )}
            {heading && (
              <h2 className="text-[26px] sm:text-[32px] font-normal text-primary tracking-tight leading-[1.2]">
                <SplitTextReveal text={heading} trigger="inView" wordDelay={0.04} />
              </h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col gap-3 ${idx !== 0 ? 'lg:pl-8 lg:border-l lg:border-primary/25' : ''}`}
            >
              <span className="text-[36px] sm:text-[42px] font-normal text-primary tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="text-[14px] font-medium text-primary/80">
                {stat.label}
              </span>
              {stat.description && (
                <span className="text-[16px] text-muted leading-relaxed">
                  {stat.description}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}