import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <main style={{ paddingTop: '100px', paddingBottom: '80px' }} className="section-dark-navy">
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="pill-badge blue" style={{ marginBottom: '15px', display: 'inline-block' }}>
            <i className="fas fa-shield-alt"></i> LEGAL &amp; GOVERNANCE
          </span>
          <h1 className="section-title">
            Privacy <span className="gradient-text-cyan">Policy</span>
          </h1>
          <p className="section-subtitle">
            Effective Date: August 10, 2026 • APITIDE Technologies — Protecting Data &amp; AI Systems Worldwide
          </p>
        </div>

        {/* Legal Document Grid */}
        <div className="legal-layout-grid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '40px' }}>
          {/* Table of Contents Sidebar */}
          <aside className="legal-sidebar glass-card" style={{ padding: '24px', borderRadius: '16px', height: 'fit-content', position: 'sticky', top: '110px' }}>
            <h4 style={{ color: '#F8FAFC', marginBottom: '16px', fontSize: '1rem', fontWeight: '700' }}>Table of Contents</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#overview" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#38BDF8' }}></i> 1. Overview</a></li>
              <li><a href="#collection" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#38BDF8' }}></i> 2. Information We Collect</a></li>
              <li><a href="#usage" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#38BDF8' }}></i> 3. How We Use Data</a></li>
              <li><a href="#integrations" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#38BDF8' }}></i> 4. API &amp; AI Data Processing</a></li>
              <li><a href="#security" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#38BDF8' }}></i> 5. Security &amp; Encryption</a></li>
              <li><a href="#rights" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#38BDF8' }}></i> 6. User Rights &amp; GDPR</a></li>
              <li><a href="#contact" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#38BDF8' }}></i> 7. Contact Governance</a></li>
            </ul>
          </aside>

          {/* Main Legal Content */}
          <div className="legal-content glass-card" style={{ padding: '40px', borderRadius: '20px', lineHeight: '1.7', color: '#CBD5E1' }}>
            <section id="overview" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                1. Overview &amp; Data Philosophy
              </h2>
              <p>
                At <strong>APITIDE Technologies</strong> ("APITIDE", "we", "us", or "our"), privacy and enterprise data security are fundamental to our engineering culture. As a software agency specializing in AI voice agents, n8n workflow automation pipelines, custom API integrations, and full-stack enterprise solutions, we adhere to high standards of data protection.
              </p>
              <p>
                This Privacy Policy explains how we collect, process, store, and safeguard data when you visit our website (<Link to="/" style={{ color: '#38BDF8' }}>apitide.com</Link>), utilize our AI consultation services, or integrate our custom automation workflows.
              </p>
            </section>

            <section id="collection" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                2. Information We Collect
              </h2>
              <p>We collect information to provide seamless engineering services, schedule discovery calls, and optimize our AI workflow infrastructure:</p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Personal Identification Data:</strong> Full name, business email address, phone number, company name, and project scope submitted through intake forms or newsletter subscriptions.</li>
                <li style={{ marginBottom: '8px' }}><strong>System &amp; API Integration Data:</strong> Technical briefs, webhook payload schemas, CRM connection specifications, and API endpoints provided for workflow deployment.</li>
                <li style={{ marginBottom: '8px' }}><strong>Automated Technical Logs:</strong> IP address, browser type, device specifications, operating system, referral URLs, and interaction telemetry collected via analytical cookies.</li>
              </ul>
            </section>

            <section id="usage" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                3. How We Process &amp; Use Data
              </h2>
              <p>We process collected information strictly for operational and client services purposes:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>To design, deploy, and maintain custom n8n automation pipelines and AI voice agent workflows.</li>
                <li style={{ marginBottom: '8px' }}>To schedule technical audit consultations, deliver proposals, and communicate project status updates.</li>
                <li style={{ marginBottom: '8px' }}>To send technical newsletters, dev-written workflow blueprints, and system maintenance alerts (opt-out available anytime).</li>
                <li style={{ marginBottom: '8px' }}>To ensure server stability, prevent security breaches, and fulfill legal compliance requirements.</li>
              </ul>
            </section>

            <section id="integrations" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                4. API &amp; AI Model Data Handling
              </h2>
              <div style={{ background: 'rgba(56, 189, 248, 0.08)', borderLeft: '4px solid #38BDF8', padding: '16px 20px', borderRadius: '8px', marginBottom: '16px' }}>
                <strong style={{ color: '#38BDF8' }}>Zero Public AI Training Guarantee:</strong> We do NOT sell, rent, or use client proprietary business data, API payloads, or confidential credentials to train public AI foundation models.
              </div>
              <p>
                When building AI tools involving LLM providers (e.g., OpenAI, Anthropic, VAPI, Meta Cloud), we implement zero-data-retention API endpoints wherever technically supported by the underlying cloud provider. All client API keys and OAuth tokens are stored using enterprise key vaults with strict RBAC access controls.
              </p>
            </section>

            <section id="security" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                5. Security &amp; Encryption Standards
              </h2>
              <p>
                We enforce military-grade security architecture across all deployment environments:
              </p>
              <ul style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Encryption at Rest &amp; Transit:</strong> Data is encrypted in transit using TLS 1.3 and at rest using AES-256 algorithms.</li>
                <li style={{ marginBottom: '8px' }}><strong>Isolated Workspaces:</strong> Client n8n containers, Railway deployments, and PostgreSQL instances are logically isolated.</li>
                <li style={{ marginBottom: '8px' }}><strong>Continuous Monitoring:</strong> Real-time automated error tracing and security logging dispatches.</li>
              </ul>
            </section>

            <section id="rights" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                6. User Rights &amp; Data Governance (GDPR / CCPA)
              </h2>
              <p>Depending on your jurisdiction, you possess rights to inspect, amend, or purge your personal data:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Right to Access &amp; Export:</strong> Request a full archive of personal information associated with your account.</li>
                <li style={{ marginBottom: '8px' }}><strong>Right to Erasure (Right to be Forgotten):</strong> Request permanent deletion of intake forms and contact records.</li>
                <li style={{ marginBottom: '8px' }}><strong>Opt-Out:</strong> Unsubscribe from newsletter transmissions at any time via single-click email links.</li>
              </ul>
            </section>

            <section id="contact">
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                7. Contact Governance Team
              </h2>
              <p>If you have inquiries regarding our data governance practices or security compliance, contact our legal desk:</p>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginTop: '14px' }}>
                <p style={{ margin: 0, fontWeight: '600', color: '#F8FAFC' }}>APITIDE Technologies — Legal &amp; Compliance Desk</p>
                <p style={{ margin: '6px 0 0 0', color: '#94A3B8' }}>Email: <a href="mailto:apitideinfo@gmail.com" style={{ color: '#38BDF8' }}>apitideinfo@gmail.com</a></p>
                <p style={{ margin: '4px 0 0 0', color: '#94A3B8' }}>Website: <Link to="/" style={{ color: '#38BDF8' }}>www.apitide.com</Link></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
