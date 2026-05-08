"use client";

import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">Connect</span>
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
                <Button href="#" variant="outline" size="sm" className="ml-auto border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white">
                  Join Server
                </Button>
              </div>
              
              <div className="p-6 glassmorphism rounded-lg border border-rcn-purple/20 bg-rcn-purple/5">
                <h4 className="text-white font-semibold mb-2">Join the Support Team</h4>
                <p className="text-gray-400 text-sm mb-4">
                  We are actively looking for moderators and support staff to handle the growing RCN community.
                </p>
                <Button href="#contact" variant="glow" size="sm" className="w-full text-xs">
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
            <form className="glassmorphism p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rcn-purple transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rcn-purple transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rcn-purple transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button type="button" variant="glow" className="w-full gap-2">
                Send Message <Send size={16} />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
