import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Content.css';

const Content = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Noise texture */}
      <div className="hero__noise" />
      
      {/* Scan line effect */}
      <div className="hero__scanline" />

      {/* Gradient mesh */}
      <div className="hero__mesh">
        <div className="hero__mesh-blob hero__mesh-blob--1" />
        <div className="hero__mesh-blob hero__mesh-blob--2" />
      </div>

      {/* Main content */}
      <div className="hero__wrapper">
        {/* Top bar
        <motion.div 
          className="hero__topbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="hero__status">
            <span className="hero__status-dot" />
            Available for projects
          </span>
          <span className="hero__location">Based in Pakistan</span>
        </motion.div> */}

        {/* Hero text */}
        <div className="hero__main">
          <motion.div
            className="hero__overline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Roblox Environment Artist
          </motion.div>

          <motion.h1 
            className="hero__headline"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero__headline-row">
              <span className="hero__word">Building</span>
            </span>
            <span className="hero__headline-row">
              <span className="hero__word hero__word--outline">Digital</span>
              <span className="hero__word">Worlds</span>
            </span>
          </motion.h1>

          <motion.p 
            className="hero__desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting immersive environments that captivate millions
          </motion.p>

          <motion.div 
            className="hero__buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button className="hero__btn hero__btn--fill" onClick={() => scrollTo('#projects')}>
              View Projects
            </button>
            <button className="hero__btn hero__btn--line" onClick={() => scrollTo('#hire')}>
              Let's Talk
            </button>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div 
          className="hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-value">50+</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">30+</span>
            <span className="hero__stat-label">Clients</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">100K+</span>
            <span className="hero__stat-label">Players</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">3+</span>
            <span className="hero__stat-label">Years</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div 
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollTo('#about')}
      >
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </motion.div>
    </section>
  );
};

export default Content;
