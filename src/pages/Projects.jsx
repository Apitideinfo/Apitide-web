import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  useEffect(() => {
    // Trigger dynamic interactions on mount
  }, []);

  return (
    <main style={{ paddingTop: '80px' }}>
{/*  PROJECTS HERO  */}
  <section className="projects-hero">
    <div className="container">
      <h1 style={{"color": "var(--secondary-color)"}}>Turning Ideas into <span style={{"color": "var(--orange)"}}>Impactful</span> Digital Solutions</h1>
      <h4 style={{"color": "var(--primary-color)"}}>Here's a glimpse of the projects we've crafted — from sleek websites to AI-powered assistants. Each project reflects creativity, problem-solving, and measurable results.</h4>
    </div>
  </section>

  {/*  PROJECTS GRID  */}
  <section className="projects-grid">
    <div className="container" style={{"display": "contents"}}>
    {/*  Project 1: RAG Model  */}
    <div className="project-card fade-in" onclick="openModal('rag-modal')">
      <div className="project-image" data-bg="/static/images/RAG Model.jpg" style={{"backgroundImage": "url(&quot", "backgroundSize": "cover"}}>
      </div>
      <div className="project-content">
        <span className="project-icon">🧠</span>
        <h3 className="project-title">RAG Model – Intelligent Healthcare Assistant</h3>
        <p className="project-preview">An AI-powered assistant for healthcare, built using Retrieval-Augmented Generation (RAG). It reduces hallucinations by grounding responses in embedded medical datasets, ensuring reliable and context-aware insights for sensitive domains.</p>
        <button className="view-case-study">View Case Study</button>
      </div>
    </div>

    {/*  Project 2: Agentic AI  */}
    <div className="project-card fade-in" onclick="openModal('agentic-modal')">
      <div className="project-image" data-bg="/static/images/AI.jpg" style={{"backgroundImage": "url(&quot", "backgroundSize": "cover"}}>
      </div>
      <div className="project-content">
        <span className="project-icon">🤖</span>
        <h3 className="project-title">Agentic AI – Smart Business Assistant</h3>
        <p className="project-preview">A smart autonomous assistant that manages emails and schedules meetings. It automates repetitive tasks, saves hours of work weekly, and ensures error-free scheduling with seamless business integration.</p>
        <button className="view-case-study">View Case Study</button>
      </div>
    </div>

    {/*  Project 3: ElectricFutureIndia  */}
    <div className="project-card fade-in" onclick="openModal('ev-modal')">
      <div className="project-image" data-bg="/static/images/Electric.jpg" style={{"backgroundImage": "url(&quot", "backgroundSize": "cover"}}>
      </div>
      <div className="project-content">
        <span className="project-icon">⚡</span>
        <h3 className="project-title">ElectricFutureIndia.com – Informative EV Website</h3>
        <p className="project-preview">A lightweight and responsive website created for an EV startup. Designed with clean UI, smooth animations, and fast loading speed, it boosts the client's credibility and provides a polished online presence.</p>
        <button className="view-case-study">View Case Study</button>
      </div>
    </div>

    {/*  Project 4: HealthDominus  */}
    <div className="project-card fade-in" onclick="openModal('health-modal')">
      <div className="project-image" data-bg="/static/images/Health-Dominus.jpg" style={{"backgroundImage": "url(&quot", "backgroundSize": "cover"}}>
      </div>
      <div className="project-content">
        <span className="project-icon">🏥</span>
        <h3 className="project-title">HealthDominus – AI Medicine Recommender</h3>
        <p className="project-preview">An AI-powered system that predicts diseases from symptoms and recommends basic medicines. Especially impactful in rural areas, it ensures safe, instant, and reliable healthcare guidance 24/7.</p>
        <button className="view-case-study">View Case Study</button>
      </div>
    </div>

    {/*  Project 5: Real-Time Chat App  */}
    <div className="project-card fade-in" onclick="openModal('chat-modal')">
      <div className="project-image" data-bg="/static/images/Real-time-chat.jpg" style={{"backgroundImage": "url(&quot", "backgroundSize": "cover"}}>
      </div>
      <div className="project-content">
        <span className="project-icon">💬</span>
        <h3 className="project-title">Real-Time Chat App</h3>
        <p className="project-preview">A modern chat application with one-to-one & group messaging, multimedia sharing, typing indicators, and optional encryption. Built for scalability and reliability with smooth real-time performance.</p>
        <button className="view-case-study">View Case Study</button>
      </div>
    </div>

    {/*  Project 6: E-Commerce Website  */}
    <div className="project-card fade-in" onclick="openModal('ecommerce-modal')">
      <div className="project-image" data-bg="/static/images/E-Commerce.jpg" style={{"backgroundImage": "url(&quot", "backgroundSize": "cover"}}>
      </div>
      <div className="project-content">
        <span className="project-icon">🛒</span>
        <h3 className="project-title">E-Commerce Website</h3>
        <p className="project-preview">A complete e-commerce solution with user authentication, cart, wishlist, secure checkout, and admin dashboard. Designed to improve UX, reduce cart abandonment, and streamline business operations.</p>
        <button className="view-case-study">View Case Study</button>
      </div>
    </div>

    {/*  Project 7: AI Tutor  */}
    <div className="project-card fade-in" onclick="openModal('ai-tutor-modal')">
      <div className="project-image" data-bg="/static/images/Genetic-AI.jpg" style={{"backgroundImage": "url(&quot", "backgroundSize": "cover"}}>
      </div>
      <div className="project-content">
        <span className="project-icon">📚</span>
        <h3 className="project-title">AI Tutor – Personalized Learning Assistant</h3>
        <p className="project-preview">An AI-powered tutor with personalized guidance, adaptive quizzes, and real-time coding support. Enhances learning engagement and knowledge retention.</p>
        <button className="view-case-study">View Case Study</button>
      </div>
    </div>
    </div>
  </section>

  {/*  MODALS  */}
  
  {/*  RAG Model Modal  */}
  <div id="rag-modal" className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="modal-close" onclick="closeModal('rag-modal')">&times;</span>
        <h2 className="modal-title">🧠 RAG Model – Intelligent Healthcare Assistant</h2>
        <p className="modal-subtitle">AI-powered healthcare assistant with knowledge grounding</p>
      </div>
      <div className="modal-body">
        <div className="case-study-section">
          <h3><i className="fas fa-exclamation-triangle"></i> Problem</h3>
          <div className="case-study-content">
            Patients and professionals lacked fast, reliable access to healthcare knowledge. Traditional LLMs risk hallucinations and lack context, making them unsuitable for sensitive healthcare domains.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-lightbulb"></i> Solution</h3>
          <div className="case-study-content">
            Built an AI-powered assistant using Retrieval-Augmented Generation (RAG) that grounds responses in embedded healthcare datasets. The assistant retrieves relevant information before generating answers, ensuring accuracy and reliability.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-chart-line"></i> Results</h3>
          <div className="results-grid">
            <div className="result-item">
              <span className="result-number">40%</span>
              <div className="result-label">Improved accuracy of medical insights compared to baseline LLMs</div>
            </div>
            <div className="result-item">
              <span className="result-number">60%</span>
              <div className="result-label">Reduced hallucinations through knowledge-grounding</div>
            </div>
            <div className="result-item">
              <span className="result-number">&lt;2s</span>
              <div className="result-label">Average query response time</div>
            </div>
            <div className="result-item">
              <span className="result-number">∞</span>
              <div className="result-label">Scalable to integrate multiple medical datasets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  Agentic AI Modal  */}
  <div id="agentic-modal" className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="modal-close" onclick="closeModal('agentic-modal')">&times;</span>
        <h2 className="modal-title">🤖 Agentic AI – Smart Business Assistant</h2>
        <p className="modal-subtitle">Autonomous email and meeting management system</p>
      </div>
      <div className="modal-body">
        <div className="case-study-section">
          <h3><i className="fas fa-exclamation-triangle"></i> Problem</h3>
          <div className="case-study-content">
            Professionals wasted hours manually managing emails & scheduling meetings.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-lightbulb"></i> Solution</h3>
          <div className="case-study-content">
            Built an autonomous AI agent that reads emails, checks calendar availability, schedules meetings, and sends confirmations.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-chart-line"></i> Results</h3>
          <div className="results-grid">
            <div className="result-item">
              <span className="result-number">100%</span>
              <div className="result-label">Automated scheduling workflow</div>
            </div>
            <div className="result-item">
              <span className="result-number">5+</span>
              <div className="result-label">Hours saved per week per professional</div>
            </div>
            <div className="result-item">
              <span className="result-number">80%</span>
              <div className="result-label">Reduced scheduling errors</div>
            </div>
            <div className="result-item">
              <span className="result-number">✓</span>
              <div className="result-label">Scalable for real-world business use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  ElectricFutureIndia Modal  */}
  <div id="ev-modal" className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="modal-close" onclick="closeModal('ev-modal')">&times;</span>
        <h2 className="modal-title">⚡ ElectricFutureIndia.com – Informative EV Website</h2>
        <p className="modal-subtitle">Lightweight, responsive website for EV startup</p>
      </div>
      <div className="modal-body">
        <div className="case-study-section">
          <h3><i className="fas fa-exclamation-triangle"></i> Problem</h3>
          <div className="case-study-content">
            Client needed a lightweight, professional EV website with fast performance.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-lightbulb"></i> Solution</h3>
          <div className="case-study-content">
            Built a static responsive site with clean UI, smooth animations, and lightweight interactivity.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-chart-line"></i> Results</h3>
          <div className="results-grid">
            <div className="result-item">
              <span className="result-number">1.2s</span>
              <div className="result-label">Load time across devices</div>
            </div>
            <div className="result-item">
              <span className="result-number">↑</span>
              <div className="result-label">Increased client credibility with polished presence</div>
            </div>
            <div className="result-item">
              <span className="result-number">60%</span>
              <div className="result-label">Reduced maintenance overhead</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  HealthDominus Modal  */}
  <div id="health-modal" className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="modal-close" onclick="closeModal('health-modal')">&times;</span>
        <h2 className="modal-title">🏥 HealthDominus – AI Medicine Recommender</h2>
        <p className="modal-subtitle">AI-powered disease prediction and medicine recommendation</p>
      </div>
      <div className="modal-body">
        <div className="case-study-section">
          <h3><i className="fas fa-exclamation-triangle"></i> Problem</h3>
          <div className="case-study-content">
            Patients lacked instant, reliable medical guidance—especially in rural areas.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-lightbulb"></i> Solution</h3>
          <div className="case-study-content">
            AI-powered system predicting diseases from symptoms & recommending basic medicines.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-chart-line"></i> Results</h3>
          <div className="results-grid">
            <div className="result-item">
              <span className="result-number">85%</span>
              <div className="result-label">Accuracy in medical insights</div>
            </div>
            <div className="result-item">
              <span className="result-number">50%</span>
              <div className="result-label">Reduced reliance on unsafe internet searches</div>
            </div>
            <div className="result-item">
              <span className="result-number">24/7</span>
              <div className="result-label">Access for rural/remote users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  Chat App Modal  */}
  <div id="chat-modal" className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="modal-close" onclick="closeModal('chat-modal')">&times;</span>
        <h2 className="modal-title">💬 Real-Time Chat App</h2>
        <p className="modal-subtitle">Modern chat application with multimedia support</p>
      </div>
      <div className="modal-body">
        <div className="case-study-section">
          <h3><i className="fas fa-exclamation-triangle"></i> Problem</h3>
          <div className="case-study-content">
            Existing chat tools lacked scalability, multimedia, and security.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-lightbulb"></i> Solution</h3>
          <div className="case-study-content">
            Developed a chat app with 1-to-1 & group chat, multimedia sharing, indicators, and optional encryption.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-chart-line"></i> Results</h3>
          <div className="results-grid">
            <div className="result-item">
              <span className="result-number">99%</span>
              <div className="result-label">Uptime for real-time communication</div>
            </div>
            <div className="result-item">
              <span className="result-number">40%</span>
              <div className="result-label">Increased user engagement with group/multimedia features</div>
            </div>
            <div className="result-item">
              <span className="result-number">5,000+</span>
              <div className="result-label">Concurrent users supported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  E-Commerce Modal  */}
  <div id="ecommerce-modal" className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="modal-close" onclick="closeModal('ecommerce-modal')">&times;</span>
        <h2 className="modal-title">🛒 E-Commerce Website</h2>
        <p className="modal-subtitle">Complete e-commerce solution with admin dashboard</p>
      </div>
      <div className="modal-body">
        <div className="case-study-section">
          <h3><i className="fas fa-exclamation-triangle"></i> Problem</h3>
          <div className="case-study-content">
            Businesses faced poor UI, high cart abandonment & weak admin control.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-lightbulb"></i> Solution</h3>
          <div className="case-study-content">
            Built a full-featured e-commerce site with authentication, cart, wishlist, secure checkout, and admin panel.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-chart-line"></i> Results</h3>
          <div className="results-grid">
            <div className="result-item">
              <span className="result-number">30%</span>
              <div className="result-label">Reduced cart abandonment</div>
            </div>
            <div className="result-item">
              <span className="result-number">↑</span>
              <div className="result-label">Boosted user engagement with wishlist & order tracking</div>
            </div>
            <div className="result-item">
              <span className="result-number">✓</span>
              <div className="result-label">Improved business efficiency with centralized admin panel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  {/*  AI Tutor Modal  */}
  <div id="ai-tutor-modal" className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="modal-close" onclick="closeModal('ai-tutor-modal')">&times;</span>
        <h2 className="modal-title">📚 AI Tutor – Personalized Learning Assistant</h2>
        <p className="modal-subtitle">AI-powered tutor with personalized guidance and adaptive quizzes</p>
      </div>
      <div className="modal-body">
        <div className="case-study-section">
          <h3><i className="fas fa-exclamation-triangle"></i> Problem</h3>
          <div className="case-study-content">
            Students struggle with self-learning due to lack of personalized guidance, adaptive quizzes, and real-time coding support. Traditional platforms remain static and fail to adapt to individual progress.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-lightbulb"></i> Solution</h3>
          <div className="case-study-content">
            Built an AI-powered tutor leveraging LLMs, real-time Python execution (Docker), and interactive visualizations. The tutor provides context-aware explanations, adaptive quizzes, instant evaluation, AI-guided code walkthroughs, and progress tracking.
          </div>
        </div>
        
        <div className="case-study-section">
          <h3><i className="fas fa-chart-line"></i> Results</h3>
          <div className="results-grid">
            <div className="result-item">
              <span className="result-number">45%</span>
              <div className="result-label">Improved knowledge retention through adaptive difficulty</div>
            </div>
            <div className="result-item">
              <span className="result-number">&lt;3s</span>
              <div className="result-label">Real-time code execution & explanations</div>
            </div>
            <div className="result-item">
              <span className="result-number">✓</span>
              <div className="result-label">Personalized learning paths with progress tracking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  FOOTER  */}
    </main>
  );
}
