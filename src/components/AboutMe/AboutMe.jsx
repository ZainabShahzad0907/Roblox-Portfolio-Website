import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";
import roblox from "../../assets/roblox.png"; 
import profileImg from '../../assets/bioimg.png';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const counters = document.querySelectorAll(".counter-value");

    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      const duration = 2500;
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let frame = 0;

      const count = () => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const value = Math.floor(easeOutQuart * target);

        if (frame < totalFrames) {
          counter.textContent = value.toLocaleString();
          requestAnimationFrame(count);
        } else {
          counter.textContent = target.toLocaleString() + suffix;
        }
      };

      count();
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => {
      counters.forEach((counter) => observer.unobserve(counter));
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { name: 'Roblox Studio', level: 95, color: '#3b82f6' },
    { name: 'Blender 3D', level: 90, color: '#8b5cf6' },
    { name: 'Unity Engine', level: 85, color: '#ec4899' },
    { name: 'Environment Design', level: 98, color: '#06b6d4' }
  ];

  const services = [
    {
      title: 'Environment Design',
      description: 'Collaborative creation of immersive 3D worlds with stunning visuals and optimized performance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        </svg>
      )
    },
     {
      title: 'Custom Solutions',
      description: 'Team-driven solutions combining creativity & technical depth to bring your unique vision to life',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    },
    {
      title: 'Map Building',
      description: 'End-to-end Roblox map development handled jointly from concept to final delivery',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
        </svg>
      )
    },
    {
      title: 'Asset Optimization',
      description: 'Performance-focused design ensuring smooth gameplay experiences',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      )
    },
   
  ];

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Background */}
      <div className="about-bg">
        <div className="about-orb-1"></div>
        <div className="about-orb-2"></div>
        <div className="about-grain"></div>
      </div>

      <motion.div 
        className="about-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div 
          className="about-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <div className="tag-dot"></div>
            <span>About Us</span>
          </div>
          <h2 className="about-heading">
            Building Together
            <span className="heading-accent"> Creating Better Worlds</span>
          </h2>
          <p className="about-lead">
            Professional 3D environment artist with a passion for creating game experiences 
            that captivate and inspire millions of players
          </p>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="about-grid">
          {/* Left Column - Introduction */}
          <motion.div 
            className="about-intro"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="intro-box">
              <h3 className="intro-title">Who We Are</h3>
              <p className="intro-text">
                We are a dedicated Roblox developers combining environment design 
                and technical expertise to deliver polished, engaging game worlds. Together, 
                we have completed 50+ projects for creators and studios worldwide.
              </p>
              <p className="intro-text">
              Our team consists of two partners:
              </p>

              <div className="partner-list">
              <li className="intro-text">
              <strong>Umar Shahzad</strong><br />
              <span>Discord: <strong>umshzd324</strong></span>
              </li>

              <li className="intro-text">
              <strong>Zainab Shahzad</strong><br />
              <span>Discord: <strong>zainabshzd</strong></span>
              </li>
              </div>
              <p className="intro-text">
                By working as a team, we ensure faster delivery, higher quality, and a more 
                refined creative process while maintaining optimal performance for players.
              </p>

              {/* Key Highlights */}
              <div className="highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>100% Client Satisfaction</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Team-Based Workflow</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Premium Quality Design</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="skills-box">
              <h4 className="skills-heading">Technical Expertise</h4>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-row">
                    <div className="skill-info">
                      <span className="skill-label">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <motion.div 
                        className="skill-progress"
                        style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div 
            className="services-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="services-title">What We Offer</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h4 className="service-name">{service.title}</h4>
                  <p className="service-desc">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
              className="about-cta-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="cta-text">
                Ready to bring your game world to life? Let's create something amazing together.
              </p>
              <motion.button 
                className="cta-btn"
                onClick={() => scrollToSection('hire')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
