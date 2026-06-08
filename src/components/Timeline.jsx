import React, { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsapConfig';
import { RevealMask } from '../ui/RevealMask';

export function Timeline() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-transparent z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-8 relative">
        <RevealMask>
          <h2 className="text-section-title font-heading tracking-tight">The Experience</h2>
        </RevealMask>
      </div>
      
      <div className="relative whitespace-nowrap overflow-hidden py-16 opacity-30 pointer-events-none">
        <div ref={textRef} className="inline-block text-[150px] font-heading font-bold text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)' }}>
          DESIGN • ENGINEER • REFINE • PERFECT • DESIGN • ENGINEER • REFINE • PERFECT
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
        <div className="border-l border-white/20 pl-8 relative before:absolute before:left-0 before:-translate-x-[5px] before:top-0 before:w-2.5 before:h-2.5 before:rounded-full before:bg-white">
          <div className="text-secondary font-mono mb-2">Phase 01</div>
          <h3 className="text-2xl font-heading text-white mb-2">Concept & Architecture</h3>
          <p className="text-secondary text-sm">Defining the core principles of the Obsidian platform. Zero compromises on material selection.</p>
        </div>
        <div className="border-l border-white/20 pl-8 relative before:absolute before:left-0 before:-translate-x-[5px] before:top-0 before:w-2.5 before:h-2.5 before:rounded-full before:bg-white mt-16 md:mt-32">
          <div className="text-secondary font-mono mb-2">Phase 02</div>
          <h3 className="text-2xl font-heading text-white mb-2">Acoustic Tuning</h3>
          <p className="text-secondary text-sm">Hundreds of hours spent testing foam densities, plate materials, and mounting pressure to find the perfect resonance.</p>
        </div>
      </div>
    </section>
  );
}
