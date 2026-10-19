'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Bot, Check, PackageCheck, ShoppingCart, Truck } from 'lucide-react';

export interface WarehouseAppMockupData {
  /** Describes the whole mockup for screen readers (it is announced as one image). */
  alt: string;
  /** Incoming order card. */
  order: { number: string; channel: string; store: string; items: { name: string; qty: string }[]; placed: string; sent: string };
  /** Warehouse floor card: the robot visits one bin per order line, then the packing station. */
  floor: { title: string; robot: string; picking: string; picked: string };
  /** Packing-station card: each order line is verified, then the order is cleared. */
  pack: { title: string; checking: string; verified: string };
  /** Status bar along the bottom (what the customer sees). */
  status: { label: string; steps: [string, string, string, string] };
}

const TEAL = '#003640';
const GREEN = '#15533e';
const EASE = [0.22, 1, 0.36, 1] as const;
const LAST_STEP = 12; // one beat per second, then the loop restarts

/** Entrance on page load: each card rises, scales up and fades in, one after another. */
function Enter({ delay, className, children }: { delay: number; className: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Card shell with a numbered stage label; the stage the order is in gets a green outline. */
function Stage({ n, label, active, done, children, className = '' }: { n: number; label: string; active: boolean; done: boolean; children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex h-full flex-col rounded-[1.2em] bg-white p-[1.2em] shadow-[0_1.6em_3.2em_-1.6em_rgba(0,54,64,0.3)] transition-shadow duration-300 ${
        active ? 'ring-2 ring-[#15533e]/60' : 'ring-1 ring-[#003640]/[0.08]'
      } ${className}`}
    >
      <div className="mb-[0.9em] flex items-center gap-[0.55em]">
        <span
          className="flex h-[1.6em] w-[1.6em] shrink-0 items-center justify-center rounded-full text-[0.75em] leading-none transition-colors duration-300"
          style={{ backgroundColor: done ? GREEN : active ? TEAL : '#e3ecea', color: done || active ? '#fff' : '#5d6b6e' }}
        >
          {done ? <Check className="h-[1em] w-[1em]" strokeWidth={3} /> : n}
        </span>
        <span className="text-[0.8em] leading-none tracking-wide text-[#5d6b6e]">{label}</span>
      </div>
      {children}
    </div>
  );
}

// Warehouse floor plan (SVG units): shelf rows, the three bins the robot visits, the dock and the packing station.
const SHELVES = [
  { x: 30, y: 26 }, { x: 110, y: 26 }, { x: 190, y: 26 },
  { x: 30, y: 78 }, { x: 110, y: 78 }, { x: 190, y: 78 },
];
const BINS = [{ x: 62, y: 46 }, { x: 150, y: 98 }, { x: 222, y: 46 }];
const DOCK = { x: 20, y: 138 };
const PACK = { x: 262, y: 138 };

/**
 * Animated product mockup for a hero media panel, on the page background colour. One order moves
 * through four numbered stages, each in its own card: 1 the storefront order, 2 robot picking on
 * the AMR warehouse floor, 3 packing-station checks, 4 order status. The stage the order is in is
 * outlined in green and finished stages get a tick. All data is sample data.
 *
 * Layout: on wide panels the order and packing cards stack on the left, the warehouse floor fills
 * the right and the status runs along the bottom (52 x 44 unit canvas). On narrow panels (phones)
 * the floor goes on top, order and packing sit side by side, then status (34 x 46 canvas). Either
 * canvas scales to fit the panel, so nothing is cropped; on desktop it keeps space under the navbar.
 */
export function WarehouseAppMockup({ data }: { data: WarehouseAppMockupData }) {
  const [step, setStep] = useState(0);
  const [still, setStill] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true);
      setStep(LAST_STEP);
      return;
    }
    const id = setTimeout(() => setStep(step < LAST_STEP ? step + 1 : 0), 1000);
    return () => clearTimeout(id);
  }, [step]);

  const lines = data.order.items;
  const sent = step >= 1;
  // Robot: dock (0-1), bins at beats 2, 3, 4, packing station from beat 5.
  const robotAt = step <= 1 ? DOCK : step <= 4 ? BINS[Math.min(step - 2, BINS.length - 1)] : PACK;
  // A bin counts as picked once the robot moves on from it.
  const pickedCount = Math.max(0, Math.min(lines.length, step - 2));
  const picked = pickedCount >= lines.length;
  const verifiedCount = Math.max(0, Math.min(lines.length, step - 5));
  const verified = verifiedCount >= lines.length;
  const dispatched = step >= 9;
  const statusIdx = dispatched ? 3 : verified ? 2 : picked ? 1 : 0;
  // Which stage the order is in: 1 order, 2 pick, 3 verify, 4 dispatch.
  const stage = step <= 1 ? 1 : !picked ? 2 : !verified ? 3 : 4;

  return (
    <div role="img" aria-label={data.alt} className="absolute inset-0 overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgba(0,54,64,0.09) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />
      <div className="@container absolute inset-x-0 bottom-0 top-0 lg:top-14" style={{ containerType: 'size' }}>
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[80cqh] w-[80cqh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dff1ec] opacity-70 blur-3xl" />

        {/* Canvas: 34 x 46 units on narrow panels, 52 x 44 on wide ones, scaled to fit */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 grid h-[46em] w-[34em] -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-[1.2em] [--cw:36] [--ch:48] [grid-template-areas:'floor_floor'_'order_pack'_'status_status'] [grid-template-rows:19em_1fr_auto] @xl:h-[44em] @xl:w-[52em] @xl:grid-cols-[17em_1fr] @xl:gap-[1.4em] @xl:[--cw:54] @xl:[--ch:46] @xl:[grid-template-areas:'order_floor'_'pack_floor'_'status_status'] @xl:[grid-template-rows:1fr_1fr_auto]"
          style={{ fontSize: 'min(calc(100cqw / var(--cw)), calc(100cqh / var(--ch)))' }}
        >
          {/* 1 · Order */}
          <Enter delay={0.05} className="min-h-0 [grid-area:order]">
            <Stage n={1} label="Order" active={stage === 1} done={stage > 1}>
              <div className="flex items-center gap-[0.7em]">
                <span className="flex h-[2.3em] w-[2.3em] shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: sent ? GREEN : TEAL }}>
                  {sent ? <Check className="h-[1.1em] w-[1.1em] text-white" strokeWidth={3} /> : <ShoppingCart className="h-[1.05em] w-[1.05em] text-white" strokeWidth={2} />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.95em] leading-none text-[#111]">{data.order.number}</span>
                  <span className="mt-[0.35em] block truncate text-[0.75em] leading-none" style={{ color: sent ? GREEN : '#5d6b6e' }}>
                    {data.order.channel} · {sent ? data.order.sent : data.order.placed}
                  </span>
                </span>
              </div>
              <span className="mt-[0.8em] block truncate text-[0.72em] leading-none text-[#5d6b6e]">{data.order.store}</span>
              <div className="mt-auto flex flex-col gap-[0.35em] pt-[0.7em]">
                {lines.map((l) => (
                  <span key={l.name} className="flex items-center justify-between gap-[0.5em] rounded-[0.5em] bg-[#f4f7f7] px-[0.6em] py-[0.45em]">
                    <span className="truncate text-[0.76em] leading-none text-[#33474b]">{l.name}</span>
                    <span className="shrink-0 text-[0.74em] leading-none tabular-nums text-[#5d6b6e]">{l.qty}</span>
                  </span>
                ))}
              </div>
            </Stage>
          </Enter>

          {/* 2 · Pick on the warehouse floor */}
          <Enter delay={0.2} className="min-h-0 [grid-area:floor]">
            <Stage n={2} label="Pick" active={stage === 2} done={stage > 2}>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-[0.5em]">
                  <Bot className="h-[1.3em] w-[1.3em]" style={{ color: TEAL }} strokeWidth={2} />
                  <span className="text-[1.3em] leading-none tracking-tight" style={{ color: TEAL }}>
                    {data.floor.title}
                  </span>
                </span>
                <span className="rounded-full bg-[#e3f1ef] px-[0.7em] py-[0.4em] text-[0.72em] leading-none" style={{ color: GREEN }}>
                  {data.floor.robot}
                </span>
              </div>

              <div className="mt-[0.9em] flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[0.9em] bg-[#f4f7f7] p-[0.6em]">
                <svg viewBox="0 0 284 156" className="block h-full max-h-full w-full" preserveAspectRatio="xMidYMid meet">
                  {SHELVES.map((sh, i) => (
                    <g key={i}>
                      <rect x={sh.x} y={sh.y} width="64" height="16" rx="3" fill="#dfe7e6" />
                      {[0, 1, 2, 3].map((k) => (
                        <rect key={k} x={sh.x + 4 + k * 15} y={sh.y + 3} width="11" height="10" rx="1.5" fill="#c9d6d4" />
                      ))}
                    </g>
                  ))}
                  {BINS.map((b, i) => {
                    const done = i < pickedCount;
                    return (
                      <g key={i}>
                        <circle cx={b.x} cy={b.y} r="7.5" fill={done ? GREEN : '#ffffff'} stroke={done ? GREEN : '#e0533a'} strokeWidth="2" />
                        {done ? (
                          <path d={`M${b.x - 3.2} ${b.y} l2.2 2.4 l4.4 -4.6`} fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        ) : (
                          <text x={b.x} y={b.y + 3} textAnchor="middle" fontSize="8" fill="#e0533a">{i + 1}</text>
                        )}
                      </g>
                    );
                  })}
                  <rect x={DOCK.x - 12} y={DOCK.y - 9} width="24" height="18" rx="3" fill="none" stroke="#9aaeac" strokeDasharray="3 2.5" />
                  <rect x={PACK.x - 16} y={PACK.y - 10} width="32" height="20" rx="3" fill={verified ? 'rgba(21,83,62,0.14)' : '#e3f1ef'} stroke={GREEN} strokeWidth="1.2" />
                  <text x={PACK.x} y={PACK.y + 3} textAnchor="middle" fontSize="7" fill={GREEN}>PACK</text>
                  <motion.g initial={false} animate={{ x: robotAt.x, y: robotAt.y }} transition={{ duration: still ? 0 : 0.85, ease: 'easeInOut' }}>
                    <circle r="11" fill={TEAL} opacity="0.12" />
                    <rect x="-7.5" y="-7.5" width="15" height="15" rx="4" fill={TEAL} />
                    <circle cx="-2.6" cy="-1" r="1.5" fill="#9be7c4" />
                    <circle cx="2.6" cy="-1" r="1.5" fill="#9be7c4" />
                  </motion.g>
                </svg>
              </div>

              <div className="mt-[0.8em] flex items-center justify-between gap-[0.6em]">
                <span className="truncate text-[0.8em] leading-none text-[#5d6b6e]">
                  {picked ? data.floor.picked : `${data.floor.picking} ${Math.min(pickedCount + 1, lines.length)} of ${lines.length}`}
                </span>
                <span className="flex shrink-0 gap-[0.3em]">
                  {lines.map((_, i) => (
                    <span key={i} className="h-[0.5em] w-[1.6em] rounded-full transition-colors duration-300" style={{ backgroundColor: i < pickedCount ? GREEN : '#dfe7e6' }} />
                  ))}
                </span>
              </div>
            </Stage>
          </Enter>

          {/* 3 · Verify at the packing station */}
          <Enter delay={0.35} className="min-h-0 [grid-area:pack]">
            <Stage n={3} label="Verify" active={stage === 3} done={stage > 3}>
              <div className="flex items-center gap-[0.5em]">
                <PackageCheck className="h-[1.2em] w-[1.2em] shrink-0" style={{ color: TEAL }} strokeWidth={2} />
                <span className="truncate text-[0.9em] leading-none text-[#111]">{data.pack.title}</span>
              </div>
              <div className="mt-[0.8em] flex flex-col gap-[0.45em]">
                {lines.map((l, i) => {
                  const ok = i < verifiedCount;
                  return (
                    <span key={l.name} className="flex items-center gap-[0.55em]">
                      <span
                        className="flex h-[1.4em] w-[1.4em] shrink-0 items-center justify-center rounded-full transition-colors duration-300"
                        style={{ backgroundColor: ok ? GREEN : '#eef2f2' }}
                      >
                        <Check className={`h-[0.85em] w-[0.85em] transition-opacity duration-300 ${ok ? 'opacity-100' : 'opacity-0'}`} color="#fff" strokeWidth={3} />
                      </span>
                      <span className="truncate text-[0.76em] leading-none" style={{ color: ok ? '#111' : '#8a989b' }}>
                        {l.name}
                      </span>
                    </span>
                  );
                })}
              </div>
              <span
                className="mt-auto block truncate rounded-[0.6em] px-[0.7em] py-[0.55em] text-center text-[0.76em] leading-none transition-colors duration-300"
                style={{ backgroundColor: verified ? GREEN : '#eef2f2', color: verified ? '#fff' : '#5d6b6e' }}
              >
                {verified ? data.pack.verified : data.pack.checking}
              </span>
            </Stage>
          </Enter>

          {/* 4 · Order status */}
          <Enter delay={0.5} className="min-h-0 [grid-area:status]">
            <Stage n={4} label="Dispatch" active={stage === 4} done={dispatched}>
              <div className="flex items-center justify-between">
                <span className="text-[0.85em] leading-none text-[#5d6b6e]">{data.status.label}</span>
                <motion.span
                  key={statusIdx}
                  className="flex items-center gap-[0.4em] text-[0.82em] leading-none"
                  style={{ color: dispatched ? GREEN : TEAL }}
                  initial={reduce || still ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {dispatched && <Truck className="h-[1.1em] w-[1.1em]" strokeWidth={2} />}
                  {data.status.steps[statusIdx]}
                </motion.span>
              </div>
              <div className="mt-[0.9em] grid grid-cols-4 gap-[0.5em]">
                {data.status.steps.map((s, i) => (
                  <div key={s} className="min-w-0">
                    <span className="block h-[0.4em] overflow-hidden rounded-full bg-[#dfe7e6]">
                      <span
                        className="block h-full rounded-full ease-out"
                        style={{ backgroundColor: GREEN, width: i <= statusIdx ? '100%' : '0%', transitionProperty: 'width', transitionDuration: still ? '0ms' : '600ms' }}
                      />
                    </span>
                    <span className="mt-[0.45em] block truncate text-[0.72em] leading-none" style={{ color: i <= statusIdx ? '#111' : '#8a989b' }}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </Stage>
          </Enter>
        </div>
      </div>
    </div>
  );
}
