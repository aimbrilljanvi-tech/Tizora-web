'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  whenToUse: string;
  tags: string[];
  dark: boolean;
  img: string;
  link?: string;
}

export interface ServicesProps {
  tagTitle: string;
  heading: ReactNode;
  description: string;
  items: ServiceItem[];
  className?: string;
}

export function ServiceList({ tagTitle, heading, description, items, className }: ServicesProps) {
  const router = useRouter();
  return (
    <section 
      data-component-id="C005" 
      data-component-name="Services"
      className={className || "bg-[#fff8f0] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24"}
    >
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-surface text-[11px] sm:text-[12px] font-semibold leading-none">
              4
            </div>
            <div className="text-[12px] sm:text-[13px] font-medium bg-background rounded-full px-4 py-1.5 leading-none text-primary">
              {tagTitle}
            </div>
          </div>

          <h2 className="text-[clamp(2rem,4.5vw,3.8rem)] font-normal leading-[1.06] tracking-tight text-primary max-w-200 whitespace-pre-line">
            {heading}
          </h2>
          <p className="mt-5 text-[16px] sm:text-[18px] text-black max-w-175 leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {items.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              onClick={() => svc.link && router.push(svc.link)}
              className={`group relative rounded-[18px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 lg:p-12 min-h-130 sm:min-h-150 lg:min-h-165 ${svc.link ? 'cursor-pointer' : ''} ${svc.dark ? 'bg-primary' : 'bg-background'}`}
            >
              {/* Hover image */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className={`absolute inset-0 ${svc.dark ? 'bg-primary/50' : 'bg-surface/75'}`} />
              </div>

              {/* Top: discipline label + tags */}
              <div className="relative z-10 flex flex-col gap-5">
                <span className={`text-[11px] font-medium tracking-[0.12em] uppercase ${svc.dark ? 'text-surface/35' : 'text-primary/35'}`}>
                  Discipline {svc.num}
                </span>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[12px] sm:text-[13px] font-medium px-4 py-1.5 rounded-full backdrop-blur-md ${
                        svc.dark ? 'bg-surface/10 text-surface' : 'bg-primary/5 text-primary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: title + description + when-to-use + CTA */}
              <div className="relative z-10 flex flex-col gap-3 mt-auto pt-10">
                <h3
                  className={`text-[26px] sm:text-[32px] lg:text-[38px] font-medium tracking-tight leading-[1.1] ${svc.dark ? 'text-surface' : 'text-primary'}`}
                >
                  {svc.title}
                </h3>
                <p className={`text-[14px] sm:text-[15px] leading-relaxed max-w-95 ${svc.dark ? 'text-surface/65' : 'text-muted'}`}>
                  {svc.description}
                </p>
                <p className="text-[12px] sm:text-[13px] font-semibold tracking-wide italic text-accent mt-1">
                  {svc.whenToUse}
                </p>

                {svc.link && (
                  <div className="mt-4 inline-flex items-center gap-2.5 group/btn w-max">
                    <span className={`text-[12px] font-medium uppercase tracking-wider ${svc.dark ? 'text-surface' : 'text-primary'}`}>
                      Learn more
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1 ${svc.dark ? 'bg-surface/15' : 'bg-primary/10'}`}>
                      <ArrowRight className={`w-3.5 h-3.5 ${svc.dark ? 'text-surface' : 'text-primary'}`} />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Boundary callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-8 sm:mt-10 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-[11px] sm:text-[12px] font-medium text-accent tracking-widest uppercase whitespace-nowrap px-2">
            Tizora · Built for production, not demos
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

      </div>
    </section>
  );
}