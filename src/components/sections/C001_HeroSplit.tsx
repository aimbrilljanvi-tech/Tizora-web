'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import { SplitTextReveal } from '../ui/SplitTextReveal';
import { Breadcrumb, type BreadcrumbItem } from '../common/Breadcrumb';
import { cloudinaryOptimized } from '@/lib/cloudinary';
import { HealthAppMockup, type HealthAppMockupData } from '../common/HealthAppMockup';
import { BankingAppMockup, type BankingAppMockupData } from '../common/BankingAppMockup';
import { PatientAppMockup, type PatientAppMockupData } from '../common/PatientAppMockup';
import { WarehouseAppMockup, type WarehouseAppMockupData } from '../common/WarehouseAppMockup';

interface HeroSplitProps {
  /** Optional "Home › Case Studies › Industry › Page" trail, shown above the label. */
  breadcrumb?: BreadcrumbItem[];
  /** @deprecated The hero label line was removed; accepted but ignored. */
  label?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: () => void;
  buttonHref?: string;
  /** @deprecated The byline (author, dates, reading time) was removed from every page; these props are accepted but ignored. */
  author?: { name: string; role?: string };
  /** @deprecated See `author`. */
  readTime?: string;
  /** Opt-in: overlays a friendly face-verification animation (frame, scan band, tick-off chips) on a portrait. */
  faceScan?: FaceScanBox;
  /** Opt-in: overlays an AI skin-scan animation (grid + labelled reticles) on a portrait. Takes priority over `faceScan`. */
  skinScan?: SkinScanBox;
  /** @deprecated See `author`. */
  published?: string;
  /** @deprecated See `author`. */
  modified?: string;
  /** Opt-in: replaces the hero image with an animated health-app mockup (phone plus side cards). */
  healthApp?: HealthAppMockupData;
  /** Opt-in: replaces the hero image with an animated banking-app artwork (tilted phone, ribbon, captions). */
  bankingApp?: BankingAppMockupData;
  /** Opt-in: replaces the hero image with an animated patient-management artwork on white. */
  patientApp?: PatientAppMockupData;
  /** Opt-in: replaces the hero image with an animated order-to-robot warehouse artwork. */
  warehouseApp?: WarehouseAppMockupData;
  /** Opt-in: compact animated status readout in the bottom-left corner of the hero image. */
  statusPanel?: StatusPanelData;
  /** Optional second, outlined button shown next to the primary one. */
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imageSrc: string;
  imageAlt?: string;
  /** Which side of the image stays in view when it is cropped to fit (default: centre). */
  imagePosition?: 'left' | 'center' | 'right';
  badgeSrc?: string;
  badgeAlt?: string;
  /** Opt-in word-by-word reveal on the title, instead of the default fade+rise. */
  animatedTitle?: boolean;
  /** Opt-in word-by-word reveal on the description. */
  animatedDescription?: boolean;
  /** Opt-in smaller title size for copy that wraps to 3+ lines at the default size. */
  compactTitle?: boolean;
}

export interface FaceScanBox {
  /** Face frame as percentages (0-100) of the image: [left, top, width, height]. */
  box: [number, number, number, number];
  /** White step labels written on decorative shapes in the image: [left, top, width, height] in %. They tick on at `doneAt`. */
  labels?: { text: string; at: [number, number, number, number]; tint?: boolean; doneAt?: number }[];
  /** White tick marks that pop onto decorative circles once every label is done: centre [x, y] and diameter, in % of the image width. */
  ticks?: { at: [number, number]; size: number }[];
}

export interface StatusPanelData {
  /** Small top line, e.g. "Stand C28 · Target 14:35". */
  title: string;
  /** Steps that complete one after another; the current one is shown large. */
  steps: string[];
  /** Large text once every step is complete, e.g. "Ready for pushback". */
  doneText: string;
  /** Status line for the normal loop, e.g. "On time". */
  okText: string;
  /**
   * Optional second loop that alternates with the first: one step (0-based `step`) overruns,
   * turns to the warning colour, and `alertText` replaces the status line from then on.
   */
  delayed?: { title?: string; step: number; alertText: string; doneText?: string };
}

