"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`relative py-4 ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-rcn-purple/40 to-transparent max-w-4xl mx-auto"
      />
      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-rcn-purple/60 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
      />
    </div>
  );
}
