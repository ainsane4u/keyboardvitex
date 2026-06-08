import React, { useRef, useEffect } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { RevealMask } from '../ui/RevealMask';
import { gsap } from '../lib/gsapConfig';

export function Craftsmanship() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.material-card');
    
    gsap.fromTo(cards, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-transparent py-32 px-8 z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwaC0xdjFoMXYtMXptLTQwIDB2MWgxdS0xeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+Cjwvc3ZnPg==')] opacity-30" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <RevealMask>
          <h2 className="text-section-title font-heading tracking-tight mb-16 text-right">Materials & Craftsmanship</h2>
        </RevealMask>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8 lg:mt-16">
            <GlassCard className="material-card min-h-[400px]">
              <h3 className="text-3xl font-heading mb-4 text-white">Titanium Grade 5</h3>
              <p className="text-secondary text-lg">Used in the custom accent weights. Lightweight, incredibly strong, and finished with a physical vapor deposition (PVD) coating for a mirror-like shine.</p>
            </GlassCard>
            <GlassCard className="material-card min-h-[300px]">
              <h3 className="text-3xl font-heading mb-4 text-white">Copper Internal Weight</h3>
              <p className="text-secondary text-lg">A dense copper block sits perfectly centered in the chassis, dampening higher frequency pings and providing a grounded, solid typing feel.</p>
            </GlassCard>
          </div>
          
          <div className="space-y-8">
            <GlassCard className="material-card min-h-[500px]">
              <h3 className="text-3xl font-heading mb-4 text-white">PBT Double-Shot</h3>
              <p className="text-secondary text-lg">Our keycaps are molded using high-content PBT plastics. The legends will never fade, and the texture remains perfectly grippy for decades of intensive use.</p>
            </GlassCard>
            <GlassCard className="material-card min-h-[200px]">
              <h3 className="text-3xl font-heading mb-4 text-white">Gold-Plated FR4</h3>
              <p className="text-secondary text-lg">The PCB features ENIG gold plating on all contact points, ensuring zero latency and oxidation resistance over a lifetime of keystrokes.</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
