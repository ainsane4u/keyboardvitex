import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GradientBeam } from '../ui/GradientBeam';
import { MagneticButton } from '../ui/MagneticButton';
import { GlassCard } from '../ui/GlassCard';

export function RequestDemo() {
  const [stage, setStage] = useState(1);

  const nextStage = () => setStage(s => Math.min(s + 1, 4));
  
  return (
    <section className="relative w-full min-h-screen bg-transparent py-32 px-8 flex items-center justify-center border-t border-white/5 z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      
      <div className="w-full max-w-2xl relative z-10">
        <h2 className="text-section-title font-heading tracking-tight mb-4 text-center">Secure Your Allocation</h2>
        <p className="text-subtitle text-secondary text-center mb-16">The first production run is strictly limited.</p>
        
        <GlassCard className="relative overflow-hidden min-h-[400px] flex flex-col p-12">
          <GradientBeam className="opacity-50" />
          
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div 
                key="stage1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6 flex-grow justify-center relative z-10"
              >
                <input type="text" placeholder="Full Name" className="bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors" />
                <input type="text" placeholder="Company" className="bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors" />
                <input type="text" placeholder="Role" className="bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors" />
                <div className="mt-8 flex justify-end">
                  <MagneticButton onClick={nextStage}>Continue</MagneticButton>
                </div>
              </motion.div>
            )}
            
            {stage === 2 && (
              <motion.div 
                key="stage2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6 flex-grow justify-center relative z-10"
              >
                <h3 className="text-2xl font-heading text-white mb-4">Primary Use Case</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Development', 'Gaming', 'Creator', 'Enterprise'].map(use => (
                    <button key={use} onClick={nextStage} className="p-4 rounded-xl border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all text-white text-left cursor-none" data-magnetic="true">
                      {use}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === 3 && (
              <motion.div 
                key="stage3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6 flex-grow justify-center relative z-10"
              >
                <div className="flex flex-col gap-8">
                  <div>
                    <label className="text-secondary text-sm mb-2 block">Desired Quantity</label>
                    <input type="range" min="1" max="50" className="w-full accent-white cursor-none" data-magnetic="true" />
                  </div>
                  <select className="bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors cursor-none" data-magnetic="true">
                    <option className="bg-background">Delivery within 3 months</option>
                    <option className="bg-background">Delivery within 6 months</option>
                  </select>
                </div>
                <div className="mt-8 flex justify-end">
                  <MagneticButton onClick={nextStage}>Submit Request</MagneticButton>
                </div>
              </motion.div>
            )}

            {stage === 4 && (
              <motion.div 
                key="stage4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6 flex-grow justify-center relative z-10 text-center"
              >
                <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-4 bg-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-heading text-white">Welcome To The Future Of Typing.</h3>
                <p className="text-secondary">Your allocation request has been received. Our concierge will contact you shortly.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  );
}
