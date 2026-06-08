import React from 'react';
import { MagneticButton } from './MagneticButton';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 pointer-events-none">
      <div className="flex-1">
        <h1 className="text-2xl font-heading tracking-widest text-white font-medium mix-blend-difference">
          AETERNA
        </h1>
      </div>
      
      <div className="flex-1 flex justify-center pointer-events-auto">
        <nav className="flex items-center gap-8 px-8 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
          <a href="#engineering" className="text-sm font-body text-secondary hover:text-white transition-colors">Engineering</a>
          <a href="#design" className="text-sm font-body text-secondary hover:text-white transition-colors">Design</a>
          <a href="#acoustics" className="text-sm font-body text-secondary hover:text-white transition-colors">Acoustics</a>
        </nav>
      </div>

      <div className="flex-1 flex justify-end pointer-events-auto">
        <MagneticButton>
          <button className="px-6 py-3 rounded-full bg-white text-black font-body text-sm font-medium hover:scale-105 transition-transform">
            Pre-order
          </button>
        </MagneticButton>
      </div>
    </header>
  );
}
