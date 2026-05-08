"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "glow" | "outline" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
  href?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, ...props }, ref) => {
    const baseStyles = "relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group";
    
    const variants = {
      default: "bg-white text-black hover:bg-white/90",
      glow: "bg-rcn-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] border border-rcn-purple/50",
      outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white",
      glass: "glassmorphism hover:bg-white/10 text-white hover:border-white/20",
    };
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    };

    const buttonContent = (
      <>
        <span className="relative z-10 flex items-center gap-2">{props.children}</span>
        {/* Shine effect on hover */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-0" />
      </>
    );

    const MotionButton = motion.button;
    const MotionLink = motion.a;

    if (href) {
      // Internal links vs External links
      const isExternal = href.startsWith('http');
      
      if (isExternal) {
        return (
          <MotionLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            ref={ref as any}
            {...props as any}
          >
            {buttonContent}
          </MotionLink>
        );
      }

      return (
        <Link href={href} passHref legacyBehavior>
          <MotionLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            ref={ref as any}
            {...props as any}
          >
            {buttonContent}
          </MotionLink>
        </Link>
      );
    }

    return (
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props as any}
      >
        {buttonContent}
      </MotionButton>
    );
  }
);
Button.displayName = "Button";

export { Button };
