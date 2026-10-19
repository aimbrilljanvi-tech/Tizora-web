'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, Pill, RefreshCw, ScanBarcode, Sparkles } from 'lucide-react';

export interface PatientAppMockupData {
  /** Describes the whole mockup for screen readers (it is announced as one image). */
  alt: string;
  /** Medsheet card. */
  sheet: {
    title: string;
    date: string;
    initials: string;
    resident: string;
    allergy: string;
    /** Rows tick off as given, one per beat. `updatedTo` marks the row the pharmacy sync changes. */
    rows: { time: string; name: string; dose: string; givenAt: string; updatedTo?: string }[];
    updatedNote: string;
  };
  /** Pharmacy sync card. */
  sync: { source: string; running: string; done: string };
  /** Barcode inventory card: stock drops by one when the item is scanned. */
  scan: { item: string; stock: number; reorderAt: string; scannedLabel: string };
  /** AI summary card, shown as a planned (next phase) feature. */
  ai: { label: string; tag: string; lines: string[] };
}

const TEAL = '#003640';
const GREEN = '#15533e';
const LAST_STEP = 11; // one beat per second, then the loop restarts
const EASE = [0.22, 1, 0.36, 1] as const;

/** Entrance on page load: each card rises, scales up and fades in, one after another. */
function Enter({ delay, className, children }: { delay: number; className: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated product mockup for a hero media panel, on the page background colour: a care staff Medsheet
 * in the middle, a pharmacy-sync card, a barcode-inventory card and a dashed "next phase" AI
 * summary card around it. It loops through one shift: pharmacy data syncs and updates a dose,
 * the round's medications are ticked off as given, a medication is scanned out of stock, and
 * the AI summary that the data foundation is ready for appears. All data is sample data.
 *
 * The whole composition is drawn on a 52 x 44 unit canvas that scales to fit the panel
 * (1 unit = the smaller of 1/52 of the width and 1/44 of the height), so nothing is cropped.
 */
export function PatientAppMockup({ data }: { data: PatientAppMockupData }) {
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

  const syncing = step < 2;
  const synced = step >= 2;
  const givenAt = (i: number) => step >= 3 + i;
  const scanning = step === 5 || step === 6;
  const scanned = step >= 7;
  const aiShown = step >= 8;
  const rows = data.sheet.rows;

  const card = 'rounded-[1.2em] bg-white shadow-[0_1.6em_3.2em_-1.6em_rgba(0,54,64,0.35)] ring-1 ring-[#003640]/[0.08]';

  return (
    <div
      role="img"
      aria-label={data.alt}
      className="absolute inset-0 overflow-hidden bg-background"
      style={{ containerType: 'size' }}
    >
      {/* soft dot grid and glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgba(0,54,64,0.09) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[80cqh] w-[80cqh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dff1ec] opacity-70 blur-3xl" />

      {/* On desktop the panel starts under the fixed navbar, so the artwork keeps a little space at the top. */}
      <div className="absolute inset-x-0 bottom-0 top-0 lg:top-14" style={{ containerType: 'size' }}>
      {/* Canvas: 52 x 44 units, scaled to fit */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[44em] w-[52em] -translate-x-1/2 -translate-y-1/2"
        style={{ fontSize: 'min(calc(100cqw / 54), calc(100cqh / 46))' }}
      >
        {/* Medsheet */}
        <Enter delay={0.25} className="absolute left-[7em] top-[7.5em] w-[28.5em]">
        <motion.div
          className={`${card} p-[1.6em]`}
          animate={still ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-baseline justify-between">
            <span className="text-[1.6em] leading-none tracking-tight" style={{ color: TEAL }}>
              {data.sheet.title}
            </span>
            <span className="text-[0.85em] leading-none text-[#5d6b6e]">{data.sheet.date}</span>
          </div>

          <div className="mt-[1.2em] flex items-center gap-[0.8em] rounded-[0.9em] bg-[#f4f7f7] p-[0.8em]">
            <span className="flex h-[2.6em] w-[2.6em] shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: TEAL }}>
              <span className="text-[0.9em] leading-none text-white">{data.sheet.initials}</span>
            </span>
            <span className="min-w-0 flex-1 truncate text-[1em] leading-none text-[#111]">{data.sheet.resident}</span>
            <span className="shrink-0 rounded-full bg-[#fbe9e4] px-[0.7em] py-[0.4em] text-[0.75em] leading-none text-[#a33a24]">
              {data.sheet.allergy}
            </span>
          </div>

          <div className="mt-[1em] flex flex-col gap-[0.5em]">
            {rows.map((r, i) => {
              const given = givenAt(i);
              const updated = !!r.updatedTo && synced;
              return (
                <motion.div
                  key={r.name}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.09, ease: EASE }}
                  className="flex items-center gap-[0.8em] rounded-[0.9em] px-[0.8em] py-[0.75em] ring-1 ring-[#003640]/[0.08] transition-colors duration-500"
                  style={{
                    backgroundColor: updated && !given ? '#f3f6dc' : given ? 'rgba(21,83,62,0.06)' : '#ffffff',
                  }}
                >
                  <span className="w-[3.2em] shrink-0 text-[0.85em] leading-none tabular-nums text-[#5d6b6e]">{r.time}</span>
                  <span className="flex h-[2em] w-[2em] shrink-0 items-center justify-center rounded-full bg-[#e3f1ef]">
                    <Pill className="h-[1em] w-[1em]" style={{ color: TEAL }} strokeWidth={2} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[0.95em] leading-none text-[#111]">{r.name}</span>
                    <span className="mt-[0.35em] block truncate text-[0.75em] leading-none text-[#5d6b6e]">
                      {updated ? (
                        <>
                          <span className="line-through opacity-60">{r.dose}</span> {r.updatedTo} · {data.sheet.updatedNote}
                        </>
                      ) : (
                        r.dose
                      )}
                    </span>
                  </span>
                  <span
                    className="flex shrink-0 items-center gap-[0.35em] rounded-full px-[0.7em] py-[0.45em] text-[0.75em] leading-none transition-colors duration-300"
                    style={{ backgroundColor: given ? GREEN : '#eef2f2', color: given ? '#fff' : '#5d6b6e' }}
                  >
                    {given && <Check className="h-[1.1em] w-[1.1em]" strokeWidth={3} />}
                    {given ? `Given ${r.givenAt}` : 'Due'}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        </Enter>

        {/* Pharmacy sync */}
        <Enter delay={0.05} className="absolute left-[0.5em] top-[0.5em] w-[17em]">
        <motion.div
          className={`${card} p-[1.2em]`}
          animate={still ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-[0.7em]">
            <span className="flex h-[2.3em] w-[2.3em] items-center justify-center rounded-full" style={{ backgroundColor: synced ? GREEN : TEAL }}>
              {synced ? (
                <Check className="h-[1.1em] w-[1.1em] text-white" strokeWidth={3} />
              ) : (
                <motion.span className="flex" animate={still ? undefined : { rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                  <RefreshCw className="h-[1.1em] w-[1.1em] text-white" strokeWidth={2.2} />
                </motion.span>
              )}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.95em] leading-none text-[#111]">{data.sync.source}</span>
              <span className="mt-[0.35em] block truncate text-[0.75em] leading-none" style={{ color: synced ? GREEN : '#5d6b6e' }}>
                {synced ? data.sync.done : data.sync.running}
              </span>
            </span>
          </div>
          <span className="mt-[0.9em] block h-[0.35em] overflow-hidden rounded-full bg-[#e3ecea]">
            <span
              className="block h-full rounded-full ease-out"
              style={{
                backgroundColor: synced ? GREEN : TEAL,
                width: synced ? '100%' : step === 1 ? '70%' : '15%',
                transitionProperty: 'width',
                transitionDuration: syncing ? '900ms' : '300ms',
              }}
            />
          </span>
        </motion.div>
        </Enter>

        {/* Barcode inventory */}
        <Enter delay={0.45} className="absolute right-[0.5em] top-[15.5em] w-[15.5em]">
        <motion.div
          className={`${card} p-[1.2em]`}
          animate={still ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-[0.5em]">
            <ScanBarcode className="h-[1.2em] w-[1.2em]" style={{ color: TEAL }} strokeWidth={2} />
            <span className="text-[0.85em] leading-none text-[#5d6b6e]">Barcode inventory</span>
          </div>
          {/* barcode with a sweeping laser */}
          <div className="relative mt-[0.9em] flex h-[4.6em] items-stretch justify-center gap-[0.18em] overflow-hidden rounded-[0.6em] bg-[#f4f7f7] px-[1em] py-[0.8em]">
            {[3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 2, 2, 1, 3].map((w, i) => (
              <span key={i} className="rounded-[0.05em] bg-[#111]" style={{ width: `${w * 0.16}em` }} />
            ))}
            <motion.span
              className="absolute inset-x-[0.6em] h-[0.18em] rounded-full bg-[#e0533a] shadow-[0_0_0.8em_#e0533a]"
              initial={false}
              animate={scanning && !still ? { top: ['15%', '82%', '15%'], opacity: 1 } : { top: '48%', opacity: scanned ? 0 : 0.35 }}
              transition={scanning && !still ? { duration: 1, repeat: 1, ease: 'easeInOut' } : { duration: 0.3 }}
            />
          </div>
          <span className="mt-[0.8em] block truncate text-[0.9em] leading-none text-[#111]">{data.scan.item}</span>
          <div className="mt-[0.6em] flex items-baseline justify-between">
            <span className="flex items-baseline gap-[0.35em]">
              <motion.span
                key={scanned ? 'after' : 'before'}
                initial={still ? false : { opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[1.6em] leading-none tabular-nums tracking-tight"
                style={{ color: TEAL }}
              >
                {scanned ? data.scan.stock - 1 : data.scan.stock}
              </motion.span>
              <span className="text-[0.75em] leading-none text-[#5d6b6e]">in stock</span>
            </span>
            <span className="text-[0.72em] leading-none" style={{ color: scanned ? GREEN : '#8a989b' }}>
              {scanned ? data.scan.scannedLabel : data.scan.reorderAt}
            </span>
          </div>
        </motion.div>
        </Enter>

        {/* AI summary: dashed, because it is the planned next phase */}
        <motion.div
          className="absolute bottom-[0em] left-[1em] w-[21em] rounded-[1.2em] border-[0.12em] border-dashed border-[#003640]/35 bg-white/95 p-[1.2em]"
          initial={false}
          animate={{ opacity: aiShown ? 1 : 0, y: aiShown ? 0 : 10 }}
          transition={{ duration: still ? 0 : 0.5 }}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-[0.45em]">
              <Sparkles className="h-[1.1em] w-[1.1em]" style={{ color: TEAL }} strokeWidth={2} />
              <span className="text-[0.95em] leading-none" style={{ color: TEAL }}>
                {data.ai.label}
              </span>
            </span>
            <span className="rounded-full bg-[#eef2f2] px-[0.6em] py-[0.35em] text-[0.7em] leading-none text-[#5d6b6e]">{data.ai.tag}</span>
          </div>
          <div className="mt-[0.8em] flex flex-col gap-[0.45em]">
            {data.ai.lines.map((l, i) => (
              <motion.span
                key={l}
                className="block text-[0.82em] leading-[1.35] text-[#33474b]"
                initial={false}
                animate={{ opacity: aiShown ? 1 : 0 }}
                transition={{ duration: still ? 0 : 0.4, delay: still ? 0 : 0.35 + i * 0.45 }}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
