"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo({ height = 36 }: { height?: number }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cropped images: dark 852×308, light 920×336 → aspect ≈ 2.75:1
  const width = Math.round(height * 2.75);

  const src =
    !mounted || resolvedTheme === "dark"
      ? "/brand/logo-lockup-dark.png"
      : "/brand/logo-lockup-light.png";

  return (
    <Image
      src={src}
      alt="Spiritus Agentic Solutions"
      width={width}
      height={height}
      style={{ width, height }}
      className="object-contain shrink-0"
      priority
    />
  );
}



