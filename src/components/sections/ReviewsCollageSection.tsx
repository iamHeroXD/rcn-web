"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { id: 2, src: "/reviews/review 2.png", x: "-10%", y: "0%", rotate: -5, scale: 0.9 },
  { id: 3, src: "/reviews/review 3.png", x: "15%", y: "-10%", rotate: 5, scale: 1.1 },
  { id: 4, src: "/reviews/review 4.png", x: "-5%", y: "20%", rotate: -2, scale: 1.0 },
  // Adding placeholders for more if they existed, but user provided 2, 3, 4
];

export function ReviewsCollageSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".review-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-rcn-black/50">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">Trust</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real feedback from community owners and developers using RCN Prime daily.
          </p>
        </div>

        <div className="relative min-h-[600px] flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                className="review-card relative glassmorphism p-2 rounded-xl border border-white/10 shadow-2xl transition-all"
                style={{
                  transform: `rotate(${review.rotate}deg) scale(${review.scale})`,
                }}
              >
                <div className="absolute inset-0 bg-rcn-purple/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <img 
                  src={review.src} 
                  alt={`Review ${review.id}`} 
                  className="rounded-lg max-w-full h-auto"
                />
              </motion.div>
            ))}
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
