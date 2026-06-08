import React from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import { cn } from '../lib/utils';

export function MagneticButton({ children, className, onClick, ...props }) {
  const ref = useMagnetic(0.3);

  return (
    <button
      ref={ref}
      className={cn(
        "relative overflow-hidden px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-button tracking-wide transition-colors duration-300",
        className
      )}
      onClick={onClick}
      data-magnetic="true"
      {...props}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
    </button>
  );
}
