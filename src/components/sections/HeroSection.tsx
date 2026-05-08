"use client";

import { Canvas } from "@react-three/fiber";
import { NetworkSphere } from "@/components/3d/NetworkSphere";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Suspense } from "react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Suspense fallback={<div className="w-full h-full bg-rcn-black" />}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <NetworkSphere />
          </Canvas>
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }} // delay after loading screen
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-8 border-rcn-cyan/30 border">
            <span className="w-2 h-2 rounded-full bg-rcn-cyan animate-pulse"></span>
            <span className="text-sm font-medium text-rcn-cyan">RCN v2.0 is live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-glow">
            RCN — Real <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">
              Connection Network
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 h-8"
        >
          <TypeAnimation
            sequence={[
              "Find Jobs.",
              1000,
              "Hire Talent.",
              1000,
              "Build Faster.",
              1000,
              "Automate Everything.",
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
          <Button href="#" variant="glow" size="lg" className="w-full sm:w-auto">
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
