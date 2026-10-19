'use client';

import { ArrowUpRight, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export interface JobListing {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface JobListingsProps {
  tagTitle?: string;
  heading?: string;
  description?: string;
  items: JobListing[];
  emptyMessage?: string;
}

function isExternalLink(link: string): boolean {
  return link.startsWith('mailto:') || link.startsWith('http');
}

export function JobListings({ tagTitle, heading, description, items, emptyMessage = 'No open roles right now. Check back soon.' }: JobListingsProps) {
  return (
    <section
      data-component-id="C044"
      data-component-name="JobListings"
      className="w-full bg-[#fff8f0] py-16 sm:py-20 lg:py-28"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        {(tagTitle || heading || description) && (
          <div className="mb-12 lg:mb-16 max-w-2xl">
            {tagTitle && (
              <span className="text-[12px] font-semibold tracking-widest uppercase text-accent mb-4 block">
                {tagTitle}
              </span>
            )}
            {heading && (
              <h2 className="text-[32px] sm:text-[40px] font-normal text-primary tracking-tight leading-[1.15] mb-4">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {items.length === 0 ? (
          <p className="text-[15px] text-muted py-8 border-t border-border">{emptyMessage}</p>
        ) : (
          <div className="flex flex-col gap-5">
            {items.map((job, idx) => {
              const external = isExternalLink(job.link);
              const RowTag = external ? 'a' : Link;
              const rowProps = { href: job.link };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <RowTag
                    {...(rowProps as any)}
                    className="group relative flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 p-6 sm:p-7 rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_14px_40px_rgba(0,54,64,0.10)] hover:-translate-y-1"
                  >
                    {/* Ghost numeral watermark */}
                    <span className="absolute -bottom-5 -right-2 text-[100px] font-bold text-primary/[0.12] leading-none pointer-events-none select-none transition-colors duration-300 group-hover:text-accent/[0.16]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Icon chip */}
                    <div className="relative shrink-0 w-12 h-12 rounded-[12px] bg-olive-light text-accent flex items-center justify-center transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Briefcase className="w-5 h-5" strokeWidth={1.75} />
                    </div>

                    {/* Content */}
                    <div className="relative flex-1 min-w-0">
                      <h3 className="text-[18px] sm:text-[19px] font-medium text-primary group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed mt-1.5 max-w-xl">
                        {job.description}
                      </p>
                      {job.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {job.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="text-[12px] font-medium text-primary/80 bg-background border border-border rounded-full px-3 py-1 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-olive-light/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Apply button */}
                    <div className="relative shrink-0 sm:pl-4">
                      <span className="inline-flex items-center gap-2.5 bg-primary text-surface pl-5 pr-2 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-300 group-hover:bg-accent group-hover:scale-[1.03] group-hover:shadow-md">
                        Apply
                        <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </span>
                    </div>
                  </RowTag>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}