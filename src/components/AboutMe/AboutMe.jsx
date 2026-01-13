import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

function About() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const skills = [
    { name: 'Roblox Studio', level: 95 },
    { name: 'Blender 3D', level: 90 },
    { name: 'Unity Engine', level: 85 },
    { name: 'Environment Design', level: 98 }
  ];

  const services = [
    {
      title: 'Environment Design',
      desc: 'Immersive 3D worlds with stunning visuals'
    },
    {
      title: 'Custom Solutions',
      desc: 'Tailored development for your vision'
    },
    {
      title: 'Map Building',
      desc: 'End-to-end development from concept to delivery'
    },
    {
      title: 'Asset Optimization',
      desc: 'Performance-focused for smooth gameplay'
    }
  ];

  const highlights = [
    '100% Client Satisfaction',
    'Team-Based Workflow',
    'Premium Quality Design'
  ];

  return (
    <section className="about" id="about">
      {/* Background Effects */}
      <div className="about__fx">
        <div className="about__glow about__glow--1" />
        <div className="about__lines" />
      </div>

      <div className="about__container">
        {/* Section Header */}
        <motion.header 
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="about__label">About Us</span>
          <h2 className="about__title">
            Building Together,
            <span className="about__title--accent"> Creating Better Worlds</span>
          </h2>
        </motion.header>

        {/* Main Content Block */}
        <motion.div 
          className="about__block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Top Row - Intro & Team */}
          <div className="about__row about__row--top">
            <div className="about__intro">
              <p className="about__text">
                We are dedicated Roblox developers combining environment design 
                and technical expertise to deliver polished, engaging game worlds. Together, 
                we have completed <strong>50+ projects</strong> for creators and studios worldwide.
              </p>
              <p className="about__text about__text--muted">
                By working as a team, we ensure faster delivery, higher quality, and a more 
                refined creative process while maintaining optimal performance.
              </p>
            </div>
            
            <div className="about__team">
              <div className="about__member">
                <span className="about__member-name">Umar Shahzad</span>
                <span className="about__member-handle">umshzd324</span>
              </div>
              <div className="about__member">
                <span className="about__member-name">Zainab Shahzad</span>
                <span className="about__member-handle">zainabshzd</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="about__divider" />

          {/* Middle Row - Skills */}
          <div className="about__row about__row--skills">
            <span className="about__row-label">Technical Expertise</span>
            <div className="about__skills">
              {skills.map((skill, i) => (
                <div key={i} className="about__skill">
                  <div className="about__skill-info">
                    <span className="about__skill-name">{skill.name}</span>
                    <span className="about__skill-level">{skill.level}%</span>
                  </div>
                  <div className="about__skill-track">
                    <motion.div 
                      className="about__skill-bar"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.level / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="about__divider" />

          {/* Bottom Row - Services */}
          <div className="about__row about__row--services">
            <span className="about__row-label">What We Offer</span>
            <div className="about__services">
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  className="about__service"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <span className="about__service-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="about__service-content">
                    <h4 className="about__service-title">{service.title}</h4>
                    <p className="about__service-desc">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Row - Highlights & CTA */}
        <motion.div 
          className="about__footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="about__highlights">
            {highlights.map((item, i) => (
              <div key={i} className="about__highlight">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <button className="about__cta" onClick={() => scrollToSection('hire')}>
            <span>Start Your Project</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
