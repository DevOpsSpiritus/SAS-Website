"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo } from "react";
import { cn } from "@/lib/utils";

type Step = {
    step: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
};

type Props = {
    steps: Step[];
    radius?: number;      // cylinder radius in px
    pitch?: number;       // vertical spacing per step in px
    viewportVH?: number;  // sticky viewport height in vh
    turns?: number;       // number of full rotations across the section
    cardWidth?: number;   // max card width in px
};

export function DnaHelix({
    steps,
    radius = 420,
    pitch = 160,
    viewportVH = 80,
    turns = 1,
    cardWidth = 560,
}: Props) {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Scroll progress across the section (0..1)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    // Rotate the whole helix container; spring to remove jitter
    const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 360 * turns]);
    const rotateY = useSpring(rawRotate, { stiffness: 120, damping: 24, mass: 0.6 });

    // Precompute each card's fixed angle and vertical offset.
    const layout = useMemo(
        () =>
            steps.map((s, i) => {
                const angle = (360 / steps.length) * i;        // degrees around cylinder
                const y = (i - (steps.length - 1) / 2) * pitch; // center vertically
                return { ...s, angle, y };
            }),
        [steps, pitch]
    );

    return (
        <section ref={sectionRef} className="relative py-12 md:py-20">
            {/* Sticky 3D viewport (prevents squashing) */}
            <div
                className="sticky top-24 mx-auto max-w-6xl"
                style={{ height: `${viewportVH}vh`, perspective: "1400px" }}
            >
                {/* 3D stage that rotates as you scroll */}
                <motion.div
                    style={{ rotateY }}
                    className="relative h-full w-full flex items-center justify-center"
                >
                    {/* Ensure children preserve 3D depth */}
                    <div style={{ transformStyle: "preserve-3d" }} className="relative h-full w-full">
                        {/* vertical backbone */}
                        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-[2px] -translate-x-1/2 bg-border" />

                        {layout.map(({ step, title, description, icon, angle, y }) => {
                            // Emphasis based on facing direction: cos(angle) -> [0..1]
                            const cos = Math.cos((angle * Math.PI) / 180);
                            const scale = 0.92 + 0.14 * ((cos + 1) / 2);     // 0.92..1.06
                            const opacity = 0.45 + 0.55 * ((cos + 1) / 2);   // 0.45..1
                            const blur = 4 - 4 * ((cos + 1) / 2);            // 4..0 px

                            return (
                                <div
                                    key={step}
                                    className={cn(
                                        "absolute",
                                        `w-[min(92vw,_${cardWidth}px)]`,
                                        "rounded-2xl border border-white/15 bg-white/8 p-6",
                                        "supports-[backdrop-filter]:backdrop-blur-md",
                                        "shadow-[0_20px_60px_-20px_rgba(31,176,255,0.35)]",
                                        "transition-[transform,opacity,filter] duration-300 will-change-transform will-change-opacity"
                                    )}
                                    style={{
                                        transformStyle: "preserve-3d",
                                        transform: `translateY(${y}px) rotateY(${angle}deg) translateZ(${radius}px)`,
                                        opacity,
                                        filter: `blur(${blur}px)`,
                                        transformOrigin: "50% 50%",
                                        zIndex: Math.round(1000 + cos * 1000),
                                        // subtle scale (apply as CSS for speed; avoids per-card MotionValues)
                                        scale,
                                    } as React.CSSProperties}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20">
                                            <span className="text-base font-bold font-display text-primary">{step}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold font-display">{title}</h3>
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                                    {icon && <div className="mt-4 opacity-60">{icon}</div>}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* add scroll length so the rotation completes cleanly */}
            <div style={{ height: `calc(${steps.length} * ${viewportVH * 0.7}vh)` }} />
        </section>
    );
}
