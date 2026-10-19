import Link from 'next/link';
import { SECTION_LABEL } from '../ui/labelStyles';

export interface DisclosureLinkGroup {
  /** Row label, e.g. "Regulatory references" or "Related reading". */
  label: string;
  /** External URLs open in a new tab; site paths ("/...") use client-side navigation. */
  items: { label: string; href: string }[];
}

export interface DisclosureProps {
  /** Small eyebrow above the text. */
  label?: string;
  /** One paragraph per entry. */
  text: string | string[];
  /** Optional rows of links under the text (sources to cite, related pages to read next). */
  links?: DisclosureLinkGroup[];
}

const linkClass =
  'text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary';

/**
 * Small-print disclosure block (confidentiality, results caveats, regulatory
 * responsibility), with optional reference and related-reading links.
 * Server component, no client JS.
 */
export function Disclosure({ label = 'Disclosure', text, links }: DisclosureProps) {
  const paragraphs = Array.isArray(text) ? text : [text];
  return (
    <section
      data-component-id="C055"
      data-component-name="Disclosure"
      aria-label={label}
      className="w-full bg-background px-5 pb-12 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl border-t border-border pt-6">
        <p className={`${SECTION_LABEL} mb-2`}>{label}</p>
        {paragraphs.map((p, i) => (
          <p key={i} className="m-0 text-[13px] leading-relaxed text-muted sm:text-[13.5px]">
            {p}
          </p>
        ))}

        {links?.map((group) => (
          <div key={group.label} className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <p className={`${SECTION_LABEL} m-0 shrink-0 sm:w-44`}>{group.label}</p>
            <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[13.5px]">
              {group.items.map((item) =>
                item.href.startsWith('/') ? (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
