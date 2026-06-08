import React from 'react';
import { useCursorGlow } from '../hooks/useCursorGlow';
import { cn } from '../lib/utils';

export function SpotlightCard({ children, className }) {
  const ref = useCursorGlow();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-colors hover:border-white/20",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
