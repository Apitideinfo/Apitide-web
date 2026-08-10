import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <main style={{ paddingTop: '100px', paddingBottom: '80px' }} className="section-dark-navy">
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="pill-badge blue" style={{ marginBottom: '15px', display: 'inline-block' }}>
            <i className="fas fa-file-contract"></i> LEGAL AGREEMENT
          </span>
          <h1 className="section-title">
            Terms of <span className="gradient-text-blue">Service</span>
          </h1>
          <p className="section-subtitle">
            Effective Date: August 10, 2026 • APITIDE Technologies — Building Secure AI &amp; Software Architecture
          </p>
        </div>

        {/* Legal Document Grid */}
        <div className="legal-layout-grid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '40px' }}>
          {/* Table of Contents Sidebar */}
          <aside className="legal-sidebar glass-card" style={{ padding: '24px', borderRadius: '16px', height: 'fit-content', position: 'sticky', top: '110px' }}>
            <h4 style={{ color: '#F8FAFC', marginBottom: '16px', fontSize: '1rem', fontWeight: '700' }}>Table of Contents</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#acceptance" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#3B82F6' }}></i> 1. Acceptance of Terms</a></li>
              <li><a href="#services" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#3B82F6' }}></i> 2. Services Scope</a></li>
              <li><a href="#ip" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#3B82F6' }}></i> 3. Intellectual Property</a></li>
              <li><a href="#client-responsibilities" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#3B82F6' }}></i> 4. Client Conduct &amp; APIs</a></li>
              <li><a href="#sla" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#3B82F6' }}></i> 5. SLA &amp; System Uptime</a></li>
              <li><a href="#liability" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#3B82F6' }}></i> 6. Limitation of Liability</a></li>
              <li><a href="#termination" style={{ color: '#94A3B8', textDecoration: 'none' }}><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#3B82F6' }}></i> 7. Governing Law</a></li>
            </ul>
          </aside>

          {/* Main Legal Content */}
          <div className="legal-content glass-card" style={{ padding: '40px', borderRadius: '20px', lineHeight: '1.7', color: '#CBD5E1' }}>
            <section id="acceptance" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the services, website, software applications, or custom automation pipelines provided by <strong>APITIDE Technologies</strong> ("APITIDE", "we", "us", or "our"), you ("Client", "User", "you") agree to be bound by these Terms of Service. If you do not agree to these terms, you must not access or utilize our engineering services.
              </p>
            </section>

            <section id="services" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                2. Scope of Services &amp; Engineering Deliverables
              </h2>
              <p>APITIDE provides custom AI engineering, workflow automation, and full-stack software development services including:</p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}>Development of custom n8n pipelines, webhook listeners, and enterprise data routing systems.</li>
                <li style={{ marginBottom: '8px' }}>Deployment of real-time AI voice agents, RAG knowledge bases, and conversational intake workflows.</li>
                <li style={{ marginBottom: '8px' }}>Custom full-stack web and backend applications (React, Next.js, Django, FastAPI, Node.js).</li>
                <li style={{ marginBottom: '8px' }}>Cloud infrastructure configuration (AWS, Vercel, Railway, Supabase, PostgreSQL).</li>
              </ul>
              <p>All project specifications, timelines, and payment milestones are finalized in individual Statement of Work (SOW) documents executed between APITIDE and the Client.</p>
            </section>

            <section id="ip" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                3. Intellectual Property Rights &amp; Code Ownership
              </h2>
              <div style={{ background: 'rgba(37, 99, 235, 0.08)', borderLeft: '4px solid #3B82F6', padding: '16px 20px', borderRadius: '8px', marginBottom: '16px' }}>
                <strong style={{ color: '#93C5FD' }}>100% Client Code Ownership:</strong> Upon full settlement of project milestones, APITIDE transfers full ownership of custom-developed codebase deliverables, workflow scripts, and configuration repositories to the Client.
              </div>
              <p>
                APITIDE retains ownership of pre-existing proprietary boilerplates, reusable utility modules, and general design tokens integrated into deliverables, granting the Client a perpetual, royalty-free license to use them.
              </p>
            </section>

            <section id="client-responsibilities" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                4. Client Conduct &amp; API Key Responsibilities
              </h2>
              <p>Clients utilizing APITIDE software infrastructure agree to the following obligations:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>API Credentials:</strong> Client is responsible for maintaining active API keys and paying usage billing for third-party services (OpenAI, Twilio, Meta Cloud, AWS, HubSpot).</li>
                <li style={{ marginBottom: '8px' }}><strong>Lawful Purpose:</strong> Client will not use deployed AI agents or automation workflows for spam, unauthorized voice cloning, data scraping, or illegal activities.</li>
                <li style={{ marginBottom: '8px' }}><strong>Security Integrity:</strong> Client will not attempt to bypass access controls or compromise APITIDE server instances.</li>
              </ul>
            </section>

            <section id="sla" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                5. SLA, Hosting &amp; Third-Party Uptime
              </h2>
              <p>
                While APITIDE designs resilient, error-handled architectures with automated fallback dispatches, we do not guarantee uninterrupted uptime for third-party cloud infrastructure (e.g., OpenAI API outages, Meta Cloud downtime, AWS regional maintenance). Maintenance retainers are governed by separate retainer agreements.
              </p>
            </section>

            <section id="liability" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, APITIDE Technologies shall not be liable for indirect, incidental, special, or consequential damages resulting from third-party vendor policy shifts, API deprecations, or unauthorized access to client servers beyond APITIDE's direct control. Total aggregate liability shall not exceed the fees paid by Client to APITIDE under the relevant SOW in the preceding 6 months.
              </p>
            </section>

            <section id="termination">
              <h2 style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: '700', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                7. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms of Service are governed by and construed in accordance with standard international commercial software laws. Any disputes arising from these terms shall first be attempted to be resolved through good-faith negotiation or binding arbitration.
              </p>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginTop: '14px' }}>
                <p style={{ margin: 0, fontWeight: '600', color: '#F8FAFC' }}>APITIDE Technologies — Legal Desk</p>
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
