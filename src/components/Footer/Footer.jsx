import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Footer.css';

// Import social logos
import discordLogo from '../../assets/Discord.png';
import linkedinLogo from '../../assets/Linkedin.png';
import artstationLogo from '../../assets/Artstation.png';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'Discord', icon: discordLogo, url: 'https://discordapp.com/users/1135170546917716020', color: '#5865F2' },
    { name: 'LinkedIn', icon: linkedinLogo, url: 'https://www.linkedin.com/in/umar-shahzad-920898248/', color: '#0A66C2' },
    { name: 'ArtStation', icon: artstationLogo, url: 'https://www.artstation.com/artwork/4N9B1l', color: '#13AFF0' }
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer__fx">
          <div className="footer__glow" />
        </div>

        <div className="footer__container">
          {/* Main Content */}
          <div className="footer__main">
            {/* Brand & CTA */}
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="footer__logo-mark">UZ</span>
                <span className="footer__logo-text">Blockworks</span>
              </div>
              <p className="footer__tagline">
                Premium Roblox environment design partners crafting immersive 3D worlds.
              </p>
              <a href="#hire" className="footer__cta">
                <span>Start Your Project</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="footer__contact">
              <h4 className="footer__section-title">Get In Touch</h4>
              <a href="mailto:umshzd324@gmail.com" className="footer__contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 6L12 13 2 6"/>
                </svg>
                <span>umshzd324@gmail.com</span>
              </a>
              <a href="https://github.com/ZainabShahzad0907" target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>

            {/* Socials */}
            <div className="footer__socials">
              <h4 className="footer__section-title">Connect</h4>
              <div className="footer__socials-grid">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="footer__social"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    style={{ '--hover-color': social.color }}
                  >
                    <img src={social.icon} alt={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © {currentYear} UZ Blockworks. All rights reserved.
            </p>
            <p className="footer__credit">
              Crafted with precision & passion.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="footer__top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
