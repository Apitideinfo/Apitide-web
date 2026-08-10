import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      <main>
        
        {/* ──────────────────────────────────────────────────────────────────────────
           1. HERO SECTION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="abt-hero-section">
          <div className="abt-container">
            <div className="abt-hero-content">
              <span className="abt-eyebrow text-orange">
                <i className="fas fa-users"></i> ABOUT APITIDE
              </span>
              <h1 className="abt-hero-title">
                Engineered by <span className="abt-gradient-orange">Friends</span>, Driven by <span className="abt-gradient-blue">Vision</span>
              </h1>
              <p className="abt-hero-subtitle">
                At APITIDE, we simplify technology with intelligent AI agents, n8n automations, and custom web products that help businesses scale faster.
              </p>
              <div className="abt-hero-actions">
                <Link to="/contact" className="abt-btn abt-btn-primary">
                  <i className="fas fa-rocket"></i> Start Your Project
                </Link>
                <Link to="/services" className="abt-btn abt-btn-secondary">
                  Explore Services <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           2. STANDARDS IN NUMBERS (STATS STRIP)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="abt-stats-bar-section">
          <div className="abt-container">
            <div className="abt-stats-grid">
              <div className="abt-stat-item">
                <span className="abt-stat-val text-cyan">40%</span>
                <span className="abt-stat-lbl">Faster Deployment</span>
              </div>
              <div className="abt-stat-divider"></div>
              <div className="abt-stat-item">
                <span className="abt-stat-val text-orange">24/7</span>
                <span className="abt-stat-lbl">System Monitoring</span>
              </div>
              <div className="abt-stat-divider"></div>
              <div className="abt-stat-item">
                <span className="abt-stat-val text-green">100%</span>
                <span className="abt-stat-lbl">Scalability Guarantee</span>
              </div>
              <div className="abt-stat-divider"></div>
              <div className="abt-stat-item">
                <span className="abt-stat-val text-blue">98%</span>
                <span className="abt-stat-lbl">Satisfaction Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           3. COMPANY STORY, VISION & MISSION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="abt-section" id="story">
          <div className="abt-container">
            
            {/* Story Editorial Box */}
            <div className="abt-card abt-story-box mb-12">
              <span className="abt-eyebrow text-cyan mb-2">
                <i className="fas fa-book-open"></i> OUR ORIGIN STORY
              </span>
              <h2 className="abt-section-title text-left mb-4">
                College-Born <span className="abt-gradient-cyan">Partnership</span>
              </h2>
              <p className="abt-story-text">
                APITIDE began as a simple idea among college friends. We were united by a shared passion to create and a belief that our combined technical expertise could help businesses succeed. Today, that original partnership drives everything we do. We aren't just an agency; we're your dedicated team, ready to bring your vision to life.
              </p>
            </div>

            {/* Vision & Mission Cards Grid */}
            <div className="abt-vision-grid">
              {/* Vision Card */}
              <div className="abt-card abt-vm-card highlight-orange">
                <div className="vm-head">
                  <div className="vm-icon text-orange"><i className="fas fa-eye"></i></div>
                  <h3 className="abt-card-title">Our <span className="abt-gradient-orange">Vision</span></h3>
                </div>
                <ul className="abt-list">
                  <li>
                    <i className="fas fa-check-circle text-orange"></i>
                    <span>To become a global leader in intelligent digital solutions, proving that great ideas can change the future of businesses.</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-orange"></i>
                    <span>To build a tech collective where friendship, teamwork, and raw development skill merge to create elite software products.</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-orange"></i>
                    <span>To lead the transition into autonomous AI workflows, enabling businesses of all sizes to operate with automation.</span>
                  </li>
                </ul>
              </div>

              {/* Mission Card */}
              <div className="abt-card abt-vm-card highlight-blue">
                <div className="vm-head">
                  <div className="vm-icon text-blue"><i className="fas fa-bullseye"></i></div>
                  <h3 className="abt-card-title">Our <span className="abt-gradient-blue">Mission</span></h3>
                </div>
                <ul className="abt-list">
                  <li>
                    <i className="fas fa-check-circle text-blue"></i>
                    <span>To craft tailor-made web systems and AI automations that deliver immediate and measurable business growth.</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-blue"></i>
                    <span>To empower organizations with intelligent tools, eliminating boring manual tasks so teams can focus on creative strategies.</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-blue"></i>
                    <span>To foster long-term technical partnerships built on deep trust, code quality, and execution speed.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           4. CORE VALUES
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="abt-section abt-bg-darker" id="core-values">
          <div className="abt-container">
            <div className="abt-section-header">
              <span className="abt-eyebrow text-blue">
                <i className="fas fa-compass"></i> GUIDING PRINCIPLES
              </span>
              <h2 className="abt-section-title">
                Our Core <span className="abt-gradient-blue">Values</span>
              </h2>
              <p className="abt-section-subtitle">
                The fundamental architectural principles that guide our development team every single day.
              </p>
            </div>

            <div className="abt-values-grid">
              <div className="abt-card abt-value-card">
                <div className="val-icon text-cyan"><i className="fas fa-microchip"></i></div>
                <h4>Precision Engineering</h4>
                <p>Every line of full-stack code, vector query, and webhook sequence is audited to secure sub-millisecond execution speeds.</p>
              </div>

              <div className="abt-card abt-value-card">
                <div className="val-icon text-orange"><i className="fas fa-handshake"></i></div>
                <h4>College-Born Trust</h4>
                <p>We are built on transparent collaboration, honest project scoping, and absolute product ownership.</p>
              </div>

              <div className="abt-card abt-value-card">
                <div className="val-icon text-blue"><i className="fas fa-tachometer-alt"></i></div>
                <h4>Speed as a Feature</h4>
                <p>We build lightweight MVPs and iterate rapidly, helping you automate workflows in weeks instead of months.</p>
              </div>

              <div className="abt-card abt-value-card">
                <div className="val-icon text-purple"><i className="fas fa-brain"></i></div>
                <h4>AI-First Intuition</h4>
                <p>We engineer systems that think as well as execute, integrating grounded RAG contexts directly into B2B software.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           5. FOUNDING TEAM
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="abt-section" id="founder-team">
          <div className="abt-container">
            <div className="abt-section-header">
              <span className="abt-eyebrow text-cyan">
                <i className="fas fa-user-astronaut"></i> LEADERSHIP
              </span>
              <h2 className="abt-section-title">
                Our Founding <span className="abt-gradient-cyan">Team</span>
              </h2>
              <p className="abt-section-subtitle">
                Meet the college friends and developers who engineered the Apitide automation collective.
              </p>
            </div>

            <div className="abt-team-grid">
              {/* Kritika Paliwal */}
              <div className="abt-card abt-team-card">
                <div className="team-avatar text-cyan">KP</div>
                <h3 className="team-name">Kritika Paliwal</h3>
                <span className="team-role text-cyan">UI/UX Designer</span>
                <p className="team-bio">Specializes in user research, wireframing, high-fidelity UI design systems, and conversion-focused digital experiences.</p>
                <div className="team-socials">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>

              {/* Mayank Joshi */}
              <div className="abt-card abt-team-card">
                <div className="team-avatar text-orange">MJ</div>
                <h3 className="team-name">Mayank Joshi</h3>
                <span className="team-role text-orange">Co-Founder & Lead Software Engineer</span>
                <p className="team-bio">Specializes in enterprise software architecture, full-stack systems, secure database design, and cloud scalability.</p>
                <div className="team-socials">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>

              {/* Saurabh */}
              <div className="abt-card abt-team-card">
                <div className="team-avatar text-blue">S</div>
                <h3 className="team-name">Saurabh</h3>
                <span className="team-role text-blue">Automation Engineer</span>
                <p className="team-bio">Specializes in n8n workflow maps, custom webhook integrations, process automation, and API orchestration.</p>
                <div className="team-socials">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           6. OPERATIONAL TIMELINE
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="abt-section abt-bg-darker" id="company-timeline">
          <div className="abt-container">
            <div className="abt-section-header">
              <span className="abt-eyebrow text-orange">
                <i className="fas fa-history"></i> MILESTONES
              </span>
              <h2 className="abt-section-title">
                Our Operational <span className="abt-gradient-orange">Timeline</span>
              </h2>
              <p className="abt-section-subtitle">
                The milestones tracking Apitide’s evolution from college projects to global operations.
              </p>
            </div>

            <div className="abt-timeline">
              <div className="timeline-item">
                <div className="timeline-node">
                  <span className="year-tag text-orange">2024</span>
                </div>
                <div className="abt-card timeline-card">
                  <h4>The Genesis</h4>
                  <p>College friends team up to build lightweight Python scripting engines and secure webhook relays, winning local university hackathons.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-node">
                  <span className="year-tag text-cyan">2025</span>
                </div>
                <div className="abt-card timeline-card">
                  <h4>Scale Automations</h4>
                  <p>Launched the first enterprise-scale n8n workflows and custom CRM bridges for regional retail and logistics firms, saving clients thousands of manual hours.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-node">
                  <span className="year-tag text-blue">2026</span>
                </div>
                <div className="abt-card timeline-card">
                  <h4>Global Operations</h4>
                  <p>Officially founded Apitide as a premium international automation agency, scaling automated SDR dialers and custom web applications worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           7. CERTIFICATIONS & WORKING PROCESS
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="abt-section" id="certs-process">
          <div className="abt-container">
            <div className="abt-section-header">
              <span className="abt-eyebrow text-blue">
                <i className="fas fa-certificate"></i> EXPERTISE & METHODOLOGY
              </span>
              <h2 className="abt-section-title">
                Certifications & Working <span className="abt-gradient-blue">Process</span>
              </h2>
              <p className="abt-section-subtitle">
                How we combine advanced industry credentials with a systematic development methodology.
              </p>
            </div>

            {/* Certifications Row */}
            <div className="abt-certs-grid mb-12">
              <div className="abt-card abt-cert-card">
                <div className="cert-icon text-cyan"><i className="fas fa-graduation-cap"></i></div>
                <div className="cert-info">
                  <h4>n8n Workflow Expert</h4>
                  <p>Advanced API orchestration, loops, and error-handling pipelines.</p>
                </div>
              </div>

              <div className="abt-card abt-cert-card">
                <div className="cert-icon text-orange"><i className="fab fa-aws"></i></div>
                <div className="cert-info">
                  <h4>AWS Cloud Architect</h4>
                  <p>Secure database setups, JWT tokens, and scale hosting environments.</p>
                </div>
              </div>

              <div className="abt-card abt-cert-card">
                <div className="cert-icon text-blue"><i className="fas fa-brain"></i></div>
                <div className="cert-info">
                  <h4>OpenAI Developer</h4>
                  <p>Large Language Model fine-tuning, vector database embeddings, and RAG contexts.</p>
                </div>
              </div>
            </div>

            {/* Working Process Pipeline */}
            <div className="abt-process-grid">
              <div className="abt-card abt-process-card">
                <span className="phase-badge text-cyan">PHASE A</span>
                <h3>Deep Discovery</h3>
                <p>We audit your existing manual operational bottlenecks to design a workflow network matching your business logic.</p>
              </div>

              <div className="abt-card abt-process-card">
                <span className="phase-badge text-orange">PHASE B</span>
                <h3>Agile Iteration</h3>
                <p>We code and launch features continuously, delivering stable MVP releases onto staging sandboxes for prompt feedback checks.</p>
              </div>

              <div className="abt-card abt-process-card">
                <span className="phase-badge text-blue">PHASE C</span>
                <h3>Uptime Guarantee</h3>
                <p>We install redundant webhook catchers, trace transaction endpoints, and scale API capacity targets to ensure zero downtime.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           8. FINAL CONVERSION CTA BANNER
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="abt-section abt-cta-section">
          <div className="abt-container">
            <div className="abt-card abt-cta-banner">
              <span className="abt-eyebrow text-orange mb-3">
                <i className="fas fa-handshake"></i> LET'S WORK TOGETHER
              </span>
              <h2>
                Ready to Accelerate Your <span className="abt-gradient-cyan">Growth?</span>
              </h2>
              <p>
                We partner with forward-thinking businesses to automate manual overhead, integrate intelligent AI, and launch custom software platforms.
              </p>

              {/* Offerings & Benefits Sub-Grid */}
              <div className="abt-cta-highlights">
                <div className="highlight-column">
                  <h4>Why Connect With Us?</h4>
                  <ul>
                    <li><i className="fas fa-check text-orange"></i> <strong>Speed:</strong> Rapid prototyping, testing, and MVP delivery.</li>
                    <li><i className="fas fa-check text-orange"></i> <strong>Quality:</strong> Strict coding standards, visual excellence, and clean architecture.</li>
                    <li><i className="fas fa-check text-orange"></i> <strong>AI-First:</strong> Smart workflows, object classification, and LLM integrations.</li>
                    <li><i className="fas fa-check text-orange"></i> <strong>Partnership:</strong> Active post-launch updates and technical support.</li>
                  </ul>
                </div>

                <div className="highlight-column">
                  <h4>What We Can Offer</h4>
                  <ul>
                    <li><i className="fas fa-check text-blue"></i> Custom web portals, e-commerce networks, and database dashboards.</li>
                    <li><i className="fas fa-check text-blue"></i> Intelligent RAG models, custom GPT assistants, and semantic search.</li>
                    <li><i className="fas fa-check text-blue"></i> Speed optimization audits, technical SEO, and conversion layouts.</li>
                    <li><i className="fas fa-check text-blue"></i> Full-lifecycle technical advice and system architecture design.</li>
                  </ul>
                </div>
              </div>

              <div className="abt-cta-actions">
                <Link to="/contact" className="abt-btn abt-btn-primary">
                  <i className="fas fa-calendar-check"></i> Start Your Free Consultation
                </Link>
                <Link to="/projects" className="abt-btn abt-btn-secondary">
                  See Our Work <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
