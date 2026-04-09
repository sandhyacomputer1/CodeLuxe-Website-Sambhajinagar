import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Leaders from '../components/Leaders';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';

const HomePage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleBookDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="relative w-full min-h-screen font-sans">
      <Navbar onBookDemoClick={handleBookDemoClick} />
      <main>
        <Hero />
        <About />
        <Leaders />
        <Services />
        <Portfolio />
        {/* <WhyChooseUs /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
};

export default HomePage;
