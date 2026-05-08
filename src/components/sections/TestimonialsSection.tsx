"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Dev",
    role: "Frontend Engineer",
    content: "Found 3 high-paying Next.js gigs in my first week. The bot integration makes applying effortless.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sarah C.",
    role: "Agency Owner",
    content: "Hiring through RCN is a breeze. The quality of developers is unmatched, and the auto-filtering saves me hours.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "0xMarcus",
    role: "Web3 Developer",
    content: "The coin system is brilliant. I boost my profile and clients instantly notice me. Best SaaS platform out there.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Elena M.",
    role: "UI/UX Designer",
    content: "Landed a massive SaaS dashboard project thanks to the Premium tier visibility boost.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9"
  },
  {
    name: "David K.",
    role: "Startup Founder",
    content: "We hired our entire initial dev team through RCN. The Discord ecosystem makes communication so much easier.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=33"
  }
];

export function TestimonialsSection() {
  // Double the array for seamless infinite scroll
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-24 relative overflow-hidden bg-rcn-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted by <span className="text-glow text-white">Builders</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          See what our community of developers and clients have to say.
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-rcn-black to-transparent z-10" />
        
        {/* Scrolling Track - CSS animation for much better performance */}
        <div
          className="flex gap-6 w-max px-6 hover:[animation-play-state:paused]"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {items.map((t, idx) => (
            <div
              key={idx}
              className="w-[350px] shrink-0 glassmorphism rounded-xl p-6 border border-white/10 hover:border-rcn-purple/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-rcn-purple/50" />
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-rcn-cyan text-xs font-medium">{t.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">&quot;{t.content}&quot;</p>
            </div>
          ))}
        </div>
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rcn-black to-transparent z-10" />
      </div>
    </section>
  );
}
