import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Box, Layers, Cpu, Code, PenTool, Database } from 'lucide-react';

const services = [
  { 
    icon: <Code className="w-6 h-6" />, 
    title: 'DEVELOPMENT', 
    desc: 'Full-stack engineering with a focus on performance and scalability. We build robust applications that deliver results.',
    items: ['React / Next.js', 'Node.js / Python', 'Mobile Apps', 'API Development']
  },
  { 
    icon: <PenTool className="w-6 h-6" />, 
    title: 'DESIGN', 
    desc: 'Modern UI/UX design focused on user experience. We create beautiful interfaces that users love to interact with.',
    items: ['Interface Design', 'User Experience', 'Motion Design', 'Design Systems']
  },
  { 
    icon: <Cpu className="w-6 h-6" />, 
    title: 'STRATEGY', 
    desc: 'Strategic planning and consulting services. We help you define your technical roadmap and achieve your business goals.',
    items: ['Technical Consulting', 'Product Strategy', 'AI Integration', 'System Architecture']
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