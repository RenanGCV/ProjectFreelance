"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.6 });

  const spring = useSpring(0, { stiffness: 55, damping: 20, restDelta: 0.5 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={inViewRef} className="relative block">
      <motion.span ref={ref} className="stat-number block text-4xl font-extrabold sm:text-5xl">
        {display}
      </motion.span>
    </span>
  );
}

export function StatsCounter({ stats }: { stats: StatItem[] }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center gap-1.5 bg-background/60 px-4 py-6 text-center backdrop-blur-sm sm:px-6"
          >
            <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            <p className="text-xs font-medium text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
