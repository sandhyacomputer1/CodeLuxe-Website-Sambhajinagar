import React from 'react';
import { motion } from 'framer-motion';
import discoveryImg from '../assets/custom_new.png';
import designImg from '../assets/uiux_new.png';
import buildImg from '../assets/web_new.png';
import launchImg from '../assets/mobile_new.png';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Uncover insights and identify key opportunities to shape your vision. Lay the groundwork for a successful project with thorough research and analysis.",
    image: discoveryImg,
  },
  {
    number: "02",
    title: "Design",
    description: "Transform ideas into tangible designs that resonate. Craft user-centric solutions with creativity and precision.",
    image: designImg,
  },
  {
    number: "03",
    title: "Build",
    description: "Bring your vision to life with expert craftsmanship and cutting-edge technology. Develop robust solutions that meet your exact specifications.",
    image: buildImg,
  },
  {
    number: "04",
    title: "Launch",
    description: "Introduce your product to the world with a strategic and impactful launch. Ensure a seamless transition from concept to reality, setting the stage for success.",
    image: launchImg,
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.4] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-100" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-light)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Our Workflow</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-6">
            Our Development <span className="text-slate-400">Process</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            A systematic approach to transforming complex challenges into elegant digital realities.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connecting Arrows */}
          <div className="hidden lg:block absolute top-[25%] left-0 w-full z-0 h-24">
            <svg width="100%" height="100%" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[85%] mx-auto opacity-40">
              {/* Arrow 1 to 2 */}
              <path d="M 180 50 Q 280 10 380 50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 6" fill="none" />
              <path d="M 375 45 L 382 50 L 375 55" stroke="#3B82F6" strokeWidth="2" fill="none" />
              
              {/* Arrow 2 to 3 */}
              <path d="M 420 50 Q 520 90 620 50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 6" fill="none" />
              <path d="M 615 45 L 622 50 L 615 55" stroke="#3B82F6" strokeWidth="2" fill="none" />
              
              {/* Arrow 3 to 4 */}
              <path d="M 660 50 Q 760 10 860 50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 6" fill="none" />
              <path d="M 855 45 L 862 50 L 855 55" stroke="#3B82F6" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  {/* Step Number Badge */}
                  <div className="absolute top-0 -left-4 z-20 w-12 h-12 rounded-2xl bg-white border-2 border-slate-50 flex items-center justify-center shadow-lg transform -translate-y-1/2 transition-transform duration-500">
                    <span className="text-base font-black text-slate-900 tracking-tighter">{step.number}</span>
                  </div>
                  
                  {/* Circular Image with animated border */}
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 border-2 border-slate-100 group-hover:border-accent-blue/30 transition-all duration-700 ease-out overflow-visible bg-white shadow-sm">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                       <img 
                        src={step.image} 
                        alt={step.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                  </div>
                </div>

                <h4 className="text-2xl font-black font-serif text-slate-900 mb-4 group-hover:text-accent-blue transition-colors tracking-wide">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm font-medium leading-[1.8] max-w-xs px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
