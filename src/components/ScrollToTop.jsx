import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Enhanced smooth scroll to top when route changes
    const scrollToTop = () => {
      if (!hash) {
        // Smooth scroll with performance optimization
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        // Handle hash scrolling with offset for fixed header
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Use requestAnimationFrame for better performance
    requestAnimationFrame(scrollToTop);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
