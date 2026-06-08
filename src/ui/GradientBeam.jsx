import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export function GradientBeam({ className }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none rounded-inherit", className)}>
      <motion.div
        className="absolute top-0 bottom-0 w-32 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          transform: 'skewX(-20deg)',
        }}
        animate={{
          left: ['-20%', '120%'],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
    </div>
  );
}
