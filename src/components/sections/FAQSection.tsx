"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface FAQItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ title, content, isOpen, onClick, index }: FAQItemProps) {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        className="w-full px-5 py-4 flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rcn-cyan hover:bg-white/[0.02] transition-colors"
        onClick={onClick}
      >
        <span className="text-xs font-mono text-gray-600 w-6 shrink-0">[{String(index + 1).padStart(2, '0')}]</span>
        <span className="text-xs text-rcn-cyan font-mono mr-1">{isOpen ? "▼" : "▶"}</span>
        <span className="font-medium text-white flex-grow">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="text-gray-500 w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-4 pl-16">
              <div className="text-gray-300 text-sm leading-relaxed border-l-2 border-rcn-purple/30 pl-4">
                <span className="text-xs text-gray-500 font-mono block mb-1">→ response:</span>
                {content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqItems = [
  {
    title: "What is RCN?",
    content: "RCN (Real Connection Network) is a hybrid platform combining a Discord-based job marketplace, a developer hiring system, and a Bot-driven automation ecosystem. It allows freelancers to find high-paying jobs and clients to hire top-tier talent quickly."
  },
  {
    title: "How do RCN Coins work?",
    content: "RCN Coins are our internal digital economy. You can earn them by completing jobs, referring users, or being active in our Discord. You can spend them to boost your profile visibility, access premium features, or get priority hiring status."
  },
  {
    title: "Is payment safe?",
    content: "Yes, RCN facilitates connections but payments are securely handled either through trusted escrow services or directly via our integrated payment gateways (like Stripe or Razorpay) for premium services."
  },
  {
    title: "How do I join jobs?",
    content: "Simply join our Discord server, verify your profile, and start browsing the job channels. Our Bot will automatically notify you of jobs matching your skill set."
  },
  {
    title: "What is the RCN Bot?",
    content: "The RCN Bot is a custom Discord bot that automates the ecosystem. It handles job posting, filtering, notifications, coin balances, and premium subscription access directly within Discord."
  },
  {
    title: "What happened to Hustlehub?",
    content: "Hustlehub has officially rebranded to RCN (Real Connection Network) as part of our transition into a full digital operating system for Discord. All previous accounts, coins, and data have been safely migrated to RCN Prime."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-rcn-blue/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-cyan to-rcn-blue">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about the platform and how it works.
          </p>
        </div>

        {/* Terminal-styled FAQ */}
        <div className="terminal-frame max-w-3xl mx-auto">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="text-xs text-gray-500 ml-3 font-mono">rcn-help --faq</span>
          </div>
          
          <div className="py-2">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
          
          {/* Terminal footer */}
          <div className="px-5 py-3 border-t border-white/5">
            <div className="flex items-center gap-1 text-gray-600 text-xs font-mono">
              <span className="text-green-400">✓</span>
              <span>{faqItems.length} answers loaded</span>
              <span className="ml-auto">Need more help? <a href="#contact" className="text-rcn-cyan hover:underline">Contact us</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
