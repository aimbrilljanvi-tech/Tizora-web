import type { ReactNode } from "react";
import Link from "next/link";

const linkClass = "underline decoration-primary/30 underline-offset-4 hover:decoration-primary";
const LINK = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;

/** Turns inline `[anchor text](/path)` markup inside a string into real links; other strings pass through. */
export function inlineLinks(text: ReactNode): ReactNode {
  if (typeof text !== "string" || !text.includes("](/")) return text;
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const start = m.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    out.push(
      <Link key={start} href={m[2]} className={linkClass}>
        {m[1]}
      </Link>,
    );
    last = start + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** Applies `inlineLinks` to every paragraph of a ContentSplit block, so case studies can link to each other from within their copy. */
export function withInlineLinks<T extends { paragraphs: ReactNode[] }>(data: T): T {
  return { ...data, paragraphs: data.paragraphs.map(inlineLinks) };
}
