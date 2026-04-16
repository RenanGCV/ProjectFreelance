"use client";

import { motion, useReducedMotion } from "framer-motion";

interface FloatingBadgeProps {
  icon: string;
  text: string;
  delay?: number;
  side?: "left" | "right";
  yOffset?: number;
}

export function FloatingBadge({
  icon,
  text,
  delay = 0,
  side = "right",
  yOffset = 0,
}: FloatingBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "right" ? 24 : -24, y: yOffset + 8 }}
      animate={{ opacity: 1, x: 0, y: yOffset }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none transform-gpu"
      style={{ willChange: "transform" }}
    >
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
        transition={{
          duration: 4 + delay,
          delay: delay + 0.8,
          ease: [0.42, 0, 0.58, 1],
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="glass-border inline-flex items-center gap-2.5 rounded-full bg-white/5 px-4 py-2.5 backdrop-blur-sm"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/20 text-xs font-bold text-brand-primary">
          {icon}
        </span>
        <span className="text-sm font-medium text-slate-100">{text}</span>
      </motion.div>
    </motion.div>
  );
}
