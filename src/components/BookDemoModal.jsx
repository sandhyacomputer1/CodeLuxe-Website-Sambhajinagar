import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, Check } from 'lucide-react';

const BookDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web-development',
    product: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const products = [
    "MediCare Hospital Management",
    "Smart School",
    "Travel Wise Enterprise",
    "Marketing Hub",
    "Residence Management",
    "Smart Fitness Pro",
    "MyKhataBook Pro",
    "Smart School Transport",
    "GST Billing Pro",
    "Micro Finance Pro"
  ];

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const whatsappMessage = formatWhatsAppMessage(formData);
    
    // Send to WhatsApp
    const whatsappNumber = '+919527537131'; // Your company WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success state
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 3000);
  };

  const formatWhatsAppMessage = (data) => {
    let message = `*New Demo Request - Code Luxe Technologies*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${data.name}\n`;
    message += `Email: ${data.email}\n`;
    message += `Phone: ${data.phone}\n`;
    message += `Company: ${data.company || 'Not specified'}\n\n`;
    
    message += `*Service Interest:* ${data.service}\n`;
    if (data.product) {
      message += `*Product Interest:* ${data.product}\n`;
    }
    
    if (data.preferredDate) {
      message += `*Preferred Date:* ${data.preferredDate}\n`;
    }
    if (data.preferredTime) {
      message += `*Preferred Time:* ${data.preferredTime}\n`;
    }
    
    if (data.message) {
      message += `\n*Message:* ${data.message}\n`;
    }
    
    message += `\n*Request received on:* ${new Date().toLocaleString()}`;
    message += `\n*Website:* https://codeluxetechnologies.vercel.app/`;
    
    return message;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 400 }}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-20 flex items-center justify-between border-b border-slate-100 px-8 bg-gradient-to-r from-blue-50 to-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Book a Demo</h3>
                <p className="text-sm text-slate-500 font-medium">Schedule your free consultation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-5rem)]">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="flex items-center text-sm font-black text-slate-900 mb-2">
                      <User className="w-4 h-4 mr-2 text-blue-500" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center text-sm font-black text-slate-900 mb-2">
                      <Mail className="w-4 h-4 mr-2 text-blue-500" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center text-sm font-black text-slate-900 mb-2">
                      <Phone className="w-4 h-4 mr-2 text-blue-500" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="flex items-center text-sm font-black text-slate-900 mb-2">
                      <User className="w-4 h-4 mr-2 text-blue-500" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="flex items-center text-sm font-black text-slate-900 mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="enterprise">Enterprise Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label className="flex items-center text-sm font-black text-slate-900 mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      Product Interest (Optional)
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a product</option>
                      {products.map((product, index) => (
                        <option key={index} value={product}>
                          {product}
                        </option>
                      ))}
                      <option value="other">Other Product</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="flex items-center text-sm font-black text-slate-900 mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="flex items-center text-sm font-black text-slate-900 mb-2">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center text-sm font-black text-slate-900 mb-2">
                    <MessageSquare className="w-4 h-4 mr-2 text-blue-500" />
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-4 border border-slate-200 text-slate-700 font-black rounded-xl hover:bg-slate-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book Demo Session
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Demo Request Sent to WhatsApp!</h3>
                <p className="text-slate-600 mb-6">
                  Your demo request has been sent to our WhatsApp. We'll contact you within 24 hours to confirm your demo session.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-left mb-4">
                  <h4 className="font-black text-slate-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    WhatsApp Message Sent
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">
                    Your demo details have been sent to +91 95275 37131 via WhatsApp for immediate attention.
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="text-xs text-slate-500">
                      If WhatsApp doesn't open automatically, please check your WhatsApp or contact us directly.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-left">
                  <h4 className="font-black text-slate-900 mb-2">What happens next?</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Our team receives your WhatsApp message immediately</li>
                    <li>We'll review your requirements and contact you</li>
                    <li>A technical expert will schedule your demo session</li>
                    <li>You'll receive a personalized demo presentation</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookDemoModal;
