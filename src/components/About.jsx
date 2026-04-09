import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-0 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-[80px]" />
            <h2 className="text-sm font-black tracking-[0.2em] text-accent-blue uppercase mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-8 leading-[1.1]">
              Trusted Franchise, <br /> <span className="text-slate-400">Independent Excellence.</span>
            </h3>
            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              Code Luxe Technologies operates as a trusted franchise of Sandhya SoftTech Pvt Ltd, a well-established IT organization known for delivering reliable and scalable digital solutions. We combine the strength of enterprise-level infrastructure with a modern, innovative approach to provide premium, client-focused services.
              <br/><br/>
              As a franchise, we follow proven systems and industry best practices while maintaining our own identity—focused on delivering high-quality, performance-driven, and user-centric solutions.
              <br/><br/>
              We act as a technology partner for businesses, helping them achieve sustainable digital growth through innovation, precision, and excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-slate-100"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-10 left-10 right-10 z-20">
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 shadow-2xl">
                <p className="text-xl font-serif text-slate-900 mb-4 font-black italic">"Luxury Code. Powerful Solutions."</p>
                <div className="flex items-center justify-between">
                  <p className="text-accent-blue font-bold tracking-widest uppercase text-xs">— Code Lucx Vision</p>
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 shadow-sm" />
                    ))}
                    <div className="w-10 h-10 rounded-full border-4 border-white bg-accent-blue flex items-center justify-center text-[10px] font-black text-white shadow-sm font-sans tracking-tight">50+</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <ShieldCheck className="w-6 h-6" />, title: "Trust & Reliability", desc: "Backed by enterprise-level processes and the foundation of Sandhya SoftTech Pvt Ltd, we ensure secure, stable, and dependable solutions." },
            { icon: <Target className="w-6 h-6" />, title: "Visionary Innovation", desc: "We continuously adopt the latest technologies and modern frameworks to deliver high-performance applications." },
            { icon: <Trophy className="w-6 h-6" />, title: "Elite Expertise", desc: "Our skilled developers and creative designers bring deep technical knowledge and a passion for building premium digital experiences." }
          ].map((item, idx) => (
            <div key={idx} className="group relative bg-white p-6 rounded-2xl border-l-[6px] border-slate-100 hover:border-accent-blue shadow-xl shadow-blue-600/5 hover:shadow-2xl hover:shadow-blue-600/15 transition-all duration-300 flex items-center space-x-6 min-h-[140px]">
              <div className="flex-shrink-0 p-4 bg-slate-50 rounded-2xl text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg font-black text-slate-900 mb-1 tracking-tight group-hover:text-accent-blue transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 font-medium leading-snug text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
