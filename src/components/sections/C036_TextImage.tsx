import type { ReactNode } from "react";
import { ContentImage as Image } from "@/components/common/ContentImage";
import { inlineLinks } from "@/lib/caseStudyLinks";
import { SECTION_LABEL } from '../ui/labelStyles';

export interface C036Props {
    /** Large left-hand headline, rendered as an h2 (pages already carry an h1 in their hero). A plain string may use \n for line breaks. */
    headline: ReactNode;
    /** Short supporting line under the headline (optional). */
    subline?: string;
    /** Lead paragraph above the image. `[anchor](/path)` becomes an inline link. */
    intro: string;
    imageSrc?: string;
    imageAlt?: string;
    /** Optional body copy shown under the subline, filling the left column. One paragraph per entry. */
    body?: string[];
    /** Optional small label and value pinned to the bottom-left. */
    footerTitle?: string;
    footerText?: string;
}

function HeadlineLines({ text }: { text: string }) {
    const lines = text.split("\n");
    return (
        <>
            {lines.map((line, i) => (
                <span key={i}>
                    {line}
                    {i < lines.length - 1 && <br />}
                </span>
            ))}
        </>
    );
}

/** "Typical timeline: 6 months" -> ["Typical timeline", "6 months"]; plain prose stays whole. */
function splitLabel(text: string): [string | null, string] {
    const i = text.indexOf(": ");
    return i > 0 && i < 24 ? [text.slice(0, i), text.slice(i + 2)] : [null, text];
}

/**
 * Two-column statement block: headline, subline and body notes on the left; lead
 * paragraph and a large image on the right. Generous side margins and hairline
 * rules keep it calm. Server component, no client JS.
 */
export function C036_TextImage({
    headline,
    subline,
    intro,
    body,
    imageSrc,
    imageAlt = "",
    footerTitle,
    footerText,
}: C036Props) {
    return (
        <section
            data-component-id="C036"
            data-component-name="TextImage"
            className="w-full overflow-hidden bg-background px-6 py-14 text-primary sm:px-12 sm:py-24 lg:px-24 lg:py-32 xl:px-32"
        >
            <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-20">
                {/* Left column */}
                <div className="flex flex-col justify-between lg:col-span-5">
                    <div>
                        <h2 className="break-words text-[34px] font-light leading-[1.08] tracking-[-0.02em] text-primary sm:text-[44px] lg:text-[52px]">
                            {typeof headline === "string" ? <HeadlineLines text={headline} /> : headline}
                        </h2>
                        {subline && (
                            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted lg:text-[16px]">
                                {subline}
                            </p>
                        )}
                        {body && body.length > 0 && (
                            <dl className="mt-10 max-w-md border-b border-primary/15 lg:mt-14">
                                {body.map((t, i) => {
                                    const [label, text] = splitLabel(t);
                                    return (
                                        <div key={i} className="border-t border-primary/15 py-5">
                                            {label && (
                                                <dt className={`${SECTION_LABEL} mb-1`}>
                                                    {label}
                                                </dt>
                                            )}
                                            <dd className="m-0 text-[15px] font-light leading-relaxed text-primary lg:text-[16px]">
                                                {inlineLinks(text)}
                                            </dd>
                                        </div>
                                    );
                                })}
                            </dl>
                        )}
                    </div>

                    {(footerTitle || footerText) && (
                        <div className="mt-14 border-l border-accent pl-5 lg:mt-24">
                            {footerTitle && (
                                <p className={`${SECTION_LABEL} mb-1`}>{footerTitle}</p>
                            )}
                            {footerText && <p className="text-[16px] font-light text-primary">{footerText}</p>}
                        </div>
                    )}
                </div>

                {/* Right column */}
                <div className="flex flex-col lg:col-span-7">
                    <p className="mb-10 text-[20px] font-light leading-[1.45] tracking-[-0.01em] text-primary/90 sm:text-[24px] lg:mb-12 lg:text-[26px]">
                        {inlineLinks(intro)}
                    </p>

                    {imageSrc && (
                        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[5px] bg-[#e9e9e6] sm:aspect-[16/9]">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                sizes="(min-width: 1600px) 760px, (min-width: 1024px) 55vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
