import React, { useRef } from 'react';
import { useCursorGlow } from '../hooks/useCursorGlow';
import { RevealMask } from '../ui/RevealMask';

export function PremiumShowcase() {
  const containerRef = useRef(null);
  const cardRef = useCursorGlow();

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#030303] flex flex-col items-center justify-center py-32 px-8 overflow-hidden z-10">
      
      {/* Background Halftone & Ambient Dark */}
      <div className="absolute inset-0 bg-halftone pointer-events-none opacity-30 mix-blend-overlay" />
      
      {/* Dramatic Volumetric God Rays */}
      <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[120%] bg-[conic-gradient(from_200deg_at_70%_20%,rgba(212,175,55,0.15)_0deg,transparent_40deg,rgba(212,175,55,0.05)_80deg,transparent_120deg)] mix-blend-screen pointer-events-none origin-top-right transform -rotate-12 blur-2xl opacity-60" />
      <div className="absolute top-0 right-[10%] w-[20vw] h-[150vh] bg-gradient-to-b from-gold-base/20 via-gold-base/5 to-transparent blur-[80px] rotate-[25deg] mix-blend-screen pointer-events-none translate-x-1/2 -translate-y-1/4" />

      {/* Main Showcase Layout */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center mt-16">
        
        {/* 3 Premium Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
          {[
            { src: '/images/frames/frame_000100.jpg', title: 'Acoustic Core' },
            { src: '/images/frames/frame_000150.jpg', title: 'Aerospace Chassis' },
            { src: '/images/frames/frame_000200.jpg', title: 'Precision Keys' }
          ].map((card, idx) => (
            <div key={idx} className="relative w-full aspect-[4/5] rounded-[2rem] p-[2px] bg-gradient-to-b from-gold-light/40 via-gold-base/10 to-gold-dark/20 shadow-[0_0_50px_rgba(212,175,55,0.05)] group transition-all duration-700 hover:shadow-[0_0_80px_rgba(212,175,55,0.15)] hover:-translate-y-2">
              
              {/* Inner Dark Glass Container */}
              <div className="w-full h-full rounded-[2rem] bg-surface/90 backdrop-blur-2xl overflow-hidden relative flex flex-col group-hover:bg-surface/60 transition-colors duration-500">
                
                {/* Image */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  <img 
                    src={card.src} 
                    alt={card.title} 
                    className="w-full h-full object-cover opacity-60 mix-blend-screen scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 flex-1 p-8 flex flex-col justify-end">
                  <div className="w-8 h-8 rounded-full border border-gold-base/30 flex items-center justify-center mb-4 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-gold-light/80 shadow-[0_0_10px_rgba(255,229,143,1)]" />
                  </div>
                  <h3 className="text-white font-heading text-2xl mb-1">{card.title}</h3>
                  <div className="text-gold-base/60 text-xs font-mono uppercase tracking-widest">
                    Edition 0{idx + 1}
                  </div>
                </div>
                
                {/* Ambient inner glow */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gold-base/20 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Dramatic Typography Layout */}
        <div className="mt-16 text-center w-full relative z-20">
          <RevealMask>
            <h2 className="flex flex-col items-center justify-center leading-none tracking-tighter">
              <div className="flex items-baseline gap-4">
                <span className="text-white text-6xl font-body font-light tracking-tight">the</span>
                <span className="font-display italic text-[5.5rem] font-bold text-gold-gradient drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] pr-2">
                  AETERNA
                </span>
              </div>
              <div className="text-white text-7xl font-body font-light tracking-tight mt-[-10px]">
                custom keyboard.
              </div>
            </h2>
          </RevealMask>
          
          <div className="mt-16 text-left w-full pl-4">
            <span className="text-white/60 text-sm tracking-widest font-body uppercase cursor-pointer hover:text-white transition-colors">
              Read Specs
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
