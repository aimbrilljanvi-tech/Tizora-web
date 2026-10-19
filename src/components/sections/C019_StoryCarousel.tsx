'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface StoryCarouselProps {
  data: {
    title: string;
    description: string;
    items?: {
      number?: string;
      color: string;
      title: string;
      description: string;
      image: string;
      /** Descriptive alt text for the card image; defaults to the title. */
      imageAlt?: string;
      link?: string;
      linkText?: string;
    }[];
  };
}

export function StoryCarousel({ data }: StoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    // Callers always pass real, derived items (see getRelatedCaseStudies) --
    // no placeholder/demo fallback here, so there's nothing to show if a
    // caller passes none.
    const sourceStories = data.items || [];
    const pathname = window.location.pathname;
    const filtered = sourceStories.filter(s => s.link !== pathname);
    setStories(filtered);
  }, [data.items]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section data-component-id="C019" data-component-name="StoryCarousel" className="w-full bg-background pt-16 lg:pt-24 pb-8 lg:pb-12 overflow-hidden">

      <div className="w-full">
        {/* Top Header Row: Title & Arrows */}
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 lg:mb-16">
          <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-normal text-primary tracking-tight leading-[1.1]">
            {data.title || 'Related case studies'}
          </h2>

          <div className="flex gap-4 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-[#111] hover:bg-primary transition-colors flex items-center justify-center text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-[#111] hover:bg-primary transition-colors flex items-center justify-center text-white"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable track — paragraph is first item, scrolls with cards */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 lg:gap-8 overflow-x-auto pb-8 pl-12 sm:pl-16 lg:pl-24 pr-5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .rs-hide-sb::-webkit-scrollbar { display: none; }
            .sc-card {
              width: 320px;
              border-radius: 0.5rem;
              background-color: #fff;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
              border: 1px solid rgba(0,0,0,0.05);
              overflow: hidden;
              display: flex;
              flex-direction: column;
            }
            .sc-card a {
              text-decoration: none;
            }
            .sc-content {
              padding: 1.5rem;
              display: flex;
              flex-direction: column;
              flex-grow: 1;
            }
            .sc-image {
              position: relative;
              object-fit: cover;
              width: 100%;
              height: 180px;
              background-color: rgb(239, 205, 255);
              flex-shrink: 0;
            }
            .sc-image img {
              border-radius: 0;
            }
            .sc-title {
              color: #111827;
              font-size: 1.125rem;
              line-height: 1.75rem;
              font-weight: 600;
              min-height: 3.5rem;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .sc-desc {
              margin-top: 0.75rem;
              margin-bottom: 1.5rem;
              color: #6B7280;
              font-size: 0.875rem;
              line-height: 1.25rem;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .sc-action {
              display: inline-flex;
              margin-top: auto;
              color: #ffffff;
              font-size: 0.875rem;
              line-height: 1.25rem;
              font-weight: 500;
              align-items: center;
              gap: 0.25rem;
              padding: 6px 12px;
              border-radius: 6px;
              align-self: flex-start;
            }
            .sc-action span {
              transition: .3s ease;
            }
            .sc-action:hover span {
              transform: translateX(4px);
            }
          `}</style>

          {/* Description paragraph — wide, scrolls with cards */}
          <div className="rs-hide-sb min-w-65 sm:min-w-75 lg:min-w-85 max-w-85 shrink-0 pt-2 self-start">
            <p className="text-[15px] sm:text-[16px] text-gray-800 leading-relaxed font-medium">
              {data.description}
            </p>
          </div>

          {/* Cards */}
          {stories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="shrink-0 flex flex-col"
            >
              <div className="sc-card flex-1">
                <div className="sc-image">
                  <Image src={item.image} alt={item.imageAlt ?? item.title} fill sizes="320px" className="object-cover" />
                </div>
                <div className="sc-content">
                  <a href={item.link}>
                    <span className="sc-title">
                      {item.title}
                    </span>
                  </a>
                  <p className="sc-desc">
                    {item.description}
                  </p>
                  <a className="sc-action" href={item.link} style={{ backgroundColor: item.color || '#2563EB' }}>
                    View case study
                    <span aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Trailing spacer */}
          <div className="shrink-0 w-8" />
        </div>
      </div>
    </section>
  );
}