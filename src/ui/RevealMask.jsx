import React, { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsapConfig';
import { cn } from '../lib/utils';

export function RevealMask({ children, className }) {
  const containerRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const el = maskRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <div ref={maskRef} className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
