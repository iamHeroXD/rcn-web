"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate as it gets closer
        const increment = prev < 60 ? 4 : prev < 85 ? 3 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rcn-black overflow-hidden"
        >
          {/* Cyber grid background */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-rcn-cyan/40 to-transparent"
              style={{ animation: "scanLine 2s linear infinite" }}
            />
          </div>

          {/* Subtle radial glow behind logo */}
          <div className="absolute w-[400px] h-[400px] bg-rcn-purple/10 blur-[120px] rounded-full" />
          <div className="absolute w-[300px] h-[300px] bg-rcn-cyan/5 blur-[100px] rounded-full translate-y-10" />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Pulse rings behind logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border border-rcn-purple/20" style={{ animation: "pulseRing 2s ease-out infinite" }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border border-rcn-cyan/15" style={{ animation: "pulseRing 2s ease-out infinite 0.5s" }} />
            </div>
            
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)] relative">
              <Image 
                src="/logo.jpeg" 
                alt="RCN Logo" 
                width={96} 
                height={96} 
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
          
          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="text-3xl font-bold text-white tracking-tighter">RCN</span>
            <span className="text-3xl font-light text-gray-500 tracking-tighter">Prime</span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "200px" }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="relative"
          >
            <div className="w-[200px] h-[3px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-rcn-purple via-rcn-cyan to-rcn-purple rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs font-mono text-gray-500 tracking-widest">
                INITIALIZING<span className="animate-cursor-blink">_</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
