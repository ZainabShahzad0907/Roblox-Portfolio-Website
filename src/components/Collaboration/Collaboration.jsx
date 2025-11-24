import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Collaboration.css";

// Import brand logos
import robloxLogo from "../../assets/roblox.png";
import basedStuLogo from "../../assets/basedstu.png";
import creatoxLogo from "../../assets/creatox.png";
import ropLogo from "../../assets/ROP.png";
import slingshotLogo from "../../assets/slingshot.png";
import westviewLogo from "../../assets/westview.png";

const Collaboration = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  
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

  const brands = [
   
    {
      id: 2,
      name: "Based Studio",
      logo: basedStuLogo,
      description: "Creative game development partnership",
      category: "Studio",
      link: "https://www.roblox.com/communities/9973573/Based-Studios#!/about",
      
    },
    {
      id: 3,
      name: "Creatox",
      logo: creatoxLogo,
      description: "Innovation-focused design collaboration",
      category: "Design",
      link: "https://creatox.dev/portfolio",
    },
    {
      id: 4,
      name: "ROP",
      logo: ropLogo,
      description: "Professional production partnership",
      category: "Production",
       link: "https://www.roblox.com/communities/1129060/PK-Republic-of-Pakistan#!/about",
    },
    {
      id: 5,
      name: "Slingshot",
      logo: slingshotLogo,
      description: "Dynamic gaming experience creation",
      category: "Gaming",
      link: "https://slingshotdao.com/",
    },
    {
      id: 6,
      name: "Westview",
      logo: westviewLogo,
      description: "Strategic development collaboration",
      category: "Development",
       link: "https://www.roblox.com/communities/8337793/Westview-High#!/about",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We discuss your vision, requirements, and project goals in detail",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Concept Development",
      description:
        "Creating detailed concepts and design mockups for your approval",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Production Phase",
      description: "Building your project with precision and attention to detail",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Review & Refinement",
      description: "Iterative feedback process ensuring perfect results",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2" />
        </svg>
      ),
    },
    {
      step: "05",
      title: "Final Delivery",
      description: "Optimized, polished project delivered on time and on budget",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      title: "Professional Quality",
      description: "Industry-leading standards in every project",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: "Timely Delivery",
      description: "Consistent on-time project completion",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Clear Communication",
      description: "Regular updates throughout the process",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      ),
    },
    {
      title: "Unlimited Revisions",
      description: "Perfect results guaranteed",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="collaboration" id="collaborations">
      {/* Background */}
      <div className="collaboration-bg">
        <div className="collaboration-orb-1"></div>
        <div className="collaboration-orb-2"></div>
        <div className="collaboration-grain"></div>
      </div>

      <div className="collaboration-wrapper">
        {/* Header */}
        <motion.div
          className="collaboration-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-tag">
            <div className="tag-dot"></div>
            <span>Collaboration</span>
          </div>
          <h2 className="collaboration-heading">
            Trusted By{" "}
            <span className="heading-gradient">Leading Brands</span>
          </h2>
          <p className="collaboration-lead">
            Partnering with industry leaders to create exceptional gaming
            experiences
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.a
          className="brands-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <motion.a
                key={brand.id}
                href={brand.link}
                className="brand-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <div className="brand-logo-wrapper">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brand-logo"
                  />
                </div>
                <div className="brand-info">
                  <h3 className="brand-name">{brand.name}</h3>
                  <span className="brand-category">{brand.category}</span>
                </div>
                <div
                  className={`brand-overlay ${
                    hoveredBrand === brand.id ? "visible" : ""
                  }`}
                >
                  <p className="brand-description">{brand.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.a>

        {/* Process Section */}
        <motion.div
          className="process-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="process-header">
            <h3 className="process-title">How We Work Together</h3>
            <p className="process-subtitle">
              A streamlined process designed for maximum efficiency and quality
            </p>
          </div>

          <div className="process-timeline">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="process-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="process-icon-wrapper">
                  <div className="process-icon">{item.icon}</div>
                  <div className="process-step">{item.step}</div>
                </div>
                <div className="process-content">
                  <h4 className="process-name">{item.title}</h4>
                  <p className="process-desc">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="benefits-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="benefits-title">Why Choose Me</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h4 className="benefit-name">{benefit.title}</h4>
                <p className="benefit-desc">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="collaboration-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-text">
              Let's collaborate to create something extraordinary together
            </p>
            <motion.button 
              className="cta-button"
              onClick={() => scrollToSection('hire')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
