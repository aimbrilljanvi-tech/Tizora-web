import { ReactNode } from 'react';
import { SplitTextReveal } from '../ui/SplitTextReveal';

export interface SummaryMetaProps {
  data: {
    title: ReactNode;
    paragraph: ReactNode;
    /**
     * Free-form detail rows, so each page can show the facts (and labels) that fit its own context,
     * e.g. { label: "Audience", value: "Growing businesses" }. A list value is joined with " · ".
     * When given, `metadata` is ignored.
     */
    items?: { label: string; value: string | string[] }[];
    /** Classic four-row layout (Location / Industry / Cooperation period / Services used). */
    metadata?: {
      location: string;
      period: string;
      industry: string;
      services: string[];
      /** Optional replacements for the four default row labels. */
      labels?: { location?: string; industry?: string; period?: string; services?: string };
    };
  };
  /** Opt-in word-by-word reveal on the title (only applies when title is a plain string). */
  animatedTitle?: boolean;
  /** Opt-in word-by-word reveal on the paragraph (only applies when it's a plain string). */
  animatedParagraph?: boolean;
}

export function SummaryMeta({ data, animatedTitle = false, animatedParagraph = false }: SummaryMetaProps) {
  const m = data.metadata;
  const rows = (
    data.items ??
    (m
      ? [
          { label: m.labels?.location ?? 'Location', value: m.location },
          { label: m.labels?.industry ?? 'Industry', value: m.industry },
          { label: m.labels?.period ?? 'Cooperation period', value: m.period },
          { label: m.labels?.services ?? 'Services used', value: m.services },
        ]
      : [])
  ).map((r) => ({ label: r.label, value: Array.isArray(r.value) ? r.value.join(' · ') : r.value }));

  return (
    <section data-component-id="C016" data-component-name="SummaryMeta" className="w-full bg-background pt-16 lg:pt-24 pb-16 lg:pb-24 border-b border-border/40">
      <div className="w-full px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        {/* Left: Summary Text */}
        <div className="lg:w-7/12 flex flex-col gap-6">
          <h2 className="text-[32px] sm:text-[40px] font-normal text-primary tracking-tight">
            {animatedTitle && typeof data.title === 'string' ? (
              <SplitTextReveal text={data.title} trigger="inView" wordDelay={0.03} />
            ) : (
              data.title
            )}
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-black">
            {animatedParagraph && typeof data.paragraph === 'string' ? (
              <SplitTextReveal text={data.paragraph} trigger="inView" wordDelay={0.012} />
            ) : (
              data.paragraph
            )}
          </p>
        </div>

        {/* Right: Metadata list */}
        <dl className="lg:w-5/12 w-full m-0 border-t border-primary/25 lg:mt-3">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[minmax(0,9rem)_1fr] gap-x-6 border-b border-primary/25 py-4 sm:grid-cols-[11rem_1fr]"
            >
              <dt className="text-[13px] font-medium uppercase tracking-wider text-primary/60">{row.label}</dt>
              <dd className="m-0 text-[15px] leading-snug text-primary">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
