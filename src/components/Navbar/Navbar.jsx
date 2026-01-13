import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Collaborations', href: '#collaborations' },
    { name: 'Hire Us', href: '#hire' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'testimonials', 'collaborations', 'hire'];
      const scrollPosition = window.scrollY + 200;
      
      let currentSection = 'home';
      
      // Iterate backwards to find which section we're in
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sections[i];
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const targetId = href.startsWith('#') ? href.slice(1) : href;
    setActiveSection(targetId);
    // Let the anchor's default navigation run first (important on mobile),
    // then close the menu.
    window.setTimeout(() => setIsMobileOpen(false), 0);
  };

  return (
    <motion.nav 
      className={`nav ${isScrolled ? 'is-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav__container">
        {/* Logo */}
        <a 
          href="#home" 
          className="nav__logo"
          onClick={() => handleNavClick('#home')}
        >
          <span className="nav__logo-mark">UZ</span>
          <span className="nav__logo-text">Blockworks</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav__menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className={`nav__link ${activeSection === item.href.substring(1) ? 'is-active' : ''}`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#hire"
          className="nav__cta"
          onClick={() => handleNavClick('#hire')}
        >
          <span>Start Project</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        {/* Mobile Toggle */}
        <button
          className={`nav__toggle ${isMobileOpen ? 'is-open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="nav__mobile-list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className={`nav__mobile-link ${activeSection === item.href.substring(1) ? 'is-active' : ''}`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#hire"
              className="nav__mobile-cta"
              onClick={() => handleNavClick('#hire')}
            >
              <span>Start Project</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
