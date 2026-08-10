import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const RESOURCES_DATA = [
  {
    id: 'blog-vector',
    title: 'How Vector DBs Power Context-Aware AI Chatbots',
    type: 'blog',
    badgeText: 'Blog',
    badgeClass: 'badge-blue',
    icon: '🧠',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    description: 'A deep dive into embeddings, Pinecone vs. Qdrant vector databases, and how retrieval-augmented generation (RAG) eliminates AI hallucinations.',
    meta: 'Jul 15, 2026 • 6 Min Read',
    actionType: 'read',
    actionText: 'Read Article',
    actionIcon: 'fas fa-arrow-right',
    content: `Vector databases have transformed enterprise search and Retrieval-Augmented Generation (RAG). By converting unstructured documents into high-dimensional vector embeddings, LLMs like GPT-4o and Claude 3.5 can instantly query contextually relevant documentation.

Key Technical Highlights:
1. Embedding Models: Utilizing OpenAI text-embedding-3-small or Cohere Embed v3 for fast sub-100ms vector search.
2. Vector Indexing: HNSW (Hierarchical Navigable Small World) indexes yield 99.4% recall accuracy at enterprise scale.
3. Hybrid Search: Combining BM25 keyword matching with dense vector similarity prevents missing exact product serial numbers or SKUs.

Implementation Workflow:
- Ingest PDFs, Markdown, and SQL records via n8n pipeline.
- Chunk text into 500-token blocks with 50-token overlap.
- Index vector embeddings in Pinecone Serverless cluster.
- Retrieve top-k context snippets on every user chat query.`
  },
  {
    id: 'case-saas',
    title: 'SaaS Account Provisioning Automation Framework',
    type: 'case',
    badgeText: 'Case Study',
    badgeClass: 'badge-green',
    icon: '📊',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    description: 'See how we automated account setup and CRM sync for a fast-growing B2B company, resolving 92% of setup tickets and saving 45 hours weekly.',
    meta: '+92% Efficiency • 45h Saved/Wk',
    actionType: 'read',
    actionText: 'Read Case Study',
    actionIcon: 'fas fa-chart-line',
    content: `Client Challenge:
A B2B SaaS platform was manually creating workspace accounts, inviting team members, sending onboarding emails, and generating Stripe invoices. Customer onboarding took up to 6 hours per customer.

Our n8n & API Automation Solution:
We implemented an event-driven webhook architecture connecting Stripe Webhooks, HubSpot CRM, and AWS Lambda service endpoints.

Measurable Impact:
• Onboarding setup time dropped from 6 hours to 12 seconds.
• 92% reduction in onboarding support tickets.
• 45 hours saved per week by the operations team.
• $140,000 annualized operational cost savings.`
  },
  {
    id: 'white-security',
    title: 'Enterprise AI Security & Data Governance Blueprint',
    type: 'white',
    badgeText: 'Whitepaper',
    badgeClass: 'badge-purple',
    icon: '📄',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    description: 'A comprehensive guide on securely deploying LLMs, protecting PII data, structuring localized vector databases, and SOC2 compliance.',
    meta: '14 Pages • PDF Document',
    actionType: 'download',
    actionText: 'Download PDF',
    actionIcon: 'fas fa-download',
    downloadTitle: 'Enterprise AI Security Whitepaper (PDF)'
  },
  {
    id: 'guide-n8n',
    title: 'Step-by-Step n8n + OpenAI Integration Guide',
    type: 'guide',
    badgeText: 'Guide',
    badgeClass: 'badge-orange',
    icon: '⚙️',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    description: 'Learn how to connect n8n workflow variables to OpenAI API endpoints, parse structured JSON responses, and write custom error handling rules.',
    meta: '8 Min Read • Step-by-Step',
    actionType: 'read',
    actionText: 'Read Guide',
    actionIcon: 'fas fa-arrow-right',
    content: `n8n provides the ideal self-hosted engine for building complex AI pipelines.

Step 1: Set up the Webhook Trigger
Configure a POST request endpoint to accept incoming payload JSON.

Step 2: Add OpenAI Node
Set model to 'gpt-4o-mini' with JSON response mode enabled.

Step 3: Custom Error Handling
Attach an Error Trigger node to route failed LLM calls to a fallback queue with exponential backoff retries.`
  },
  {
    id: 'slack-escalation',
    title: 'Slack + Zendesk AI Support Escalation Blueprint',
    type: 'library',
    badgeText: 'Automation Library',
    badgeClass: 'badge-cyan',
    icon: '⚡',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    description: 'Visual workflow structure to parse Zendesk tickets with LLM, evaluate urgency, and post real-time alerts to Slack channels with direct action buttons.',
    meta: 'n8n YAML Blueprint',
    actionType: 'code',
    actionText: 'Inspect Code',
    actionIcon: 'fas fa-code',
    codeSchema: `nodes:
  - name: Zendesk Webhook Trigger
    type: n8n-nodes-base.webhook
    typeVersion: 1
    position: [250, 300]
  - name: OpenAI Urgency Classifier
    type: n8n-nodes-base.openAi
    typeVersion: 1
    position: [450, 300]
    parameters:
      model: gpt-4o
      prompt: "Classify ticket urgency (P1, P2, P3): {{ $json.body.description }}"
  - name: Post Alert to Slack
    type: n8n-nodes-base.slack
    typeVersion: 1
    position: [650, 300]
    parameters:
      channel: "#urgent-support-alerts"
      message: "🚨 High Priority Ticket #{{ $json.body.ticket_id }}"`
  },
  {
    id: 'hubspot-enrich',
    title: 'HubSpot Lead Enrichment Webhook Schema',
    type: 'template',
    badgeText: 'Template',
    badgeClass: 'badge-pink',
    icon: '📋',
    glowColor: 'rgba(236, 72, 153, 0.25)',
    description: 'Ready-to-use webhook structure to auto-enrich fresh HubSpot signups using external company data APIs and n8n orchestration.',
    meta: 'JSON Workflow Template',
    actionType: 'code',
    actionText: 'Inspect Code',
    actionIcon: 'fas fa-code',
    codeSchema: `{
  "name": "HubSpot Lead Enrichment Pipeline",
  "nodes": [
    {
      "name": "HubSpot Contact Created Event",
      "type": "n8n-nodes-base.hubspotTrigger",
      "event": "contact.creation"
    },
    {
      "name": "Fetch Clearbit Company Data",
      "type": "n8n-nodes-base.httpRequest",
      "url": "https://person.clearbit.com/v2/combined/find?email={{ $json.email }}"
    },
    {
      "name": "Update Lead Score in CRM",
      "type": "n8n-nodes-base.hubspot",
      "operation": "update"
    }
  ]
}`
  },
  {
    id: 'download-roi-calc',
    title: 'Enterprise AI & Automation ROI Calculator',
    type: 'download',
    badgeText: 'Free Download',
    badgeClass: 'badge-sky',
    icon: '🚀',
    glowColor: 'rgba(14, 165, 233, 0.25)',
    description: 'An interactive spreadsheet template to calculate hours saved, cost reductions, and exact payback periods for your AI projects.',
    meta: 'XLSX Calculator Sheet',
    actionType: 'download',
    actionText: 'Download XLSX',
    actionIcon: 'fas fa-download',
    downloadTitle: 'Automation ROI Calculator (XLSX)'
  },
  {
    id: 'download-audit',
    title: 'AI Automation Audit & Blueprint Guide',
    type: 'download',
    badgeText: 'Free Download',
    badgeClass: 'badge-sky',
    icon: '📐',
    glowColor: 'rgba(14, 165, 233, 0.25)',
    description: 'Our official framework detailing how to assess operational bottlenecks, audit manual workflows, and plan high-yield AI integrations.',
    meta: 'PDF Guide • 22 Pages',
    actionType: 'download',
    actionText: 'Download PDF',
    actionIcon: 'fas fa-download',
    downloadTitle: 'AI Automation Audit Blueprint (PDF)'
  },
  {
    id: 'guide-prompting',
    title: 'Advanced System Prompting for Agentic LLMs',
    type: 'guide',
    badgeText: 'Guide',
    badgeClass: 'badge-orange',
    icon: '📝',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    description: 'How to construct stateful system prompts, configure tool definitions, and write JSON output parsers for Claude 3.5 Sonnet and GPT-4o.',
    meta: '10 Min Read • Technical',
    actionType: 'read',
    actionText: 'Read Guide',
    actionIcon: 'fas fa-arrow-right',
    content: `Building agentic LLM workflows requires strict system prompt boundaries.

1. Role Definition: Explicitly state the agent's task, permissions, and tool access constraints.
2. JSON Function Tool Schemas: Define strict JSON schema contracts with required fields and type validations.
3. Fallback Instructions: Teach the model how to gracefully request missing parameters instead of hallucinating values.`
  }
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modal States
  const [activeReadModal, setActiveReadModal] = useState(null);
  const [activeCodeModal, setActiveCodeModal] = useState(null);
  const [activeDownloadModal, setActiveDownloadModal] = useState(null);
  
  // Modal Form States
  const [downloadName, setDownloadName] = useState('');
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copyConfirmed, setCopyConfirmed] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  // Filtered Resources
  const filteredResources = useMemo(() => {
    return RESOURCES_DATA.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) || 
        item.badgeText.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Handlers
  const handleAction = (item) => {
    if (item.actionType === 'read') {
      setActiveReadModal(item);
    } else if (item.actionType === 'code') {
      setActiveCodeModal(item);
      setCopyConfirmed(false);
    } else if (item.actionType === 'download') {
      setActiveDownloadModal(item);
      setDownloadSuccess(false);
      setDownloadName('');
      setDownloadEmail('');
    }
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopyConfirmed(true);
    setTimeout(() => setCopyConfirmed(false), 3000);
  };

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    if (!downloadName || !downloadEmail) return;
    setDownloadSuccess(true);
  };

  const FAQS = [
    {
      q: "Are all workflow blueprints and templates free to use?",
      a: "Yes! All automation code templates, n8n YAML blueprints, and JSON schemas in our Resource Center are 100% free under the MIT license for both commercial and private enterprise use."
    },
    {
      q: "Can Apitide build custom workflows for our specific tech stack?",
      a: "Absolutely. We specialize in building custom AI agents, n8n workflows, RAG knowledge bases, and API integrations tailored to your legacy databases, CRMs, and Cloud infrastructure."
    },
    {
      q: "How do I import the n8n YAML/JSON schemas into my n8n instance?",
      a: "Simply click 'Inspect Code' on any automation library item, copy the YAML/JSON schema, open your n8n workflow editor, and select 'Import from Clipboard'."
    },
    {
      q: "Are the whitepapers and audit blueprints updated for SOC2 compliance?",
      a: "Yes, our technical whitepapers and architecture blueprints cover zero-data-retention AI models, PII obfuscation filters, and enterprise SOC2 Type II compliance standards."
    }
  ];

  return (
    <div className="resources-page">
      <main>
        
        {/* ──────────────────────────────────────────────────────────────────────────
           1. HERO SECTION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="res-hero-section">
          <div className="res-container">
            <div className="res-hero-content">
              <span className="res-eyebrow text-cyan">
                <i className="fas fa-folder-open"></i> ENTERPRISE KNOWLEDGE HUB
              </span>
              <h1 className="res-hero-title">
                Blogs, Guides & <span className="res-gradient-cyan">Automation Library</span>
              </h1>
              <p className="res-hero-subtitle">
                Explore our curated library of enterprise whitepapers, step-by-step guides, n8n workflow blueprints, and free production-ready automation templates.
              </p>

              {/* Search Box */}
              <div className="res-search-box">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  placeholder="Search resources, topics, platforms (n8n, Vector DB, RAG, OpenAI)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="res-search-field"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="res-clear-btn" aria-label="Clear search">
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           2. TRUST & STATS STRIP
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="res-stats-bar-section">
          <div className="res-container">
            <div className="res-stats-grid">
              <div className="res-stat-item">
                <span className="res-stat-val text-cyan">9+</span>
                <span className="res-stat-lbl">Enterprise Guides & Blueprints</span>
              </div>
              <div className="res-stat-divider"></div>
              <div className="res-stat-item">
                <span className="res-stat-val text-green">100%</span>
                <span className="res-stat-lbl">Free Open-Source Templates</span>
              </div>
              <div className="res-stat-divider"></div>
              <div className="res-stat-item">
                <span className="res-stat-val text-orange">SOC2</span>
                <span className="res-stat-lbl">Compliant AI Blueprints</span>
              </div>
              <div className="res-stat-divider"></div>
              <div className="res-stat-item">
                <span className="res-stat-val text-blue">n8n & LLM</span>
                <span className="res-stat-lbl">Ready Code Schemas</span>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           3. MAIN RESOURCES CATALOG
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="res-section" id="resources-catalog">
          <div className="res-container">
            
            {/* Filter Tabs */}
            <div className="res-tabs-wrap">
              <div className="res-tabs-bar">
                <button
                  className={`res-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All Resources ({RESOURCES_DATA.length})
                </button>
                <button
                  className={`res-tab-btn ${selectedCategory === 'blog' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('blog')}
                >
                  Blogs
                </button>
                <button
                  className={`res-tab-btn ${selectedCategory === 'case' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('case')}
                >
                  Case Studies
                </button>
                <button
                  className={`res-tab-btn ${selectedCategory === 'white' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('white')}
                >
                  Whitepapers
                </button>
                <button
                  className={`res-tab-btn ${selectedCategory === 'guide' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('guide')}
                >
                  Guides
                </button>
                <button
                  className={`res-tab-btn ${selectedCategory === 'library' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('library')}
                >
                  Automation Library
                </button>
                <button
                  className={`res-tab-btn ${selectedCategory === 'template' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('template')}
                >
                  Templates
                </button>
                <button
                  className={`res-tab-btn ${selectedCategory === 'download' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('download')}
                >
                  Free Downloads
                </button>
              </div>
            </div>

            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <div className="res-cards-grid">
                {filteredResources.map((item) => (
                  <div key={item.id} className="res-card">
                    <div className="res-card-top">
                      <div className="res-card-icon-wrap" style={{ background: item.glowColor }}>
                        <span className="res-card-icon">{item.icon}</span>
                      </div>
                      <span className={`res-badge ${item.badgeClass}`}>{item.badgeText}</span>
                    </div>

                    <div className="res-card-body">
                      <h3 className="res-card-title">{item.title}</h3>
                      <p className="res-card-desc">{item.description}</p>
                    </div>

                    <div className="res-card-footer">
                      <span className="res-meta-info">
                        <i className="far fa-clock"></i> {item.meta}
                      </span>
                      <button
                        onClick={() => handleAction(item)}
                        className="res-action-btn"
                      >
                        {item.actionText} <i className={item.actionIcon}></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="res-no-results">
                <i className="fas fa-search-minus no-res-icon"></i>
                <h3>No resources found</h3>
                <p>Try searching for different keywords or select another filter category.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="res-btn-reset"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           4. PROMOTIONAL BANNER SECTION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="res-section res-fullwidth-promo" id="resource-promo">
          <div className="res-promo-banner-wrap">
            <Link to="/contact">
              <img
                src="/static/images/resource_promo_banner.png"
                alt="A Trusted Software Development Team is Closer Than You Think"
                className="res-promo-banner-img"
              />
            </Link>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           5. FAQ SECTION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="res-section" id="res-faq">
          <div className="res-container">
            <div className="res-section-header">
              <span className="res-eyebrow text-cyan">
                <i className="fas fa-question-circle"></i> FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="res-section-title">
                Everything You Need to Know About <span className="res-gradient-cyan">Our Resources</span>
              </h2>
              <p className="res-section-subtitle">
                Clear answers regarding licensing, code usage, and custom enterprise deployments.
              </p>
            </div>

            <div className="res-faq-list max-w-3xl mx-auto">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`res-card res-faq-item ${openFaq === i ? 'active' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="res-faq-head">
                    <h4>{faq.q}</h4>
                    <i className={`fas ${openFaq === i ? 'fa-minus' : 'fa-plus'} icon`}></i>
                  </div>
                  {openFaq === i && (
                    <div className="res-faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           6. FINAL CONVERSION CTA BANNER
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="res-section res-cta-section">
          <div className="res-container">
            <div className="res-card res-cta-banner">
              <h2>
                Need a Custom AI Automation Built for <span className="res-gradient-cyan">Your Stack?</span>
              </h2>
              <p>
                Schedule a 15-minute engineering call. We will review your legacy workflows, recommend the right AI architecture, and build a free pilot.
              </p>
              <Link to="/contact" className="res-btn res-btn-primary">
                <i className="fas fa-calendar-check"></i> Request Free Technical Consultation
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ──────────────────────────────────────────────────────────────────────────
         READ ARTICLE MODAL
         ────────────────────────────────────────────────────────────────────────── */}
      {activeReadModal && (
        <div className="res-modal-overlay" onClick={() => setActiveReadModal(null)}>
          <div className="res-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="res-modal-close" onClick={() => setActiveReadModal(null)}>
              <i className="fas fa-times"></i>
            </button>
            <span className={`res-badge ${activeReadModal.badgeClass}`}>
              {activeReadModal.badgeText}
            </span>
            <h3 className="res-modal-title">{activeReadModal.title}</h3>
            <span className="res-modal-meta">{activeReadModal.meta}</span>
            <div className="res-modal-body">
              {activeReadModal.content}
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
         CODE INSPECTION MODAL
         ────────────────────────────────────────────────────────────────────────── */}
      {activeCodeModal && (
        <div className="res-modal-overlay" onClick={() => setActiveCodeModal(null)}>
          <div className="res-modal-card code-modal" onClick={(e) => e.stopPropagation()}>
            <button className="res-modal-close" onClick={() => setActiveCodeModal(null)}>
              <i className="fas fa-times"></i>
            </button>
            <span className="res-eyebrow text-cyan mb-2">
              <i className="fas fa-code"></i> WORKFLOW SCHEMA INSPECTOR
            </span>
            <h3 className="res-modal-title">{activeCodeModal.title}</h3>
            <p className="res-modal-desc">
              Copy and paste this ready-to-import blueprint directly into your n8n workflow editor.
            </p>
            <div className="res-code-box">
              <pre><code>{activeCodeModal.codeSchema}</code></pre>
            </div>
            <div className="res-modal-footer">
              <button
                onClick={() => handleCopyCode(activeCodeModal.codeSchema)}
                className="res-btn res-btn-primary"
              >
                <i className="far fa-copy"></i> {copyConfirmed ? 'Copied to Clipboard!' : 'Copy Code Schema'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
         LEAD MAGNET DOWNLOAD MODAL
         ────────────────────────────────────────────────────────────────────────── */}
      {activeDownloadModal && (
        <div className="res-modal-overlay" onClick={() => setActiveDownloadModal(null)}>
          <div className="res-modal-card download-modal" onClick={(e) => e.stopPropagation()}>
            <button className="res-modal-close" onClick={() => setActiveDownloadModal(null)}>
              <i className="fas fa-times"></i>
            </button>

            {!downloadSuccess ? (
              <>
                <span className="res-eyebrow text-orange mb-2">
                  <i className="fas fa-download"></i> FREE DOWNLOAD ACCESS
                </span>
                <h3 className="res-modal-title">{activeDownloadModal.downloadTitle || activeDownloadModal.title}</h3>
                <p className="res-modal-desc">
                  Enter your details below to unlock direct download access and receive updates on enterprise AI blueprints.
                </p>

                <form onSubmit={handleDownloadSubmit} className="res-modal-form">
                  <div className="res-form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={downloadName}
                      onChange={(e) => setDownloadName(e.target.value)}
                      required
                      className="res-modal-input"
                    />
                  </div>
                  <div className="res-form-group">
                    <label>Business Email</label>
                    <input
                      type="email"
                      placeholder="sarah@company.com"
                      value={downloadEmail}
                      onChange={(e) => setDownloadEmail(e.target.value)}
                      required
                      className="res-modal-input"
                    />
                  </div>
                  <button type="submit" className="res-btn res-btn-primary full-width">
                    Get Free Download Link <i className="fas fa-arrow-right"></i>
                  </button>
                </form>
              </>
            ) : (
              <div className="res-download-success text-center">
                <i className="fas fa-check-circle success-icon"></i>
                <h3>Download Ready!</h3>
                <p>
                  Thank you <strong>{downloadName}</strong>! We have sent a copy to <strong>{downloadEmail}</strong>. Click below to start downloading.
                </p>
                <a
                  href="#download"
                  onClick={(e) => { e.preventDefault(); alert(`Starting download: ${activeDownloadModal.downloadTitle}`); setActiveDownloadModal(null); }}
                  className="res-btn res-btn-success full-width"
                >
                  <i className="fas fa-cloud-download-alt"></i> Start Direct Download
                </a>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
