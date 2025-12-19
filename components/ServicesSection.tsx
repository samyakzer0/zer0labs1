import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Rocket, Layout, Briefcase, Code } from 'lucide-react';

const services = [
  { 
    icon: <Layout className="w-6 h-6" />, 
    title: 'WEB SOLUTIONS', 
    desc: 'Professional web development services tailored to your needs. From landing pages to complete portfolio websites.',
    items: ['Landing Pages', 'Portfolio Websites', 'Hero Sections', 'Responsive Design']
  },
  { 
    icon: <Rocket className="w-6 h-6" />, 
    title: 'PRODUCT DEVELOPMENT', 
    desc: 'Transform your ideas into reality. We build MVPs and full-featured products with modern technologies.',
    items: ['MVP Development', 'Product Design', 'User Testing', 'Iterative Development']
  },
  { 
    icon: <Code className="w-6 h-6" />, 
    title: 'COLLEGE PROJECTS', 
    desc: 'End-to-end development for college side projects. From concept to deployment, we help bring your academic projects to life.',
    items: ['Full-Stack Development', 'Project Planning', 'Documentation', 'Deployment Support']
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-black/90 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="SERVICES" subtitle="WHAT WE DO" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service, idx) => (
            <div key={idx} className="bg-black/80 p-6 sm:p-8 md:p-10 hover:bg-white/5 transition-colors duration-300 group">
              <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-white/5 w-fit border border-white/10 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl text-white font-pixel mb-4 sm:mb-6">{service.title}</h3>
              <p className="text-gray-400 font-mono leading-relaxed mb-6 sm:mb-8 text-xs sm:text-sm">
                {service.desc}
              </p>

              <ul className="space-y-2 sm:space-y-3">
                {service.items.map(item => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 font-pixel group-hover:text-gray-300 transition-colors">
                    <div className="w-1 h-1 bg-cyan-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};