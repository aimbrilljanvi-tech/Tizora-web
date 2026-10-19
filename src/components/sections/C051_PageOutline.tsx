'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { List, X } from 'lucide-react';

export interface OutlineItem {
  id: string;
  label: string;
}

interface PageOutlineProps {
  /** CSS selector for the headings to list. Defaults to every `h2` in `<main>`. */
  selector?: string;
  /** Heading shown at the top of the panel. */
  title?: string;
  /** Skip rendering when fewer headings than this are found. */
  minHeadings?: number;
  /** Explicit list; when omitted the headings are discovered from the page. */
  items?: OutlineItem[];
  /**
   * Optional short names, keyed by the start of a heading's text. Use an empty
   * string to leave that heading out of the list.
   */
  labels?: Record<string, string>;
  /** Pixels scrolled before the outline appears (keeps it off the hero). */
  showAfter?: number;
  /**
   * CSS selector of the block the outline should wait for (it appears once that block has
   * scrolled past). Defaults to the first section component on the page.
   */
  heroSelector?: string;
  /**
   * When true the hero block is shifted with the rest of the content. Use for article pages
   * where the header lives inside the same element as the body.
   */
  shiftHero?: boolean;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

/**
 * "On this page" outline for long-form pages.
 *
 * - Discovers headings automatically (or takes an explicit `items` list),
 *   gives each an id, and highlights the section being read.
 * - Wide screens (xl+): an always-visible side panel on the left listing the
 *   actual headings, with the page content shifted right to make room.
 * - Small screens: a floating "Contents" button that opens the same list.
 *
 * Recommended (reliable) use: wrap each section you want listed in
 * `<OutlineSection label="Short name">`. Only wrapped sections are listed, in
 * page order, so the outline never depends on heading text or section colours.
 * Without any wrapper it falls back to listing every `h2` in `<main>`.
 */
export function PageOutline({
  selector = 'main h2',
  title = 'On this page',
  minHeadings = 3,
  items: explicitItems,
  labels,
  showAfter = 480,
  heroSelector = '[data-component-id]:not([data-component-id="C051"])',
  shiftHero = false,
}: PageOutlineProps) {
  const [items, setItems] = useState<OutlineItem[]>(explicitItems ?? []);
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const itemsRef = useRef<OutlineItem[]>(items);
  itemsRef.current = items;

  // Discover headings (sections can mount after us, so re-scan briefly).
  useEffect(() => {
    if (explicitItems) return;

    const scan = () => {
      const seen = new Set<string>();
      const found: OutlineItem[] = [];
      const tagged = document.querySelectorAll<HTMLElement>('[data-toc]');
      const nodes = tagged.length ? tagged : document.querySelectorAll<HTMLElement>(selector);
      nodes.forEach((el) => {
        if (!tagged.length && (el.closest('footer, nav, [data-toc-skip]') || el.hasAttribute('data-toc-skip'))) return;
        let label = (el.dataset.toc || el.dataset.tocLabel || el.textContent || '').replace(/\s+/g, ' ').trim();
        if (labels && !tagged.length && !el.dataset.tocLabel) {
          const key = Object.keys(labels).find((k) => label.startsWith(k));
          if (key !== undefined) label = labels[key];
        }
        if (!label) return;
        let id = el.id || slugify(label) || `section-${found.length + 1}`;
        while (seen.has(id)) id = `${id}-${found.length + 1}`;
        seen.add(id);
        el.id = id;
        el.style.scrollMarginTop = '112px';
        found.push({ id, label });
      });
      setItems((prev) =>
        prev.length === found.length && prev.every((p, i) => p.id === found[i].id && p.label === found[i].label)
          ? prev
          : found,
      );
    };

    scan();
    const timers = [300, 1200, 3000].map((ms) => setTimeout(scan, ms));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, explicitItems]);

  // Wide screens: move the content below the hero right, leaving a page-coloured gutter
  // for the panel, so it is always readable no matter what the sections look like.
  useEffect(() => {
    const main = document.querySelector('main') as HTMLElement | null;
    const mq = window.matchMedia('(min-width: 1280px)');
    if (!main) return;
    const shifted: HTMLElement[] = [];
    const clear = () => {
      shifted.forEach((el) => {
        el.style.marginLeft = '';
        el.style.width = '';
      });
      shifted.length = 0;
    };
    const apply = () => {
      clear();
      if (!mq.matches || itemsRef.current.length < minHeadings) return;
      const hero = shiftHero ? null : main.querySelector(heroSelector);
      Array.from(main.children).forEach((child) => {
        const el = child as HTMLElement;
        if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return;
        if (el.tagName === 'FOOTER' || el.querySelector('footer')) return;
        if (el.matches('[data-component-id="C032"]') || el.querySelector('[data-component-id="C032"]')) return;
        if (hero && (el === hero || el.contains(hero))) return;
        if (getComputedStyle(el).position === 'fixed') return;
        el.style.marginLeft = '17rem';
        el.style.width = 'calc(100% - 17rem)';
        shifted.push(el);
      });
    };
    apply();
    mq.addEventListener('change', apply);
    const t = setTimeout(apply, 400);
    return () => {
      mq.removeEventListener('change', apply);
      clearTimeout(t);
      clear();
    };
  }, [items, minHeadings, shiftHero, heroSelector]);

  // Scroll-spy + visibility.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = document.querySelector(`main ${heroSelector}`);
      setVisible(hero ? hero.getBoundingClientRect().bottom < 120 : window.scrollY > showAfter);
      // Hide over the closing call-to-action and the footer, like over the hero.
      const end = document.querySelector('main [data-component-id="C032"], footer');
      setNearFooter(!!end && end.getBoundingClientRect().top < window.innerHeight * 0.75);
      const line = window.innerHeight * 0.3;
      let current: string | null = null;
      for (const item of itemsRef.current) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = item.id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items, showAfter, heroSelector]);

  const goTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  }, []);

  if (items.length < minHeadings) return null;

  const list = (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(item.id);
              }}
              aria-current={isActive ? 'location' : undefined}
              className={`block border-l-2 py-1.5 pl-4 pr-2 text-[14px] leading-snug transition-colors ${
                isActive
                  ? 'border-[#696e2e] text-[#696e2e]'
                  : 'border-transparent text-primary/70 hover:border-primary/30 hover:text-primary'
              }`}
            >
              <span className="line-clamp-2">{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Wide screens: always-visible side panel */}
      <nav
        data-component-id="C051"
        data-component-name="PageOutline"
        aria-label={title}
        className={`fixed left-6 top-28 z-30 hidden max-h-[calc(100vh-8rem)] w-60 overflow-y-auto transition-opacity duration-300 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:block ${
          visible && !nearFooter ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <p className={`mb-3 pl-4 text-[11px] uppercase tracking-[0.16em] text-muted`}>{title}</p>
        {list}
      </nav>

      {/* Small screens: floating button + sheet */}
      <div
        className={`fixed bottom-4 right-4 z-40 xl:hidden transition-opacity duration-300 ${
          visible && !nearFooter ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {open && (
          <div className="mb-3 max-h-[60vh] w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-border bg-white p-4 shadow-[0_18px_40px_-18px_rgba(0,54,64,0.4)]">
            <p className="mb-3 pl-4 text-[11px] uppercase tracking-[0.16em] text-muted">{title}</p>
            {list}
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? `Close ${title}` : `Open ${title}`}
          className="ml-auto flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-[14px] text-white shadow-lg transition-colors hover:bg-primary-hover"
        >
          {open ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
          {open ? 'Close' : 'Contents'}
        </button>
      </div>
    </>
  );
}

/** Marks a block of the page as an entry in the outline. Renders a plain block wrapper. */
export function OutlineSection({ label, id, children }: { label: string; id?: string; children: ReactNode }) {
  return (
    <div id={id} data-toc={label}>
      {children}
    </div>
  );
}
