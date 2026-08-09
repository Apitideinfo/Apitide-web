import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ onOpenDemo }) {
  const [typewriterText, setTypewriterText] = useState('While You Sleep.');

  useEffect(() => {
    const phrases = [
      'While You Sleep.',
      'Without Extra Staff.',
      'At 10x Speed.',
      'With Zero Errors.',
      'Around The Clock.',
    ];
    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = false;
    let timeoutId = null;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setTypewriterText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypewriterText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
      }

      timeoutId = setTimeout(type, speed);
    };

    timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero" id="hero">
      <video className="hero-bg-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source src="/static/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay"></div>
      <div className="hero-glow-blob"></div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline">
            Build <span className="gradient-text-blue">AI Systems</span> That Work{' '}
            <span className="typewriter-container">
              <span className="gradient-text-orange">{typewriterText}</span>
              <span className="typewriter-cursor">|</span>
            </span>
          </h1>

          <p>
            We build intelligent automation systems, AI agents, enterprise software, and modern digital experiences that save thousands of working hours every month.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="cta-btn primary">
              <i className="fas fa-calendar-alt"></i> Book Consultation
            </Link>
            <Link to="/projects" className="cta-btn secondary">
              View Portfolio
            </Link>
            <button onClick={onOpenDemo} className="cta-btn secondary" type="button">
              <i className="fas fa-play-circle"></i> Watch Demo
            </button>
          </div>

          {/* Logo Ticker */}
          <div className="logo-ticker-container">
            <p className="ticker-label">AUTOMATING OPERATIONS ACROSS INDUSTRY LEADING PLATFORMS</p>
            <div className="logo-ticker-track">
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/stripe/635BFF" alt="Stripe" className="si-logo" /> Stripe</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/shopify/96BF48" alt="Shopify" className="si-logo" /> Shopify</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/n8n/EA4B71" alt="n8n" className="si-logo" /> n8n</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/zapier/FF4A00" alt="Zapier" className="si-logo" /> Zapier</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/openai/ffffff" alt="OpenAI" className="si-logo" /> OpenAI</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/slack/ECB22E" alt="Slack" className="si-logo" /> Slack</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/google/4285F4" alt="Google" className="si-logo" /> Google</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/airtable/18BFFF" alt="Airtable" className="si-logo" /> Airtable</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" className="si-logo" /> WhatsApp</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/hubspot/FF7A59" alt="HubSpot" className="si-logo" /> HubSpot</div>
              <div className="logo-ticker-item"><i className="fab fa-aws" style={{ color: '#FF9900', fontSize: '1.2rem' }}></i> AWS</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" className="si-logo" /> Firebase</div>
              {/* Duplicate for seamless loop */}
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/stripe/635BFF" alt="Stripe" className="si-logo" /> Stripe</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/shopify/96BF48" alt="Shopify" className="si-logo" /> Shopify</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/n8n/EA4B71" alt="n8n" className="si-logo" /> n8n</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/zapier/FF4A00" alt="Zapier" className="si-logo" /> Zapier</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/openai/ffffff" alt="OpenAI" className="si-logo" /> OpenAI</div>
              <div className="logo-ticker-item"><img src="https://cdn.simpleicons.org/slack/ECB22E" alt="Slack" className="si-logo" /> Slack</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="hero-stats-grid">
            <div className="hero-stat-item">
              <span className="stat-number stat-number-value">100+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-number stat-number-value">15+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-number stat-number-value">50+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-number stat-number-value">10,000+</span>
              <span className="stat-label">Hours Saved</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-number stat-number-value">$1.2M+</span>
              <span className="stat-label">Revenue Generated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
