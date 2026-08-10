import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PROJECTS_DATA = [
  {
    id: 'rag-modal',
    title: 'RAG Model – Intelligent Healthcare Assistant',
    subtitle: 'AI-powered healthcare assistant with knowledge grounding',
    category: 'Healthcare & AI',
    icon: '🧠',
    image: '/static/images/RAG Model.jpg',
    description: 'An AI-powered assistant for healthcare, built using Retrieval-Augmented Generation (RAG). It reduces hallucinations by grounding responses in embedded medical datasets, ensuring reliable and context-aware insights for sensitive domains.',
    problem: 'Patients and professionals lacked fast, reliable access to healthcare knowledge. Traditional LLMs risk hallucinations and lack context, making them unsuitable for sensitive healthcare domains.',
    solution: 'Built an AI-powered assistant using Retrieval-Augmented Generation (RAG) that grounds responses in embedded healthcare datasets. The assistant retrieves relevant information before generating answers, ensuring accuracy and reliability.',
    results: [
      { val: '40%', label: 'Improved accuracy of medical insights compared to baseline LLMs' },
      { val: '60%', label: 'Reduced hallucinations through knowledge-grounding' },
      { val: '<2s', label: 'Average query response time' },
      { val: '∞', label: 'Scalable to integrate multiple medical datasets' }
    ],
    tech: ['GPT-4o', 'RAG', 'Vector Database', 'Python']
  },
  {
    id: 'agentic-modal',
    title: 'Agentic AI – Smart Business Assistant',
    subtitle: 'Autonomous email and meeting management system',
    category: 'AI Agents & Automation',
    icon: '🤖',
    image: '/static/images/AI.jpg',
    description: 'A smart autonomous assistant that manages emails and schedules meetings. It automates repetitive tasks, saves hours of work weekly, and ensures error-free scheduling with seamless business integration.',
    problem: 'Professionals wasted hours manually managing emails & scheduling meetings.',
    solution: 'Built an autonomous AI agent that reads emails, checks calendar availability, schedules meetings, and sends confirmations.',
    results: [
      { val: '100%', label: 'Automated scheduling workflow' },
      { val: '5+', label: 'Hours saved per week per professional' },
      { val: '80%', label: 'Reduced scheduling errors' },
      { val: '✓', label: 'Scalable for real-world business use' }
    ],
    tech: ['LangChain', 'OpenAI API', 'Google Workspace API', 'n8n']
  },
  {
    id: 'ev-modal',
    title: 'ElectricFutureIndia.com – Informative EV Website',
    subtitle: 'Lightweight, responsive website for EV startup',
    category: 'Web Development',
    icon: '⚡',
    image: '/static/images/Electric.jpg',
    description: 'A lightweight and responsive website created for an EV startup. Designed with clean UI, smooth animations, and fast loading speed, it boosts the client\'s credibility and provides a polished online presence.',
    problem: 'Client needed a lightweight, professional EV website with fast performance.',
    solution: 'Built a static responsive site with clean UI, smooth animations, and lightweight interactivity.',
    results: [
      { val: '1.2s', label: 'Load time across devices' },
      { val: '↑', label: 'Increased client credibility with polished presence' },
      { val: '60%', label: 'Reduced maintenance overhead' }
    ],
    tech: ['HTML5', 'Vanilla CSS', 'JavaScript', 'SEO Optimized']
  },
  {
    id: 'health-modal',
    title: 'HealthDominus – AI Medicine Recommender',
    subtitle: 'AI-powered disease prediction and medicine recommendation',
    category: 'AI & Healthcare',
    icon: '🏥',
    image: '/static/images/Health-Dominus.jpg',
    description: 'An AI-powered system that predicts diseases from symptoms and recommends basic medicines. Especially impactful in rural areas, it ensures safe, instant, and reliable healthcare guidance 24/7.',
    problem: 'Patients lacked instant, reliable medical guidance—especially in rural areas.',
    solution: 'AI-powered system predicting diseases from symptoms & recommending basic medicines.',
    results: [
      { val: '85%', label: 'Accuracy in medical insights' },
      { val: '50%', label: 'Reduced reliance on unsafe internet searches' },
      { val: '24/7', label: 'Access for rural/remote users' }
    ],
    tech: ['Python ML', 'Flask API', 'React', 'Tailored Medical Dataset']
  },
  {
    id: 'chat-modal',
    title: 'Real-Time Chat App',
    subtitle: 'Modern chat application with multimedia support',
    category: 'Web Application',
    icon: '💬',
    image: '/static/images/Real-time-chat.jpg',
    description: 'A modern chat application with one-to-one & group messaging, multimedia sharing, typing indicators, and optional encryption. Built for scalability and reliability with smooth real-time performance.',
    problem: 'Existing chat tools lacked scalability, multimedia, and security.',
    solution: 'Developed a chat app with 1-to-1 & group chat, multimedia sharing, indicators, and optional encryption.',
    results: [
      { val: '99%', label: 'Uptime for real-time communication' },
      { val: '40%', label: 'Increased user engagement with group/multimedia features' },
      { val: '5,000+', label: 'Concurrent users supported' }
    ],
    tech: ['Socket.io', 'Node.js', 'Express', 'React', 'MongoDB']
  },
  {
    id: 'ecommerce-modal',
    title: 'E-Commerce Website',
    subtitle: 'Complete e-commerce solution with admin dashboard',
    category: 'E-Commerce',
    icon: '🛒',
    image: '/static/images/E-Commerce.jpg',
    description: 'A complete e-commerce solution with user authentication, cart, wishlist, secure checkout, and admin dashboard. Designed to improve UX, reduce cart abandonment, and streamline business operations.',
    problem: 'Businesses faced poor UI, high cart abandonment & weak admin control.',
    solution: 'Built a full-featured e-commerce site with authentication, cart, wishlist, secure checkout, and admin panel.',
    results: [
      { val: '30%', label: 'Reduced cart abandonment' },
      { val: '↑', label: 'Boosted user engagement with wishlist & order tracking' },
      { val: '✓', label: 'Improved business efficiency with centralized admin panel' }
    ],
    tech: ['React.js', 'Redux', 'Node.js', 'Stripe Integration', 'MongoDB']
  },
  {
    id: 'ai-tutor-modal',
    title: 'AI Tutor – Personalized Learning Assistant',
    subtitle: 'AI-powered tutor with personalized guidance and adaptive quizzes',
    category: 'EdTech & AI',
    icon: '📚',
    image: '/static/images/Genetic-AI.jpg',
    description: 'An AI-powered tutor with personalized guidance, adaptive quizzes, and real-time coding support. Enhances learning engagement and knowledge retention.',
    problem: 'Students struggle with self-learning due to lack of personalized guidance, adaptive quizzes, and real-time coding support. Traditional platforms remain static and fail to adapt to individual progress.',
    solution: 'Built an AI-powered tutor leveraging LLMs, real-time Python execution (Docker), and interactive visualizations. The tutor provides context-aware explanations, adaptive quizzes, instant evaluation, AI-guided code walkthroughs, and progress tracking.',
    results: [
      { val: '45%', label: 'Improved knowledge retention through adaptive difficulty' },
      { val: '<3s', label: 'Real-time code execution & explanations' },
      { val: '✓', label: 'Personalized learning paths with progress tracking' }
    ],
    tech: ['GPT-4o', 'Docker APIs', 'React', 'Node.js']
  }
];

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);

  // We set the first project as the featured project
  const featuredProject = PROJECTS_DATA[0];
  const gridProjects = PROJECTS_DATA.slice(1);

  return (
    <div className="projects-page">
      <main>
        
        {/* ──────────────────────────────────────────────────────────────────────────
           1. HERO SECTION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="proj-hero-section">
          <div className="proj-container">
            <div className="proj-hero-content">
              <span className="proj-eyebrow text-orange">
                <i className="fas fa-folder-open"></i> PORTFOLIO SHOWCASE
              </span>
              <h1 className="proj-hero-title">
                Turning Ideas into <span className="proj-gradient-orange">Impactful</span> Digital Solutions
              </h1>
              <p className="proj-hero-subtitle">
                Here's a glimpse of the projects we've crafted — from sleek web applications to intelligent, context-aware AI systems.
              </p>
              <div className="proj-count-badge">
                <i className="fas fa-check-circle"></i> 7 Production-Grade Projects Delivered
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           2. FEATURED PROJECT
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="proj-section" id="featured-project">
          <div className="proj-container">
            <div className="proj-section-header">
              <span className="proj-section-tag text-cyan">★ FEATURED CASE STUDY</span>
            </div>

            <div className="proj-featured-card" onClick={() => setActiveModal(featuredProject)}>
              <div className="featured-image-wrap">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="featured-image"
                />
                <div className="featured-image-overlay"></div>
              </div>

              <div className="featured-content">
                <div className="featured-header-row">
                  <span className="featured-category">{featuredProject.category}</span>
                  <span className="featured-icon">{featuredProject.icon}</span>
                </div>
                <h3 className="featured-title">{featuredProject.title}</h3>
                <p className="featured-desc">{featuredProject.description}</p>
                
                <div className="featured-tech-wrap">
                  {featuredProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">{t}</span>
                  ))}
                </div>

                <button className="proj-action-btn primary">
                  View Case Study <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           3. PROJECTS GRID
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="proj-section proj-bg-darker" id="projects-grid">
          <div className="proj-container">
            <div className="proj-section-header text-center">
              <h2 className="proj-section-title">
                More <span className="proj-gradient-blue">Production Systems</span>
              </h2>
              <p className="proj-section-subtitle">
                Explore our diverse portfolio of custom-engineered web applications and automation engines.
              </p>
            </div>

            <div className="proj-grid">
              {gridProjects.map((project) => (
                <div
                  key={project.id}
                  className="proj-card"
                  onClick={() => setActiveModal(project)}
                >
                  <div className="card-image-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-image"
                    />
                    <span className="card-icon-badge">{project.icon}</span>
                  </div>

                  <div className="card-body">
                    <span className="card-category">{project.category}</span>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc">{project.description}</p>

                    <div className="card-tech-wrap">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="card-footer">
                    <button className="proj-action-btn">
                      View Case Study <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           4. CONVERSION CTA
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="proj-section proj-cta-section">
          <div className="proj-container">
            <div className="proj-card-cta">
              <span className="proj-eyebrow text-orange mb-3">
                <i className="fas fa-hands-helping"></i> PARTNER WITH US
              </span>
              <h2>
                Have a Project in Mind? <span className="proj-gradient-orange">Let's Build Something Great.</span>
              </h2>
              <p>
                We collaborate with modern companies to automate repetitive operations, ground LLM systems, and build robust digital tools.
              </p>
              <div className="proj-cta-actions">
                <Link to="/contact" className="proj-btn proj-btn-primary">
                  <i className="fas fa-calendar-check"></i> Start Your Free Consultation
                </Link>
                <Link to="/services" className="proj-btn proj-btn-secondary">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ──────────────────────────────────────────────────────────────────────────
         CASE STUDY DETAILS MODAL
         ────────────────────────────────────────────────────────────────────────── */}
      {activeModal && (
        <div className="proj-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="proj-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="proj-modal-close" onClick={() => setActiveModal(null)}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <span className="modal-icon">{activeModal.icon}</span>
              <span className="modal-category">{activeModal.category}</span>
              <h2 className="modal-title">{activeModal.title}</h2>
              <p className="modal-subtitle">{activeModal.subtitle}</p>
            </div>

            <div className="modal-body">
              {/* Problem Section */}
              <div className="case-section">
                <h3><i className="fas fa-exclamation-triangle text-orange"></i> Problem</h3>
                <p>{activeModal.problem}</p>
              </div>

              {/* Solution Section */}
              <div className="case-section">
                <h3><i className="fas fa-lightbulb text-cyan"></i> Solution</h3>
                <p>{activeModal.solution}</p>
              </div>

              {/* Results Section */}
              <div className="case-section">
                <h3><i className="fas fa-chart-line text-green"></i> Results</h3>
                <div className="modal-results-grid">
                  {activeModal.results.map((res, idx) => (
                    <div key={idx} className="result-item">
                      <span className="result-val">{res.val}</span>
                      <span className="result-lbl">{res.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack List */}
              <div className="case-section">
                <h3><i className="fas fa-code text-blue"></i> Technologies Used</h3>
                <div className="modal-tech-list">
                  {activeModal.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge large">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
