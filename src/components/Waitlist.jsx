import React from 'react';
import { RevealMask } from '../ui/RevealMask';

export function Waitlist() {
  return (
    <section className="relative w-full min-h-screen bg-transparent py-32 flex flex-col items-center justify-center overflow-hidden z-10 border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none" />

      {/* Concentric Rings Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="absolute w-[40vw] h-[40vw] rounded-full border border-white/5" />
        <div className="absolute w-[60vw] h-[60vw] rounded-full border border-white/5" />
        <div className="absolute w-[80vw] h-[80vw] rounded-full border border-gold-base/10 shadow-[0_0_50px_rgba(212,175,55,0.05)_inset]" />
        <div className="absolute w-[100vw] h-[100vw] rounded-full border border-white/5" />
      </div>

      {/* Orbital Elements System */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Orbit Path 1 (Inner) */}
        <div className="absolute w-[40vw] h-[40vw]" style={{ animation: 'spin 40s linear infinite' }}>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <OrbitalBadge icon="⚡" text="1000Hz" reverseDuration="40s" />
          </div>
        </div>

        {/* Orbit Path 2 (Middle) */}
        <div className="absolute w-[60vw] h-[60vw]" style={{ animation: 'spin 60s linear infinite reverse' }}>
          <div className="absolute top-1/4 -left-6">
            <OrbitalBadge icon="✧" text="Acoustic Core" reverseDuration="60s" direction="normal" />
          </div>
          <div className="absolute bottom-1/4 -right-6">
            <OrbitalBadge icon="⌨️" text="Hot-Swappable" reverseDuration="60s" direction="normal" />
          </div>
        </div>

        {/* Orbit Path 3 (Outer) */}
        <div className="absolute w-[80vw] h-[80vw]" style={{ animation: 'spin 80s linear infinite' }}>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
             <OrbitalBadge icon="✨" text="Aerospace Grade" reverseDuration="80s" />
          </div>
        </div>

      </div>

      {/* Central Glass Bubble */}
      <div className="relative z-10 w-full max-w-2xl px-4">
        <RevealMask>
          <div className="relative rounded-[2rem] rounded-bl-sm p-10 bg-surface/80 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-base/5 to-transparent rounded-[2rem] rounded-bl-sm pointer-events-none" />
            
            <p className="text-xl text-white font-body leading-relaxed mb-6 font-light">
              I'm passionate about engineering not just the hardware, but the complete tactile experience.
            </p>
            <p className="text-xl text-white font-body leading-relaxed mb-6 font-light">
              I get to connect with you, share the design iterations and engineering challenges, and grow a community that's as much about precision as it is about the perfect acoustic profile.
            </p>
            <p className="text-xl text-gold-light font-heading leading-relaxed font-medium tracking-tight">
              Every keystroke is an invitation to be part of that story ✧
            </p>

            {/* A tail for the message bubble to mimic the reference */}
            <div className="absolute -bottom-4 -left-0 w-8 h-8 bg-surface/80 border-b border-l border-white/10 [clip-path:polygon(0_0,100%_0,0_100%)] backdrop-blur-3xl" />
          </div>
        </RevealMask>
      </div>

      {/* Join Waitlist Button */}
      <div className="relative z-20 mt-16 flex flex-col items-center">
        <button className="group relative px-10 py-5 rounded-full bg-[#050505] text-white font-body font-medium text-lg tracking-wide border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9),inset_0_2px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-4 hover:border-gold-base/30">
          <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          Join Waitlist
          <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center text-sm group-hover:translate-x-1 group-hover:bg-gold-light transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </span>
        </button>
      </div>

      {/* Bottom Links */}
      <div className="flex gap-12 mt-16 z-20 relative px-4 text-center">
        <button className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors border-b border-white/20 pb-1 uppercase tracking-widest text-xs font-mono">
          <span className="text-gold-base text-lg group-hover:scale-110 transition-transform">🎥</span> 
          Behind-the-scenes
        </button>
        <button className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors border-b border-white/20 pb-1 uppercase tracking-widest text-xs font-mono">
          <span className="text-gold-base text-lg group-hover:scale-110 transition-transform">✒️</span> 
          How it all started
        </button>
      </div>

    </section>
  );
}

// Helper component to keep text upright while parent rotates
function OrbitalBadge({ icon, text, reverseDuration, direction = "reverse" }) {
  // Use inline style for dynamic animation because Tailwind v4 static extraction 
  // cannot parse string interpolation like `animate-[spin_${...}]`
  const animStyle = {
    animation: `spin ${reverseDuration} linear infinite ${direction === 'normal' ? 'normal' : 'reverse'}`
  };

  return (
    <div 
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      style={animStyle}
    >
      <span className="text-gold-base drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">{icon}</span>
      <span className="text-white text-xs font-mono uppercase tracking-widest whitespace-nowrap">{text}</span>
    </div>
  );
}
