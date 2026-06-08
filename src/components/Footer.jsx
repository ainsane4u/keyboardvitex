import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative w-full py-16 px-8 bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="flex flex-col gap-2 mb-8 md:mb-0">
          <h2 className="text-3xl font-heading text-white tracking-tighter">AETERNA</h2>
          <p className="text-secondary text-sm">© 2026 Aeterna Systems. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm text-secondary">
          <a href="#" className="hover:text-white transition-colors cursor-none" data-magnetic="true">Instagram</a>
          <a href="#" className="hover:text-white transition-colors cursor-none" data-magnetic="true">Twitter</a>
          <a href="#" className="hover:text-white transition-colors cursor-none" data-magnetic="true">Discord</a>
        </div>
      </div>
      
      {/* Floating abstract element */}
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"
        animate={{
          y: [20, -20, 20],
          x: [-20, 20, -20],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
    </footer>
  );
}
