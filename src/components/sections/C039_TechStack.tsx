'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'motion/react';
import { ContentImage as Image } from '@/components/common/ContentImage';
import {
  Brain, Check, ChevronDown, Cloud, Cpu, Database, Globe, Layers, Lock, Plane, Plug, Radar, ScanLine, Server, Shield, Smartphone, Users,
  type LucideIcon,
} from 'lucide-react';

/** Icon names a category can use for its badge (strings, so server pages can pass them). */
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  plug: Plug,
  cpu: Cpu,
  'scan-line': ScanLine,
  database: Database,
  server: Server,
  cloud: Cloud,
  shield: Shield,
  lock: Lock,
  globe: Globe,
  brain: Brain,
  layers: Layers,
  plane: Plane,
  radar: Radar,
  users: Users,
};
import { SplitTextReveal } from '../ui/SplitTextReveal';

export interface TechStackItem {
  name: string;
  icon?: string;
}

export interface TechStackProps {
  title: string;
  description?: string;
  categories: {
    name: string;
    items: (string | TechStackItem)[];
    /** Optional icon for the category badge (see CATEGORY_ICONS); falls back to the number. */
    icon?: string;
    /** Optional image at the top of an enhanced card (about 45% of its height), inset 10px. */
    image?: string;
    imageAlt?: string;
    /** Optional extra copy. When set on an enhanced card, hovering flips the card to reveal it. */
    details?: string[];
  }[];
  animatedTitle?: boolean;
  animatedDescription?: boolean;
  /** @deprecated The card treatment is now the only style; kept so existing callers still compile. */
  enhanced?: boolean;
  /** Optional small eyebrow shown above the title. */
  label?: string;
  /** Section background: the page's soft grey (default, makes the white cards stand out) or white. */
  background?: 'white' | 'grey';
}

const FACE = 'rounded-[10px] border border-white/10 bg-[#003640] overflow-hidden text-white [backface-visibility:hidden] [-webkit-backface-visibility:hidden]';

/** Card that flips (GSAP, rotateY) to show `back`. It toggles on each hover (or tap / Enter) and stays flipped until toggled again. */
/** Splits text into words that the flip animation reveals one by one. */
const RevealWords = ({ text }: { text: string }) => (
  <>
    {text.split(' ').map((w, i) => (
      <span key={i} className="wr inline-block opacity-0">{w}&nbsp;</span>
    ))}
  </>
);

function FlipCard({ front, back, title }: { front: React.ReactNode; back: React.ReactNode; title: string }) {
  const flipper = useRef<HTMLDivElement>(null);
  const flipped = useRef(false);
  const backRef = useRef<HTMLDivElement>(null);

  const flipTo = (open: boolean) => {
    if (!flipper.current || flipped.current === open) return;
    flipped.current = open;
    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.to(flipper.current, { rotateY: open ? 180 : 0, duration: reduce ? 0 : 0.7, ease: 'power3.inOut', overwrite: true });
    const words = backRef.current?.querySelectorAll('.wr');
    if (!words?.length) return;
    gsap.killTweensOf(words);
    if (open) {
      gsap.fromTo(words, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: reduce ? 0 : 0.45, stagger: reduce ? 0 : 0.03, delay: reduce ? 0 : 0.35, ease: 'power2.out' });
    } else {
      gsap.set(words, { opacity: 0, y: 10, delay: reduce ? 0 : 0.7 });
    }
  };

  return (
    <div
      className="h-full [perspective:1400px]"
      tabIndex={0}
      role="group"
      aria-label={`${title}, more detail`}
      // Each hover toggles the card and it stays put until the next hover.
      onMouseEnter={() => flipTo(!flipped.current)}
      // Touch devices have no hover, so a tap toggles; keyboard users toggle with Enter or Space.
      onClick={() => {
        if (window.matchMedia('(hover: none)').matches) flipTo(!flipped.current);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flipTo(!flipped.current);
        }
      }}
    >
      <div ref={flipper} className="relative h-full [transform-style:preserve-3d]">
        <div className={`group relative flex h-full flex-col ${FACE}`}>{front}</div>
        <div ref={backRef} className={`absolute inset-0 flex flex-col justify-center p-7 [transform:rotateY(180deg)] ${FACE}`}>{back}</div>
      </div>
    </div>
  );
}

