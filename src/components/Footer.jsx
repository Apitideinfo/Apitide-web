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
      setMsg({ text: 'Please enter your email address.', type: 'error' });
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
        setMsg({ text: data.message || "You're subscribed!", type: 'success' });
        setFirstName('');
        setEmail('');
      } else {
        setMsg({ text: data.error || 'Something went wrong.', type: 'error' });
      }
    } catch (err) {
      setMsg({ text: 'Network error. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
      setTimeout(() => setMsg({ text: '', type: '' }), 6000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/static/images/logo.png" alt="APITIDE" className="logo-img" width="38" height="38" />
              <span>APITIDE</span>
            </Link>
            <p>Build AI Systems That Work While You Sleep.</p>
            <div className="footer-socials">
              <a href="https://github.com/Apitideinfo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/apitide.info" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:apitideinfo@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/ai-tools">AI Tools</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links-column">
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/services#workflow">AI Workflows & n8n</Link></li>
              <li><Link to="/services#agents">AI Voice Agents & RAG</Link></li>
              <li><Link to="/services#web">Full-Stack Development</Link></li>
              <li><Link to="/services#enterprise">Enterprise Modernization</Link></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="footer-newsletter">
            <h4>Stay Ahead in AI</h4>
            <p>Subscribe for n8n workflow blueprints, AI automation strategies, and software insights.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="form-group" style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  placeholder="First Name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group" style={{ marginBottom: '10px' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control"
                />
              </div>
              <button type="submit" className="cta-btn primary" disabled={loading} style={{ width: '100%' }}>
                {loading ? <i className="fas fa-spinner fa-spin"> Subscribing...</i> : <><i className="fas fa-rocket"></i> Subscribe Now</>}
              </button>
            </form>
            {msg.text && <div className={`newsletter-msg ${msg.type}`} style={{ display: 'block', marginTop: '10px' }}>{msg.text}</div>}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} APITIDE. All rights reserved. Building AI Systems Worldwide.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
