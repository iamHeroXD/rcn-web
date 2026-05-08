"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

export function PremiumModal({ isOpen, onClose, planName }: PremiumModalProps) {
  const [step, setStep] = useState<"form" | "submitting" | "success" | "error">("form");
  const [discordUsername, setDiscordUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!discordUsername) return;

    setStep("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "9378e1bf-ceaf-4c42-8882-fb91297b0f41");
    formData.append("subject", `Premium Subscription Request: ${planName}`);
    formData.append("plan", planName);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStep("success");
      } else {
        setStep("error");
      }
    } catch {
      setStep("error");
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setStep("form");
      setDiscordUsername("");
    }, 300);
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
            onClick={handleClose}
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
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {step === "form" || step === "submitting" ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2">Upgrade to {planName}</h3>
                  <p className="text-gray-400 text-sm mb-8">
                    To start your subscription, provide your Discord username. Our team will contact you manually to finalize the setup.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <input type="checkbox" name="botcheck" className="hidden" />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Discord Username
                      </label>
                      <input
                        type="text"
                        name="discord_username"
                        required
                        placeholder="e.g. username#1234 or @username"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rcn-purple transition-colors"
                        value={discordUsername}
                        onChange={(e) => setDiscordUsername(e.target.value)}
                      />
                    </div>

                    {/* Hidden fields for Web3Forms context */}
                    <input type="hidden" name="from_name" value="RCN Website - Premium" />
                    <input type="hidden" name="plan_name" value={planName} />

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

                    <Button type="submit" variant="glow" className="w-full" disabled={step === "submitting"}>
                      {step === "submitting" ? (
                        <>
                          <Loader2 size={18} className="mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Submit Request
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : step === "success" ? (
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
                  <Button onClick={handleClose} variant="outline" className="w-full">
                    Close Window
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <X size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Something Went Wrong</h3>
                  <p className="text-gray-400 mb-8">
                    Please try again or contact us directly on Discord.
                  </p>
                  <div className="flex gap-3">
                    <Button onClick={() => setStep("form")} variant="outline" className="flex-1">
                      Try Again
                    </Button>
                    <Button onClick={handleClose} variant="glow" className="flex-1">
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
