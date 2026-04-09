import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookiePolicyModal = ({ isOpen, onClose }) => {
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
              <h2 className="text-3xl font-black text-slate-900 font-serif">Cookie Policy</h2>
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
                  <h3 className="text-xl font-black text-slate-900 mb-4">What Are Cookies</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide, protect, and improve our services.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Types of Cookies We Use</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-black text-slate-900 mb-2">Essential Cookies</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Required for the website to function properly, including security and basic functionality.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-2">Performance Cookies</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Help us understand how visitors interact with our website by collecting anonymous usage data.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-2">Functional Cookies</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Enable enhanced functionality and personalization, such as remembering your preferences.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">How We Use Cookies</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We use cookies to: <br />
                    • Remember your preferences and settings<br />
                    • Analyze website traffic and user behavior<br />
                    • Personalize content and advertisements<br />
                    • Improve website performance and functionality
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Managing Cookies</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:<br />
                    • View and delete cookies<br />
                    • Block cookies from specific websites<br />
                    • Delete all cookies when you close your browser<br />
                    • Alert you when cookies are being set
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Third-Party Cookies</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our website may use third-party services that set their own cookies. These include:<br />
                    • Analytics services (Google Analytics)<br />
                    • Social media plugins<br />
                    • Payment processors<br />
                    • Marketing and advertising platforms
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Your Choices</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You have the right to accept or reject cookies. However, disabling essential cookies 
                    may affect website functionality and your user experience.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Policy Updates</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for operational, legal, or regulatory reasons.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Contact Information</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If you have questions about this Cookie Policy, please contact us at: <br />
                    <strong>Email:</strong> privacy@codeluxe.com <br />
                    <strong>Phone:</strong> +91 95275 37131
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Last Updated</h3>
                  <p className="text-slate-600 leading-relaxed">
                    This Cookie Policy was last updated on April 9, 2026.
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

export default CookiePolicyModal;
