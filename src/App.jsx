import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Testimonials from './components/Testimonials/Testimonials';
import Collaboration from './components/Collaboration/Collaboration';
import HireMe from './components/HireMe/HireMe';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import './App.css';

// Minimal loading screen
const PageLoader = ({ progress }) => (
  <motion.div
    className="page-loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
  >
    <div className="loader-content">
      <div className="loader-bar">
        <motion.div
          className="loader-progress"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
      <span className="loader-text">Loading</span>
    </div>
  </motion.div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulated loading progress
    const interval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        return prev + 20;
      });
    }, 150);

    // Scroll progress tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader progress={loadProgress} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Scroll Progress Indicator */}
          <motion.div
            className="scroll-indicator"
            style={{ width: `${scrollProgress}%` }}
          />

          <motion.div
            className="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Navbar />
            <Content />
            <AboutMe />
            <Portfolio />
            <Testimonials />
            <Collaboration />
            <HireMe />
            <ContactUs />
            <Footer />
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;
