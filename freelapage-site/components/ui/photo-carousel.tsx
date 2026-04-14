"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import img1 from "@/img/img1.jpeg";
import img2 from "@/img/img2.jpeg";
import img3 from "@/img/img3.jpeg";

const SLIDES = [
  { src: img1, alt: "Foto de projeto 1" },
  { src: img2, alt: "Foto de projeto 2" },
  { src: img3, alt: "Foto de projeto 3" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.04,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.96,
  }),
};

export function PhotoCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      const next =
        ((page + newDirection) % SLIDES.length + SLIDES.length) % SLIDES.length;
      setPage([next, newDirection]);
    },
    [page],
  );

  const goTo = (index: number) => {
    setPage([index, index > page ? 1 : -1]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4800);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <div className="group relative">
      {/* Outer glow ring */}
      <div className="pointer-events-none absolute -inset-px z-10 rounded-[28px] bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/10 blur-md" />

      {/* Frame container */}
      <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-black/30 aspect-[4/3] shadow-2xl shadow-black/40">

        {/* Inner neon ring */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-[24px] ring-1 ring-inset ring-brand-primary/20" />

        {/* Corner brackets */}
        <div className="pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-brand-primary/70" />
        <div className="pointer-events-none absolute right-3 top-3 z-20 h-5 w-5 rounded-tr-lg border-r-2 border-t-2 border-brand-primary/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 z-20 h-5 w-5 rounded-bl-lg border-b-2 border-l-2 border-brand-primary/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 z-20 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-brand-primary/70" />

        {/* Slides */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[page].src}
              alt={SLIDES[page].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority={page === 0}
            />
            {/* Bottom scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Prev arrow */}
        <button
          onClick={() => paginate(-1)}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-200 hover:border-brand-primary/50 hover:bg-brand-primary/20 hover:text-brand-primary group-hover:opacity-100"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Next arrow */}
        <button
          onClick={() => paginate(1)}
          aria-label="Próxima foto"
          className="absolute right-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-200 hover:border-brand-primary/50 hover:bg-brand-primary/20 hover:text-brand-primary group-hover:opacity-100"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para foto ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === page
                  ? "h-1.5 w-6 bg-brand-primary shadow-[0_0_8px_rgba(13,223,129,0.7)]"
                  : "h-1.5 w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute bottom-4 right-12 z-30 rounded-full border border-white/15 bg-black/50 px-2.5 py-0.5 text-xs font-semibold tracking-widest text-slate-300 backdrop-blur-sm">
          {page + 1}/{SLIDES.length}
        </div>
      </div>
    </div>
  );
}
