import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight, Sparkles, Zap } from 'lucide-react';
import webDevImage from '../assets/web.jpg';
import mobileAppImage from '../assets/mobile.jpg';
import customSoftwareImage from '../assets/coustom.jpg';
import uiUxImage from '../assets/uiux.jpg';

const servicesList = [
  {
    image: webDevImage,
    title: "Web Development",
    description: "Modern, responsive, and SEO-optimized websites built using the latest technologies to ensure speed, performance, and seamless user experience.",
    gradient: "from-blue-500 to-cyan-500",
    hoverIcon: <Sparkles className="w-5 h-5" />
  },
  {
    image: mobileAppImage,
    title: "Mobile App Development",
    description: "High-quality Android and cross-platform mobile applications designed for performance, scalability, and intuitive user interaction.",
    gradient: "from-purple-500 to-pink-500",
    hoverIcon: <Zap className="w-5 h-5" />
  },
  {
    image: customSoftwareImage,
    title: "Custom Software",
    description: "Tailor-made software systems designed to solve complex business challenges and streamline operations efficiently.",
    gradient: "from-green-500 to-emerald-500",
    hoverIcon: <ArrowUpRight className="w-5 h-5" />
  },
  {
    image: uiUxImage,
    title: "UI/UX Design",
    description: "Elegant, user-focused interface designs that combine creativity with usability to deliver premium digital experiences.",
    gradient: "from-orange-500 to-red-500",
    hoverIcon: <ChevronRight className="w-5 h-5" />
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-[100px] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent-blue uppercase mb-4">Our Services</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-black text-slate-900 mb-8 leading-tight">
            Advanced Digital Capabilities
          </h3>
          <p className="text-xl text-slate-600 font-medium">
            We specialize in modern web, mobile, and software development—focused on performance, scalability, and exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full min-h-[520px]"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-black text-slate-900 mb-3 font-serif">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium mb-6 line-clamp-4 flex-1">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-accent-blue font-bold text-xs tracking-widest uppercase">
                    Learn More
                  </span>
                  <div className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
