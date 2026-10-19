import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/** Reusable "Home › Case Studies › Industry › Page" trail. The last item is always plain text (current page). */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px] sm:text-[13px]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-x-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 shrink-0 text-muted/50" aria-hidden />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-muted underline decoration-muted/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/50"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-muted/70">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
