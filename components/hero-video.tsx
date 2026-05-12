"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Try to play; if autoplay is blocked, fall back to poster image
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setShowVideo(false);
      });
    }
  }, []);

  return (
    <>
      {showVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
          src="/hero.mp4"
          preload="metadata"
          poster="/og.png"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      ) : (
        <picture className="absolute inset-0 -z-10">
          <img src="/og.png" alt="Spiritus hero" className="w-full h-full object-cover" />
        </picture>
      )}
    </>
  );
}
