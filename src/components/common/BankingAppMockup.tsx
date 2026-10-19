'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownLeft, ArrowLeftRight, ArrowUpRight, Bell, Check, ChevronDown, Home, Landmark, Mail, Menu, Wallet } from 'lucide-react';

export interface BankingAppMockupData {
  /** Describes the whole mockup for screen readers (it is announced as one image). */
  alt: string;
  /** Large faint word behind the phone. */
  word: string;
  /** Brand logo, top-right. */
  logo: string;
  /** Small two-line captions in three corners. */
  labels: { topLeft: [string, string]; bottomLeft: [string, string]; bottomRight: [string, string] };
  initials: string;
  branch: string;
  balanceLabel: string;
  /** The headline figure counts up to `balance`, shown as `${balancePrefix}${balance}${balanceSuffix}`. */
  balance: number;
  balancePrefix: string;
  balanceSuffix: string;
  badge: string;
  actions: [string, string];
  /** Day-end close banner: progress runs, then it shows as closed. */
  close: { title: string; running: string; done: string };
  /** Two summary tiles. */
  tiles: { label: string; change: string; up: boolean; amount: string; sub: string }[];
  /** Progress card, e.g. loan approvals. */
  progress: { title: string; value: string; note: string; from: string; to: string; percent: number };
  postingsTitle: string;
  postingsLink: string;
  /** Recent postings; they arrive one at a time, then each is ticked as posted to the ledger. */
  postings: { title: string; meta: string; amount: string; positive: boolean }[];
  home: string;
}

const TEAL = '#003640';
const GREEN = '#15533e';
const LIME = '#c8d269';
const LAST_STEP = 10; // one beat per second, then the loop restarts

/**
 * Animated hero artwork for a banking case study: a tilted phone on a stand showing a core
 * banking dashboard, in front of a glossy ribbon and a large faint word, with small captions in
 * the corners. It loops through one story: the headline figure counts up, the day-end close runs
 * and completes, postings arrive and are ticked as posted to the ledger, and the approvals bar
 * fills. All figures are sample data.
 *
 * Everything is sized from one unit (--u, from the panel's own width and height through container
 * queries), so the artwork scales as a whole; on short panels the phone's lower part runs off the
 * bottom edge. `phoneX` moves the phone sideways (percent of the width) and `showLabels` turns
 * the corner captions and logo off, for wide artwork with its own text.
 */
