'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface CaseStudy {
  id: string;
  type: "large" | "standard";
  category?: string;
  title: ReactNode;
  description: string;
  industry?: string;
  image?: string;
  /** Descriptive alt text for the thumbnail (defaults to the title). */
  imageAlt?: string;
  video?: string;
  bgColor: string;
  isImage?: boolean;
  link?: string;
  /** Visible link text under the description. When set, this text is the card's only link (it still covers the whole card), so the anchor text is exactly this. */
  linkLabel?: string;
  /** @deprecated The byline (author, reading time) was removed from every card; these fields are accepted but ignored. */
  author?: string;
  /** @deprecated See `author`. */
  readingTime?: number;
}

export interface CaseStudiesProps {
  tagTitle?: string;
  heading?: string;
  buttonText?: string;
  /** Where the header button goes. The button is only shown when it has somewhere to go. */
  buttonHref?: string;
  studies: CaseStudy[];
  className?: string;
}

export function CardGrid({ tagTitle, heading, buttonText, buttonHref, studies, className }: CaseStudiesProps) {
  return (
    <section 
      data-component-id="C004" 
      data-component-name="CardGrid"
      className={className || "bg-background pt-12 sm:pt-20 lg:pt-24 pb-12 sm:pb-20 lg:pb-24"}
    >
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        {heading && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-7 sm:mb-16">
            <div>
              {tagTitle && (
                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                  <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-surface text-[11px] sm:text-[12px] font-semibold leading-none">
                    2
                  </div>
                  <div className="text-[12px] sm:text-[13px] font-medium bg-surface rounded-full px-4 py-1.5 leading-none shadow-sm text-primary">
                    {tagTitle}
                  </div>
                </div>
              )}
              <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-normal leading-[1.1] sm:leading-[1.05] tracking-tight text-primary max-w-4xl whitespace-pre-line">
                {heading}
              </h2>
            </div>
            
            {buttonText && buttonHref && (
              <Link href={buttonHref} className="bg-accent hover:bg-accent-hover text-surface rounded-full pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-2 sm:py-2.5 flex items-center gap-3 sm:gap-4 transition-colors group mb-0 md:mb-4 self-start">
                <span className="text-[13px] sm:text-[14px] font-normal tracking-wide whitespace-nowrap">{buttonText}</span>
                <div className="bg-surface text-accent w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </div>
              </Link>
            )}
          </div>
        )}

        {/* Uniform 3-Column Grid */}
        <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2 sm:pb-0 -mx-5 px-5 [scroll-padding-left:1.25rem] sm:mx-0 sm:px-0 sm:[scroll-padding-left:0] hide-scrollbar">
          {studies.map((study, index) => {
            const isClickable = !!study.link;
            // With a link label the card is a div and the label carries the link, stretched over the card.
            const labelled = isClickable && !!study.linkLabel;
            const Card = labelled ? motion.div : motion.a;

            return (
              <Card
                key={study.id}
                href={labelled ? undefined : study.link || undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col shrink-0 w-[78vw] sm:w-auto snap-start sm:snap-align-none ${isClickable ? 'group cursor-pointer' : ''}`}
              >
                {/* Even margin on all four sides, sized for a 1600x900 (16:9) thumbnail so nothing gets cropped. */}
                <div className="w-full aspect-video relative mb-3 sm:mb-5 group-hover:shadow-lg transition-shadow rounded-[10px] overflow-hidden bg-[#f6f6f6] p-2" style={{ transform: 'translateZ(0)' }}>
                  <div className="relative h-full w-full overflow-hidden rounded-[5px]">
                    {study.image && (
                      <Image
                        src={study.image}
                        alt={study.imageAlt ?? (typeof study.title === 'string' ? study.title : '')}
                        fill
                        sizes="(min-width: 1024px) 350px, 72vw"
                        className={`object-cover transition-transform duration-700 ${isClickable ? 'group-hover:scale-105' : ''}`}
                      />
                    )}
                    {study.video && (
                      <video
                        src={study.video}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isClickable ? 'group-hover:scale-105' : ''}`}
                        autoPlay loop muted playsInline
                      />
                    )}
                  </div>

                  {/* Border Overlay */}
                  <div className="absolute inset-0 border border-border pointer-events-none z-10 rounded-[10px]" />

                  {isClickable && (
                    <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-9 h-9 sm:w-11 sm:h-11 bg-accent rounded-full flex items-center justify-center shadow-lg z-20">
                      <ArrowUpRight className="w-5 h-5 text-surface" />
                    </div>
                  )}
                </div>
                <div className="px-1">
                  <h3 className="text-primary font-normal text-[17px] sm:text-[20px] leading-snug mb-1.5 sm:mb-2">{typeof study.title === 'string' ? study.title : study.industry}</h3>
                  <p className="text-muted text-[14px] sm:text-[16px] leading-relaxed line-clamp-3 sm:line-clamp-none">{study.description}</p>
                  {labelled && (
                    <Link
                      href={study.link!}
                      className="mt-3 inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] text-accent underline decoration-accent/40 underline-offset-4 transition-colors group-hover:decoration-accent after:absolute after:inset-0 after:content-['']"
                    >
                      {study.linkLabel}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}