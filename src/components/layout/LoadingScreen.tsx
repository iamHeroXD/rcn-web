"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rcn-black"
        >
          {/* Minimal ambient glow */}
          <div className="absolute w-[300px] h-[300px] bg-rcn-purple/8 blur-[100px] rounded-full" />

          {/* Logo + text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Logo */}
            <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 mb-6 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <Image
                src="/logo.jpeg"
                alt="RCN Logo"
                width={64}
                height={64}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Brand */}
            <div className="flex items-center gap-1.5 mb-8">
              <span className="text-2xl font-bold text-white tracking-tight">RCN</span>
              <span className="text-2xl font-light text-gray-600 tracking-tight">Prime</span>
            </div>

            {/* Clean minimal loader line */}
            <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-rcn-purple to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
