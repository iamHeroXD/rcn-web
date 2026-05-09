"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, CheckCircle2, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    name: "Discord",
    description: "Fastest response — join our server",
    href: "https://discord.gg/8gYnm86Nym",
    color: "#5865F2",
  },
  {
    icon: <InstagramIcon className="w-5 h-5" />,
    name: "Instagram",
    description: "@rcnxofficial",
    href: "https://www.instagram.com/rcnxofficial",
    color: "#E1306C",
  },
  {
    icon: <XIcon className="w-5 h-5" />,
    name: "X (Twitter)",
    description: "Coming soon",
    href: "#",
    color: "#ffffff",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    name: "Email",
    description: "rcnxofficial@gmail.com",
    href: "mailto:rcnxofficial@gmail.com",
    color: "#8b5cf6",
  },
];

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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rcn-purple/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-rcn-cyan/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcn-purple to-rcn-cyan">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question, want to collaborate, or need support? We&apos;re here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Left: Socials + Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all group"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center border shrink-0 transition-colors"
                  style={{ 
                    backgroundColor: `${social.color}15`,
                    borderColor: `${social.color}30`,
                    color: social.color,
                  }}
                >
                  {social.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-semibold text-sm">{social.name}</h4>
                  <p className="text-gray-500 text-xs truncate">{social.description}</p>
                </div>
                <Send className="w-4 h-4 text-gray-600 group-hover:text-white ml-auto shrink-0 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ))}

            {/* Hiring callout */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 rounded-xl border border-rcn-purple/20 bg-rcn-purple/5 mt-2"
            >
              <h4 className="text-white font-semibold mb-1.5 text-sm">🚀 Join the Team</h4>
              <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                We&apos;re looking for moderators, developers, and community managers.
              </p>
              <Button href="https://discord.gg/8gYnm86Nym" variant="glow" size="sm" className="w-full text-xs">
                Apply on Discord
              </Button>
            </motion.div>
          </div>

          {/* Right: Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="terminal-frame">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="text-xs text-gray-500 ml-3 font-mono">rcn-contact --new-message</span>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" />
                <input type="hidden" name="from_name" value="RCN Website - Contact" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-medium text-gray-400 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-rcn-purple focus:border-rcn-purple transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-rcn-purple focus:border-rcn-purple transition-all text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-discord" className="text-xs font-medium text-gray-400 uppercase tracking-wider">Discord Username</label>
                  <input
                    type="text"
                    id="contact-discord"
                    name="discord_username"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-rcn-purple focus:border-rcn-purple transition-all text-sm"
                    placeholder="@username (optional)"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-medium text-gray-400 uppercase tracking-wider">Subject</label>
                  <select
                    id="contact-subject"
                    name="inquiry_type"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-rcn-purple focus:border-rcn-purple transition-all text-sm appearance-none"
                  >
                    <option value="General" className="bg-rcn-dark">General Inquiry</option>
                    <option value="Services" className="bg-rcn-dark">Service Request</option>
                    <option value="Premium" className="bg-rcn-dark">Premium Support</option>
                    <option value="Bug Report" className="bg-rcn-dark">Bug Report</option>
                    <option value="Partnership" className="bg-rcn-dark">Partnership</option>
                    <option value="Other" className="bg-rcn-dark">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-rcn-purple focus:border-rcn-purple transition-all resize-none text-sm"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>

                <Button type="submit" variant="glow" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </Button>

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
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
