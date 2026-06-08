import React, { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsapConfig';
import { RevealMask } from '../ui/RevealMask';

export function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.testimonial-card');
      
      // 1. Pro-level 3D Entrance Animation
      gsap.fromTo(cards, 
        { y: 150, rotationX: -30, scale: 0.9, opacity: 0, z: -100 },
        {
          y: 0,
          rotationX: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          stagger: 0.2,
          duration: 1.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          },
          onComplete: () => {
            // 2. Continuous subtle floating effect after entrance
            cards.forEach((card, i) => {
              gsap.to(card, {
                y: i % 2 === 0 ? -10 : 10,
                duration: 3 + i,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
              });
            });
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      title: "Tactile Perfection",
      body: "The typing experience is unlike anything I've ever felt. The gasket mount completely eliminates bottom-out harshness while retaining an incredibly satisfying, deep acoustic thock.",
      offset: "-translate-x-12",
      icon: "✧"
    },
    {
      title: "Aerospace Precision",
      body: "You can feel the CNC tolerances instantly. The unibody aluminum chassis doesn't just look like a piece of modern art—it grounds the entire typing experience with absolute zero flex.",
      offset: "translate-x-0",
      icon: "⚡"
    },
    {
      title: "Lifetime Durability",
      body: "From the gold-plated FR4 PCB to the double-shot PBT caps, every material choice screams longevity. This isn't just a keyboard; it's a generational peripheral.",
      offset: "translate-x-12",
      icon: "✨"
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-transparent py-32 flex flex-col items-center justify-center overflow-hidden z-10 border-t border-white/5">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(212,175,55,0.02)_0%,transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-7xl px-8 mb-24 relative z-10">
        <RevealMask>
          <h2 className="text-section-title font-heading tracking-tight mb-2">Community</h2>
        </RevealMask>
        <RevealMask delay={0.1}>
          <p className="text-secondary font-mono tracking-widest uppercase text-xs">What the enthusiasts are saying</p>
        </RevealMask>
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col gap-12 items-center px-4">
        {testimonials.map((item, idx) => (
          <div 
            key={idx} 
            className={`testimonial-card group relative w-full max-w-xl rounded-3xl backdrop-blur-3xl border border-white/5 hover:border-gold-light/30 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] hover:shadow-[0_50px_100px_-20px_rgba(212,175,55,0.2)] overflow-hidden transition-all duration-700 hover:scale-[1.03] hover:-translate-y-3 z-10 hover:z-20 ${item.offset}`}
            style={{ perspective: '1000px' }}
          >
            {/* Pro-Level Base Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/80 via-[#050505]/95 to-[#000000]/90 pointer-events-none" />
            
            {/* Inner Metallic Sheen */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />

            {/* Intense Top-Edge Light Bleed - Upgraded */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-light via-gold-base to-transparent opacity-80 group-hover:opacity-100 group-hover:h-[3px] group-hover:via-[#fff1b8] transition-all duration-500" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[180px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.45)_0%,transparent_75%)] group-hover:bg-[radial-gradient(ellipse_at_top,rgba(255,241,184,0.6)_0%,transparent_80%)] pointer-events-none mix-blend-screen transition-all duration-700" />
            
            {/* Soft Ambient Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold-base/5 via-transparent to-transparent pointer-events-none group-hover:from-gold-base/10 transition-colors duration-500" />

            <div className="relative z-10 p-10 flex flex-col">
              
              {/* Top Right Icon Badge */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-gold-base/10 border border-gold-base/30 shadow-[0_0_20px_rgba(212,175,55,0.15)] flex items-center justify-center text-gold-light text-lg group-hover:bg-gold-base/30 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl text-white font-body font-light tracking-wide mb-6 pr-12 group-hover:text-gold-light transition-colors duration-500">
                {item.title}
              </h3>
              
              {/* Thin Separator Line */}
              <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6" />
              
              <p className="text-base text-secondary font-body leading-relaxed max-w-md font-light">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
