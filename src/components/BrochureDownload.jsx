import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, X } from 'lucide-react';

const BrochureDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // You'll replace this with your actual company brochure PDF URL
      const pdfUrl = '/company-brochure.pdf'; // This will be your company brochure PDF
      
      // Create download link
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Code_Luxe_Company_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onClick={handleDownload}
      disabled={isDownloading}
      className="flex items-center justify-center px-10 py-3.5 text-sm md:text-base rounded-full bg-slate-800 text-white font-bold hover:bg-slate-700 transition-all duration-300 w-full sm:w-auto uppercase tracking-widest shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
    >
      {isDownloading ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          DOWNLOADING...
        </>
      ) : (
        <>
          <Download className="mr-2 w-5 h-5" />
          DOWNLOAD BROCHURE
        </>
      )}
    </motion.button>
  );
};

export default BrochureDownload;
