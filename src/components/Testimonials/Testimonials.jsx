import React, { useState, useRef, useEffect } from 'react';
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
import proof9 from '../../assets/Proof9.jpg';

const Testimonials = () => {
  const [selectedProof, setSelectedProof] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const showcaseRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'sova',
      role: 'Game Developer',
      company: 'HiddenDevs',
      rating: 5,
      review: "Wow, the environment you made totally blew me away! Everything looks amazing and you delivered way faster than I expected.",
      proof: proof1,
      avatar: '👨🏽‍💻' // male, medium skin tone
    },
    {
      id: 2,
      name: 'Andropodizer',
      role: 'Creative Director',
      company: 'Republic Of Pakistan',
      rating: 5,
      review: "Working with Umar was awesome. Super detail-oriented and just knows how to bring ideas to life. Everything arrived on time too.",
      proof: proof2,
      avatar: '👩🏾‍🎨' // female, dark skin tone
    },
    {
      id: 3,
      name: 'royal glands',
      role: 'Game Developer',
      company: 'Roblox Studio Community',
      rating: 5,
      review: "Hands down the best Roblox environment artist I've worked with. Fast, reliable, and the builds look incredible.",
      proof: proof3,
      avatar: '🧑🏻‍💻' // gender-neutral, light skin tone
    },
    {
      id: 4,
      name: 'RanByNoah',
      role: 'Investor',
      company: 'Roblox Studio Community',
      rating: 5,
      review: "Seriously impressed! The game world turned out way better than I imagined. Super creative and professional.",
      proof: proof4,
      avatar: '👩🏿‍💼' // female, dark skin tone
    },
    {
      id: 5,
      name: 'russ',
      role: 'Project Lead',
      company: 'RoDevs',
      rating: 5,
      review: "Maps look amazing and run so smooth. Couldn’t ask for better attention to detail. Totally recommend!",
      proof: proof5,
      avatar: '👨🏻‍🎨' // male, light skin tone
    },
    {
      id: 6,
      name: 'Spendely',
      role: 'Game Designer',
      company: 'Slingshot Studios',
      rating: 5,
      review: "You really brought our vision to life. The designs are spot-on and just what we needed. Worth every penny!",
      proof: proof6,
      avatar: '🧑🏽‍🎨' // gender-neutral, medium skin tone
    },
    {
      id: 7,
      name: 'extrodite',
      role: 'Studio Owner',
      company: 'HiddenDevs',
      rating: 5,
      review: "Super talented and easy to work with. The quality speaks for itself. Would definitely collab again!",
      proof: proof7,
      avatar: '👨🏾‍💻' // male, dark skin tone
    },
    {
      id: 8,
      name: 'RySky_Skeleton05',
      role: 'Game Developer',
      company: 'Roblox Studio Community',
      rating: 5,
      review: "Really happy with the builds! Everything looks great and works perfectly. Highly recommend for anyone needing awesome environments.",
      proof: proof8,
      avatar: '👩🏻‍💻' // female, light skin tone
    }
  ];

  const scrollToIndex = (index) => {
    const showcase = showcaseRef.current;
    if (!showcase) return;
    
    const cardWidth = showcase.children[0]?.offsetWidth || showcase.offsetWidth;
    const gap = 32; // 2rem gap between cards
    showcase.scrollTo({
      left: (cardWidth + gap) * index,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  // Update the next/prev functions to use scrollToIndex
  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  // Handle scroll snap on mobile
  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase) return;

    const handleScroll = () => {
      const scrollPosition = showcase.scrollLeft;
      const cardWidth = showcase.offsetWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < testimonials.length) {
        setCurrentIndex(newIndex);
      }
    };

    showcase.addEventListener('scroll', handleScroll);
    return () => showcase.removeEventListener('scroll', handleScroll);
  }, [currentIndex, testimonials.length]);

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
            Real feedback from satisfied clients who've experienced our work firsthand
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="testimonial-showcase-container">
          {/* Navigation Arrows - Desktop Only */}
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

          {/* Scrollable Testimonials */}
          <div className="testimonial-showcase" ref={showcaseRef}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="review-text">"{testimonial.review}"</p>

                  {/* Client Info */}
                  <div className="client-info">
                    <div className="client-avatar">
                      <span>{testimonial.avatar}</span>
                    </div>
                    <div className="client-details">
                      <h4 className="client-name">{testimonial.name}</h4>
                      <p className="client-role">{testimonial.role}</p>
                      <p className="client-company">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Proof Button */}
                  <button 
                    className="proof-btn"
                    onClick={() => setSelectedProof(testimonial.proof)}
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
                    src={testimonial.proof} 
                    alt={`Proof from ${testimonial.name}`}
                    onClick={() => setSelectedProof(testimonial.proof)}
                  />
                  <div className="verified-badge">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="pagination-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => scrollToIndex(index)}
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
