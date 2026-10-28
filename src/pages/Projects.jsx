import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const PORTFOLIO_PROJECTS = [
  // ── 1. MAIN SECTION: WEB APPS & CLOUD PLATFORMS ──
  {
    id: 'hotelmantri',
    title: 'Hotel Mantri – Hospitality & Direct Booking Platform',
    subtitle: 'Full-stack hotel management, direct guest reservation portal & AIOSell channel sync',
    category: 'Hospitality Web App',
    categoryGroup: 'apps',
    icon: '🏨',
    image: '/static/images/highlights/hotelmantri-thumbnail-1200x800.jpg',
    badge: 'Web App',
    description: 'A modern, high-performance web platform for luxury hotels and guest houses featuring direct room bookings, automated inventory sync with AIOSell channel manager, and WhatsApp concierge.',
    problem: 'Hotel Mantri struggled with steep OTA commissions (18–25%), scattered room inventories across multiple booking engines, and manual WhatsApp booking requests resulting in double-bookings and revenue leakage.',
    solution: 'Engineered a high-converting guest-facing direct booking web application integrated with AIOSell multi-channel sync, instant payment gateway, and an automated WhatsApp bot for reservations and room service.',
    results: [
      { val: '+180%', label: 'Increase in direct non-commission guest bookings' },
      { val: '100%', label: 'Real-time inventory sync across OTAs eliminating double-bookings' },
      { val: '<1.2s', label: 'Average page load speed for guest reservation portal' },
      { val: '65%', label: 'Routine guest inquiries handled autonomously via WhatsApp bot' }
    ],
    tech: ['Django', 'React.js', 'AIOSell API', 'WhatsApp Business API', 'PostgreSQL', 'TailwindCSS']
  },
  {
    id: 'nowfix',
    title: 'NowFix – On-Demand Home Services Marketplace',
    subtitle: 'Dual-sided service booking web platform connecting homeowners with certified technicians',
    category: 'On-Demand Web App',
    categoryGroup: 'apps',
    icon: '🔧',
    image: '/static/images/highlights/nowfix-thumbnail-1200x800.jpg',
    badge: 'Marketplace App',
    description: 'An on-demand home repair and servicing marketplace web platform featuring dynamic service scheduling, transparent tiered pricing, live technician dispatch, and instant payments.',
    problem: 'Homeowners faced opaque pricing and unpredictable technician arrival times for plumbing, electrical, and appliance repairs, while service providers struggled with scheduling and job routing.',
    solution: 'Engineered a dual-sided web platform with instant quote calculation, automated nearest-technician dispatch, service tracking, and escrow-backed payment settlement.',
    results: [
      { val: '<15m', label: 'Average technician match & dispatch time' },
      { val: '4.8/5', label: 'Verified customer review rating across 12,000+ bookings' },
      { val: '99.9%', label: 'Platform uptime with high concurrency handling' },
      { val: '3.4x', label: 'Repeat booking rate through verified service warranty' }
    ],
    tech: ['React.js', 'Node.js', 'Express', 'WebSockets', 'Stripe API', 'Google Maps API']
  },
  {
    id: 'visionme',
    title: 'VisionME – Multi-Tenant SaaS & Visual Intelligence Platform',
    subtitle: 'Cloud workspace with real-time analytics, visual reporting & tenant isolation',
    category: 'Enterprise SaaS App',
    categoryGroup: 'apps',
    icon: '👁️',
    image: '/static/images/highlights/visionme-thumbnail-1200x800.jpg',
    badge: 'Enterprise SaaS',
    description: 'An enterprise multi-tenant web application featuring automated visual intelligence analytics, team collaboration workspaces, custom client domains, and role-based access control.',
    problem: 'Enterprises were bogged down by single-tenant deployments that required separate infrastructure maintenance, manual onboarding, and fragmented reporting.',
    solution: 'Architected a high-scale multi-tenant SaaS web application with isolated schema security, sub-second visual intelligence dashboards, and self-serve team provisioning.',
    results: [
      { val: '10x', label: 'Faster enterprise tenant onboarding' },
      { val: '99.99%', label: 'High availability cloud infrastructure SLA' },
      { val: '70%', label: 'Reduction in operational overhead per enterprise client' },
      { val: '<250ms', label: 'API & dashboard query latency' }
    ],
    tech: ['React.js', 'Python / FastAPI', 'PostgreSQL Multi-Tenant', 'Docker', 'AWS Cloud']
  },
  {
    id: 'tailorez',
    title: 'TailorEZ – Bespoke Tailoring & Garment Customization App',
    subtitle: 'Digital fitting room, custom garment 3D configurator & studio order workflow',
    category: 'Custom Tailoring Web App',
    categoryGroup: 'apps',
    icon: '✂️',
    image: '/static/images/highlights/tailorez-thumbnail-1200x800.jpg',
    badge: 'Tailoring Platform',
    isEcomm: true,
    description: 'A bespoke apparel e-commerce web platform where customers customize fabrics, collars, cuffs, and measurements with precision fit profiles and doorstep alteration tracking.',
    problem: 'Bespoke tailoring was restricted to physical stores due to complex measurement captures and high alteration return rates in online clothing orders.',
    solution: 'Built an interactive step-by-step visual garment customizer, digital measurement locker with fit algorithms, tailor assignment workflow, and direct-to-doorstep fulfillment.',
    results: [
      { val: '2.4x', label: 'Higher average order value compared to standard fashion ecomm' },
      { val: '<4%', label: 'Alteration return rate due to guided fit profiling' },
      { val: '45k+', label: 'Custom orders fulfilled across 8 metro cities' },
      { val: '98%', label: 'Customer satisfaction with fabric swatches & doorstep fitting' }
    ],
    tech: ['Next.js / React', 'TailwindCSS', 'Custom 3D Configurator', 'Razorpay / Stripe', 'Node.js']
  },

  // ── 2. AI & AUTOMATIONS ──
  {
    id: 'ai-cold-call-mail',
    title: 'AI Cold Call & Outbound Mail Agent',
    subtitle: 'Autonomous voice AI dialing agent & hyper-personalized multi-stage email sequencer',
    category: 'AI Voice & Outreach Agent',
    categoryGroup: 'ai',
    icon: '📞',
    image: '/static/images/ai/ai-cold-call-mail.jpg',
    badge: 'AI Sales Agent',
    description: 'An autonomous multi-channel AI outbound agent that dials prospect lists, conducts natural conversational qualification calls, handles objections, and triggers tailored multi-stage email sequences.',
    problem: 'Sales teams were bogged down by manual phone prospecting lists, high dial fatigue, low live connection rates, and tedious CRM data entry after every outbound call.',
    solution: 'Engineered a sub-500ms ultra-low latency voice agent with dynamic objection handling, real-time speech synthesis, and automated n8n webhook email workflows synced with HubSpot and Salesforce.',
    results: [
      { val: '12x', label: 'More outbound conversations conducted per day' },
      { val: '42%', label: 'Qualified lead booking conversion rate' },
      { val: '<480ms', label: 'Average voice latency for conversational realism' },
      { val: '80%', label: 'Reduction in manual SDR prospecting hours' }
    ],
    tech: ['Python / FastAPI', 'Vapi / ElevenLabs', 'OpenAI GPT-4o', 'n8n Workflows', 'HubSpot API', 'Twilio Voice']
  },
  {
    id: 'ai-lead-generation',
    title: 'AI Lead Generation & Prospecting Agent',
    subtitle: 'Autonomous target account scraping, verified email discovery & CRM injection pipeline',
    category: 'Lead Automation Agent',
    categoryGroup: 'ai',
    icon: '🎯',
    image: '/static/images/ai/ai-lead-generation.jpg',
    badge: 'Lead Automation',
    description: 'An autonomous intelligence pipeline that continuously discovers ideal customer profiles (ICPs), enriches prospect records with live web intelligence, and verifies contact details before CRM routing.',
    problem: 'B2B sales teams were relying on outdated purchased databases with high bounce rates (18%+), burning sales rep capacity on manual Google and LinkedIn research.',
    solution: 'Constructed an automated AI prospect discovery engine using headless scrapers, multi-provider email verification (Apollo & Hunter APIs), Vector DB ICP matching, and automated CRM pipeline routing.',
    results: [
      { val: '8,500+', label: 'Verified B2B decision-maker leads captured monthly' },
      { val: '98.5%', label: 'Email deliverability rate with zero sender domain risk' },
      { val: '85%', label: 'Reduction in manual sales research & list preparation' },
      { val: '3.8x', label: 'Faster lead qualification velocity to scheduled demo' }
    ],
    tech: ['Python', 'LangChain', 'n8n Automations', 'Puppeteer', 'Vector DB', 'PostgreSQL', 'Apollo API']
  },
  {
    id: 'ai-tutor',
    title: 'Personal AI Tutor & Problem Solver',
    subtitle: '24/7 interactive curriculum-aligned learning assistant with step-by-step problem breakdowns',
    category: 'EdTech AI Assistant',
    categoryGroup: 'ai',
    icon: '🎓',
    image: '/static/images/ai/ai-tutor-thumbnail-1200x800.jpg',
    badge: 'AI EdTech Platform',
    description: 'An always-on intelligent learning companion that breaks complex STEM concepts into intuitive step-by-step solutions, dynamically generates practice quizzes, and tracks student mastery streaks.',
    problem: 'Students struggled with static textbooks and recorded videos that lacked interactive feedback, personalized explanations, and immediate help when encountering difficult equations or homework problems.',
    solution: 'Developed an adaptive AI tutoring web application with real-time LaTeX formula rendering, interactive Socratic questioning, progress tracking dashboards, and personalized concept reinforcement.',
    results: [
      { val: '82%', label: 'Curriculum mastery rate achieved across enrolled learners' },
      { val: '<800ms', label: 'Instant step-by-step conversational response time' },
      { val: '4.9/5', label: 'Student engagement rating across 25,000+ solved problems' },
      { val: '3.2x', label: 'Increase in daily student practice consistency' }
    ],
    tech: ['React.js', 'FastAPI', 'OpenAI RAG', 'LaTeX Engine', 'TailwindCSS', 'PostgreSQL']
  },

  // ── 3. CORPORATE & BRAND PORTALS ──
  {
    id: 'corporate-branding',
    title: 'Corporate Website – Premium Landing Page & Branding',
    subtitle: 'High-conversion corporate landing page for modern SaaS & Enterprise brands',
    category: 'Corporate & Brand Portals',
    categoryGroup: 'corporate',
    icon: '🏢',
    image: '/static/images/team_img1.jpg',
    badge: 'Corporate Branding',
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
    id: 'beauty-wellness',
    title: 'Beauty & Wellness Portal – Luxury Brand Experience',
    subtitle: 'Immersive digital presence for premium cosmetics and self-care brands',
    category: 'Corporate & Brand Portals',
    categoryGroup: 'corporate',
    icon: '🧴',
    image: '/static/images/team_img4.jpg',
    badge: 'Luxury Web Experience',
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
    id: 'jainism-platform',
    title: 'Jainism Educational Platform – Heritage & Philosophy',
    subtitle: 'Interactive digital resource for history, ethics, and philosophy',
    category: 'Corporate & Brand Portals',
    categoryGroup: 'corporate',
    icon: '📿',
    image: '/static/images/team_img3.jpg',
    badge: 'Educational & Culture',
    description: 'A clean, cultural, and educational website exploring the history, philosophy, and timeless wisdom of Jainism. Features rich interactive sections, scripture access, and mobile responsiveness.',
    problem: 'An educational foundation needed a modern digital resource to document ancient scriptures and philosophy for a global audience.',
    solution: 'Built a lightweight, highly readable educational platform with search systems, scripture archives, and minimal design aesthetics.',
    results: [
      { val: '10k+', label: 'Monthly active learners globally' },
      { val: '100%', label: 'Mobile accessibility score' },
      { val: '0', label: 'Downtime hosting architecture setup' }
    ],
    tech: ['HTML5', 'Sass', 'JavaScript', 'Scripture Search Index']
  },

  // ── 3. ECOMM WEBSITES (KEPT AT THE END) ──
  {
    id: 'organic-food-ecomm',
    title: 'Organic Food Brand – Custom E-Commerce Store',
    subtitle: 'Tasteful digital storefront for natural & organic consumer goods',
    category: 'Ecomm Websites',
    categoryGroup: 'ecomm',
    icon: '🍯',
    image: '/static/images/team_img2.jpg',
    badge: 'D2C Storefront',
    isEcomm: true,
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
    id: 'full-ecommerce',
    title: 'E-Commerce Website – Complete Multi-Category Store',
    subtitle: 'Complete e-commerce solution with admin dashboard & inventory control',
    category: 'Ecomm Websites',
    categoryGroup: 'ecomm',
    icon: '🛒',
    image: '/static/images/E-Commerce.jpg',
    badge: 'Full-Stack E-Commerce',
    isEcomm: true,
    description: 'A complete e-commerce solution with user authentication, dynamic cart, wishlist, secure checkout, and comprehensive admin management dashboard.',
    problem: 'Businesses faced poor UI, high cart abandonment & weak admin inventory control.',
    solution: 'Built a full-featured e-commerce site with authentication, cart, wishlist, secure checkout, and admin panel.',
    results: [
      { val: '30%', label: 'Reduced cart abandonment' },
      { val: '↑ 45%', label: 'Boosted user engagement with wishlist & order tracking' },
      { val: '✓', label: 'Improved business efficiency with centralized admin panel' }
    ],
    tech: ['React.js', 'Redux', 'Node.js', 'Stripe Integration', 'MongoDB']
  },
  {
    id: 'fitness-ecomm',
    title: 'Fitness & Supplement Website – Muscle Fuel Express',
    subtitle: 'Conversion-focused product storefront for sports nutrition & supplements',
    category: 'Ecomm Websites',
    categoryGroup: 'ecomm',
    icon: '🏋️',
    image: '/static/images/fitness_detail.webp',
    badge: 'Nutrition Commerce',
    isEcomm: true,
    description: 'A premium, high-conversion fitness and supplement store designed for Muscle Fuel Express. Optimizes sales of sports nutrition products with interactive feature layouts.',
    problem: 'Client required a reliable, fast-loading, and mobile-first storefront tailored to health and sports nutrition customers.',
    solution: 'Designed and engineered a conversion-focused fitness and supplement web store with bundle builder and verified reviews.',
    results: [
      { val: '+52%', label: 'Conversions through streamlined customer purchase flows' },
      { val: '3.1x', label: 'Higher repeat orders with recurring subscriptions' },
      { val: '1.2s', label: 'Instant mobile checkout load speed' }
    ],
    tech: ['React.js', 'TailwindCSS', 'Framer Motion', 'Stripe API']
  }
];

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const location = useLocation();

  // Dynamic SEO meta updates for Portfolio
  useEffect(() => {
    document.title = 'Production Portfolio & Case Studies | APITIDE AI Systems & Web Platforms';
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute(
        'content',
        'Explore APITIDE client projects: Hotel Mantri direct reservation platform, NowFix marketplace, VisionME enterprise SaaS, TailorEZ ecommerce, and autonomous AI sales & lead agents.'
      );
    }
    const kwMeta = document.querySelector('meta[name="keywords"]');
    if (kwMeta) {
      kwMeta.setAttribute(
        'content',
        'portfolio, web development projects, custom software portfolio, website designs, web application examples, ecommerce website showcase, SaaS platforms, AI bots, full stack case studies, Hotel Mantri, NowFix, VisionME, TailorEZ, hire developers, web agency portfolio'
      );
    }
  }, []);

  // Auto-open modal if URL has hash (e.g., #hotelmantri)
  useEffect(() => {
    if (location.hash) {
      const cleanId = location.hash.replace('#', '');
      const found = PORTFOLIO_PROJECTS.find(p => p.id === cleanId || cleanId.includes(p.id));
      if (found) {
        setActiveModal(found);
      }
    }
  }, [location.hash]);

  const appProjects = PORTFOLIO_PROJECTS.filter(p => p.categoryGroup === 'apps');
  const aiProjects = PORTFOLIO_PROJECTS.filter(p => p.categoryGroup === 'ai');
  const corporateProjects = PORTFOLIO_PROJECTS.filter(p => p.categoryGroup === 'corporate');
  const ecommProjects = PORTFOLIO_PROJECTS.filter(p => p.categoryGroup === 'ecomm' || p.isEcomm);

  return (
    <div className="projects-page portfolio-page">
      <main>

        {/* ──────────────────────────────────────────────────────────────────────────
           1. HERO SECTION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="proj-hero-section">
          <div className="proj-container">
            <div className="proj-hero-content">
              <span className="proj-eyebrow text-orange">
                <i className="fas fa-layer-group"></i> PORTFOLIO
              </span>
              <h1 className="proj-hero-title">
                Turning Ideas into <span className="proj-gradient-orange">High-Impact</span> Digital Platforms
              </h1>
              <p className="proj-hero-subtitle">
                Explore our curated portfolio of bespoke web applications, autonomous AI agents & automations, corporate portals, and high-converting e-commerce storefronts.
              </p>
              <div className="proj-count-badge">
                <i className="fas fa-check-circle"></i> {PORTFOLIO_PROJECTS.length} Production Systems, AI Agents & Web Platforms Delivered
              </div>

              {/* Filter Tabs */}
              <div className="portfolio-filter-tabs">
                <button
                  className={`portfolio-filter-btn ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                  type="button"
                >
                  <i className="fas fa-globe"></i> All ({PORTFOLIO_PROJECTS.length})
                </button>
                <button
                  className={`portfolio-filter-btn ${activeTab === 'apps' ? 'active' : ''}`}
                  onClick={() => setActiveTab('apps')}
                  type="button"
                >
                  <i className="fas fa-mobile-alt"></i> Web Apps ({appProjects.length})
                </button>
                <button
                  className={`portfolio-filter-btn ${activeTab === 'ai' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ai')}
                  type="button"
                >
                  <i className="fas fa-robot"></i> AI & Automations ({aiProjects.length})
                </button>
                <button
                  className={`portfolio-filter-btn ${activeTab === 'corporate' ? 'active' : ''}`}
                  onClick={() => setActiveTab('corporate')}
                  type="button"
                >
                  <i className="fas fa-building"></i> Corporate Websites ({corporateProjects.length})
                </button>
                <button
                  className={`portfolio-filter-btn ${activeTab === 'ecomm' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ecomm')}
                  type="button"
                >
                  <i className="fas fa-shopping-cart"></i> Ecomm Websites ({ecommProjects.length})
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           2. MAIN SECTION: WEB APPS & CLOUD PLATFORMS (WITH VISIONME, HOTEL MANTRI, NOWFIX, TAILOREZ)
           ────────────────────────────────────────────────────────────────────────── */}
        {(activeTab === 'all' || activeTab === 'apps') && (
          <section className="proj-section" id="web-apps">
            <div className="proj-container">
              <div className="proj-section-header">
                <h2 className="proj-section-title">
                  Web Apps & <span className="proj-gradient-blue">Platforms</span>
                </h2>
                <p className="proj-section-subtitle">
                  High-concurrency full-stack web applications, on-demand marketplaces, bespoke tailoring platforms, and multi-tenant SaaS architectures built to scale.
                </p>
              </div>

              <div className="proj-grid">
                {appProjects.map((project) => (
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
                        loading="lazy"
                      />
                      <span className="card-icon-badge">{project.icon}</span>
                    </div>

                    <div className="card-body">
                      <span className="card-category">{project.category}</span>
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-desc">{project.description}</p>

                      <div className="card-highlight-stat">
                        <span className="stat-pill-val">{project.results[0].val}</span>
                        <span className="stat-pill-lbl">{project.results[0].label}</span>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button className="proj-action-btn" type="button">
                        View Case Study <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ──────────────────────────────────────────────────────────────────────────
           3. SECTION: AI & AUTOMATIONS (RIGHT BELOW WEB APPS & PLATFORMS)
           ────────────────────────────────────────────────────────────────────────── */}
        {(activeTab === 'all' || activeTab === 'ai') && (
          <section className="proj-section proj-ai-section" id="ai-automations">
            <div className="proj-container">
              <div className="proj-section-header">
                <div className="ai-section-pill">
                  <i className="fas fa-robot"></i> AUTONOMOUS INTELLIGENCE &amp; AUTOMATIONS
                </div>
                <h2 className="proj-section-title">
                  AI &amp; <span className="proj-gradient-purple">Automations</span>
                </h2>
                <p className="proj-section-subtitle">
                  Intelligent voice callers, autonomous cold outreach systems, continuous lead enrichment engines, and 24/7 AI learning assistants built to eliminate operational friction.
                </p>
              </div>

              <div className="proj-grid">
                {aiProjects.map((project) => (
                  <div
                    key={project.id}
                    className="proj-card ai-card"
                    onClick={() => setActiveModal(project)}
                  >
                    <div className="card-image-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="card-image"
                        loading="lazy"
                      />
                      <span className="card-icon-badge">{project.icon}</span>
                    </div>

                    <div className="card-body">
                      <span className="card-category ai-cat">{project.category}</span>
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-desc">{project.description}</p>

                      <div className="card-highlight-stat ai-stat">
                        <span className="stat-pill-val">{project.results[0].val}</span>
                        <span className="stat-pill-lbl">{project.results[0].label}</span>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button className="proj-action-btn" type="button">
                        View Case Study <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ──────────────────────────────────────────────────────────────────────────
           4. SECTION: CORPORATE & BRAND WEBSITES
           ────────────────────────────────────────────────────────────────────────── */}
        {(activeTab === 'all' || activeTab === 'corporate') && (
          <section className="proj-section proj-bg-darker" id="corporate-websites">
            <div className="proj-container">
              <div className="proj-section-header">
                <h2 className="proj-section-title">
                  Corporate & <span className="proj-gradient-blue">Brand Websites</span>
                </h2>
                <p className="proj-section-subtitle">
                  Editorial landing pages, luxury digital portals, and educational resources engineered for brand credibility and engagement.
                </p>
              </div>

              <div className="proj-grid">
                {corporateProjects.map((project) => (
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
                        loading="lazy"
                      />
                      <span className="card-icon-badge">{project.icon}</span>
                    </div>

                    <div className="card-body">
                      <span className="card-category">{project.category}</span>
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-desc">{project.description}</p>

                      <div className="card-highlight-stat">
                        <span className="stat-pill-val">{project.results[0].val}</span>
                        <span className="stat-pill-lbl">{project.results[0].label}</span>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button className="proj-action-btn" type="button">
                        View Case Study <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ──────────────────────────────────────────────────────────────────────────
           5. SECTION: ECOMM WEBSITES (KEPT IN THE END)
           ────────────────────────────────────────────────────────────────────────── */}
        {(activeTab === 'all' || activeTab === 'ecomm') && (
          <section className="proj-section proj-ecomm-section" id="ecomm-websites">
            <div className="proj-container">
              <div className="proj-section-header">
                <div className="ecomm-section-pill">
                  <i className="fas fa-shopping-bag"></i> COMMERCE SHOWCASE
                </div>
                <h2 className="proj-section-title">
                  Ecomm <span className="proj-gradient-orange">Websites</span>
                </h2>
                <p className="proj-section-subtitle">
                  High-converting digital storefronts, interactive custom configurators, and friction-free payment architectures engineered for modern consumer brands.
                </p>
              </div>

              <div className="ecomm-showcase-grid">
                {ecommProjects.map((project) => (
                  <div
                    key={project.id}
                    className="ecomm-card glass-card"
                    onClick={() => setActiveModal(project)}
                  >
                    <div className="ecomm-card-image-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="ecomm-card-img"
                        loading="lazy"
                      />
                      <span className="ecomm-icon-tag">{project.icon}</span>
                    </div>

                    <div className="ecomm-card-body">
                      <span className="ecomm-card-category">{project.category}</span>
                      <h3 className="ecomm-card-title">{project.title}</h3>
                      <p className="ecomm-card-desc">{project.description}</p>

                      <div className="ecomm-key-result">
                        <span className="ecomm-res-val">{project.results[0].val}</span>
                        <span className="ecomm-res-lbl">{project.results[0].label}</span>
                      </div>
                    </div>

                    <div className="ecomm-card-footer">
                      <button className="proj-action-btn primary" type="button">
                        Explore Store Details <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ──────────────────────────────────────────────────────────────────────────
           6. CONVERSION CTA BANNER
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="proj-banner-section">
          <Link to="/contact" className="proj-banner-link" aria-label="Start Your Website Project">
            <img
              src="/static/images/projects_bottom_banner_new.webp"
              alt="Apitide Custom Solutions Portfolio Banner"
              className="proj-banner-img"
            />
          </Link>
        </section>

      </main>

      {/* ──────────────────────────────────────────────────────────────────────────
         CASE STUDY DETAILS MODAL
         ────────────────────────────────────────────────────────────────────────── */}
      {activeModal && (
        <div className="proj-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="proj-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="proj-modal-close" onClick={() => setActiveModal(null)} aria-label="Close Modal">
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <span className="modal-icon">{activeModal.icon}</span>
              <span className="modal-category">{activeModal.category}</span>
              <h2 className="modal-title">{activeModal.title}</h2>
              <p className="modal-subtitle">{activeModal.subtitle}</p>
            </div>

            <div className="modal-body">
              {/* Modal Banner Image */}
              <div className="modal-preview-image-wrap">
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  className="modal-preview-image"
                />
              </div>

              {/* Problem Section */}
              <div className="case-section">
                <h3><i className="fas fa-exclamation-triangle text-orange"></i> Business Challenge</h3>
                <p>{activeModal.problem}</p>
              </div>

              {/* Solution Section */}
              <div className="case-section">
                <h3><i className="fas fa-lightbulb text-cyan"></i> The Digital Solution</h3>
                <p>{activeModal.solution}</p>
              </div>

              {/* Results Section */}
              <div className="case-section">
                <h3><i className="fas fa-chart-line text-green"></i> Measurable Outcomes</h3>
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
                <h3><i className="fas fa-code text-blue"></i> Technologies & Architecture</h3>
                <div className="modal-tech-list">
                  {activeModal.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge large">{t}</span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="modal-cta-box">
                <div>
                  <h4>Want a platform engineered like this?</h4>
                  <p>Let's build a high-performance web experience tailored to your exact business specifications.</p>
                </div>
                <a 
                  href="https://calendly.com/apitideinfo/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-btn primary"
                  onClick={(e) => {
                    if (window.Calendly) {
                      e.preventDefault();
                      window.Calendly.initPopupWidget({ url: 'https://calendly.com/apitideinfo/30min' });
                    }
                  }}
                >
                  Book Free Consultation <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
