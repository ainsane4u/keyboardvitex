import React, { useRef } from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { RevealMask } from '../ui/RevealMask';

export function Engineering() {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} id="engineering" className="relative w-full py-32 px-8 bg-transparent overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02)_0%,transparent_60%)]" />
      <div className="absolute right-0 top-1/4 w-[40%] h-[50%] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <RevealMask>
          <h2 className="text-section-title font-heading tracking-tight mb-4">Precision Engineering</h2>
          <p className="text-subtitle text-secondary mb-16 max-w-2xl">
            Every component is machined to within 0.01mm tolerances. The result is a typing experience that defies expectations.
          </p>
        </RevealMask>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpotlightCard className="min-h-[300px] flex flex-col justify-end bg-black/40">
            <div className="h-full w-full mb-6 rounded-lg bg-white/5 border border-white/5" />
            <h3 className="text-2xl font-heading mb-2 text-white">Unibody Chassis</h3>
            <p className="text-secondary text-sm">Milled from a single block of aerospace-grade aluminum, providing unparalleled rigidity and acoustic resonance.</p>
          </SpotlightCard>

          <SpotlightCard className="min-h-[300px] flex flex-col justify-end bg-black/40">
            <div className="h-full w-full mb-6 rounded-lg bg-white/5 border border-white/5" />
            <h3 className="text-2xl font-heading mb-2 text-white">Gasket Mount Pro</h3>
            <p className="text-secondary text-sm">A multi-layer silicone suspension system isolates the PCB, eliminating bottom-out harshness.</p>
          </SpotlightCard>

          <SpotlightCard className="min-h-[300px] flex flex-col justify-end bg-black/40">
            <div className="h-full w-full mb-6 rounded-lg bg-white/5 border border-white/5" />
            <h3 className="text-2xl font-heading mb-2 text-white">Acoustic Dampening</h3>
            <p className="text-secondary text-sm">High-density poron foam layers absorb ping and echo, delivering a deep, satisfying acoustic profile.</p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
