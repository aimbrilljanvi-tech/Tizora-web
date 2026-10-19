import { ContentImage as Image } from "@/components/common/ContentImage";
import type { ReactNode } from "react";
import { SplitTextReveal } from "../ui/SplitTextReveal";
import { inlineLinks } from "@/lib/caseStudyLinks";
import { SECTION_LABEL } from "../ui/labelStyles";

export interface ContentSplitProps {
  data: {
    label: string;
    title: string;
    /** Plain strings, or JSX when a paragraph needs inline links. */
    paragraphs: ReactNode[];
    /** Optional checklist under the paragraphs (e.g. baseline numbers and constraints). `[anchor](/path)` becomes a link. */
    bullets?: string[];
    image: string;
    /** Optional descriptive alt text; defaults to the title. */
    imageAlt?: string;
    dark: boolean;
    reverse: boolean;
  };
  animatedText?: boolean;
  spacing?: "default" | "compact" | "reduced";
  /** Space between the text and image columns. "tight" halves the default gap. */
  gap?: "default" | "tight";
}

export function ContentSplit({
  data,
  animatedText = false,
  spacing = "default",
  gap = "default",
}: ContentSplitProps) {
  return (
    <section
      data-component-id="C017"
      data-component-name="ContentSplit"
      className={`w-full bg-background ${spacing === "compact" ? "pt-32 pb-20" : spacing === "reduced" ? "pt-20 pb-20" : "py-32"}`}
    >
      <div
        className={`w-full px-5 sm:px-8 lg:px-12 flex flex-col lg:items-stretch ${gap === "tight" ? "gap-10 lg:gap-12" : "gap-16 lg:gap-24"} ${data.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        <div className="lg:w-1/2">
          <span className={`${SECTION_LABEL} block mb-10`}>
            {data.label}
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.2] text-primary mb-12">
            {animatedText ? (
              <SplitTextReveal
                text={data.title}
                trigger="inView"
                wordDelay={0.025}
              />
            ) : (
              data.title
            )}
          </h2>
          <div className="flex flex-col gap-6">
            {data.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-[15px] sm:text-[16px] leading-relaxed"
              >
                {animatedText && typeof para === "string" ? (
                  <SplitTextReveal
                    text={para}
                    trigger="inView"
                    wordDelay={0.012}
                  />
                ) : (
                  para
                )}
              </p>
            ))}
          </div>
          {data.bullets && data.bullets.length > 0 && (
            <ul className="mt-8 flex flex-col gap-3 border-t border-primary/15 pt-8">
              {data.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[15px] sm:text-[16px] leading-relaxed text-primary">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#696e2e]" />
                  {inlineLinks(bullet)}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="lg:w-1/2 w-full aspect-[4/3] lg:aspect-auto rounded-[5px] overflow-hidden relative flex">
          <Image
            src={data.image}
            alt={data.imageAlt ?? data.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
            style={{ borderRadius: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
