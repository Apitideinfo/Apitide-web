import React from 'react';
import { Link } from 'react-router-dom';

const tools = [
  { icon: 'fa-brain', name: 'RAG Knowledge Assistant', category: 'LLM & Vector Search', desc: 'Queries your private company documentation, PDFs, and database tables to deliver instant, hallucination-free answers to your team.' },
  { icon: 'fa-project-diagram', name: 'n8n Workflow Engine', category: 'Automation Pipeline', desc: 'Automates multi-step business logic across CRM, Stripe, Gmail, and Slack with real-time error handling and trace logs.' },
  { icon: 'fa-phone-alt', name: 'AI Voice Representative', category: 'Voice AI & Telephony', desc: 'Handles inbound phone inquiries, qualifies leads, and books calendar appointments on Google Calendar / Outlook in human voice.' },
  { icon: 'fa-comments', name: 'WhatsApp Business Automator', category: 'Messaging API', desc: 'Sends automated order confirmations, broadcasts promotional campaigns, and answers FAQ messages on WhatsApp.' },
];

export default function AITools() {
  return (
    <main style={{ paddingTop: '90px' }}>
      <section className="section-dark-navy">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'center' }}>
            Enterprise <span className="gradient-text-orange">AI Tools</span> & Automation Modules
          </h1>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Explore the pre-engineered AI modules and workflow engines we integrate into client software stacks.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {tools.map((t, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                <div style={{ fontSize: '2rem', color: '#06b6d4', marginBottom: '12px' }}>
                  <i className={`fas ${t.icon}`}></i>
                </div>
                <span className="feature-tag" style={{ fontSize: '0.75rem', marginBottom: '8px', display: 'inline-block' }}>{t.category}</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{t.name}</h3>
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>{t.desc}</p>
                <Link to="/contact" className="cta-btn secondary" style={{ marginTop: '16px', display: 'inline-block', width: '100%', textAlign: 'center' }}>Deploy Module</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
