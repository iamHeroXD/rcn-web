"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cylinder, Environment, Float, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Card } from "@/components/ui/Card";
import { Zap, ArrowUpRight, Crown } from "lucide-react";

function Coin3D({ position, delay, isMain = false }: { position: [number, number, number], delay: number, isMain?: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation + interactive spin on hover or click
      const spinSpeed = clicked ? 0.5 : (hovered ? 0.1 : 0.02);
      meshRef.current.rotation.y += spinSpeed;
      meshRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime + delay) * 0.15;
      
      // Floating motion
      const floatOffset = isMain ? 0 : Math.sin(state.clock.elapsedTime * 2 + delay) * 0.15;
      meshRef.current.position.y = position[1] + floatOffset;
      
      // Smooth scale on hover/click
      const targetScale = clicked ? 1.4 : (hovered ? 1.2 : 1);
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      if (clicked && meshRef.current.scale.x > 1.35) {
        setClicked(false); // Reset click animation
      }
    }
  });

  return (
    <Float speed={isMain ? 0 : 2} rotationIntensity={0.5} floatIntensity={isMain ? 0 : 1}>
      <Cylinder 
        ref={meshRef} 
        args={[1.5, 1.5, 0.25, 64]} 
        position={position} 
        rotation={[Math.PI / 2, 0, 0]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => setClicked(true)}
      >
        <meshStandardMaterial
          color={hovered || clicked ? "#fde047" : "#eab308"}
          metalness={1}
          roughness={0.15}
          emissive="#ca8a04"
          emissiveIntensity={hovered || clicked ? 0.6 : 0.2}
        />
        <Cylinder args={[1.2, 1.2, 0.26, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#ca8a04"
            metalness={1}
            roughness={0.3}
          />
        </Cylinder>
        
        {/* Particles specifically around the main coin when hovered */}
        {isMain && hovered && (
          <Sparkles count={50} scale={5} size={2} speed={0.4} opacity={1} color="#fde047" />
        )}
      </Cylinder>
    </Float>
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
                  <span className="text-yellow-400 text-xl font-bold">💎</span>
                  <span className="text-sm font-medium">Exclusive Perks</span>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Right: 3D Coins Stack */}
          <div className="h-[500px] w-full relative">
            <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-5, 5, 5]} color="#ca8a04" intensity={2} />
              <Environment preset="city" />
              
              <Coin3D position={[0, -1, 0]} delay={0} />
              <Coin3D position={[0, 0, 0]} delay={0.2} />
              <Coin3D position={[0, 1, 0]} delay={0.4} />
              <Coin3D position={[0, 2, 0]} delay={0.6} isMain={true} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
