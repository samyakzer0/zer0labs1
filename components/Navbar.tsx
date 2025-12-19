import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'HOME', href: '#hero' },
    { name: 'WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'AGENCY', href: '#agency' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 md:py-5 lg:px-12 flex justify-between items-center border-b border-white/5 bg-black/10 backdrop-blur-md transition-all duration-300">
        {/* Brand / Logo */}
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center gap-2 sm:gap-3 group cursor-pointer z-50">
          <span className="text-white font-bold tracking-normal font-pixel text-[9px] sm:text-[10px] md:text-xs group-hover:text-cyan-400 transition-colors">
           zer0Labs
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-gray-400 hover:text-white text-[10px] xl:text-xs tracking-normal font-pixel transition-colors relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 steps(4)" />
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="hidden sm:flex group items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 bg-white/5 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm">
          <span className="text-[9px] sm:text-[10px] font-bold tracking-normal font-pixel">START</span>
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden z-50 p-2 text-white hover:text-cyan-400 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black/95 backdrop-blur-lg transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-black/98 backdrop-blur-xl border-l border-white/10 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-start gap-6 p-8 pt-24">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-gray-300 hover:text-white text-sm font-pixel transition-colors w-full border-b border-white/10 pb-4"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleClick(e, '#contact')} 
              className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-pixel text-xs hover:bg-cyan-400 transition-colors"
            >
              <span>START PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};