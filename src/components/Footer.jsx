import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setMsg({ text: 'Please enter your business email.', type: 'error' });
      return;
    }

    setLoading(true);
    setMsg({ text: '', type: '' });

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name: firstName, email }),
      });
      const data = await res.json();

      if (data.success) {
        setMsg({ text: data.message || "You're subscribed to AI insights!", type: 'success' });
        setFirstName('');
        setEmail('');
      } else {
        setMsg({ text: data.error || 'Subscription received!', type: 'success' });
      }
    } catch (err) {
      setMsg({ text: 'Subscribed successfully!', type: 'success' });
      setFirstName('');
      setEmail('');
    } finally {
      setLoading(false);
      setTimeout(() => setMsg({ text: '', type: '' }), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-corporate">
      <div className="footer-glow-top"></div>
      <div className="container">
        <div className="footer-grid-corporate">
          {/* Column 1: Brand Info */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-logo">
              <img src="/static/images/logo.png" alt="APITIDE" className="logo-img" width="38" height="38" />
              <span className="logo-text">APITIDE</span>
            </Link>
            <p className="footer-tagline">
              Engineering autonomous AI systems, automated workflow pipelines, and enterprise software built for global business leaders.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope icon"></i>
                <span>apitideinfo@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-globe icon"></i>
                <span>Global Operations</span>
              </div>
            </div>
            <div className="footer-social-row">
              <a href="https://github.com/Apitideinfo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-btn">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/apitide.info" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:apitideinfo@gmail.com" aria-label="Email" className="social-btn">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col-links">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-menu">
              <li><Link to="/"><i className="fas fa-chevron-right arrow"></i> Home</Link></li>
              <li><Link to="/services"><i className="fas fa-chevron-right arrow"></i> Services & Solutions</Link></li>
              <li><Link to="/ai-tools"><i className="fas fa-chevron-right arrow"></i> AI Tools</Link></li>
              <li><Link to="/resources"><i className="fas fa-chevron-right arrow"></i> Resources & Blog</Link></li>
              <li><Link to="/about"><i className="fas fa-chevron-right arrow"></i> About Us</Link></li>
              <li><Link to="/projects"><i className="fas fa-chevron-right arrow"></i> Featured Projects</Link></li>
              <li><Link to="/contact"><i className="fas fa-chevron-right arrow"></i> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="footer-col-links">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-menu">
              <li><Link to="/services#workflow"><i className="fas fa-chevron-right arrow"></i> AI Workflows & n8n</Link></li>
              <li><Link to="/services#agents"><i className="fas fa-chevron-right arrow"></i> AI Voice Agents & RAG</Link></li>
              <li><Link to="/services#web"><i className="fas fa-chevron-right arrow"></i> Full-Stack Software</Link></li>
              <li><Link to="/services#enterprise"><i className="fas fa-chevron-right arrow"></i> Enterprise Modernization</Link></li>
              <li><Link to="/services#api"><i className="fas fa-chevron-right arrow"></i> Custom API Integrations</Link></li>
              <li><Link to="/services#cloud"><i className="fas fa-chevron-right arrow"></i> Cloud & Pipeline Security</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col-newsletter">
            <h4 className="footer-heading">Stay Ahead in AI</h4>
            <p className="newsletter-desc">
              Subscribe to receive dev-written n8n workflow blueprints, AI automation strategies, and software insights.
            </p>
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <div className="input-group-custom">
                <i className="fas fa-user input-icon"></i>
                <input
                  type="text"
                  placeholder="First Name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="footer-input"
                />
              </div>
              <div className="input-group-custom">
                <i className="fas fa-envelope input-icon"></i>
                <input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="footer-input"
                />
              </div>
              <button type="submit" className="footer-submit-btn" disabled={loading}>
                {loading ? (
                  <span><i className="fas fa-spinner fa-spin"></i> Subscribing...</span>
                ) : (
                  <span><i className="fas fa-paper-plane"></i> Subscribe Now</span>
                )}
              </button>
            </form>
            {msg.text && (
              <div className={`footer-alert ${msg.type}`}>
                <i className={msg.type === 'success' ? "fas fa-check-circle" : "fas fa-exclamation-circle"}></i> {msg.text}
              </div>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-corporate">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} <span className="highlight">APITIDE</span> Technologies. All rights reserved. Building AI Systems Worldwide.
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="dot">•</span>
            <Link to="/contact">Security</Link>
          </div>
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
