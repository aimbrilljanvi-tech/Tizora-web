'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Bluetooth, Check, ChevronLeft, Footprints, Heart } from 'lucide-react';

export interface HealthAppMockupData {
  /** Describes the whole mockup for screen readers (it is announced as one image). */
  alt: string;
  /** Screen title, e.g. "Oct 10". */
  date: string;
  /** Patient initials shown in the avatar. */
  initials: string;
  /** X-axis labels, one per data point. */
  days: string[];
  /** Chart lines. `points` are 0-1 (1 = top of the chart), one per day. */
  series: { label: string; value: string; color: string; points: number[] }[];
  statusTitle: string;
  /** Health status rows. The first row is the one the scale sync updates. */
  status: { label: string; value: string; when: string }[];
  /** What the first status row changes to when the scale syncs, and the toast text. */
  sync: { toast: string; value: string; when: string };
  button: string;
  devicesTitle: string;
  /** Connected devices shown as two tiles at the bottom of the screen. */
  devices: { name: string; state: string }[];
  /**
   * Connected scale to the left of the phone. Its display counts up to
   * `reading` during the weigh-in, just before the phone shows the sync. `states` are the four
   * short status labels shown above it, in order: ready, weighing, sending, synced.
   */
  scale?: { brandLogo: string; brandName: string; reading: number; unit: string; states: [string, string, string, string] };
  /**
   * Wristband to the right of the phone: live heart rate, a pulse trace and
   * a step count that climbs to `steps` through the loop. `label` is the status line under it.
   */
  band?: { heartRate: number; heartUnit: string; steps: number; stepsGoal: number; label: string };
}

const TEAL = '#003640';
const GREEN = '#15533e';
const LAST_STEP = 8; // one beat per second, then the loop restarts

