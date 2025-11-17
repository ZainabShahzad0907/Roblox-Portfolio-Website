import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe'
import Testimonials from './components/Testimonials/Testimonials';
import Collaboration from './components/Collaboration/Collaboration';
import HireMe from './components/HireMe/HireMe';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import './App.css';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Roblox-themed loading animation
const LoadingSpinner = () => (
  <motion.div
    className="loading-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div className="loading-content">
      <motion.div
        className="roblox-cube"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.p
        className="loading-text"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading Experience...
      </motion.p>
    </motion.div>
  </motion.div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Mouse tracking for parallax
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    // Scroll tracking
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      {/* Premium cursor follower */}
      <motion.div
        className="cursor-follower"
        animate={{
          x: mousePosition.x * 15,
          y: mousePosition.y * 15
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      
      {/* Roblox-themed ambient effects */}
      <div className="ambient-background">
        <motion.div
          className="ambient-cube cube-1"
          animate={{
            x: mousePosition.x * 30 + Math.sin(scrollY * 0.01) * 20,
            y: mousePosition.y * 20 + Math.cos(scrollY * 0.01) * 15,
            rotateZ: scrollY * 0.1
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
        <motion.div
          className="ambient-cube cube-2"
          animate={{
            x: mousePosition.x * -20 + Math.cos(scrollY * 0.008) * 25,
            y: mousePosition.y * 25 + Math.sin(scrollY * 0.008) * 20,
            rotateZ: -scrollY * 0.08
          }}
          transition={{ type: "spring", stiffness: 80, damping: 25 }}
        />
        <motion.div
          className="ambient-cube cube-3"
          animate={{
            x: mousePosition.x * 40 + Math.sin(scrollY * 0.012) * 30,
            y: mousePosition.y * -15 + Math.cos(scrollY * 0.012) * 10,
            rotateZ: scrollY * 0.05
          }}
          transition={{ type: "spring", stiffness: 120, damping: 35 }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="geometric-shapes">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`geometric-shape shape-${i + 1}`}
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="main-content"
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
      </AnimatePresence>

      {/* Scroll progress indicator */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: scrollY / (document.body.scrollHeight - window.innerHeight)
        }}
      />
    </div>
  );
}

export default App;
