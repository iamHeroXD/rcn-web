"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowOnHover?: boolean;
  tiltOnHover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, glowOnHover = false, tiltOnHover = false, ...props }, ref) => {
    
    // We can use framer-motion for tilt later, but a simple hover state here.
    return (
      <motion.div
        ref={ref}
        whileHover={tiltOnHover ? { y: -5, rotateX: 2, rotateY: -2 } : { y: -5 }}
        className={cn(
          "glassmorphism rounded-xl p-6 transition-all duration-300",
          glowOnHover && "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-white/5 hover:border-rcn-purple/50",
          className
        )}
        {...props as any}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";
