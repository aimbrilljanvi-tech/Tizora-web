"use client";

import Link from "next/link";
import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Download,
  FileImage,
  Gauge,
  ImagePlus,
  Loader2,
  RefreshCw,
  ScanLine,
  ScanSearch,
  ShieldAlert,
  Sun,
  Upload,
} from "lucide-react";
import { ContentImage as Image } from "@/components/common/ContentImage";
import { LPR_FAQS, LPR_USE_CASES } from "@/data/pages/products/lprData";
import { MainLayout } from "@/components/layout/MainLayout";
import { SECTION_LABEL } from "@/components/ui/labelStyles";

type Plate = {
  text: string;
  confidence: number;
  detection_confidence: number;
  box: { x1: number; y1: number; x2: number; y2: number };
  crop_image?: string;
};

type RecognitionResponse = {
  ok: boolean;
  plates: Plate[];
  count: number;
  latency_ms: number;
  filename: string;
  annotated_image?: string;
};

const MAX_FILE_SIZE = 15 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
// Served straight from Cloudinary (f_auto/q_auto, capped at 1600px) rather than re-optimised by
// Next, which added a second fetch + re-encode before the largest image on the page could paint.
const HERO_IMAGE =
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_1600/v1790231425/ChatGPT_Image_Sep_24_2026_11_59_32_AM.png";
const GITHUB_URL =
  "https://github.com/Tizora-ai/license-plate-recognition-api-parking";

const STEPS = [
  {
    icon: Upload,
    title: "Upload a photo",
    text: "Drop, browse, paste or snap a picture of any vehicle.",
  },
  {
    icon: ScanSearch,
    title: "AI finds the plate",
    text: "A detection model locates every plate in the frame.",
  },
  {
    icon: CheckCircle2,
    title: "Read the result",
    text: "Get plate text, confidence and an annotated image.",
  },
];

const TIPS = [
  {
    icon: Sun,
    title: "Good lighting",
    text: "Avoid heavy glare or very dark scenes.",
  },
  {
    icon: ScanLine,
    title: "Plate in view",
    text: "The full plate should be visible and in focus.",
  },
  {
    icon: Gauge,
    title: "Reasonable size",
    text: "The plate should span at least ~100 px wide.",
  },
];


function formatConfidence(value: number | undefined | null) {
  if (value == null || Number.isNaN(value)) return "0%";
  const pct = value <= 1 ? value * 100 : value;
  return `${Math.round(pct)}%`;
}

function confidenceTone(value: number | undefined | null) {
  const pct = value == null ? 0 : value <= 1 ? value * 100 : value;
  if (pct >= 85) return "bg-[#c8d269] text-[#003640]";
  if (pct >= 60) return "bg-amber-200 text-amber-900";
  return "bg-red-100 text-red-800";
}

