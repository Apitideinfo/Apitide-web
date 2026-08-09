import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { tag: 'n8n Blueprint', title: 'Building a 100% Automated Lead Qualification Engine with n8n & OpenAI', readTime: '5 min read' },
  { tag: 'RAG Architecture', title: 'How to Prevent Hallucinations in Enterprise AI Knowledge Assistants', readTime: '8 min read' },
  { tag: 'Voice AI Guide', title: 'Replacing Manual Phone Screening with Conversational Voice AI Agents', readTime: '6 min read' },
];

export default function Resources() {
  return (
    <main style={{ paddingTop: '90px' }}>
      <section className="section-dark-navy">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'center' }}>
            APITIDE <span className="gradient-text-blue">Resource Hub</span>
          </h1>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Explore technical guides, automation blueprints, and software engineering insights.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {articles.map((art, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                <span className="feature-tag">{art.tag}</span>
                <h3 style={{ fontSize: '1.2rem', margin: '12px 0' }}>{art.title}</h3>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{art.readTime}</span>
                <div style={{ marginTop: '16px' }}>
                  <Link to="/contact" className="service-btn">Read Article</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Banner Promo */}
          <div style={{ marginTop: '50px', textCenter: 'center' }}>
            <img src="/static/images/resource_promo_banner.png" alt="Resource Promo Banner" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
          </div>
        </div>
      </section>
    </main>
  );
}