/** Polyline through 0-1 points inside a w x h box. */
function linePath(points: number[], w: number, h: number, pad = 8): string {
  const stepX = (w - pad * 2) / Math.max(1, points.length - 1);
  return points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${(pad + i * stepX).toFixed(1)} ${(h - pad - p * (h - pad * 2)).toFixed(1)}`)
    .join(' ');
}

const pointAt = (points: number[], i: number, w: number, h: number, pad = 8) => ({
  x: pad + (i * (w - pad * 2)) / Math.max(1, points.length - 1),
  y: h - pad - points[i] * (h - pad * 2),
});

/**
 * Animated product mockup for a hero media panel: a phone showing a health dashboard, with a
 * branded Bluetooth scale on its left and a wristband on its right. It loops
 * through one story: the charts draw, the scale weighs and counts up to the reading, the reading
 * is sent, and the phone shows it as synced, while the wristband shows a live pulse and a
 * climbing step count. The two devices lift slightly on hover. All figures are sample data.
 *
 * Everything is sized from one unit (--u, set from the panel's own width and height through
 * container queries), so the mockup scales as a whole and all three devices fit at every width.
 * On narrow panels (phones) the scale and wristband are drawn smaller and their status chips
 * are hidden; on short panels the phone's lower part runs off the bottom edge and the two
 * devices move up to stay in view.
 */
export function HealthAppMockup({ data, bare = false }: { data: HealthAppMockupData; /** No background of its own (when the parent supplies one). */ bare?: boolean }) {
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true);
      setStep(LAST_STEP);
      return;
    }
    const id = setTimeout(() => {
      if (step < LAST_STEP) setStep(step + 1);
      else {
        setStep(0);
        setCycle((c) => c + 1);
      }
    }, 1000);
    return () => clearTimeout(id);
  }, [step]);

  const weighing = step === 1; // someone steps on: the scale dips and its display counts up
  const sending = step === 2;
  const synced = step >= 3;
  const toast = step >= 3 && step < 7;

  // Scale display: 0.0 at rest, counts up while weighing, then holds the reading.
  const target = data.scale?.reading ?? 0;
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (still || step >= 2) {
      setShown(target);
      return;
    }
    if (step === 0) {
      setShown(0);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 900);
      setShown(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [step, still, target]);
  const scaleState = data.scale?.states[synced ? 3 : sending ? 2 : weighing ? 1 : 0];

  // Wristband: heart rate wobbles by a beat or two; steps climb to the final count.
  const heartRate = (data.band?.heartRate ?? 0) + (still ? 0 : [0, 1, -1, 2, 0, 1, -1, 0, 1][step] ?? 0);
  const stepCount = (data.band?.steps ?? 0) - (still ? 0 : LAST_STEP - step);

  const draw = (delay: number) =>
    still
      ? { initial: false as const, animate: { pathLength: 1 }, transition: { duration: 0 } }
      : { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 1.5, delay, ease: 'easeInOut' as const } };

  const CW = 240;
  const CH = 110;
  const last = data.days.length - 1;

  return (
    <div
      role="img"
      aria-label={data.alt}
      className="@container absolute inset-0 overflow-hidden"
      style={{
        containerType: 'size',
        background: bare ? undefined : 'radial-gradient(120% 90% at 72% 8%, #0e5a69 0%, #003640 52%, #012a32 100%)',
      }}
    >
      {/* soft glow behind the phone */}
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[70cqh] w-[70cqh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7fd1c9]/10 blur-3xl" />

      {/* Stage: 1em = one layout unit (--u). The width term always leaves room for a device on each side of the
          phone; --d is the size of the two devices relative to the phone (smaller on narrow panels such as phones). */}
      <div
        aria-hidden
        className="absolute inset-0 [--d:0.6] [--u:min(2.05cqw,max(1.52cqh,8px))] @xl:[--d:1] @xl:[--u:min(1.55cqw,max(1.52cqh,9px))]"
        style={{ fontSize: 'var(--u)' }}
      >
        <motion.div
          className="absolute left-1/2 h-[54em] w-[26em]"
          style={{ top: 'max(6cqh, calc((100cqh - 54em) / 2))', x: '-50%' }}
          animate={still ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Connected scale, left of the phone and tucked slightly behind it */}
          {data.scale && (
            <motion.div
              className="absolute right-[calc(100%-2em)] -z-10 [--dt:30em] @xl:right-[calc(100%-4em)] @xl:[--dt:17.5em]"
              // Sits at --dt down the phone, but moves up on short panels so the whole scale stays in view.
              style={{ top: 'max(0em, min(var(--dt), calc(100cqh - max(6cqh, 50cqh - 27em) - 27.5em * var(--d))))' }}
              animate={still ? undefined : { y: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
            <div className="w-[21em]" style={{ fontSize: 'calc(1em * var(--d))' }}>
              {/* status chip (wide panels only: too small to read on phones) */}
              <div className="mb-[1.1em] hidden items-center gap-[0.55em] rounded-full bg-white/15 py-[0.5em] pl-[0.55em] pr-[1em] ring-1 ring-white/30 @xl:inline-flex">
                <span
                  className="flex h-[1.7em] w-[1.7em] items-center justify-center rounded-full transition-colors duration-300"
                  style={{ backgroundColor: synced ? '#9be7c4' : 'rgba(255,255,255,0.2)' }}
                >
                  {synced ? (
                    <Check className="h-[1em] w-[1em]" style={{ color: TEAL }} strokeWidth={3} />
                  ) : (
                    <Bluetooth className="h-[1em] w-[1em] text-white" strokeWidth={2.2} />
                  )}
                </span>
                <motion.span
                  key={scaleState}
                  initial={still ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="whitespace-nowrap text-[1em] leading-none text-white"
                >
                  {scaleState}
                </motion.span>
              </div>

              <motion.div
                className="relative h-[21em] w-[21em] cursor-pointer"
                style={{ rotate: -6 }}
                animate={{ scale: weighing ? 0.972 : 1 }}
                whileHover={{ scale: 1.04, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                {/* pulse ring as the reading is sent */}
                <motion.span
                  className="absolute -inset-[0.5em] rounded-[3.8em] border-[0.22em] border-[#9be7c4]"
                  initial={false}
                  animate={sending && !still ? { opacity: [0.9, 0], scale: [1, 1.09] } : { opacity: 0, scale: 1 }}
                  transition={sending && !still ? { duration: 0.9, repeat: Infinity } : { duration: 0.2 }}
                />
                <div
                  className="relative h-full w-full overflow-hidden rounded-[3.2em] shadow-[0_40px_70px_-28px_rgba(0,0,0,0.8)] ring-1 ring-white/70"
                  style={{ background: 'linear-gradient(155deg, #ffffff 0%, #eef3f3 42%, #cfdcdd 100%)' }}
                >
                  {/* glass reflections */}
                  <span className="absolute inset-0" style={{ background: 'linear-gradient(118deg, transparent 24%, rgba(255,255,255,0.75) 38%, transparent 52%)' }} />
                  <span className="absolute inset-x-0 bottom-0 h-[30%]" style={{ background: 'linear-gradient(0deg, rgba(0,54,64,0.08), transparent)' }} />

                  {/* display */}
                  <div className="absolute left-[2.6em] top-[2.8em] flex h-[5em] w-[12em] items-center justify-center gap-[0.45em] rounded-[1em] bg-[#0b1719] ring-1 ring-black/10">
                    <span className={`text-[3em] leading-none tabular-nums tracking-tight transition-colors duration-300 ${step >= 2 ? 'text-[#9be7c4]' : 'text-[#9be7c4]/70'}`}>
                      {shown.toFixed(1)}
                    </span>
                    <span className="mt-[1.1em] text-[1.1em] leading-none text-[#9be7c4]/80">{data.scale.unit}</span>
                  </div>

                  {/* reading travelling towards the phone */}
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="absolute top-[4.95em] h-[0.7em] w-[0.7em] rounded-full"
                      style={{ backgroundColor: GREEN }}
                      initial={false}
                      animate={sending && !still ? { left: ['15.2em', '20.5em'], opacity: [0, 1, 0] } : { left: '15.2em', opacity: 0 }}
                      transition={sending && !still ? { duration: 0.9, repeat: Infinity, delay: i * 0.3, ease: 'linear' } : { duration: 0.1 }}
                    />
                  ))}

                  {/* sensor mark */}
                  <span
                    className="absolute left-[7.4em] top-[10.6em] h-[2.6em] w-[2.6em] rounded-[0.7em] ring-1 ring-black/[0.06]"
                    style={{ background: 'linear-gradient(160deg, #d9e3e4 0%, #f6f9f9 60%, #c6d3d4 100%)' }}
                  />

                  {/* brand, low on the glass */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.scale.brandLogo}
                    alt={data.scale.brandName}
                    className="absolute bottom-[2.8em] left-[2.6em] h-[1.9em] w-auto"
                    style={{ borderRadius: 0 }}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
            </motion.div>
          )}

          {/* Wristband, right of the phone */}
          {data.band && (
            <motion.div
              className="absolute left-[calc(100%+1.2em)] [--dt:9em] @xl:left-[calc(100%+2.4em)] @xl:[--dt:7.5em]"
              style={{ top: 'max(0em, min(var(--dt), calc(100cqh - max(6cqh, 50cqh - 27em) - 30em * var(--d))))' }}
              animate={still ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
            <div className="w-[12.4em]" style={{ fontSize: 'calc(1em * var(--d))' }}>
              <motion.div
                className="relative h-[25em] w-full cursor-pointer"
                style={{ rotate: 7 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                {/* straps */}
                <span
                  className="absolute left-1/2 top-0 h-[8em] w-[8.2em] -translate-x-1/2 rounded-t-[3em]"
                  style={{ background: 'linear-gradient(180deg, #2a545b 0%, #0f2529 100%)' }}
                />
                <span
                  className="absolute bottom-0 left-1/2 h-[8em] w-[8.2em] -translate-x-1/2 rounded-b-[3em]"
                  style={{ background: 'linear-gradient(0deg, #2a545b 0%, #0f2529 100%)' }}
                >
                  {[1.3, 2.7, 4.1].map((b) => (
                    <span key={b} className="absolute left-1/2 h-[0.6em] w-[0.6em] -translate-x-1/2 rounded-full bg-[#06181b]" style={{ bottom: `${b}em` }} />
                  ))}
                </span>

                {/* body + screen */}
                <div className="absolute left-1/2 top-[5.6em] h-[13.8em] w-[11.2em] -translate-x-1/2 rounded-[3em] bg-[#0b1719] p-[0.65em] shadow-[0_30px_50px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/20">
                  <div
                    className="flex h-full w-full flex-col items-center justify-center rounded-[2.4em] px-[1em]"
                    style={{ background: 'radial-gradient(120% 90% at 50% 0%, #14393f 0%, #050d0f 72%)' }}
                  >
                    <span className="flex items-center gap-[0.5em]">
                      <motion.span
                        className="flex"
                        animate={still ? undefined : { scale: [1, 1.28, 1] }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Heart className="h-[1.7em] w-[1.7em]" fill="#e06a52" stroke="#e06a52" />
                      </motion.span>
                      <span className="flex items-baseline gap-[0.3em]">
                        <span className="text-[2.9em] leading-none tabular-nums tracking-tight text-white">{heartRate}</span>
                        <span className="text-[0.95em] leading-none text-white/70">{data.band.heartUnit}</span>
                      </span>
                    </span>

                    {/* pulse trace */}
                    <svg viewBox="0 0 100 24" className="mt-[0.7em] block h-[2em] w-full overflow-visible">
                      <motion.path
                        d="M0 12 H18 L22 6 L26 18 L30 2 L35 22 L39 12 H58 L62 7 L66 17 L70 12 H100"
                        fill="none"
                        stroke="#e06a52"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={still ? false : { pathLength: 0, opacity: 1 }}
                        animate={still ? { pathLength: 1 } : { pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
                        transition={still ? { duration: 0 } : { duration: 1.8, times: [0, 0.75, 1], repeat: Infinity, ease: 'linear' }}
                      />
                    </svg>

                    {/* steps */}
                    <span className="mt-[0.7em] flex items-center gap-[0.4em]">
                      <Footprints className="h-[1.1em] w-[1.1em] text-[#9be7c4]" strokeWidth={2} />
                      <span className="text-[1.15em] leading-none tabular-nums text-[#9be7c4]">{stepCount.toLocaleString('en-US')}</span>
                    </span>
                    <span className="mt-[0.55em] block h-[0.35em] w-full overflow-hidden rounded-full bg-white/15">
                      <span
                        className="block h-full rounded-full bg-[#9be7c4] transition-[width] duration-700"
                        style={{ width: `${Math.min(100, (stepCount / data.band.stepsGoal) * 100)}%` }}
                      />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* status chip (wide panels only) */}
              <div className="mt-[0.9em] hidden justify-center @xl:flex">
                <span className="inline-flex items-center gap-[0.5em] rounded-full bg-white/15 px-[0.9em] py-[0.5em] ring-1 ring-white/30">
                  <span className="relative flex h-[0.6em] w-[0.6em]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9be7c4] opacity-70" />
                    <span className="relative inline-flex h-[0.6em] w-[0.6em] rounded-full bg-[#9be7c4]" />
                  </span>
                  <span className="whitespace-nowrap text-[0.95em] leading-none text-white">{data.band.label}</span>
                </span>
              </div>
            </div>
            </motion.div>
          )}

          {/* Phone */}
          <div className="absolute inset-0 rounded-[3.6em] bg-[#0b1719] p-[0.7em] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
            <div className="relative h-full w-full overflow-hidden rounded-[3em] bg-white px-[1.4em] pt-[1.5em]">
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

              {/* sync toast */}
              <motion.div
                initial={false}
                animate={{ opacity: toast ? 1 : 0, y: toast ? 0 : -10 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-x-[1em] top-[3.4em] z-10 flex items-center gap-[0.6em] rounded-full px-[0.9em] py-[0.7em] shadow-[0_12px_24px_-12px_rgba(0,54,64,0.7)]"
                style={{ backgroundColor: GREEN }}
              >
                <span className="flex h-[1.6em] w-[1.6em] shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Bluetooth className="h-[1em] w-[1em] text-white" strokeWidth={2.2} />
                </span>
                <span className="truncate text-[0.9em] leading-none text-white">{data.sync.toast}</span>
              </motion.div>

              {/* title */}
              <div className="mt-[1.3em] flex items-center justify-between">
                <ChevronLeft className="h-[1.5em] w-[1.5em]" style={{ color: TEAL }} strokeWidth={2} />
                <span className="text-[1.75em] leading-none tracking-tight" style={{ color: TEAL }}>
                  {data.date}
                </span>
                <span className="flex h-[2.8em] w-[2.8em] items-center justify-center rounded-full bg-[#e3f1ef]">
                  <span className="text-[0.95em] leading-none" style={{ color: TEAL }}>
                    {data.initials}
                  </span>
                </span>
              </div>

              {/* chart */}
              <div className="mt-[1.1em] rounded-[1em] bg-[#f4f7f7] p-[0.9em]">
                <div className="flex justify-between px-[0.6em]">
                  {['D', 'W', 'M', 'Y'].map((t) => (
                    <span key={t} className="flex flex-col items-center gap-[0.3em]">
                      <span className="text-[0.85em] leading-none" style={{ color: t === 'W' ? TEAL : '#8a989b' }}>
                        {t}
                      </span>
                      <span className="h-[0.15em] w-[1.6em] rounded-full" style={{ backgroundColor: t === 'W' ? TEAL : 'transparent' }} />
                    </span>
                  ))}
                </div>
                <svg viewBox={`0 0 ${CW} ${CH}`} className="mt-[0.5em] block h-auto w-full overflow-visible">
                  {[0.2, 0.5, 0.8].map((g) => (
                    <line key={g} x1="0" x2={CW} y1={CH * g} y2={CH * g} stroke="#e1e8e8" strokeWidth="1" />
                  ))}
                  <line
                    x1={pointAt(data.series[0].points, last, CW, CH).x}
                    x2={pointAt(data.series[0].points, last, CW, CH).x}
                    y1="2"
                    y2={CH - 2}
                    stroke="#33474b"
                    strokeWidth="1"
                  />
                  {data.series.map((s, si) => (
                    <g key={s.label}>
                      <motion.path
                        key={`${s.label}-${cycle}`}
                        d={linePath(s.points, CW, CH)}
                        fill="none"
                        stroke={s.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        {...draw(si * 0.25)}
                      />
                      {s.points.map((_, i) => {
                        const p = pointAt(s.points, i, CW, CH);
                        return <circle key={i} cx={p.x} cy={p.y} r="2.6" fill={s.color} />;
                      })}
                    </g>
                  ))}
                </svg>
                <div className="mt-[0.4em] flex justify-between">
                  {data.days.map((d) => (
                    <span key={d} className="text-[0.7em] leading-none text-[#5d6b6e]">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* legend */}
              <div className="mt-[0.9em] flex flex-col gap-[0.65em]">
                {data.series.map((s) => (
                  <div key={s.label} className="flex items-center gap-[0.6em]">
                    <span className="h-[0.55em] w-[0.55em] shrink-0 rounded-full" style={{ backgroundColor: s.color }} />
                    <span className="flex-1 truncate text-[0.85em] leading-none text-[#33474b]">{s.label}</span>
                    <span className="text-[0.85em] leading-none tabular-nums" style={{ color: s.color }}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* health status */}
              <span className="mt-[1.1em] block text-[1.3em] leading-none tracking-tight" style={{ color: TEAL }}>
                {data.statusTitle}
              </span>
              <div className="mt-[0.7em] flex flex-col gap-[0.35em]">
                {data.status.map((row, i) => {
                  const live = i === 0 && synced;
                  return (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-[0.7em] px-[0.8em] py-[0.6em] transition-colors duration-500"
                      style={{ backgroundColor: live ? 'rgba(21,83,62,0.1)' : '#f4f7f7' }}
                    >
                      <div>
                        <span className="block text-[0.78em] leading-none text-[#c2553d]">{row.label}</span>
                        <span className="mt-[0.3em] block text-[1.1em] leading-none tabular-nums text-[#111]">
                          {live ? data.sync.value : row.value}
                        </span>
                      </div>
                      <span className="text-[0.75em] leading-none" style={{ color: live ? GREEN : '#8a989b' }}>
                        {live ? data.sync.when : row.when}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-[0.9em] flex h-[3em] items-center justify-center rounded-[0.7em]" style={{ backgroundColor: TEAL }}>
                <span className="text-[0.9em] leading-none text-white">{data.button}</span>
              </div>

              {/* connected devices: the last thing on the screen, so it may run off the bottom of the phone */}
              <span className="mt-[1.1em] block text-[1.3em] leading-none tracking-tight" style={{ color: TEAL }}>
                {data.devicesTitle}
              </span>
              <div className="mt-[0.7em] grid grid-cols-2 gap-[0.6em]">
                {data.devices.map((dev) => (
                  <div key={dev.name} className="flex items-center gap-[0.55em] rounded-[0.7em] bg-[#f4f7f7] px-[0.7em] py-[0.7em]">
                    <span className="flex h-[1.9em] w-[1.9em] shrink-0 items-center justify-center rounded-full bg-[#e3f1ef]">
                      <Bluetooth className="h-[1em] w-[1em]" style={{ color: TEAL }} strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <span className="block truncate text-[0.8em] leading-none text-[#111]">{dev.name}</span>
                      <span className="mt-[0.35em] block text-[0.7em] leading-none" style={{ color: GREEN }}>
                        {dev.state}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
