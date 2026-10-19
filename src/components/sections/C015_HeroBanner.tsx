import { ContentImage as Image } from "@/components/common/ContentImage";
import { Breadcrumb, type BreadcrumbItem } from "@/components/common/Breadcrumb";

export interface HeroBannerProps {
  /** Optional "Home › Case Studies › Industry › Page" trail, shown above the logo. */
  breadcrumb?: BreadcrumbItem[];
  data: {
    logo?: string;
    title: string;
    keyResults?: string[];
    image: string;
    /** Optional descriptive alt text; defaults to the title. */
    imageAlt?: string;
    cta?: {
      label: string;
      href: string;
    };
    secondaryCta?: {
      label: string;
      href: string;
    };
  };
}

export function HeroBanner({ breadcrumb, data }: HeroBannerProps) {
  return (
    <section
      data-component-id="C015"
      data-component-name="HeroBanner"
      className="w-full bg-background pt-24 lg:pt-32 pb-8 flex items-center min-h-screen"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-4 lg:gap-6 h-full min-h-[70vh]">
        {/* Left Column (Content). On phones this wrapper uses `display: contents`, so the
            logo, title, image, results and buttons line up in one column via `order`:
            logo + title first, then the image, then everything else. */}
        <div className="contents lg:flex lg:flex-1 lg:flex-col lg:justify-between lg:p-8">
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <div className="order-1 px-4 pb-4 lg:order-none lg:p-0 lg:pb-6">
              <Breadcrumb items={breadcrumb} />
            </div>
          )}
          {/* Logo */}
          <div className="order-1 px-4 lg:order-none lg:p-0">
            {data.logo === "aramex" ? (
              <span className="text-[#FF2A2A] font-bold text-[28px] tracking-tighter">
                aramex
              </span>
            ) : (
              <span className="text-[#FF2A2A] font-bold text-[28px] tracking-tighter">
                {data.logo}
              </span>
            )}
          </div>

          {/* Main Title */}
          <div className="order-2 my-4 px-4 lg:order-none lg:my-0 lg:p-0">
            <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.1] text-primary tracking-tight">
              {data.title}
            </h1>
          </div>

          {/* Key Results */}
          {data.keyResults && data.keyResults.length > 0 && (
            <div className="order-4 flex w-full flex-col items-start gap-6 px-4 pt-4 sm:flex-row sm:items-center sm:gap-12 lg:order-none lg:mt-auto lg:p-0 lg:pt-8">
              <span className="text-[14px] text-muted shrink-0">
                Key results
              </span>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 flex-1 w-full">
                {data.keyResults.map((result, idx) => (
                  <p
                    key={idx}
                    className={`flex-1 text-[15px] font-bold text-primary leading-snug ${idx !== 0 ? "sm:border-l sm:border-border sm:pl-8" : ""}`}
                  >
                    {result}
                  </p>
                ))}
              </div>
            </div>
          )}

          {(data.cta || data.secondaryCta) && (
            <div className="order-5 mt-4 flex flex-wrap items-center justify-start gap-3.5 px-4 sm:gap-4 lg:order-none lg:mt-8 lg:p-0">
              {data.cta && (
                <a
                  href={data.cta.href}
                  className="inline-flex items-center gap-3 rounded-full bg-[#696e2e] px-6 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#585c26]"
                >
                  {data.cta.label}
                  <span aria-hidden="true">→</span>
                </a>
              )}
              {data.secondaryCta && (
                <a
                  href={data.secondaryCta.href}
                  className="inline-flex items-center gap-3 rounded-[5px] bg-[#003640] px-6 py-3 text-[13px] font-medium text-white"
                >
                  {data.secondaryCta.label}
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right Column (Image) */}
        <div className="order-3 flex-1 rounded-[15px] overflow-hidden relative min-h-[400px] lg:order-none lg:min-h-full">
          <Image
            src={data.image}
            alt={data.imageAlt ?? data.title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover rounded-[15px]"
          />
        </div>
      </div>
    </section>
  );
}
