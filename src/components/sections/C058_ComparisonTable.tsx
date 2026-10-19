import { Check, Minus } from 'lucide-react';
import { SECTION_LABEL } from '../ui/labelStyles';

export interface ComparisonTableProps {
  tagTitle?: string;
  heading: string;
  /** Optional short paragraph under the heading. */
  description?: string;
  /** Column headers: [row label, option A, option B]. The last column is the recommended one. */
  columns: string[];
  /** One array per row, in the same order as `columns`. */
  rows: string[][];
  /** Small label above the recommended column's title. */
  recommendedLabel?: string;
}

/** Small round marker: a mint tick for the recommended option, a grey dash for the other. */
function Mark({ good }: { good: boolean }) {
  return (
    <span
      aria-hidden
      className={`mt-[3px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${good ? 'bg-[#9fd8c6]/20 text-[#9fd8c6]' : 'bg-primary/[0.06] text-primary/35'}`}
    >
      {good ? <Check className="h-3 w-3" strokeWidth={2.5} /> : <Minus className="h-3 w-3" strokeWidth={2.5} />}
    </span>
  );
}

/**
 * Two approaches side by side as a real table (search engines and AI assistants can read it).
 * The recommended option is a dark-teal column beside a light card, with mint ticks; the other option stays quiet with grey dashes. On phones each row becomes a
 * small card with the recommended answer in a dark block. Server component, no client JS.
 */
export function ComparisonTable({ tagTitle, heading, description, columns, rows, recommendedLabel = "Tizora's approach" }: ComparisonTableProps) {
  const [labelCol, otherCol, bestCol] = columns;
  const lastRow = rows.length - 1;

  return (
    <section data-component-id="C058" data-component-name="ComparisonTable" className="w-full bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {tagTitle && <span className={`${SECTION_LABEL} mb-3 block`}>{tagTitle}</span>}
        <h2 className="max-w-4xl text-[28px] font-normal leading-[1.15] tracking-tight text-primary sm:text-[40px]">{heading}</h2>
        {description && <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted sm:text-[17px]">{description}</p>}

        <table className="mt-10 w-full border-separate border-spacing-0 text-left sm:mt-14">
          <thead className="hidden sm:table-header-group">
            <tr>
              <th scope="col" className="w-[24%] rounded-tl-[12px] border-y border-l border-primary/10 bg-white px-7 pb-5 pt-6 align-bottom text-[13px] font-normal text-primary/45">
                {labelCol}
              </th>
              <th scope="col" className="border-y border-primary/10 bg-white px-7 pb-5 pt-6 align-bottom text-[16px] font-normal text-primary/60">
                {otherCol}
              </th>
              {/* Recommended column: one dark-teal card running the full height of the table. */}
              <th scope="col" className="w-[40%] rounded-tr-[12px] bg-primary px-7 pb-5 pt-6 align-bottom text-white">
                <span className="mb-1.5 block text-[12px] font-normal text-[#9fd8c6]">{recommendedLabel}</span>
                <span className="block text-[18px] font-normal">{bestCol}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, other, best], r) => {
              const isLast = r === lastRow;
              return (
                <tr key={label} className="mb-3 block overflow-hidden rounded-[10px] border border-primary/10 bg-white sm:mb-0 sm:table-row sm:overflow-visible sm:rounded-none sm:border-0 sm:bg-transparent">
                  <th
                    scope="row"
                    className={`block px-5 pt-5 text-[15px] font-normal text-primary sm:table-cell sm:border-b sm:border-l sm:border-primary/10 sm:bg-white sm:px-7 sm:py-6 sm:align-top ${isLast ? 'sm:rounded-bl-[12px]' : ''}`}
                  >
                    {label}
                  </th>
                  <td className="block px-5 pb-3 pt-2.5 text-[15px] leading-relaxed text-muted sm:table-cell sm:border-b sm:border-primary/10 sm:bg-white sm:px-7 sm:py-6 sm:align-top">
                    <span className="mb-1 block text-[12px] text-primary/45 sm:hidden">{otherCol}</span>
                    <span className="flex items-start gap-2.5">
                      <Mark good={false} />
                      <span>{other}</span>
                    </span>
                  </td>
                  <td
                    className={`block bg-primary px-5 py-4 text-[15px] leading-relaxed text-white/90 sm:table-cell sm:px-7 sm:py-6 sm:align-top ${
                      isLast ? 'sm:rounded-br-[12px]' : 'sm:border-b sm:border-white/10'
                    }`}
                  >
                    <span className="mb-1 block text-[12px] text-[#9fd8c6] sm:hidden">{bestCol}</span>
                    <span className="flex items-start gap-2.5">
                      <Mark good />
                      <span>{best}</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
