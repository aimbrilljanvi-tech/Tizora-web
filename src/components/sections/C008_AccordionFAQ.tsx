'use client';

import { useId, useState, type ReactNode } from 'react';
import { Plus } from 'lucide-react';
import { TextRollButton } from '../ui/Button';
import { SplitTextReveal } from '../ui/SplitTextReveal';
import { SECTION_LABEL } from '../ui/labelStyles';

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQProps {
  tagTitle: string;
  heading: ReactNode;
  questions: FAQItem[];
  /** Opt-in word-by-word reveal on the heading (only applies when it's a plain string). */
  animatedHeading?: boolean;
  /** Hides the "Contact engineering" prompt under the questions. */
  hideContactCta?: boolean;
}

/**
 * Centred FAQ: eyebrow and large heading over a narrow column of rounded question bars.
 * Closed bars are softly tinted with a white "+" button; the open one becomes a white card
 * with a tinted "×". Hairline guides frame the section. The first question starts open.
 */
export function AccordionFAQ({ tagTitle, heading, questions, animatedHeading = false, hideContactCta = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      data-component-id="C008"
      data-component-name="Questions"
      className="relative overflow-hidden bg-background"
    >
      {/* Hairline frame: full-width rules top and bottom, side guides on the content column */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 h-px bg-black/[0.06] sm:top-14" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-10 h-px bg-black/[0.06] sm:bottom-14" />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-8">
        <div className="border-x border-black/[0.06] px-4 py-20 sm:px-10 sm:py-28 lg:py-32">
          {/* Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className={`${SECTION_LABEL} mb-4`}>
              {tagTitle}
            </p>
            <h2 className="text-balance text-[32px] font-light leading-[1.1] tracking-[-0.02em] text-primary sm:text-[44px] lg:text-[52px]">
              {animatedHeading && typeof heading === 'string' ? (
                <SplitTextReveal text={heading} trigger="inView" wordDelay={0.025} />
              ) : (
                heading
              )}
            </h2>
          </div>

          {/* Questions */}
          <div className="mx-auto flex max-w-[720px] flex-col gap-2.5 sm:gap-3">
            {questions.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const buttonId = `${baseId}-q${idx}`;
              const panelId = `${baseId}-a${idx}`;
              return (
                <div
                  key={idx}
                  className={`rounded-[16px] border transition-[background-color,border-color,box-shadow] duration-300 sm:rounded-[20px] ${
                    isOpen
                      ? 'border-black/[0.06] bg-white shadow-[0_18px_40px_-28px_rgba(0,54,64,0.35)]'
                      : 'border-transparent bg-[#e7eef0] hover:bg-[#dde7ea]'
                  }`}
                >
                  <h3 className="m-0">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="group flex w-full items-center justify-between gap-4 py-2 pl-5 pr-2 text-left sm:gap-6 sm:pl-6"
                    >
                      <span className="py-2 text-[15px] font-normal leading-snug text-primary sm:text-[16px]">{faq.q}</span>
                      <span
                        aria-hidden
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-10 sm:w-10 ${
                          isOpen
                            ? 'bg-[#003640]/[0.08] text-primary'
                            : 'bg-white text-primary shadow-[0_2px_8px_-2px_rgba(0,54,64,0.18)] group-hover:bg-[#003640] group-hover:text-white'
                        }`}
                      >
                        <Plus
                          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                          strokeWidth={1.75}
                        />
                      </span>
                    </button>
                  </h3>

                  {/* Every answer stays in the HTML (search engines and AI answer engines read all of
                      them, matching the FAQPage schema); closed ones collapse to zero height. */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="m-0 pb-5 pl-5 pr-6 text-[14px] leading-relaxed text-muted sm:pb-6 sm:pl-6 sm:pr-16 sm:text-[14.5px]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact prompt */}
          {!hideContactCta && (
            <div className="mx-auto mt-10 flex max-w-[720px] flex-col items-center gap-4 text-center sm:mt-12">
              <p className="m-0 text-[14px] leading-relaxed text-muted">
                Can&apos;t find what you&apos;re looking for? Reach out to our engineering team directly.
              </p>
              <TextRollButton text="Contact engineering" href="/contact" variant="dark" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
