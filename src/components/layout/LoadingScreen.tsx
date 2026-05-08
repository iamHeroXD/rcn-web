"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., waiting for Three.js assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rcn-black"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rcn-purple to-rcn-cyan flex items-center justify-center animate-pulse">
              <span className="text-white text-xl font-black">R</span>
            </div>
            <span className="text-3xl font-bold text-white tracking-tighter">RCN</span>
          </div>
          
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3, y: 0 }}
                animate={{ opacity: 1, y: -10 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
                className="w-3 h-3 rounded-full bg-rcn-cyan shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
