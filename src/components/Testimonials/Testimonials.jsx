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

const Testimonials = () => {
  const [selectedProof, setSelectedProof] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Game Developer',
      company: 'PixelForge Studios',
      rating: 5,
      review: 'Absolutely phenomenal work! The environment design exceeded all expectations. Professional, creative, and delivered on time.',
      proof: proof1,
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Creative Director',
      company: 'GameVerse Inc',
      rating: 5,
      review: 'Working with Zain was a game-changer for our project. The attention to detail and technical expertise is unmatched.',
      proof: proof2,
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Marcus Chen',
      role: 'Studio Manager',
      company: 'Digital Dreams',
      rating: 5,
      review: 'Best Roblox environment artist I have ever worked with. Fast turnaround, exceptional quality, and great communication.',
      proof: proof3,
      avatar: '👨‍💻'
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      role: 'Project Lead',
      company: 'Virtual Worlds Co',
      rating: 5,
      review: 'The level of professionalism and creativity is outstanding. Our game world looks absolutely stunning thanks to this collaboration.',
      proof: proof4,
      avatar: '👩‍🎨'
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Game Designer',
      company: 'Infinity Games',
      rating: 5,
      review: 'Incredible attention to detail and optimization. The maps run smoothly and look amazing. Highly recommended!',
      proof: proof5,
      avatar: '👨‍🎨'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'Art Director',
      company: 'Creative Nexus',
      rating: 5,
      review: 'Transformed our vision into reality with precision and artistry. Absolutely worth every penny!',
      proof: proof6,
      avatar: '👩‍💼'
    },
    {
      id: 7,
      name: 'James Wilson',
      role: 'Studio Owner',
      company: 'Apex Gaming',
      rating: 5,
      review: 'Professional, talented, and reliable. The quality of work speaks for itself. Will definitely work together again!',
      proof: proof7,
      avatar: '👨‍💼'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials" id="testimonials">
      {/* Background */}
      <div className="testimonials-bg">
        <div className="testimonials-orb-1"></div>
        <div className="testimonials-orb-2"></div>
        <div className="testimonials-grain"></div>
      </div>

      <div className="testimonials-wrapper">
        {/* Header */}
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-tag">
            <div className="tag-dot"></div>
            <span>Testimonials</span>
          </div>
          <h2 className="testimonials-heading">
            What Clients <span className="heading-gradient">Say</span>
          </h2>
          <p className="testimonials-lead">
            Real feedback from satisfied clients who've experienced my work firsthand
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="testimonial-showcase">
          {/* Navigation Arrows */}
          <button 
            className="nav-arrow nav-left"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button 
            className="nav-arrow nav-right"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                {/* Quote Icon */}
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>

                {/* Rating */}
                <div className="rating">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="review-text">"{currentTestimonial.review}"</p>

                {/* Client Info */}
                <div className="client-info">
                  <div className="client-avatar">
                    <span>{currentTestimonial.avatar}</span>
                  </div>
                  <div className="client-details">
                    <h4 className="client-name">{currentTestimonial.name}</h4>
                    <p className="client-role">{currentTestimonial.role}</p>
                    <p className="client-company">{currentTestimonial.company}</p>
                  </div>
                </div>

                {/* Proof Button */}
                <button 
                  className="proof-btn"
                  onClick={() => setSelectedProof(currentTestimonial.proof)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  <span>View Proof</span>
                </button>
              </div>

              {/* Testimonial Preview Image */}
              <div className="testimonial-preview">
                <div className="preview-glow"></div>
                <img 
                  src={currentTestimonial.proof} 
                  alt={`Proof from ${currentTestimonial.name}`}
                  onClick={() => setSelectedProof(currentTestimonial.proof)}
                />
                <div className="verified-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="pagination-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="stat-box">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">5.0</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">100%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Proof Modal */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div 
            className="proof-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProof(null)}
          >
            <motion.div 
              className="proof-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="proof-close"
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
