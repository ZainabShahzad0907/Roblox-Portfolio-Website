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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...newFiles]
    }));
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
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }));
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
    
    // Create email body
    let emailBody = `PROJECT REQUEST DETAILS
━━━━━━━━━━━━━━━━━━━━━━━

👤 PERSONAL INFORMATION
Name: ${formData.name}
Email: ${formData.email}
Discord: ${formData.discord}
Timezone: ${formData.timezone}

📋 PROJECT DETAILS
Service: ${formData.service}
Budget: $${formData.budget}
Deadline: ${formData.deadline}

💬 PROJECT DESCRIPTION
${formData.message}

${formData.files.length > 0 ? `\n📎 REFERENCE FILES (${formData.files.length})\n${formData.files.map(f => `• ${f.name} (${(f.size / 1024).toFixed(1)} KB)`).join('\n')}\n\nNote: Please attach the files mentioned above to this email.` : ''}

━━━━━━━━━━━━━━━━━━━━━━━
This is an automated project request from your portfolio website.`;

    // Encode for Gmail
    const subject = encodeURIComponent(`New Project Request - ${formData.service}`);
    const body = encodeURIComponent(emailBody);
    
    // Create Gmail compose link
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=umshzd324@gmail.com&su=${subject}&body=${body}`;
    
    // Open Gmail in new tab
    window.open(gmailLink, '_blank');
  };

  return (
    <section className="hire-me" id="hire">
      {/* Background */}
      <div className="hire-bg">
        <div className="hire-orb-1"></div>
        <div className="hire-orb-2"></div>
        <div className="hire-grain"></div>
      </div>

      <div className="hire-wrapper">
        {/* Header */}
        <motion.div 
          className="hire-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-tag">
            <div className="tag-dot"></div>
            <span>Hire Us</span>
          </div>
          <h2 className="hire-heading">
            Let's Create Something <span className="heading-gradient">Extraordinary</span>
          </h2>
          <p className="hire-lead">
            Ready to bring your vision to life? Fill out the form below and I'll get back to you within 24 hours
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          className="hire-form-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hire-form-container">
            <form onSubmit={handleSubmit} className="hire-form">
              {/* Two Column Grid */}
              <div className="form-grid">
                <div className="form-field">
                  <label className="field-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="field-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="field-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Discord Username *</label>
                  <input
                    type="text"
                    name="discord"
                    value={formData.discord}
                    onChange={handleInputChange}
                    className="field-input"
                    placeholder="username#0000"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Timezone *</label>
                  <input
                    type="text"
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleInputChange}
                    className="field-input"
                    placeholder="UTC+05:00"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="field-select"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label">Budget (USD) *</label>
                  <div className="field-wrapper">
                    <span className="field-icon">$</span>
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="field-input with-icon"
                      placeholder="500"
                      min="0"
                      step="50"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Deadline Field */}
              <div className="form-field">
                <label className="field-label">Project Deadline *</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="field-input"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="form-field">
                <label className="field-label">Project Description *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="field-textarea"
                  rows="5"
                  placeholder="Tell me about your project vision, goals, and requirements..."
                  required
                />
              </div>

              {/* File Upload */}
              <div className="form-field">
                <label className="field-label">Reference Files (Optional)</label>
                <div 
                  className={`file-upload-area ${dragActive ? 'drag-active' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="file-input-hidden"
                    id="file-upload"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <label htmlFor="file-upload" className="file-upload-label">
                    <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <div className="upload-text">
                      <span className="upload-primary">Click to upload or drag and drop</span>
                      <span className="upload-secondary">PNG, JPG, PDF, DOC (Max 10MB each)</span>
                    </div>
                  </label>
                </div>

                {formData.files.length > 0 && (
                  <div className="uploaded-files">
                    {formData.files.map((file, index) => (
                      <div key={index} className="file-item">
                        <svg className="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/>
                          <polyline points="13 2 13 9 20 9"/>
                        </svg>
                        <div className="file-details">
                          <span className="file-name">{file.name}</span>
                          <span className="file-size">{(file.size / 1024).toFixed(1)} KB</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="file-remove"
                          aria-label="Remove file"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Info Items */}
              <div className="form-info-grid">
                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>Quick Response</h4>
                    <p>24-hour reply guarantee</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>Secure & Private</h4>
                    <p>Your data is protected</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>Quality Assured</h4>
                    <p>Professional results</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Project Request</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;
