"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SupportDonationSection() {
  const goal = 5000;
  const current = 3250;
  const percentage = Math.min(100, Math.round((current / goal) * 100));

  return (
    <section className="py-24 relative bg-black/40 border-y border-white/5">
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
            <Button variant="glow" className="bg-pink-600 hover:bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)] border-pink-500">
              Donate via UPI / Razorpay
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5">
              Support with Robux
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
