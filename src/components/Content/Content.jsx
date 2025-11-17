import React from 'react';
import { motion } from 'framer-motion';
import './Content.css';

// Import logos
import discordLogo from '../../assets/Discord.png';
import linkedinLogo from '../../assets/Linkedin.png';
import artstationLogo from '../../assets/Artstation.png';
import robloxLogo from '../../assets/roblox.png';

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
                <div className="icon-item" title="Blender">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-2.12-2.04 8.51 8.51 0 0 0-2.768-1.036 9.524 9.524 0 0 0-3.093-.072 8.558 8.558 0 0 0-2.855.834 8.044 8.044 0 0 0-2.328 1.643 7.384 7.384 0 0 0-1.536 2.366 6.839 6.839 0 0 0-.354 2.786"/>
                  </svg>
                </div>
                <div className="icon-item" title="Unity">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.929 1.067l10.104 4.503v12.86l-10.104 4.503L2.825 18.43V5.57L12.93 1.067zm.001 1.595L4.42 6.23v11.54l8.51 3.568 8.51-3.568V6.23l-8.51-3.568zM12.93 6.55l5.658 2.473v4.954l-5.658 2.473-5.658-2.473V9.023l5.658-2.473zm0 1.595l-4.263 1.86v3.99l4.263 1.86 4.263-1.86v-3.99l-4.263-1.86z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="meta-group">
              <span className="meta-label">Connect</span>
              <div className="icon-list">
                <a href="#" className="icon-item" title="Discord">
                  <img src={discordLogo} alt="Discord" />
                </a>
                <a href="#" className="icon-item" title="LinkedIn">
                  <img src={linkedinLogo} alt="LinkedIn" />
                </a>
                <a href="#" className="icon-item" title="ArtStation">
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
