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

          {/* Moving Logo Ticker Line */}
          <p className="hero-ticker-label">AUTOMATING OPERATIONS ACROSS INDUSTRY LEADING PLATFORMS</p>
          <div className="hero-ticker-strip tech-stack">
            <div className="hero-ticker-track">
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="OpenAI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> OpenAI</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" alt="n8n" className="si-logo" style={{ filter: 'invert(35%) sepia(80%) saturate(2500%) hue-rotate(325deg)' }} /> n8n</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twilio.svg" alt="Twilio" className="si-logo" style={{ filter: 'invert(37%) sepia(93%) saturate(3015%) hue-rotate(338deg)' }} /> Twilio</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" alt="Azure" className="si-logo" style={{ filter: 'invert(40%) sepia(85%) saturate(2000%) hue-rotate(185deg)' }} /> Azure</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="si-logo" style={{ filter: 'invert(65%) sepia(80%) saturate(1000%) hue-rotate(155deg)' }} /> React</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" alt="Next.js" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Next.js</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" alt="Node.js" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1000%) hue-rotate(85deg)' }} /> Node.js</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="si-logo" style={{ filter: 'invert(45%) sepia(60%) saturate(1000%) hue-rotate(170deg)' }} /> Python</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" alt="FastAPI" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1500%) hue-rotate(130deg)' }} /> FastAPI</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2000%) hue-rotate(175deg)' }} /> Docker</span>
              <span className="hero-ticker-item"><i className="fab fa-aws" style={{ color: '#FF9900' }}></i> AWS</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" alt="Firebase" className="si-logo" style={{ filter: 'invert(80%) sepia(80%) saturate(1500%) hue-rotate(350deg)' }} /> Firebase</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg" alt="LangChain" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> LangChain</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" alt="PostgreSQL" className="si-logo" style={{ filter: 'invert(40%) sepia(80%) saturate(1500%) hue-rotate(190deg)' }} /> PostgreSQL</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg" alt="Vercel" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Vercel</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" alt="Stripe" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(210deg)' }} /> Stripe</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg" alt="Zapier" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2500%) hue-rotate(355deg)' }} /> Zapier</span>

              {/* Duplicate for seamless loop */}
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="OpenAI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> OpenAI</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" alt="n8n" className="si-logo" style={{ filter: 'invert(35%) sepia(80%) saturate(2500%) hue-rotate(325deg)' }} /> n8n</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twilio.svg" alt="Twilio" className="si-logo" style={{ filter: 'invert(37%) sepia(93%) saturate(3015%) hue-rotate(338deg)' }} /> Twilio</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" alt="Azure" className="si-logo" style={{ filter: 'invert(40%) sepia(85%) saturate(2000%) hue-rotate(185deg)' }} /> Azure</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="si-logo" style={{ filter: 'invert(65%) sepia(80%) saturate(1000%) hue-rotate(155deg)' }} /> React</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" alt="Next.js" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Next.js</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" alt="Node.js" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1000%) hue-rotate(85deg)' }} /> Node.js</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="si-logo" style={{ filter: 'invert(45%) sepia(60%) saturate(1000%) hue-rotate(170deg)' }} /> Python</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" alt="FastAPI" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1500%) hue-rotate(130deg)' }} /> FastAPI</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2000%) hue-rotate(175deg)' }} /> Docker</span>
              <span className="hero-ticker-item"><i className="fab fa-aws" style={{ color: '#FF9900' }}></i> AWS</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" alt="Firebase" className="si-logo" style={{ filter: 'invert(80%) sepia(80%) saturate(1500%) hue-rotate(350deg)' }} /> Firebase</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg" alt="LangChain" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> LangChain</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" alt="PostgreSQL" className="si-logo" style={{ filter: 'invert(40%) sepia(80%) saturate(1500%) hue-rotate(190deg)' }} /> PostgreSQL</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg" alt="Vercel" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Vercel</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" alt="Stripe" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(210deg)' }} /> Stripe</span>
              <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg" alt="Zapier" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2500%) hue-rotate(355deg)' }} /> Zapier</span>
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
