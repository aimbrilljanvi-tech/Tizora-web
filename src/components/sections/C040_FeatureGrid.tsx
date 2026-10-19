'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Mail, Layout, ArrowRight, Check } from 'lucide-react';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { SECTION_LABEL } from '../ui/labelStyles';

export interface FeatureGridItem {
  title: string;
  description: string;
  /** Optional supporting bullet points shown below the description. */
  bullets?: string[];
  imageSrc?: string;
  /** Optional descriptive alt text; defaults to the title. */
  imageAlt?: string;
  /** Only renders the "Learn more" link when a real destination is given. */
  linkHref?: string;
}

export interface FeatureGridProps {
  tagTitle?: string;
  heading?: string;
  description?: string;
  features: FeatureGridItem[];
}

const getBgClass = (index: number) => {
  const styles = [
    "bg-gradient-to-br from-[#96ce8d] to-[#7fc175] border border-[#7fc175]/50", // Green
    "bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]", // White
    "bg-[#F2F1ED] border border-[#E5E4DF]", // Light Gray/Beige
    "bg-gradient-to-br from-[#386944] to-[#2c5236] border border-[#2c5236]/50", // Deep Green
  ];
  return styles[index % styles.length];
};

// The deep-green card (index 3) is dark enough to need light text/icon
// treatment instead of the default dark-on-light styling.
const isDarkCard = (index: number) => index % 4 === 3;

const getIcon = (title: string, dark: boolean) => {
   const iconClass = `w-7 h-7 ${dark ? 'text-white' : 'text-gray-900'}`;
   const t = title.toLowerCase();
   if (t.includes('scope') || t.includes('social')) return <Globe className={iconClass} strokeWidth={1.2} />;
   if (t.includes('prototype') || t.includes('email')) return <Mail className={iconClass} strokeWidth={1.2} />;
   if (t.includes('execution') || t.includes('website')) return <Globe className={iconClass} strokeWidth={1.2} />;
   return <Layout className={iconClass} strokeWidth={1.2} />;
};

export function FeatureGrid({ tagTitle, heading, description, features }: FeatureGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Which card is in view, for the phone pagination dots.
  const [activeIdx, setActiveIdx] = useState(0);

  const onScroll = () => {
    const el = scrollContainerRef.current;
    if (!el || el.children.length < 2) return;
    const step = (el.children[1] as HTMLElement).offsetLeft - (el.children[0] as HTMLElement).offsetLeft;
    setActiveIdx(Math.min(features.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };

  const goTo = (i: number) => {
    const el = scrollContainerRef.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (el && child) el.scrollTo({ left: child.offsetLeft - (el.children[0] as HTMLElement).offsetLeft, behavior: 'smooth' });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 450 + 32 : window.innerWidth * 0.85 + 24;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section data-component-id="C040" data-component-name="FeatureGrid" className="font-sans py-14 px-5 sm:px-8 md:py-24 md:px-12 bg-[#F6F5F2]"> 
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-7 md:mb-12">
           <div className="max-w-3xl">
              {tagTitle && <span className={`${SECTION_LABEL} mb-2 md:mb-3 block`}>{tagTitle}</span>}
              {heading && <h2 className="text-[28px] sm:text-4xl md:text-[2.75rem] font-normal text-gray-900 mb-3 md:mb-4 leading-[1.15]">{heading}</h2>}
              {description && <p className="text-[15px] md:text-lg text-black max-w-2xl">{description}</p>}
           </div>
           <div className="hidden md:flex gap-6 mb-2">
             <button onClick={() => scroll('left')} className="text-gray-800 hover:text-gray-500 transition-colors" aria-label="Previous">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
             </button>
             <button onClick={() => scroll('right')} className="text-gray-800 hover:text-gray-500 transition-colors" aria-label="Next">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M19 12l-7 7M19 12l-7-7"/></svg>
             </button>
           </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={onScroll}
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scroll-padding-left:1.25rem] sm:-mx-8 sm:px-8 sm:[scroll-padding-left:2rem] md:mx-0 md:gap-8 md:px-0 md:pb-8 md:[scroll-padding-left:0] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`w-[82vw] sm:w-[60vw] md:w-[420px] lg:w-[450px] flex-shrink-0 snap-start rounded-[5px] p-5 sm:p-7 md:p-10 flex flex-col overflow-hidden relative group cursor-default ${getBgClass(idx)}`}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                {getIcon(feature.title, isDarkCard(idx))}
                <h3 className={`text-[1.2rem] md:text-[1.4rem] font-normal tracking-tight leading-tight ${isDarkCard(idx) ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
              </div>
              <p className={`leading-relaxed text-[14.5px] md:text-[16px] ${feature.bullets?.length ? 'mb-3 md:mb-4' : 'mb-4 md:mb-6'} ${isDarkCard(idx) ? 'text-white/80' : 'text-gray-600'}`}>
                {feature.description}
              </p>

              {feature.bullets && feature.bullets.length > 0 && (
                <ul className="flex flex-col gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {feature.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className={`flex items-start gap-2 text-[14px] leading-snug ${isDarkCard(idx) ? 'text-white/90' : 'text-gray-700'}`}>
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isDarkCard(idx) ? 'text-white' : 'text-gray-500'}`} strokeWidth={2} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {feature.linkHref && (
                <a href={feature.linkHref} className={`text-[15px] font-medium transition-colors inline-flex items-center gap-1 mb-6 w-fit relative z-10 ${isDarkCard(idx) ? 'text-white hover:text-white/70' : 'text-gray-800 hover:text-gray-500'}`}>
                  Learn more <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}

              {/* Image well only when the card has an image (text-only cards stay compact). */}
              {feature.imageSrc && (
                <div className="mt-auto pt-3 md:pt-4 w-full h-[150px] sm:h-[180px] md:h-[220px] shrink-0">
                  <div className="w-full h-full rounded-[5px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-white relative">
                    <Image src={feature.imageSrc} alt={feature.imageAlt ?? feature.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover rounded-[5px] transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {features.length > 1 && (
          <div className="mt-1 flex justify-center gap-2 md:hidden" role="tablist" aria-label="Feature cards">
            {features.map((f, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIdx}
                aria-label={`Show ${f.title}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIdx ? 'w-6 bg-gray-800' : 'w-1.5 bg-gray-400/60'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}