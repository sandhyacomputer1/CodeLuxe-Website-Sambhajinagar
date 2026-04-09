import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-slate-100">
              <h2 className="text-3xl font-black text-slate-900 font-serif">Terms of Service</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Acceptance of Terms</h3>
                  <p className="text-slate-600 leading-relaxed">
                    By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Services Description</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Code Luxe Technologies provides software development, web design, mobile applications, and IT consulting services 
                    as described on our website and platform.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">User Responsibilities</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Users are responsible for maintaining the confidentiality of their account credentials and for all activities 
                    that occur under their account.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Payment Terms</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Payment for services must be made as agreed upon in writing. All payments are non-refundable 
                    unless otherwise specified in writing.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Intellectual Property</h3>
                  <p className="text-slate-600 leading-relaxed">
                    All intellectual property rights in the services and content remain the property of Code Luxe Technologies 
                    unless explicitly stated otherwise.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Limitation of Liability</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Code Luxe Technologies shall not be liable for any indirect, incidental, special, consequential, 
                    or punitive damages arising out of or relating to the use of our services.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Termination</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
                    including without limitation if you breach the Terms.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Governing Law</h3>
                  <p className="text-slate-600 leading-relaxed">
                    These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Contact Information</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If you have questions about these Terms of Service, please contact us at: <br />
                    <strong>Email:</strong> legal@codeluxe.com <br />
                    <strong>Phone:</strong> +91 95275 37131
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Last Updated</h3>
                  <p className="text-slate-600 leading-relaxed">
                    These Terms of Service were last updated on April 9, 2026.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TermsOfServiceModal;
