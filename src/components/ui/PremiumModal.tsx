"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

export function PremiumModal({ isOpen, onClose, planName }: PremiumModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [discordUsername, setDiscordUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (discordUsername) {
      setStep("success");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glassmorphism rounded-2xl border border-white/10 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {step === "form" ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2">Upgrade to {planName}</h3>
                  <p className="text-gray-400 text-sm mb-8">
                    To start your subscription, provide your Discord username. Our team will contact you manually to finalize the setup.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Discord Username
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. username#1234 or @username"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rcn-purple transition-colors"
                        value={discordUsername}
                        onChange={(e) => setDiscordUsername(e.target.value)}
                      />
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                      <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">How it works:</h4>
                      <ul className="text-xs text-gray-400 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-rcn-purple/20 text-rcn-purple flex items-center justify-center">1</span>
                          Submit this request
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-rcn-purple/20 text-rcn-purple flex items-center justify-center">2</span>
                          Our team checks and contacts you on Discord
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-rcn-purple/20 text-rcn-purple flex items-center justify-center">3</span>
                          Finalize payment via secure portal
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-rcn-purple/20 text-rcn-purple flex items-center justify-center">4</span>
                          Receive your premium roles & perks
                        </li>
                      </ul>
                    </div>

                    <Button type="submit" variant="glow" className="w-full">
                      <Send size={18} className="mr-2" />
                      Submit Request
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                  <p className="text-gray-400 mb-8">
                    Thank you, <span className="text-white font-semibold">{discordUsername}</span>. Our team will contact you on Discord within 24 hours.
                  </p>
                  <Button onClick={onClose} variant="outline" className="w-full">
                    Close Window
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
