import { NextResponse } from "next/server";
import { LPR_API_BASE } from "@/data/pages/products/lprData";

const MAX_FILE_SIZE = 15 * 1024 * 1024;

const RECOGNIZE_URL = `${LPR_API_BASE}/demo/recognize`;
const HEALTH_URL = `${LPR_API_BASE}/health`;

/**
 * The visitor's own IP, as reported by the hosting platform. The upstream demo limits each IP to
 * a daily quota; forwarding it (with TRUST_PROXY_HEADERS=true on the API server) gives every
 * visitor their own quota instead of all visitors sharing this server's single IP.
 */
function getVisitorIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip")?.trim() || null;
}

function formatWait(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return "later today";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.ceil((seconds % 3600) / 60);
  if (hours >= 1) return `in about ${hours} hour${hours === 1 ? "" : "s"}`;
  return `in about ${Math.max(1, minutes)} minute${minutes === 1 ? "" : "s"}`;
}

export const runtime = "nodejs";

/**
 * Warm-up: the page calls this once it is idle. It wakes this function and opens the TLS
 * connection to the recognition server via its free /health endpoint (not rate-limited), so
 * the visitor's first real scan skips that setup time.
 */
export async function GET() {
  try {
    await fetch(HEALTH_URL, {
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    });
  } catch {
    /* warm-up is best effort */
  }
  return new Response(null, { status: 204, headers: { "cache-control": "no-store" } });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const declaredSize = Number(request.headers.get("content-length") || 0);

  if (!contentType.startsWith("multipart/form-data") || !request.body) {
    return NextResponse.json(
      { error: "Please upload an image file." },
      { status: 400 },
    );
  }

  // Allow a little multipart overhead on top of the raw file limit.
  if (declaredSize > MAX_FILE_SIZE + 64 * 1024) {
    return NextResponse.json(
      { error: "The maximum file size is 15 MB." },
      { status: 400 },
    );
  }

  const apiUrl = RECOGNIZE_URL;
  const apiKey = process.env.LPR_DEMO_API_KEY;

  const headers: Record<string, string> = { "content-type": contentType };
  if (declaredSize) headers["content-length"] = String(declaredSize);
  if (apiKey) {
    headers[process.env.LPR_DEMO_API_KEY_HEADER || "X-API-Key"] = apiKey;
  }
  const visitorIp = getVisitorIp(request);
  if (visitorIp) {
    headers["x-forwarded-for"] = visitorIp;
    headers["x-real-ip"] = visitorIp;
  }

  try {
    // Stream the upload straight through instead of parsing and rebuilding
    // the multipart body, which added a full extra copy of the image.
    const response = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: request.body,
      // Required by Node's fetch when the body is a stream.
      duplex: "half",
      cache: "no-store",
    } as RequestInit & { duplex: "half" });

    if (response.status === 429) {
      const payload = await response.json().catch(() => ({}));
      const retryAfter = Number(
        payload?.retry_after_seconds ?? response.headers.get("retry-after") ?? 0,
      );
      const limit = payload?.limit ?? response.headers.get("x-ratelimit-limit") ?? 10;
      // The upstream message includes the caller's IP, so it is replaced rather than passed on.
      return NextResponse.json(
        {
          error: `You've used today's ${limit} free demo scans. They reset ${formatWait(retryAfter)} (midnight UTC). Need more? Talk to our team about a trial.`,
          retry_after_seconds: retryAfter,
        },
        { status: 429, headers: { "retry-after": String(retryAfter || 3600) } },
      );
    }

    if (!response.ok) {
      const payload = await response.json().catch(() => ({
        error: "The recognition service returned an invalid response.",
      }));
      return NextResponse.json(
        {
          error:
            payload?.detail ||
            payload?.error ||
            "The recognition service could not process this image.",
        },
        { status: response.status },
      );
    }

    // Pipe the (base64-heavy) result back without buffering/re-serialising it.
    return new Response(response.body, {
      status: 200,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "The recognition service is temporarily unavailable. Please try again.",
      },
      { status: 502 },
    );
  }
}
