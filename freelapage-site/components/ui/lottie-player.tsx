"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LOTTIE_SRC =
  "https://lottie.host/bdacc697-a7ba-4819-954f-1ec0d7fc475e/5BP2vhjdsu.lottie";

/**
 * Lottie em modo autoplay + loop para uso inline na página.
 * Fundo transparente — integra diretamente ao gradiente da página.
 */
export function LottiePlayer({ className, src = LOTTIE_SRC }: { className?: string, src?: string }) {
  return (
    <div className={className}>
      <DotLottieReact
        src={src}
        autoplay
        loop
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
