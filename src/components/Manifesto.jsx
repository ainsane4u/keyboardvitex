import React, { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsapConfig';

const text1 = "THE KEYBOARD IS";
const text2 = "NO LONGER A TOOL.";
const text3 = "IT IS AN EXTENSION";
const text4 = "OF YOUR MIND.";

export function Manifesto() {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      stagger: 0.015,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
      }
    });
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="inline-block overflow-hidden relative">
        <span className="inline-block char opacity-0 translate-y-full will-change-transform">
          {char === ' ' ? '\u00A0' : char}
        </span>
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-32 px-8 z-10 border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0yMCAwaC0xdi41aDF2LS41em0tMjAgMHYuNWgxdS0uNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPgo8L3N2Zz4=')] opacity-20" />
      
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full scale-150 mix-blend-screen pointer-events-none" />
        <h2 className="relative text-[7vw] leading-[1.05] font-heading font-medium tracking-tight text-white uppercase mix-blend-difference select-none">
          <div className="flex flex-wrap justify-center overflow-hidden">{splitText(text1)}</div>
          <div className="flex flex-wrap justify-center overflow-hidden text-secondary">{splitText(text2)}</div>
          <div className="flex flex-wrap justify-center overflow-hidden">{splitText(text3)}</div>
          <div className="flex flex-wrap justify-center overflow-hidden text-secondary">{splitText(text4)}</div>
        </h2>
      </div>
    </section>
  );
}
