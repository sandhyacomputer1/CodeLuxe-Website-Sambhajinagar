import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, X, ArrowLeft, Clock, MessageSquare, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const message = `*New Contact Inquiry*%0A%0A*Name:* ${contactForm.name}%0A*Email:* ${contactForm.email}%0A*Phone:* ${contactForm.phone}%0A*Company:* ${contactForm.company}%0A*Subject:* ${contactForm.subject}%0A*Message:* ${contactForm.message}%0A%0APlease respond to this inquiry as soon as possible.`;
    const whatsappUrl = `https://wa.me/919527537131?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setContactForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "Pune, Maharashtra, India",
      description: "Come visit us for a coffee and discussion about your project"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 95275 37131",
      description: "Available Monday to Friday, 9 AM to 6 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@codeluxe.com",
      description: "Send us an email and we'll respond within 24 hours"
    }
  ];

  const reasons = [
    {
      icon: CheckCircle,
      title: "Quick Response",
      desc: "We respond to all inquiries within 24 hours"
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Get advice from our experienced professionals"
    },
    {
      icon: MessageSquare,
      title: "Free Consultation",
      desc: "Initial consultation is completely free"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      desc: "Schedule calls at your convenience"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-accent-blue/10 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-accent-blue text-sm font-bold uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-6 leading-tight">
              Let's Start a
              <span className="block text-accent-blue">Conversation</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Have a project in mind? We'd love to hear about it. 
              Reach out to us and let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-blue text-white font-black rounded-full shadow-lg hover:bg-blue-700 transition-all inline-block"
              >
                Send Message
              </motion.a>
              <motion.a
                href="#contact-info"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-black rounded-full hover:border-accent-blue hover:text-accent-blue transition-all inline-block"
              >
                Contact Info
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods Section */}
      <section id="contact-info" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4">
              Get in
              <span className="text-accent-blue"> Touch</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose your preferred way to reach us - we're always here to help
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{method.title}</h3>
                <p className="text-lg font-bold text-accent-blue mb-3">{method.details}</p>
                <p className="text-slate-600 leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4">
              Why Contact
              <span className="text-accent-blue"> Code Luxe?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We make it easy and convenient to start your project journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4">
              Send Us a
              <span className="text-accent-blue"> Message</span>
            </h2>
            <p className="text-xl text-slate-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 shadow-lg"
          >
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-slate-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-slate-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-slate-900 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-slate-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={contactForm.company}
                    onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black text-slate-900 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.subject}
                  onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-slate-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 px-8 py-4 bg-accent-blue text-white font-black rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message via WhatsApp
                </button>
              </div>

              <div className="text-center text-sm text-slate-500">
                <p>By submitting this form, you agree to be contacted via WhatsApp and email.</p>
                <p>We typically respond within 24 hours.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
