"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSvgHeight(entry.contentRect.height);
      }
    });

    observer.observe(el);
    setSvgHeight(el.offsetHeight);

    return () => observer.disconnect();
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, svgHeight * 0.3]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute top-3 -left-4 md:-left-20">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "0 0 16px rgba(103, 121, 61, 0.6)"
                : "0 0 6px rgba(103, 121, 61, 0.25)",
          }}
          className="border-accent/30 ml-6.75 flex h-4.5 w-4.5 items-center justify-center rounded-full border bg-white shadow-xs"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: "#67793D",
              borderColor: "#566631",
            }}
            className="h-2.5 w-2.5 rounded-full border border-[#566631] bg-[#67793D] shadow-xs"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* Base Inactive Track */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#67793D"
            strokeOpacity="0.15"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Soft Outer Olive Glow on Scroll */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#olive-gradient)"
            strokeWidth="6"
            strokeOpacity="0.35"
            strokeLinecap="round"
            className="motion-reduce:hidden"
            style={{ filter: "blur(2.5px)" }}
          />

          {/* Vibrant Core Olive Beam on Scroll */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#olive-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            className="motion-reduce:hidden"
          />

          <defs>
            <motion.linearGradient
              id="olive-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop offset="0%" stopColor="#4F5F2C" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#67793D" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#8DA850" stopOpacity="1" />
              <stop offset="100%" stopColor="#B3CD6D" stopOpacity="1" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};