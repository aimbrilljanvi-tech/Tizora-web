'use client';

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

/**
 * HeroCarousel
 * ------------------------------------------------------------
 * A full-width, 90vh interactive "expanding tabs" hero.
 * - 4 fixed-position panels, left to right.
 * - One panel is "active" (wide, image + copy visible).
 * - The other three collapse to thin strips with a vertical label.
 * - Clicking a strip (or its dot) makes it active.
 * - Auto-advances to the next panel every 6s; timer resets on
 *   manual interaction.
 *
 * Drop this file into any React + lucide-react project.
 * No Tailwind required — all styling is self-contained below.
 * ------------------------------------------------------------
 */

const SLIDES = [
  {
    id: "overview",
    label: "Tizora AI",
    heading: "End-to-End AI Engineering",
    description: "From architecture to engineering, launch, and ongoing support. We build AI products that scale across diverse sectors.",
    cta: "Explore Capabilities",
    ctaLink: "/about",
    footerLabel: "Trust",
    footerType: "images",
    footerItems: [
      "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789450707/Untitled_design.png"
    ],
    bgImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393438/Industries_We_Serve-1.jpg",
    network: true,
  },
  {
    id: "healthtech",
    label: "Digital Health",
    heading: "AI-Powered Patient Intelligence",
    description:
      "Next-generation patient data processing and compliance-first architecture. We connect health data to personalized insights safely.",
    cta: "View case study",
    ctaLink: "/insights/case-studies/healthcare/ai-ready-patient-management-platform",
    footerLabel: "Capabilities",
    footerType: "services",
    footerItems: [
      "Patient Management",
      "Digital Therapeutics",
      "Remote Monitoring",
      "HIPAA Compliance",
      "Medical ML Models",
      "Data Strategy",
    ],
    extraSeal: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788423568/Hippa.png",
    bgImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393437/Industries_We_Serve-2.jpg",
    network: true,
  },
  {
    id: "ecommerce",
    label: "eCommerce",
    heading: "Hyper-Personalization & Scale",
    description: "High-performance platforms and inventory intelligence built for scale. We engineer deterministic checkout logic combined with probabilistic product discovery.",
    cta: "Explore industry solutions",
    ctaLink: "/industries/ecommerce",
    footerLabel: "Platforms",
    footerType: "ecommerce-logos",
    footerItems: [
      "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788423565/ecom-woo.png",
      "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788423565/ecom-shopify.png",
      "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788423563/ecom-big.png",
      "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788423563/ecom-magento.png"
    ],
    bgImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393438/Industries_We_Serve-3.jpg",
  },
  {
    id: "fintech",
    label: "FinTech",
    heading: "Engineering for Rigorous Accuracy",
    description:
      "Deterministic ledgers, real-time integrations, and AI-driven systems built for the uncompromising demands of financial services.",
    cta: "Explore industry solutions",
    ctaLink: "/industries/fintech",
    footerLabel: "Core Expertise",
    footerType: "services",
    footerItems: ["Mortgage Systems", "Risk Analysis", "Deterministic Ledgers", "Smart Contracts"],
    extraSeal: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788423480/pci_dss.png",
    bgImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393438/Industries_We_Serve-4.jpg",
  },
  {
    id: "automotive",
    label: "Parking & LPR",
    heading: "AI-Enhanced Parking Enforcement",
    description:
      "Improving license plate detection and permit validation in challenging real-world conditions with edge-deployed vision models.",
    cta: "Explore industry solutions",
    ctaLink: "/insights/case-studies/parking/ai-lpr-parking-enforcement",
    footerLabel: "Technologies",
    footerType: "services",
    footerItems: ["Computer Vision", "Edge AI", "LPR Systems", "IoT Integration"],
    bgImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393436/Industries_We_Serve-5.jpg",
    mirrorBg: true,
  },
];

