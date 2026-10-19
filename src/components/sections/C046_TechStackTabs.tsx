'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeftRight, BadgeCheck, Bot, Check, Cloud, Database, FileText, Fingerprint, History, Landmark, LayoutDashboard,
  Lock, MessageSquare, Pill, Plug, ScanBarcode, ScanFace, Server, ShieldCheck, Smartphone, Sparkles, Store, UserCheck, Video,
  type LucideIcon,
} from 'lucide-react';
import { resolveTechIcon } from '@/lib/techIcons';

/** Line icons for concept items (see resolveTechIcon's "line:<name>" keys). */
const LINE_ICONS: Record<string, LucideIcon> = {
  'arrow-left-right': ArrowLeftRight, 'badge-check': BadgeCheck, bot: Bot, cloud: Cloud, database: Database,
  'file-text': FileText, fingerprint: Fingerprint, history: History, landmark: Landmark, 'layout-dashboard': LayoutDashboard,
  lock: Lock, 'message-square': MessageSquare, pill: Pill, plug: Plug, 'scan-barcode': ScanBarcode, 'scan-face': ScanFace,
  server: Server, 'shield-check': ShieldCheck, smartphone: Smartphone, sparkles: Sparkles, store: Store, 'user-check': UserCheck,
  video: Video,
};
import { SECTION_LABEL } from '../ui/labelStyles';

export interface TechStackTabsItem {
  name: string;
  /** Logo URL. When omitted the tile shows the name as text (for practices, standards, in-house tools). */
  icon?: string;
}

export interface TechStackTabsCategory {
  name: string;
  /** Optional one-line reason for this layer, shown at the top of its panel. */
  description?: string;
  items: TechStackTabsItem[];
}

export interface TechStackTabsProps {
  /** Optional small eyebrow above the title. */
  label?: string;
  title: string;
  description?: string;
  categories: TechStackTabsCategory[];
  /** Prints each item's name under its logo, in larger tiles (6 per row instead of 8). */
  showNames?: boolean;
}

/**
 * Tech stack grouped into tabs: a pill switcher over a white panel that shows the active
 * layer's name, its reason, and a tile per technology (logo, name, or both).
 */
export function TechStackTabs({ label, title, description, categories, showNames = false }: TechStackTabsProps) {
  const [selectedIdx, setActiveIdx] = useState(0);
  // The selected tab can outlive its list (the categories changed while a later tab was open),
  // so fall back to the first tab instead of reading a category that is no longer there.
  const activeIdx = selectedIdx < categories.length ? selectedIdx : 0;
  const active = categories[activeIdx];
  if (!active) return null;

  return (
    <section
      data-component-id="C046"
      data-component-name="TechStackTabs"
      className="w-full bg-background py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-3xl">
            {label && (
              <span className={`${SECTION_LABEL} mb-4 block`}>
                {label}
              </span>
            )}
            <h2 className="text-[30px] font-normal leading-[1.1] tracking-tight text-primary sm:text-[40px] lg:text-[48px]">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-sm text-[15px] leading-relaxed text-muted sm:text-[16px] lg:pb-1.5">{description}</p>
          )}
        </div>

        {/* Pill switcher (scrolls sideways when it doesn't fit) */}
        <div className="-mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <div role="tablist" aria-label={title} className="inline-flex gap-1 rounded-full bg-white p-1 ring-1 ring-black/[0.06]">
            {categories.map((category, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={category.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIdx(idx)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[13.5px] font-normal transition-colors duration-200 sm:px-5 sm:py-2.5 sm:text-[14px] ${
                    isActive ? 'bg-primary text-white' : 'text-primary/70 hover:bg-black/[0.04] hover:text-primary'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <motion.div
          key={activeIdx}
          role="tabpanel"
          aria-label={active.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 rounded-[10px] bg-white p-5 shadow-[0_24px_60px_-44px_rgba(0,54,64,0.45)] ring-1 ring-black/[0.06] sm:mt-5 sm:p-8"
        >
          {/* Layer name + reason: a dark grey band across the top of the card. */}
          <div className="-mx-5 -mt-5 mb-6 rounded-t-[10px] bg-[#2a2e31] px-5 py-5 sm:-mx-8 sm:-mt-8 sm:mb-8 sm:px-8 sm:py-6">
            <h3 className="text-[20px] font-normal leading-snug tracking-tight text-white sm:text-[22px]">{active.name}</h3>
            {active.description && (
              <p className="mt-1 text-[14.5px] leading-relaxed text-white/70 sm:text-[15px]">{active.description}</p>
            )}
          </div>

          <ul
            className={`m-0 grid list-none gap-2.5 p-0 sm:gap-3 ${
              showNames ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6' : 'grid-cols-4 lg:grid-cols-8'
            }`}
          >
            {active.items.map((item) => (
              <li
                key={item.name}
                title={item.name}
                className={`group flex items-center justify-center rounded-[8px] bg-[#f6f6f4] ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_-14px_rgba(0,54,64,0.35)] hover:ring-accent/40 ${
                  showNames ? 'min-h-[118px] flex-col gap-3 px-3 py-5 text-center' : 'aspect-square'
                }`}
              >
                {(() => {
                  const icon = item.icon ?? resolveTechIcon(item.name);
                  if (icon && !icon.startsWith('line:')) {
                    return (
                      <img
                        src={icon}
                        alt={showNames ? '' : item.name}
                        width={40}
                        height={40}
                        className={`object-contain transition-transform duration-200 group-hover:scale-105 ${showNames ? 'h-8 w-8' : 'h-7 w-7 sm:h-10 sm:w-10'}`}
                        loading="lazy"
                      />
                    );
                  }
                  if (!showNames) {
                    return <span className="px-2 text-center text-[11px] leading-snug text-primary sm:text-[13px]">{item.name}</span>;
                  }
                  const Line = (icon && LINE_ICONS[icon.slice(5)]) || Check;
                  return (
                    <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/[0.06] text-primary">
                      <Line className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                  );
                })()}
                {showNames && <span className="text-[13px] leading-snug text-primary sm:text-[14px]">{item.name}</span>}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
