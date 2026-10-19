'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface ArticleFilterGroup {
  label: string;
  options: string[];
  active: string | null;
  onChange: (value: string | null) => void;
  allLabel?: string;
}

export interface ArticleFilterBarProps {
  groups: ArticleFilterGroup[];
  className?: string;
}

function FilterDropdown({ label, options, active, onChange, allLabel = 'All' }: ArticleFilterGroup) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  if (options.length === 0) return null;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 text-[13.5px]"
      >
        <span className="font-semibold text-primary">{label}:</span>
        <span className="text-muted">{active || allLabel}</span>
        <ChevronDown size={14} className={`text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[160px] bg-surface border border-border rounded-xl shadow-lg py-1.5 z-20">
          <button
            onClick={() => { onChange(null); setOpen(false); }}
            className={`w-full text-left px-4 py-2 text-[13px] hover:bg-background transition-colors ${active === null ? 'text-accent font-semibold' : 'text-primary'}`}
          >
            {allLabel}
          </button>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { onChange(option); setOpen(false); }}
              className={`w-full text-left px-4 py-2 text-[13px] hover:bg-background transition-colors ${active === option ? 'text-accent font-semibold' : 'text-primary'}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ArticleFilterBar({ groups, className }: ArticleFilterBarProps) {
  const visibleGroups = groups.filter((g) => g.options.length > 0);
  if (visibleGroups.length === 0) return null;

  return (
    <div
      data-component-id="A003"
      data-component-name="ArticleFilterBar"
      className={
        className ||
        'flex items-center justify-end gap-6 sm:gap-8 flex-wrap px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full pb-6 border-b border-border'
      }
    >
      {visibleGroups.map((group) => (
        <FilterDropdown key={group.label} {...group} />
      ))}
    </div>
  );
}