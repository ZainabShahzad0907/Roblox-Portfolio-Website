import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './HireMe.css';

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    timezone: '',
    service: '',
    budget: '',
    deadline: '',
    message: '',
    files: []
  });

  const [dragActive, setDragActive] = useState(false);

  const services = [
    '3D Environment Design',
    'Map Building',
    '3D Modeling',
    'Asset Optimization',
    'Consultation',
    'Custom Project'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
    }
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailBody = `PROJECT REQUEST
━━━━━━━━━━━━━━━━━━━━

CONTACT
Name: ${formData.name}
Email: ${formData.email}
Discord: ${formData.discord}
Timezone: ${formData.timezone}

PROJECT
Service: ${formData.service}
Budget: $${formData.budget}
Deadline: ${formData.deadline}

DESCRIPTION
${formData.message}

${formData.files.length > 0 ? `\nFILES (${formData.files.length})\n${formData.files.map(f => `• ${f.name}`).join('\n')}\n\nPlease attach files to this email.` : ''}`;

    const subject = encodeURIComponent(`Project Request - ${formData.service}`);
    const body = encodeURIComponent(emailBody);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=umshzd324@gmail.com&su=${subject}&body=${body}`;
    
    window.open(gmailLink, '_blank');
  };

  const infoItems = [
    { title: 'Quick Response', desc: '24-hour reply' },
    { title: 'Secure Data', desc: 'Privacy protected' },
    { title: 'Quality Work', desc: 'Professional results' }
  ];

  return (
    <section className="hire" id="hire">
      <div className="hire__fx">
        <div className="hire__glow" />
      </div>

      <div className="hire__container">
        {/* Header */}
        <motion.header 
          className="hire__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="hire__label">Hire Us</span>
          <h2 className="hire__title">
            Let's Create Something <span className="hire__title--accent">Extraordinary</span>
          </h2>
          <p className="hire__subtitle">
            Fill out the form and we'll get back to you within 24 hours
          </p>
        </motion.header>

        {/* Form Block */}
        <motion.div 
          className="hire__block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form className="hire__form" onSubmit={handleSubmit}>
            {/* Row 1 - Contact */}
            <div className="hire__row">
              <div className="hire__field">
                <label className="hire__field-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="hire__input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="hire__field">
                <label className="hire__field-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="hire__input"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="hire__field">
                <label className="hire__field-label">Discord</label>
                <input
                  type="text"
                  name="discord"
                  value={formData.discord}
                  onChange={handleInputChange}
                  className="hire__input"
                  placeholder="username"
                  required
                />
              </div>
              <div className="hire__field">
                <label className="hire__field-label">Timezone</label>
                <input
                  type="text"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className="hire__input"
                  placeholder="UTC+00:00"
                  required
                />
              </div>
            </div>

            {/* Row 2 - Project Details */}
            <div className="hire__row">
              <div className="hire__field">
                <label className="hire__field-label">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="hire__select"
                  required
                >
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="hire__field">
                <label className="hire__field-label">Budget (USD)</label>
                <div className="hire__input-wrap">
                  <span className="hire__input-prefix">$</span>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="hire__input hire__input--prefixed"
                    placeholder="500"
                    min="0"
                    required
                  />
                </div>
              </div>
              <div className="hire__field">
                <label className="hire__field-label">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="hire__input"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>

            {/* Row 3 - Message */}
            <div className="hire__row hire__row--full">
              <div className="hire__field">
                <label className="hire__field-label">Project Description</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="hire__textarea"
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
            </div>

            {/* Row 4 - File Upload */}
            <div className="hire__row hire__row--full">
              <div className="hire__field">
                <label className="hire__field-label">Reference Files (Optional)</label>
                <div 
                  className={`hire__upload ${dragActive ? 'is-dragging' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hire__upload-input"
                    id="file-upload"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <label htmlFor="file-upload" className="hire__upload-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <span>Click or drag files</span>
                  </label>
                </div>

                {formData.files.length > 0 && (
                  <div className="hire__files">
                    {formData.files.map((file, index) => (
                      <div key={index} className="hire__file">
                        <span className="hire__file-name">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="hire__file-remove"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Info & Submit */}
            <div className="hire__footer">
              <div className="hire__info">
                {infoItems.map((item, i) => (
                  <div key={i} className="hire__info-item">
                    <span className="hire__info-title">{item.title}</span>
                    <span className="hire__info-desc">{item.desc}</span>
                  </div>
                ))}
              </div>
              
              <button type="submit" className="hire__submit">
                <span>Send Request</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;
