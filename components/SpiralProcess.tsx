"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
    type PropsWithChildren,
} from "react";
import { cn } from "@/lib/utils";

type SpiralCtx = {
    active: number;               // index of the currently focused step
    setActive: (i: number) => void;
};
const Ctx = createContext<SpiralCtx | null>(null);

export function SpiralRoot({ children }: PropsWithChildren) {
    const [active, setActive] = useState(0);
    const value = useMemo(() => ({ active, setActive }), [active]);
    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

type StepProps = PropsWithChildren<{
    index: number;                // map index from your array
    className?: string;
}>;

/**
 * SpiralStep:
 * - Observes itself; when mostly in view -> becomes active.
 * - Active: centered glassy card with blurred edges.
 * - Previous: drifts up-left; Next: drifts down-right (spiral feel).
 */
export function SpiralStep({ index, className, children }: StepProps) {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error("SpiralStep must be used inside <SpiralRoot/>");
    const { active, setActive } = ctx;

    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (!e.isIntersecting) continue;
                    // Prefer the element with the biggest intersection ratio
                    setActive(index);
                }
            },
            {
                root: null,
                // trigger a bit before center to feel responsive
                rootMargin: "0px 0px -35% 0px",
                threshold: [0.2, 0.4, 0.6, 0.8],
            }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [index, setActive]);

    // Position/animation logic
    const isActive = active === index;
    const isBefore = active > index;
    const isAfter = active < index;

    // To create a light spiral effect, we offset based on distance from active
    const distance = Math.abs(active - index);

    return (
        <div
            ref={ref}
            className={cn(
                "relative transition-all duration-500 will-change-transform will-change-opacity",
                // base look
                "rounded-2xl border border-border bg-muted/10 p-6",
                // glassy & centered when active
                isActive &&
                cn(
                    "z-10 scale-105",
                    "supports-[backdrop-filter]:backdrop-blur-md",
                    "bg-white/8 border-white/20 shadow-[0_20px_60px_-20px_rgba(31,176,255,0.35)]",
                    // soft vignette / blurred edges
                    "[mask-image:radial-gradient(120%_120%_at_50%_50%,black_60%,transparent_100%)]"
                ),
                // before = drift up-left, dim a bit
                isBefore &&
                cn(
                    "opacity-70",
                    `-translate-x-[${Math.min(8 + distance * 4, 24)}%] -translate-y-[${Math.min(
                        6 + distance * 3,
                        20
                    )}%] rotate-[-${Math.min(1 + distance * 0.5, 5)}deg]`
                ),
                // after = drift down-right
                isAfter &&
                cn(
                    "opacity-70",
                    `translate-x-[${Math.min(8 + distance * 4, 24)}%] translate-y-[${Math.min(
                        6 + distance * 3,
                        20
                    )}%] rotate-[${Math.min(1 + distance * 0.5, 5)}deg]`
                ),
                className
            )}
        >
            {children}
        </div>
    );
}

/**
 * A thin vertical line; you already have one, but this version
 * stays behind cards and subtly glows near the active item.
 */
export function SpiralLine() {
    const { active } = useContext(Ctx)!;
    return (
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-[2px] -translate-x-1/2 bg-border">
            {/* active glow ring */}
            <div
                className="absolute left-1/2 w-24 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl transition-all duration-500"
                style={{
                    height: "140px",
                    top: `${Math.max(0, active) * 260 + 40}px`, // approx step height spacing; tweak if needed
                }}
            />
        </div>
    );
}
