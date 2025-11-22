import React from 'react';
import { motion } from 'framer-motion';
import './Content.css';

// Import logos
import discordLogo from '../../assets/Discord.png';
import linkedinLogo from '../../assets/Linkedin.png';
import artstationLogo from '../../assets/Artstation.png';
import robloxLogo from '../../assets/roblox.png';
import unityLogo from '../../assets/unity.png';
import blenderLogo from '../../assets/blender.png';

const Content = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Dynamic Background */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grain"></div>
      </div>

      <div className="hero-grid">
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-wrapper">
        {/* Left Content */}
        <motion.div 
          className="hero-main"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot"></span>
            <span>Available for Projects</span>
          </motion.div>

          <h1 className="hero-heading">
            <span className="heading-line">Premium Roblox</span>
            <span className="heading-line gradient">Environment Design</span>
          </h1>

          <p className="hero-tagline">
            Crafting immersive 3D worlds that captivate millions of players
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection('#portfolio')}>
              View Portfolio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-outline" onClick={() => scrollToSection('#contact')}>
              Contact Me
            </button>
          </div>

          {/* Tech & Social - Compact Inline */}
          <div className="hero-meta">
            <div className="meta-group">
              <span className="meta-label">Stack</span>
              <div className="icon-list">
                <div className="icon-item" title="Roblox Studio">
                  <img src={robloxLogo} alt="Roblox" />
                </div>
                <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer" className="icon-item" title="Blender">
                  <img src={blenderLogo} alt="Blender" />
                </a>
                <a href="https://unity.com/" target="_blank" rel="noopener noreferrer" className="icon-item" title="Unity">
                  <img src={unityLogo} alt="Unity" />
                </a>
              </div>
            </div>

            <div className="divider"></div>

            <div className="meta-group">
              <span className="meta-label">Connect</span>
              <div className="icon-list">
                <a 
                  href="https://discordapp.com/users/1135170546917716020" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon-item" 
                  title="Discord"
                >
                  <img src={discordLogo} alt="Discord" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/umar-shahzad-920898248/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon-item" 
                  title="LinkedIn"
                >
                  <img src={linkedinLogo} alt="LinkedIn" />
                </a>

                <a 
                  href="https://www.artstation.com/artwork/4N9B1l" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon-item" 
                  title="ArtStation"
                >
                  <img src={artstationLogo} alt="ArtStation" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Stats - Compact Cards */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="stat-box"
            whileHover={{ y: -5 }}
          >
            <div className="stat-value">50+</div>
            <div className="stat-text">Projects</div>
            <div className="stat-indicator">
              <motion.div 
                className="indicator-fill"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="stat-box"
            whileHover={{ y: -5 }}
          >
            <div className="stat-value">30+</div>
            <div className="stat-text">Clients</div>
            <div className="stat-indicator">
              <motion.div 
                className="indicator-fill"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="stat-box"
            whileHover={{ y: -5 }}
          >
            <div className="stat-value">100K+</div>
            <div className="stat-text">Players</div>
            <div className="stat-indicator">
              <motion.div 
                className="indicator-fill"
                initial={{ width: 0 }}
                animate={{ width: "95%" }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Scroll Hint */}
      <motion.div 
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Content;
