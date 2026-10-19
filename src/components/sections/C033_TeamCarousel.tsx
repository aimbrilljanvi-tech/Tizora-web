'use client';

import React, { useRef } from 'react';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
}

export interface TeamCarouselProps {
  tag: string;
  title: string;
  description: string;
  members: TeamMember[];
}

export function TeamCarousel({ tag, title, description, members }: TeamCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Approximate card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      data-component-id="C033"
      data-component-name="TeamCarousel"
      className="w-full bg-[#fff8f0] min-h-screen flex flex-col justify-center py-20"
    >
      <div className="w-full flex flex-col justify-center h-full">
        {/* Header Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12 px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-black" />
              <span className="text-[13px] font-medium text-gray-500">{tag}</span>
            </div>
            
            <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-normal text-black tracking-tight mb-4">
              {title}
            </h2>
            
            <p className="text-[15px] text-black max-w-md">
              {description}
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Spacer to align first item with the max-w-7xl grid */}
          <div className="shrink-0 w-0 sm:w-2 lg:w-6 xl:w-[calc((100vw-80rem)/2+1.5rem)]" />

          {members.map((member, idx) => (
            <div 
              key={idx} 
              className="relative shrink-0 snap-start w-70 sm:w-80 md:w-90 aspect-4/5 bg-gray-100 rounded-[10px] overflow-hidden"
            >
              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 768px) 360px, 280px"
                className="object-cover"
              />
              
              {/* Floating Info Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-[10px] p-4 flex items-center justify-between shadow-sm">
                <div>
                  <h3 className="text-[16px] font-normal text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[13px] text-gray-500">
                    {member.role}
                  </p>
                </div>
                <a 
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0"
                >
                  <Linkedin size={14} fill="currentColor" strokeWidth={0} />
                </a>
              </div>
            </div>
          ))}

          {/* End Spacer to ensure last item can be scrolled fully into view */}
          <div className="shrink-0 w-0 sm:w-2 lg:w-6 xl:w-[calc((100vw-80rem)/2+1.5rem)]" />
        </div>
      </div>
    </section>
  );
}