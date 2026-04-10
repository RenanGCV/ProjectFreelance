"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const cascadeParentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

const cascadeItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`${className ?? ""} transform-gpu`}
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function Cascade({
  children,
  className,
  stagger = 0.12,
  delay = 0.04,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`${className ?? ""} transform-gpu`}
      style={{ willChange: "transform, opacity" }}
      variants={{
        hidden: cascadeParentVariants.hidden,
        visible: {
          ...cascadeParentVariants.visible,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function CascadeItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`${className ?? ""} transform-gpu`}
      style={{ willChange: "transform, opacity" }}
      variants={cascadeItemVariants}
    >
      {children}
    </motion.div>
  );
}

export function Float({
  children,
  className,
  duration = 4.8,
  delay = 0,
  distance = 8,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  distance?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`${className ?? ""} transform-gpu`}
      style={{ willChange: "transform" }}
      whileInView={{ y: -distance }}
      initial={{ y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.42, 0, 0.58, 1],
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
      }}
    >
      {children}
    </motion.div>
  );
}
