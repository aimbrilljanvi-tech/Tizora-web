'use client';

import { Link2 } from 'lucide-react';

export function CopyLinkButton({ url, className }: { url: string; className?: string }) {
  return (
    <button
      onClick={() => navigator.clipboard?.writeText(url)}
      aria-label="Copy link"
      className={className}
    >
      <Link2 size={15} />
    </button>
  );
}
