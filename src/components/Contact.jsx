import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative bg-white">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black tracking-[0.4em] text-accent-blue uppercase mb-4">Get In Touch</h2>
          <h3 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-8 leading-tight">
            Start Your <span className="text-gradient">Transformation</span>
          </h3>
          <p className="text-xl text-slate-600 font-medium">
            Whether you have a concrete project or just the spark of an idea, our experts are ready to guide your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20" />
          
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-12 relative z-10">
            <div>
              <h4 className="text-3xl font-black text-slate-900 mb-6 font-serif">Contact Details</h4>
              <p className="text-slate-600 font-medium mb-10 leading-relaxed">Reach out directly through our dedicated premium communication channels.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-blue-50">
                  <Mail className="w-7 h-7 text-accent-blue" />
                </div>
                <div className="ml-6">
                  <p className="text-xs text-slate-400 font-black uppercase tracking-widest">Email Us</p>
                  <p className="text-slate-900 text-xl font-bold mt-1">hello@codeluxe.tech</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-blue-50">
                  <Phone className="w-7 h-7 text-accent-blue" />
                </div>
                <div className="ml-6">
                  <p className="text-xs text-slate-400 font-black uppercase tracking-widest">Call Us</p>
                  <p className="text-slate-900 text-xl font-bold mt-1">+1 (888) LUXE-CODE</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-blue-50">
                  <MapPin className="w-7 h-7 text-accent-blue" />
                </div>
                <div className="ml-6">
                  <p className="text-xs text-slate-400 font-black uppercase tracking-widest">HQ Location</p>
                  <p className="text-slate-900 text-xl font-bold mt-1">Innovation District, <br/> Suite 1000, New York</p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <a 
                href="https://wa.me/18885893263" 
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-[#25D366] text-white font-black shadow-xl shadow-green-200 hover:shadow-green-300 transition-all w-full md:w-auto hover:scale-105 active:scale-95"
              >
                Instant WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 relative z-10">
            <form className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Project Objective</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-8">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Message</label>
                <textarea 
                  rows="5"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full flex items-center justify-center px-10 py-5 rounded-2xl bg-accent-blue text-white font-black text-xl hover:shadow-2xl hover:shadow-blue-400 transition-all shadow-xl shadow-blue-200"
              >
                Send Request
                <Send className="ml-3 w-6 h-6" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
