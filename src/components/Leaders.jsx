import React from 'react';
import { motion } from 'framer-motion';
import founderImage from '../assets/founderphoto.png';
import directorImage from '../assets/directorCO.png';

const leadersList = [
  {
    image: founderImage,
    name: "Mukesh Patel",
    title: "Founder & CEO",
    description: "Visionary leader with extensive experience in technology and business strategy, driving innovation and excellence."
  },
  {
    image: directorImage,
    name: "Swati Bedge",
    title: "Director & CTO",
    description: "Technical expert with a passion for cutting-edge solutions and architectural excellence in software development."
  }
];

const Leaders = () => {
  return (
    <section id="leaders" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-[100px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent-blue uppercase mb-4">Our Leadership</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-black text-slate-900 mb-8 leading-tight">
            Meet Our Leaders
          </h3>
          <p className="text-xl text-slate-600 font-medium">
            Led by experienced professionals committed to innovation, excellence, and delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {leadersList.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              {/* Image Container */}
              <div className="relative mx-auto w-72 h-72 mb-8 overflow-hidden rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.1) brightness(1.05)'
                  }}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h4 className="text-2xl font-black text-slate-900 mb-2 font-serif">
                {leader.name}
              </h4>
              <h5 className="text-lg font-semibold text-accent-blue mb-4">
                {leader.title}
              </h5>
              <p className="text-slate-600 leading-relaxed font-medium max-w-sm mx-auto">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leaders;
