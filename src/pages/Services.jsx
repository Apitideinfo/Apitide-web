import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    // Trigger dynamic interactions on mount
  }, []);

  return (
    <div className="services-page">
      <main style={{ paddingTop: '80px', paddingBottom: '120px' }}>
        
        {/* SERVICES HERO */}
        <section className="hero services-hero" id="services-hero">
          <div className="hero-glow-blob"></div>
          <div className="container">
            <div className="hero-content">
              <h1>
                Smart <span className="gradient-text-blue">AI Workflows</span> &amp; Custom <span className="gradient-text-orange">Software</span>
              </h1>
              <p>
                We build automated pipelines, RAG chatbots, and high-converting software designed to scale your business operations while you sleep.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="cta-btn primary">Start Your Project</Link>
                <Link to="/projects" className="cta-btn secondary">View Our Work</Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES MAIN GRID */}
        <section className="section-dark-navy">
          <div className="container">
            <h2 className="section-title">Core Capabilities</h2>
            <p className="section-subtitle">
              Intelligent solutions engineered for startups, small businesses, and enterprise operations.
            </p>
            
            <div className="services-grid">
              
              {/* 1. AI Workflow & N8N Automation */}
              <div className="service-card glass-card" id="workflow">
                <div className="service-icon"><i className="fas fa-network-wired"></i></div>
                <h3>AI Workflow &amp; N8N Automation</h3>
                <p>
                  Supercharge your operational efficiency. We construct custom n8n automation scenarios that link your CRM, email servers, databases, and third-party APIs. Perfect for B2B SaaS lead feeder networks and data aggregation operations.
                </p>
                <div className="service-features">
                  <span className="feature-tag">N8N Workflows</span>
                  <span className="feature-tag">Zapier/Make</span>
                  <span className="feature-tag">API Hooking</span>
                  <span className="feature-tag">Google/Outlook APIs</span>
                </div>
                <Link to="/contact?service=n8n" className="service-btn">Get Started</Link>
              </div>

              {/* 2. Web & Mobile Apps */}
              <div className="service-card glass-card" id="development">
                <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
                <h3>Custom Web &amp; Mobile Development</h3>
                <p>
                  We program fast, robust web and mobile applications from scratch. Whether you need a real-time messaging platform, a restaurant management portal, or a cross-platform mobile application, our systems scale seamlessly.
                </p>
                <div className="service-features">
                  <span className="feature-tag">React.js</span>
                  <span className="feature-tag">Next.js</span>
                  <span className="feature-tag">Django/FastAPI</span>
                  <span className="feature-tag">MongoDB/MySQL</span>
                  <span className="feature-tag">Flutter</span>
                </div>
                <Link to="/contact?service=development" className="service-btn">Get Started</Link>
              </div>

              {/* 3. AI Solutions & RAG Systems */}
              <div className="service-card glass-card" id="ai-solutions">
                <div className="service-icon"><i className="fas fa-brain"></i></div>
                <h3>AI Chatbots &amp; RAG Systems</h3>
                <p>
                  We deploy Retrieval-Augmented Generation (RAG) models grounded in your proprietary documents (WHO datasets, medical guides, company manuals). Our models eliminate hallucinations, providing reliable, secure 24/7 business insights.
                </p>
                <div className="service-features">
                  <span className="feature-tag">RAG Models</span>
                  <span className="feature-tag">Vector DBs</span>
                  <span className="feature-tag">OpenRouter</span>
                  <span className="feature-tag">Custom GPTs</span>
                </div>
                <Link to="/contact?service=ai" className="service-btn">Get Started</Link>
              </div>

              {/* 4. Luxury Branding & E-Commerce */}
              <div className="service-card glass-card" id="branding">
                <div className="service-icon"><i className="fas fa-gem"></i></div>
                <h3>Luxury Branding &amp; E-Commerce</h3>
                <p>
                  Beautiful product showcases and high-end e-commerce applications built with premium typography, micro-interactions, and visual excellence. Perfect for fragrance, jewelry, fitness, beauty, and organic foods brands.
                </p>
                <div className="service-features">
                  <span className="feature-tag">Premium UI</span>
                  <span className="feature-tag">Stripe Checkout</span>
                  <span className="feature-tag">Tailwind CSS</span>
                  <span className="feature-tag">Micro-Animations</span>
                </div>
                <Link to="/contact?service=ecommerce" className="service-btn">Get Started</Link>
              </div>

              {/* 5. Business Process Automation */}
              <div className="service-card glass-card" id="bpa">
                <div className="service-icon"><i className="fas fa-robot"></i></div>
                <h3>Business Process Automation</h3>
                <p>
                  Free up valuable hours by automating scheduling, email sorting, invoice generation, customer onboarding, and B2B cold outreach sequences. Let your machines run while you focus on growth.
                </p>
                <div className="service-features">
                  <span className="feature-tag">Cold Calling Bots</span>
                  <span className="feature-tag">Email parsers</span>
                  <span className="feature-tag">Scheduler sync</span>
                  <span className="feature-tag">CRM Sync</span>
                </div>
                <Link to="/contact?service=bpa" className="service-btn">Get Started</Link>
              </div>

              {/* 6. SEO, Performance & CRO */}
              <div className="service-card glass-card" id="seo">
                <div className="service-icon"><i className="fas fa-chart-line"></i></div>
                <h3>SEO &amp; Conversion Optimization</h3>
                <p>
                  A beautiful site is useless without traffic. We audit your site speed, implement strict technical SEO schema markups, optimize page speed, and construct high-converting layouts designed to maximize your pipeline.
                </p>
                <div className="service-features">
                  <span className="feature-tag">Speed Tuning</span>
                  <span className="feature-tag">SEO Schema</span>
                  <span className="feature-tag">Analytics</span>
                  <span className="feature-tag">CRO Audit</span>
                </div>
                <Link to="/contact?service=seo" className="service-btn">Get Started</Link>
              </div>

            </div>
          </div>
        </section>

        {/* PROCESS / STATS DETAIL SECTION */}
        <section className="section-light-slate">
          <div className="container">
            <h2 className="section-title">Our Operational Standards</h2>
            <p className="section-subtitle">
              We hold our work to the highest standards, ensuring your projects are delivered fast and built to scale.
            </p>
            
            <div className="hero-stats-grid">
              <div className="hero-stat-item">
                <span className="stat-number">40%</span>
                <span className="stat-label">Faster Delivery</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">System Monitoring</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Scalable Hosting</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
