import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import ProcessTimeline from '../components/ProcessTimeline.jsx';

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <main>
      <Hero onOpenDemo={() => setDemoModalOpen(true)} />

      {/* TRANSFORMATION SHOWCASE BANNER */}
      <section className="banner-showcase-section">
        <div className="banner-showcase-wrapper">
          <img
            src="/static/images/hero-visual.png"
            alt="APITIDE - Code Transformation & AI Modernization"
            className="transformation-banner-img"
            loading="lazy"
          />
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-dark-navy" id="services">
        <div className="container">
          <h2 className="section-title">
            A Combination of <span className="gradient-text-orange">Skills</span> Built for Your{' '}
            <span className="gradient-text-blue">Growth</span>
          </h2>
          <p className="section-subtitle">
            We design websites, apps, AI systems, and marketing strategies that help businesses grow faster, smarter, and stronger.
          </p>

          <div className="services-grid">
            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-network-wired"></i></div>
              <h3>AI Workflow & n8n Automation</h3>
              <p>Connect your business tools and let AI orchestrate the heavy lifting. We build automated data-pipelines, sync leads across CRMs, and trigger tasks seamlessly.</p>

              <div className="service-features">
                <span className="feature-tag">n8n</span>
                <span className="feature-tag">Make/Zapier</span>
                <span className="feature-tag">REST APIs</span>
                <span className="feature-tag">CRM Sync</span>
              </div>
              <Link to="/services" className="service-btn">Learn More</Link>
            </div>

            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
              <h3>Web & Mobile Development</h3>
              <p>Custom full-stack web and mobile systems designed for lightning-fast performance, premium aesthetics, and optimal conversion rates.</p>
              <div className="service-features">
                <span className="feature-tag">React.js</span>
                <span className="feature-tag">Next.js</span>
                <span className="feature-tag">Node.js</span>
                <span className="feature-tag">Python</span>
              </div>
              <Link to="/services" className="service-btn">Learn More</Link>
            </div>

            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-robot"></i></div>
              <h3>AI Voice & RAG Chatbots</h3>
              <p>Deploy human-sounding AI phone reps and intelligent knowledge-base chatbots that resolve customer support cases 24/7 without manual intervention.</p>
              <div className="service-features">
                <span className="feature-tag">Voice AI</span>
                <span className="feature-tag">RAG / Vector DB</span>
                <span className="feature-tag">WhatsApp API</span>
                <span className="feature-tag">24/7 Ops</span>
              </div>
              <Link to="/services" className="service-btn">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <ProcessTimeline />

      {/* WHY CHOOSE US */}
      <section className="section-dark-navy">
        <div className="container">
          <h2 className="section-title">
            Why Forward-Thinking <span className="gradient-text-cyan">Companies</span> Choose APITIDE
          </h2>
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            <div className="why-card glass-card">
              <div className="why-icon"><i className="fas fa-bolt"></i></div>
              <h3>Rapid Deployment</h3>
              <p>We deploy production-grade AI automations and custom software in days, not months, using robust pre-tested framework blocks.</p>
            </div>
            <div className="why-card glass-card">
              <div className="why-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Enterprise Security</h3>
              <p>Bank-grade encryption protocols, data privacy compliance, and strict secret key management across all integrated API channels.</p>
            </div>
            <div className="why-card glass-card">
              <div className="why-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Measurable ROI</h3>
              <p>Track direct cost reductions and hours saved. Every automation system we deliver comes with an operational dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO TRANSFORM CTA */}
      <section className="section-light-slate" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">
            Ready to <span className="gradient-text-blue">Automate</span> Your Business Operations?
          </h2>
          <p className="section-subtitle">
            Book a 30-minute free discovery call to discuss your bottlenecks and get a custom AI implementation blueprint.
          </p>
          <Link to="/contact" className="cta-btn primary" style={{ display: 'inline-flex' }}>
            <i className="fas fa-calendar-check"></i> Schedule Free Consultation
          </Link>
        </div>
      </section>

      {/* DEMO VIDEO MODAL */}
      {demoModalOpen && (
        <div className="modal active" style={{ display: 'flex', position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 10000, alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content glass-card" style={{ maxWidth: '700px', width: '90%', padding: '30px', position: 'relative' }}>
            <button className="close-modal" onClick={() => setDemoModalOpen(false)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
            <h3 style={{ marginBottom: '15px' }}>APITIDE AI Automation Demo</h3>
            <p style={{ marginBottom: '20px' }}>Explore how our n8n workflows and AI phone agents automate lead capture, CRM sync, and customer dispatches in real-time.</p>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                title="APITIDE Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
