'use client';

import { startTransition, useMemo, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ContentImage as Image } from '@/components/common/ContentImage'

// Stand-in for Framer's real useIsStaticRenderer hook (only available inside
// the Framer canvas) -- always false here, so entrance/exit animations always run.
const useIsStaticRenderer = () => false;

/**
 * User request: Create a new Framer React code component named “Interactive Services List” that recreates a responsive, minimalist two-column services section with an interactive four-item accordion list, active image/content switching, subtle animations, keyboard-accessible semantic buttons, and configurable Framer controls for items, colors, spacing, padding, and height.
 */

interface ServiceItem {
    number: string
    title: string
    description: string
    tags?: string[]
    points?: string[]
    image?: {
        src?: string
        srcSet?: string
        alt?: string
    }
}

interface MyComponentProps {
    tagTitle?: string
    heading?: string
    items: ServiceItem[]
    background: string
    activeNumberColor: string
    inactiveNumberColor: string
    activeTitleColor: string
    inactiveTitleColor: string
    descriptionColor: string
    borderColor: string
    columnGap: number
    rowGap: number
    listPadding: string
    heightVh: number
    ctaLabel?: string
    /** Which side the image sits on at large sizes. Defaults to the right. */
    imageSide?: "left" | "right"
    ctaAction?: () => void
}

const fallbackItems: ServiceItem[] = [
    {
        number: "01",
        title: "Branding",
        description:
            "From defining your core brand strategy and visual identity to crafting a unique tone of voice, we ensure your business resonates deeply with your target audience and stands out in a crowded market.",
        image: {
            src: "https://framerusercontent.com/images/xOdgyL3fd2MRtGDYDwYg1Xss19Q.webp",
            alt: "Branding service",
        },
    },
    {
        number: "02",
        title: "Web Design",
        description:
            "We design intuitive, high-converting interfaces crafted specifically around your users’ behavior. By balancing aesthetics with flawless user journeys, we turn casual visitors into loyal customers.",
        image: {
            src: "https://framerusercontent.com/images/CIeUFXyHWA1oLItdQNWkFQjUXpg.webp",
            alt: "Web Design service",
        },
    },
    {
        number: "03",
        title: "Web Development",
        description:
            "We develop fast, highly responsive websites directly in Framer. Expect smooth animations, production-ready code, and an easy-to-manage CMS without sacrificing creative freedom.",
        image: {
            src: "https://framerusercontent.com/images/16J09qHYXWI9pBHynLRF3TXK4.webp",
            alt: "Web Development service",
        },
    },
    {
        number: "04",
        title: "Graphic Design",
        description:
            "Whether it’s social media kits, marketing collateral, presentation decks, or digital assets, we deliver purposeful graphic design that commands attention and communicates your value clearly.",
        image: {
            src: "https://framerusercontent.com/images/vFMLSrJrOxQKZhGYJ5Yj8OOJkZM.webp",
            alt: "Graphic Design service",
        },
    },
]

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight fixed
 */
