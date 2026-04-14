"use client";

import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef, useState } from "react";

const LOTTIE_SRC =
  "https://lottie.host/bdacc697-a7ba-4819-954f-1ec0d7fc475e/5BP2vhjdsu.lottie";

export function ScrollFrameAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const rafRef = useRef<number | null>(null);

  /* Callback chamado quando o DotLottie instance está disponível */
  const onDotLottieReady = (dl: DotLottie) => {
    dotLottieRef.current = dl;

    dl.addEventListener("load", () => {
      dl.pause();
      setReady(true);
    });
  };

  /* Scroll → scrub do frame */
  useEffect(() => {
    const calc = () => {
      const el = containerRef.current;
      const dl = dotLottieRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));

      setProgress(p);

      if (dl && ready) {
        /* totalFrames pode variar; setFrame espera valor absoluto */
        const frame = p * (dl.totalFrames ?? 60);
        dl.setFrame(frame);
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(calc);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    calc();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready]);

  return (
    /*
     * Container de 300vh → o sticky fica ativo por 200vh de scroll.
     * O usuário "rola" por 200vh enquanto a animação fica fixada.
     */
    <div ref={containerRef} aria-hidden style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden pointer-events-none">

        {/* Label — aparece após o primeiro pixel de scroll */}
        <p
          className="mb-2 text-[10px] uppercase tracking-[0.28em] text-brand-primary/50 transition-opacity duration-500"
          style={{ opacity: progress > 0.03 ? 1 : 0 }}
        >
          Transformando ideias em soluções reais
        </p>

        {/*
          A animação Lottie já tem fundo transparente por padrão.
          Sem border, sem card — integrada diretamente ao gradiente da página.
        */}
        <div
          className="transition-opacity duration-700"
          style={{
            width: "min(80vw, 560px)",
            opacity: ready ? 1 : 0,
          }}
        >
          <DotLottieReact
            src={LOTTIE_SRC}
            dotLottieRefCallback={onDotLottieReady}
            autoplay={false}
            loop={false}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Barra de progresso + indicador */}
        <div
          className="mt-6 flex flex-col items-center gap-3 transition-opacity duration-500"
          style={{ opacity: progress < 0.95 ? 1 : 0 }}
        >
          <div className="h-px w-40 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-brand-primary"
              style={{ width: `${progress * 100}%`, transition: "width 0s" }}
            />
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/25">
              Role para continuar
            </span>
            <svg
              className="animate-bounce text-brand-primary/40"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M7 1v12M2 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
