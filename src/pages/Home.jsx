import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    // 1. SaaS Filter Pills & Dropdown
    const filterBtns = document.querySelectorAll('.saas-pill-btn, .solutions-tab-btn');
    const categoryCards = document.querySelectorAll('.saas-category-card');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = btn.getAttribute('data-filter') || 'all';
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        categoryCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // 2. SaaS Category Accordion Expand
    const expandBtns = document.querySelectorAll('.category-expand-btn');
    expandBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = btn.closest('.saas-category-card');
        if (card) {
          card.classList.toggle('active');
        }
      });
    });

    // 3. Industry Sidebar Tabs
    const indBtns = document.querySelectorAll('.industry-tab-btn');
    const indCards = document.querySelectorAll('.industry-detail-card');
    indBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetInd = btn.getAttribute('data-industry');
        indBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        indCards.forEach(card => {
          if (card.id === 'ind-' + targetInd) {
            card.classList.add('active');
            card.style.display = 'block';
          } else {
            card.classList.remove('active');
            card.style.display = 'none';
          }
        });
      });
    });

    // 4. FAQ Accordions
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const q = item.querySelector('.faq-question');
      if (q) {
        q.addEventListener('click', () => {
          const isOpen = item.classList.contains('active');
          faqItems.forEach(i => i.classList.remove('active'));
          if (!isOpen) {
            item.classList.add('active');
          }
        });
      }
    });

    // 5. FAQ Filter Tabs
    const faqTabs = document.querySelectorAll('.faq-tab-btn');
    faqTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category') || 'all';
        faqTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        faqItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // 6. SDLC Process Scroll-Driven Timeline & Progress Slider Line
    const processContainer = document.querySelector('.process-container');
    const processSteps = document.querySelectorAll('.process-step');
    const progressLine = document.querySelector('.process-progress-line');

    const handleProcessScroll = () => {
      if (!processContainer || !progressLine || processSteps.length === 0) return;

      const rect = processContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startScroll = rect.top - viewportHeight * 0.5;
      const totalHeight = rect.height;

      let percentage = 0;
      if (startScroll < 0) {
        percentage = Math.min(Math.abs(startScroll) / totalHeight, 1) * 100;
      }

      progressLine.style.height = `${percentage}%`;

      // Activate step cards and markers sequentially as user scrolls down
      processSteps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();
        const triggerPoint = viewportHeight * 0.72;
        if (stepRect.top < triggerPoint) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleProcessScroll);
    handleProcessScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleProcessScroll);
    };
  }, []);


  return (
    <main style={{ paddingTop: '80px' }}>
      {/*  HERO (ENTERPRISE HERO - PHASE 11)  */}
      <section className="hero" id="hero">
        {/*  Background Video  */}
        <video className="hero-bg-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/static/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
        <div className="hero-canvas-container">
          <canvas id="particles-canvas"></canvas>
        </div>
        <div className="hero-glow-blob"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-headline">Build <span className="gradient-text-blue">AI Systems</span> That Work <span
              className="typewriter-container"><span id="typewriter-text" className="gradient-text-orange">While You
                Sleep.</span><span className="typewriter-cursor">|</span></span></h1>
            <p>We build intelligent automation systems, AI agents, enterprise software, and modern digital experiences that
              save thousands of working hours every month.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="cta-btn primary">
                <i className="fas fa-calendar-alt"></i> Book Consultation
              </Link>
              <Link to="/projects" className="cta-btn secondary">View Portfolio</Link>
              <Link to="#" id="watch-demo-btn" className="cta-btn secondary">
                <i className="fas fa-play-circle"></i> Watch Demo
              </Link>
            </div>

            {/*  Moving Logo Ticker Line  */}
            <p className="hero-ticker-label">AUTOMATING OPERATIONS ACROSS INDUSTRY LEADING PLATFORMS</p>
            <div className="hero-ticker-strip tech-stack">
              <div className="hero-ticker-track">
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="OpenAI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> OpenAI</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" alt="n8n" className="si-logo" style={{ filter: 'invert(35%) sepia(80%) saturate(2500%) hue-rotate(325deg)' }} /> n8n</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twilio.svg" alt="Twilio" className="si-logo" style={{ filter: 'invert(37%) sepia(93%) saturate(3015%) hue-rotate(338deg)' }} /> Twilio</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" alt="Azure" className="si-logo" style={{ filter: 'invert(40%) sepia(85%) saturate(2000%) hue-rotate(185deg)' }} /> Azure</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="si-logo" style={{ filter: 'invert(65%) sepia(80%) saturate(1000%) hue-rotate(155deg)' }} /> React</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" alt="Next.js" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Next.js</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" alt="Node.js" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1000%) hue-rotate(85deg)' }} /> Node.js</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="si-logo" style={{ filter: 'invert(45%) sepia(60%) saturate(1000%) hue-rotate(170deg)' }} /> Python</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" alt="FastAPI" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1500%) hue-rotate(130deg)' }} /> FastAPI</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2000%) hue-rotate(175deg)' }} /> Docker</span>
                <span className="hero-ticker-item"><i className="fab fa-aws" style={{ "color": "#FF9900" }}></i> AWS</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" alt="Firebase" className="si-logo" style={{ filter: 'invert(80%) sepia(80%) saturate(1500%) hue-rotate(350deg)' }} /> Firebase</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg" alt="LangChain" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> LangChain</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" alt="PostgreSQL" className="si-logo" style={{ filter: 'invert(40%) sepia(80%) saturate(1500%) hue-rotate(190deg)' }} /> PostgreSQL</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg" alt="Vercel" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Vercel</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" alt="Stripe" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(210deg)' }} /> Stripe</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg" alt="Zapier" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2500%) hue-rotate(355deg)' }} /> Zapier</span>

                {/* Duplicate for seamless loop */}
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="OpenAI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> OpenAI</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" alt="n8n" className="si-logo" style={{ filter: 'invert(35%) sepia(80%) saturate(2500%) hue-rotate(325deg)' }} /> n8n</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twilio.svg" alt="Twilio" className="si-logo" style={{ filter: 'invert(37%) sepia(93%) saturate(3015%) hue-rotate(338deg)' }} /> Twilio</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" alt="Azure" className="si-logo" style={{ filter: 'invert(40%) sepia(85%) saturate(2000%) hue-rotate(185deg)' }} /> Azure</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="si-logo" style={{ filter: 'invert(65%) sepia(80%) saturate(1000%) hue-rotate(155deg)' }} /> React</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" alt="Next.js" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Next.js</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" alt="Node.js" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1000%) hue-rotate(85deg)' }} /> Node.js</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="si-logo" style={{ filter: 'invert(45%) sepia(60%) saturate(1000%) hue-rotate(170deg)' }} /> Python</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" alt="FastAPI" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1500%) hue-rotate(130deg)' }} /> FastAPI</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2000%) hue-rotate(175deg)' }} /> Docker</span>
                <span className="hero-ticker-item"><i className="fab fa-aws" style={{ "color": "#FF9900" }}></i> AWS</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" alt="Firebase" className="si-logo" style={{ filter: 'invert(80%) sepia(80%) saturate(1500%) hue-rotate(350deg)' }} /> Firebase</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg" alt="LangChain" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> LangChain</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" alt="PostgreSQL" className="si-logo" style={{ filter: 'invert(40%) sepia(80%) saturate(1500%) hue-rotate(190deg)' }} /> PostgreSQL</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg" alt="Vercel" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Vercel</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" alt="Stripe" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(210deg)' }} /> Stripe</span>
                <span className="hero-ticker-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg" alt="Zapier" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2500%) hue-rotate(355deg)' }} /> Zapier</span>
              </div>
            </div>

            {/*  Animated Statistics  */}
            <div className="hero-stats-grid">
              <div className="hero-stat-item">
                <span className="stat-number stat-number-value" data-target="100" data-suffix="+">100+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number stat-number-value" data-target="15" data-suffix="+">15+</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number stat-number-value" data-target="50" data-suffix="+">50+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number stat-number-value" data-target="10000" data-suffix="+">10,000+</span>
                <span className="stat-label">Hours Saved</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number stat-number-value" data-target="1.2" data-suffix="M+">$1.2M+</span>
                <span className="stat-label">Revenue Generated</span>
              </div>
            </div>
          </div>
        </div>

        {/*  Animated Scroll Down Indicator  */}
        <div className="scroll-indicator">
          <Link to="#process" aria-label="Scroll Down">
            <div className="mouse-icon">
              <div className="mouse-wheel"></div>
            </div>
          </Link>
        </div>
      </section>
      {/*  ═══════════════════════════════════════════════════
       PHASE 24 — TECH ECOSYSTEM MARQUEE (Dual track)
       ═══════════════════════════════════════════════════  */}
      <div className="animated-divider"></div>
      <section className="marquee-section" aria-label="Technology ecosystem">
        <p className="marquee-label">Powered by the world's best tech stack</p>

        {/*  Track 1: scrolls left  */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track">
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="si-logo" style={{ filter: 'invert(65%) sepia(80%) saturate(1000%) hue-rotate(155deg)' }} /> React</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" alt="Next.js" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Next.js</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" alt="Node.js" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1000%) hue-rotate(90deg)' }} /> Node.js</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" alt="FastAPI" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1000%) hue-rotate(130deg)' }} /> FastAPI</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="si-logo" style={{ filter: 'invert(45%) sepia(60%) saturate(1000%) hue-rotate(170deg)' }} /> Python</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1500%) hue-rotate(180deg)' }} /> Docker</div>
            <div className="marquee-item"><i className="fab fa-aws" style={{ "color": "#FF9900", "fontSize": "1.1rem" }}></i> AWS</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" alt="Firebase" className="si-logo" style={{ filter: 'invert(80%) sepia(80%) saturate(1500%) hue-rotate(350deg)' }} /> Firebase</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="OpenAI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> OpenAI</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg" alt="LangChain" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> LangChain</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" alt="n8n" className="si-logo" style={{ filter: 'invert(35%) sepia(80%) saturate(2500%) hue-rotate(325deg)' }} /> n8n</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" alt="PostgreSQL" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(200deg)' }} /> PostgreSQL</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg" alt="Vercel" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Vercel</div>
            {/*  Duplicate for infinite loop  */}
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="si-logo" style={{ filter: 'invert(65%) sepia(80%) saturate(1000%) hue-rotate(155deg)' }} /> React</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" alt="Next.js" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Next.js</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" alt="Node.js" className="si-logo" style={{ filter: 'invert(45%) sepia(80%) saturate(1000%) hue-rotate(90deg)' }} /> Node.js</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" alt="FastAPI" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1000%) hue-rotate(130deg)' }} /> FastAPI</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="si-logo" style={{ filter: 'invert(45%) sepia(60%) saturate(1000%) hue-rotate(170deg)' }} /> Python</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1500%) hue-rotate(180deg)' }} /> Docker</div>
            <div className="marquee-item"><i className="fab fa-aws" style={{ "color": "#FF9900", "fontSize": "1.1rem" }}></i> AWS</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" alt="Firebase" className="si-logo" style={{ filter: 'invert(80%) sepia(80%) saturate(1500%) hue-rotate(350deg)' }} /> Firebase</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="OpenAI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> OpenAI</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg" alt="LangChain" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> LangChain</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" alt="n8n" className="si-logo" style={{ filter: 'invert(35%) sepia(80%) saturate(2500%) hue-rotate(325deg)' }} /> n8n</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" alt="PostgreSQL" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(200deg)' }} /> PostgreSQL</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg" alt="Vercel" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Vercel</div>
          </div>
        </div>

        {/*  Track 2: scrolls right (reverse)  */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track reverse">
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg" alt="MongoDB" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1000%) hue-rotate(90deg)' }} /> MongoDB</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redis.svg" alt="Redis" className="si-logo" style={{ filter: 'invert(30%) sepia(90%) saturate(3000%) hue-rotate(340deg)' }} /> Redis</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg" alt="Supabase" className="si-logo" style={{ filter: 'invert(60%) sepia(80%) saturate(1500%) hue-rotate(120deg)' }} /> Supabase</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" alt="Stripe" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(210deg)' }} /> Stripe</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(2000%) hue-rotate(90deg)' }} /> WhatsApp API</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twilio.svg" alt="Twilio" className="si-logo" style={{ filter: 'invert(30%) sepia(90%) saturate(3000%) hue-rotate(340deg)' }} /> Twilio</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cloudflare.svg" alt="Cloudflare" className="si-logo" style={{ filter: 'invert(55%) sepia(90%) saturate(2000%) hue-rotate(350deg)' }} /> Cloudflare</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" alt="Azure" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(190deg)' }} /> Azure</div>
            <div className="marquee-item"><i className="fas fa-microchip" style={{ "color": "#00B5B8", "fontSize": "1.1rem" }}></i> Pinecone</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" alt="Claude AI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Claude AI</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg" alt="Gemini" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1500%) hue-rotate(240deg)' }} /> Gemini</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/laravel.svg" alt="Laravel" className="si-logo" style={{ filter: 'invert(35%) sepia(90%) saturate(2500%) hue-rotate(345deg)' }} /> Laravel</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/qdrant.svg" alt="Qdrant" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Qdrant</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg" alt="Shopify" className="si-logo" style={{ filter: 'invert(60%) sepia(80%) saturate(1000%) hue-rotate(45deg)' }} /> Shopify</div>
            {/*  Duplicate  */}
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg" alt="MongoDB" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1000%) hue-rotate(90deg)' }} /> MongoDB</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redis.svg" alt="Redis" className="si-logo" style={{ filter: 'invert(30%) sepia(90%) saturate(3000%) hue-rotate(340deg)' }} /> Redis</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg" alt="Supabase" className="si-logo" style={{ filter: 'invert(60%) sepia(80%) saturate(1500%) hue-rotate(120deg)' }} /> Supabase</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" alt="Stripe" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(210deg)' }} /> Stripe</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(2000%) hue-rotate(90deg)' }} /> WhatsApp API</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twilio.svg" alt="Twilio" className="si-logo" style={{ filter: 'invert(30%) sepia(90%) saturate(3000%) hue-rotate(340deg)' }} /> Twilio</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cloudflare.svg" alt="Cloudflare" className="si-logo" style={{ filter: 'invert(55%) sepia(90%) saturate(2000%) hue-rotate(350deg)' }} /> Cloudflare</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" alt="Azure" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(190deg)' }} /> Azure</div>
            <div className="marquee-item"><i className="fas fa-microchip" style={{ "color": "#00B5B8", "fontSize": "1.1rem" }}></i> Pinecone</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" alt="Claude AI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Claude AI</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg" alt="Gemini" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1500%) hue-rotate(240deg)' }} /> Gemini</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/laravel.svg" alt="Laravel" className="si-logo" style={{ filter: 'invert(35%) sepia(90%) saturate(2500%) hue-rotate(345deg)' }} /> Laravel</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/qdrant.svg" alt="Qdrant" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> Qdrant</div>
            <div className="marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg" alt="Shopify" className="si-logo" style={{ filter: 'invert(60%) sepia(80%) saturate(1000%) hue-rotate(45deg)' }} /> Shopify</div>
          </div>
        </div>
      </section>
      <div className="animated-divider"></div>

      {/*  TRANSFORMATION SHOWCASE BANNER (FULL VIEWPORT WIDTH EDGE-TO-EDGE)  */}
      <section className="banner-showcase-section">
        <div className="banner-showcase-wrapper">
          <img src="/static/images/hero-visual.webp" alt="APITIDE - Code Transformation & AI Modernization"
            className="transformation-banner-img" loading="lazy" />
        </div>
      </section>

      {/*  SERVICES OVERVIEW  */}
      <section className="section-dark-navy" id="services">
        <div className="container">
          <h2 className="section-title">A Combination of <span className="gradient-text-orange">Skills</span> Built for Your <span
            className="gradient-text-blue">Growth</span></h2>
          <p className="section-subtitle">We design websites, apps, AI systems, and marketing strategies that help businesses
            grow faster, smarter, and stronger.</p>

          <div className="services-grid">
            {/*  AI Workflow Card  */}
            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-network-wired"></i></div>
              <h3>AI Workflow & N8N Automation</h3>
              <p>Connect your business tools and let AI orchestrate the heavy lifting. We build automated data-pipelines,
                sync leads across CRMs, and trigger tasks seamlessly.</p>
              <div className="service-features">
                <span className="feature-tag">N8N</span>
                <span className="feature-tag">Make/Zapier</span>
                <span className="feature-tag">REST APIs</span>
                <span className="feature-tag">CRM Sync</span>
              </div>
              <Link to="/services#workflow" className="service-btn">Learn More</Link>
            </div>

            {/*  Custom Web & Mobile Apps  */}
            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
              <h3>Web & Mobile Development</h3>
              <p>Custom full-stack web and mobile systems designed for lightning-fast performance, premium aesthetics, and
                optimal conversion rates.</p>
              <div className="service-features">
                <span className="feature-tag">React.js</span>
                <span className="feature-tag">Next.js</span>
                <span className="feature-tag">Python/Django</span>
                <span className="feature-tag">Node.js</span>
                <span className="feature-tag">Flutter</span>
              </div>
              <Link to="/services#development" className="service-btn">Learn More</Link>
            </div>

            {/*  AI Solutions & Consulting  */}
            <div className="service-card glass-card">
              <div className="service-icon"><i className="fas fa-brain"></i></div>
              <h3>AI Consulting & RAG Chatbots</h3>
              <p>Ground AI answers in your proprietary datasets. We implement Retrieval-Augmented Generation models that
                guarantee high accuracy and secure operations.</p>
              <div className="service-features">
                <span className="feature-tag">LLMs</span>
                <span className="feature-tag">RAG Models</span>
                <span className="feature-tag">OpenRouter</span>
                <span className="feature-tag">LangChain</span>
              </div>
              <Link to="/services#ai-solutions" className="service-btn">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/*  DEDICATED AI SOLUTIONS CATALOG (ULTRA PREMIUM SAAS INTERFACE)  */}
      <section className="saas-solutions-section" id="ai-solutions">
        {/*  Ambient Background Glows & Grid Layer  */}
        <div className="saas-bg-glow glow-blue"></div>
        <div className="saas-bg-glow glow-purple"></div>
        <div className="saas-grid-overlay"></div>

        <div className="saas-container">

          {/*  Hero Header Stack  */}
          <div className="saas-hero-header">
            <div className="hero-badge-pill">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">AI Powered Automation</span>
            </div>

            <h2 className="saas-heading">
              Custom Deployed <span className="text-electric-gradient">AI Solutions</span>
            </h2>

            <p className="saas-description">
              We design and integrate specialized AI modules tailored for corporate productivity and software automation.
            </p>
          </div>

          {/*  Main Glassmorphism Dashboard Container (28px Radius)  */}
          <div className="saas-dashboard-card">

            {/*  Top Filter Bar  */}
            <div className="saas-filter-bar">
              {/*  Left: All Solutions White Dropdown Button  */}
              <div className="saas-dropdown-wrapper">
                <button className="saas-btn-dropdown solutions-tab-btn active" data-filter="all">
                  <i className="fas fa-th-large icon-left"></i>
                  <span>All Solutions (24)</span>
                </button>
              </div>

              {/*  Right: Category Filter Pills  */}
              <div className="saas-category-pills">
                <button className="saas-pill-btn active" data-filter="all">
                  <i className="fas fa-th-large"></i>
                  <span>All</span>
                  <span className="pill-badge">24</span>
                </button>

                <button className="saas-pill-btn" data-filter="communication">
                  <i className="fas fa-comments"></i>
                  <span>Communication</span>
                  <span className="pill-badge purple">4</span>
                </button>

                <button className="saas-pill-btn" data-filter="knowledge">
                  <i className="fas fa-book-open"></i>
                  <span>Document & Knowledge</span>
                  <span className="pill-badge cyan">6</span>
                </button>

                <button className="saas-pill-btn" data-filter="sales">
                  <i className="fas fa-chart-line"></i>
                  <span>Sales & Marketing</span>
                  <span className="pill-badge green">7</span>
                </button>

                <button className="saas-pill-btn" data-filter="operations">
                  <i className="fas fa-cogs"></i>
                  <span>Operations & Systems</span>
                  <span className="pill-badge orange">7</span>
                </button>
              </div>
            </div>

            {/*  Dashboard Category Cards & Expandable Accordion Grids  */}
            <div className="saas-category-stack">

              {/*  CATEGORY 1: Communication & Support (Purple Gradient)  */}
              <div className="saas-category-card theme-purple active" data-category="communication">
                <div className="category-card-header">
                  <div className="header-left">
                    <div className="category-icon-box theme-purple">
                      <i className="fas fa-comment-dots"></i>
                    </div>
                    <div className="category-info">
                      <div className="title-row">
                        <h3 className="category-title">Communication & Support</h3>
                        <span className="service-badge theme-purple">4 Services</span>
                      </div>
                      <p className="category-subtitle">AI solutions to enhance customer communication and support operations.
                      </p>
                    </div>
                  </div>
                  <button className="category-expand-btn theme-purple" aria-label="Toggle Category">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>

                <div className="category-expand-content">
                  <div className="services-grid-wrapper">

                    {/*  Service 1  */}
                    <div className="service-glass-card" data-card="01"
                      data-desc="Real-time conversational agents designed to qualify inbound leads, schedule follow-ups, and automate customer voice touchpoints."
                      data-tags="VAPI,Twilio,Voice Clone">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-purple"><i className="fas fa-phone-alt"></i></div>
                        <span className="service-index">01</span>
                      </div>
                      <h4 className="service-title">AI Voice Agent</h4>
                      <p className="service-desc">Real-time conversational agents designed to qualify inbound leads, schedule
                        follow-ups, and automate customer voice touchpoints.</p>
                      <div className="service-tags">
                        <span className="tag">VAPI</span>
                        <span className="tag">Twilio</span>
                        <span className="tag">Voice Clone</span>
                      </div>
                    </div>

                    {/*  Service 2  */}
                    <div className="service-glass-card" data-card="02"
                      data-desc="Automated front-desk routing systems that capture client specifications, book appointments, and log intake briefs to CRM pipelines."
                      data-tags="Inbound Routing,Calendar Sync,API Hook">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-purple"><i className="fas fa-user-tie"></i></div>
                        <span className="service-index">02</span>
                      </div>
                      <h4 className="service-title">AI Receptionist</h4>
                      <p className="service-desc">Automated front-desk routing systems that capture client specifications, book
                        appointments, and log intake briefs to CRM pipelines.</p>
                      <div className="service-tags">
                        <span className="tag">Inbound Routing</span>
                        <span className="tag">Calendar Sync</span>
                        <span className="tag">API Hook</span>
                      </div>
                    </div>

                    {/*  Service 3  */}
                    <div className="service-glass-card" data-card="03"
                      data-desc="Multi-channel support agents answering technical inquiries, parsing client tickets, and escalating complex bugs automatically."
                      data-tags="Zendesk API,LangChain,Auto-Escalate">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-purple"><i className="fas fa-headset"></i></div>
                        <span className="service-index">03</span>
                      </div>
                      <h4 className="service-title">AI Customer Support</h4>
                      <p className="service-desc">Multi-channel support agents answering technical inquiries, parsing client
                        tickets, and escalating complex bugs automatically.</p>
                      <div className="service-tags">
                        <span className="tag">Zendesk API</span>
                        <span className="tag">LangChain</span>
                        <span className="tag">Auto-Escalate</span>
                      </div>
                    </div>

                    {/*  Service 4  */}
                    <div className="service-glass-card" data-card="09"
                      data-desc="Direct integration with the official WhatsApp Business API, managing customer catalogs, orders, and automated intake chats."
                      data-tags="WhatsApp API,Meta Cloud,Interactive Catalog">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-purple"><i className="fab fa-whatsapp"></i></div>
                        <span className="service-index">09</span>
                      </div>
                      <h4 className="service-title">WhatsApp AI</h4>
                      <p className="service-desc">Direct integration with the official WhatsApp Business API, managing customer
                        catalogs, orders, and automated intake chats.</p>
                      <div className="service-tags">
                        <span className="tag">WhatsApp API</span>
                        <span className="tag">Meta Cloud</span>
                        <span className="tag">Interactive Catalog</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/*  CATEGORY 2: Document & Knowledge (Cyan Gradient)  */}
              <div className="saas-category-card theme-cyan active" data-category="knowledge">
                <div className="category-card-header">
                  <div className="header-left">
                    <div className="category-icon-box theme-cyan">
                      <i className="fas fa-book-open"></i>
                    </div>
                    <div className="category-info">
                      <div className="title-row">
                        <h3 className="category-title">Document & Knowledge</h3>
                        <span className="service-badge theme-cyan">6 Services</span>
                      </div>
                      <p className="category-subtitle">Intelligent document processing, knowledge management and information
                        extraction.</p>
                    </div>
                  </div>
                  <button className="category-expand-btn theme-cyan" aria-label="Toggle Category">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>

                <div className="category-expand-content">
                  <div className="services-grid-wrapper">

                    {/*  Service 5  */}
                    <div className="service-glass-card" data-card="04"
                      data-desc="Retrieval-Augmented Generation models grounded in your proprietary databases to give hallucination-free factual answers."
                      data-tags="Pinecone,Vector Embeddings,Semantic Search">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-cyan"><i className="fas fa-brain"></i></div>
                        <span className="service-index">04</span>
                      </div>
                      <h4 className="service-title">RAG Chatbot</h4>
                      <p className="service-desc">Retrieval-Augmented Generation models grounded in your proprietary databases
                        to give hallucination-free factual answers.</p>
                      <div className="service-tags">
                        <span className="tag">Pinecone</span>
                        <span className="tag">Vector Embeddings</span>
                        <span className="tag">Semantic Search</span>
                      </div>
                    </div>

                    {/*  Service 6  */}
                    <div className="service-glass-card" data-card="05"
                      data-desc="LlamaIndex integrations grounded in medical directories (e.g. WHO guidelines) to query verified diagnostic and operational data."
                      data-tags="HIPAA Crypt,WHO Directory,Safe LLM">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-cyan"><i className="fas fa-plus-square"></i></div>
                        <span className="service-index">05</span>
                      </div>
                      <h4 className="service-title">Healthcare AI</h4>
                      <p className="service-desc">LlamaIndex integrations grounded in medical directories (e.g. WHO guidelines)
                        to query verified diagnostic and operational data.</p>
                      <div className="service-tags">
                        <span className="tag">HIPAA Crypt</span>
                        <span className="tag">WHO Directory</span>
                        <span className="tag">Safe LLM</span>
                      </div>
                    </div>

                    {/*  Service 7  */}
                    <div className="service-glass-card" data-card="12"
                      data-desc="Extract terms, liabilities, execution dates, and performance clauses from commercial lease and vendor contracts."
                      data-tags="PDF Extract,LlamaParser,Risk Score">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-cyan"><i className="fas fa-file-alt"></i></div>
                        <span className="service-index">12</span>
                      </div>
                      <h4 className="service-title">Document AI</h4>
                      <p className="service-desc">Extract terms, liabilities, execution dates, and performance clauses from
                        commercial lease and vendor contracts.</p>
                      <div className="service-tags">
                        <span className="tag">PDF Extract</span>
                        <span className="tag">LlamaParser</span>
                        <span className="tag">Risk Score</span>
                      </div>
                    </div>

                    {/*  Service 8  */}
                    <div className="service-glass-card" data-card="13"
                      data-desc="Scan receipt images and physical cargo documentation to structure line items, taxing values, and vendor names."
                      data-tags="Tesseract,JSON Schema,Invoice Parse">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-cyan"><i className="fas fa-qrcode"></i></div>
                        <span className="service-index">13</span>
                      </div>
                      <h4 className="service-title">OCR Automation</h4>
                      <p className="service-desc">Scan receipt images and physical cargo documentation to structure line items,
                        taxing values, and vendor names.</p>
                      <div className="service-tags">
                        <span className="tag">Tesseract</span>
                        <span className="tag">JSON Schema</span>
                        <span className="tag">Invoice Parse</span>
                      </div>
                    </div>

                    {/*  Service 9  */}
                    <div className="service-glass-card" data-card="14"
                      data-desc="Grounded internal documentation systems that let developers and team members query company databases securely."
                      data-tags="Notion API,Confluence,Secure Key">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-cyan"><i className="fas fa-database"></i></div>
                        <span className="service-index">14</span>
                      </div>
                      <h4 className="service-title">Knowledge Base AI</h4>
                      <p className="service-desc">Grounded internal documentation systems that let developers and team members
                        query company databases securely.</p>
                      <div className="service-tags">
                        <span className="tag">Notion API</span>
                        <span className="tag">Confluence</span>
                        <span className="tag">Secure Key</span>
                      </div>
                    </div>

                    {/*  Service 10  */}
                    <div className="service-glass-card" data-card="15"
                      data-desc="Transcribe corporate audio recordings, extract action items, classify speaker roles, and generate follow-up briefs."
                      data-tags="Whisper API,Speaker Diarization,Auto Briefs">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-cyan"><i className="fas fa-microphone-alt"></i></div>
                        <span className="service-index">15</span>
                      </div>
                      <h4 className="service-title">Meeting Summaries</h4>
                      <p className="service-desc">Transcribe corporate audio recordings, extract action items, classify speaker
                        roles, and generate follow-up briefs.</p>
                      <div className="service-tags">
                        <span className="tag">Whisper API</span>
                        <span className="tag">Speaker Diarization</span>
                        <span className="tag">Auto Briefs</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/*  CATEGORY 3: Sales & Marketing (Green Gradient)  */}
              <div className="saas-category-card theme-green active" data-category="sales">
                <div className="category-card-header">
                  <div className="header-left">
                    <div className="category-icon-box theme-green">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="category-info">
                      <div className="title-row">
                        <h3 className="category-title">Sales & Marketing</h3>
                        <span className="service-badge theme-green">7 Services</span>
                      </div>
                      <p className="category-subtitle">Automate outreach, engagement and marketing workflows to drive growth.
                      </p>
                    </div>
                  </div>
                  <button className="category-expand-btn theme-green" aria-label="Toggle Category">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>

                <div className="category-expand-content">
                  <div className="services-grid-wrapper">

                    {/*  Service 11  */}
                    <div className="service-glass-card" data-card="06"
                      data-desc="Continuous pipeline routing pipelines that qualify leads, assign sales reps, track touchpoints, and forecast monthly pipelines."
                      data-tags="Salesforce Sync,Lead Routing,Metrics Analytics">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-green"><i className="fas fa-funnel-dollar"></i></div>
                        <span className="service-index">06</span>
                      </div>
                      <h4 className="service-title">Sales Automation</h4>
                      <p className="service-desc">Continuous pipeline routing pipelines that qualify leads, assign sales reps,
                        track touchpoints, and forecast monthly pipelines.</p>
                      <div className="service-tags">
                        <span className="tag">Salesforce Sync</span>
                        <span className="tag">Lead Routing</span>
                        <span className="tag">Metrics Analytics</span>
                      </div>
                    </div>

                    {/*  Service 12  */}
                    <div className="service-glass-card" data-card="10"
                      data-desc="Automated personalized drafting agents that construct cold email lists, verify addresses, and write context-aware replies."
                      data-tags="Instantly.ai,GPT Outreach,SMTP Verify">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-green"><i className="fas fa-envelope-open-text"></i></div>
                        <span className="service-index">10</span>
                      </div>
                      <h4 className="service-title">Email Automation</h4>
                      <p className="service-desc">Automated personalized drafting agents that construct cold email lists, verify
                        addresses, and write context-aware replies.</p>
                      <div className="service-tags">
                        <span className="tag">Instantly.ai</span>
                        <span className="tag">GPT Outreach</span>
                        <span className="tag">SMTP Verify</span>
                      </div>
                    </div>

                    {/*  Service 13  */}
                    <div className="service-glass-card" data-card="16"
                      data-desc="Auto-generate customer quotations, scoping grids, and custom service level agreements based on CRM intake fields."
                      data-tags="DocuSign API,Template Build,CRM Hydration">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-green"><i className="fas fa-file-signature"></i></div>
                        <span className="service-index">16</span>
                      </div>
                      <h4 className="service-title">Proposal Generator</h4>
                      <p className="service-desc">Auto-generate customer quotations, scoping grids, and custom service level
                        agreements based on CRM intake fields.</p>
                      <div className="service-tags">
                        <span className="tag">DocuSign API</span>
                        <span className="tag">Template Build</span>
                        <span className="tag">CRM Hydration</span>
                      </div>
                    </div>

                    {/*  Service 14  */}
                    <div className="service-glass-card" data-card="18"
                      data-desc="Outreach lead qualification pipelines that scrape news logs, assess company growth triggers, and launch outreach campaigns."
                      data-tags="Apollo.io,Trigger Scraper,Campaign Auto">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-green"><i className="fas fa-paper-plane"></i></div>
                        <span className="service-index">18</span>
                      </div>
                      <h4 className="service-title">Cold Outreach</h4>
                      <p className="service-desc">Outreach lead qualification pipelines that scrape news logs, assess company
                        growth triggers, and launch outreach campaigns.</p>
                      <div className="service-tags">
                        <span className="tag">Apollo.io</span>
                        <span className="tag">Trigger Scraper</span>
                        <span className="tag">Campaign Auto</span>
                      </div>
                    </div>

                    {/*  Service 15  */}
                    <div className="service-glass-card" data-card="19"
                      data-desc="Monitor prospective profile activity, generate relevant comment drafts, and schedule custom connection request sequences."
                      data-tags="LinkedIn API,Auto Comment,CRM Lead Feed">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-green"><i className="fab fa-linkedin"></i></div>
                        <span className="service-index">19</span>
                      </div>
                      <h4 className="service-title">LinkedIn Automation</h4>
                      <p className="service-desc">Monitor prospective profile activity, generate relevant comment drafts, and
                        schedule custom connection request sequences.</p>
                      <div className="service-tags">
                        <span className="tag">LinkedIn API</span>
                        <span className="tag">Auto Comment</span>
                        <span className="tag">CRM Lead Feed</span>
                      </div>
                    </div>

                    {/*  Service 16  */}
                    <div className="service-glass-card" data-card="20"
                      data-desc="AI social media planners that script marketing posts, generate product layouts, and queue postings across social platforms."
                      data-tags="Buffer API,AI Copy,Image Generator">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-green"><i className="fas fa-ad"></i></div>
                        <span className="service-index">20</span>
                      </div>
                      <h4 className="service-title">Marketing Automation</h4>
                      <p className="service-desc">AI social media planners that script marketing posts, generate product
                        layouts, and queue postings across social platforms.</p>
                      <div className="service-tags">
                        <span className="tag">Buffer API</span>
                        <span className="tag">AI Copy</span>
                        <span className="tag">Image Generator</span>
                      </div>
                    </div>

                    {/*  Service 17  */}
                    <div className="service-glass-card" data-card="21"
                      data-desc="Evaluate incoming customer form details using GPT models to grade budgets, schedules, timelines, and technical match scores."
                      data-tags="GPT-4 Classifier,CRM Scoring,Slack Notify">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-green"><i className="fas fa-filter"></i></div>
                        <span className="service-index">21</span>
                      </div>
                      <h4 className="service-title">Lead Qualification</h4>
                      <p className="service-desc">Evaluate incoming customer form details using GPT models to grade budgets,
                        schedules, timelines, and technical match scores.</p>
                      <div className="service-tags">
                        <span className="tag">GPT-4 Classifier</span>
                        <span className="tag">CRM Scoring</span>
                        <span className="tag">Slack Notify</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/*  CATEGORY 4: Operations & Systems (Orange Gradient)  */}
              <div className="saas-category-card theme-orange active" data-category="operations">
                <div className="category-card-header">
                  <div className="header-left">
                    <div className="category-icon-box theme-orange">
                      <i className="fas fa-cogs"></i>
                    </div>
                    <div className="category-info">
                      <div className="title-row">
                        <h3 className="category-title">Operations & Systems</h3>
                        <span className="service-badge theme-orange">7 Services</span>
                      </div>
                      <p className="category-subtitle">Streamline operations, integrate systems and automate business processes.
                      </p>
                    </div>
                  </div>
                  <button className="category-expand-btn theme-orange" aria-label="Toggle Category">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>

                <div className="category-expand-content">
                  <div className="services-grid-wrapper">

                    {/*  Service 18  */}
                    <div className="service-glass-card" data-card="07"
                      data-desc="Two-way sync configurations mapping customer profiles, transaction records, and communication histories across database silos."
                      data-tags="HubSpot,Pipedrive,Webhooks">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-orange"><i className="fas fa-sync-alt"></i></div>
                        <span className="service-index">07</span>
                      </div>
                      <h4 className="service-title">CRM Automation</h4>
                      <p className="service-desc">Two-way sync configurations mapping customer profiles, transaction records,
                        and communication histories across database silos.</p>
                      <div className="service-tags">
                        <span className="tag">HubSpot</span>
                        <span className="tag">Pipedrive</span>
                        <span className="tag">Webhooks</span>
                      </div>
                    </div>

                    {/*  Service 19  */}
                    <div className="service-glass-card" data-card="08"
                      data-desc="Applicant tracking pipelines that parse incoming resumes, check skill matches, and trigger onboarding sequences."
                      data-tags="Resume Parser,Auto Screener,Workday Hook">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-orange"><i className="fas fa-users-cog"></i></div>
                        <span className="service-index">08</span>
                      </div>
                      <h4 className="service-title">HR Automation</h4>
                      <p className="service-desc">Applicant tracking pipelines that parse incoming resumes, check skill matches,
                        and trigger onboarding sequences.</p>
                      <div className="service-tags">
                        <span className="tag">Resume Parser</span>
                        <span className="tag">Auto Screener</span>
                        <span className="tag">Workday Hook</span>
                      </div>
                    </div>

                    {/*  Service 20  */}
                    <div className="service-glass-card" data-card="11"
                      data-desc="Reconcile bank ledgers against accounting entries, identify anomalies, and sync cash logs across business accounts."
                      data-tags="QuickBooks,Xero API,Ledger Sync">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-orange"><i className="fas fa-file-invoice-dollar"></i></div>
                        <span className="service-index">11</span>
                      </div>
                      <h4 className="service-title">Finance Automation</h4>
                      <p className="service-desc">Reconcile bank ledgers against accounting entries, identify anomalies, and
                        sync cash logs across business accounts.</p>
                      <div className="service-tags">
                        <span className="tag">QuickBooks</span>
                        <span className="tag">Xero API</span>
                        <span className="tag">Ledger Sync</span>
                      </div>
                    </div>

                    {/*  Service 21  */}
                    <div className="service-glass-card" data-card="17"
                      data-desc="Auto-generate client invoices, dispatch reminders for payment dues, and reconcile transactions inside Stripe billing engines."
                      data-tags="Stripe Invoicing,Auto Reminder,Reconcile Loop">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-orange"><i className="fas fa-receipt"></i></div>
                        <span className="service-index">17</span>
                      </div>
                      <h4 className="service-title">Invoice Automation</h4>
                      <p className="service-desc">Auto-generate client invoices, dispatch reminders for payment dues, and
                        reconcile transactions inside Stripe billing engines.</p>
                      <div className="service-tags">
                        <span className="tag">Stripe Invoicing</span>
                        <span className="tag">Auto Reminder</span>
                        <span className="tag">Reconcile Loop</span>
                      </div>
                    </div>

                    {/*  Service 22  */}
                    <div className="service-glass-card" data-card="22"
                      data-desc="Custom n8n workflow loops triggering notifications, validating data payloads, and syncing calendars automatically."
                      data-tags="n8n Loops,Webhooks,JSON Parse">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-orange"><i className="fas fa-network-wired"></i></div>
                        <span className="service-index">22</span>
                      </div>
                      <h4 className="service-title">Workflow Automation</h4>
                      <p className="service-desc">Custom n8n workflow loops triggering notifications, validating data payloads,
                        and syncing calendars automatically.</p>
                      <div className="service-tags">
                        <span className="tag">n8n Loops</span>
                        <span className="tag">Webhooks</span>
                        <span className="tag">JSON Parse</span>
                      </div>
                    </div>

                    {/*  Service 23  */}
                    <div className="service-glass-card" data-card="23"
                      data-desc="FastAPI custom wrappers that unify separate web platforms into consolidated endpoints with robust authorization scopes."
                      data-tags="FastAPI,JWT Auth,Pydantic Schema">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-orange"><i className="fas fa-code"></i></div>
                        <span className="service-index">23</span>
                      </div>
                      <h4 className="service-title">API Automation</h4>
                      <p className="service-desc">FastAPI custom wrappers that unify separate web platforms into consolidated
                        endpoints with robust authorization scopes.</p>
                      <div className="service-tags">
                        <span className="tag">FastAPI</span>
                        <span className="tag">JWT Auth</span>
                        <span className="tag">Pydantic Schema</span>
                      </div>
                    </div>

                    {/*  Service 24  */}
                    <div className="service-glass-card" data-card="24"
                      data-desc="Unify legacy enterprise systems (ERPs, billing databases) with modern LLM agents and web integrations securely."
                      data-tags="Legacy ERP,Database Bridge,AWS Gateway">
                      <div className="service-card-top">
                        <div className="service-icon-box theme-orange"><i className="fas fa-network-wired"></i></div>
                        <span className="service-index">24</span>
                      </div>
                      <h4 className="service-title">Enterprise Integration</h4>
                      <p className="service-desc">Unify legacy enterprise systems (ERPs, billing databases) with modern LLM
                        agents and web integrations securely.</p>
                      <div className="service-tags">
                        <span className="tag">Legacy ERP</span>
                        <span className="tag">Database Bridge</span>
                        <span className="tag">AWS Gateway</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/*  SPECIAL PROMO & DISCOUNT OFFER BANNER (100% EDGE-TO-EDGE TOUCH)  */}
      <section className="ai-promo-banner-section">
        <Link to="/contact" className="ai-promo-banner-link" title="Claim 20% Off Professional Software Development Services">
          <div className="ai-promo-banner-card">
            <img src="/static/images/software_discount_banner.png" alt="Up to 20% Off on Professional Software Development Services" className="ai-promo-banner-img" loading="lazy" />
            <div className="ai-promo-banner-glow"></div>
          </div>
        </Link>
      </section>

      {/*  Service Details Glass Modal  */}
      <div className="solution-modal-overlay" id="solution-modal">
        <div className="solution-modal-card">
          <button className="modal-close-btn" id="modal-close-btn">&times;</button>
          <div className="modal-header">
            <div className="modal-icon" id="modal-icon"></div>
            <div>
              <h3 id="modal-title">Service Title</h3>
              <span className="modal-category-badge" id="modal-category">Category</span>
            </div>
          </div>
          <p className="modal-desc" id="modal-desc">Service description goes here...</p>
          <div className="modal-tags" id="modal-tags"></div>
          <div className="modal-footer">
            <Link to="/contact" className="modal-action-btn">Request Implementation <i
              className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>

      {/*  N8N SHOWCASE (PHASE 13)  */}
      <section className="section-dark-navy" id="n8n-showcase">
        <div className="container">
          <h2 className="section-title">Automated <span className="gradient-text-orange">n8n Workflows</span></h2>
          <p className="section-subtitle">We design corporate pipeline integrations that connect APIs and route enterprise data
            automatically.</p>

          {/*  Flow Metrics  */}
          <div className="flow-metrics-grid">
            <div className="service-card glass-card flow-metric-card">
              <h3 className="gradient-text-orange">160+</h3>
              <p>Hours Saved / Month</p>
            </div>
            <div className="service-card glass-card flow-metric-card">
              <h3 className="gradient-text-blue">350%</h3>
              <p>Average Investment ROI</p>
            </div>
            <div className="service-card glass-card flow-metric-card">
              <h3 className="gradient-text-cyan">&lt; 1.2s</h3>
              <p>Pipeline Trigger Latency</p>
            </div>
          </div>

          {/*  Flow Diagram — Sequential Step-by-Step Pipeline Stream  */}
          <div className="n8n-flow-container">
            <div className="n8n-flow-grid">
              {/*  1. Lead Capture  */}
              <div className="flow-node step-1">
                <div className="flow-icon"><i className="fas fa-filter"></i></div>
                <h4>1. Lead Capture</h4>
                <span className="flow-tag">Webhook Trigger</span>
              </div>
              <div className="flow-connector conn-1"><div className="flow-pulse"></div></div>

              {/*  2. CRM Staging  */}
              <div className="flow-node step-2">
                <div className="flow-icon"><i className="fas fa-sync-alt"></i></div>
                <h4>2. CRM Staging</h4>
                <span className="flow-tag">HubSpot API</span>
              </div>
              <div className="flow-connector conn-2"><div className="flow-pulse"></div></div>

              {/*  3. AI Enrichment  */}
              <div className="flow-node step-3">
                <div className="flow-icon"><i className="fas fa-brain"></i></div>
                <h4>3. AI Enrichment</h4>
                <span className="flow-tag">GPT-4 Classify</span>
              </div>
              <div className="flow-connector conn-3"><div className="flow-pulse"></div></div>

              {/*  4. Outreach Dispatch  */}
              <div className="flow-node step-4">
                <div className="flow-icon"><i className="fab fa-whatsapp"></i></div>
                <h4>4. WhatsApp Out</h4>
                <span className="flow-tag">Meta Cloud</span>
              </div>
              <div className="flow-connector conn-4"><div className="flow-pulse"></div></div>

              {/*  5. Logging  */}
              <div className="flow-node step-5">
                <div className="flow-icon"><i className="fas fa-table"></i></div>
                <h4>5. Logging</h4>
                <span className="flow-tag">Google Sheets</span>
              </div>
              <div className="flow-connector conn-5"><div className="flow-pulse"></div></div>

              {/*  6. Team Alert  */}
              <div className="flow-node step-6">
                <div className="flow-icon"><i className="fab fa-slack"></i></div>
                <h4>6. Team Alert</h4>
                <span className="flow-tag">Slack Channel</span>
              </div>
              <div className="flow-connector conn-6"><div className="flow-pulse"></div></div>

              {/*  7. Analytics  */}
              <div className="flow-node step-7">
                <div className="flow-icon"><i className="fas fa-chart-bar"></i></div>
                <h4>7. Analytics</h4>
                <span className="flow-tag">Retool Sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  PROCESS SECTION (SDLC BASED)  */}
      <section className="section-light-slate" id="process">
        <div className="container">
          <h2 className="section-title">Our SDLC-Based <span className="gradient-text-blue">Process</span></h2>
          <p className="section-subtitle">We follow the Software Development Life Cycle (SDLC) adapted for rapid AI & automation
            engineering.</p>

          <div className="process-container">
            {/*  Scroll progress trace line (Phase 17)  */}
            <div className="process-progress-line"></div>

            {/*  Step 1: Discovery  */}
            <div className="process-step">
              <div className="process-step-marker">1</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 01 - SDLC Discovery</span>
                  <h3>Discovery & Audit</h3>
                  <p>We perform deep operational scans of your workflow, mapping team bottlenecks, identifying repetitive
                    manual tasks, and calculating automation feasibility parameters.</p>
                </div>
              </div>
            </div>

            {/*  Step 2: Research  */}
            <div className="process-step">
              <div className="process-step-marker">2</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 02 - SDLC Research</span>
                  <h3>Technical Research</h3>
                  <p>We analyze tool integration APIs, audit legacy database constraints, inspect authentication flows, and
                    select the optimal tech stack for your systems.</p>
                </div>
              </div>
            </div>

            {/*  Step 3: Strategy  */}
            <div className="process-step">
              <div className="process-step-marker">3</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 03 - SDLC Strategy</span>
                  <h3>Architecture Strategy</h3>
                  <p>We sequence data flow pipelines, establish secure access policies, diagram cloud infrastructure layers,
                    and define operational ROI target metrics.</p>
                </div>
              </div>
            </div>

            {/*  Step 4: Wireframe  */}
            <div className="process-step">
              <div className="process-step-marker">4</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 04 - SDLC Wireframing</span>
                  <h3>System Wireframe</h3>
                  <p>We structure visual layout components, draft backend logic routes, map trigger-action flows, and wire
                    up database schema nodes.</p>
                </div>
              </div>
            </div>

            {/*  Step 5: Design  */}
            <div className="process-step">
              <div className="process-step-marker">5</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 05 - SDLC Design</span>
                  <h3>Premium UI/UX Design</h3>
                  <p>We convert wireframes into sleek, glassmorphic interfaces with custom palettes, rich styling tokens,
                    and micro-interaction curves.</p>
                </div>
              </div>
            </div>

            {/*  Step 6: Development  */}
            <div className="process-step">
              <div className="process-step-marker">6</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 06 - SDLC Development</span>
                  <h3>Development & Code</h3>
                  <p>Our developers code secure full-stack software interfaces, configure custom API gateways, and construct
                    production-ready n8n nodes.</p>
                </div>
              </div>
            </div>

            {/*  Step 7: Testing  */}
            <div className="process-step">
              <div className="process-step-marker">7</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 07 - SDLC Testing</span>
                  <h3>Rigorous Testing</h3>
                  <p>We trigger end-to-end sandbox loads, test error-handling fail-safes, validate webhooks under load, and
                    implement prompt alignment filters.</p>
                </div>
              </div>
            </div>

            {/*  Step 8: Deployment  */}
            <div className="process-step">
              <div className="process-step-marker">8</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 08 - SDLC Deployment</span>
                  <h3>Production Deployment</h3>
                  <p>We deploy final assets onto scalable cloud instances (AWS, Railway, Vercel, Netlify), direct live
                    webhook pipelines, and implement DNS records.</p>
                </div>
              </div>
            </div>

            {/*  Step 9: Monitoring  */}
            <div className="process-step">
              <div className="process-step-marker">9</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 09 - SDLC Monitoring</span>
                  <h3>Continuous Monitoring</h3>
                  <p>We coordinate real-time error logger dispatches, inspect trace parameters, trigger warning alerts on
                    Slack channels, and trace status checks.</p>
                </div>
              </div>
            </div>

            {/*  Step 10: Optimization  */}
            <div className="process-step">
              <div className="process-step-marker">10</div>
              <div className="process-step-content">
                <div className="process-step-card">
                  <span className="process-number">Phase 10 - SDLC Optimization</span>
                  <h3>Iterative Optimization</h3>
                  <p>We tune prompt variables, cache database query structures to minimize latency, adjust resource
                    pipelines, and optimize operational speed limits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  INDUSTRIES WE TRANSFORM (PHASE 15)  */}
      <section className="section-dark-navy" id="industries">
        <div className="container">
          <h2 className="section-title">Industries We <span className="gradient-text-cyan">Transform</span></h2>
          <p className="section-subtitle">We deploy custom workflow automations and B2B software solutions tailored to
            sector-specific bottlenecks.</p>

          <div className="industry-layout-container">
            {/*  Sidebar Navigation (15 Industries)  */}
            <div className="industry-sidebar">
              <button className="industry-tab-btn active" data-industry="healthcare"><i className="fas fa-notes-medical"></i>
                Healthcare</button>
              <button className="industry-tab-btn" data-industry="restaurants"><i className="fas fa-utensils"></i>
                Restaurants</button>
              <button className="industry-tab-btn" data-industry="manufacturing"><i className="fas fa-industry"></i>
                Manufacturing</button>
              <button className="industry-tab-btn" data-industry="education"><i className="fas fa-graduation-cap"></i>
                Education</button>
              <button className="industry-tab-btn" data-industry="finance"><i className="fas fa-wallet"></i> Finance</button>
              <button className="industry-tab-btn" data-industry="realestate"><i className="fas fa-building"></i> Real
                Estate</button>
              <button className="industry-tab-btn" data-industry="legal"><i className="fas fa-balance-scale"></i> Legal</button>
              <button className="industry-tab-btn" data-industry="construction"><i className="fas fa-hard-hat"></i>
                Construction</button>
              <button className="industry-tab-btn" data-industry="automotive"><i className="fas fa-car"></i> Automotive</button>
              <button className="industry-tab-btn" data-industry="hospitality"><i className="fas fa-hotel"></i> Hospitality</button>
              <button className="industry-tab-btn" data-industry="retail"><i className="fas fa-shopping-bag"></i> Retail</button>
              <button className="industry-tab-btn" data-industry="jewellery"><i className="fas fa-gem"></i> Jewellery</button>
              <button className="industry-tab-btn" data-industry="government"><i className="fas fa-university"></i>
                Government</button>
              <button className="industry-tab-btn" data-industry="startups"><i className="fas fa-rocket"></i> Startups</button>
              <button className="industry-tab-btn" data-industry="enterprise"><i className="fas fa-sitemap"></i> Enterprise</button>
            </div>

            {/*  Detail Cards Container  */}
            <div className="industry-detail-container">

              {/*  1. Healthcare  */}
              <div className="service-card glass-card industry-detail-card active" id="ind-healthcare">
                <div className="ind-detail-header">
                  <i className="fas fa-notes-medical"></i>
                  <h3>Healthcare & MedTech</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Manual intake data entry errors.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Patient charting backlog delays.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> HIPAA regulatory compliance friction.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> HIPAA-secure API bridges.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Grounded clinical RAG chatbots.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Automated diagnostic data parsers.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Patient Intake Form Submit
                    ➔ HIPAA-secure Data Encryption ➔ Auto-sync with local EHR database system ➔ Automated Slack clinical
                    staffing assignment.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>15+ working hours saved weekly per nurse practitioner; 40% scheduling overhead reduction.</p>
                </div>
              </div>

              {/*  2. Restaurants  */}
              <div className="service-card glass-card industry-detail-card" id="ind-restaurants">
                <div className="ind-detail-header">
                  <i className="fas fa-utensils"></i>
                  <h3>Restaurants & Food Services</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Dine-in ordering delay bottlenecks during rush
                        hours.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Order staging miscommunications between cashiers
                        and kitchen.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Manual invoice matching lags.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Real-time WebSocket table booking and ordering.
                      </li>
                      <li><i className="fas fa-circle-notch text-light"></i> Synchronized POS and kitchen display dashboards.
                      </li>
                      <li><i className="fas fa-circle-notch text-light"></i> Automatic Stripe inventory reconcile syncs.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Table QR Order checkout
                    scan ➔ Immediate WebSocket dispatch to kitchen display ➔ Auto-reconcile ingredients catalog ➔ Auto
                    Stripe receipt dispatcher.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>35% dinner table rotation speed boost; 100% order synchronization accuracy.</p>
                </div>
              </div>

              {/*  3. Manufacturing  */}
              <div className="service-card glass-card industry-detail-card" id="ind-manufacturing">
                <div className="ind-detail-header">
                  <i className="fas fa-industry"></i>
                  <h3>Manufacturing & Logistics</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Raw materials tracking bottlenecks.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Equipment maintenance diagnostic delays.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Lack of supplier database sync integration.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> n8n inventory tracking webhook loops.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Automated sensor anomaly triggers.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Supplier ERP API bridges.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Sensor reports machine
                    vibration threshold exceed ➔ Auto-trigger n8n maintenance ticket ➔ Query local inventory for replacement
                    parts ➔ Alert technician on Slack.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>25% reduction in production downtime; 4.5x faster purchase order cycles.</p>
                </div>
              </div>

              {/*  4. Education  */}
              <div className="service-card glass-card industry-detail-card" id="ind-education">
                <div className="ind-detail-header">
                  <i className="fas fa-graduation-cap"></i>
                  <h3>Education & EdTech</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> High self-paced platform course dropout rates.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Delayed code script evaluations.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Static curriculums failing to adapt to student
                        skills.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> OpenRouter LLM study guides.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Isolated Docker script code execution sandboxes.
                      </li>
                      <li><i className="fas fa-circle-notch text-light"></i> Adaptive test grading analytics.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Student script submission ➔
                    Spin up isolated Docker sandbox container ➔ Execute script logic ➔ Pass stdout traces to OpenRouter API
                    ➔ Returnadaptive hints.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>45% graduation retention increase; less than 3s execution feedback loop speeds.</p>
                </div>
              </div>

              {/*  5. Finance  */}
              <div className="service-card glass-card industry-detail-card" id="ind-finance">
                <div className="ind-detail-header">
                  <i className="fas fa-wallet"></i>
                  <h3>Finance & Accounting</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Time-consuming manual bank ledger reconciliations.
                      </li>
                      <li><i className="fas fa-circle-notch text-light"></i> Delayed expense report compliance audits.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Billing errors on legacy accounting tools.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Automated QuickBooks/Xero ledger sync.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> OCR anomaly detection expense checkers.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Stripe invoicing automated loops.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Retrieve bank API
                    transaction statements daily ➔ Cross-reference records in database ➔ Auto-reconcile match in QuickBooks
                    ➔ Flag mismatch to Slack accounting channel.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>90% accounting entry overhead savings; monthly close cycle reduced from 10 days to 2.</p>
                </div>
              </div>

              {/*  6. Real Estate  */}
              <div className="service-card glass-card industry-detail-card" id="ind-realestate">
                <div className="ind-detail-header">
                  <i className="fas fa-building"></i>
                  <h3>Real Estate & Property Management</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Manual lease contract evaluations consume hours.
                      </li>
                      <li><i className="fas fa-circle-notch text-light"></i> Inbound property viewing lead delays.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Static catalog updates across directories.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> LlamaParser lease analyzer agents.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Auto SMS viewing appointment schedulers.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Central database catalog syndication.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Lease PDF uploaded to
                    portal ➔ LlamaParser extracts execution dates and rates ➔ DocuSign templates generate automatically ➔
                    Alert property manager.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>80% lease contract auditing speed increase; 50% increase in sales-qualified pipelines.</p>
                </div>
              </div>

              {/*  7. Legal  */}
              <div className="service-card glass-card industry-detail-card" id="ind-legal">
                <div className="ind-detail-header">
                  <i className="fas fa-balance-scale"></i>
                  <h3>Legal Services</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Hours spent researching case precedents manually.
                      </li>
                      <li><i className="fas fa-circle-notch text-light"></i> Proposal and service level agreement draft delays.
                      </li>
                      <li><i className="fas fa-circle-notch text-light"></i> Missing regulatory compliance details.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Semantic vector search case search tools.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Proposal auto-generation pipelines.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> LLM compliance checkers.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>New case brief upload ➔
                    Retrieve matching case precedents from vector databases ➔ Auto-populate argument outline templates ➔
                    Sync draft docs to cloud.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>70% reduction in research times; 100% contract compliance index score validation.</p>
                </div>
              </div>

              {/*  8. Construction  */}
              <div className="service-card glass-card industry-detail-card" id="ind-construction">
                <div className="ind-detail-header">
                  <i className="fas fa-hard-hat"></i>
                  <h3>Construction & Infrastructure</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Uncoordinated site reports and material receipt
                        delays.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Contractor scheduling conflicts.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Manual accounting for onsite material deliveries.
                      </li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> OCR-based material receipt parsers.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Automated schedule conflict solvers.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Site check-in database portals.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Material receipt image
                    upload ➔ Tesseract OCR structures cost details ➔ Auto-update construction ledger spreadsheet ➔ Ping
                    manager for sign-off.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>30% speedup in project budgeting cycles; zero manual receipt entry errors.</p>
                </div>
              </div>

              {/*  9. Automotive  */}
              <div className="service-card glass-card industry-detail-card" id="ind-automotive">
                <div className="ind-detail-header">
                  <i className="fas fa-car"></i>
                  <h3>Automotive & Mobility</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Offline vehicle and charging specifications
                        catalogs.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Slow distributor dealer application pipelines.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Outdated fleet mapping locator coordinates.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Dynamic specs search catalogs.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Automated dealer onboarding CRM staging.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Google Maps API charger coordinates cluster.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>User location query search
                    ➔ Maps API marker matching station capacity ➔ station detail card overlay ➔ Auto routing details
                    dispatch to smartphone.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>98% catalog responsiveness score; 400ms locator mapping query speeds.</p>
                </div>
              </div>

              {/*  10. Hospitality  */}
              <div className="service-card glass-card industry-detail-card" id="ind-hospitality">
                <div className="ind-detail-header">
                  <i className="fas fa-hotel"></i>
                  <h3>Hospitality & Tourism</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Inbound booking query backlogs.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Guest checkout billing coordination delays.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Manual check-in log processing lags.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Conversational booking chatbots.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Stripe invoicing automation loops.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Auto check-in notification dispatches.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Inbound WhatsApp guest
                    message ➔ GPT checks room availability datasets ➔ Auto-populate check-in link ➔ Dispatch Stripe booking
                    invoice.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>50% front-desk task automation index; less than 1.2s response triggers.</p>
                </div>
              </div>

              {/*  11. Retail  */}
              <div className="service-card glass-card industry-detail-card" id="ind-retail">
                <div className="ind-detail-header">
                  <i className="fas fa-shopping-bag"></i>
                  <h3>Retail & E-Commerce</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Product catalog inventory sync gaps across
                        databases.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Manual copy editing for seasonal campaigns.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> High customer ticket response delays.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Shopify to local ERP API sync pipelines.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Stable Diffusion visual graphic generators.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Multi-channel customer service bots.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>New item SKU update ➔ SDXL
                    model renders aesthetic backdrop graphic ➔ GPT writes product descriptions ➔ Shopify catalog pushes
                    go-live.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>90% visual photoshoot budget savings; 4.2x faster content testing velocities.</p>
                </div>
              </div>

              {/*  12. Jewellery  */}
              <div className="service-card glass-card industry-detail-card" id="ind-jewellery">
                <div className="ind-detail-header">
                  <i className="fas fa-gem"></i>
                  <h3>Luxury Jewellery</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Default layouts degrading the brand's custom lookup
                        value.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> High e-commerce page visitor bounce rates.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Manual intake records for bespoke jewelry orders.
                      </li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Premium visual showcase portals with parallax
                        reveals.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Double-tap zoom specification details.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> WhatsApp custom order intake routers.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Diamond catalog item select
                    ➔ Framer Motion visual parallax reveal ➔ Click-to-quote routes client details directly to WhatsApp sales
                    support.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>25% average session duration boost; 30% increase in purchase queries.</p>
                </div>
              </div>

              {/*  13. Government  */}
              <div className="service-card glass-card industry-detail-card" id="ind-government">
                <div className="ind-detail-header">
                  <i className="fas fa-university"></i>
                  <h3>Government & Public Sector</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Citizens request backlogs across agency
                        departments.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Legacy data base silos preventing records matching.
                      </li>
                      <li><i className="fas fa-circle-notch text-light"></i> High data access security risks.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Auto form classification and routing systems.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Encrypted API wrapper gateways.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> JWT token authorization setups.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Application submit ➔
                    Encrypted API validation check ➔ Auto form category score ➔ Secure database transfer alert to local
                    department.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>65% citizens query processing speed increase; 100% data audit safety index.</p>
                </div>
              </div>

              {/*  14. Startups  */}
              <div className="service-card glass-card industry-detail-card" id="ind-startups">
                <div className="ind-detail-header">
                  <i className="fas fa-rocket"></i>
                  <h3>Startups & SaaS Groups</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> High outbound SDR overhead budgets.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Lead qualification pipeline latency.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Sales appointment booking friction.</li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Outbound conversational AI calling bots.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Continuous prospect scraper pipelines.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Calendly sync intake booking widgets.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Lead list scrape ➔ AI voice
                    bot qualifications check ➔ Objections logic resolves query ➔ Calendly locked slot ➔ Slack notifications
                    alert.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>300% sales outreach volume scaling; 3.5x faster outbound pipeline velocity.</p>
                </div>
              </div>

              {/*  15. Enterprise  */}
              <div className="service-card glass-card industry-detail-card" id="ind-enterprise">
                <div className="ind-detail-header">
                  <i className="fas fa-sitemap"></i>
                  <h3>Enterprise Corporates</h3>
                </div>
                <div className="ind-detail-grid">
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-exclamation-triangle orange"></i> Pain Points</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Isolated legacy ERP databases.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Cross-department information transfer lags.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Compliance and data protection vulnerabilities.
                      </li>
                    </ul>
                  </div>
                  <div className="ind-detail-box">
                    <h4><i className="fas fa-check-circle blue"></i> Solutions</h4>
                    <ul>
                      <li><i className="fas fa-circle-notch text-light"></i> Robust FastAPI wrappers.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> Corporate n8n sync loops.</li>
                      <li><i className="fas fa-circle-notch text-light"></i> AWS database bridge secure gateways.</li>
                    </ul>
                  </div>
                </div>
                <div className="ind-detail-box" style={{ "marginBottom": "30px" }}>
                  <h4><i className="fas fa-code-branch cyan"></i> Example Automation</h4>
                  <p style={{ "fontSize": "0.95rem", "color": "var(--text-secondary)", "lineHeight": "1.6" }}>Retrieve records from
                    legacy databases hourly ➔ Parse schema payloads ➔ Push clean entries via FastAPI wrapped endpoints ➔
                    Sync AWS cloud logs.</p>
                </div>
                <div className="roi-badge">
                  <h4>Expected ROI</h4>
                  <p>160+ working hours saved monthly per pipeline; 100% database sync accuracy.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/*  WHY CHOOSE US  */}
      <section className="section-light-slate" id="why">
        <div className="container">
          <h2 className="section-title">Why Business Owners Choose <span className="gradient-text-orange">APITIDE</span></h2>
          <p className="section-subtitle">We design smart, scalable digital architectures that provide businesses a distinct
            competitive edge.</p>

          {/*  Premium Comparison Table (Phase 16)  */}
          <div className="comparison-table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Operational Dimension</th>
                  <th>Traditional Development Agency</th>
                  <th className="apitide-column">Apitide AI Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="dimension-title">Operations Scale</span>
                    <span className="dimension-subtitle">How work is executed</span>
                  </td>
                  <td className="traditional-cell"><i className="fas fa-times-circle traditional-cross"></i> Manual work, human
                    bottlenecking, and slow input speeds.</td>
                  <td className="apitide-cell"><i className="fas fa-check-circle apitide-check"></i> High-velocity automation
                    running infinitely on autopilot.</td>
                </tr>
                <tr>
                  <td>
                    <span className="dimension-title">System Architecture</span>
                    <span className="dimension-subtitle">The backend foundation</span>
                  </td>
                  <td className="traditional-cell"><i className="fas fa-times-circle traditional-cross"></i> Static websites, rigid
                    templates, and non-dynamic displays.</td>
                  <td className="apitide-cell"><i className="fas fa-check-circle apitide-check"></i> Intelligent AI platforms,
                    custom vector indexes, and active context retrieval.</td>
                </tr>
                <tr>
                  <td>
                    <span className="dimension-title">Customer Support</span>
                    <span className="dimension-subtitle">Inbound ticket handling</span>
                  </td>
                  <td className="traditional-cell"><i className="fas fa-times-circle traditional-cross"></i> Slow support ticket
                    backlogs, weekend gaps, and capacity ceilings.</td>
                  <td className="apitide-cell"><i className="fas fa-check-circle apitide-check"></i> Autonomous AI Agents answering
                    objections and logs under 800ms.</td>
                </tr>
                <tr>
                  <td>
                    <span className="dimension-title">Resource Deployment</span>
                    <span className="dimension-subtitle">Productivity capabilities</span>
                  </td>
                  <td className="traditional-cell"><i className="fas fa-times-circle traditional-cross"></i> Overpaid human
                    employees, SDR turnover, and resource limits.</td>
                  <td className="apitide-cell"><i className="fas fa-check-circle apitide-check"></i> Scalable digital workforce
                    running parallel cron loops 24/7.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/*  TECHNOLOGY ECOSYSTEM (MATCHING REFERENCE TICKER ROW 100%)  */}
      <section className="section-dark-navy" id="tech-ecosystem" style={{ "padding": "75px 0", "overflow": "hidden", "position": "relative", "background": "linear-gradient(180deg, #050C1A 0%, #0B172E 50%, #050C1A 100%)", "borderTop": "1px solid rgba(255,255,255,0.05)", "borderBottom": "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ "textAlign": "center", "marginBottom": "30px" }}>
          <h2 className="section-title">Our Technical <span className="gradient-text-cyan">Ecosystem</span></h2>
          <p className="section-subtitle">We build automation networks and custom software using industry-standard engineering tools.</p>
        </div>

        <div className="tech-marquee-container">
          {/*  Track 1: Smooth Infinite Running Row  */}
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee-track">
              {/*  Exact Items from Reference Image  */}
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" alt="Google" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1500%) hue-rotate(200deg)' }} /> <span>Google</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/airtable.svg" alt="Airtable" className="si-logo" style={{ filter: 'invert(60%) sepia(80%) saturate(1500%) hue-rotate(170deg)' }} /> <span>Airtable</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(2000%) hue-rotate(90deg)' }} /> <span>WhatsApp</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg" alt="HubSpot" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(2500%) hue-rotate(340deg)' }} /> <span>HubSpot</span></div>
              <div className="tech-marquee-item"><i className="fab fa-aws" style={{ "color": "#FF9900", "fontSize": "1.5rem" }}></i> <span>AWS</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" alt="Firebase" className="si-logo" style={{ filter: 'invert(80%) sepia(80%) saturate(1500%) hue-rotate(350deg)' }} /> <span>Firebase</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" alt="Stripe" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(210deg)' }} /> <span>Stripe</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg" alt="Shopify" className="si-logo" style={{ filter: 'invert(60%) sepia(80%) saturate(1000%) hue-rotate(45deg)' }} /> <span>Shopify</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" alt="n8n" className="si-logo" style={{ filter: 'invert(35%) sepia(80%) saturate(2500%) hue-rotate(325deg)' }} /> <span>n8n</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg" alt="Zapier" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2500%) hue-rotate(355deg)' }} /> <span>Zapier</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="OpenAI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> <span>OpenAI</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="si-logo" style={{ filter: 'invert(65%) sepia(80%) saturate(1000%) hue-rotate(155deg)' }} /> <span>React</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" alt="Next.js" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> <span>Next.js</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="si-logo" style={{ filter: 'invert(45%) sepia(60%) saturate(1000%) hue-rotate(170deg)' }} /> <span>Python</span></div>

              {/*  Duplicate Set for Smooth Loop  */}
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" alt="Google" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(1500%) hue-rotate(200deg)' }} /> <span>Google</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/airtable.svg" alt="Airtable" className="si-logo" style={{ filter: 'invert(60%) sepia(80%) saturate(1500%) hue-rotate(170deg)' }} /> <span>Airtable</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(2000%) hue-rotate(90deg)' }} /> <span>WhatsApp</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg" alt="HubSpot" className="si-logo" style={{ filter: 'invert(50%) sepia(80%) saturate(2500%) hue-rotate(340deg)' }} /> <span>HubSpot</span></div>
              <div className="tech-marquee-item"><i className="fab fa-aws" style={{ "color": "#FF9900", "fontSize": "1.5rem" }}></i> <span>AWS</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" alt="Firebase" className="si-logo" style={{ filter: 'invert(80%) sepia(80%) saturate(1500%) hue-rotate(350deg)' }} /> <span>Firebase</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" alt="Stripe" className="si-logo" style={{ filter: 'invert(40%) sepia(90%) saturate(2000%) hue-rotate(210deg)' }} /> <span>Stripe</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg" alt="Shopify" className="si-logo" style={{ filter: 'invert(60%) sepia(80%) saturate(1000%) hue-rotate(45deg)' }} /> <span>Shopify</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" alt="n8n" className="si-logo" style={{ filter: 'invert(35%) sepia(80%) saturate(2500%) hue-rotate(325deg)' }} /> <span>n8n</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg" alt="Zapier" className="si-logo" style={{ filter: 'invert(45%) sepia(90%) saturate(2500%) hue-rotate(355deg)' }} /> <span>Zapier</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="OpenAI" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> <span>OpenAI</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="si-logo" style={{ filter: 'invert(65%) sepia(80%) saturate(1000%) hue-rotate(155deg)' }} /> <span>React</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" alt="Next.js" className="si-logo" style={{ filter: 'brightness(0) invert(1)' }} /> <span>Next.js</span></div>
              <div className="tech-marquee-item"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="si-logo" style={{ filter: 'invert(45%) sepia(60%) saturate(1000%) hue-rotate(170deg)' }} /> <span>Python</span></div>
            </div>
          </div>
        </div>
      </section>

      {/*  TRUST BUILDERS & TESTIMONIALS (PHASE 20)  */}
      <section className="section-light-slate" id="testimonials">
        <div className="container" style={{ "textAlign": "center" }}>




          {/*  Client Testimonials & Success Stories (4 Square Cards Auto-Slider)  */}
          <h2 className="section-title" style={{ "marginTop": "40px" }}>Client <span className="gradient-text-blue">Success</span> Stories</h2>
          <p className="section-subtitle">Read detailed operational reviews from business leaders who automated tasks with us.</p>

          <div className="testimonials-slider-wrapper">
            <div className="testimonials-slider-track" id="testimonialTrack">
              {/*  Testimonial 1  */}
              <div className="testimonial-card glass-card testimonial-card-square">
                <div className="stars-row">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="testimonial-quote">"APITIDE completely transformed our interstate transport operations. Their custom Django & n8n reservation portal automated lead processing across 14 hubs, boosting online bookings by 150%."</p>
                <div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" style={{ "background": "linear-gradient(135deg, #06B6D4, #2563EB)" }}>AS</div>
                    <div className="testimonial-meta">
                      <h4>Abhimanyu Singh</h4>
                      <p>Managing Director, Rajputana Roadlines</p>
                    </div>
                  </div>
                  <Link to="/projects#rajputana-modal" className="story-link">Read Full Case Study <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>

              {/*  Testimonial 2  */}
              <div className="testimonial-card glass-card testimonial-card-square">
                <div className="stars-row">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="testimonial-quote">"Their grounded RAG vector models cut clinical support query latency to sub-second speeds while eliminating hallucinations by 95% for 40,000+ patients. Extremely secure WHO lookup."</p>
                <div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" style={{ "background": "linear-gradient(135deg, #F97316, #EF4444)" }}>ML</div>
                    <div className="testimonial-meta">
                      <h4>Marcus Lindqvist</h4>
                      <p>VP of Engineering, Nordic Health Tech</p>
                    </div>
                  </div>
                  <Link to="/projects#rag-modal" className="story-link">Read Full Case Study <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>

              {/*  Testimonial 3  */}
              <div className="testimonial-card glass-card testimonial-card-square">
                <div className="stars-row">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="testimonial-quote">"We automated our entire multi-channel lead enrichment CRM pipeline with APITIDE, scaling daily qualified prospect routing from 100 to 2,500 accounts effortlessly."</p>
                <div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" style={{ "background": "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}>SJ</div>
                    <div className="testimonial-meta">
                      <h4>Sarah Jenkins</h4>
                      <p>Chief Operating Officer, Apex Global Logistics</p>
                    </div>
                  </div>
                  <Link to="/projects#saas-feeder-modal" className="story-link">Read Full Case Study <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>

              {/*  Testimonial 4  */}
              <div className="testimonial-card glass-card testimonial-card-square">
                <div className="stars-row">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="testimonial-quote">"APITIDE built our real-time AI outbound voice and email response engine using Twilio, OpenAI, and FastAPI, boosting sales team appointment conversion rate by 42% in month 1."</p>
                <div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" style={{ "background": "linear-gradient(135deg, #10B981, #06B6D4)" }}>DK</div>
                    <div className="testimonial-meta">
                      <h4>David Kravitz</h4>
                      <p>CEO & Co-Founder, SaaSScale B2B</p>
                    </div>
                  </div>
                  <Link to="/projects" className="story-link">Read Full Case Study <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>

            {/*  Slider Controls  */}
            <div className="testimonial-slider-controls">
              <button className="slider-arrow prev" id="sliderPrevBtn" aria-label="Previous Slide"><i className="fas fa-chevron-left"></i></button>
              <div className="slider-dots" id="testimonialDots"></div>
              <button className="slider-arrow next" id="sliderNextBtn" aria-label="Next Slide"><i className="fas fa-chevron-right"></i></button>
            </div>
          </div>

        </div>
      </section>





      {/*  FAQ SECTION  */}
      <section className="section-dark-navy" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked <span className="gradient-text-blue">Questions</span></h2>
          <p className="section-subtitle">Quick answers to common inquiries about our SDLC workflow, integrations, and data
            security.</p>

          <div className="faq-list">
            {/*  FAQ 1  */}
            <div className="faq-item">
              <div className="faq-question">
                <span>What primary technologies and tools do you use?</span>
                <i className="fas fa-chevron-down faq-icon"></i>
              </div>
              <div className="faq-answer">
                <p>We build our core workflow pipelines in n8n, Zapier, and custom Python scripts. Our full-stack web
                  architectures are built on modern technologies like React, Next.js, FastAPI, Node.js, and Django. For AI
                  systems, we utilize vector databases (Pinecone, ChromaDB), OpenAI API models, and HIPAA-compliant private
                  cloud deployments.</p>
              </div>
            </div>

            {/*  FAQ 2  */}
            <div className="faq-item">
              <div className="faq-question">
                <span>How does your SDLC process translate to AI engineering?</span>
                <i className="fas fa-chevron-down faq-icon"></i>
              </div>
              <div className="faq-answer">
                <p>We map traditional Software Development Life Cycle (SDLC) phases (Planning, Architecture, Code, QA,
                  Deploy, Maintain) directly into our sprints. For AI applications, this guarantees structured requirements
                  gathering, data model designs, payload verification, strict guardrails testing (to prevent
                  hallucinations), and continuous monitoring.</p>
              </div>
            </div>

            {/*  FAQ 3  */}
            <div className="faq-item">
              <div className="faq-question">
                <span>How do you handle data privacy and security constraints?</span>
                <i className="fas fa-chevron-down faq-icon"></i>
              </div>
              <div className="faq-answer">
                <p>Security is baked into our system designs from day one. We use secure environment variable masking for
                  credentials, configure local isolated database instances, and comply with HIPAA/GDPR standards. We verify
                  all integration routes to ensure no proprietary customer data leaks into public LLM training sets.</p>
              </div>
            </div>

            {/*  FAQ 4  */}
            <div className="faq-item">
              <div className="faq-question">
                <span>How long does a typical automation project take?</span>
                <i className="fas fa-chevron-down faq-icon"></i>
              </div>
              <div className="faq-answer">
                <p>Most automation projects are delivered in under 14 days. A simple n8n workflow integration typically
                  takes 3–7 days. A full-stack web application or complex multi-system integration typically takes 4–8 weeks
                  depending on scope, integrations required, and feedback cycles. We provide a detailed timeline estimate
                  after our initial discovery call.</p>
              </div>
            </div>

            {/*  FAQ 5  */}
            <div className="faq-item">
              <div className="faq-question">
                <span>Do you offer ongoing support after project delivery?</span>
                <i className="fas fa-chevron-down faq-icon"></i>
              </div>
              <div className="faq-answer">
                <p>Yes, absolutely. All delivered projects include a 30-day post-launch support window for bug fixes and
                  minor adjustments at no additional cost. For ongoing maintenance, monitoring, and iterative improvements,
                  we offer our monthly retainer plans (Starter, Growth, Enterprise) which include dedicated Slack channels,
                  weekly audits, and SLA-backed response times.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/*  FOOTER  */}
    </main>
  );
}
