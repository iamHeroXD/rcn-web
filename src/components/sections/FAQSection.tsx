"use client";

import { Accordion } from "@/components/ui/Accordion";

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

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
