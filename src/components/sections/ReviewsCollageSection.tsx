"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  { id: 2, src: "/reviews/review 2.png", username: "清", rating: "10/10", preview: "I asked for a portfolio website pretty clean and very professional I recommend buying 👍" },
  { id: 3, src: "/reviews/review 3.png", username: "NotScriptedPro", rating: "8/10", preview: "Service the website looks very cool and the service is very cheap not that expensive!" },
  { id: 4, src: "/reviews/review 4.png", username: "Anonymous", rating: "9/10", preview: "I asked for a website and was delivered it in under a day, it also looks sleek and professional" },
];

export function ReviewsCollageSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-rcn-black/50">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">Trust</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real feedback from community owners and developers using RCN Prime daily.
          </p>
        </div>

        {/* Terminal frame wrapping all reviews */}
        <div className="terminal-frame max-w-4xl mx-auto">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="text-xs text-gray-500 ml-3 font-mono">rcn-reviews --verified</span>
          </div>
          
          <div className="p-6 space-y-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* Discord-style message card */}
                <div className="bg-[#2f3136] rounded-xl overflow-hidden border border-[#202225] hover:border-rcn-purple/30 transition-all group">
                  {/* Message header */}
                  <div className="px-5 py-3 flex items-center gap-3 border-b border-[#202225]/50">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rcn-purple to-rcn-cyan flex items-center justify-center text-xs font-bold text-white">
                      {review.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">{review.username}</span>
                      <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full font-medium">Verified Buyer</span>
                    </div>
                    <span className="ml-auto text-xs text-yellow-400 font-bold">{review.rating}</span>
                  </div>
                  
                  {/* Review screenshot - displayed large & clear */}
                  <div className="px-5 py-4">
                    <div className="rounded-lg overflow-hidden border border-white/5 bg-black/30">
                      <Image
                        src={review.src}
                        alt={`Review from ${review.username}`}
                        width={800}
                        height={200}
                        className="w-full h-auto object-contain"
                        style={{ imageRendering: "auto" }}
                      />
                    </div>
                    <p className="text-gray-400 text-sm mt-3 italic">&quot;{review.preview}&quot;</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Terminal footer */}
            <div className="flex items-center gap-1 text-gray-600 text-xs font-mono pt-2">
              <span className="text-green-400">✓</span>
              <span>{reviews.length} verified reviews loaded</span>
              <span className="ml-auto text-gray-700">All reviews are from real Discord users</span>
            </div>
          </div>
        </div>

        {/* Floating background decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-rcn-cyan/5 blur-[80px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-rcn-purple/5 blur-[80px] rounded-full pointer-events-none"
        />
      </div>
    </section>
  );
}
