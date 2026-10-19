'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { industriesList } from '../../data/pages/industries/industriesPageData';

export function IndustryBands() {
  return (
    <div className="flex flex-col w-full">
      {industriesList.map((industry) => (
        <section
          key={industry.id}
          data-component-id="C030"
          data-component-name="IndustryBand"
          className="w-full relative py-16 sm:py-24"
          style={{ backgroundColor: industry.bgColor, color: industry.textColor }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Title & Description */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <h2 className="text-4xl sm:text-5xl font-normal tracking-tight">
                  {industry.title}
                </h2>
                <p className="text-base leading-relaxed opacity-90">
                  {industry.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={industry.href}
                    className="inline-flex items-center justify-center bg-white text-[#003640] rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    Explore {industry.title}
                  </Link>
                </div>
              </div>

              {/* Middle Column: Offerings */}
              <div className="lg:col-span-3 lg:pl-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-current/20 pt-8 lg:pt-0">
                <h3 className="text-sm font-normal uppercase tracking-wider mb-5 opacity-90">
                  Our Offerings
                </h3>
                <ul className="flex flex-col gap-4">
                  {industry.offerings.map((offering, idx) => (
                    <li key={idx}>
                      {/* Offerings without their own page are plain text, so there are no dead "#" links. */}
                      {offering.href && offering.href !== '#' ? (
                        <Link href={offering.href} className="group flex items-center gap-2 text-[15px] font-medium hover:opacity-75 transition-opacity">
                          {offering.title}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <span className="flex items-center gap-2 text-[15px] font-medium">{offering.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Imagery */}
              <div className="lg:col-span-5 h-[300px] sm:h-[400px] lg:h-[450px] relative mt-10 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full rounded-[15px] overflow-hidden shadow-2xl relative lg:-mr-12"
                >
                  <Image
                    src={industry.imageSrc}
                    alt={industry.title}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  {/* Subtle overlay for blending */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
                </motion.div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}