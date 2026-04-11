import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import bgVideo from '../assets/BGvideo.mp4';
import BrochureDownload from './BrochureDownload';

const Hero = () => {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-16" role="banner">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/20" /> {/* Subtle overlay for better visibility on white bg */}
      </div>

      <div className="relative z-10 w-full max-w-[95vw] mx-auto px-6 text-center flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-6 py-2 mb-10 shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-black uppercase">Premium Software Development Company</span>
        </motion.div>

        {/* Big One-Line Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[91px] font-black tracking-tight mb-8 leading-none text-slate-900"
        >
          Building <span className="text-blue-500">Premium</span> <br className="sm:hidden" />Digital Solutions
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="animated-border-card w-full max-w-xl mx-auto mt-9 rounded-[2.5rem] shadow-2xl"
        >
          <div className="w-full h-full bg-slate-50 rounded-[2.4rem] p-6 md:p-8 flex flex-col items-center text-center relative z-10">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6">
              Elite Engineering & Software Design
            </span>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-5 leading-tight tracking-tight">
              Luxury Code. <span className="text-blue-600">Powerful</span> Solutions.
            </h2>

            <p className="text-[13px] md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
              We deliver scalability and high-performance through <br className="md:block" /> innovative engineering and world-class design software.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons Below the Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 w-full justify-center items-center mt-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group flex items-center justify-center px-10 py-3.5 text-sm md:text-base rounded-full bg-white text-slate-800 border-2 border-slate-200 font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 w-full sm:w-auto uppercase tracking-widest shadow-md hover:shadow-xl"
          >
            VIEW PROJECTS
          </motion.a>

          <BrochureDownload />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
        >
          <div className="w-[2px] h-16 bg-gradient-to-b from-blue-500 via-slate-400 to-transparent rounded-full shadow-sm" />
        </motion.div>
      </div>

    </header>
  );
};

export default Hero;
