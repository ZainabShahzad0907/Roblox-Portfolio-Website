import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

// Import proof images
import proof1 from '../../assets/Proof1.jpg';
import proof2 from '../../assets/Proof2.jpg';
import proof3 from '../../assets/Proof3.jpg';
import proof4 from '../../assets/Proof4.jpg';
import proof5 from '../../assets/Proof5.jpg';
import proof6 from '../../assets/Proof6.jpg';
import proof7 from '../../assets/Proof7.jpg';
import proof8 from '../../assets/Proof8.jpg';

const Testimonials = () => {
  const [selectedProof, setSelectedProof] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'sova',
      role: 'Game Developer',
      company: 'HiddenDevs',
      review: "Wow, the environment you made totally blew me away! Everything looks amazing and you delivered way faster than I expected.",
      proof: proof1
    },
    {
      id: 2,
      name: 'Andropodizer',
      role: 'Creative Director',
      company: 'Republic Of Pakistan',
      review: "Working with Umar was awesome. Super detail-oriented and just knows how to bring ideas to life. Everything arrived on time too.",
      proof: proof2
    },
    {
      id: 3,
      name: 'royal glands',
      role: 'Game Developer',
      company: 'Roblox Studio Community',
      review: "Hands down the best Roblox environment artist I've worked with. Fast, reliable, and the builds look incredible.",
      proof: proof3
    },
    {
      id: 4,
      name: 'RanByNoah',
      role: 'Investor',
      company: 'Roblox Studio Community',
      review: "Seriously impressed! The game world turned out way better than I imagined. Super creative and professional.",
      proof: proof4
    },
    {
      id: 5,
      name: 'russ',
      role: 'Project Lead',
      company: 'RoDevs',
      review: "Maps look amazing and run so smooth. Couldn't ask for better attention to detail. Totally recommend!",
      proof: proof5
    },
    {
      id: 6,
      name: 'Spendely',
      role: 'Game Designer',
      company: 'Slingshot Studios',
      review: "You really brought our vision to life. The designs are spot-on and just what we needed. Worth every penny!",
      proof: proof6
    },
    {
      id: 7,
      name: 'extrodite',
      role: 'Studio Owner',
      company: 'HiddenDevs',
      review: "Super talented and easy to work with. The quality speaks for itself. Would definitely collab again!",
      proof: proof7
    },
    {
      id: 8,
      name: 'RySky_Skeleton05',
      role: 'Game Developer',
      company: 'Roblox Studio Community',
      review: "Really happy with the builds! Everything looks great and works perfectly. Highly recommend for anyone needing awesome environments.",
      proof: proof8
    }
    
  ];

  const stats = [
    { value: '30+', label: 'Happy Clients' },
    { value: '5.0', label: 'Average Rating' },
    { value: '100%', label: 'Success Rate' }
  ];

  return (
    <section className="testimonials" id="testimonials">
      {/* Background Effects */}
      <div className="testimonials__fx">
        <div className="testimonials__glow" />
      </div>

      <div className="testimonials__container">
        {/* Header */}
        <motion.header 
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials__label">Testimonials</span>
          <h2 className="testimonials__title">
            What Clients <span className="testimonials__title--accent">Say</span>
          </h2>
        </motion.header>

        {/* Main Block */}
        <motion.div 
          className="testimonials__block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Featured Testimonial */}
          <div className="testimonials__featured">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIndex].id}
                className="testimonials__quote"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <svg className="testimonials__quote-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className="testimonials__text">{testimonials[activeIndex].review}</p>
                <div className="testimonials__author">
                  <div className="testimonials__author-info">
                    <span className="testimonials__author-name">{testimonials[activeIndex].name}</span>
                    <span className="testimonials__author-role">
                      {testimonials[activeIndex].role} · {testimonials[activeIndex].company}
                    </span>
                  </div>
                  <button 
                    className="testimonials__proof-btn"
                    onClick={() => setSelectedProof(testimonials[activeIndex].proof)}
                  >
                    View Proof
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial List */}
          <div className="testimonials__list">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                className={`testimonials__item ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="testimonials__item-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="testimonials__item-name">{item.name}</span>
                <span className="testimonials__item-company">{item.company}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="testimonials__stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="testimonials__stat">
              <span className="testimonials__stat-value">{stat.value}</span>
              <span className="testimonials__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Proof Modal */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div 
            className="testimonials__modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProof(null)}
          >
            <motion.div 
              className="testimonials__modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="testimonials__modal-close"
                onClick={() => setSelectedProof(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <img src={selectedProof} alt="Proof of work" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
