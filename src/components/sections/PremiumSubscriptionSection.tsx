"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useState } from "react";
import { PremiumModal } from "@/components/ui/PremiumModal";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started on RCN.",
    features: [
      "Access to public job board",
      "Standard profile",
      "Community support",
      "Basic Bot commands"
    ],
    buttonText: "Join Free",
    variant: "outline" as const,
    glowColor: "border-white/10"
  },
  {
    name: "Pro",
    price: "$9.99/mo",
    description: "For serious freelancers and regular clients.",
    features: [
      "Priority job access",
      "Verified Pro badge",
      "Auto-match boost (2x)",
      "Early listings access",
      "Direct client messaging"
    ],
    buttonText: "Subscribe Pro",
    variant: "glow" as const,
    glowColor: "border-rcn-purple",
    popular: true
  },
  {
    name: "Elite",
    price: "$24.99/mo",
    description: "Ultimate visibility and hiring tools.",
    features: [
      "Everything in Pro",
      "Elite Verified badge",
      "Auto-match boost (5x)",
      "Zero fees on RCN Coins",
      "Dedicated account manager",
      "Custom portfolio showcase"
    ],
    buttonText: "Subscribe Elite",
    variant: "outline" as const,
    glowColor: "border-rcn-cyan/50 hover:border-rcn-cyan"
  }
];

export function PremiumSubscriptionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSubscribe = (planName: string) => {
    if (planName === "Basic") {
      window.open("https://discord.gg/8gYnm86Nym", "_blank");
      return;
    }
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <section id="premium" className="py-24 relative">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-rcn-purple/30 rounded-full"
            style={{
              animation: `particleFloat ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      <PremiumModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planName={selectedPlan} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">Premium</span> Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Supercharge your hiring or freelancing career with our premium SaaS tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-rcn-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider box-glow flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}
              
              <Card 
                tiltOnHover 
                className={`h-full flex flex-col p-8 ${plan.glowColor} ${plan.popular ? 'bg-rcn-purple/5' : ''}`}
                style={plan.popular ? { animation: "borderGlow 3s ease-in-out infinite" } : undefined}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-rcn-cyan shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button onClick={() => handleSubscribe(plan.name)} variant={plan.variant} className="w-full">
                  {plan.buttonText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
