import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Leaders from './components/Leaders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BookDemoModal from './components/BookDemoModal';

function App() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  const handleBookDemoClick = () => {
    setIsBookDemoOpen(true);
  };

  const handleCloseBookDemo = () => {
    setIsBookDemoOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="relative w-full min-h-screen font-sans">
            <Navbar onBookDemoClick={handleBookDemoClick} />
            <main>
              <Hero />
              <About />
              <WhyChooseUs />
              <Leaders />
              <Services />
              <Process />
              <Portfolio />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/careers" element={<CareersPage onBookDemoClick={handleBookDemoClick} />} />
        <Route path="/contact" element={<ContactPage onBookDemoClick={handleBookDemoClick} />} />
      </Routes>
      <BookDemoModal isOpen={isBookDemoOpen} onClose={handleCloseBookDemo} />
    </Router>
  );
}

export default App;
