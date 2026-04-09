import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Send, X, ArrowLeft, CheckCircle, Heart, Lightbulb, Target, Award, TrendingUp, Star, Handshake, Users2, Brain, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const positions = [
  "Senior React Developer",
  "Full Stack Developer", 
  "UI/UX Designer",
  "Digital Marketing Specialist",
  "Business Development Executive",
  "Project Manager",
  "Quality Assurance Engineer",
  "DevOps Engineer",
  "Data Analyst",
  "Content Writer"
];

const experienceLevels = [
  "Fresher (0-1 years)",
  "Junior (1-2 years)",
  "Mid-level (2-4 years)",
  "Senior (4-6 years)",
  "Lead (6+ years)"
];

const CareersPage = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    mobile: '',
    position: '',
    experience: '',
    resumeLink: '',
    message: ''
  });

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    const message = `*New Job Application*%0A%0A*Name:* ${applicationForm.name}%0A*Email:* ${applicationForm.email}%0A*Phone:* ${applicationForm.mobile}%0A*Position Applied For:* ${applicationForm.position}%0A*Experience:* ${applicationForm.experience}%0A*Resume Link:* ${applicationForm.resumeLink}%0A*Why join us:* ${applicationForm.message || 'No additional message'}%0A%0APlease review this application and contact within 24 hours.`;
    const whatsappUrl = `https://wa.me/919527537131?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setApplicationForm({
      name: '',
      email: '',
      mobile: '',
      position: '',
      experience: '',
      resumeLink: '',
      message: ''
    });
  };

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
              <Briefcase className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-accent-blue text-sm font-bold uppercase tracking-wider">Join Our Team</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-6 leading-tight">
              Build Your
              <span className="block text-accent-blue">Career With Us</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join a team of passionate innovators creating cutting-edge solutions. 
              We believe in nurturing talent, fostering growth, and building careers that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#application-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-blue text-white font-black rounded-full shadow-lg hover:bg-blue-700 transition-all inline-block"
              >
                Apply Now
              </motion.a>
              <motion.a
                href="#why-join-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-black rounded-full hover:border-accent-blue hover:text-accent-blue transition-all inline-block"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <section id="why-join-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4">
              Why Join
              <span className="text-accent-blue"> Code Luxe?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're more than just a workplace – we're a community of innovators, creators, and problem-solvers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Inclusive Culture</h3>
              <p className="text-slate-600 leading-relaxed">
                We foster an environment where every voice matters, ideas are valued, and diversity drives innovation. 
                Your unique perspective is your greatest asset here.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Innovation First</h3>
              <p className="text-slate-600 leading-relaxed">
                Work on cutting-edge projects that challenge the status quo. 
                We encourage experimentation, learning, and pushing boundaries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Growth Focused</h3>
              <p className="text-slate-600 leading-relaxed">
                Your growth is our priority. With mentorship programs, learning budgets, 
                and clear career paths, we invest in your future.
              </p>
            </motion.div>
          </div>

          {/* Company Values */}
          <div className="w-full bg-white rounded-3xl p-12 shadow-lg border border-slate-100">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-accent-blue/10 rounded-full mb-6">
                <Award className="w-4 h-4 text-accent-blue mr-2" />
                <span className="text-accent-blue text-sm font-bold uppercase tracking-wider">Our Core Values</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4">
                Our Values Drive
                <span className="block text-accent-blue">Everything We Do</span>
              </h3>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
                These principles guide our decisions, shape our culture, and define who we are as a company.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    title: "Excellence", 
                    desc: "We pursue perfection in every line of code and every client interaction.",
                    icon: <Star className="w-8 h-8 text-white" />,
                    color: "from-yellow-400 to-amber-500"
                  },
                  { 
                    title: "Integrity", 
                    desc: "Honesty and transparency guide our decisions and relationships.",
                    icon: <Handshake className="w-8 h-8 text-white" />,
                    color: "from-blue-400 to-cyan-500"
                  },
                  { 
                    title: "Collaboration", 
                    desc: "Together we achieve more than we ever could alone.",
                    icon: <Users2 className="w-8 h-8 text-white" />,
                    color: "from-purple-400 to-pink-500"
                  },
                  { 
                    title: "Innovation", 
                    desc: "We challenge conventions and create the future of technology.",
                    icon: <Brain className="w-8 h-8 text-white" />,
                    color: "from-emerald-400 to-teal-500"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-slate-100">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow`}>
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-black text-slate-900 mb-3">{value.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We take care of our team so they can focus on doing their best work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Award, 
                title: "Competitive Salary", 
                desc: "Industry-leading compensation with regular reviews",
                color: "from-green-400 to-emerald-500"
              },
              { 
                icon: Heart, 
                title: "Health Insurance", 
                desc: "Comprehensive medical coverage for you and your family",
                color: "from-red-400 to-pink-500"
              },
              { 
                icon: Lightbulb, 
                title: "Learning Budget", 
                desc: "Annual budget for courses, conferences, and certifications",
                color: "from-yellow-400 to-orange-500"
              },
              { 
                icon: Target, 
                title: "Flexible Work", 
                desc: "Hybrid work model with flexible hours",
                color: "from-blue-400 to-indigo-500"
              },
              { 
                icon: Users, 
                title: "Team Events", 
                desc: "Regular team outings, celebrations, and activities",
                color: "from-purple-400 to-violet-500"
              },
              { 
                icon: TrendingUp, 
                title: "Career Growth", 
                desc: "Clear progression paths and internal promotion opportunities",
                color: "from-cyan-400 to-blue-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-accent-blue/50">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Application Form Section */}
      <section id="application-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4">
              Apply for a Position
            </h2>
            <p className="text-xl text-slate-600">
              Fill out the form below and we'll contact you within 24 hours!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 shadow-lg"
          >
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-slate-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationForm.name}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, name: e.target.value }))}
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
                    value={applicationForm.email}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
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
                    value={applicationForm.mobile}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, mobile: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-slate-900 mb-2">
                    Position Applied For <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={applicationForm.position}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, position: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  >
                    <option value="">Select Position</option>
                    {positions.map((position) => (
                      <option key={position} value={position}>{position}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-black text-slate-900 mb-2">
                  Experience <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={applicationForm.experience}
                  onChange={(e) => setApplicationForm(prev => ({ ...prev, experience: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                >
                  <option value="">Select Experience</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-black text-slate-900 mb-2">
                  Resume Link (Google Drive/Dropbox) <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  value={applicationForm.resumeLink}
                  onChange={(e) => setApplicationForm(prev => ({ ...prev, resumeLink: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="https://drive.google.com/file/..."
                />
                <p className="text-xs text-slate-500 mt-1">
                  Upload your resume to Google Drive/Dropbox and share the link
                </p>
              </div>

              <div>
                <label className="block text-sm font-black text-slate-900 mb-2">
                  Why do you want to join us?
                </label>
                <textarea
                  value={applicationForm.message}
                  onChange={(e) => setApplicationForm(prev => ({ ...prev, message: e.target.value }))}
                  rows="6"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-none"
                  placeholder="Tell us about yourself and why you're interested..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 px-8 py-4 bg-accent-blue text-white font-black rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application via WhatsApp
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

      {/* Simple HR Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-200">
              <div className="inline-flex items-center px-4 py-2 bg-accent-blue/10 rounded-full mb-6">
                <Users className="w-4 h-4 text-accent-blue mr-2" />
                <span className="text-accent-blue text-sm font-bold uppercase tracking-wider">Join Our Team</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-4">
                Don't See Your
                <span className="block text-accent-blue">Dream Role?</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send your resume to our HR team and we'll keep you in mind for future openings.
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-accent-blue" />
                  <span className="text-xl font-black text-slate-900">careers@codeluxe.com</span>
                </div>
                <p className="text-sm text-slate-600">
                  Send your resume with the subject "Career Opportunities" 
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
