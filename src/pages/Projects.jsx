import React, { useState } from 'react';

const projects = [
  { id: 'rag', icon: '🧠', title: 'RAG Model – Intelligent Healthcare Assistant', img: '/static/images/RAG Model.jpg', desc: 'An AI-powered assistant for healthcare, built using Retrieval-Augmented Generation (RAG). It reduces hallucinations by grounding responses in embedded medical datasets.', full: 'Developed for clinical teams to instantly search 50,000+ medical journals and patient guidelines with context-aware references.' },
  { id: 'agentic', icon: '🤖', title: 'Agentic AI – Smart Business Assistant', img: '/static/images/AI.jpg', desc: 'A smart autonomous assistant that manages emails and schedules meetings. It automates repetitive tasks and saves hours of work weekly.', full: 'Integrated with Gmail API and Google Calendar API to autonomously parse inbound requests, draft responses, and schedule slots.' },
  { id: 'ev', icon: '⚡', title: 'ElectricFutureIndia.com – EV Platform', img: '/static/images/Electric.jpg', desc: 'A lightweight and responsive website created for an EV startup. Designed with clean UI, smooth animations, and fast loading speed.', full: 'Built with React and Vite, achieving a 99/100 Google PageSpeed score and driving 40% higher visitor retention.' },
  { id: 'health', icon: '🏥', title: 'HealthDominus – AI Medicine Recommender', img: '/static/images/Health-Dominus.jpg', desc: 'An AI-powered system that predicts diseases from symptoms and recommends basic medicines with safe healthcare guidance.', full: 'Provides 24/7 symptom analysis and basic medical triage for rural clinics with offline-first caching capabilities.' },
  { id: 'chat', icon: '💬', title: 'Real-Time Chat App', img: '/static/images/Real-time-chat.jpg', desc: 'A modern chat application with 1-on-1 & group messaging, multimedia sharing, typing indicators, and end-to-end encryption.', full: 'Engineered using Node.js WebSockets, React, and MongoDB for low-latency (<50ms) messaging under high concurrency.' },
  { id: 'ecommerce', icon: '🛒', title: 'E-Commerce Platform', img: '/static/images/E-Commerce.jpg', desc: 'Complete e-commerce platform with authentication, cart, wishlist, Stripe checkout, and real-time inventory management.', full: 'Increased checkout conversion by 28% through one-click Stripe payments and automated inventory webhook updates.' },
  { id: 'tutor', icon: '📚', title: 'AI Tutor – Personalized Learning', img: '/static/images/Genetic-AI.jpg', desc: 'An AI-powered tutor with personalized guidance, adaptive quizzes, and real-time coding feedback.', full: 'Utilizes OpenAI API to generate customized coding exercises and step-by-step debug hints for computer science students.' },
];

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <main style={{ paddingTop: '90px' }}>
      <section className="section-dark-navy">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'center' }}>
            Featured <span className="gradient-text-cyan">Case Studies</span> & Portfolio
          </h1>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Explore real-world software applications, AI models, and automation workflows engineered by APITIDE.
          </p>

          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {projects.map((p) => (
              <div key={p.id} className="project-card glass-card" onClick={() => setActiveModal(p)}>
                <div className="project-image" style={{ backgroundImage: `url("${p.img}")`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', borderRadius: '12px 12px 0 0' }}></div>
                <div className="project-content" style={{ padding: '20px' }}>
                  <span className="project-icon" style={{ fontSize: '1.5rem', marginBottom: '8px', display: 'block' }}>{p.icon}</span>
                  <h3 className="project-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{p.title}</h3>
                  <p className="project-preview" style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>{p.desc}</p>
                  <button className="view-case-study" type="button" style={{ marginTop: '15px' }}>View Case Study</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {activeModal && (
        <div className="modal active" style={{ display: 'flex', position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 10000, alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content glass-card" style={{ maxWidth: '650px', width: '90%', padding: '30px', position: 'relative' }}>
            <button className="close-modal" onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
            <span style={{ fontSize: '2rem' }}>{activeModal.icon}</span>
            <h3 style={{ fontSize: '1.4rem', margin: '10px 0' }}>{activeModal.title}</h3>
            <p style={{ color: '#94a3b8', marginBottom: '15px' }}>{activeModal.desc}</p>
            <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '15px 0' }} />
            <h4 style={{ color: '#06b6d4', marginBottom: '8px' }}>Technical Highlights & Outcomes:</h4>
            <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>{activeModal.full}</p>
          </div>
        </div>
      )}
    </main>
  );
}
