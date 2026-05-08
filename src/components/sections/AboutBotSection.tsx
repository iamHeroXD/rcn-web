"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/Card";
import { Bot, BellRing, Filter, Coins, ShieldCheck, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Bot className="text-rcn-purple w-8 h-8" />,
    title: "Smart Job Matching",
    description: "Get notified instantly when a job matches your specific developer skills and rate."
  },
  {
    icon: <BellRing className="text-rcn-cyan w-8 h-8" />,
    title: "Real-time Alerts",
    description: "Never miss an opportunity with our sub-second Discord notification system."
  },
  {
    icon: <Coins className="text-yellow-400 w-8 h-8" />,
    title: "RCN Coin Integration",
    description: "Earn and spend coins directly through Discord commands to boost your visibility."
  },
  {
    icon: <Filter className="text-rcn-blue w-8 h-8" />,
    title: "Auto Filtering System",
    description: "Advanced AI-driven filtering removes spam and low-quality job postings."
  }
];

const commands = [
  { cmd: "/jobs view", desc: "View all available jobs tailored to your tech stack." },
  { cmd: "/balance", desc: "Check your current RCN coin balance and transaction history." },
  { cmd: "/hire", desc: "Post a new job requirement directly from Discord." },
  { cmd: "/boost", desc: "Spend RCN coins to boost your profile to the top of the list." },
];

export function AboutBotSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCmd, setActiveCmd] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mockup floating animation
      gsap.to(".bot-mockup", {
        y: -20,
        rotationZ: 1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Cards stagger reveal
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);
    
    // Command cycler
    const interval = setInterval(() => {
      setActiveCmd((prev) => (prev + 1) % commands.length);
    }, 3000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="bot" ref={sectionRef} className="py-24 relative bg-black/80 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-rcn-purple to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">RCN Bot</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our custom Discord bot automates the entire hiring process. Manage jobs, coins, and profiles without ever leaving the server.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Mockup */}
          <div className="bot-mockup relative perspective-1000">
            <div className="absolute inset-0 bg-rcn-purple/20 blur-[100px] rounded-full"></div>
            <div className="relative glassmorphism rounded-2xl border border-white/10 p-2 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg]">
              <div className="bg-[#36393f] rounded-xl overflow-hidden border border-[#202225]">
                {/* Discord UI Header */}
                <div className="bg-[#2f3136] px-4 py-3 flex items-center gap-3 border-b border-[#202225]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rcn-purple to-rcn-cyan flex items-center justify-center">
                    <span className="text-white text-xs font-bold">RCN</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">RCN Bot</span>
                      <span className="bg-[#5865F2] text-white text-[10px] px-1 rounded flex items-center gap-1">
                        <ShieldCheck size={10} /> BOT
                      </span>
                    </div>
                  </div>
                </div>
                {/* Discord UI Body */}
                <div className="p-4 space-y-4">
                  <div className="bg-[#2f3136] rounded-md p-3 border-l-4 border-rcn-cyan">
                    <p className="text-gray-300 text-sm mb-2">
                      <strong className="text-white">🚀 New Job Posted!</strong>
                    </p>
                    <p className="text-white font-semibold">Senior Frontend Developer (Next.js)</p>
                    <p className="text-gray-400 text-xs mt-1">Budget: $2,000 • Tags: React, Tailwind</p>
                    <div className="mt-3 flex gap-2">
                      <button className="bg-[#5865F2] text-white text-xs px-3 py-1.5 rounded hover:bg-[#4752C4]">Apply Now</button>
                    </div>
                  </div>
                  
                  {/* Command Simulation */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                      <img src="https://i.pravatar.cc/150?img=11" className="w-6 h-6 rounded-full" alt="User" />
                      <span className="font-semibold text-white">Alex Dev</span>
                      <span>used</span>
                      <span className="text-rcn-cyan font-mono bg-rcn-cyan/10 px-1 rounded">{commands[activeCmd].cmd}</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCmd}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-[#2f3136] rounded-md p-3 border-l-4 border-rcn-purple text-sm text-gray-300"
                      >
                        {commands[activeCmd].desc}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
              >
                <Card glowOnHover className="flex gap-4 items-start group">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Command Showcase Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-2xl p-8 border border-white/10 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rcn-purple/10 to-rcn-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Command className="w-12 h-12 text-white/50 mx-auto mb-4 group-hover:text-rcn-cyan transition-colors" />
          <h3 className="text-2xl font-bold text-white mb-4">Powerful Slash Commands</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {commands.map((c, i) => (
              <span key={i} className="font-mono text-sm px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-rcn-cyan group-hover:border-rcn-cyan/30 transition-colors">
                {c.cmd}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
