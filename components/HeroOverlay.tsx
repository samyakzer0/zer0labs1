import React from 'react';
import { ChevronRight, Radio, Activity, Menu } from 'lucide-react';

interface HeroOverlayProps {
  onOpenLog: () => void;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({ onOpenLog }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-16 pointer-events-none">
      
      {/* Header */}
      <header className="flex justify-between items-center pointer-events-auto animate-fade-in-down">
        <div className="flex items-center gap-2">
          <Activity className="text-cyan-400 w-6 h-6 animate-pulse" />
          <span className="text-lg md:text-xl font-bold tracking-tight text-white font-pixel">
            EVENT HORIZON
          </span>
        </div>
        <button 
          onClick={onOpenLog}
          className="p-3 hover:bg-white/10 transition-colors border-2 border-white/20 backdrop-blur-md group"
        >
          <Menu className="w-6 h-6 text-white group-hover:text-cyan-400" />
        </button>
      </header>

      {/* Center Hero Text */}
      <main className="flex flex-col items-start justify-center max-w-5xl mt-12 pointer-events-auto">
        <div className="flex items-center gap-2 mb-6">
           <span className="px-3 py-2 text-[10px] font-pixel text-cyan-400 bg-cyan-900/30 border-2 border-cyan-500/30 backdrop-blur-md">
             SECTOR 7G • ANOMALY DETECTED
           </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-8 drop-shadow-lg leading-tight font-pixel">
          BEYOND THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">SINGULARITY</span>
        </h1>
        
        <p className="text-sm md:text-base text-gray-300 max-w-xl mb-12 leading-loose font-bold border-l-4 border-orange-500 pl-6 bg-gradient-to-r from-black/50 to-transparent backdrop-blur-sm p-4 font-mono">
          Join the Perseus Station crew as we monitor the accretion disk of Gargantua. 
          Real-time telemetry and AI-assisted anomaly detection now online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onOpenLog}
            className="group relative px-6 py-4 bg-white text-black font-pixel text-xs hover:bg-cyan-50 transition-all duration-300 overflow-hidden flex items-center gap-2 border-b-4 border-gray-400 hover:border-cyan-600 hover:translate-y-[2px]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            INITIATE DOCKING
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-6 py-4 border-2 border-white/20 text-white font-pixel text-xs hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md flex items-center gap-3">
             <Radio className="w-4 h-4 text-red-500 animate-pulse" />
             LIVE FEED
          </button>
        </div>
      </main>

      {/* Footer Metrics */}
      <footer className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-t-2 border-white/10 pt-6 pointer-events-auto backdrop-blur-[2px]">
        <div className="flex gap-8 text-[10px] md:text-xs font-pixel text-gray-400">
          <div>
            <span className="block text-gray-600 mb-2">Gravity</span>
            <span className="text-white">142.5 G</span>
          </div>
          <div>
            <span className="block text-gray-600 mb-2">Time Dilation</span>
            <span className="text-white">1 : 7.2 Years</span>
          </div>
          <div>
            <span className="block text-gray-600 mb-2">Orbit Velocity</span>
            <span className="text-white">67,000 km/h</span>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-[10px] text-gray-500 font-pixel mb-1">SYSTEM STATUS: NOMINAL</p>
          <p className="text-[10px] text-gray-600 font-pixel">ID: PERSEUS-ALPHA-9</p>
        </div>
      </footer>
    </div>
  );
};