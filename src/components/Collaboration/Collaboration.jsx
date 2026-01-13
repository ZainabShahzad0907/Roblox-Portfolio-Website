import React from "react";
import { motion } from "framer-motion";
import "./Collaboration.css";

// Import brand logos
import basedStuLogo from "../../assets/basedstu.png";
import creatoxLogo from "../../assets/creatox.png";
import ropLogo from "../../assets/ROP.png";
import slingshotLogo from "../../assets/slingshot.png";
import westviewLogo from "../../assets/westview.png";

const Collaboration = () => {
  const brands = [
    { name: "Based Studio", logo: basedStuLogo, link: "https://www.roblox.com/communities/9973573/Based-Studios#!/about" },
    { name: "Creatox", logo: creatoxLogo, link: "https://creatox.dev/portfolio" },
    { name: "ROP", logo: ropLogo, link: "https://www.roblox.com/communities/1129060/PK-Republic-of-Pakistan#!/about" },
    { name: "Slingshot", logo: slingshotLogo, link: "https://slingshotdao.com/" },
    { name: "Westview", logo: westviewLogo, link: "https://www.roblox.com/communities/8337793/Westview-High#!/about" }
  ];

  const process = [
    { 
      num: '01', 
      title: 'Consultation', 
      desc: 'Discuss vision and requirements', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    { 
      num: '02', 
      title: 'Concept', 
      desc: 'Create design mockups', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      )
    },
    { 
      num: '03', 
      title: 'Production', 
      desc: 'Build with precision', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    },
    { 
      num: '04', 
      title: 'Review', 
      desc: 'Iterative refinement', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      )
    },
    { 
      num: '05', 
      title: 'Delivery', 
      desc: 'Optimized final product', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
      )
    }
  ];

  const benefits = [
    { title: 'Professional Quality', desc: 'Industry-leading standards' },
    { title: 'Timely Delivery', desc: 'On-time completion' },
    { title: 'Clear Communication', desc: 'Regular project updates' },
    { title: 'Unlimited Revisions', desc: 'Perfect results guaranteed' }
  ];

  // Double the brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="collab" id="collaborations">
      <div className="collab__fx">
        <div className="collab__glow" />
        <div className="collab__glow collab__glow--2" />
      </div>

      <div className="collab__container">
        {/* Header */}
        <motion.header 
          className="collab__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="collab__label">Collaboration</span>
          <h2 className="collab__title">
            Trusted By <span className="collab__title--accent">Leading Brands</span>
          </h2>
        </motion.header>

        {/* Marquee Brands */}
        <motion.div 
          className="collab__marquee-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="collab__marquee">
            <div className="collab__marquee-track">
              {duplicatedBrands.map((brand, i) => (
                <a
                  key={i}
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="collab__brand"
                >
                  <img src={brand.logo} alt={brand.name} />
                  <span className="collab__brand-name">{brand.name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div 
          className="collab__block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="collab__block-label">Our Process</span>
          
          <div className="collab__timeline">
            <div className="collab__timeline-line" />
            {process.map((step, i) => (
              <div key={i} className="collab__timeline-item">
                <div className="collab__timeline-node">
                  <span className="collab__timeline-icon">{step.icon}</span>
                </div>
                <div className="collab__timeline-content">
                  <span className="collab__timeline-num">{step.num}</span>
                  <h4 className="collab__timeline-title">{step.title}</h4>
                  <p className="collab__timeline-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="collab__divider" />

          <span className="collab__block-label">Why Work With Us</span>
          
          <div className="collab__benefits">
            {benefits.map((benefit, i) => (
              <div key={i} className="collab__benefit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <div className="collab__benefit-text">
                  <span className="collab__benefit-title">{benefit.title}</span>
                  <span className="collab__benefit-desc">{benefit.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
