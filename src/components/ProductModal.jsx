import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
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
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
          <div className="mb-4">
            <span className="text-accent-blue text-xs font-black uppercase tracking-[0.3em]">
              {product.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 mt-1 mb-3">
              {product.title}
            </h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-slate-600 leading-relaxed text-sm font-medium mb-4">
              {product.fullDescription || product.desc}
            </p>
            
            <div className="bg-slate-50 rounded-xl p-4 mb-4">
              <h3 className="text-lg font-black text-slate-900 mb-3">Key Features</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                {product.keyFeatures && product.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              <h3 className="text-lg font-black text-slate-900 mb-3">Benefits</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                {product.benefits && product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-accent-blue text-white px-6 py-3 rounded-xl font-black hover:bg-blue-700 transition-colors text-sm">
                Request Demo
              </button>
              <button className="flex-1 border-2 border-accent-blue text-accent-blue px-6 py-3 rounded-xl font-black hover:bg-accent-blue hover:text-white transition-colors text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;
