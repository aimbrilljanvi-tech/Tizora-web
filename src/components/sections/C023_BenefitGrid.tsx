import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContentImage as Image } from "@/components/common/ContentImage";

type BenefitSegment = string | { text: string; link: boolean };

export interface BenefitGridProps {
  data: {
    label?: string;
    title: string;
    description?: string;
    items: {
      /** Shown as a small numbered label when no icon is given. */
      number?: string;
      /** Shown as a boxed icon instead of the number label. */
      icon?: LucideIcon;
      title: string;
      description: BenefitSegment[];
      /** Abstract image revealed as a faint background wash on hover. */
      hoverImage?: string;
      /** Makes the whole card a link; the title is the anchor text. */
      href?: string;
    }[];
  };
  /** Draws thin dividing borders between grid cells instead of open whitespace. */
  bordered?: boolean;
  /** Columns on large screens. 2 suits four items (a 2 x 2 grid with no empty cell). */
  columns?: 2 | 3;
}

function getFillerClass(count: number): string | null {
  const mod = count % 6;
  switch (mod) {
    case 1:
      return "hidden sm:block sm:col-span-1 lg:col-span-2";
    case 2:
      return "hidden lg:block lg:col-span-1";
    case 3:
      return "hidden sm:block lg:hidden sm:col-span-1";
    case 4:
      return "hidden lg:block lg:col-span-2";
    case 5:
      return "hidden sm:block sm:col-span-1 lg:col-span-1";
    default:
      return null;
  }
}

export function BenefitGrid({ data, bordered = false, columns = 3 }: BenefitGridProps) {
  const fillerClass = bordered && columns === 3 ? getFillerClass(data.items.length) : null;
  const lgCols = columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <section
      data-component-id="C023"
      data-component-name="BenefitGrid"
      className={`w-full py-20 lg:py-28 ${bordered ? "bg-[#f6f6f6]" : "bg-[#fff8f0]"}`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        {/* Label */}
        {data.label && (
          <p className="text-[13px] font-medium text-muted mb-6 tracking-wide">
            {data.label}
          </p>
        )}

        {/* Title */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-normal text-primary tracking-tight leading-[1.15] max-w-4xl mb-6 lg:mb-8">
          {data.title}
        </h2>

        {/* Description */}
        {data.description && (
          <p className="text-[16px] sm:text-[18px] text-muted leading-relaxed max-w-3xl mb-16 lg:mb-20">
            {data.description}
          </p>
        )}

        {/* Benefits Grid */}
        <div
          className={
            bordered
              ? `grid grid-cols-1 sm:grid-cols-2 ${lgCols} gap-px bg-[#d1d5db]`
              : `grid grid-cols-1 sm:grid-cols-2 ${lgCols} gap-x-12 gap-y-16`
          }
        >
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className={
                bordered
                  ? `relative overflow-hidden group flex flex-col gap-4 p-8 bg-white rounded-none${item.href ? " transition-colors hover:bg-[#fbfbfa]" : ""}`
                  : "relative overflow-hidden group flex flex-col gap-4 rounded-none"
              }
            >
              {/* Abstract hover image -- revealed at full opacity, with a dark
                  gradient wash so the white/olive copy stays legible on top. */}
              {item.hoverImage && (
                <>
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                      src={item.hoverImage}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover rounded-none"
                    />
                  </div>
                  <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </>
              )}

              {/* Icon or number */}
              {item.icon ? (
                <div className="relative z-10 w-11 h-11 rounded-lg bg-white border border-black/30 flex items-center justify-center">
                  <item.icon
                    className="w-5 h-5 text-[#556B2F]"
                    strokeWidth={1.75}
                  />
                </div>
              ) : (
                <span className="relative z-10 text-[14px] font-semibold text-[#556B2F] tracking-wide block">
                  {item.number}
                </span>
              )}

              {/* Title */}
              <h3
                className={`relative z-10 text-[17px] sm:text-[18px] font-medium text-primary leading-snug transition-colors duration-500 ${
                  item.hoverImage ? "group-hover:text-white" : ""
                }`}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="after:absolute after:inset-0 after:z-20 after:content-[''] hover:underline decoration-primary/30 underline-offset-4"
                  >
                    {item.title}
                    <ArrowUpRight aria-hidden className="ml-1 inline-block h-4 w-4 align-[-2px] text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  item.title
                )}
              </h3>

              {/* Description with inline links */}
              {item.description.length > 0 && (
              <p
                className={`relative z-10 text-[14px] text-muted leading-relaxed transition-colors duration-500 ${
                  item.hoverImage ? "group-hover:text-white" : ""
                }`}
              >
                {item.description.map((segment, sIdx) => {
                  if (typeof segment === "string") {
                    return <span key={sIdx}>{segment}</span>;
                  }
                  return (
                    <a
                      key={sIdx}
                      href="#"
                      className="text-[#556B2F] underline decoration-[#556B2F]/40 underline-offset-2 hover:decoration-[#556B2F] transition-colors"
                    >
                      {segment.text}
                    </a>
                  );
                })}
              </p>
              )}
            </div>
          ))}

          {fillerClass && (
            <div
              aria-hidden="true"
              className={`bg-[#f6f6f6] rounded-none ${fillerClass}`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
