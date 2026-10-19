'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export type BenefitSegment = string | { text: string; link: boolean };

export interface OutcomeSliderProps {
  data: {
    title: string;
    items: {
      number: string;
      title: string;
      description: BenefitSegment[];
      footerTitle: string;
      footerLogo: string;
      link?: string;
    }[];
  };
}

export function OutcomeSlider({ data }: OutcomeSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section data-component-id="C022" data-component-name="OutcomeSlider" className="w-full bg-background py-24 overflow-hidden">
      <div className="w-full px-5 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
        
        {/* Top Header Row with Border */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-12 pt-8 border-t border-border">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-normal text-primary tracking-tight max-w-2xl leading-[1.2]">
            {data.title}
          </h2>
          
          <div className="flex gap-3 shrink-0">
            <button 
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-border/80 hover:border-primary transition-colors flex items-center justify-center text-muted hover:text-primary"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-border/80 hover:border-primary transition-colors flex items-center justify-center text-muted hover:text-primary"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel Row */}
        <div className="w-full relative -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12">
          <div 
            ref={scrollRef} 
            className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.items.map((item, idx) => (
              <div 
                key={idx}
                className="snap-start shrink-0 h-auto min-h-95 sm:min-w-95 sm:max-w-95 lg:min-w-105 lg:max-w-105 rounded-global flex flex-col justify-between overflow-hidden shadow-sm relative group cursor-pointer bg-surface border border-border/80 transition-colors duration-300"
              >
                {/* Top Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <span className="text-primary text-[56px] lg:text-[72px] font-light leading-none tracking-tighter block mb-2">
                      {item.number}
                    </span>
                    <h3 className="text-[18px] lg:text-[22px] font-normal text-primary leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-[14px] text-muted leading-relaxed flex-1">
                    {item.description.map((segment, sIdx) => {
                      if (typeof segment === 'string') {
                        return <span key={sIdx}>{segment}</span>;
                      } else {
                        return (
                          <a 
                            key={sIdx} 
                            href="#" 
                          className="text-[#556B2F] underline decoration-muted/40 underline-offset-2 hover:decoration-[#556B2F] transition-colors"
                          >
                            {segment.text}
                          </a>
                        );
                      }
                    })}
                  </p>
                </div>
                
                {/* Bottom Footer Block */}
                {item.link ? (
                  <a 
                    href={item.link}
                    className="bg-[#F8F9FA] border-t border-border/60 px-8 py-5 flex items-center justify-between mt-auto hover:bg-[#F3F4F6] transition-colors rounded-b-global group/link"
                  >
                    <p className="text-[15px] font-normal text-primary">
                      {item.footerTitle}
                    </p>
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover/link:text-primary transition-colors" strokeWidth={2} />
                  </a>
                ) : (
                  <div className="bg-[#F8F9FA] border-t border-border/60 px-8 py-5 flex items-center justify-between mt-auto rounded-b-global">
                    <p className="text-[15px] font-normal text-primary">
                      {item.footerTitle}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CSS to hide scrollbar for webkit browsers */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}