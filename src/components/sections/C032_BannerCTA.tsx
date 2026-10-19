'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { SplitTextReveal } from '../ui/SplitTextReveal';

export interface BannerCTAProps {
  data: {
    heading: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
    /** Optional lighter second action shown next to the main button. */
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    /** Overrides the default right-side image. */
    image?: string;
    /** Alt text for the image; empty (decorative) by default. */
    imageAlt?: string;
  };
  animatedText?: boolean;
}

export function BannerCTA({ data, animatedText = false }: BannerCTAProps) {
  return (
    <section 
      data-component-id="C032"
      data-component-name="BannerCTA"
      className="w-full"
    >
      <div className="relative w-full bg-[#003640]">
        
        {/* Subtle Grid Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden">
          
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center gap-4 sm:gap-6 px-5 py-9 sm:p-14 lg:p-20 lg:pr-8">
            <h2 className="text-[25px] sm:text-4xl lg:text-[44px] font-normal text-white leading-[1.15] tracking-tight">
              {animatedText ? <SplitTextReveal text={data.heading} trigger="inView" wordDelay={0.03} /> : data.heading}
            </h2>
            <p className="text-[14.5px] sm:text-[15px] text-white/80 leading-relaxed max-w-lg mb-0 sm:mb-4">
              {animatedText ? <SplitTextReveal text={data.description} trigger="inView" wordDelay={0.014} /> : data.description}
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:pt-2">
              <a 
                href={data.buttonLink || '#'}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14.5px] font-normal text-[#003640] shadow-sm transition-colors hover:bg-gray-100 sm:inline-flex sm:w-auto"
              >
                {data.buttonText}
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              {data.secondaryButtonText && (
                <a
                  href={data.secondaryButtonLink || '#'}
                  className="flex w-full items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-[14.5px] font-normal text-white transition-colors hover:bg-white/10 sm:inline-flex sm:w-auto"
                >
                  {data.secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          {/* Right: Faded Tech Video */}
          <div className="relative h-44 sm:h-64 lg:h-full lg:min-h-75 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={data.image || "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393694/Ready_to_Transform_Your_Engineering-CTA.jpg"}
                alt={data.imageAlt ?? ""}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-[#003640] via-[#003640]/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}