function formatSize(bytes: number) {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

const MAX_UPLOAD_WIDTH = 1600;
const SKIP_RESIZE_BELOW = 600 * 1024;

// Phone/camera photos are often 5-15 MB. Downscaling before upload cuts the
// upload time (usually the biggest part of the delay). The decode + resize is
// done by the browser in one step (createImageBitmap resize options), and we
// start it the moment a file is picked so it is ready before the request.
async function shrinkForUpload(original: File): Promise<File> {
  if (original.size < SKIP_RESIZE_BELOW) return original;
  try {
    const bitmap = await createImageBitmap(original, {
      resizeWidth: MAX_UPLOAD_WIDTH,
      resizeQuality: "medium",
    });
    const canvas = document.createElement("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.85),
    );
    if (!blob || blob.size >= original.size) return original;
    return new File([blob], original.name.replace(/\.\w+$/, "") + ".jpg", {
      type: "image/jpeg",
    });
  } catch {
    return original;
  }
}

const GLYPHS = "0123456789ABCDEFGHJKLMNPRSTUVWXYZ";
const LETTERS = "ABCDEFGHJKLMNPRSTUVWXYZ"; // no I, O, Q
const pick = (chars: string) => chars[Math.floor(Math.random() * chars.length)];
const digits = (n: number) => Array.from({ length: n }, () => pick("0123456789")).join("");
const letters = (n: number) => Array.from({ length: n }, () => pick(LETTERS)).join("");

const IN_STATES = ["MH", "DL", "KA", "TN", "GJ", "UP", "RJ", "KL"];
const SAMPLE_PLATES = [
  { country: "India", make: () => `${IN_STATES[Math.floor(Math.random() * IN_STATES.length)]} ${digits(2)} ${letters(2)} ${digits(4)}` },
  { country: "United States", make: () => `${digits(1)}${letters(3)}${digits(3)}` },
  { country: "Canada", make: () => `${letters(4)} ${digits(3)}` },
  { country: "United Kingdom", make: () => `${letters(2)}${digits(2)} ${letters(3)}` },
];

type SamplePlate = { country: string; text: string };
const nextSample = (index: number): SamplePlate => {
  const entry = SAMPLE_PLATES[index % SAMPLE_PLATES.length];
  return { country: entry.country, text: entry.make() };
};

/**
 * Plate text that periodically re-scrambles, matrix-style, into a brand-new
 * plate, cycling through India, US, Canada and UK formats.
 */
function MatrixPlate({
  className = "",
  scrambleClassName = "",
  onNext,
}: {
  className?: string;
  scrambleClassName?: string;
  onNext?: (plate: SamplePlate) => void;
}) {
  const [text, setText] = useState("MH 12 AB 1234");
  const [scrambling, setScrambling] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 1; // first plate shown is India, so start the cycle at US
    let tick: ReturnType<typeof setInterval> | undefined;

    const run = () => {
      const next = nextSample(index++);
      onNext?.(next);
      let frame = 0;
      setScrambling(true);
      clearInterval(tick);
      tick = setInterval(() => {
        frame++;
        // Characters lock in left to right, one every 2 frames.
        const locked = Math.floor(frame / 2);
        setText(
          next.text
            .split("")
            .map((ch, i) =>
              ch === " " || i < locked ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
            )
            .join(""),
        );
        if (locked >= next.text.length) {
          clearInterval(tick);
          setText(next.text);
          setScrambling(false);
        }
      }, 45);
    };

    const first = setTimeout(run, 1800);
    const loop = setInterval(run, 4200);
    return () => {
      clearTimeout(first);
      clearInterval(loop);
      clearInterval(tick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className={`${className} ${scrambling ? scrambleClassName : ""}`}>{text}</span>;
}

/** The floating "plate detected" card in the hero, with a rotating sample. */
function SampleCard() {
  const [meta, setMeta] = useState({ country: "India", confidence: 98, ms: 0.8 });
  return (
    <div className="absolute left-[75%] top-[36%] w-[260px] rounded-2xl bg-white p-4 text-[#003640] shadow-[0_18px_40px_-18px_rgba(0,54,64,0.35)] ring-1 ring-[#003640]/5">
      <div className="flex items-center justify-between text-[11px]">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#67793D]/10 px-2.5 py-1 text-[#4c5a2a]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#67793D]" />
          Plate detected
        </span>
        <span className="text-[#003640]/45">{meta.country}</span>
      </div>
      <p className="mt-3 whitespace-nowrap font-mono text-2xl tracking-[0.08em]" aria-label="Sample plate">
        <MatrixPlate
          className="transition-colors duration-150"
          scrambleClassName="text-[#67793D]"
          onNext={(plate) =>
            setMeta({
              country: plate.country,
              confidence: 94 + Math.floor(Math.random() * 6),
              ms: Math.round(60 + Math.random() * 50) / 100,
            })
          }
        />
      </p>
      <dl className="mt-3 space-y-1.5 border-t border-[#003640]/10 pt-3 text-xs">
        <div className="flex justify-between">
          <dt className="text-[#003640]/55">Confidence</dt>
          <dd className="text-[#4c5a2a]">{meta.confidence}% · High</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-[#003640]/55">Processed in</dt>
          <dd>{meta.ms.toFixed(1)} s</dd>
        </div>
      </dl>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          /* clipboard unavailable */
        }
      }}
      aria-label={`Copy plate ${text}`}
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#003640]/15 px-3 text-xs font-normal text-[#003640] transition-colors hover:bg-[#f6f6f6]"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function LicensePlateRecognitionContent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const preparedRef = useRef<Promise<File> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<RecognitionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Release the object URL when the preview changes or the page unmounts.
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const selectFile = (nextFile: File | undefined) => {
    setError(null);
    setResult(null);

    if (!nextFile) return;
    if (!ACCEPTED_TYPES.includes(nextFile.type)) {
      setError("Use a JPG, PNG or WEBP image.");
      return;
    }
    if (nextFile.size > MAX_FILE_SIZE) {
      setError("That file is larger than the 15 MB limit.");
      return;
    }

    // The preview is shown instantly from the local file; resizing starts in
    // the background and recognition runs straight away.
    setFile(nextFile);
    setPreview(URL.createObjectURL(nextFile));
    preparedRef.current = shrinkForUpload(nextFile);
    void run(nextFile);
  };

  // Warm the recognition path once the page is idle: wakes the API route and opens the
  // connection to the recognition server (via its free /health check), so the first
  // scan doesn't pay that setup time. Uses no demo quota.
  useEffect(() => {
    const warm = () => {
      void fetch("/api/lpr-demo/recognize", { method: "GET", cache: "no-store" }).catch(() => {});
    };
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(warm, { timeout: 3000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(warm, 1500);
    return () => clearTimeout(t);
  }, []);

  // Allow pasting a screenshot / copied image anywhere on the page.
  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      const item = Array.from(event.clipboardData?.files ?? [])[0];
      if (item) selectFile(item);
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    selectFile(event.target.files?.[0]);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    selectFile(event.dataTransfer.files[0]);
  };

  const run = async (target: File) => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("image", await (preparedRef.current ?? shrinkForUpload(target)));
      const response = await fetch("/api/lpr-demo/recognize", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Recognition failed.");
      if (controller.signal.aborted) return;
      setResult(payload as RecognitionResponse);
      // On stacked (mobile) layouts the results sit below the fold.
      requestAnimationFrame(() =>
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    } catch (requestError) {
      if (controller.signal.aborted) return;
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Recognition failed. Please try again.",
      );
    } finally {
      if (abortRef.current === controller) setIsLoading(false);
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    preparedRef.current = null;
    setIsLoading(false);
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const shownImage = result?.annotated_image ?? preview;

  return (
    <MainLayout>
      <main className="overflow-x-clip bg-[#f4f6f8]">
        {/* Hero */}
        <section className="relative flex flex-col overflow-hidden bg-[#f4f6f8] lg:block">
          {/* Image layer: the inner box keeps the photo's aspect ratio so the
              scan overlays below stay pinned to the plate at every size. */}
          <div className="relative order-2 h-[var(--h)] [--h:min(100vw,560px)] sm:[--h:420px] lg:absolute lg:inset-0 lg:h-auto">
            <div className="absolute top-0 left-1/2 h-full w-[calc(var(--h)*1.779)] -translate-x-[67.5%] sm:left-auto sm:right-0 sm:translate-x-0 lg:w-auto lg:aspect-[1400/787] lg:-right-[16%] xl:right-0">
              <Image
                src={HERO_IMAGE}
                alt="White car on a road with its license plate being detected by AI"
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 1200px, 700px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f4f6f8] to-transparent"
              />

              {/* scan frame around the plate */}
              <div
                aria-hidden
                className="absolute left-[65.1%] top-[52.4%] h-[3.4%] w-[5.1%] animate-pulse rounded-[3px] border-2 border-[#67793D] shadow-[0_0_0_3px_rgba(103,121,61,0.18)]"
              />
              <span className="absolute left-[67.6%] top-[47%] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#003640] px-2 py-0.5 text-[9px] text-white xl:hidden">
                <MatrixPlate /> · 98%
              </span>

              {/* desktop result card */}
              <div aria-hidden className="hidden xl:block">
                <div className="absolute left-[70.3%] top-[54.1%] h-px w-[4.7%] bg-[#67793D]" />
                <div className="absolute left-[74.6%] top-[53.7%] h-1.5 w-1.5 rounded-full bg-[#67793D]" />
                <SampleCard />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="relative z-10 order-1 mx-auto w-full max-w-7xl px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:flex lg:min-h-[700px] lg:items-center lg:px-8 lg:pb-40 lg:pt-36">
            <div className="max-w-xl">
              <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#003640]/55">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-[#003640]">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href="/products" className="hover:text-[#003640]">
                      Products
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li aria-current="page" className="text-[#003640]">
                    License Plate Recognition
                  </li>
                </ol>
              </nav>

              <div className={`${SECTION_LABEL} mb-5 inline-flex items-center gap-2 rounded-full border border-[#003640]/10 bg-white px-3.5 py-1.5 shadow-sm`}>
                <ScanLine className="h-3.5 w-3.5" />
                Free ALPR / ANPR demo
              </div>
              <h1 className="text-[34px] font-normal leading-[1.08] tracking-tight text-[#003640] sm:text-[48px] lg:text-[56px]">
                AI License Plate Recognition for ALPR &amp; ANPR
              </h1>
              <p className="mt-5 text-[15px] leading-relaxed text-[#003640]/70 sm:text-[17px]">
                Upload a car photo and our AI license plate reader detects and reads number
                plates online in seconds — free, no sign-up.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#demo"
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#003640] px-6 text-sm font-normal text-white transition-colors hover:bg-[#00262d]"
                >
                  <ScanLine className="h-4 w-4" />
                  Try the demo
                </a>
                <Link
                  href="/insights/case-studies/parking/ai-lpr-parking-enforcement"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#003640]/20 bg-white/70 px-6 text-sm font-normal text-[#003640] backdrop-blur transition-colors hover:bg-white"
                >
                  Read the case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View the open source API on GitHub"
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-[#003640]/20 bg-white/70 px-6 text-sm font-normal text-[#003640] backdrop-blur transition-colors hover:bg-white"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Open source on GitHub
                  <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Demo workbench (overlaps hero) */}
        <section
          id="demo"
          className="relative mx-auto mt-8 max-w-7xl scroll-mt-24 px-4 sm:mt-10 sm:px-6 lg:-mt-24 lg:px-8"
        >
          <div className="grid gap-5 lg:gap-6">
            {/* Upload panel */}
            <div className="rounded-[20px] bg-white p-4 shadow-[0_20px_50px_-20px_rgba(0,54,64,0.35)] sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="hc-heading text-base font-normal text-[#003640] sm:text-lg">
                  1. Add a vehicle image
                </h2>
                {file && (
                  <span className="max-w-[45%] truncate text-xs text-[#003640]/55">
                    {file.name} · {formatSize(file.size)}
                  </span>
                )}
              </div>

              <div
                role="button"
                tabIndex={0}
                aria-label="Upload a vehicle image"
                onClick={() => inputRef.current?.click()}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    inputRef.current?.click();
                  }
                }}
                onDragOver={(event) => {
                  event.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative flex min-h-[260px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed px-4 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#696e2e] focus-visible:ring-offset-2 sm:min-h-[380px] ${
                  isDragging
                    ? "border-[#696e2e] bg-[#696e2e]/10"
                    : shownImage
                      ? "border-transparent bg-[#f0f2f2]"
                      : "border-[#003640]/20 bg-[#f6f6f6] hover:border-[#696e2e] hover:bg-[#f0f2ea]"
                }`}
              >
                {shownImage ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shownImage}
                      alt={
                        result?.annotated_image
                          ? "Annotated recognition result"
                          : "Selected vehicle"
                      }
                      className="absolute inset-0 h-full w-full object-contain p-2 sm:p-3"
                    />
                    {isLoading && (
                      <div className="absolute inset-0 overflow-hidden bg-[#003640]/40">
                        <div className="lpr-scan-line absolute inset-x-0 h-1 bg-[#c8d269] shadow-[0_0_24px_6px_rgba(200,210,105,0.7)]" />
                      </div>
                    )}
                    {!isLoading && (
                      <span className="absolute bottom-3 right-3 rounded-full bg-[#003640]/80 px-3 py-1.5 text-xs font-normal text-white backdrop-blur">
                        Tap to replace
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#003640] text-white shadow-lg">
                      <ImagePlus className="h-7 w-7" />
                    </div>
                    <p className="text-lg font-normal text-[#003640] sm:text-xl">
                      <span className="hidden sm:inline">Drop an image here</span>
                      <span className="sm:hidden">Tap to add a photo</span>
                    </p>
                    <p className="mt-1.5 text-sm text-[#003640]/60">
                      <span className="hidden sm:inline">
                        or click to browse · paste with Ctrl/⌘ + V
                      </span>
                      <span className="sm:hidden">Choose from gallery or take a picture</span>
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-xs text-[#003640]/50">
                      <FileImage className="h-4 w-4" /> JPG, PNG or WEBP · up to 15 MB
                    </p>
                  </>
                )}
                <input
                  ref={inputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                  onChange={handleInput}
                  className="hidden"
                />
              </div>

              {(file || isLoading) && (
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2 text-sm text-[#003640]/65" aria-live="polite">
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Analyzing…
                      </>
                    ) : result ? (
                      <>
                        <Check className="h-4 w-4 text-[#67793D]" /> Done
                      </>
                    ) : null}
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#003640]/15 px-4 text-sm font-normal text-[#003640] transition-colors hover:bg-[#f4f6f8]"
                  >
                    <RefreshCw className="h-4 w-4" /> Start over
                  </button>
                </div>
              )}

              <div role="alert" aria-live="assertive">
                {error && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl bg-red-50 p-3.5 text-sm text-red-800">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
                    {error}
                  </div>
                )}
              </div>

              <div className="mt-6 grid gap-3 border-t border-[#003640]/10 pt-5 sm:grid-cols-3">
                {TIPS.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-3 sm:block">
                    <Icon className="h-5 w-5 shrink-0 text-[#696e2e]" />
                    <div>
                      <p className="text-[15px] font-normal text-[#003640] sm:mt-2.5">
                        {title}
                      </p>
                      <p className="mt-0.5 text-[14px] leading-relaxed text-[#003640]/65">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results panel */}
            <div
              ref={resultsRef}
              aria-live="polite"
              className="scroll-mt-24 rounded-[20px] bg-white p-4 text-[#003640] shadow-[0_20px_50px_-20px_rgba(0,54,64,0.3)] sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className={SECTION_LABEL}>2. Recognition output</p>
                  <h2 className="hc-heading mt-1.5 text-xl font-normal sm:text-2xl">
                    {isLoading
                      ? "Reading plates…"
                      : result
                        ? result.count === 0
                          ? "No plates detected"
                          : `${result.count} plate${result.count === 1 ? "" : "s"} detected`
                        : "Your results appear here"}
                  </h2>
                </div>
                {result && result.count > 0 && (
                  <CheckCircle2 className="h-7 w-7 shrink-0 text-[#67793D]" />
                )}
              </div>

              {isLoading && (
                <div className="mt-6 space-y-3" aria-hidden>
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-14 animate-pulse rounded-xl bg-[#003640]/10" />
                    ))}
                  </div>
                  <div className="h-44 animate-pulse rounded-2xl bg-[#003640]/10" />
                </div>
              )}

              {!result && !isLoading && (
                <div className="mt-6 flex min-h-[160px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#003640]/15 bg-[#f4f6f8] px-6 text-center text-sm leading-relaxed text-[#003640]/60 sm:min-h-[200px]">
                  <ScanSearch className="h-8 w-8 text-[#003640]/35" />
                  Drop or pick an image and recognition starts automatically — plate numbers, confidence and the annotated photo appear here.
                </div>
              )}

              {result && !isLoading && (
                <>
                  <div className="mt-5 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3">
                    <div className="rounded-xl bg-[#f4f6f8] p-3">
                      <span className="block text-[11px] text-[#003640]/50">Status</span>
                      <strong
                        className={`mt-1 block text-sm sm:text-base ${result.ok ? "text-[#67793D]" : "text-red-600"}`}
                      >
                        {result.ok ? "Success" : "Failed"}
                      </strong>
                    </div>
                    <div className="rounded-xl bg-[#f4f6f8] p-3">
                      <span className="block text-[11px] text-[#003640]/50">Plates</span>
                      <strong className="font-normal mt-1 block text-sm sm:text-base">{result.count}</strong>
                    </div>
                    <div className="rounded-xl bg-[#f4f6f8] p-3">
                      <span className="block text-[11px] text-[#003640]/50">Time</span>
                      <strong className="font-normal mt-1 block text-sm sm:text-base">
                        {(result.latency_ms / 1000).toFixed(2)} s
                      </strong>
                    </div>
                  </div>

                  {result.count === 0 && (
                    <p className="mt-4 rounded-xl bg-[#f4f6f8] p-4 text-sm leading-relaxed text-[#003640]/75">
                      We couldn’t find a plate in this image. Try a closer, sharper photo
                      with the whole plate visible and less glare.
                    </p>
                  )}

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {result.plates.map((plate, index) => (
                      <article
                        key={`${plate.text}-${index}`}
                        className="flex flex-col rounded-2xl border border-[#003640]/10 bg-[#f4f6f8] p-4 text-[#003640]"
                      >
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <span className="text-[13px] text-[#003640]/60">
                            Plate #{index + 1}
                          </span>
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-normal ${confidenceTone(plate.detection_confidence)}`}
                          >
                            {formatConfidence(plate.detection_confidence)} confidence
                          </span>
                        </div>

                        <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-xl border border-[#003640]/10 bg-white p-2 sm:h-24">
                          {plate.crop_image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={plate.crop_image}
                              alt={`Cropped plate ${plate.text}`}
                              className="h-full w-auto max-w-full object-contain"
                            />
                          ) : (
                            <span className="text-[11px] text-[#003640]/40">No crop image</span>
                          )}
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-2">
                          <span className="min-w-0 truncate font-mono text-xl font-normal tracking-[0.12em] sm:text-2xl">
                            {plate.text}
                          </span>
                          <CopyButton text={plate.text} />
                        </div>
                      </article>
                    ))}
                  </div>

                  {result.annotated_image && (
                    <a
                      href={result.annotated_image}
                      download={`plate-result-${result.filename.replace(/\.\w+$/, "")}.jpg`}
                      className="mt-4 inline-flex h-11 w-full sm:w-auto sm:px-8 items-center justify-center gap-2 rounded-full border border-[#003640]/20 text-sm font-normal transition-colors hover:bg-[#f4f6f8]"
                    >
                      <Download className="h-4 w-4" /> Download annotated image
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
          <div className="max-w-2xl">
            <p className={SECTION_LABEL}>How it works</p>
            <h2 className="hc-heading mt-2 text-2xl font-normal tracking-tight text-[#003640] sm:text-4xl">
              From photo to plate number in three steps
            </h2>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="relative rounded-2xl bg-white p-5 shadow-sm sm:p-6"
              >
                <span className="absolute right-5 top-4 text-4xl font-normal text-[#003640]/[0.07]">
                  {i + 1}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#003640] text-[#c8d269]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-normal text-[#003640]">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#003640]/65">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* What is LPR: direct-answer block for search + AI answer engines */}
        <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
            <div>
              <p className={SECTION_LABEL}>About the technology</p>
              <h2 className="hc-heading mt-2 text-2xl font-normal tracking-tight text-[#003640] sm:text-4xl">
                What is license plate recognition?
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-[#003640]/75 sm:text-base">
              <p>
                <strong className="font-normal text-[#003640]">License plate recognition (LPR)</strong>{" "}
                — also known as <strong className="font-normal text-[#003640]">ALPR</strong>{" "}
                (automatic license plate recognition) or{" "}
                <strong className="font-normal text-[#003640]">ANPR</strong> (automatic number
                plate recognition) — uses computer vision and OCR to detect a vehicle’s plate
                in an image or video and convert it into machine-readable text.
              </p>
              <p>
                This demo runs Tizora’s open-source license plate recognition API. It returns
                each plate’s text, a confidence score and an annotated image, the same output
                you would integrate into a parking, tolling or access-control system.
              </p>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <h2 className="hc-heading text-2xl font-normal tracking-tight text-[#003640] sm:text-4xl">
            ALPR &amp; ANPR use cases
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LPR_USE_CASES.map((u) => (
              <li key={u.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-base font-normal text-[#003640]">
                  {"href" in u && u.href ? (
                    <Link href={u.href} className="underline decoration-[#003640]/25 underline-offset-4 hover:decoration-[#003640]">
                      {u.title}
                    </Link>
                  ) : (
                    u.title
                  )}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#003640]/65">{u.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
          <h2 className="hc-heading text-center text-2xl font-normal tracking-tight text-[#003640] sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-[#003640]/10 overflow-hidden rounded-2xl bg-white shadow-sm">
            {LPR_FAQS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q}>
                  <h3 className="m-0 font-normal">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`lpr-faq-${i}`}
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-normal text-[#003640] sm:px-6"
                  >
                    {item.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  </h3>
                  {/* Always in the HTML so search engines and AI answer engines can read every answer. */}
                  <div
                    id={`lpr-faq-${i}`}
                    inert={!open}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-[#003640]/70 sm:px-6">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] bg-[#003640] px-6 py-10 text-center text-white sm:px-12 sm:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-[#c8d269]/20 blur-3xl"
            />
            <h2 className="hc-heading relative text-2xl font-normal tracking-tight sm:text-4xl">
              Need an ALPR / ANPR system for your product?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              We build and deploy plate recognition for parking, tolling, fleet and
              access-control systems.
            </p>
            <div className="relative mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#c8d269] px-7 text-sm font-normal text-[#003640] transition-colors hover:bg-[#d6df84]"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/insights/case-studies/parking/ai-lpr-parking-enforcement"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-sm font-normal transition-colors hover:bg-white/10"
              >
                Read the case study
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
