import React from 'react';
import AnimatedGradientBackground from './ui/animated-gradient-background';
import { Component as TurbulentFlow } from './ui/turbulent-flow';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center snap-start overflow-hidden">
      {/* Layer 1: Turbulent Flow - Galactic Black Hole Effect */}
      

      {/* Layer 2: Animated Gradient Background - Black Hole Breathing */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
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
      </div>
      
      {/* Layer 3: Accretion disk glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      {/* Layer 4: Radial glow from center */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};