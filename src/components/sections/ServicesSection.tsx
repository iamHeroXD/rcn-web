"use client";

import { motion } from "framer-motion";
import { Code, Bot, PenTool, Zap, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Code className="w-5 h-5 text-rcn-blue" />,
    title: "Web Portfolio Development",
    description: "Custom, high-performance portfolios built with Next.js and Three.js to showcase your work.",
    cmd: "web-dev",
  },
  {
    icon: <Bot className="w-5 h-5 text-rcn-purple" />,
    title: "Discord Bot Development",
    description: "Tailored Discord bots for moderation, economy systems, and community engagement.",
    cmd: "bot-dev",
  },
  {
    icon: <PenTool className="w-5 h-5 text-pink-500" />,
    title: "UI/UX Design",
    description: "Premium SaaS and Web3 interfaces designed in Figma with high conversion rates in mind.",
    cmd: "ui-design",
  },
  {
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    title: "Automation Tools",
    description: "Custom scripts and internal tools to automate your workflow and save hours of manual work.",
    cmd: "automation",
  },
  {
    icon: <Settings className="w-5 h-5 text-gray-400" />,
    title: "Freelance Setup Assistance",
    description: "Guidance on setting up your freelance business, contracts, and payment gateways.",
    cmd: "freelance",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-rcn-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-blue to-rcn-purple">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Need something custom? Our top-tier developers and designers are available for hire.
          </p>
        </div>

        {/* Terminal frame around services */}
        <div className="terminal-frame max-w-5xl mx-auto">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="text-xs text-gray-500 ml-3 font-mono">$ rcn services --list --available</span>
          </div>
          
          <div className="p-6 space-y-3">
            {/* Terminal output header */}
            <div className="text-xs font-mono text-gray-500 mb-4 border-b border-white/5 pb-3">
              <span className="text-green-400">→</span> Found {services.length} active services:
            </div>

            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-rcn-purple/30 hover:bg-white/[0.04] transition-all cursor-pointer">
                  {/* Service index */}
                  <div className="text-xs font-mono text-gray-600 mt-1 w-6 shrink-0">[{String(idx + 1).padStart(2, '0')}]</div>
                  
                  {/* Icon */}
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors shrink-0">
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-semibold text-base">{service.title}</h3>
                      <span className="text-[10px] font-mono text-rcn-cyan bg-rcn-cyan/10 px-2 py-0.5 rounded">--{service.cmd}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  {/* Arrow */}
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-rcn-purple group-hover:translate-x-1 transition-all mt-2 shrink-0" />
                </div>
              </motion.div>
            ))}

            {/* Custom service CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="flex items-center gap-4 p-4 rounded-lg border border-dashed border-rcn-cyan/30 bg-rcn-cyan/5 hover:bg-rcn-cyan/10 transition-all cursor-pointer group mt-2">
                <div className="text-xs font-mono text-gray-600 w-6 shrink-0">[++]</div>
                <div className="flex-grow">
                  <h3 className="text-rcn-cyan font-semibold text-base mb-0.5">Request Custom Service</h3>
                  <p className="text-gray-400 text-sm">Have a unique idea? Let&apos;s talk.</p>
                </div>
                <span className="text-rcn-cyan text-sm font-medium group-hover:underline">Contact Sales →</span>
              </div>
            </motion.div>

            {/* Terminal footer */}
            <div className="flex items-center gap-1 text-gray-600 text-xs font-mono pt-3 border-t border-white/5 mt-4">
              <span className="animate-cursor-blink">█</span>
              <span>Ready to accept new orders...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
