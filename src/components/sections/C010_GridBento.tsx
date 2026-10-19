'use client';

import { motion } from 'motion/react';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
  backgroundColor: string;
  textColor: string;
  /** Overrides textColor for the description paragraph only (title stays textColor). */
  descriptionColor?: string;
  spanClass: string; // e.g. "md:col-span-2"
  imageStyle?: "blend" | "overlay";
  link?: string;
  /** Compact mode only: set false to drop the card's border. Defaults to true. */
  showBorder?: boolean;
}

export interface BentoGridProps {
  title: string;
  description?: string;
  items: BentoItem[];
  variant?: "pill" | "solid";
  /** Content-height cards (no fixed tall rows) with text anchored to the top -- for text-only solid cards without a background image/video. */
  compact?: boolean;
  /** Overrides the section's default bg-background class, e.g. "bg-[#f6f6f6]". */
  background?: string;
}

export function GridBento({ title, description, items, variant = "pill", compact = false, background = "bg-background" }: BentoGridProps) {
  return (
    <section
      data-component-id="C010"
      data-component-name="BentoGrid"
      className={`${background} py-16 sm:py-24 px-4 sm:px-8`}
    >
      <div className="max-w-300 mx-auto">
        
        {/* Header */}
        <div className={compact ? 'mb-10 sm:mb-12 text-left' : 'mb-10 sm:mb-12 text-center'}>
          <h2
            className={
              compact
                ? 'text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight leading-[1.15] max-w-3xl'
                : 'text-[28px] sm:text-[40px] lg:text-5xl font-normal text-primary tracking-tight'
            }
            style={compact ? { color: '#003640' } : undefined}
          >
            {title}
          </h2>
          {description && (
            <p className={compact ? 'mt-4 text-black max-w-2xl' : 'mt-4 text-black max-w-2xl mx-auto'}>
              {description}
            </p>
          )}
        </div>

        {/* BENTO GRID CONTAINER */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 ${compact ? 'auto-rows-auto' : 'auto-rows-[280px] sm:auto-rows-[340px]'}`}>
          {items.map((item, index) => {
            // A tile is a link only when it has a destination; otherwise it is a plain box.
            const Tile = item.link ? motion.a : motion.div;
            return (
              <Tile
                key={item.id}
                {...(item.link ? { href: item.link } : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${compact ? 'rounded-none' : 'rounded-global'} p-6 sm:p-8 flex flex-col relative overflow-hidden group ${compact ? `justify-start min-h-[220px]${item.showBorder === false ? '' : ' border border-black/15'}` : 'justify-end'} ${item.link ? 'cursor-pointer' : ''} ${item.spanClass}`}
                style={{ backgroundColor: item.backgroundColor }}
              >
              {item.videoSrc || (item.imageSrc && (item.imageSrc.includes('.mp4') || item.imageSrc.includes('/video'))) ? (
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-global">
                  <video 
                    src={item.videoSrc || item.imageSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : item.imageSrc ? (
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {variant === "solid" && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
                  )}
                </div>
              ) : null}
              
              {variant === "solid" ? (
                <div className={`relative z-10 flex flex-col gap-4 max-w-lg ${compact ? '' : 'mt-auto'}`}>
                  <h3 className="inline-flex text-[20px] sm:text-[24px] font-normal tracking-tight w-fit" style={{ color: item.textColor }}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-[15px] leading-relaxed" style={{ color: item.descriptionColor ?? item.textColor }}>
                      {item.description}
                    </p>
                  )}
                </div>
              ) : (
                <div className="relative z-10 mt-auto flex items-end">
                  <h3 className="inline-flex text-[18px] sm:text-[20px] font-normal tracking-tight text-[#003640] bg-white/95 px-5 py-2.5 rounded-global shadow-sm">
                    {item.title}
                  </h3>
                </div>
              )}
            </Tile>
          )})}
        </div>
      </div>
    </section>
  );
}