import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './ui/CustomCursor';
import { AmbientGlow } from './ui/AmbientGlow';
import { Header } from './ui/Header';
import { HeroSequence } from './components/HeroSequence';
import { PremiumShowcase } from './components/PremiumShowcase';
import { Testimonials } from './components/Testimonials';
import { AboutContact } from './components/AboutContact';
import { Footer } from './components/Footer';

function App() {
  useLenis(); // Initialize smooth scroll
  const [frameProgress, setFrameProgress] = useState(0);

  return (
    <div className="bg-background min-h-screen text-primary selection:bg-white/20">
      <AmbientGlow />
      <CustomCursor frameProgress={frameProgress} />
      <Header />
      
      <HeroSequence onProgress={setFrameProgress} />
      
      <PremiumShowcase />
      <Testimonials />
      <AboutContact />
      
      <Footer />
    </div>
  );
}

export default App;
