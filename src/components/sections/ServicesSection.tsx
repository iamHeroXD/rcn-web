"use client";

import { motion } from "framer-motion";
import { Code, Bot, PenTool, Zap, Settings } from "lucide-react";
import { Card } from "@/components/ui/Card";

const services = [
  {
    icon: <Code className="w-8 h-8 text-rcn-blue" />,
    title: "Web Portfolio Development",
    description: "Custom, high-performance portfolios built with Next.js and Three.js to showcase your work.",
  },
  {
    icon: <Bot className="w-8 h-8 text-rcn-purple" />,
    title: "Discord Bot Development",
    description: "Tailored Discord bots for moderation, economy systems, and community engagement.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-pink-500" />,
    title: "UI/UX Design",
    description: "Premium SaaS and Web3 interfaces designed in Figma with high conversion rates in mind.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Automation Tools",
    description: "Custom scripts and internal tools to automate your workflow and save hours of manual work.",
  },
  {
    icon: <Settings className="w-8 h-8 text-gray-400" />,
    title: "Freelance Setup Assistance",
    description: "Guidance on setting up your freelance business, contracts, and payment gateways.",
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card glowOnHover className="h-full group cursor-pointer border-white/5 bg-white/5">
                <div className="mb-4 p-3 rounded-lg bg-white/5 inline-block group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="h-full flex flex-col items-center justify-center text-center border-rcn-cyan/30 bg-rcn-cyan/5 hover:bg-rcn-cyan/10 transition-colors cursor-pointer border-dashed">
              <h3 className="text-xl font-semibold text-rcn-cyan mb-2">Request Custom Service</h3>
              <p className="text-gray-400 text-sm mb-4">Have a unique idea? Let's talk.</p>
              <span className="text-white text-sm font-medium hover:underline">Contact Sales &rarr;</span>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