const AUTO_ADVANCE_MS = 9000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  // True while we are scrolling the mobile carousel ourselves, so the scroll
  // listener doesn't fight the programmatic scroll.
  const programmaticScroll = useRef(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Only auto-advance if visible
    if (typeof window !== "undefined" && window.innerWidth <= 820) return; // swipeable on mobile
    
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timerRef.current);
  }, [active, isVisible]);


  // Mobile: scroll the carousel so the active card is centred.
  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.innerWidth > 820) return;
    const panel = container.querySelectorAll<HTMLElement>('.hc-panel')[active];
    if (!panel) return;
    programmaticScroll.current = true;
    clearTimeout(scrollTimer.current);
    container.scrollTo({
      left: panel.offsetLeft - (container.clientWidth - panel.offsetWidth) / 2,
      behavior: 'smooth',
    });
    scrollTimer.current = setTimeout(() => { programmaticScroll.current = false; }, 700);
    return () => clearTimeout(scrollTimer.current);
  }, [active]);

  // Mobile: keep `active` in sync when the user swipes.
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || programmaticScroll.current || window.innerWidth > 820) return;
    const panels = container.querySelectorAll<HTMLElement>('.hc-panel');
    const center = container.scrollLeft + container.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    panels.forEach((el, idx) => {
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (dist < bestDist) { bestDist = dist; best = idx; }
    });
    setActive(best);
  };

  const goTo = (i: number) => setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);

  return (
    <>
    <div className="hc-root font-sans" ref={containerRef} onScroll={handleScroll}>
      <style>{`
        .hc-root {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          height: 90vh;
          min-height: 760px;
          display: flex;
          gap: 16px;
          padding: 16px; /* Offset for navbar and margins */
          background: transparent; /* Page background color */
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }

        .hc-panel {
          position: relative;
          height: 100%;
          overflow: hidden;
          cursor: pointer;
          border-radius: 10px;
          flex: 1;
          transition: flex 0.7s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .hc-panel.is-active { 
          flex: 12;
          cursor: default; 
        }

        .hc-panel-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 0.5s ease;
        }

        /* ---------- bottom blur overlay ---------- */
        .hc-panel-scrim {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 85%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          -webkit-mask-image: linear-gradient(to top, black 0%, black 40%, transparent 80%);
          mask-image: linear-gradient(to top, black 0%, black 40%, transparent 80%);
          z-index: 1;
        }

        /* ---------- collapsed strip ---------- */
        .hc-strip {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0 24px;
          opacity: 1;
          transition: opacity 0.4s ease 0.15s;
        }
        .hc-panel.is-active .hc-strip { opacity: 0; pointer-events: none; }

        .hc-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.75);
          background: transparent;
          flex-shrink: 0;
        }

        .hc-strip-label {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: rgba(255,255,255,0.92);
          font-size: 15px;
          letter-spacing: 0.02em;
          font-weight: 500;
          white-space: nowrap;
        }

        .hc-plus {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.85);
          background: transparent;
          flex-shrink: 0;
        }

        /* ---------- active content ---------- */
        .hc-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.5s ease 0.25s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px 56px 40px 56px;
          pointer-events: none;
          overflow-y: auto;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hc-content::-webkit-scrollbar {
          display: none;
        }
        .hc-panel.is-active .hc-content {
          opacity: 1;
          pointer-events: auto;
        }

        .hc-top-row {
          display: flex;
          justify-content: flex-end;
        }
        .hc-top-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.9);
          font-size: 14px;
          font-weight: 500;
        }
        .hc-top-label .hc-dot { border-color: rgba(255,255,255,0.85); }

        .hc-middle {
          max-width: 640px;
          margin-top: auto;
          margin-bottom: 32px;
        }

        .hc-heading {
          font-weight: 300;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.1;
          color: #ffffff;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 16px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.7);
        }

        .hc-desc {
          color: rgba(255,255,255,0.9);
          font-size: 14px;
          line-height: 1.5;
          max-width: 460px;
          margin: 0 0 28px 0;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.6);
        }

        .hc-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #10131a;
          border: none;
          border-radius: 999px;
          padding: 13px 22px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .hc-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
        }

        .hc-footer {
          flex: 1;
          min-width: 0;
        }

        .hc-footer-rule {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.28);
          margin-bottom: 14px;
        }

        .hc-footer-label {
          color: rgba(255,255,255,0.9);
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 4px;
        }

        .hc-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 28px 40px;
          align-items: center;
        }
        .hc-logo-text {
          color: rgba(255,255,255,0.88);
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        .hc-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .hc-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.85);
          font-size: 12px;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 999px;
          padding: 8px 14px;
        }
        .hc-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
        }

        .hc-image-seals {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .hc-image-seal-wrapper {
          width: auto;
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hc-image-seal {
          width: auto;
          height: 100%;
          object-fit: contain;
        }

        .hc-services {
          display: grid;
          grid-template-columns: repeat(3, minmax(140px, auto));
          gap: 10px 40px;
        }
        .hc-service-item {
          color: rgba(255,255,255,0.9);
          font-size: 15px;
          font-weight: 500;
        }

        .hc-ecommerce-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: center;
        }
        .hc-ecommerce-logo-img {
          height: 36px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1) opacity(0.9);
        }

        .hc-nav {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .hc-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.04);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .hc-nav-btn:hover { background: rgba(255,255,255,0.14); }

        /* ---------- data & ai network background ---------- */
        .hc-network {
          position: absolute;
          inset: 0;
          opacity: 0.9;
        }

        .hc-dots { display: none; }

        @media (max-width: 820px) {
          .hc-root {
            padding: 16px;
            height: auto;
            min-height: unset;
            flex-direction: row;
            align-items: stretch;
            gap: 12px;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-x: contain;
            scrollbar-width: none;
          }
          .hc-root::-webkit-scrollbar { display: none; }
          .hc-panel {
            flex: 0 0 100% !important;
            width: 100% !important;
            min-width: 0;
            height: auto !important;
            min-height: 600px;
            scroll-snap-align: center;
            scroll-snap-stop: always;
            cursor: default;
          }
          .hc-strip { display: none !important; }
          .hc-content {
            position: relative !important;
            height: 100%;
            min-height: 600px;
            overflow-y: visible !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            padding: 28px 20px 24px;
          }
          .hc-middle { margin-bottom: 24px; }
          .hc-services { grid-template-columns: repeat(2, auto); gap: 8px 24px; }
          .hc-heading { font-size: 28px; }
          .hc-image-seal-wrapper { height: 96px; }
          .hc-bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
          .hc-footer { width: 100%; }
          .hc-nav-wrapper {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between;
            width: 100%;
            opacity: 1 !important;
            transform: none !important;
          }
          .hc-nav-btn { width: 44px; height: 44px; }
          .hc-panel-scrim {
            opacity: 0.65 !important;
            background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 100%) !important;
          }
          .hc-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            padding: 0 16px 8px;
          }
          .hc-dots-btn {
            width: 8px;
            height: 8px;
            padding: 0;
            border: 0;
            border-radius: 999px;
            background: rgba(0,54,64,0.25);
            transition: width 0.3s ease, background 0.3s ease;
          }
          .hc-dots-btn.is-active { width: 24px; background: #003640; }
        }
      `}</style>

      {SLIDES.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={slide.id}
            className={`hc-panel${isActive ? " is-active" : ""}`}
            onClick={() => !isActive && goTo(i)}
          >
            <div 
              className="hc-panel-bg" 
              style={{ 
                backgroundImage: `url(${slide.bgImage})`,
                transform: slide.mirrorBg ? "scaleX(-1)" : "none"
              }}
            >
              {slide.network && <NetworkBackground />}
            </div>

            {/* readable text background overlay */}
            <div className="hc-panel-scrim" />

            {/* collapsed strip */}
            <div className="hc-strip">
              <span className="hc-dot" />
              <span className="hc-strip-label">{slide.label}</span>
              <button
                className="hc-plus"
                aria-label={`Open ${slide.label}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
              >
                <Plus size={16} />
              </button>
            </div>

            {/* expanded content */}
            <div className="hc-content">
              <div className="hc-top-row">
                <span className="hc-top-label">
                  <span className="hc-dot" />
                  {slide.label}
                </span>
              </div>

              <div className="hc-middle">
                <h2 className="hc-heading">{slide.heading}</h2>
                <p className="hc-desc">{slide.description}</p>
                {slide.cta && (
                  slide.ctaLink ? (
                    <Link href={slide.ctaLink} className="hc-cta">
                      {slide.cta} <ChevronRight size={15} />
                    </Link>
                  ) : (
                    <button className="hc-cta">
                      {slide.cta} <ChevronRight size={15} />
                    </button>
                  )
                )}
              </div>

              <div className="hc-bottom">
                <div className="hc-footer">
                  <div className="hc-footer-rule" />
                  <div className="hc-footer-label">{slide.footerLabel}</div>

                  {slide.footerType === "logos" && (
                    <div className="hc-logos">
                      {slide.footerItems.map((item) => (
                        <span key={item} className="hc-logo-text">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {slide.footerType === "badges" && (
                    <div className="hc-badges">
                      {slide.footerItems.map((item) => (
                        <span key={item} className="hc-badge">
                          <span className="hc-badge-dot" />
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {slide.footerType === "images" && (
                    <div className="hc-image-seals">
                      {slide.footerItems.map((item, idx) => (
                        <div key={idx} className="hc-image-seal-wrapper">
                          <img
                            src={item}
                            alt="Seal"
                            className="hc-image-seal"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.footerType === "services" && (
                    <div className="hc-services">
                      {slide.footerItems.map((item) => (
                        <span key={item} className="hc-service-item">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {slide.footerType === "ecommerce-logos" && (
                    <div className="hc-ecommerce-logos">
                      {slide.footerItems.map((item, idx) => (
                        <motion.img
                          key={idx}
                          src={item}
                          alt="Platform Logo"
                          className="hc-ecommerce-logo-img"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="hc-nav-wrapper" style={{ display: isActive ? "flex" : "none", flexDirection: "column", alignItems: "center", gap: "24px", flexShrink: 0 }}>
                  {slide.extraSeal ? (
                    <img 
                      src={slide.extraSeal} 
                      alt="Seal" 
                      style={{ width: "115px", height: "auto", objectFit: "contain" }}
                    />
                  ) : null}
                  <div className="hc-nav">
                    <button
                      className="hc-nav-btn"
                      aria-label="Previous"
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(i - 1);
                      }}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      className="hc-nav-btn"
                      aria-label="Next"
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(i + 1);
                      }}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <div className="hc-dots" role="tablist" aria-label="Industries">
      {SLIDES.map((slide, i) => (
        <button
          key={slide.id}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={`Show ${slide.label}`}
          className={`hc-dots-btn${i === active ? " is-active" : ""}`}
          onClick={() => goTo(i)}
        />
      ))}
    </div>
    </>
  );
}

/* Lightweight animated node/edge network for the Data & AI slide background */
function NetworkBackground() {
  const points = [
    [520, 180], [610, 130], [660, 260], [560, 300], [480, 240],
    [420, 340], [700, 340], [640, 400], [540, 420], [380, 260],
  ];
  const edges = [
    [0, 1], [0, 2], [0, 4], [1, 2], [2, 3], [3, 4], [4, 9],
    [4, 5], [5, 8], [3, 6], [6, 7], [7, 8], [8, 3],
  ];
  return (
    <svg
      className="hc-network"
      viewBox="0 0 900 500"
      preserveAspectRatio="xMidYMid slice"
    >
      {edges.map(([a, b], idx) => (
        <line
          key={idx}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke="rgba(140,170,255,0.35)"
          strokeWidth="1"
        />
      ))}
      {points.map(([x, y], idx) => (
        <circle
          key={idx}
          cx={x}
          cy={y}
          r={idx % 3 === 0 ? 5 : 3}
          fill={idx % 3 === 0 ? "#ff8a4c" : "#8fb4ff"}
          opacity="0.9"
        />
      ))}
    </svg>
  );
}