"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <div
      className="absolute rounded-full bg-rcn-purple/30"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        animation: `particleFloat ${4 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* CSS animated background instead of Three.js */}
      <div className="absolute inset-0 z-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 gradient-mesh" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        
        {/* Floating particles */}
        <FloatingParticle delay={0} x="10%" y="20%" size={4} />
        <FloatingParticle delay={1.5} x="85%" y="15%" size={3} />
        <FloatingParticle delay={0.8} x="70%" y="60%" size={5} />
        <FloatingParticle delay={2} x="25%" y="75%" size={3} />
        <FloatingParticle delay={1} x="50%" y="30%" size={4} />
        <FloatingParticle delay={2.5} x="15%" y="55%" size={6} />
        <FloatingParticle delay={0.5} x="90%" y="45%" size={3} />
        <FloatingParticle delay={1.8} x="40%" y="85%" size={4} />
        <FloatingParticle delay={3} x="60%" y="10%" size={5} />
        <FloatingParticle delay={0.3} x="35%" y="40%" size={3} />

        {/* Large ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rcn-purple/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rcn-cyan/5 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Floating logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Glow ring */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-rcn-purple/20 to-rcn-cyan/20 blur-lg" />
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <Image src="/logo.jpeg" alt="RCN" width={80} height={80} className="object-cover w-full h-full" priority />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-8 border-rcn-cyan/30 border">
            <span className="w-2 h-2 rounded-full bg-rcn-cyan animate-pulse"></span>
            <span className="text-sm font-medium text-rcn-cyan">RCN Prime is live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-glow">
            RCN Prime — The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">
              Digital OS for Discord
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6">
            Secure automation, virtual economy systems, and robust infrastructure designed to scale your community effortlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 h-8"
        >
          <TypeAnimation
            sequence={[
              "Automate Communities.",
              1000,
              "Build Virtual Economies.",
              1000,
              "Smart Infrastructure.",
              1000,
              "Security First.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <Button href="https://discord.gg/8gYnm86Nym" variant="glow" size="lg" className="w-full sm:w-auto">
            Join RCN Server
          </Button>
          <Button href="#bot" variant="glass" size="lg" className="w-full sm:w-auto">
            Explore Bot
          </Button>
          <Button href="#coins" variant="outline" size="lg" className="w-full sm:w-auto border-rcn-purple/50 hover:bg-rcn-purple/10">
            Buy RCN Coins
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-rcn-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}
