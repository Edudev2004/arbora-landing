import React from 'react';
import { cn } from '../../lib/utils';
import { Sparkles } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
}

export const Badge = ({ children, className, icon = true }: BadgeProps) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-tertiary mb-8",
      className
    )}>
      {icon && <Sparkles className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </div>
  );
};
