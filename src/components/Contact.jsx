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
            Whether you have a concrete project or just a spark of an idea, our experts are ready to guide your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100"
          >
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-black text-slate-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-black text-slate-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-black text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-black text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-black text-slate-700 mb-2">Tell us about your project</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none resize-none"
                  placeholder="Share your vision, goals, and what you're looking to achieve..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Contact Cards */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600">+91 95275 37131</p>
                  <p className="text-sm text-slate-500">Mon-Fri 9AM-6PM IST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">info@codeluxe.com</p>
                  <p className="text-sm text-slate-500">24/7 Support Available</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-600">Karanti Chowk, Chatrapati Sambhajinagar</p>
                  <p className="text-sm text-slate-500">Maharashtra, 431001, India</p>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white">
              <h4 className="text-xl font-black mb-4">Quick Response Guarantee</h4>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We promise to respond to all inquiries within 24 hours. Your project deserves immediate attention and expert guidance.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Live Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
