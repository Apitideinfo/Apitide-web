import React from 'react';
import { Link } from 'react-router-dom';

const team = [
  { name: 'Harshit Ramawat', role: 'Co-Founder & AI Systems Architect', desc: 'Expert in n8n workflow engineering, LLM fine-tuning, and enterprise automation infrastructure.' },
  { name: 'Karan Bithoo', role: 'Co-Founder & Full-Stack Engineer', desc: 'Specialist in React, Node.js microservices, cloud deployments, and scalable Web systems.' },
  { name: 'Rahul Khatri', role: 'Co-Founder & Growth Strategist', desc: 'Focuses on operational ROI analysis, client success, and enterprise software modernizations.' },
];

export default function About() {
  return (
    <main style={{ paddingTop: '90px' }}>
      <section className="section-dark-navy">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'center' }}>
            About <span className="gradient-text-orange">APITIDE</span>
          </h1>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            APITIDE is a premium AI automation agency & software development firm helping global businesses automate operations, scale faster, and eliminate manual bottlenecks.
          </p>

          {/* Vision & Mission */}
          <div className="about-vision-mission" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', margin: '40px 0' }}>
            <div className="glass-card" style={{ padding: '30px' }}>
              <div style={{ fontSize: '2rem', color: '#06b6d4', marginBottom: '12px' }}><i className="fas fa-eye"></i></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Our Vision</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>To empower 1,000+ growing companies with self-operating AI automation systems that handle routine workflows 24/7 without manual friction.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px' }}>
              <div style={{ fontSize: '2rem', color: '#f97316', marginBottom: '12px' }}><i className="fas fa-bullseye"></i></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Our Mission</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>We build battle-tested, secure AI applications, custom software, and n8n pipelines that deliver immediate 10x ROI and save thousands of working hours.</p>
            </div>
          </div>

          {/* Founders */}
          <h2 className="section-title" style={{ textAlign: 'center', marginTop: '60px' }}>
            Leadership <span className="gradient-text-blue">Team</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '30px' }}>
            {team.map((m, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', textCenter: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: '#38bdf8', marginBottom: '10px' }}><i className="fas fa-user-tie"></i></div>
                <h3 style={{ fontSize: '1.3rem' }}>{m.name}</h3>
                <span className="feature-tag" style={{ margin: '8px 0', display: 'inline-block' }}>{m.role}</span>
                <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
