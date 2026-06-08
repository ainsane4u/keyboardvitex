import React from 'react';
import { cn } from '../lib/utils';

export function GlassCard({ children, className }) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-glass)] backdrop-blur-xl p-8 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
