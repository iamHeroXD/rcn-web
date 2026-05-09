"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Bot", href: "#bot" },
    { name: "Coins", href: "#coins" },
    { name: "Premium", href: "#premium" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-rcn-black/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-shadow">
                <Image src="/logo.jpeg" alt="RCN" width={36} height={36} className="object-cover w-full h-full" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-white tracking-tight">RCN</span>
                <span className="text-[10px] font-medium text-rcn-cyan/70 uppercase tracking-widest hidden sm:inline">Prime</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-white/[0.03] rounded-full border border-white/[0.06] px-1 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-white/[0.06]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="https://discord.gg/8gYnm86Nym" variant="glow" size="sm">
              Join Discord
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-rcn-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:bg-white/5 flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 px-2">
                <Button href="https://discord.gg/8gYnm86Nym" variant="glow" className="w-full text-sm">
                  Join Discord
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
