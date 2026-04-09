import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

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

const DemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    selectedProducts: []
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    
    if (formData.selectedProducts.length === 0) {
      newErrors.products = 'Please select at least one product';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Create WhatsApp message
      const message = `*New Demo Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Mobile:* ${formData.mobile}%0A*Company:* ${formData.company || 'Not specified'}%0A*Preferred Date:* ${formData.preferredDate || 'Not specified'}%0A*Preferred Time:* ${formData.preferredTime || 'Not specified'}%0A*Products Interested:* ${formData.selectedProducts.join(', ')}%0A*Message:* ${formData.message || 'No additional message'}%0A%0APlease contact them for a demo.`;
      
      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/919527537131?text=${message}`;
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', mobile: '', company: '', preferredDate: '', preferredTime: '', message: '', selectedProducts: [] });
        onClose();
      }, 3000);
    }
  };

  const handleProductToggle = (product) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(product)
        ? prev.selectedProducts.filter(p => p !== product)
        : [...prev.selectedProducts, product]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl max-w-5xl w-full h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-16 flex items-center justify-end border-b border-slate-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 h-[calc(90vh-6rem)] overflow-y-auto">
          {!isSubmitted ? (
            <>
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 mb-2">
                  Book a Demo
                </h2>
                <p className="text-slate-600 text-sm">
                  Select the products you're interested in and we'll get in touch with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column - Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-slate-900">Personal Information</h3>
                    
                    <div>
                      <label className="block text-sm font-black text-slate-900 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue ${
                          errors.name ? 'border-red-500' : 'border-slate-200'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-black text-slate-900 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-black text-slate-900 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue ${
                          errors.mobile ? 'border-red-500' : 'border-slate-200'
                        }`}
                        placeholder="Enter your 10-digit mobile number"
                        maxLength={10}
                      />
                      {errors.mobile && (
                        <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-black text-slate-900 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  {/* Right Column - Product Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-slate-900">Select Products <span className="text-red-500">*</span></h3>
                    <div className="grid grid-cols-2 gap-2 h-48 overflow-y-auto border border-slate-200 rounded-xl p-3">
                      {products.map((product) => (
                        <label
                          key={product}
                          className="flex items-center p-2 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.selectedProducts.includes(product)}
                            onChange={() => handleProductToggle(product)}
                            className="w-4 h-4 text-accent-blue border-slate-300 rounded focus:ring-accent-blue"
                          />
                          <span className="ml-2 text-xs text-slate-700">{product}</span>
                        </label>
                      ))}
                    </div>
                    {errors.products && (
                      <p className="text-red-500 text-xs mt-1">{errors.products}</p>
                    )}
                  </div>
                </div>

                {/* Scheduling Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-slate-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-black text-slate-900 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-black text-slate-900 mb-2">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-black text-slate-900 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border-2 border-slate-200 text-slate-600 rounded-xl font-black hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-accent-blue text-white rounded-xl font-black hover:bg-blue-700 transition-colors"
                  >
                    Send to WhatsApp
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Demo Request Sent!
              </h3>
              <p className="text-slate-600 text-sm">
                Your request has been sent to WhatsApp. We'll contact you soon.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DemoModal;
