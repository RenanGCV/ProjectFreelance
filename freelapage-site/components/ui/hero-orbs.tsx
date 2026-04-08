"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export function HeroOrbs() {
  const orbA = useRef<HTMLDivElement>(null);
  const orbB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbA.current || !orbB.current) return;

    const ctx = gsap.context(() => {
      gsap.to(orbA.current, {
        x: 45,
        y: 26,
        duration: 4.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(orbB.current, {
        x: -38,
        y: -18,
        duration: 5.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={orbA}
        aria-hidden
        className="pointer-events-none absolute -left-28 top-6 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl"
      />
      <div
        ref={orbB}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
      />
    </>
  );
}
