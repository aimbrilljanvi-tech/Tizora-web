'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface ShowcaseHeroProps {
  data: {
    title: string;
    subtitle?: string;
    image?: string;
    video?: string;
  };
}

export function ShowcaseHero({ data }: ShowcaseHeroProps) {
  return (
    <section data-component-id="C024" data-component-name="ShowcaseHero" className="w-full h-screen overflow-hidden bg-background flex flex-col pt-25 pb-6 lg:pt-27.5">
      
      {/* Header Section (2 columns) */}
      <div className="w-full px-5 sm:px-8 lg:px-12 max-w-[1600px] mx-auto shrink-0 mb-4 lg:mb-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[36px] sm:text-[48px] lg:text-[64px] font-normal text-primary tracking-tight leading-[1.05] max-w-2xl"
        >
          {data.title}
        </motion.h2>
        {data.subtitle && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-start md:items-end gap-4 max-w-[320px]"
          >
            <p className="text-[16px] text-muted leading-relaxed text-left md:text-right mt-1 font-medium">
              {data.subtitle}
            </p>
          </motion.div>
        )}

      </div>

      {/* Main Graphic Area - Full Width */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full px-5 sm:px-8 lg:px-12 max-w-[1600px] mx-auto flex-1 min-h-0 mb-6 lg:mb-8"
      >
        <div className="relative w-full h-full rounded-global overflow-hidden bg-linear-to-br from-[#FFF5E5] via-[#FFE5D4] to-[#F3F4F6] border border-muted/20 shadow-sm">
          
          {data.video ? (
            <video src={data.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          ) : data.image ? (
            <Image src={data.image} alt={data.title} fill priority sizes="100vw" className="object-cover" />
          ) : (
            <>
              {/* Decorative Scribble */}
              <svg className="absolute inset-0 w-full h-full text-[#D94F3C] opacity-80" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <path d="M0,200 C200,100 300,300 500,200 C700,100 800,300 1000,200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" className="opacity-50" />
                <path d="M-100,250 C150,50 350,450 600,250 C850,50 950,350 1100,200" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-20" />
              </svg>

              {/* Floating Elements (Mockup of the UI cards) */}
              <div className="absolute right-[5%] md:right-[10%] top-[15%] flex flex-col gap-4 w-60 md:w-70">
                {/* Card 1 */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-global p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-muted/10 flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full border-4 border-[#F28C7E] border-r-transparent" />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-primary leading-tight">$434 / 700 (62.2%)</span>
                    <span className="text-[11px] text-muted">Spend management enabled</span>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-global p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-muted/10 -ml-2.5 md:-ml-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
                      <div className="w-4 h-2 bg-[#D94F3C] rounded-full" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-primary leading-tight">Advanced bot protection</span>
                      <span className="text-[11px] text-muted">Spend management enabled</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-muted/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-4 bg-[#F28C7E] rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                      </div>
                      <span className="text-[12px] font-medium text-primary">Activate</span>
                    </div>
                    <span className="text-[12px] font-medium text-[#4B39EF] flex items-center gap-1 hover:underline cursor-pointer">Learn more ↗</span>
                  </div>
                </motion.div>
              </div>
            </>
          )}

        </div>
      </motion.div>

    </section>
  );
}