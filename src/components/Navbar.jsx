import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo2.png';

const navLinks = [
  { name: 'Home', href: '/', isRoute: true },
  { name: 'About', href: '/#about', isRoute: true },
  { name: 'Services', href: '/#services', isRoute: true },
  { name: 'Projects', href: '/#projects', isRoute: true },
  { name: 'Careers', href: '/careers', isRoute: true },
  { name: 'Contact', href: '/contact', isRoute: true }
];

const Navbar = ({ onBookDemoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-white/95 backdrop-blur-lg border-slate-100 shadow-sm h-16' : 'bg-transparent h-20'
        }`}
    >
      <div className="w-full h-full px-4 sm:px-6 flex items-center justify-between">

        {/* Compact Branding Area */}
        <a 
          href="/" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            // Force page refresh to home
            window.location.href = '/';
          }}
          className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-all group h-full"
        >
          <div className="relative h-[65%] flex items-center">
            <img
              src={logoImg}
              alt="Code Luxe Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center border-l border-slate-200 pl-3 h-[50%]">
            <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none uppercase font-serif">
              CODE    LUXE
            </span>
            <span className="text-[8px] sm:text-[10px] font-bold text-accent-blue tracking-[0.3em] uppercase mt-1 leading-none">
              TECHNOLOGIES
            </span>
          </div>
        </a>

        {/* Desktop Nav - Increased size by 3px (text-[15px]) */}
        <nav className="hidden xl:flex space-x-10 items-center h-full">
          {navLinks.map((link) => {
            const isPageRoute = link.href === '/careers' || link.href === '/contact';
            const Component = isPageRoute ? Link : 'a';
            const props = isPageRoute ? { to: link.href } : { href: link.href };
            
            return (
              <Component
                key={link.name}
                {...props}
                className="text-slate-950 hover:text-accent-blue transition-all text-[15px] font-black uppercase tracking-[0.2em] relative py-1 group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full"></span>
              </Component>
            );
          })}
        </nav>

        {/* Desktop CTA - Refined size */}
        <div className="hidden lg:flex items-center h-full">
          <button
            onClick={onBookDemoClick}
            className="px-8 py-2.5 rounded-full bg-accent-blue text-white font-black shadow-lg shadow-blue-100 hover:shadow-blue-200 transition-all hover:scale-105 active:scale-95 inline-block text-[12px] uppercase tracking-widest cursor-pointer"
          >
            BOOK A DEMO
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center h-full">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-900 hover:text-accent-blue p-2"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-0 left-0 w-full h-[400px] bg-white border-b border-slate-100 shadow-2xl z-[60] flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-slate-900 p-2"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col space-y-6 text-center uppercase tracking-[0.3em] font-black">
              {navLinks.map((link) => {
                const isPageRoute = link.href === '/careers' || link.href === '/contact';
                const Component = isPageRoute ? Link : 'a';
                const props = isPageRoute ? { to: link.href } : { href: link.href };
                
                return (
                  <Component
                    key={link.name}
                    {...props}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-900 hover:text-accent-blue transition-colors text-lg cursor-pointer"
                  >
                    {link.name}
                  </Component>
                );
              })}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookDemoClick();
                }}
                className="px-10 py-4 rounded-full bg-accent-blue text-white text-base cursor-pointer"
              >
                BOOK DEMO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
