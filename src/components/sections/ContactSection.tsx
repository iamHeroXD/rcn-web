"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("idle");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "9378e1bf-ceaf-4c42-8882-fb91297b0f41");
    formData.append("subject", "New Contact Message from RCN Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Have a question about our services, premium plans, or want to report an issue with the bot? Reach out to us.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 glassmorphism rounded-lg border border-white/5">
                <div className="w-12 h-12 rounded-full bg-[#5865F2]/20 flex items-center justify-center border border-[#5865F2]/50">
                  <MessageSquare className="text-[#5865F2]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Discord Support</h4>
                  <p className="text-gray-400 text-sm">Fastest response time</p>
                </div>
                <Button href="https://discord.gg/8gYnm86Nym" variant="outline" size="sm" className="ml-auto border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white">
                  Join Server
                </Button>
              </div>
              
              <div className="p-6 glassmorphism rounded-lg border border-rcn-purple/20 bg-rcn-purple/5">
                <h4 className="text-white font-semibold mb-2">Join the Support Team</h4>
                <p className="text-gray-400 text-sm mb-4">
                  We are actively looking for moderators and support staff to handle the growing RCN community.
                </p>
                <Button href="https://discord.gg/8gYnm86Nym" variant="glow" size="sm" className="w-full text-xs">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-2xl border border-white/10 space-y-6">
              {/* Honeypot for spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rcn-purple transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rcn-purple transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rcn-purple transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="submit" variant="glow" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </Button>

              {/* Success/Error feedback */}
              {result === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3"
                >
                  <CheckCircle2 size={16} />
                  Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}
              {result === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
                >
                  Something went wrong. Please try again or reach out on Discord.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
