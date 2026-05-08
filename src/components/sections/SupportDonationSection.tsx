"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CheckCircle2, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

function DonationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<"form" | "submitting" | "success" | "error">("form");
  const [name, setName] = useState("");
  const [discordUsername, setDiscordUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("UPI");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "9378e1bf-ceaf-4c42-8882-fb91297b0f41");
    formData.append("subject", `Donation Intent: ${amount} via ${method}`);

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
    setTimeout(() => {
      setStep("form");
      setName("");
      setDiscordUsername("");
      setAmount("");
      setMethod("UPI");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glassmorphism rounded-2xl border border-white/10 overflow-hidden"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>

            <div className="p-8">
              {(step === "form" || step === "submitting") && (
                <>
                  <Heart className="w-10 h-10 text-pink-500 mx-auto mb-4 fill-pink-500/20" />
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">Support RCN</h3>
                  <p className="text-gray-400 text-sm mb-6 text-center">
                    Tell us how you&apos;d like to donate and we&apos;ll reach out with payment details.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="checkbox" name="botcheck" className="hidden" />
                    <input type="hidden" name="from_name" value="RCN Website - Donation" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors text-sm"
                    />
                    <input
                      type="text"
                      name="discord_username"
                      required
                      placeholder="Discord username"
                      value={discordUsername}
                      onChange={(e) => setDiscordUsername(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors text-sm"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="amount"
                        required
                        placeholder="Amount (e.g. ₹500)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors text-sm"
                      />
                      <select
                        name="payment_method"
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors text-sm appearance-none"
                      >
                        <option value="UPI" className="bg-rcn-dark">UPI</option>
                        <option value="Razorpay" className="bg-rcn-dark">Razorpay</option>
                        <option value="Robux" className="bg-rcn-dark">Robux</option>
                        <option value="Other" className="bg-rcn-dark">Other</option>
                      </select>
                    </div>
                    <Button type="submit" variant="glow" className="w-full bg-pink-600 hover:bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)] border-pink-500" disabled={step === "submitting"}>
                      {step === "submitting" ? <><Loader2 size={16} className="mr-2 animate-spin" /> Submitting...</> : "Submit Donation Intent"}
                    </Button>
                  </form>
                </>
              )}
              {step === "success" && (
                <div className="text-center py-4">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }} className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You! 💖</h3>
                  <p className="text-gray-400 mb-6">We&apos;ll contact <span className="text-white font-semibold">{discordUsername}</span> on Discord with payment details.</p>
                  <Button onClick={handleClose} variant="outline" className="w-full">Close</Button>
                </div>
              )}
              {step === "error" && (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6"><X size={32} /></div>
                  <h3 className="text-2xl font-bold text-white mb-2">Something Went Wrong</h3>
                  <p className="text-gray-400 mb-6">Please try again or reach out on Discord.</p>
                  <div className="flex gap-3">
                    <Button onClick={() => setStep("form")} variant="outline" className="flex-1">Try Again</Button>
                    <Button onClick={handleClose} variant="glow" className="flex-1">Close</Button>
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

export function SupportDonationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const goal = 500;
  const current = 1;
  const percentage = Math.min(100, Math.round((current / goal) * 100));

  return (
    <section className="py-24 relative bg-black/40 border-y border-white/5">
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glassmorphism rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle glow behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-500/10 blur-[80px] pointer-events-none" />
          
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6 fill-pink-500/20" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Support RCN Growth
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Help us keep the servers running and develop new features. Donations go directly into paying for bot hosting, database costs, and community events.
          </p>

          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Current Funding</span>
              <span className="text-white font-bold">${current} / ${goal}</span>
            </div>
            <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden p-0.5">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-pink-600 to-pink-400 rounded-full relative"
              >
                <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse-fast" />
              </motion.div>
            </div>
            <div className="mt-2 text-right text-xs text-pink-400 font-medium">
              {percentage}% Funded
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => setIsModalOpen(true)} variant="glow" className="bg-pink-600 hover:bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)] border-pink-500">
              Donate via UPI / Razorpay
            </Button>
            <Button onClick={() => setIsModalOpen(true)} variant="outline" className="border-white/20 hover:bg-white/5">
              Support with Robux
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
