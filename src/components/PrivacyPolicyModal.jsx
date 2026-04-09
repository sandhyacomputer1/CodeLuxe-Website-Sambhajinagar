import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
              <h2 className="text-3xl font-black text-slate-900 font-serif">Privacy Policy</h2>
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
                  <h3 className="text-xl font-black text-slate-900 mb-4">Information We Collect</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us. 
                    This may include your name, email address, phone number, and other personal information.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">How We Use Your Information</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services, process transactions, 
                    and communicate with you about your account and our services.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Information Sharing</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                    except as described in this policy.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Data Security</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Your Rights</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You have the right to access, update, or delete your personal information at any time. 
                    Contact us to exercise these rights.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Contact Information</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at: <br />
                    <strong>Email:</strong> privacy@codeluxe.com <br />
                    <strong>Phone:</strong> +91 95275 37131
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Policy Updates</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
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

export default PrivacyPolicyModal;
