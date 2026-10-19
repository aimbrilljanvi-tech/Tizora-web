'use client';

import { LucideIcon, ArrowRight } from 'lucide-react';

export interface CalloutCardProps {
  icon: LucideIcon;
  eyebrow: string;
  heading: string;
  lead?: string;
  body: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  /** "accent" gets a tinted gradient card (use for the primary, above-the-fold hook); "plain" is a quieter bordered card (use lower on the page). */
  variant?: 'accent' | 'plain';
}

export interface NudgePanelProps {
  heading: string;
  body: string[];
}

/**
 * CalloutCard (C045): a reusable lead-gen callout. Eyebrow with icon badge, heading, an optional
 * lead line, one or more body paragraphs (laid out in columns) and an optional pill button.
 * "accent" is the deep-teal (#003640) card for a page's main hook; "plain" is a quieter bordered card.
 */
export function CalloutCard({ icon: Icon, eyebrow, heading, lead, body, buttonText, onButtonClick, variant = 'accent' }: CalloutCardProps) {
  const isAccent = variant === 'accent';
  return (
    <section
      data-component-id="C045"
      data-component-name="CalloutCard"
      className="w-full px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto my-8 sm:my-12"
    >
      <div
        className={`relative overflow-hidden rounded-[5px] border p-7 sm:p-10 lg:p-12 ${
          isAccent ? 'border-white/10 bg-[#003640] text-white' : 'border-border bg-surface'
        }`}
      >
        {/* Soft watermark icon */}
        <Icon
          className={`pointer-events-none absolute -right-6 -bottom-8 h-44 w-44 sm:h-56 sm:w-56 ${isAccent ? 'text-white/[0.05]' : 'text-primary/[0.05]'}`}
          strokeWidth={1}
          aria-hidden="true"
        />
        <div className="relative">
          <div className="flex items-center gap-3">
            <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[5px] ${isAccent ? 'bg-white/10 text-[#c8d269] ring-1 ring-white/15' : 'bg-primary/5 text-primary'}`}>
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className={`text-[11px] font-normal uppercase tracking-[0.18em] ${isAccent ? 'text-[#c8d269]' : 'text-accent'}`}>{eyebrow}</span>
          </div>

          <h2 className={`hc-heading mt-7 max-w-3xl text-[26px] font-normal leading-[1.12] tracking-tight sm:text-[32px] lg:text-[38px] ${isAccent ? 'text-white' : 'text-primary'}`}>
            {heading}
          </h2>

          {lead && (
            <p className={`mt-5 text-[16px] font-normal sm:text-[17px] ${isAccent ? 'text-white' : 'text-primary/90'}`}>{lead}</p>
          )}

          <div className={`mt-6 grid gap-5 border-t pt-6 sm:grid-cols-2 sm:gap-x-12 ${isAccent ? 'border-white/15' : 'border-border'}`}>
            {body.map((line, idx) => (
              <p key={idx} className={`m-0 text-[14.5px] leading-relaxed sm:text-[15px] ${isAccent ? 'text-white/75' : 'text-muted'}`}>{line}</p>
            ))}
          </div>

          {buttonText && (
            <button
              type="button"
              onClick={onButtonClick}
              className={`mt-7 inline-flex items-center gap-2 rounded-full py-2 pl-5 pr-2 text-[13px] font-normal transition-colors ${
                isAccent ? 'bg-white text-[#003640] hover:bg-[#c8d269]' : 'bg-primary text-surface hover:bg-accent'
              }`}
            >
              {buttonText}
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isAccent ? 'bg-[#003640]/10' : 'bg-white/15'}`}>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export function NudgePanel({ heading, body }: NudgePanelProps) {
  return (
    <section
      data-component-id="C045"
      data-component-name="NudgePanel"
      className="w-full px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto py-10 sm:py-14"
    >
      <div className="relative overflow-hidden rounded-[5px] border border-primary/10 bg-white px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
        <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-accent" aria-hidden="true" />
        <div className="relative max-w-4xl">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent">Next step</p>
          <h2 className="hc-heading mt-4 max-w-3xl text-[26px] sm:text-[34px] lg:text-[40px] font-normal leading-[1.08] tracking-tight text-primary">
            {heading}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-12">
            {body.map((line, idx) => (
              <p key={idx} className={`${idx === 0 ? 'font-medium text-primary' : 'text-muted'} text-[15px] leading-relaxed`}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}