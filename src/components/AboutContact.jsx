import React, { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsapConfig';
import { RevealMask } from '../ui/RevealMask';

export function AboutContact() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal Left Side (About)
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );

      // Reveal Right Side (Contact Form)
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-transparent py-32 px-8 flex items-center justify-center overflow-hidden z-10 border-t border-white/5">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(212,175,55,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 relative z-10">
        
        {/* Left Side: About / Ethos */}
        <div ref={leftRef} className="flex flex-col justify-center">
          <RevealMask>
            <h2 className="text-section-title font-heading tracking-tight mb-8">The Ethos</h2>
          </RevealMask>
          
          <div className="space-y-8 text-lg font-body font-light text-secondary leading-relaxed">
            <p className="text-white/90">
              AETERNA wasn't born in a boardroom. It was forged from an obsession with acoustic perfection and uncompromising material science.
            </p>
            <p>
              We believe a keyboard is more than an input device—it's the vital conduit between human thought and digital creation. Every micrometer of aluminum, every custom spring weight, and every layer of acoustic dampening foam is meticulously engineered to vanish beneath your fingertips, leaving only pure, uninterrupted flow.
            </p>
            <p className="font-heading text-xl text-gold-light italic tracking-wide">
              "We don't build peripherals. We build generational instruments."
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div ref={rightRef} className="flex flex-col justify-center">
          <div className="relative w-full rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-10 lg:p-14 overflow-hidden">
            
            {/* Form Glass Lighting */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <h3 className="relative z-10 text-3xl font-heading text-white mb-2">Connect</h3>
            <p className="relative z-10 text-sm font-mono text-gold-base uppercase tracking-widest mb-10">Join the inner circle</p>

            <form className="relative z-10 flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Input */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-base transition-colors placeholder-transparent"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 text-secondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-light pointer-events-none uppercase tracking-widest font-mono"
                >
                  Designation (Name)
                </label>
                {/* Active glow line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-gold-base w-0 peer-focus:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              </div>

              {/* Email Input */}
              <div className="relative group mt-2">
                <input 
                  type="email" 
                  id="email"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-base transition-colors placeholder-transparent"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-3 text-secondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-light pointer-events-none uppercase tracking-widest font-mono"
                >
                  Transmission Vector (Email)
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] bg-gold-base w-0 peer-focus:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              </div>

              {/* Message Input */}
              <div className="relative group mt-2">
                <textarea 
                  id="message"
                  rows="3"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-base transition-colors placeholder-transparent resize-none"
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-3 text-secondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold-light pointer-events-none uppercase tracking-widest font-mono"
                >
                  Signal Payload (Message)
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] bg-gold-base w-0 peer-focus:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              </div>

              {/* Submit Button */}
              <button className="group relative w-full md:w-auto self-start mt-6 px-10 py-4 rounded-full bg-[#050505] text-white font-body font-medium text-sm tracking-widest uppercase border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 hover:border-gold-base/30 overflow-hidden">
                <span className="relative z-10">Initiate Uplink</span>
                <span className="relative z-10 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center group-hover:translate-x-1 group-hover:bg-gold-light transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
                
                {/* Button Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-base/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
