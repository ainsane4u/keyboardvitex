import React, { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsapConfig';
import { RevealMask } from '../ui/RevealMask';

export function Gallery() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const scrollEl = scrollRef.current;
      
      gsap.to(scrollEl, {
        xPercent: -100,
        x: () => window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + scrollEl.offsetWidth,
          scrub: 1,
          pin: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const shots = [
    '/images/frames/frame_000100.jpg',
    '/images/frames/frame_000150.jpg',
    '/images/frames/frame_000200.jpg',
    '/images/frames/frame_000250.jpg',
    '/images/frames/frame_000300.jpg',
  ];

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-transparent py-32 overflow-hidden z-10 border-t border-white/5">
      <div className="absolute top-16 left-8 z-20">
        <RevealMask>
          <h2 className="text-section-title font-heading tracking-tight">Gallery</h2>
        </RevealMask>
      </div>

      <div ref={scrollRef} className="h-full flex items-center pt-24 px-8 w-[300vw]">
        <div className="flex gap-16 h-[70vh]">
          {shots.map((src, idx) => (
            <div key={idx} className="relative w-[60vw] h-full rounded-3xl overflow-hidden shrink-0">
              <RevealMask className="w-full h-full">
                <div className="absolute inset-0 bg-white/5" /> 
                <img 
                  src={src} 
                  alt={`Product shot ${idx + 1}`} 
                  className="w-full h-full object-cover relative z-10 opacity-80 mix-blend-screen"
                />
              </RevealMask>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
