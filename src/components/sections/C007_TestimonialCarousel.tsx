import { Star } from 'lucide-react';
import React from 'react';

export interface TestimonialItem {
  type: string;
  stars?: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  isLogo?: boolean;
}

export interface TestimonialsProps {
  tagTitle?: string;
  heading?: string;
  description?: string;
  testimonials: TestimonialItem[];
}

const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => {
  const isDark = item.type === 'dark';
  const isColored = item.type === 'colored';
  const isLight = item.type === 'light';

  let bgClass = "bg-surface text-primary shadow-sm border border-border";
  if (isDark) bgClass = "bg-primary text-surface";
  if (isColored) bgClass = "bg-accent text-surface shadow-lg";

  return (
    <div className={`relative p-6 lg:p-8 rounded-[1.2rem] flex flex-col justify-between ${bgClass} h-full`}>
      <span 
        className="absolute top-4 right-6 text-7xl leading-none select-none" 
        style={{ color: isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)' }}
      >
        &quot;
      </span>

      <div className="relative z-10">
        {item.stars && (
          <div className="flex gap-1.5 mb-4 lg:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3.5 h-3.5 ${i < item.stars! ? 'fill-current' : 'fill-transparent opacity-30'} ${isLight ? 'text-primary' : 'text-surface'}`} 
              />
            ))}
          </div>
        )}

        <p className={`text-[13px] sm:text-[14px] leading-relaxed ${isDark || isColored ? 'font-medium text-surface/90' : 'font-normal text-muted'}`}>
          &quot;{item.quote}&quot;
        </p>
      </div>

      <div className="flex items-center gap-3 mt-6 lg:mt-8 relative z-10">
        <img 
          src={item.avatar} 
          alt={item.name} 
          className={item.isLogo ? "h-6 lg:h-8 w-auto max-w-[120px] object-contain shrink-0 rounded-none!" : "w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover shrink-0"} 
        />
        <div>
          <p className={`text-[13px] font-medium leading-tight ${isDark || isColored ? 'text-surface' : 'text-primary'}`}>{item.name}</p>
          <p className={`text-[11px] mt-0.5 ${isDark || isColored ? 'text-surface/70' : 'text-muted font-medium'}`}>{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCarousel({ 
  tagTitle = "Testimonials",
  heading = "Trusted by Teams Worldwide",
  description = "Join thousands of teams globally who rely on our solutions to collaborate, scale, and succeed.",
  testimonials 
}: TestimonialsProps) {
  // Simple masonry-style distribution
  const col1 = [testimonials[0], testimonials[4]].filter(Boolean);
  const col2 = [testimonials[1], testimonials[3], testimonials[5]].filter(Boolean);
  const col3 = [testimonials[2], testimonials[6]].filter(Boolean);

  return (
    <section 
      data-component-id="C007" 
      data-component-name="Testimonials"
      className="py-12 lg:py-20 bg-background px-4 sm:px-8 lg:px-16 flex flex-col min-h-screen"
    >
      <div className="max-w-275 mx-auto w-full flex flex-col flex-1 h-full">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-14 shrink-0">
          <div className="flex items-center gap-2 mb-3 lg:mb-4">
            <span className="text-accent">✦</span>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-primary">{tagTitle}</span>
          </div>
          <h2 className="text-[24px] sm:text-[36px] lg:text-[42px] font-normal tracking-tight text-primary leading-[1.05] mb-4">
            {heading}
          </h2>
          <p className="text-[13px] sm:text-[14px] text-black max-w-105 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-stretch flex-1">
          
          <div className="flex flex-col gap-5 lg:gap-6 flex-1 lg:w-1/3">
            {col1.map((item, idx) => <TestimonialCard key={idx} item={item} />)}
          </div>

          <div className="flex flex-col gap-5 lg:gap-6 flex-1 lg:w-1/3">
            {col2.map((item, idx) => <TestimonialCard key={idx} item={item} />)}
          </div>

          <div className="flex flex-col gap-5 lg:gap-6 flex-1 lg:w-1/3">
            {col3.map((item, idx) => <TestimonialCard key={idx} item={item} />)}
          </div>

        </div>

      </div>
    </section>
  );
}