export default function InteractiveServicesList(props: MyComponentProps) {
    const {
        tagTitle,
        heading,
        items,
        background,
        activeTitleColor,
        descriptionColor,
        borderColor,
        columnGap,
        listPadding,
        ctaLabel,
        ctaAction,
        imageSide = "right",
    } = props
    const isStatic = useIsStaticRenderer()
    const normalizedItems = useMemo(() => {
        const source = Array.isArray(items) && items.length > 0 ? items : fallbackItems;
        return source.map((item, index) => {
            const fallback = fallbackItems[index] || fallbackItems[0]
            return {
                number: item?.number || fallback.number,
                title: item?.title || fallback.title,
                description: item?.description || fallback.description,
                tags: item?.tags || fallback.tags,
                points: item?.points,
                image: item?.image?.src
                    ? item.image
                    : fallback.image || {
                          src: "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg",
                          alt: "Gradient 1 - Blue",
                      },
            }
        })
    }, [items])

    const [activeIndex, setActiveIndex] = useState(0)
    const safeActiveIndex = Math.min(
        Math.max(activeIndex, 0),
        normalizedItems.length - 1
    )
    const activeItem = normalizedItems[safeActiveIndex]

    return (
        <section
            data-component-id="C042"
            data-component-name="whatwebuild"
            className="w-full relative box-border px-5 pt-14 sm:px-8 lg:px-12 lg:pt-20"
            style={{ background, paddingBottom: listPadding }}
        >
            <div className="mx-auto w-full max-w-[1300px]">
                {(tagTitle || heading) && (
                    <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end lg:mb-10">
                        <div className="max-w-2xl">
                            {tagTitle && (
                                <span className="mb-3 block text-[12px] font-semibold uppercase tracking-widest text-accent">
                                    {tagTitle}
                                </span>
                            )}
                            {heading && (
                                <h2 className="text-[26px] font-normal leading-[1.2] tracking-tight text-primary sm:text-[32px]">
                                    {heading}
                                </h2>
                            )}
                        </div>
                        {ctaLabel && (
                            <button
                                type="button"
                                onClick={ctaAction}
                                className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-accent/90"
                            >
                                {ctaLabel}
                            </button>
                        )}
                    </div>
                )}

                {/* Compact two-column layout: the height follows the content, never the viewport. */}
                <div
                    className={`relative box-border flex flex-col items-center lg:items-center ${imageSide === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                    style={{ gap: columnGap }}
                >
                    <div className="relative hidden aspect-[4/3] w-full max-w-[560px] shrink-0 overflow-hidden rounded-[5px] bg-[#F5F5F5] shadow-[0_20px_50px_-28px_rgba(0,54,64,0.4)] lg:block lg:w-[46%]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`${safeActiveIndex}-${activeItem.image?.src || "image"}`}
                                src={activeItem.image?.src}
                                srcSet={activeItem.image?.srcSet}
                                alt={activeItem.image?.alt || activeItem.title}
                                initial={isStatic ? false : { opacity: 0, scale: 1.03 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={isStatic ? {} : { opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </AnimatePresence>
                        <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 tabular-nums text-[12px] text-primary backdrop-blur">
                            {activeItem.number} / {String(normalizedItems.length).padStart(2, "0")}
                        </span>
                    </div>

                    <div className="w-full min-w-0 flex-1">
                        {normalizedItems.map((item, index) => {
                            const isActive = index === safeActiveIndex
                            return (
                                <div
                                    key={`${item.number}-${index}`}
                                    className="relative"
                                    style={{
                                        borderTop: index === 0 ? `1px solid ${borderColor}` : "none",
                                        borderBottom: `1px solid ${borderColor}`,
                                    }}
                                >
                                    {/* active marker */}
                                    <span
                                        aria-hidden
                                        className="absolute left-0 top-0 w-[3px] origin-top rounded-full bg-accent transition-all duration-300"
                                        style={{ height: isActive ? "100%" : "0%", opacity: isActive ? 1 : 0 }}
                                    />
                                    <button
                                        type="button"
                                        aria-expanded={isActive}
                                        aria-controls={`service-panel-${index}`}
                                        onMouseEnter={() => startTransition(() => setActiveIndex(index))}
                                        onClick={() => startTransition(() => setActiveIndex(index))}
                                        className="flex w-full items-start gap-4 border-0 bg-transparent py-4 pl-5 pr-1 text-left"
                                        style={{ cursor: "pointer", fontFamily: "inherit" }}
                                    >
                                        <span
                                            aria-hidden
                                            className="mt-[7px] w-6 shrink-0 tabular-nums text-[12px] transition-colors duration-200"
                                            style={{ color: isActive ? activeTitleColor : "rgba(23,23,22,0.35)" }}
                                        >
                                            {item.number}
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <h3
                                                className="m-0 font-normal transition-all duration-200"
                                                style={{
                                                    color: activeTitleColor,
                                                    opacity: isActive ? 1 : 0.5,
                                                    fontSize: isActive ? 24 : 19,
                                                    lineHeight: 1.2,
                                                    letterSpacing: "-0.02em",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                {item.title}
                                            </h3>

                                            <AnimatePresence initial={false}>
                                                {isActive ? (
                                                    <motion.div
                                                        id={`service-panel-${index}`}
                                                        role="region"
                                                        aria-live="polite"
                                                        initial={isStatic ? false : { height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={isStatic ? {} : { height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                                                        style={{ overflow: "hidden" }}
                                                    >
                                                        <div className="pb-1 pt-3">
                                                            <div className="relative mb-4 block h-[200px] w-full overflow-hidden rounded-[5px] bg-[#F5F5F5] lg:hidden">
                                                                {item.image?.src && (
                                                                    <Image src={item.image.src} alt={item.image.alt || item.title} fill sizes="100vw" className="object-cover" />
                                                                )}
                                                            </div>
                                                            <p
                                                                className="m-0 max-w-[520px] text-[15px] leading-[1.55]"
                                                                style={{ color: descriptionColor, fontFamily: "inherit" }}
                                                            >
                                                                {item.description}
                                                            </p>
                                                            {item.points && item.points.length > 0 && (
                                                                <ul className="m-0 mt-3 flex list-none flex-col gap-1.5 p-0">
                                                                    {item.points.map((pt) => (
                                                                        <li key={pt} className="flex items-start gap-2.5 text-[14px] leading-snug text-primary/80">
                                                                            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                                                            {pt}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                ) : null}
                                            </AnimatePresence>
                                        </span>
                                        <span
                                            aria-hidden
                                            className="mt-[6px] shrink-0 text-[15px] transition-opacity duration-200"
                                            style={{ color: activeTitleColor, opacity: isActive ? 1 : 0 }}
                                        >
                                            ↗
                                        </span>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

/** Legacy tab-shaped data (label/title/tabs) rendered through InteractiveServicesList. */
export interface ServicesFromTabsData {
    label?: string
    title?: string
    buttonText?: string
    buttonAction?: () => void
    tabs: { id: string; icon?: unknown; title: string; description: string; imageSrc: string; features?: string[] }[]
}

const sentenceCase = (t: string) => {
    const clean = t.replace(/^\d+\.?\s*/, "").trim()
    return clean === clean.toUpperCase() ? clean.charAt(0) + clean.slice(1).toLowerCase() : clean
}

export function ServicesFromTabs({ data }: { data: ServicesFromTabsData }) {
    return (
        <InteractiveServicesList
            tagTitle={data.label}
            heading={data.title}
            ctaLabel={data.buttonText}
            ctaAction={data.buttonAction}
            items={data.tabs.map((t, i) => ({
                number: String(i + 1).padStart(2, "0"),
                title: sentenceCase(t.title),
                description: t.description,
                points: t.features,
                image: { src: t.imageSrc, alt: t.title },
            }))}
            background="#f6f6f6"
            activeNumberColor="#171716"
            inactiveNumberColor="#c4c3bd"
            activeTitleColor="#171716"
            inactiveTitleColor="#c4c3bd"
            descriptionColor="#4a4a48"
            borderColor="#e5e5e5"
            columnGap={48}
            rowGap={16}
            listPadding="4rem"
            heightVh={0}
        />
    )
}
