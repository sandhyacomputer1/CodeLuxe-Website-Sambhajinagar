import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Cpu, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "High Performance",
    desc: "We build systems optimized for zero-latency, handling millions of requests with absolute precision."
  },
  {
    icon: <Activity className="w-8 h-8 text-white" />,
    title: "Scalable Architecture",
    desc: "Cloud-native, microservices-based architectures that grow alongside your global business needs."
  },
  {
    icon: <Cpu className="w-8 h-8 text-white" />,
    title: "Modern Technology",
    desc: "Staying ahead of the digital curve, we employ only the most secure and modern tech stacks."
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Client-Centric Approach",
    desc: "Boutique white-glove service from ideation to deployment, tailored exclusively for your success."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-black tracking-[0.4em] text-accent-blue uppercase mb-6">Why Choose Us</h2>
            <h3 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-10 leading-[1.05]">
              Engineering the <br/> <span className="text-gradient">Future</span> of Digital.
            </h3>
            <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">
              At Code Luxe Technologies, we don't just write code; we craft digital master-pieces. Our unique position as a boutique franchise within a larger IT ecosystem guarantees both small-team agility and massive enterprise power.
            </p>
            
            <div className="flex items-center space-x-6 mb-12 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 max-w-fit">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-200 shadow-sm" />
                ))}
              </div>
              <div className="flex flex-col">
                <p className="text-slate-900 font-black text-lg">Trusted by 100+ Brands</p>
                <div className="flex text-amber-500 text-xl tracking-tighter">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-lg border border-slate-100 hover:border-accent-blue/30 transition-all duration-500 shadow-sm hover:shadow-2xl group"
              >
                <div className="w-16 h-16 bg-accent-blue rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform duration-500">
                  {reason.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 font-serif">{reason.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