/** True below the md breakpoint, where cards use an in-place "more detail" toggle instead of the 3D flip. */
function useCompact() {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setCompact(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return compact;
}

/** Mobile version of the card's back side: a toggle that expands the extra copy under the list. */
function MoreDetail({ details }: { details: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-6 mb-6 border-t border-white/15 pt-4">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left text-[14px] text-white/90"
      >
        <span>{open ? 'Hide detail' : 'More detail'}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 pt-3">
              {details.map((d, i) => (
                <p key={i} className="m-0 text-[14px] leading-relaxed text-white/75">{d}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TechStack({ title, description, categories, animatedTitle = false, animatedDescription = false, label, background = 'grey' }: TechStackProps) {
  const compact = useCompact();
  return (
    <section
      data-component-id="C039"
      data-component-name="TechStack"
      className={`w-full py-14 sm:py-20 lg:py-32 border-b border-border/40 ${background === 'white' ? 'bg-[#fff8f0]' : 'bg-background'}`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-16 max-w-[1600px] mx-auto text-center mb-8 sm:mb-14 lg:mb-20">
        {label && <span className="mb-6 block text-[14px] font-normal text-primary/70">{label}</span>}
        <h2 className="text-[30px] sm:text-[44px] lg:text-[52px] font-normal text-primary tracking-tight leading-[1.1] mb-4 sm:mb-6">
          {animatedTitle ? <SplitTextReveal text={title} trigger="inView" wordDelay={0.03} /> : title}
        </h2>
        {description && (
          <p className="text-[15px] sm:text-[16px] text-black max-w-2xl mx-auto leading-relaxed">
            {animatedDescription ? <SplitTextReveal text={description} trigger="inView" wordDelay={0.015} /> : description}
          </p>
        )}
      </div>
      <div className="w-full px-5 sm:px-8 lg:px-16 mx-auto max-w-[1300px]">
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:items-stretch md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:gap-8">
          {categories.map((category, idx) => {
            const hasDetails = !!category.details?.length;
            const flip = hasDetails && !compact;
            const content = (
              <>
                {category.image && (
                  <div className="p-[10px] pb-0">
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[5px] bg-white/5 md:aspect-[16/9]">
                      <Image
                        src={category.image}
                        alt={category.imageAlt ?? ''}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                )}
                <div className={`relative mx-6 flex items-center gap-3.5 mb-3 pb-4 border-b border-white/15 ${category.image ? 'mt-5' : 'mt-7'}`}>
                  <span className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-white/10 text-white text-[13px] font-bold shrink-0 ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-accent">
                    {(() => {
                      const Icon = category.icon ? CATEGORY_ICONS[category.icon] : undefined;
                      return Icon ? <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden /> : String(idx + 1).padStart(2, '0');
                    })()}
                  </span>
                  {/* Ghost numeral watermark */}
                  <span className="absolute -top-6 -right-4 text-[96px] font-bold text-white/[0.06] leading-none pointer-events-none select-none transition-colors duration-300 group-hover:text-white/[0.1]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[18px] lg:text-[19px] font-normal text-white leading-snug">
                    {category.name}
                  </h3>
                </div>

                <ul className="relative flex flex-col gap-0.5 px-6 pb-6">
                  {category.items.map((item, itemIdx) => {
                    const itemName = typeof item === 'string' ? item : item.name;
                    const itemIcon = typeof item === 'string' ? null : item.icon;
                    return (
                      <motion.li
                        key={itemIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + itemIdx * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-start gap-3 text-[14.5px] text-white leading-relaxed py-1.5 px-2.5 -mx-2.5 rounded-lg transition-all duration-200 hover:bg-white/10 hover:pl-3.5"
                      >
                        {itemIcon ? (
                          <img src={itemIcon} alt={itemName} className="w-5 h-5 object-contain shrink-0 mt-0.5 rounded-[3px] bg-white p-0.5" />
                        ) : (
                          <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white"><Check className="h-3 w-3" strokeWidth={3.2} /></span>
                        )}
                        <span>{itemName}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </>
            );
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative h-full w-[86%] shrink-0 snap-center transition-transform duration-300 sm:w-[60%] md:w-auto md:shrink md:hover:-translate-y-1.5 ${flip ? '' : 'group flex flex-col rounded-[10px] border border-white/10 bg-[#003640] overflow-hidden text-white shadow-[0_14px_36px_-14px_rgba(0,54,64,0.45)] hover:border-accent/60'}`}
              >
                {flip ? (
                  <FlipCard
                    title={category.name}
                    front={content}
                    back={
                      <>
                        <h3 className="mb-4 text-[18px] font-normal leading-snug text-white"><RevealWords text={category.name} /></h3>
                        <div className="flex flex-col gap-3">
                          {category.details!.map((d, i) => (
                            <p key={i} className="m-0 text-[14.5px] leading-relaxed text-white/80"><RevealWords text={d} /></p>
                          ))}
                        </div>
                      </>
                    }
                  />
                ) : (
                  <>
                    {content}
                    {hasDetails && <MoreDetail details={category.details!} />}
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
