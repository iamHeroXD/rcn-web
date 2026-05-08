"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Clock, Shield } from "lucide-react";

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

const stats = [
  { icon: <Users className="w-5 h-5" />, value: 50000, suffix: "+", label: "Members", color: "text-rcn-purple" },
  { icon: <Briefcase className="w-5 h-5" />, value: 10000, suffix: "+", label: "Jobs Posted", color: "text-rcn-cyan" },
  { icon: <Clock className="w-5 h-5" />, value: 99.9, suffix: "%", label: "Uptime", color: "text-green-400", isDecimal: true },
  { icon: <Shield className="w-5 h-5" />, value: 24, suffix: "/7", label: "Support", color: "text-yellow-400" },
];

function StatCard({ icon, value, suffix, label, color, isDecimal }: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
  isDecimal?: boolean;
}) {
  const { count, ref } = useCountUp(isDecimal ? Math.floor(value * 10) : value);
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count.toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className={`${color} mb-3 p-2 rounded-lg bg-white/5 border border-white/5`}>
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1">
        {displayValue}<span className={color}>{suffix}</span>
      </div>
      <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="terminal-frame">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="text-xs text-gray-500 ml-3 font-mono">rcn-stats --live</span>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              LIVE
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
