import React from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "bg-zinc-950 text-white border border-primary/40 hover:bg-zinc-900/80 hover:border-primary shadow-[0_0_15px_-3px_rgba(167,139,250,0.3)] hover:shadow-[0_0_20px_-2px_rgba(167,139,250,0.5)]",
    secondary: "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800",
    ghost: "text-zinc-400 hover:text-primary backdrop-blur-sm",
    glass: "bg-zinc-900/10 backdrop-blur-xl border border-zinc-800/50 hover:bg-zinc-800/30 text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-10 py-5 text-lg font-bold"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full transition-all duration-500 flex items-center justify-center gap-2 tracking-tight",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
