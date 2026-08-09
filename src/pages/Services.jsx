import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main style={{ paddingTop: '90px' }}>
      <section className="section-dark-navy">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'center' }}>
            Our <span className="gradient-text-blue">Services</span> & Engineering Capabilities
          </h1>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            We design, build, and deploy enterprise AI systems, web platforms, and automated workflows tailored to your operational bottlenecks.
          </p>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {/* Service 1 */}
            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-network-wired"></i></div>
              <h3>AI Workflow & n8n Automation</h3>
              <p>Eliminate repetitive manual data transfer between tools. We configure robust n8n, Make, and custom REST API webhooks to automate lead processing, billing dispatches, and reporting.</p>
              <div className="service-features" style={{ margin: '15px 0' }}>
                <span className="feature-tag">n8n Custom Nodes</span>
                <span className="feature-tag">Webhook Orchestration</span>
                <span className="feature-tag">CRM & ERP Sync</span>
              </div>
              <Link to="/contact" className="cta-btn primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Book Workflow Audit</Link>
            </div>

            {/* Service 2 */}
            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
              <h3>Full-Stack Web & Mobile Apps</h3>
              <p>Scalable, high-performance web applications built with modern frontend frameworks (React, Next.js) and backend architectures (Node.js, Express, Python) optimized for maximum speed and SEO.</p>
              <div className="service-features" style={{ margin: '15px 0' }}>
                <span className="feature-tag">React / Next.js</span>
                <span className="feature-tag">Node.js Express API</span>
                <span className="feature-tag">PostgreSQL / MongoDB</span>
              </div>
              <Link to="/contact" className="cta-btn primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Request Development Proposal</Link>
            </div>

            {/* Service 3 */}
            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-headset"></i></div>
              <h3>AI Voice Agents & RAG Chatbots</h3>
              <p>Deploy intelligent 24/7 AI conversational agents capable of inbound/outbound phone calls, automated appointment scheduling, and instant vector database knowledge queries.</p>
              <div className="service-features" style={{ margin: '15px 0' }}>
                <span className="feature-tag">Voice AI Integration</span>
                <span className="feature-tag">RAG / Pinecone</span>
                <span className="feature-tag">WhatsApp & Telegram Bots</span>
              </div>
              <Link to="/contact" className="cta-btn primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Build AI Agent</Link>
            </div>

            {/* Service 4 */}
            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-microchip"></i></div>
              <h3>Enterprise Modernization</h3>
              <p>Upgrade legacy backend infrastructure to modern cloud architectures with automated deployment pipelines, API gateway rate limiting, and 99.9% uptime guarantees.</p>
              <div className="service-features" style={{ margin: '15px 0' }}>
                <span className="feature-tag">AWS / Vercel Cloud</span>
                <span className="feature-tag">Docker Containerization</span>
                <span className="feature-tag">CI/CD Automation</span>
              </div>
              <Link to="/contact" className="cta-btn primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Modernize Stack</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
