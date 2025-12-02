import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-black border-t border-white/20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 sm:gap-12">
        <div className="w-full md:w-auto">
           <p className="text-cyan-400 font-pixel text-[10px] sm:text-xs mb-3 sm:mb-4 tracking-wider sm:tracking-widest">LET'S WORK TOGETHER</p>
           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-pixel mb-6 sm:mb-8 leading-tight">
             GET IN <br/> TOUCH
           </h2>
           <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-pixel text-[10px] sm:text-xs hover:bg-cyan-400 transition-colors duration-300">
             CONTACT US
           </button>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 w-full md:w-auto">
          <div>
            <h4 className="text-gray-500 font-pixel text-[9px] sm:text-[10px] mb-3 sm:mb-4">LOCATION</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 font-mono text-xs sm:text-sm">
              <li>San Francisco, CA</li>
              <li>United States</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 font-pixel text-[9px] sm:text-[10px] mb-3 sm:mb-4">LINKS</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 font-mono text-xs sm:text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-16 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 text-[9px] sm:text-[10px] text-gray-600 font-pixel">
        <span>© 2024 ZER0LABS</span>
        <span className="hidden sm:inline">ALL RIGHTS RESERVED</span>
      </div>
    </section>
  );
};