export function BankingAppMockup({ data, phoneX = 50, showLabels = true }: { data: BankingAppMockupData; phoneX?: number; showLabels?: boolean }) {
  const [step, setStep] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true);
      setStep(LAST_STEP);
      return;
    }
    const id = setTimeout(() => setStep(step < LAST_STEP ? step + 1 : 0), 1000);
    return () => clearTimeout(id);
  }, [step]);

  // Headline figure counts up during the first beat.
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (still || step >= 1) {
      setShown(data.balance);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 900);
      setShown(data.balance * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [step, still, data.balance]);

  const closing = step >= 1 && step < 3;
  const closed = step >= 3;
  const postingAt = (i: number) => step >= 4 + i; // rows arrive at beats 4, 5, 6...
  const postedAt = (i: number) => step >= 5 + i; // ...and are ticked one beat later
  const approvals = step >= 4;

  return (
    <div
      role="img"
      aria-label={data.alt}
      className="@container absolute inset-0 overflow-hidden"
      style={{ containerType: 'size', background: 'linear-gradient(160deg, #dcebe7 0%, #b9d5cf 52%, #9dc3bc 100%)' }}
    >
      {/* Glossy ribbon */}
      <svg aria-hidden viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="bam-ribbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.55" stopColor="#eef6f4" />
            <stop offset="1" stopColor="#cfe2de" />
          </linearGradient>
          <filter id="bam-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <motion.g
          style={{ transformOrigin: '500px 520px' }}
          animate={still ? undefined : { rotate: [-9, -5, -9] }}
          initial={{ rotate: -9 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="500" cy="545" rx="560" ry="205" fill="none" stroke="#003640" strokeOpacity="0.16" strokeWidth="54" filter="url(#bam-soft)" />
          <ellipse cx="500" cy="520" rx="560" ry="205" fill="none" stroke="url(#bam-ribbon)" strokeWidth="50" />
        </motion.g>
        <motion.g
          animate={still ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M-120 815 C 240 700, 560 960, 1120 760" fill="none" stroke="#003640" strokeOpacity="0.14" strokeWidth="48" filter="url(#bam-soft)" />
          <path d="M-120 795 C 240 680, 560 940, 1120 740" fill="none" stroke="url(#bam-ribbon)" strokeWidth="44" strokeLinecap="round" />
        </motion.g>
      </svg>

      {/* Stage: 1em = one layout unit */}
      <div aria-hidden className="absolute inset-0 [--u:min(2.2cqw,max(1.32cqh,8px))]" style={{ fontSize: 'var(--u)' }}>
        {/* Big faint word. It sits above the phone, which starts lower and covers only the bottom of the
            middle letters, so the word stays readable. */}
        <motion.span
          className="absolute top-[9cqh] whitespace-nowrap leading-none tracking-tight text-white/70"
          style={{ left: `${phoneX}%`, x: '-50%', fontSize: 'min(30cqw, 28cqh)' }}
          animate={still ? undefined : { x: ['-50%', '-48.5%', '-50%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          {data.word}
        </motion.span>

        {showLabels && (
          <>
            <span className="absolute left-[2.2em] top-[2.2em] text-[1.45em] leading-[1.25]" style={{ color: TEAL }}>
              {data.labels.topLeft[0]}
              <br />
              {data.labels.topLeft[1]}
            </span>
            {/* bottom captions are hidden on narrow panels, where the phone covers them */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.logo} alt="" className="absolute right-[3em] top-[3.2em] h-[1.9em] w-auto" style={{ borderRadius: 0 }} />
            <span className="absolute bottom-[2.2em] left-[2.2em] hidden text-[1.45em] leading-[1.25] @md:block" style={{ color: TEAL }}>
              {data.labels.bottomLeft[0]}
              <br />
              {data.labels.bottomLeft[1]}
            </span>
            <span className="absolute bottom-[2.2em] right-[2.2em] hidden text-right text-[1.45em] leading-[1.25] @md:block" style={{ color: TEAL }}>
              {data.labels.bottomRight[0]}
              <br />
              {data.labels.bottomRight[1]}
            </span>
          </>
        )}

        {/* stand */}
        <span
          className="absolute bottom-0 w-[1.5em] -translate-x-1/2 rounded-t-full"
          style={{
            left: `${phoneX}%`,
            top: 'calc(27cqh + 46em)',
            background: 'linear-gradient(90deg, #8fa3a1 0%, #f4f8f7 38%, #c3d0ce 62%, #7f9492 100%)',
          }}
        />

        {/* Phone */}
        <motion.div
          className="absolute h-[54em] w-[26em]"
          style={{ left: `${phoneX}%`, top: '27cqh', x: '-50%', transformPerspective: 1400 }}
          initial={{ rotate: 7, rotateY: -15, rotateX: 5 }}
          animate={still ? { rotate: 7, rotateY: -15, rotateX: 5 } : { rotate: [7, 6, 7], rotateY: [-15, -9, -15], rotateX: [5, 3, 5], y: [0, -7, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 rounded-[3.6em] bg-[#0b1719] p-[0.7em] shadow-[2em_3em_5em_-2em_rgba(0,54,64,0.55)] ring-1 ring-white/30">
            <div
              className="relative h-full w-full overflow-hidden rounded-[3em] px-[1.3em] pt-[1.5em]"
              style={{ background: 'linear-gradient(180deg, #f3f8f6 0%, #ffffff 30%, #fbf7ef 100%)' }}
            >
              {/* status bar */}
              <div className="flex items-center justify-between">
                <span className="text-[0.95em] leading-none text-[#111]">9:41</span>
                <span className="absolute left-1/2 top-[0.9em] h-[1.6em] w-[7em] -translate-x-1/2 rounded-full bg-[#0b1719]" />
                <span className="flex items-end gap-[0.18em]">
                  {[0.5, 0.7, 0.9, 1.1].map((h) => (
                    <span key={h} className="w-[0.22em] rounded-[0.1em] bg-[#111]" style={{ height: `${h}em` }} />
                  ))}
                  <span className="ml-[0.4em] h-[0.95em] w-[1.9em] rounded-[0.3em] border border-[#111]">
                    <span className="m-[0.1em] block h-[0.55em] w-[1.2em] rounded-[0.15em] bg-[#111]" />
                  </span>
                </span>
              </div>

              {/* header */}
              <div className="mt-[1.4em] flex items-center justify-between">
                <span className="flex items-center gap-[0.5em]">
                  <span className="flex h-[2.6em] w-[2.6em] items-center justify-center rounded-full" style={{ backgroundColor: TEAL }}>
                    <span className="text-[0.9em] leading-none text-white">{data.initials}</span>
                  </span>
                  <span className="flex h-[2.6em] w-[2.6em] items-center justify-center rounded-full bg-white ring-1 ring-black/[0.06]">
                    <Bell className="h-[1.15em] w-[1.15em]" style={{ color: TEAL }} strokeWidth={1.8} />
                  </span>
                </span>
                <span className="flex items-center gap-[0.4em] rounded-full bg-white px-[0.9em] py-[0.65em] ring-1 ring-black/[0.06]">
                  <Landmark className="h-[1em] w-[1em]" style={{ color: TEAL }} strokeWidth={1.8} />
                  <span className="text-[0.85em] leading-none text-[#111]">{data.branch}</span>
                  <ChevronDown className="h-[0.9em] w-[0.9em] text-[#5d6b6e]" strokeWidth={2} />
                </span>
              </div>

              {/* balance */}
              <div className="mt-[1.3em] flex flex-col items-center">
                <span className="flex items-center gap-[0.5em]">
                  <span className="text-[0.9em] leading-none text-[#33474b]">{data.balanceLabel}</span>
                  <span className="rounded-full px-[0.5em] py-[0.25em] text-[0.7em] leading-none" style={{ backgroundColor: LIME, color: TEAL }}>
                    {data.badge}
                  </span>
                </span>
                <span className="mt-[0.35em] text-[2.7em] leading-none tabular-nums tracking-tight" style={{ color: TEAL }}>
                  {data.balancePrefix}
                  {shown.toFixed(1)}
                  {data.balanceSuffix}
                </span>
              </div>

              {/* actions */}
              <div className="mt-[1.1em] flex items-center gap-[0.5em]">
                <span className="flex h-[2.9em] flex-1 items-center justify-center gap-[0.4em] rounded-full" style={{ backgroundColor: TEAL }}>
                  <ArrowDownLeft className="h-[1em] w-[1em] text-white" strokeWidth={2} />
                  <span className="text-[0.9em] leading-none text-white">{data.actions[0]}</span>
                </span>
                <span className="flex h-[2.9em] w-[2.9em] items-center justify-center rounded-full bg-white ring-1 ring-black/[0.06]">
                  <ArrowLeftRight className="h-[1em] w-[1em]" style={{ color: TEAL }} strokeWidth={2} />
                </span>
                <span className="flex h-[2.9em] flex-1 items-center justify-center gap-[0.4em] rounded-full bg-white ring-1 ring-black/[0.06]">
                  <ArrowUpRight className="h-[1em] w-[1em]" style={{ color: TEAL }} strokeWidth={2} />
                  <span className="text-[0.9em] leading-none" style={{ color: TEAL }}>
                    {data.actions[1]}
                  </span>
                </span>
              </div>

              {/* day-end close */}
              <div
                className="mt-[1em] rounded-[1.1em] px-[1em] py-[0.9em] transition-colors duration-500"
                style={{ background: closed ? 'rgba(21,83,62,0.12)' : 'linear-gradient(100deg, #eef5d3 0%, #f7f3e6 100%)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.95em] leading-none" style={{ color: TEAL }}>
                    {data.close.title}
                  </span>
                  <span
                    className="flex h-[1.5em] w-[1.5em] items-center justify-center rounded-full transition-colors duration-300"
                    style={{ backgroundColor: closed ? GREEN : 'rgba(0,54,64,0.12)' }}
                  >
                    <Check className={`h-[0.9em] w-[0.9em] transition-opacity duration-300 ${closed ? 'opacity-100' : 'opacity-0'}`} color="#fff" strokeWidth={3} />
                  </span>
                </div>
                <span className="mt-[0.45em] block text-[0.78em] leading-none" style={{ color: closed ? GREEN : '#5d6b6e' }}>
                  {closed ? data.close.done : data.close.running}
                </span>
                <span className="mt-[0.6em] block h-[0.35em] overflow-hidden rounded-full bg-black/10">
                  <span
                    className="block h-full rounded-full ease-linear"
                    style={{
                      backgroundColor: closed ? GREEN : TEAL,
                      width: closed ? '100%' : closing ? '92%' : '0%',
                      transitionProperty: 'width, background-color',
                      transitionDuration: closing ? '1900ms' : closed ? '300ms' : '0ms',
                    }}
                  />
                </span>
              </div>

              {/* tiles */}
              <div className="mt-[0.8em] grid grid-cols-2 gap-[0.7em]">
                {data.tiles.map((t) => (
                  <div key={t.label} className="rounded-[1.1em] bg-white px-[0.9em] py-[0.85em] shadow-[0_0.6em_1.4em_-1em_rgba(0,54,64,0.5)] ring-1 ring-black/[0.04]">
                    <span className="flex items-center justify-between">
                      <span className="text-[0.85em] leading-none text-[#111]">{t.label}</span>
                      <span className="flex items-center gap-[0.15em] text-[0.7em] leading-none" style={{ color: t.up ? GREEN : '#b4492f' }}>
                        {t.up ? <ArrowUpRight className="h-[1em] w-[1em]" strokeWidth={2.4} /> : <ArrowDownLeft className="h-[1em] w-[1em]" strokeWidth={2.4} />}
                        {t.change}
                      </span>
                    </span>
                    <span className="mt-[0.55em] block text-[1.35em] leading-none tabular-nums tracking-tight" style={{ color: TEAL }}>
                      {t.amount}
                    </span>
                    <span className="mt-[0.4em] block text-[0.7em] leading-none text-[#8a989b]">{t.sub}</span>
                  </div>
                ))}
              </div>

              {/* progress */}
              <div className="mt-[0.8em] rounded-[1.1em] bg-white px-[0.9em] py-[0.85em] shadow-[0_0.6em_1.4em_-1em_rgba(0,54,64,0.5)] ring-1 ring-black/[0.04]">
                <span className="flex items-baseline justify-between">
                  <span className="text-[0.9em] leading-none text-[#111]">{data.progress.title}</span>
                  <span className="text-[1.25em] leading-none tabular-nums" style={{ color: TEAL }}>
                    {data.progress.value}
                  </span>
                </span>
                <span className="mt-[0.5em] block text-[0.7em] leading-none text-[#8a989b]">{data.progress.note}</span>
                <span className="mt-[0.55em] block h-[0.4em] overflow-hidden rounded-full bg-[#e3ecea]">
                  <span
                    className="block h-full rounded-full ease-out"
                    style={{
                      backgroundColor: TEAL,
                      width: approvals ? `${data.progress.percent}%` : '8%',
                      transitionProperty: 'width',
                      transitionDuration: approvals ? '1600ms' : '0ms',
                    }}
                  />
                </span>
                <span className="mt-[0.4em] flex justify-between text-[0.68em] leading-none text-[#8a989b]">
                  <span>{data.progress.from}</span>
                  <span>{data.progress.to}</span>
                </span>
              </div>

              {/* postings */}
              <div className="mt-[0.9em] flex items-baseline justify-between">
                <span className="text-[0.95em] leading-none text-[#111]">{data.postingsTitle}</span>
                <span className="text-[0.7em] leading-none text-[#8a989b]">{data.postingsLink}</span>
              </div>
              <div className="mt-[0.55em] flex flex-col gap-[0.4em]">
                {data.postings.map((row, i) => (
                  <motion.div
                    key={row.title}
                    className="flex items-center gap-[0.6em] rounded-[0.9em] bg-white px-[0.7em] py-[0.55em] ring-1 ring-black/[0.04]"
                    initial={false}
                    animate={postingAt(i) ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: still ? 0 : 0.35 }}
                  >
                    <span
                      className="flex h-[1.8em] w-[1.8em] shrink-0 items-center justify-center rounded-full transition-colors duration-300"
                      style={{ backgroundColor: postedAt(i) ? GREEN : 'rgba(0,54,64,0.1)' }}
                    >
                      <Check className={`h-[0.95em] w-[0.95em] transition-opacity duration-300 ${postedAt(i) ? 'opacity-100' : 'opacity-0'}`} color="#fff" strokeWidth={3} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[0.82em] leading-none text-[#111]">{row.title}</span>
                      <span className="mt-[0.35em] block truncate text-[0.66em] leading-none text-[#8a989b]">{row.meta}</span>
                    </span>
                    <span className="text-[0.82em] leading-none tabular-nums" style={{ color: row.positive ? GREEN : '#b4492f' }}>
                      {row.amount}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* bottom nav */}
              <div className="absolute inset-x-[2.6em] bottom-[1.3em] flex items-center justify-between rounded-full bg-[#0b1719] p-[0.4em] shadow-[0_1em_2em_-1em_rgba(0,0,0,0.6)]">
                <span className="flex items-center gap-[0.4em] rounded-full bg-white px-[0.9em] py-[0.6em]">
                  <Home className="h-[1em] w-[1em]" style={{ color: TEAL }} strokeWidth={2} />
                  <span className="text-[0.8em] leading-none" style={{ color: TEAL }}>
                    {data.home}
                  </span>
                </span>
                {[Wallet, ArrowLeftRight, Mail, Menu].map((Icon, i) => (
                  <span key={i} className="flex h-[2.2em] w-[2.2em] items-center justify-center rounded-full ring-1 ring-white/25">
                    <Icon className="h-[1em] w-[1em] text-white" strokeWidth={1.8} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
