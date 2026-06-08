import React, { useRef, useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsapConfig';
import { useImageSequence } from '../hooks/useImageSequence';
import { cn } from '../lib/utils';

const FRAME_COUNT = 358;
const PIN_MULTIPLIER = 8; // 8x screen height for duration

const getFrameUrl = (index) => `/images/frames/frame_${String(index).padStart(6, '0')}.jpg`;

export function HeroSequence({ onProgress }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { images, progress: loadProgress } = useImageSequence(FRAME_COUNT, getFrameUrl);

  useEffect(() => {
    if (isMobile) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.width = 1920;
    canvas.height = 1080;

    const render = (index) => {
      if (images[index] && images[index].complete) {
        const img = images[index];
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        ctx.drawImage(img, 0, 0, img.width, img.height,
                      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    };

    render(0); // Attempt immediate render if cached

    let ctxGSAP = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * PIN_MULTIPLIER}`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const frameIndex = Math.max(0, Math.min(
              FRAME_COUNT - 1,
              Math.round(self.progress * (FRAME_COUNT - 1))
            ));
            render(frameIndex);
            if (onProgress) onProgress(self.progress);
          }
        }
      });
    }, containerRef);

    return () => ctxGSAP.revert();
  }, [images, isMobile, onProgress]);

  // Force re-render of current frame as images load in
  useEffect(() => {
    if (!isMobile) {
      ScrollTrigger.update();
    }
  }, [loadProgress, isMobile]);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-background overflow-hidden">
      {isMobile ? (
        <video 
          src="/videos/hero-mobile.mp4" 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        />
      ) : (
        <>
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover"
          />

          {loadProgress < 1 && (
            <div className="absolute bottom-8 right-8 text-xs font-mono text-secondary">
              Loading Sequence: {Math.round(loadProgress * 100)}%
            </div>
          )}
        </>
      )}
    </section>
  );
}
