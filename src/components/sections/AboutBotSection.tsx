"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/Card";
import { Bot, BellRing, Filter, Coins, ShieldCheck, Command, Zap, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Bot className="text-rcn-purple w-8 h-8" />,
    title: "Automate Communities",
    description: "Help Discord servers run smoothly without manual effort via auto moderation, role systems, and event handling."
  },
  {
    icon: <Coins className="text-yellow-400 w-8 h-8" />,
    title: "Build Digital Economy",
    description: "Introduce RCN Coins to gamify engagement, enable rewards, and participate in server-based economy systems."
  },
  {
    icon: <Zap className="text-rcn-cyan w-8 h-8" />,
    title: "Smart Bot Infrastructure",
    description: "Modular, scalable, and event-driven core handling transactions, user tracking, and utility functions."
  },
  {
    icon: <ShieldCheck className="text-rcn-blue w-8 h-8" />,
    title: "Security-First Design",
    description: "Safe command pipelines, input validation, and stability protection ensuring system resistance to abuse."
  }
];

const principles = [
  { title: "Stability First", desc: "No crashes, no unstable systems — everything is production-hardened." },
  { title: "Security First", desc: "Every action is validated, logged, and controlled via a safe pipeline." },
  { title: "Scalability", desc: "Designed to handle multiple servers and massive global communities." },
  { title: "Automation", desc: "Reduce manual work, maximize system intelligence across your server." },
];

const commands = [
  { cmd: "/balance", desc: "Check your current RCN coin balance and transaction history." },
  { cmd: "/hire", desc: "Post a new job requirement directly from Discord." },
  { cmd: "/boost", desc: "Spend RCN coins to boost your profile to the top of the list." },
  { cmd: "/profile", desc: "View your user profile, badges, and activity tracking stats." },
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
          <div className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs mb-4 uppercase tracking-widest">
            Formerly Hustlehub
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">RCN Prime</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            RCN Prime is a secure automation and digital infrastructure system built for scalability, control, and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
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
                      <strong className="text-white">💠 Economy Update</strong>
                    </p>
                    <p className="text-white font-semibold">User @AlexDev earned 500 RCN Coins!</p>
                    <p className="text-gray-400 text-xs mt-1">Reason: Activity Bonus • Balance: 12,450</p>
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

          {/* Right: Features (The 4 Pillars) */}
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
                    <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* The 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-rcn-purple/30 transition-all group"
            >
              <h4 className="text-rcn-purple font-bold mb-2 group-hover:text-rcn-cyan transition-colors">{p.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision/Summary Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-3xl p-12 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rcn-purple/10 to-rcn-cyan/10 opacity-30"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">A digital operating system for Discord servers.</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              RCN aims to become a full ecosystem for managing Discord communities through automation, economy systems, and secure backend control panels. Everything is production-hardened, validated, and designed to handle massive scale.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-rcn-cyan font-semibold">
                <Check className="w-4 h-4" /> Stability First
              </div>
              <div className="flex items-center gap-2 text-rcn-cyan font-semibold">
                <Check className="w-4 h-4" /> Security-First
              </div>
              <div className="flex items-center gap-2 text-rcn-cyan font-semibold">
                <Check className="w-4 h-4" /> Modular & Scalable
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
