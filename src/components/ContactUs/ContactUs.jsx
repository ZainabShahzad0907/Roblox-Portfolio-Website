import React from 'react';
import { motion } from 'framer-motion';
import './ContactUs.css';

const ContactUs = () => {
  const contacts = [
    {
      label: 'Email',
      value: 'umshzd324@gmail.com',
      hint: 'Business inquiries',
      action: () => window.location.href = 'mailto:umshzd324@gmail.com',
      actionText: 'Send Email'
    },
    {
      label: 'Discord',
      value: 'umshzd324 / zainabshzd',
      hint: 'Quick response',
      action: () => navigator.clipboard.writeText('umshzd324'),
      actionText: 'Copy'
    },
    {
      label: 'LinkedIn',
      value: 'Umar Shahzad',
      hint: 'Professional networking',
      action: () => window.open('https://www.linkedin.com/in/umar-shahzad-920898248/', '_blank'),
      actionText: 'Connect'
    }
  ];

  const socials = [
    { name: 'ArtStation', url: 'https://www.artstation.com/artwork/4N9B1l' },
    { name: 'GitHub', url: 'https://github.com/ZainabShahzad0907' },
    { name: 'Roblox', url: '#' }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        {/* Header */}
        <motion.header 
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact__label">Contact</span>
          <h2 className="contact__title">
            Get in <span className="contact__title--accent">Touch</span>
          </h2>
        </motion.header>

        {/* Contact Block */}
        <motion.div 
          className="contact__block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="contact__methods">
            {contacts.map((item, i) => (
              <div key={i} className="contact__method">
                <div className="contact__method-info">
                  <span className="contact__method-label">{item.label}</span>
                  <span className="contact__method-value">{item.value}</span>
                  <span className="contact__method-hint">{item.hint}</span>
                </div>
                <button className="contact__method-btn" onClick={item.action}>
                  {item.actionText}
                </button>
              </div>
            ))}
          </div>

          <div className="contact__divider" />

          <div className="contact__socials">
            <span className="contact__socials-label">Also find us on</span>
            <div className="contact__socials-list">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
