import React from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import { RevealMask } from '../ui/RevealMask';

function MagneticCard({ title, desc }) {
  const ref = useMagnetic(0.1);

  return (
    <div 
      ref={ref} 
      data-magnetic="true"
      className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md cursor-none flex flex-col justify-center min-h-[300px] transition-colors hover:bg-white/10"
    >
      <h3 className="text-3xl font-heading text-white mb-4">{title}</h3>
      <p className="text-secondary text-lg">{desc}</p>
    </div>
  );
}

export function Features() {
  return (
    <section className="relative w-full min-h-screen bg-transparent py-32 px-8 z-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        <RevealMask>
          <h2 className="text-section-title font-heading tracking-tight mb-16">Signature Features</h2>
        </RevealMask>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MagneticCard 
            title="QMK/VIA Compatible"
            desc="Total reprogramming control. Remap every key, create infinite layers, and write custom macros directly to the keyboard's memory."
          />
          <MagneticCard 
            title="Tri-Mode Connectivity"
            desc="Seamlessly switch between 2.4GHz ultra-low latency wireless, Bluetooth 5.2 for multiple devices, or wired USB-C."
          />
          <MagneticCard 
            title="10,000mAh Battery"
            desc="Unprecedented battery life. Work for months, or game for weeks without ever reaching for a charging cable."
          />
          <MagneticCard 
            title="Dynamic RGB Matrix"
            desc="Per-key addressable LEDs with a custom lighting engine. Create complex animations or keep it stealthily dark."
          />
        </div>
      </div>
    </section>
  );
}
