import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface CtaStripProps {
  /** Lead-in line shown beside the button. */
  text?: string;
  buttonText: string;
  buttonHref: string;
  /** Optional small line under the text (e.g. "30-minute call with our engineering lead"). */
  note?: string;
}

/**
 * Minimal in-page call to action for long pages: one line of context and a pill button in a
 * soft rounded card, placed where engaged readers reach it. Server component, no client JS.
 */
export function CtaStrip({ text, buttonText, buttonHref, note }: CtaStripProps) {
  return (
    <section
      data-component-id="C054"
      data-component-name="CtaStrip"
      className="w-full bg-background px-5 py-10 sm:px-8 sm:py-14 lg:px-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[10px] bg-white p-6 shadow-[0_22px_50px_-24px_rgba(0,54,64,0.4)] ring-1 ring-primary/[0.08] sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10 md:py-6 md:pl-10 md:pr-6">
        {(text || note) && (
          <div className="max-w-2xl">
            {text && <p className="m-0 text-[17px] font-light leading-snug text-primary sm:text-[19px]">{text}</p>}
            {note && <p className="m-0 mt-1.5 text-[13px] text-muted">{note}</p>}
          </div>
        )}
        <Link
          href={buttonHref}
          className="group inline-flex w-full shrink-0 items-center justify-between gap-4 rounded-full bg-primary py-2 pl-6 pr-2 text-[14px] font-normal text-white transition-colors hover:bg-[#696e2e] sm:w-auto"
        >
          {buttonText}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      </div>
    </section>
  );
}
