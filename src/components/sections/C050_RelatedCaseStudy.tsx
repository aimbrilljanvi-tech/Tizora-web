import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContentImage as Image } from "@/components/common/ContentImage";
import { caseStudiesGrid, type CaseStudyIndustry } from "@/data/pages/insights/case-studies/caseStudiesPageData";

interface RelatedCaseStudyProps {
  /** id of the case study this banner is rendered on (e.g. "cs-core-banking"). */
  currentId?: string;
  /**
   * Industry-page mode: instead of a sibling study, the banner sends visitors to
   * the case-study listing filtered to this industry. Renders nothing if the
   * industry has no published case study yet.
   */
  industry?: CaseStudyIndustry;
}

/**
 * Compact in-page banner that points to another case study from the same
 * industry. The sibling is the next study in that industry's list (wrapping
 * around), so with three fintech studies each page links to a different one.
 * Renders nothing when the industry has no other case study.
 */
export function RelatedCaseStudy({ currentId, industry }: RelatedCaseStudyProps) {
  const studies = caseStudiesGrid.studies;

  let next: (typeof studies)[number];
  let eyebrow: string;
  let title: string;
  let description: string;
  let href: string;
  let cta = "Read case study";

  if (industry) {
    const inIndustry = studies.filter((s) => s.industry === industry);
    if (inIndustry.length === 0) return null;
    next = inIndustry[0];
    eyebrow = "Case studies";
    title = `${industry} case studies`;
    description = inIndustry.length === 1 ? next.title : `${next.title} and ${inIndustry.length - 1} more.`;
    href = `/insights/case-studies?industry=${encodeURIComponent(industry)}`;
    cta = inIndustry.length === 1 ? "View the case study" : `View all ${inIndustry.length} case studies`;
  } else {
    const current = studies.find((s) => s.id === currentId);
    if (!current) return null;
    const siblings = studies.filter((s) => s.industry === current.industry);
    if (siblings.length < 2) return null;
    next = siblings[(siblings.findIndex((s) => s.id === currentId) + 1) % siblings.length];
    eyebrow = `More in ${current.industry}`;
    title = next.title;
    description = next.description;
    href = next.link;
  }

  return (
    <section
      data-component-id="C050"
      data-component-name="RelatedCaseStudy"
      className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
    >
      <Link
        href={href}
        className="group mx-auto grid max-w-5xl overflow-hidden rounded-[5px] bg-primary text-white shadow-[0_18px_40px_-22px_rgba(0,54,64,0.55)] transition-shadow hover:shadow-[0_22px_48px_-20px_rgba(0,54,64,0.7)] sm:grid-cols-[1.15fr_1fr]"
      >
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#c8d269]">
              {eyebrow}
            </p>
            <h3 className="mt-3 text-xl font-normal leading-snug tracking-tight sm:text-2xl">
              {title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">
              {description}
            </p>
          </div>
          <span className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-white px-5 text-sm font-normal text-primary transition-colors group-hover:bg-[#c8d269]">
            {cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
        <div className="order-first p-[10px] sm:order-none">
          <div className="relative h-40 overflow-hidden rounded-[5px] sm:h-full sm:min-h-[200px]">
          <Image
            src={next.image}
            alt={title}
            fill
            sizes="(min-width: 640px) 420px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent sm:bg-gradient-to-r sm:from-primary/40" />
          </div>
        </div>
      </Link>
    </section>
  );
}
