"use client";

import { useEffect, useRef } from "react";

export function AnimatedWaveBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawLayer = (
      time: number,
      baseY: number,
      amplitude: number,
      freq: number,
      speed: number,
      alpha: number,
      color: string,
      phaseOffset: number,
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 8) {
        const y =
          baseY +
          Math.sin(x * freq + time * speed + phaseOffset) * amplitude +
          Math.sin(x * (freq * 0.55) - time * (speed * 0.6) + phaseOffset * 0.7) * (amplitude * 0.45);
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.fill();
    };

    const render = (timestamp: number) => {
      const time = timestamp * 0.001;
      ctx.clearRect(0, 0, width, height);

      // Camadas de ondas com fases e frequencias distintas para um movimento organico.
      drawLayer(time, height * 0.68, 36, 0.012, 1.7, 0.22, "#1aa76f", 0.2);
      drawLayer(time, height * 0.73, 42, 0.009, 1.2, 0.18, "#0ddf81", 1.6);
      drawLayer(time, height * 0.79, 30, 0.014, 2.1, 0.12, "#2fa98c", 2.7);

      ctx.globalAlpha = 1;
      animationId = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationId = window.requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId) window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <canvas ref={canvasRef} className="h-full w-full scale-105 opacity-60 blur-[8px]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_80%,rgba(13,223,129,0.22),transparent_75%)] blur-3xl" />
    </div>
  );
}
