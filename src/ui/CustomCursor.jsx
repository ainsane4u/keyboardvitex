import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsapConfig';
import { cn } from '../lib/utils';

export function CustomCursor({ frameProgress = null }) {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Hide default cursor completely if not touch
    if (typeof window !== 'undefined' && !('ontouchstart' in window)) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // quickTo for performant follow
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power3' });

    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseOver = (e) => {
      if (
        e.target.closest('[data-magnetic]') || 
        e.target.closest('button') || 
        e.target.closest('a') ||
        e.target.closest('input')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    >
      <div 
        className={cn(
          "relative flex items-center justify-center rounded-full transition-all duration-300 ease-out border border-white/50",
          isHovered ? "w-16 h-16 bg-white/10 backdrop-blur-sm" : "w-3 h-3 bg-white"
        )}
      >
        {frameProgress !== null && !isHovered && (
          <span className="absolute -bottom-6 text-[10px] text-white font-mono opacity-80 whitespace-nowrap">
            {Math.round(frameProgress * 100)}%
          </span>
        )}
      </div>
    </div>
  );
}
