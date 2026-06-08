import React, { useRef } from 'react';
import { useCursorGlow } from '../hooks/useCursorGlow';
import { cn } from '../lib/utils';
import { RevealMask } from '../ui/RevealMask';

function SwitchCard({ title, desc, force, type, className }) {
  const ref = useCursorGlow();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 transition-all hover:-translate-y-2 hover:border-white/20",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-3xl font-heading text-white">{title}</h3>
          <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-secondary">{type}</span>
        </div>
        <div className="flex-grow flex items-center justify-center py-16">
          <div className="w-24 h-24 rounded-md border-2 border-white/20 relative group-hover:border-white/50 transition-colors">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 border-b-2 border-x-2 border-white/20 -translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 ease-out" />
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-white/10" />
          </div>
        </div>
        <div className="mt-auto">
          <div className="text-4xl font-heading text-white mb-2">{force}</div>
          <p className="text-secondary text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export function SwitchTechnology() {
  const containerRef = useRef(null);
  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-transparent py-32 px-8 z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <RevealMask>
          <h2 className="text-section-title font-heading tracking-tight mb-16 text-center">Switch Technology</h2>
        </RevealMask>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SwitchCard 
            title="Aeterna Linear"
            type="Linear"
            force="45g"
            desc="Factory hand-lubed with Krytox 205g0. Buttery smooth travel with a reinforced POM stem for zero wobble."
          />
          <SwitchCard 
            title="Aeterna Tactile"
            type="Tactile"
            force="62g"
            desc="A sharp, pronounced D-shaped bump right at the top of the keystroke. Perfect for typists who demand feedback."
          />
          <SwitchCard 
            title="Aeterna Silent"
            type="Silent Linear"
            force="50g"
            desc="Integrated silicone dampeners on the stem rails. Ideal for open office environments without sacrificing feel."
          />
        </div>
      </div>
    </section>
  );
}
