import React from 'react';
import { SectionTitle } from './SectionTitle';

export const AgencySection: React.FC = () => {
  return (
    <section id="agency" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-black/85 backdrop-blur-sm border-t border-white/10 flex flex-col items-center text-center">
      <div className="max-w-4xl w-full">
        <div className="flex justify-center mb-8 sm:mb-12">
           <SectionTitle title="ABOUT US" subtitle="WHO WE ARE" className="!border-none !pl-0 items-center flex flex-col" />
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-mono leading-relaxed mb-8 sm:mb-12 px-4">
          "We believe in pushing boundaries and delivering exceptional digital experiences that make a difference."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 text-left">
          <div className="bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md">
             <h4 className="text-white font-pixel text-xs sm:text-sm mb-3 sm:mb-4 text-cyan-400">01. QUALITY</h4>
             <p className="text-gray-400 text-xs sm:text-sm leading-6 sm:leading-7">
               We believe in clean, maintainable code and thoughtful design. Every detail matters, from pixel-perfect interfaces to optimized performance.
             </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md">
             <h4 className="text-white font-pixel text-xs sm:text-sm mb-3 sm:mb-4 text-cyan-400">02. INNOVATION</h4>
             <p className="text-gray-400 text-xs sm:text-sm leading-6 sm:leading-7">
               Great digital experiences engage users. We design intuitive interfaces that create memorable user journeys and drive meaningful interactions.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};