import React from 'react';
import AnimatedGradientBackground from './ui/animated-gradient-background';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 snap-start overflow-hidden">
      {/* Black Hole Gradient Background */}
      <AnimatedGradientBackground
        startingGap={80}
        Breathing={true}
        gradientColors={[
          "#000000",      // Pure black center (singularity)
          "#0a0a0a",      // Deep black
          "#1a1a2e",      // Dark blue-black
          "#0f3460",      // Deep space blue
          "#16213e",      // Midnight blue
          "#1a1a2e",      // Back to dark
          "#000000",      // Fade to black at edges
        ]}
        gradientStops={[0, 15, 30, 45, 60, 80, 100]}
        animationSpeed={0.015}
        breathingRange={8}
        topOffset={-20}
        containerClassName="opacity-90"
      />
      
      {/* Optional: Add accretion disk glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
    </section>
  );
};