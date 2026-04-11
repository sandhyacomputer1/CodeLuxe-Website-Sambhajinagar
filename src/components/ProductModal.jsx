import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Calendar, Users, Target, Zap, Shield } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  console.log('ProductModal - isOpen:', isOpen);
  console.log('ProductModal - product:', product);
  
  if (!isOpen || !product) {
    console.log('ProductModal - returning null');
    return null;
  }

  const features = [
    { icon: <Target className="w-5 h-5 text-blue-500" />, text: "Targeted Solutions" },
    { icon: <Zap className="w-5 h-5 text-green-500" />, text: "High Performance" },
    { icon: <Shield className="w-5 h-5 text-purple-500" />, text: "Secure & Reliable" },
    { icon: <Users className="w-5 h-5 text-orange-500" />, text: "User Friendly" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 400, delay: 0.1 }}
          className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl m-4 md:m-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-16 md:h-20 flex items-center justify-between border-b border-slate-100 px-4 md:px-8 bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-6 h-6 md:w-8 md:h-8 object-contain filter brightness-0 invert" 
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg md:text-xl font-black text-slate-900 truncate">{product.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 font-medium truncate">{product.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row h-[calc(90vh-4rem)] md:h-[calc(90vh-5rem)]">
            {/* Left Column - Image */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8 flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 md:h-64 object-contain rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="flex-1 p-4 md:p-8 overflow-y-auto">
              <div className="space-y-6 md:space-y-8">
                {/* Description */}
                <div>
                  <h4 className="text-base md:text-lg font-black text-slate-900 mb-3 md:mb-4 flex items-center">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-500" />
                    Overview
                  </h4>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{product.fullDescription}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-base md:text-lg font-black text-slate-900 mb-3 md:mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {product.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 md:p-3 bg-slate-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-xs md:text-sm text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-base md:text-lg font-black text-slate-900 mb-3 md:mb-4">Benefits</h4>
                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                        <span className="text-xs md:text-sm text-slate-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Grid */}
                <div>
                  <h4 className="text-base md:text-lg font-black text-slate-900 mb-3 md:mb-4">Why Choose This Solution?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 md:space-x-3 p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-black text-slate-900 text-xs md:text-sm">{feature.text}</h5>
                          <p className="text-xs text-slate-500 mt-1">Advanced technology</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-100">
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black rounded-xl md:rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base">
                  <span className="text-center">Get Started with This Solution</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
