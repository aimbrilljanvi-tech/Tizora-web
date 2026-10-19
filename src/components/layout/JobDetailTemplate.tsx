'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Briefcase, Clock, MapPin, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { MainLayout } from './MainLayout';
import { JsonLd } from '../common/JsonLd';
import { SplitTextReveal } from '../ui/SplitTextReveal';

export interface JobDetailSection {
  heading: string;
  type: 'tags' | 'checklist' | 'text';
  items?: string[];
  text?: string;
}

export interface JobDetailData {
  title: string;
  slug: string;
  experienceBadge: string;
  typeBadge: string;
  locationBadge: string;
  intro: string;
  sections: JobDetailSection[];
  applySubject: string;
  heroImage?: string;
  /** ISO date (YYYY-MM-DD) this listing went live. */
  datePosted: string;
  /** ISO date (YYYY-MM-DD) this listing should be considered closed. */
  validThrough: string;
  /** schema.org employmentType enum, e.g. 'FULL_TIME'. */
  employmentType: string;
}

const TIZORA_LOGO = 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788860642/tizora_new_logo.png';
const LINKEDIN_ICON = 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789382080/linedin.png';

export function buildJobJsonLd(data: JobDetailData, canonicalUrl: string): object[] {
  // data.title may contain a literal \n as a display-only line-break hint
  // for the H1 (see JobDetailTemplate's SplitTextReveal usage below) --
  // collapse it back to a space for SEO/structured-data strings.
  const plainTitle = data.title.replace(/\n/g, ' ');
  const fullDescription = [
    data.intro,
    ...data.sections.map((section) => {
      const body = section.type === 'text'
        ? section.text
        : (section.items || []).join('; ');
      return `${section.heading}: ${body}`;
    }),
  ].join(' ');

  const jobPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: plainTitle,
    description: fullDescription,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Tizora',
      value: data.slug,
    },
    datePosted: data.datePosted,
    validThrough: `${data.validThrough}T23:59:59+05:30`,
    employmentType: data.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Tizora',
      sameAs: 'https://www.tizora.ai',
      logo: TIZORA_LOGO,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
    directApply: true,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tizora.ai' },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://www.tizora.ai/careers' },
      { '@type': 'ListItem', position: 3, name: plainTitle, item: canonicalUrl },
    ],
  };

  return [jobPostingJsonLd, breadcrumbJsonLd];
}