/**
 * Compact status readout drawn straight on the hero image, in open sky: bottom-left on desktop,
 * top-left on tablets where the picture sits under the title and the aircraft fills the bottom (no
 * background): a small heading, the current step in large type, one segment per step that
 * fills as the work progresses, and a one-line status. Loops, and can alternate with a
 * "delayed" run. Illustrative only, so it is hidden from assistive technology and below tablet width.
 */
function StatusPanel({ panel }: { panel: StatusPanelData }) {
  const total = panel.steps.length;
  const [tick, setTick] = useState(0);
  const [round, setRound] = useState(0);
  const hasDelayed = !!panel.delayed;
  const late = hasDelayed && round % 2 === 1 ? panel.delayed! : null;
  // The delayed run lasts two beats longer, because one step overruns.
  const extra = late ? 2 : 0;
  const lastTick = total + extra + 2;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (tick !== total) setTick(total);
      return;
    }
    const id = setTimeout(() => {
      if (tick < lastTick) setTick(tick + 1);
      else {
        setTick(0);
        if (hasDelayed) setRound((r) => r + 1);
      }
    }, 1200);
    return () => clearTimeout(id);
  }, [tick, lastTick, total, hasDelayed]);

  const TEAL = '#003640';
  // Deep red: readable on the light blue sky and on the white fuselage.
  const WARN = '#a32117';

  /** 'done' | 'active' | 'todo' for step i at the current beat. */
  const stateOf = (i: number) => {
    const overrun = !!late && i === late.step;
    const shift = late && i > late.step ? 2 : 0;
    if (tick > i + shift + (overrun ? 2 : 0)) return 'done';
    return tick >= i + shift ? 'active' : 'todo';
  };

  const activeIdx = panel.steps.findIndex((_, i) => stateOf(i) === 'active');
  const finished = activeIdx === -1;
  const headline = finished ? late?.doneText ?? panel.doneText : panel.steps[activeIdx];
  // The warning shows from the second beat of the late step, i.e. as soon as it starts slipping.
  const warned = !!late && tick > late.step;
  const status = warned ? late!.alertText : panel.okText;

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute left-6 top-6 hidden w-[160px] md:block lg:bottom-8 lg:left-8 lg:top-auto lg:w-[220px]"
    >
      <span className="block text-[12px] leading-none tabular-nums" style={{ color: TEAL, opacity: 0.8 }}>
        {late?.title ?? panel.title}
      </span>

      {/* Current step, large. Re-keyed so each change fades in. */}
      <motion.span
        key={`${round}-${headline}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-2 block text-[17px] leading-[1.15] tracking-tight lg:text-[22px]"
        style={{ color: TEAL }}
      >
        {headline}
      </motion.span>

      {/* One segment per step */}
      <span className="mt-3 flex gap-1">
        {panel.steps.map((step, i) => {
          const state = stateOf(i);
          const overrun = !!late && i === late.step;
          return (
            <span key={step} className="h-[5px] flex-1 overflow-hidden rounded-full" style={{ backgroundColor: 'rgba(0,54,64,0.18)' }}>
              <span
                className="block h-full rounded-full ease-linear"
                style={{
                  backgroundColor: overrun && warned ? WARN : TEAL,
                  width: state === 'done' ? '100%' : state === 'active' ? (overrun ? '85%' : '70%') : '0%',
                  transitionProperty: 'width, background-color',
                  transitionDuration: state === 'todo' ? '0ms' : overrun && state === 'active' ? '3200ms' : '1100ms',
                }}
              />
            </span>
          );
        })}
      </span>

      <span className="mt-3 flex items-center gap-2 text-[12.5px] leading-none transition-colors duration-300" style={{ color: warned ? WARN : TEAL }}>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ backgroundColor: warned ? WARN : '#15533e' }} />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: warned ? WARN : '#15533e' }} />
        </span>
        {status}
      </span>
    </motion.div>
  );
}

const FACE_LAST_TICK = 4; // 1 liveness, 2 face match, 3-4 verified, then hold and loop

/**
 * Portrait shown "cover" style with a friendly face-verification overlay: brackets around
 * the face, a soft scan band, and chips that tick off (liveness, face match, verified).
 * The overlay lives in an inner box that keeps the photo's aspect ratio, so it stays on
 * the face at every screen size.
 */
function FaceScanMedia({ src, alt, face }: { src: string; alt: string; face: FaceScanBox }) {
  const [tick, setTick] = useState(0);
  const [l, t, w, h] = face.box;
  const labels = face.labels ?? [];
  const ticks = face.ticks ?? [];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTick(FACE_LAST_TICK);
      return;
    }
    const id = setInterval(() => setTick((v) => (v >= FACE_LAST_TICK + 3 ? 0 : v + 1)), 900);
    return () => clearInterval(id);
  }, []);

  const verified = tick >= FACE_LAST_TICK;
  const corner = 'absolute h-5 w-5 border-white transition-all duration-500';

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ containerType: 'size' }}>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: 'max(100cqw, 100cqh)', aspectRatio: '1 / 1' }}
      >
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          src={cloudinaryOptimized(src)}
          alt={alt}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* face frame */}
          <div
            className="absolute"
            style={{ left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%`, filter: 'drop-shadow(0 0 2px rgba(0,30,40,0.5))' }}
          >
            <span className={`${corner} left-0 top-0 rounded-tl-xl border-l-2 border-t-2 ${verified ? 'scale-105' : ''}`} />
            <span className={`${corner} right-0 top-0 rounded-tr-xl border-r-2 border-t-2 ${verified ? 'scale-105' : ''}`} />
            <span className={`${corner} bottom-0 left-0 rounded-bl-xl border-b-2 border-l-2 ${verified ? 'scale-105' : ''}`} />
            <span className={`${corner} bottom-0 right-0 rounded-br-xl border-b-2 border-r-2 ${verified ? 'scale-105' : ''}`} />
            {!verified && (
              <span className="face-sweep absolute inset-x-[6%] h-[16%] rounded-full bg-gradient-to-b from-transparent via-white/55 to-transparent" />
            )}
          </div>
        </div>

        {/* white ticks on the decorative circles once everything is verified */}
        {ticks.map((tk, i) => (
          <span
            key={i}
            aria-hidden
            className={`pointer-events-none absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-500 ease-out ${verified ? 'scale-100 opacity-100' : 'scale-50 opacity-0'} ${tk.at[1] + tk.size / 2 > 62 ? 'hs-label-low' : ''}`}
            style={{ left: `${tk.at[0]}%`, top: `${tk.at[1]}%`, width: `${tk.size}%`, aspectRatio: '1 / 1', filter: 'drop-shadow(0 1px 3px rgba(0,30,40,0.55))' }}
          >
            <Check className="h-[58%] w-[58%] text-white" strokeWidth={3.2} />
          </span>
        ))}

        {/* white captions written on the image's decorative pills */}
        {labels.map((lab) => {
          const done = tick >= (lab.doneAt ?? 0);
          return (
            <span
              key={lab.text}
              aria-hidden
              className={`pointer-events-none absolute flex items-center justify-center gap-[0.45em] overflow-hidden whitespace-nowrap rounded-full px-[0.6em] text-white transition-opacity duration-500 ${done ? 'opacity-100' : 'opacity-45'} ${lab.at[1] + lab.at[3] > 62 ? 'hs-label-low' : ''}`}
              style={{
                left: `${lab.at[0]}%`,
                top: `${lab.at[1]}%`,
                width: `${lab.at[2]}%`,
                height: `${lab.at[3]}%`,
                fontSize: 'clamp(8px, 1.9cqw, 15px)',
                textShadow: '0 1px 8px rgba(0,30,40,0.55)',
                backgroundColor: lab.tint ? 'rgba(0,54,64,0.4)' : undefined,
              }}
            >
              <Check className={`hs-label-check h-[1.05em] w-[1.05em] shrink-0 transition-opacity duration-500 ${done ? 'opacity-100' : 'opacity-0'}`} strokeWidth={3} />
              <span className="truncate">{lab.text}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export interface SkinScanPoint {
  /** Reticle position on the face, as percentages [x, y] of the image. */
  at: [number, number];
  /** Anchor of the label text (its edge nearest the leader line), as percentages [x, y]. */
  labelAt: [number, number];
  /** Which side of `labelAt` the label text extends toward. Defaults to 'right'. */
  align?: 'left' | 'right';
  label: string;
  /** Optional matched product, shown as a small chip under the label once it appears. */
  product?: { name: string; image: string };
}

export interface SkinScanBox {
  /** Grid overlay area on the face, as percentages [left, top, width, height]. */
  gridBox: [number, number, number, number];
  /**
   * One or more sets of points. With more than one set, each full loop of the animation shows
   * a different set (different spots, concerns and products) instead of repeating the same one.
   */
  pointSets: SkinScanPoint[][];
}

const SKIN_SCAN_MS = 2800; // how long the "scanning the whole face" sweep runs before a spot is called out
const SKIN_SCAN_HOLD_MS = 3200; // how long everything stays fully revealed before it fades out and loops

/**
 * Portrait shown "cover" style with an AI skin-scan overlay: the grid sweeps across the whole
 * face first, then labelled reticles (with leader lines and a matched, "Recommended" product)
 * call out individual spots one at a time, hold, and loop -- cycling to the next point set (if
 * more than one is given) on each replay. Built for a skin-analysis case study, but works with
 * any square portrait and coordinates.
 */
function SkinScanMedia({ src, alt, scan }: { src: string; alt: string; scan: SkinScanBox }) {
  const [gl, gt, gw, gh] = scan.gridBox;
  const [step, setStep] = useState(0);
  const [setIndex, setSetIndex] = useState(0);
  const points = scan.pointSets[setIndex % scan.pointSets.length];
  const lastStep = 2 + points.length; // 1: grid appears, 2: whole-face scan, 3..: each point

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(lastStep);
      return;
    }
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    // Per step: the grid appears, then it scans the whole face for a beat before any spot is
    // called out. Each point then gets its own beat to reveal (reticle, then line, label and
    // product cascade in via their own transition-delay). Everything holds fully visible for a
    // while, then fades out, pauses, and the next point set takes over on the following loop.
    const waitFor = (s: number) => {
      if (s === 0) return 750; // brief pause after reset before the grid reappears
      if (s === 1) return 700; // grid fades in
      if (s === 2) return SKIN_SCAN_MS; // scans the whole face before spotting anything
      if (s < lastStep) return 1300; // time for one point's reticle -> line -> label -> product cascade
      return SKIN_SCAN_HOLD_MS; // every point revealed; hold before fading out and looping
    };
    const tick = (s: number) => {
      timer = setTimeout(() => {
        if (cancelled) return;
        const next = s >= lastStep ? 0 : s + 1;
        if (next === 0) setSetIndex((v) => v + 1);
        setStep(next);
        tick(next);
      }, waitFor(s));
    };
    tick(0);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lastStep]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ containerType: 'size' }}>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: 'max(100cqw, 100cqh)', aspectRatio: '1 / 1' }}
      >
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          src={cloudinaryOptimized(src)}
          alt={alt}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* scan grid over the face, fades in first */}
          <div
            className={`absolute transition-opacity duration-700 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${gl}%`,
              top: `${gt}%`,
              width: `${gw}%`,
              height: `${gh}%`,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '12.5% 12.5%',
              backgroundPosition: '6.25% 6.25%',
              // Fades the top edge to fully transparent so the grid has no hard top line, and softens
              // the other edges with a radial vignette (both masks apply together via intersect).
              maskImage:
                'linear-gradient(to bottom, transparent 0%, black 18%, black 100%), radial-gradient(ellipse at center, black 55%, transparent 90%)',
              maskComposite: 'intersect',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, black 18%, black 100%), radial-gradient(ellipse at center, black 55%, transparent 90%)',
              WebkitMaskComposite: 'source-in',
            }}
          />

          {/* whole-face grid scan: the grid itself lights up top-to-bottom, with a thin line marking the
              current scan position -- reads as the grid being actively scanned, not a band wiping over it */}
          {step === 2 && (
            <div className="absolute overflow-hidden" style={{ left: `${gl}%`, top: `${gt}%`, width: `${gw}%`, height: `${gh}%` }}>
              <div
                className="skin-scan-reveal absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.95) 1px, transparent 1px)',
                  backgroundSize: '12.5% 12.5%',
                  backgroundPosition: '6.25% 6.25%',
                  animationDuration: `${SKIN_SCAN_MS}ms`,
                }}
              />
              <div
                className="skin-scan-line absolute inset-x-0 h-[2px]"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.95) 15%, rgba(255,255,255,0.95) 85%, transparent)',
                  boxShadow: '0 0 10px 2px rgba(255,255,255,0.75)',
                  animationDuration: `${SKIN_SCAN_MS}ms`,
                }}
              />
            </div>
          )}

          {points.map((pt, i) => {
            const shown = step >= i + 3;
            const [x1, y1] = pt.at;
            const [x2, y2] = pt.labelAt;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
            const align = pt.align ?? 'right';
            return (
              <span key={pt.label}>
                {/* leader line, straight from the reticle to the label -- draws in just after the reticle pops */}
                <span
                  className={`absolute h-px bg-white/70 transition-opacity duration-300 ${shown ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    left: `${x1}%`,
                    top: `${y1}%`,
                    width: `${length}%`,
                    transformOrigin: '0% 50%',
                    transform: `rotate(${angle}deg)`,
                    filter: 'drop-shadow(0 0 2px rgba(0,30,40,0.5))',
                    transitionDelay: shown ? '110ms' : '0ms',
                  }}
                />
                {/* reticle: a small bracket with a centred crosshair -- the first thing to appear */}
                <span
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-[350ms] ease-out ${shown ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                  style={{ left: `${x1}%`, top: `${y1}%`, width: 'clamp(16px, 4.2cqw, 28px)', aspectRatio: '1 / 1' }}
                >
                  <span className="absolute inset-0 rounded-[3px] border border-white/90" style={{ filter: 'drop-shadow(0 1px 4px rgba(0,30,40,0.6))' }} />
                  <span className="absolute left-1/2 top-1/2 h-[55%] w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-white/90" />
                  <span className="absolute left-1/2 top-1/2 h-[1.5px] w-[55%] -translate-x-1/2 -translate-y-1/2 bg-white/90" />
                </span>
                {/* label -- follows the line */}
                <span
                  className={`absolute whitespace-nowrap font-semibold uppercase tracking-wide text-white transition-opacity duration-[350ms] ${shown ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    left: `${x2}%`,
                    top: `${y2}%`,
                    fontSize: 'clamp(11px, 2.2cqw, 17px)',
                    textShadow: '0 1px 8px rgba(0,30,40,0.65)',
                    transform: align === 'left' ? 'translate(-100%, -50%)' : 'translateY(-50%)',
                    transitionDelay: shown ? '270ms' : '0ms',
                  }}
                >
                  {pt.label}
                </span>
                {/* matched product: a small white card with a "Recommended" label, the last beat of this point's reveal */}
                {pt.product && (
                  <span
                    className={`absolute flex flex-col items-start gap-1 rounded-[8px] bg-white shadow-[0_4px_12px_rgba(0,30,40,0.35)] transition-opacity duration-[350ms] ${shown ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      left: `${x2}%`,
                      top: `${y2}%`,
                      marginTop: 'clamp(20px, 5cqw, 32px)',
                      padding: 'clamp(6px, 1.6cqw, 12px) clamp(9px, 2cqw, 16px)',
                      transitionDelay: shown ? '460ms' : '0ms',
                      transform: align === 'left' ? 'translateX(-100%)' : undefined,
                    }}
                  >
                    <span
                      className="whitespace-nowrap font-semibold uppercase tracking-wide text-accent"
                      style={{ fontSize: 'clamp(8px, 1.7cqw, 12px)' }}
                    >
                      Recommended
                    </span>
                    <span className="flex items-center gap-2">
                      <span
                        className="relative shrink-0 overflow-hidden rounded-[6px] bg-black/5"
                        style={{ width: 'clamp(30px, 7.5cqw, 52px)', height: 'clamp(30px, 7.5cqw, 52px)' }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element -- tiny decorative thumbnail inside an absolutely positioned overlay, not a content image */}
                        <img src={pt.product.image} alt="" className="h-full w-full object-cover" />
                      </span>
                      <span className="whitespace-nowrap font-semibold text-[#003640]" style={{ fontSize: 'clamp(12px, 2.6cqw, 17px)' }}>
                        {pt.product.name}
                      </span>
                    </span>
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function HeroSplit({
  breadcrumb,
  title,
  description,
  buttonText,
  buttonAction,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  faceScan,
  skinScan,
  healthApp,
  bankingApp,
  patientApp,
  warehouseApp,
  statusPanel,
  imageSrc,
  imagePosition = 'center',
  imageAlt = "Hero image",
  badgeSrc,
  badgeAlt = "Badge",
  animatedTitle = false,
  animatedDescription = false,
  compactTitle = false
}: HeroSplitProps) {
  // Very long titles (90+ characters) step down a size until wide screens, so they never outgrow the hero.
  const titleSizeClass = compactTitle
    ? title.length > 90
      ? 'text-[28px] sm:text-[34px] lg:text-[34px] xl:text-[38px] 2xl:text-[42px]'
      : 'text-[30px] sm:text-[36px] lg:text-[42px]'
    : 'text-[40px] sm:text-[48px] lg:text-[56px]';
  return (
    <section 
      data-component-id="C001" 
      data-component-name="HeroSplit"
      className="w-full lg:min-h-screen flex flex-col lg:flex-row pt-18 bg-background"
    >
      {/* Left Column - Content */}
      {/* On phones the two column wrappers use `display: contents` so the title block, the media and the body copy line up in one column: title, then image, then the rest. */}
      {/* lg:pt-12 keeps the breadcrumb and title clear of the fixed navbar when the content is tall. */}
      <div className="contents lg:flex lg:w-1/2 lg:flex-1 lg:items-center lg:min-h-[50vh] lg:pt-12 lg:pb-12">
        <div className="contents lg:block w-full max-w-180 mx-auto lg:ml-auto lg:mr-0 lg:px-12 xl:px-24">
          <div className="order-1 px-5 pt-24 sm:px-8 sm:pt-28 lg:order-none lg:p-0">
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <Breadcrumb items={breadcrumb} className="mb-10 sm:mb-14" />
          )}
          
          {/* Title */}
          {animatedTitle ? (
            <h1 className={`${titleSizeClass} leading-[1.12] tracking-[-0.02em] font-normal text-primary mb-8 text-balance`}>
              <SplitTextReveal text={title} trigger="mount" delay={0.1} />
            </h1>
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`${titleSizeClass} leading-[1.12] tracking-[-0.02em] font-normal text-primary mb-8 text-balance`}
            >
              {/* Split title by newline if provided, else just render */}
              {title.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </motion.h1>
          )}
          
          </div>

          <div className="order-3 px-5 pb-12 pt-8 sm:px-8 lg:order-none lg:p-0">
          {/* Description */}
          {animatedDescription ? (
            <p className="text-[16px] sm:text-[18px] text-muted leading-[1.65] max-w-[34rem] mb-10 text-pretty">
              <SplitTextReveal text={description} trigger="mount" delay={0.9} wordDelay={0.015} />
            </p>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16px] sm:text-[18px] text-muted leading-[1.65] max-w-[34rem] mb-10 text-pretty"
            >
              {description}
            </motion.p>
          )}
          
          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-auto sm:mt-0 flex flex-wrap items-center gap-3 xl:gap-4"
          >
            {buttonHref ? (
              <Link
                href={buttonHref}
                className="btn-primary group whitespace-nowrap lg:px-5 2xl:px-7"
              >
                {buttonText}
                <ArrowUpRight className="w-4 h-4 text-surface/70 group-hover:text-surface transition-colors" />
              </Link>
            ) : (
              <button 
                onClick={buttonAction}
                className="btn-primary group whitespace-nowrap lg:px-5 2xl:px-7"
              >
                {buttonText}
                <ArrowUpRight className="w-4 h-4 text-surface/70 group-hover:text-surface transition-colors" />
              </button>
            )}
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-primary/25 px-7 py-3.5 text-[14px] font-medium text-primary transition-all hover:bg-white hover:scale-[1.02] lg:px-5 2xl:px-7"
              >
                {secondaryButtonText}
                <ArrowUpRight className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
              </Link>
            )}
            {badgeSrc && (
              <div className="h-10 sm:h-12 w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element -- intrinsic width (w-auto) depends on each badge's own aspect ratio; next/image would need fixed dimensions and could distort non-square logos. */}
                <img
                  src={badgeSrc}
                  alt={badgeAlt}
                  className="h-full w-auto object-contain"
                />
              </div>
            )}
          </motion.div>

          </div>
        </div>
      </div>

      {/* Right Column - Image or Video or Iframe */}
      {/* No fixed height: the column stretches to the hero, which grows with the text when it needs to. */}
      <div className="order-2 w-full lg:order-none lg:w-1/2 flex-1 lg:self-stretch relative min-h-[50vh] lg:min-h-100">
        {warehouseApp || patientApp || bankingApp || healthApp ? (
          // Animated mockups are sized to what is on screen (the hero or the window, whichever is
          // shorter), so every card shows on load even when long text makes the hero taller.
          <div className="absolute inset-x-0 top-0 h-full lg:h-[min(100%,calc(100svh-4.5rem))]">
            {warehouseApp ? (
              <WarehouseAppMockup data={warehouseApp} />
            ) : patientApp ? (
              <PatientAppMockup data={patientApp} />
            ) : bankingApp ? (
              <BankingAppMockup data={bankingApp} />
            ) : (
              <HealthAppMockup data={healthApp!} />
            )}
          </div>
        ) : skinScan && imageSrc ? (
          <SkinScanMedia src={imageSrc} alt={imageAlt} scan={skinScan} />
        ) : faceScan && imageSrc ? (
          <FaceScanMedia src={imageSrc} alt={imageAlt} face={faceScan} />
        ) : imageSrc?.includes('embed.html') ? (
          <iframe 
            src={imageSrc}
            className="absolute inset-0 w-full h-full border-0 rounded-none!"
            style={{ borderRadius: 0 }}
            scrolling="no"
            frameBorder="0"
          />
        ) : imageSrc?.includes('.mp4') || imageSrc?.includes('/video') ? (
          <motion.video 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            src={imageSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-none!"
            style={{ borderRadius: 0 }}
          />
        ) : (
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            src={cloudinaryOptimized(imageSrc)}
            alt={imageAlt}
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover rounded-none!"
            style={{ borderRadius: 0, objectPosition: imagePosition }}
          />
        )}
        {statusPanel && <StatusPanel panel={statusPanel} />}
      </div>
    </section>
  );
}