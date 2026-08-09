import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    // Trigger dynamic interactions on mount
  }, []);

  return (
    <main style={{ paddingTop: '80px' }}>
{/*  ABOUT HERO  */}
  <section className="hero about-hero" id="about-hero">
    <div className="hero-glow-blob"></div>
    <div className="container">
      <div className="hero-content">
        <h1>Engineered by <span className="gradient-text-orange">Friends</span>, Driven by <span className="gradient-text-blue">Vision</span></h1>
        <p>At APITIDE, we simplify technology with intelligent AI agents, n8n automations, and custom web products that help businesses scale faster.</p>
        <div className="hero-buttons">
          <Link  to="/contact" className="cta-btn primary">Start Your Project</Link>
          <Link  to="/services" className="cta-btn secondary">Explore Services</Link>
        </div>
      </div>
    </div>
  </section>

  {/*  ABOUT EDITORIAL STORY  */}
  <section className="section-light-slate">
    <div className="container">
      <div className="narrative-container scroll-reveal">
        <h2 className="narrative-title">Our Story</h2>
        <p className="narrative-desc">
          APITIDE began as a simple idea among college friends. We were united by a shared passion to create and a belief that our combined technical expertise could help businesses succeed. Today, that original partnership drives everything we do. We aren't just an agency; we're your dedicated team, ready to bring your vision to life.
        </p>
      </div>
    </div>
  </section>

  {/*  VISION & MISSION  */}
  <section className="section-dark-navy">
    <div className="container">
      <div className="about-vision-mission">
        {/*  Vision  */}
        <div className="vision-mission-card glass-card scroll-reveal">
          <h3><span className="gradient-text-orange">Our Vision</span></h3>
          <ul>
            <li><i className="fas fa-check-circle orange"></i> To become a global leader in intelligent digital solutions, proving that great ideas can change the future of businesses.</li>
            <li><i className="fas fa-check-circle orange"></i> To build a tech collective where friendship, teamwork, and raw development skill merge to create elite software products.</li>
            <li><i className="fas fa-check-circle orange"></i> To lead the transition into autonomous AI workflows, enabling businesses of all sizes to operate with automation.</li>
          </ul>
        </div>
        
        {/*  Mission  */}
        <div className="vision-mission-card glass-card scroll-reveal">
          <h3><span className="gradient-text-blue">Our Mission</span></h3>
          <ul>
            <li><i className="fas fa-check-circle blue"></i> To craft tailor-made web systems and AI automations that deliver immediate and measurable business growth.</li>
            <li><i className="fas fa-check-circle blue"></i> To empower organizations with intelligent tools, eliminating boring manual tasks so teams can focus on creative strategies.</li>
            <li><i className="fas fa-check-circle blue"></i> To foster long-term technical partnerships built on deep trust, code quality, and execution speed.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*  CORE VALUES (PHASE 19)  */}
  <section className="section-light-slate" id="core-values">
    <div className="container">
      <h2 className="section-title">Our Core <span className="gradient-text-blue">Values</span></h2>
      <p className="section-subtitle">The fundamental architectural principles that guide our development team every single day.</p>
      
      <div className="values-grid">
        <div className="service-card glass-card value-card scroll-reveal">
          <div className="value-icon"><i className="fas fa-microchip"></i></div>
          <h3>Precision Engineering</h3>
          <p>Every line of full-stack code, vector query, and webhook sequence is audited to secure sub-millisecond execution speeds.</p>
        </div>
        <div className="service-card glass-card value-card scroll-reveal">
          <div className="value-icon"><i className="fas fa-handshake"></i></div>
          <h3>College-Born Trust</h3>
          <p>We are built on transparent collaboration, honest project scoping, and absolute product ownership.</p>
        </div>
        <div className="service-card glass-card value-card scroll-reveal">
          <div className="value-icon"><i className="fas fa-tachometer-alt"></i></div>
          <h3>Speed as a Feature</h3>
          <p>We build lightweight MVPs and iterate rapidly, helping you automate workflows in weeks instead of months.</p>
        </div>
        <div className="service-card glass-card value-card scroll-reveal">
          <div className="value-icon"><i className="fas fa-brain"></i></div>
          <h3>AI-First Intuition</h3>
          <p>We engineer systems that think as well as execute, integrating grounded RAG contexts directly into B2B software.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  FOUNDER & TEAM (PHASE 19)  */}
  <section className="section-dark-navy" id="founder-team">
    <div className="container">
      <h2 className="section-title">Our Founding <span className="gradient-text-cyan">Team</span></h2>
      <p className="section-subtitle">Meet the college friends and developers who engineered the Apitide automation collective.</p>
      
      <div className="founder-grid">
        {/*  Founder 1: Harshit Ramawat  */}
        <div className="service-card glass-card founder-card scroll-reveal">
          <div className="founder-avatar-placeholder">HR</div>
          <h3>Harshit Ramawat</h3>
          <span className="process-number">Founder & Principal Automation Engineer</span>
          <p>Specializes in n8n automation maps, API integrations, and secure HIPAA cloud server deployments.</p>
          <div className="founder-socials">
            <Link  to="#" className="founder-social-link"><i className="fab fa-linkedin"></i></Link>
            <Link  to="#" className="founder-social-link"><i className="fab fa-github"></i></Link>
          </div>
        </div>

        {/*  Founder 2: Karan Bithoo  */}
        <div className="service-card glass-card founder-card scroll-reveal">
          <div className="founder-avatar-placeholder" style={{"borderColor": "var(--accent-orange)", "color": "var(--accent-orange)", "background": "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(2,6,18,0.8) 100%)"}}>KB</div>
          <h3>Karan Bithoo</h3>
          <span className="process-number" style={{"color": "var(--accent-orange)"}}>Co-Founder & Lead Software Engineer</span>
          <p>Specializes in secure Django/FastAPI configurations, database indexation, and full-stack software schemas.</p>
          <div className="founder-socials">
            <Link  to="#" className="founder-social-link"><i className="fab fa-linkedin"></i></Link>
            <Link  to="#" className="founder-social-link"><i className="fab fa-github"></i></Link>
          </div>
        </div>

        {/*  Founder 3: Rahul Khatri  */}
        <div className="service-card glass-card founder-card scroll-reveal">
          <div className="founder-avatar-placeholder" style={{"borderColor": "var(--accent-blue)", "color": "var(--accent-blue)", "background": "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(2,6,18,0.8) 100%)"}}>RK</div>
          <h3>Rahul Khatri</h3>
          <span className="process-number" style={{"color": "var(--accent-blue)"}}>Co-Founder & UI/UX Director</span>
          <p>Specializes in luxury branding visual tokens, advanced CSS micro-animations, and client conversion assets.</p>
          <div className="founder-socials">
            <Link  to="#" className="founder-social-link"><i className="fab fa-linkedin"></i></Link>
            <Link  to="#" className="founder-social-link"><i className="fab fa-github"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  COMPANY TIMELINE (PHASE 19)  */}
  <section className="section-light-slate" id="company-timeline">
    <div className="container">
      <h2 className="section-title">Our Operational <span className="gradient-text-orange">Timeline</span></h2>
      <p className="section-subtitle">The milestones tracking Apitide’s evolution from college projects to global operations.</p>
      
      <div className="about-timeline">
        {/*  Item 1  */}
        <div className="timeline-item scroll-reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-year">2024</span>
            <h3>The Genesis</h3>
            <p>College friends team up to build lightweight Python scripting engines and secure webhook relays, winning local university hackathons.</p>
          </div>
        </div>
        {/*  Item 2  */}
        <div className="timeline-item scroll-reveal">
          <div className="timeline-dot" style={{"borderColor": "var(--accent-cyan)", "boxShadow": "0 0 10px rgba(6, 182, 212, 0.4)"}}></div>
          <div className="timeline-content">
            <span className="timeline-year" style={{"color": "var(--accent-cyan)"}}>2025</span>
            <h3>Scale Automations</h3>
            <p>Launched the first enterprise-scale n8n workflows and custom CRM bridges for regional retail and logistics firms, saving clients thousands of manual hours.</p>
          </div>
        </div>
        {/*  Item 3  */}
        <div className="timeline-item scroll-reveal">
          <div className="timeline-dot" style={{"borderColor": "var(--accent-blue)", "boxShadow": "0 0 10px rgba(59, 130, 246, 0.4)"}}></div>
          <div className="timeline-content">
            <span className="timeline-year" style={{"color": "var(--accent-blue)"}}>2026</span>
            <h3>Global Operations</h3>
            <p>Officially founded Apitide as a premium international automation agency, scaling automated SDR dialers and custom web applications worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  CERTIFICATIONS & WORKING PROCESS (PHASE 19)  */}
  <section className="section-dark-navy" id="certs-process">
    <div className="container">
      <h2 className="section-title">Certifications & Working <span className="gradient-text-blue">Process</span></h2>
      <p className="section-subtitle">How we combine advanced industry credentials with a systematic development methodology.</p>
      
      {/*  Certifications Grid  */}
      <div className="certs-grid">
        <div className="service-card glass-card cert-card scroll-reveal">
          <div className="cert-icon"><i className="fas fa-graduation-cap"></i></div>
          <div className="cert-info">
            <h4>n8n Workflow Expert</h4>
            <p>Advanced API orchestration, loops, and error-handling pipelines.</p>
          </div>
        </div>
        <div className="service-card glass-card cert-card scroll-reveal">
          <div className="cert-icon" style={{"color": "var(--accent-orange)"}}><i className="fab fa-aws"></i></div>
          <div className="cert-info">
            <h4>AWS Cloud Architect</h4>
            <p>Secure database setups, JWT tokens, and scale hosting environments.</p>
          </div>
        </div>
        <div className="service-card glass-card cert-card scroll-reveal">
          <div className="cert-icon" style={{"color": "var(--accent-blue)"}}><i className="fas fa-brain"></i></div>
          <div className="cert-info">
            <h4>OpenAI Developer</h4>
            <p>Large Language Model fine-tuning, vector database embeddings, and RAG contexts.</p>
          </div>
        </div>
      </div>

      {/*  Working Process Grid  */}
      <div className="work-proc-grid" style={{"marginTop": "50px"}}>
        <div className="work-proc-card scroll-reveal">
          <span className="work-proc-step">Phase A</span>
          <h3>Deep Discovery</h3>
          <p>We audit your existing manual operational bottlenecks to design a workflow network matching your business logic.</p>
        </div>
        <div className="work-proc-card scroll-reveal">
          <span className="work-proc-step" style={{"color": "var(--accent-cyan)"}}>Phase B</span>
          <h3>Agile Iteration</h3>
          <p>We code and launch features continuously, delivering stable MVP releases onto staging sandboxes for prompt feedback checks.</p>
        </div>
        <div className="work-proc-card scroll-reveal">
          <span className="work-proc-step" style={{"color": "var(--accent-blue)"}}>Phase C</span>
          <h3>Uptime Guarantee</h3>
          <p>We install redundant webhook catchers, trace transaction endpoints, and scale API capacity targets to ensure zero downtime.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  STATS NUMBERS  */}
  <section className="section-light-slate">
    <div className="container">
      <h2 className="section-title">Our Standards In Numbers</h2>
      <p className="section-subtitle">A collection of key metrics defining the performance guarantees we build into every client system.</p>
      
      <div className="hero-stats-grid" style={{"maxWidth": "1000px", "margin": "0 auto"}}>
        <div className="hero-stat-item">
          <span className="stat-number">40%</span>
          <span className="stat-label">Faster Deployment</span>
        </div>
        <div className="hero-stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">System Monitoring</span>
        </div>
        <div className="hero-stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Scalability Guarantee</span>
        </div>
        <div className="hero-stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Satisfaction Rating</span>
        </div>
      </div>
    </div>
  </section>

  {/*  LET'S WORK TOGETHER  */}
  <section className="section-dark-navy">
    <div className="container">
      <h2 className="section-title">Let’s Work Together</h2>
      <p className="section-subtitle">We partner with forward-thinking businesses to automate manual overhead and launch new software platforms.</p>
      
      <div className="about-cta-grid">
        {/*  Why connect  */}
        <div className="about-cta-card glass-card scroll-reveal">
          <h3>Why Connect With Us?</h3>
          <ul style={{"listStyle": "none"}}>
            <li style={{"marginBottom": "12px"}}><i className="fas fa-check orange"></i> <b>Speed:</b> Rapid prototyping, testing, and MVP delivery.</li>
            <li style={{"marginBottom": "12px"}}><i className="fas fa-check orange"></i> <b>Quality:</b> Strict coding standards, visual excellence, and robust clean architecture.</li>
            <li style={{"marginBottom": "12px"}}><i className="fas fa-check orange"></i> <b>AI-First:</b> Smart workflows, object classification, and LLM integrations.</li>
            <li style={{"marginBottom": "12px"}}><i className="fas fa-check orange"></i> <b>Partnership:</b> Active post-launch updates and technical support.</li>
          </ul>
        </div>
        
        {/*  What we offer  */}
        <div className="about-cta-card glass-card scroll-reveal">
          <h3>What We Can Offer</h3>
          <ul style={{"listStyle": "none"}}>
            <li style={{"marginBottom": "12px"}}><i className="fas fa-check blue"></i> Custom web portals, e-commerce networks, and database dashboards.</li>
            <li style={{"marginBottom": "12px"}}><i className="fas fa-check blue"></i> Intelligent RAG models, custom GPT assistants, and semantic search indexes.</li>
            <li style={{"marginBottom": "12px"}}><i className="fas fa-check blue"></i> Speed optimization audits, technical SEO, and conversion optimization layouts.</li>
            <li style={{"marginBottom": "12px"}}><i className="fas fa-check blue"></i> Full-lifecycle technical advice and system architecture design.</li>
          </ul>
        </div>
      </div>

      <div style={{"display": "flex", "justifyContent": "center", "gap": "15px", "flexWrap": "wrap", "marginTop": "40px"}}>
        <Link  to="/contact" className="cta-btn primary">Start Your Free Consultation</Link>
        <Link  to="/projects" className="cta-btn secondary">See Our Work</Link>
      </div>
    </div>
  </section>

  {/*  FOOTER  */}
    </main>
  );
}