const fadeDown = {
  initial: { opacity: 0, y: -18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export function JobDetailTemplate({ data }: { data: JobDetailData }) {
  const canonicalUrl = `https://www.tizora.ai/careers/${data.slug}`;
  const jsonLd = buildJobJsonLd(data, canonicalUrl);
  const [linkedinOpen, setLinkedinOpen] = useState(false);
  const router = useRouter();

  // Push (rather than router.back()) so the page always loads fresh instead
  // of restoring a stale bfcache snapshot, but flag that CareersContent
  // should scroll straight to the Open Positions section on mount --
  // otherwise a fresh load lands at the top and the user has to scroll all
  // the way back down to find the listing they came from.
  const handleBackToCareers = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('tizora-careers-scroll-target', 'openings');
    }
    router.push('/careers');
  };

  return (
    <MainLayout>
      {/* Mobile-only LinkedIn side drawer -- fixed so it stays visible the
          whole time the page is scrolled, on every job posting since this
          template is shared by all of them. Tapping the tab opens the card;
          the arrow inside it is the only part that actually navigates. */}
      <div className="lg:hidden fixed top-1/3 right-0 -translate-y-1/2 z-40 flex items-center">
        <AnimatePresence>
          {linkedinOpen && (
            <motion.a
              href="https://www.linkedin.com/company/tizora/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-start gap-2.5 bg-white border border-border/70 border-r-0 rounded-l-2xl p-4 w-48 shadow-lg"
            >
              <Image src={LINKEDIN_ICON} alt="LinkedIn" width={36} height={36} className="w-9 h-9 rounded-[7px] shrink-0" />
              <p className="text-[13px] text-primary leading-snug">
                Follow us on LinkedIn for more career updates.
              </p>
              <span className="inline-flex items-center justify-center bg-[#CFE3FB] text-[#0A66C2] text-[12px] font-semibold px-4 py-1 rounded-full">
                Follow
              </span>
            </motion.a>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setLinkedinOpen((open) => !open)}
          aria-label="Follow us on LinkedIn"
          aria-expanded={linkedinOpen}
          className="relative w-9 h-10 rounded-l-xl overflow-hidden shadow-lg shrink-0"
        >
          <Image src={LINKEDIN_ICON} alt="" fill sizes="36px" className="object-cover" />
        </button>
      </div>

      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pb-28 bg-surface border-b border-border/50 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(103,121,61,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(103,121,61,0.5) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 120% 100% at 50% 0%, black 60%, transparent)',
          }}
        />
        <div className="relative max-w-[1000px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <button
              type="button"
              onClick={handleBackToCareers}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors mb-14"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </button>
          </motion.div>

          <motion.a
            href="https://www.linkedin.com/company/tizora/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex flex-col items-start gap-4 absolute top-1/2 -right-6 xl:-right-14 -translate-y-1/2 bg-white border border-border/70 rounded-[25px] p-7 w-72 shadow-md hover:border-accent/40 transition-colors"
          >
            <Image src={LINKEDIN_ICON} alt="LinkedIn" width={56} height={56} className="w-14 h-14 rounded-[10px] shrink-0" />
            <p className="text-[17px] text-primary leading-snug">
              Follow us on LinkedIn for more career updates.
            </p>
            <span className="inline-flex items-center justify-center bg-[#CFE3FB] text-[#0A66C2] text-[15px] font-semibold px-6 py-2 rounded-full">
              Follow
            </span>
          </motion.a>

          <div className="flex flex-col gap-7">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
              We&apos;re hiring
            </span>

            <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.08] font-normal tracking-tight text-primary">
              <SplitTextReveal text={data.title} trigger="mount" delay={0.1} wordDelay={0.07} />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3 text-[13.5px] font-medium text-primary"
            >
              <span className="flex items-center gap-2 bg-white border border-border/70 px-4 py-2 rounded-full shadow-sm">
                <Briefcase className="w-4 h-4 text-accent" />
                {data.experienceBadge}
              </span>
              <span className="flex items-center gap-2 bg-white border border-border/70 px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-4 h-4 text-accent" />
                {data.typeBadge}
              </span>
              <span className="flex items-center gap-2 bg-white border border-border/70 px-4 py-2 rounded-full shadow-sm">
                <MapPin className="w-4 h-4 text-accent" />
                {data.locationBadge}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">

          {/* Main JD */}
          <div className="flex flex-col gap-14 lg:gap-16">
            <p className="text-[19px] sm:text-[21px] text-primary leading-[1.6] font-normal max-w-2xl">
              <SplitTextReveal text={data.intro} trigger="mount" delay={0.6} wordDelay={0.012} />
            </p>

            {data.sections.map((section, sIdx) => (
              <motion.div key={sIdx} {...fadeDown} transition={{ duration: 0.5, delay: 0.05 }}>
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-[12px] font-bold text-surface bg-primary rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                    {sIdx + 1}
                  </span>
                  <h2 className="text-[22px] sm:text-[25px] font-medium text-primary tracking-tight">
                    <SplitTextReveal text={section.heading} trigger="inView" wordDelay={0.04} />
                  </h2>
                </div>

                {section.type === 'tags' && section.items && (
                  <div className="flex flex-wrap gap-2.5">
                    {section.items.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: -8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.04 }}
                        className="bg-olive-light text-primary text-[14px] font-medium px-4 py-2 rounded-full border border-accent/15"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}

                {section.type === 'checklist' && section.items && (
                  <ul className="flex flex-col gap-4">
                    {section.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex gap-4 text-[16px] text-primary/85 leading-relaxed"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {section.type === 'text' && section.text && (
                  <p className="text-[16px] text-primary/85 leading-relaxed max-w-2xl">
                    {section.text}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sidebar / Apply */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticky top-28 bg-surface border border-border/80 rounded-2xl p-8 flex flex-col gap-6 shadow-[0_8px_30px_rgba(0,54,64,0.06)]"
            >
              <div className="w-11 h-11 rounded-[10px] bg-olive-light text-accent flex items-center justify-center">
                <Mail className="w-5 h-5" strokeWidth={1.75} />
              </div>

              <div>
                <h3 className="text-[19px] font-medium text-primary mb-2">Apply for this role</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Send your updated resume to our HR team — we review every application personally.
                </p>
              </div>

              <a
                href="mailto:hr@tizora.ai"
                className="flex items-center gap-3 text-[14px] font-medium text-primary hover:text-accent transition-colors pt-5 border-t border-border/80"
              >
                <Mail className="w-4 h-4" />
                hr@tizora.ai
              </a>

              <a
                href={`mailto:hr@tizora.ai?subject=${encodeURIComponent(data.applySubject)}`}
                className="group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-primary text-surface text-[14px] font-semibold tracking-wide hover:bg-primary-hover transition-all hover:scale-[1.02]"
              >
                Apply Now via Email
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/company/tizora/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 pt-6 border-t border-border/80 hover:opacity-80 transition-opacity"
              >
                <div className="w-11 h-11 rounded-[10px] bg-olive-light flex items-center justify-center shrink-0">
                  <Image src={LINKEDIN_ICON} alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-primary leading-snug">
                    Follow us on LinkedIn
                  </p>
                  <p className="text-[13px] text-muted leading-snug">
                    For more career updates
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            </motion.div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}