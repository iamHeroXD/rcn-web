"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Zap, ArrowUpRight, Crown, TrendingUp, Coins } from "lucide-react";

// CSS-only animated coin component
function AnimatedCoin() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <div className="absolute w-56 h-56 rounded-full border border-yellow-500/10" style={{ animation: "pulseRing 3s ease-out infinite" }} />
      <div className="absolute w-56 h-56 rounded-full border border-yellow-400/5" style={{ animation: "pulseRing 3s ease-out infinite 1s" }} />
      
      {/* Orbit ring */}
      <div className="absolute w-48 h-48 md:w-64 md:h-64">
        <div className="absolute inset-0 rounded-full border border-yellow-500/10 border-dashed" style={{ animation: "coinSpin 20s linear infinite" }} />
        {/* Orbiting dots */}
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)]" style={{ animation: "orbit 6s linear infinite", top: "50%", left: "50%" }} />
        <div className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.6)]" style={{ animation: "orbit 8s linear infinite reverse", top: "50%", left: "50%" }} />
      </div>

      {/* Main coin */}
      <div className="relative" style={{ perspective: "800px" }}>
        <div
          className="w-28 h-28 md:w-40 md:h-40 rounded-full relative"
          style={{ 
            animation: "coinSpin 4s ease-in-out infinite",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front face */}
          <div 
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #eab308 30%, #ca8a04 60%, #fbbf24 100%)",
              backfaceVisibility: "hidden",
              boxShadow: "inset 0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(234,179,8,0.3)",
            }}
          >
            <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border-4 border-yellow-600/40 flex items-center justify-center">
              <div className="text-center">
                <Coins className="w-6 h-6 md:w-10 md:h-10 text-yellow-900/70 mx-auto mb-0.5 md:mb-1" />
                <span className="text-yellow-900/80 font-black text-xs md:text-lg tracking-widest">RCN</span>
              </div>
            </div>
          </div>
          
          {/* Back face */}
          <div 
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #ca8a04 0%, #eab308 40%, #fbbf24 80%, #ca8a04 100%)",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: "inset 0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(234,179,8,0.3)",
            }}
          >
            <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border-4 border-yellow-600/40 flex items-center justify-center">
              <span className="text-yellow-900/80 font-black text-2xl md:text-4xl">⚡</span>
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-full" style={{ animation: "coinGlow 2s ease-in-out infinite" }} />
      </div>

      {/* Sparkle particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          style={{
            animation: `sparkle ${2 + i * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
            top: `${20 + Math.sin(i * 0.8) * 35}%`,
            left: `${20 + Math.cos(i * 0.8) * 35}%`,
          }}
        />
      ))}
    </div>
  );
}

// Live transaction ticker
function TransactionTicker() {
  const transactions = [
    { user: "AlexDev", action: "earned", amount: "+500", type: "Activity Bonus" },
    { user: "Sarah_C", action: "spent", amount: "-200", type: "Profile Boost" },
    { user: "0xMarcus", action: "earned", amount: "+100", type: "Referral" },
    { user: "Elena_M", action: "earned", amount: "+50", type: "Daily Login" },
  ];

  return (
    <div className="terminal-frame mt-8">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="text-xs text-gray-500 ml-3 font-mono">rcn-economy-live</span>
      </div>
      <div className="terminal-body space-y-2 max-h-[180px] overflow-hidden">
        {transactions.map((tx, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="flex items-center gap-3 text-xs"
          >
            <span className="text-gray-500">[{String(idx + 1).padStart(2, '0')}]</span>
            <span className="text-rcn-cyan">@{tx.user}</span>
            <span className="text-gray-500">{tx.action}</span>
            <span className={tx.amount.startsWith('+') ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
              {tx.amount} RCN
            </span>
            <span className="text-gray-600">— {tx.type}</span>
          </motion.div>
        ))}
        <div className="flex items-center gap-1 text-gray-600 text-xs mt-2">
          <span className="animate-cursor-blink">█</span>
          <span>Listening for transactions...</span>
        </div>
      </div>
    </div>
  );
}

export function CoinSystemSection() {
  return (
    <section id="coins" className="py-24 relative overflow-hidden bg-black/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Core Economy: <br />
                <span className="text-yellow-400 text-glow">RCN Coins</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                RCN Coins are the digital currency that powers our ecosystem. Earn them by completing jobs, referring friends, or participating in the community.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Earn via Jobs</span>
                    <span className="text-yellow-400 font-bold">+500 max</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 box-glow"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Earn via Referrals</span>
                    <span className="text-yellow-400 font-bold">+100/ref</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 box-glow"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Earn via Activity</span>
                    <span className="text-yellow-400 font-bold">+10/day</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "20%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 box-glow"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 flex items-center gap-3 bg-white/5 border-yellow-500/20">
                  <Zap className="text-yellow-400 w-5 h-5" />
                  <span className="text-sm font-medium">Boost Listings</span>
                </Card>
                <Card className="p-4 flex items-center gap-3 bg-white/5 border-yellow-500/20">
                  <Crown className="text-yellow-400 w-5 h-5" />
                  <span className="text-sm font-medium">Premium Access</span>
                </Card>
                <Card className="p-4 flex items-center gap-3 bg-white/5 border-yellow-500/20">
                  <ArrowUpRight className="text-yellow-400 w-5 h-5" />
                  <span className="text-sm font-medium">Priority Hiring</span>
                </Card>
                <Card className="p-4 flex items-center gap-3 bg-white/5 border-yellow-500/20">
                  <TrendingUp className="text-yellow-400 w-5 h-5" />
                  <span className="text-sm font-medium">Exclusive Perks</span>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Right: CSS Coin Animation + Terminal Ticker */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="h-[300px] w-full flex items-center justify-center">
              <AnimatedCoin />
            </div>
            <TransactionTicker />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
