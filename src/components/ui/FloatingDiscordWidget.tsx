"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./Button";

export function FloatingDiscordWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 5000); // Show tooltip 5 seconds after load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-[#2f3136] border border-[#202225] rounded-xl shadow-2xl overflow-hidden w-[300px]"
          >
            <div className="bg-[#5865F2] p-4 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white/70 hover:text-white"
              >
                <X size={16} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">RCN</div>
                <div>
                  <h4 className="font-bold">Join RCN Server</h4>
                  <p className="text-xs text-white/80">15,420 Online</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-300 mb-4">
                Get access to exclusive developer jobs, premium bot commands, and a community of 50,000+ builders.
              </p>
              <Button href="https://discord.gg/8gYnm86Nym" target="_blank" rel="noopener noreferrer" variant="glow" className="w-full bg-[#5865F2] hover:bg-[#4752C4] shadow-none border-none">
                Accept Invite
              </Button>
            </div>
          </motion.div>
        )}

        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="mb-4 bg-rcn-purple text-white px-4 py-2 rounded-lg text-sm font-medium shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center gap-2"
          >
            Join the community! 🚀
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#5865F2] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(88,101,242,0.5)] hover:shadow-[0_0_30px_rgba(88,101,242,0.8)] transition-shadow"
      >
        <MessageSquare size={24} />
      </motion.button>
    </div>
  );
}
