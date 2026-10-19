import { ArrowRight, ClipboardCheck } from 'lucide-react';
import { SECTION_LABEL } from '../ui/labelStyles';

export interface ResultsTableProps {
  tagTitle?: string;
  heading: string;
  /** Optional short paragraph under the heading. */
  description?: string;
  /** Column headers: [metric, before, after, change]. */
  columns: string[];
  /** One array per row, in the same order as `columns`. */
  rows: string[][];
  /** Optional "How we measured" notes. "Label: text" items get a bold label. */
  method?: { title: string; items: string[] };
}

/** "Source: audit log" -> ["Source", "audit log"]. */
const splitLabel = (item: string) => {
  const i = item.indexOf(': ');
  return i > 0 && i < 24 ? [item.slice(0, i), item.slice(i + 2)] : [null, item];
};

const pad = (n: number) => String(n).padStart(2, '0');

/** Column header text on the dark grey header row (same size and weight as SECTION_LABEL, light colour). */
const HEAD = 'text-[14px] font-normal leading-snug';

/**
 * Before/after results as a real table (search engines and AI assistants can read it).
 * Fixed columns keep every row aligned: numbered metric, muted "before", an arrow, the
 * "after" value leading, and a fixed-width change pill. Rows become stacked cards on phones.
 * Optional methodology notes sit in the card footer. Server component, no client JS.
 */
export function ResultsTable({ tagTitle, heading, description, columns, rows, method }: ResultsTableProps) {
  const [metricCol, beforeCol, afterCol, changeCol] = columns;

  return (
    <section
      data-component-id="C053"
      data-component-name="ResultsTable"
      className="w-full bg-background py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {tagTitle && <span className={`${SECTION_LABEL} mb-3 block`}>{tagTitle}</span>}
        <h2 className="max-w-4xl text-[28px] font-normal leading-[1.15] tracking-tight text-primary sm:text-[40px]">
          {heading}
        </h2>
        {description && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-[17px]">{description}</p>
        )}

        <div className="mt-8 overflow-hidden rounded-[10px] bg-white shadow-[0_24px_60px_-40px_rgba(0,54,64,0.5)] ring-1 ring-primary/[0.08] sm:mt-12">
          <table className="w-full border-collapse text-left md:table-fixed">
            <colgroup className="hidden md:table-column-group">
              <col className="md:w-[42%]" />
              <col className="md:w-[17%]" />
              <col className="md:w-[5%]" />
              <col className="md:w-[19%]" />
              <col className="md:w-[17%]" />
            </colgroup>
            <thead className="hidden bg-[#2a2e31] md:table-header-group">
              <tr>
                <th scope="col" className={`${HEAD} px-6 py-4 text-white lg:px-8`}>{metricCol}</th>
                <th scope="col" className={`${HEAD} px-4 py-4 text-white/65`}>{beforeCol}</th>
                <th scope="col" className="px-0 py-4"><span className="sr-only">to</span></th>
                <th scope="col" className={`${HEAD} px-4 py-4 text-white`}>{afterCol}</th>
                <th scope="col" className={`${HEAD} px-6 py-4 text-right text-white lg:px-8`}>{changeCol}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([metric, before, after, change], idx) => (
                <tr
                  key={metric}
                  // Phones: a small card (metric with the change pill top-right, then Before | After boxes).
                  // Desktop: a normal table row.
                  className="relative grid grid-cols-2 gap-x-2.5 gap-y-3 border-b border-primary/10 px-4 py-5 last:border-b-0 sm:px-5 md:table-row md:p-0 md:even:bg-[#fafaf8]"
                >
                  <th scope="row" className="col-span-2 pr-24 font-normal md:px-6 md:py-5 md:pr-6 lg:px-8">
                    <span className="flex items-baseline gap-3">
                      <span aria-hidden className="w-6 shrink-0 text-[12px] tabular-nums text-muted">{pad(idx + 1)}</span>
                      <span className="text-[15px] leading-snug text-primary lg:text-[16px]">{metric}</span>
                    </span>
                  </th>
                  <td className="rounded-[8px] bg-[#f6f6f4] px-3 py-2.5 text-[14px] leading-snug tabular-nums text-muted md:rounded-none md:bg-transparent md:px-4 md:py-5 md:text-[15px]">
                    <span aria-hidden className="mb-1 block text-[11px] text-muted/80 md:hidden">{beforeCol}</span>
                    {before}
                  </td>
                  <td aria-hidden className="hidden text-accent md:table-cell md:py-5 md:text-center">
                    <ArrowRight className="inline h-3.5 w-3.5" />
                  </td>
                  <td className="rounded-[8px] bg-[#15533e]/[0.07] px-3 py-2.5 leading-snug md:rounded-none md:bg-transparent md:px-4 md:py-5">
                    <span aria-hidden className="mb-1 block text-[11px] text-[#15533e]/80 md:hidden">{afterCol}</span>
                    <span className="text-[16px] tabular-nums text-primary md:text-[18px] lg:text-[19px]">{after}</span>
                  </td>
                  <td className="absolute right-4 top-4 sm:right-5 md:static md:px-6 md:py-5 md:text-right lg:px-8">
                    <span className="inline-flex min-w-[64px] items-center justify-center rounded-full bg-[#003640]/[0.07] px-3 py-1 text-[12.5px] tabular-nums text-primary md:min-w-[76px] md:text-[13px]">
                      {change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {method && (
            <div className="border-t border-primary/10 bg-background/60 px-5 py-6 sm:px-6 lg:px-8 lg:py-7">
              <h3 className={`${SECTION_LABEL} mb-4 flex items-center gap-2`}>
                <ClipboardCheck className="h-4 w-4 text-accent" strokeWidth={1.75} aria-hidden />
                {method.title}
              </h3>
              <dl className="m-0 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {method.items.map((item) => {
                  const [label, text] = splitLabel(item);
                  return (
                    <div key={item} className="text-[14px] leading-relaxed text-muted">
                      {label && <dt className="inline text-primary">{label}: </dt>}
                      <dd className="m-0 inline">{text}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
