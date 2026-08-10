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
    title: 'Corporate Website – Premium Landing Page & Branding',
    subtitle: 'High-conversion corporate landing page for modern SaaS & Enterprise brands',
    category: 'Web Design & Branding',
    icon: '🏢',
    image: '/static/images/team_img1.jpg',
    description: 'A premium corporate website designed for high conversions and professional brand positioning. Features interactive user interfaces, clean typography, and optimized loading speed.',
    problem: 'The enterprise brand lacked a professional online presence that effectively communicated its SaaS value proposition and converted visitors.',
    solution: 'Designed and built an editorial, high-performance corporate landing page with interactive dashboard mockups and responsive design.',
    results: [
      { val: '50%', label: 'Increase in page engagement rate' },
      { val: '35%', label: 'Boost in lead conversion rates' },
      { val: '1.1s', label: 'Speed index load time optimization' }
    ],
    tech: ['React.js', 'CSS Grid', 'Figma Design', 'SEO Best Practices']
  },
  {
    id: 'ev-modal',
    title: 'Organic Food Brand – Custom E-Commerce Store',
    subtitle: 'Tasteful digital storefront for natural & organic consumer goods',
    category: 'E-Commerce & Branding',
    icon: '🍯',
    image: '/static/images/team_img2.jpg',
    description: 'An elegant and premium e-commerce design built for organic products and natural food brands. Focuses on visual storytelling, product authenticity, and frictionless checkout.',
    problem: 'A local organic brand needed a digital storefront that reflected its premium quality and supported direct-to-consumer sales.',
    solution: 'Created a beautiful organic-themed custom web store with immersive visuals, organic color palettes, and secure payment pathways.',
    results: [
      { val: '60%', label: 'Growth in direct online sales' },
      { val: '99.9%', label: 'Checkout success rate with Stripe' },
      { val: '2.5x', label: 'Higher customer return/retention rate' }
    ],
    tech: ['Shopify SDK', 'TailwindCSS', 'React', 'Stripe Payments']
  },
  {
    id: 'health-modal',
    title: 'Jainism Educational Platform – Heritage & Philosophy',
    subtitle: 'Interactive digital resource for history, ethics, and philosophy',
    category: 'Education & Culture',
    icon: '📿',
    image: '/static/images/team_img3.jpg',
    description: 'A clean, cultural, and educational website exploring the history, philosophy, and timeless wisdom of Jainism. Features rich interactive sections, scripture access, and mobile responsiveness.',
    problem: 'An educational foundation needed a modern digital resource to document ancient scriptures and philosophy for a global audience.',
    solution: 'Built a lightweight, highly readable educational platform with search systems, scripture archives, and minimal design aesthetics.',
    results: [
      { val: '10k+', label: 'Monthly active learners globally' },
      { val: '100%', label: 'Mobile accessibility accessibility score' },
      { val: '0', label: 'Downtime hosting architecture setup' }
    ],
    tech: ['HTML5', 'Sass', 'JavaScript', 'Scripture Search Index']
  },
  {
    id: 'chat-modal',
    title: 'Beauty & Wellness Portal – Luxury Brand Experience',
    subtitle: 'Immersive digital presence for premium cosmetics and self-care brands',
    category: 'Luxury Web Development',
    icon: '🧴',
    image: '/static/images/team_img4.jpg',
    description: 'A luxurious and immersive brand experience designed for beauty, skincare, and wellness products. Features clean minimal layouts, product highlight modals, and high-fidelity transitions.',
    problem: 'A boutique cosmetics brand needed a luxury online catalog that matched their physical store aesthetic and customer experience.',
    solution: 'Developed a premium web experience featuring high-end animations, interactive wellness consultations, and minimal typography.',
    results: [
      { val: '40%', label: 'Higher user session duration' },
      { val: '2.2x', label: 'Increase in product inquiry submissions' },
      { val: '98%', label: 'Mobile responsive satisfaction score' }
    ],
    tech: ['React.js', 'CSS Transitions', 'Figma UX', 'Responsive Layout']
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
