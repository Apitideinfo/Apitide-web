import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DAYS_DATA = [
  { day: 'Mon', num: '24', date: 'Monday, August 24' },
  { day: 'Tue', num: '25', date: 'Tuesday, August 25' },
  { day: 'Wed', num: '26', date: 'Wednesday, August 26' },
  { day: 'Thu', num: '27', date: 'Thursday, August 27' },
  { day: 'Fri', num: '28', date: 'Friday, August 28' },
];

const TIME_SLOTS = [
  '10:00 AM',
  '11:30 AM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
];

export default function Contact() {
  // Form States
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    country: '',
    project_type: '',
    industry: '',
    budget_range: '',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Scheduler States
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Form Pre-fill from URL Query Params (e.g. ?plan=starter)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get('plan');
    if (plan) {
      let serviceVal = '';
      let budgetVal = '';
      if (plan === 'starter') {
        serviceVal = 'AI Workflow & N8N Automation';
        budgetVal = '$500 – $2,000';
      } else if (plan === 'growth') {
        serviceVal = 'AI Chatbots / RAG Systems';
        budgetVal = '$2,000 – $5,000';
      } else if (plan === 'enterprise') {
        serviceVal = 'Enterprise Integration';
        budgetVal = '$15,000 – $50,000';
      }
      setFormData(prev => ({
        ...prev,
        project_type: serviceVal,
        budget_range: budgetVal
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.country) newErrors.country = 'Please select your country';
    if (!formData.project_type) newErrors.project_type = 'Please select a required service';
    if (!formData.industry) newErrors.industry = 'Please select your industry';
    if (!formData.budget_range) newErrors.budget_range = 'Please select your budget range';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          service: formData.project_type,
          budget: formData.budget_range,
          message: `[Industry: ${formData.industry}] [Country: ${formData.country}] ${formData.details}`
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Unable to submit inquiry. Please check your internet connection and try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleBookingConfirm = () => {
    if (selectedTimeIndex === null) {
      alert('Please select a time slot first.');
      return;
    }

    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(true);
    }, 1200);
  };

  return (
    <div className="contact-page">
      <main style={{ paddingTop: '80px', paddingBottom: '120px' }}>
        
        {/* 1. HERO SECTION */}
        <section className="contact-hero">
          <div className="contact-hero-glow"></div>
          <div className="contact-container text-center">
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h1>
              Let's Build Something <span className="contact-gradient-blue">Incredible</span> Together
            </h1>
            <p className="contact-hero-subtitle">
              Submit your project intake details below for a custom workflow blueprint in 24 hours, or lock in a consult call directly.
            </p>
          </div>
        </section>

        {/* 2. SPLIT LAYOUT SECTION */}
        <section className="contact-content-section">
          <div className="contact-container">
            <div className="contact-grid">
              
              {/* LEFT COLUMN: Project Intake Form */}
              <div className="contact-form-column">
                <div className="contact-form-wrapper">
                  {submitSuccess ? (
                    <div className="contact-success-state text-center">
                      <div className="success-icon-badge">✓</div>
                      <h2>Inquiry Received Successfully!</h2>
                      <p>
                        Thank you for reaching out to Apitide. A custom automation blueprint is being drafted for you. One of our technical architects will email you within 24 hours to schedule a detailed code walkthrough.
                      </p>
                      <div className="success-action-wrap">
                        <Link to="/projects" className="contact-btn contact-btn-secondary">
                          View Our Case Studies
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="contact-form-container">
                      <div className="form-header">
                        <h2>Project Intake Form</h2>
                        <p>Fill in your details below and we'll draft your technical design document.</p>
                      </div>

                      {submitError && (
                        <div className="form-error-banner">
                          <i className="fas fa-exclamation-circle"></i> {submitError}
                        </div>
                      )}

                      <form onSubmit={handleFormSubmit} className="contact-form-element" noValidate>
                        
                        <div className="form-row-2col">
                          <div className="form-group">
                            <label htmlFor="full_name">Full Name <span className="req">*</span></label>
                            <input 
                              type="text" 
                              id="full_name" 
                              name="full_name" 
                              placeholder="Your Full Name"
                              value={formData.full_name}
                              onChange={handleChange}
                              className={errors.full_name ? 'error' : ''}
                            />
                            {errors.full_name && <span className="error-message">{errors.full_name}</span>}
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="email">Business Email <span className="req">*</span></label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              placeholder="you@company.com"
                              value={formData.email}
                              onChange={handleChange}
                              className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                          </div>
                        </div>

                        <div className="form-row-2col">
                          <div className="form-group">
                            <label htmlFor="phone">Phone / WhatsApp</label>
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              placeholder="+91 00000 00000"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="country">Country <span className="req">*</span></label>
                            <div className="select-box-wrap">
                              <select 
                                id="country" 
                                name="country" 
                                value={formData.country}
                                onChange={handleChange}
                                className={errors.country ? 'error' : ''}
                              >
                                <option value="" disabled>— Select your country —</option>
                                <option value="India">🇮🇳 India</option>
                                <option value="United States">🇺🇸 United States</option>
                                <option value="United Kingdom">🇬🇧 United Kingdom</option>
                                <option value="Canada">🇨🇦 Canada</option>
                                <option value="Australia">🇦🇺 Australia</option>
                                <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
                                <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                                <option value="Germany">🇩🇪 Germany</option>
                                <option value="Singapore">🇸🇬 Singapore</option>
                                <option value="Other">🌍 Other</option>
                              </select>
                              <i className="fas fa-chevron-down select-arrow"></i>
                            </div>
                            {errors.country && <span className="error-message">{errors.country}</span>}
                          </div>
                        </div>

                        <div className="form-row-2col">
                          <div className="form-group">
                            <label htmlFor="project_type">Service Required <span className="req">*</span></label>
                            <div className="select-box-wrap">
                              <select 
                                id="project_type" 
                                name="project_type"
                                value={formData.project_type}
                                onChange={handleChange}
                                className={errors.project_type ? 'error' : ''}
                              >
                                <option value="" disabled>— Select a service —</option>
                                <option value="AI Workflow & N8N Automation">⚙️ AI Workflow &amp; N8N Automation</option>
                                <option value="Web & Mobile Development">💻 Web &amp; Mobile Development</option>
                                <option value="AI Chatbots / RAG Systems">🤖 AI Chatbots &amp; RAG Systems</option>
                                <option value="AI Voice Agent">📞 AI Voice Agent</option>
                                <option value="CRM / Sales Automation">📈 CRM &amp; Sales Automation</option>
                                <option value="WhatsApp / Email Automation">💬 WhatsApp &amp; Email Automation</option>
                                <option value="Consulting & Audit">🔍 Workflow Consulting &amp; Audit</option>
                                <option value="Other">✨ Other Custom Solution</option>
                              </select>
                              <i className="fas fa-chevron-down select-arrow"></i>
                            </div>
                            {errors.project_type && <span className="error-message">{errors.project_type}</span>}
                          </div>

                          <div className="form-group">
                            <label htmlFor="industry">Your Industry <span className="req">*</span></label>
                            <div className="select-box-wrap">
                              <select 
                                id="industry" 
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                className={errors.industry ? 'error' : ''}
                              >
                                <option value="" disabled>— Select your industry —</option>
                                <option value="Healthcare & MedTech">🏥 Healthcare &amp; MedTech</option>
                                <option value="Finance & Accounting">💰 Finance &amp; Accounting</option>
                                <option value="Real Estate">🏠 Real Estate &amp; Property</option>
                                <option value="Legal Services">⚖️ Legal Services</option>
                                <option value="Education & EdTech">🎓 Education &amp; EdTech</option>
                                <option value="Retail & E-Commerce">🛍️ Retail &amp; E-Commerce</option>
                                <option value="SaaS & Technology">💡 SaaS &amp; Technology</option>
                                <option value="Startups">🚀 Startups</option>
                                <option value="Enterprise & Corporations">🏢 Enterprise &amp; Corporations</option>
                                <option value="Other">🌐 Other</option>
                              </select>
                              <i className="fas fa-chevron-down select-arrow"></i>
                            </div>
                            {errors.industry && <span className="error-message">{errors.industry}</span>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="budget_range">Estimated Budget <span className="req">*</span></label>
                          <div className="select-box-wrap">
                            <select 
                              id="budget_range" 
                              name="budget_range"
                              value={formData.budget_range}
                              onChange={handleChange}
                              className={errors.budget_range ? 'error' : ''}
                            >
                              <option value="" disabled>— Select your budget range —</option>
                              <option value="Under $500">💵 Under $500</option>
                              <option value="$500 – $2,000">💵 $500 – $2,000</option>
                              <option value="$2,000 – $5,000">💰 $2,000 – $5,000</option>
                              <option value="$5,000 – $15,000">💰 $5,000 – $15,000</option>
                              <option value="$15,000 – $50,000">💎 $15,000 – $50,000</option>
                              <option value="$50,000+">🏆 $50,000+ (Enterprise)</option>
                              <option value="Let's Discuss">🤝 Let's Discuss</option>
                            </select>
                            <i className="fas fa-chevron-down select-arrow"></i>
                          </div>
                          {errors.budget_range && <span className="error-message">{errors.budget_range}</span>}
                          <span className="field-hint">Helps our engineering team scope deployment phases.</span>
                        </div>

                        <div className="form-group">
                          <label htmlFor="details">Project Details</label>
                          <textarea 
                            id="details" 
                            name="details" 
                            rows="3" 
                            placeholder="Describe your current bottleneck, integrations needed (N8N, Salesforce, OpenAI, WhatsApp), and core project milestones..."
                            value={formData.details}
                            onChange={handleChange}
                          ></textarea>
                          <span className="field-hint">Detailed contexts result in more granular architectural blueprints.</span>
                        </div>

                        <button 
                          type="submit" 
                          className="contact-btn contact-btn-primary full-width" 
                          disabled={isSending}
                        >
                          {isSending ? (
                            <span><i className="fas fa-spinner fa-spin"></i> Preparing Blueprint...</span>
                          ) : (
                            <span><i className="fas fa-paper-plane"></i> Request Custom Blueprint</span>
                          )}
                        </button>

                        <p className="form-disclaimer-text">
                          <i className="fas fa-lock"></i> Your data is secured and protected. Response guaranteed within 24 hours.
                        </p>
                      </form>
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: Scheduler & Direct Info Stacked */}
              <div className="contact-info-column">
                
                {/* Scheduler Card */}
                <div className="contact-scheduler-wrapper">
                  {bookingSuccess ? (
                    <div className="contact-success-state text-center booking">
                      <div className="success-icon-badge">📅</div>
                      <h2>Consultation Booking Registered!</h2>
                      <p>
                        A calendar invitation has been sent for **{DAYS_DATA[selectedDayIndex].date} at {TIME_SLOTS[selectedTimeIndex]}**. 
                        Our lead technical architect will join the video call to review your system intake details.
                      </p>
                      <button 
                        type="button" 
                        onClick={() => {
                          setBookingSuccess(false);
                          setSelectedTimeIndex(null);
                        }} 
                        className="contact-btn contact-btn-secondary"
                      >
                        Book Another Slot
                      </button>
                    </div>
                  ) : (
                    <div className="contact-scheduler-container">
                      <div className="scheduler-header">
                        <h2>Schedule Instantly</h2>
                        <p>Sync directly with our technical team in real time. Select an open slot.</p>
                      </div>

                      {/* Day Grid */}
                      <div className="scheduler-days-grid">
                        {DAYS_DATA.map((item, idx) => (
                          <div 
                            key={idx}
                            className={`scheduler-day-card ${selectedDayIndex === idx ? 'active' : ''}`}
                            onClick={() => {
                              setSelectedDayIndex(idx);
                              setSelectedTimeIndex(null);
                            }}
                          >
                            <span className="day-name">{item.day}</span>
                            <span className="day-number">{item.num}</span>
                          </div>
                        ))}
                      </div>

                      {/* Time Slots */}
                      <div className="scheduler-time-slots-container">
                        <span className="slots-title">Available Hours ({DAYS_DATA[selectedDayIndex].day}):</span>
                        <div className="time-slots-grid">
                          {TIME_SLOTS.map((time, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className={`time-slot-btn ${selectedTimeIndex === idx ? 'active' : ''}`}
                              onClick={() => setSelectedTimeIndex(idx)}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Selection Summary */}
                      <div className="scheduler-summary-alert">
                        {selectedTimeIndex !== null ? (
                          <p className="summary-text">
                            <i className="far fa-clock"></i> Selected Slot: <strong>{DAYS_DATA[selectedDayIndex].date} at {TIME_SLOTS[selectedTimeIndex]}</strong>
                          </p>
                        ) : (
                          <p className="summary-text muted">
                            <i className="far fa-calendar-alt"></i> Please choose an available time slot above.
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={handleBookingConfirm}
                        className="contact-btn contact-btn-primary full-width"
                        disabled={selectedTimeIndex === null || isBooking}
                      >
                        {isBooking ? (
                          <span><i className="fas fa-spinner fa-spin"></i> Locking Slot...</span>
                        ) : (
                          <span>Confirm Booking Slot</span>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Direct Channels Card */}
                <div className="contact-direct-card">
                  <h3 className="sidebar-section-title">Alternative Contact Channels</h3>
                  <p className="channels-desc">Have a quick question or want to send RFPs directly? Get in touch via email or phone.</p>
                  
                  <div className="direct-link-row">
                    <i className="fas fa-envelope link-icon"></i>
                    <div className="link-content">
                      <span className="link-label">Founder Mailbox</span>
                      <a href="mailto:apitideinfo@gmail.com" className="link-actual">apitideinfo@gmail.com</a>
                    </div>
                  </div>

                  <div className="direct-link-row">
                    <i className="fas fa-phone-alt link-icon"></i>
                    <div className="link-content">
                      <span className="link-label">Technical Call Line / WhatsApp</span>
                      <a href="tel:+917877813270" className="link-actual">+91 7877813270</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3. HORIZONTAL TRUST FOOTER */}
        <section className="contact-trust-footer-section">
          <div className="contact-container">
            <div className="contact-trust-divider"></div>
            <div className="contact-trust-grid">
              
              <div className="trust-footer-item">
                <div className="trust-footer-icon">⚙️</div>
                <div className="trust-footer-content">
                  <h4>Custom Automation Blueprint</h4>
                  <p>Receive a free, tailored automation proposal mapping out exact tools, API connections, and savings metrics in 24 hours.</p>
                </div>
              </div>

              <div className="trust-footer-item">
                <div className="trust-footer-icon">🛡️</div>
                <div className="trust-footer-content">
                  <h4>Confidentiality Guarantee</h4>
                  <p>All process discussions, code bases, and organizational workflows remain fully secure under a bilateral NDA.</p>
                </div>
              </div>

              <div className="trust-footer-item">
                <div className="trust-footer-icon">⚡</div>
                <div className="trust-footer-content">
                  <h4>Direct Architect Access</h4>
                  <p>Skip the sales representatives. Speak directly with our lead developers Mayank Joshi and Saurabh to analyze technical scopes.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
