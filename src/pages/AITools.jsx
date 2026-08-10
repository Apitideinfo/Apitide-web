import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AITools() {
  // Search & Filter State for 9 Tools
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Hero Chatbot State
  const [heroMessages, setHeroMessages] = useState([
    { sender: 'ai', text: '👋 Hello! I am APITIDE’s AI Support Agent. How can I assist your business operations today?' }
  ]);
  const [heroInput, setHeroInput] = useState('');
  const [heroIsTyping, setHeroIsTyping] = useState(false);
  const heroChatEndRef = useRef(null);

  // Playground Demo Tab State
  const [activeDemoTab, setActiveDemoTab] = useState('chatbot');

  // Playground Sub-States
  const [playgroundChat, setPlaygroundChat] = useState([
    { sender: 'ai', text: '🤖 I am trained on enterprise product catalogs and FAQs. Ask me anything!' }
  ]);
  const [playgroundChatInput, setPlaygroundChatInput] = useState('');

  // Doc Processing State
  const [isProcessingDoc, setIsProcessingDoc] = useState(false);
  const [docResult, setDocResult] = useState(null);

  // Sales Lead Generator State
  const [salesQuery, setSalesQuery] = useState('');
  const [salesLeads, setSalesLeads] = useState(null);
  const [isGeneratingLeads, setIsGeneratingLeads] = useState(false);

  // Analytics Query State
  const [analyticsQuery, setAnalyticsQuery] = useState('');
  const [analyticsResult, setAnalyticsResult] = useState(null);

  // Content Generator State
  const [contentType, setContentType] = useState('blog');
  const [contentTopic, setContentTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);

  // RAG Search State
  const [ragQuery, setRagQuery] = useState('');
  const [ragResult, setRagResult] = useState(null);

  // Industry Use Case Tab State
  const [activeIndustry, setActiveIndustry] = useState('ecommerce');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Auto-scroll hero chat
  useEffect(() => {
    heroChatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [heroMessages, heroIsTyping]);

  // Handle Hero Chat Message
  const handleHeroSend = (customText) => {
    const textToSend = customText || heroInput;
    if (!textToSend.trim()) return;

    setHeroMessages(prev => [...prev, { sender: 'user', text: textToSend }]);
    if (!customText) setHeroInput('');
    setHeroIsTyping(true);

    setTimeout(() => {
      let aiReply = 'I can help automate that! Our AI voice and chat agents integrate with your CRM and n8n workflows in under 48 hours.';
      const lower = textToSend.toLowerCase();
      if (lower.includes('track') || lower.includes('order')) {
        aiReply = '📦 Order #9482 is currently in transit via FedEx (Express Delivery). Estimated arrival: Tomorrow at 2:00 PM.';
      } else if (lower.includes('return') || lower.includes('refund')) {
        aiReply = '↩️ Returns are 100% free within 30 days. Would you like me to generate a prepaid return shipping label now?';
      } else if (lower.includes('payment') || lower.includes('pay')) {
        aiReply = '💳 We accept Stripe, Credit Cards, Apple Pay, PayPal, and Direct Bank Wire Transfers with automated invoicing.';
      } else if (lower.includes('pilot') || lower.includes('demo') || lower.includes('book')) {
        aiReply = '🚀 Awesome! Click the "Book Consultation" button below to schedule your 14-day free pilot with our engineering team.';
      }

      setHeroMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
      setHeroIsTyping(false);
    }, 1000);
  };

  // Handle Playground Chat
  const handlePlaygroundChatSend = (customText) => {
    const textToSend = customText || playgroundChatInput;
    if (!textToSend.trim()) return;

    setPlaygroundChat(prev => [...prev, { sender: 'user', text: textToSend }]);
    if (!customText) setPlaygroundChatInput('');

    setTimeout(() => {
      let aiReply = 'Our RAG pipeline fetched exact details from your knowledge base with zero hallucinations.';
      const lower = textToSend.toLowerCase();
      if (lower.includes('track')) aiReply = '📦 Order #12345 verified: Status - Out for delivery. Signature required upon receipt.';
      else if (lower.includes('return')) aiReply = '↩️ Return Policy: Items in original packaging eligible for 100% instant refund within 30 days.';
      else if (lower.includes('payment')) aiReply = '💳 Accepted methods: Visa, Mastercard, AMEX, Wire Transfer, and Crypto USD stablecoins.';

      setPlaygroundChat(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 800);
  };

  // Simulate Document OCR Extraction
  const handleSimulateDoc = () => {
    setIsProcessingDoc(true);
    setDocResult(null);
    setTimeout(() => {
      setIsProcessingDoc(false);
      setDocResult({
        invoiceNumber: 'INV-2026-8894',
        vendor: 'Acme Cloud Logistics Inc.',
        date: '2026-08-10',
        totalAmount: '$14,850.00',
        tax: '$1,188.00',
        lineItems: [
          { item: 'Server Container Hosting', qty: 4, price: '$2,500.00' },
          { item: 'n8n Enterprise Automation License', qty: 1, price: '$4,850.00' }
        ],
        confidenceScore: '99.4%',
        status: 'Auto-Approved & Pushed to QuickBooks ERP'
      });
    }, 1200);
  };

  // Simulate Sales Lead Prospecting
  const handleGenerateLeads = (e) => {
    e.preventDefault();
    if (!salesQuery.trim()) return;

    setIsGeneratingLeads(true);
    setSalesLeads(null);
    setTimeout(() => {
      setIsGeneratingLeads(false);
      setSalesLeads([
        { name: 'David Vance', title: 'VP of Engineering', company: 'Apex Global Logistics', location: 'Austin, TX', fit: '98% Match', email: 'd.vance@apexlogistics.io' },
        { name: 'Sarah Jenkins', title: 'Chief Operations Officer', company: 'FinPulse Systems', location: 'New York, NY', fit: '95% Match', email: 's.jenkins@finpulse.com' },
        { name: 'Elena Rostova', title: 'Head of Automation', company: 'CloudScale SaaS', location: 'San Francisco, CA', fit: '92% Match', email: 'elena@cloudscale.app' }
      ]);
    }, 1100);
  };

  // Simulate Analytics Query
  const handleAnalyticsQuery = (e) => {
    e.preventDefault();
    if (!analyticsQuery.trim()) return;

    setTimeout(() => {
      setAnalyticsResult({
        query: analyticsQuery,
        forecast: '$184,500.00',
        growth: '+32.4% YoY',
        confidence: '96.2%',
        insight: 'Based on Q2 sales velocity and active n8n workflows, projected Q3 revenue exceeds target by $42K. Key driver: E-commerce automation leads.'
      });
    }, 900);
  };

  // Simulate Content Generation
  const handleGenerateContent = () => {
    if (!contentTopic.trim()) return;
    setIsGeneratingContent(true);
    setGeneratedContent('');

    setTimeout(() => {
      setIsGeneratingContent(false);
      let text = '';
      if (contentType === 'blog') {
        text = `Title: How Self-Hosted n8n Workflows Cut SaaS Operational Costs by 70%\n\nIn 2026, enterprise companies are shifting away from rigid Zapier subscriptions toward self-hosted n8n automation pipelines. By embedding custom FastAPI wrappers and AI nodes, businesses save thousands of dollars monthly while preserving 100% data privacy...`;
      } else if (contentType === 'email') {
        text = `Subject: Quick question regarding your lead response time\n\nHi [First Name],\n\nWe noticed your team is currently processing inbound leads manually. Our AI Sales Agent connects directly with HubSpot to engage prospects in <15 seconds, increasing meeting booking rates by 3x.\n\nWould you be open to a 5-minute interactive preview?`;
      } else {
        text = `🚀 Autonomous AI Voice & Chat Agents are now live for enterprise operations! Automate 80% of customer support tickets with zero hallucinations. Built on RAG knowledge bases and vector search. #AIAutomation #n8n #TechInnovation`;
      }
      setGeneratedContent(text);
    }, 1000);
  };

  // Simulate RAG Search
  const handleRagSearch = (e) => {
    e.preventDefault();
    if (!ragQuery.trim()) return;

    setTimeout(() => {
      setRagResult({
        answer: 'APITIDE provides a 14-day free pilot with 99.9% SLA uptime guarantees, enterprise AES-256 data encryption, and zero public AI model training on client business data.',
        sources: [
          { title: 'APITIDE Security Architecture v4.2.pdf', page: 'Page 12, Section 3.1' },
          { title: 'SLA Uptime & Maintenance Agreement.docx', page: 'Page 4' }
        ]
      });
    }, 800);
  };

  // 9 AI Tools Master Array
  const allToolsList = [
    {
      id: 'support-agent',
      category: 'support',
      title: 'AI Customer Support Agent',
      icon: 'fas fa-comment-dots',
      color: '#38BDF8',
      desc: '24/7 intelligent voice and chat support agent trained on your business knowledge. Resolves 80% of inquiries with zero human intervention.',
      tags: ['GPT-4o', 'LangChain', 'RAG', 'WebSocket'],
      metrics: [
        { label: 'Auto Resolution', value: '80%' },
        { label: 'Availability', value: '24/7' },
        { label: 'Cost Reduction', value: '-65%' }
      ]
    },
    {
      id: 'doc-processing',
      category: 'automation',
      title: 'Intelligent Document Processing',
      icon: 'fas fa-file-alt',
      color: '#2563EB',
      desc: 'Extract, classify, and structure invoices, contracts, and forms at scale with 99.2% accuracy. Auto-populate ERPs and databases.',
      tags: ['OCR', 'GPT-4 Vision', 'FastAPI', 'Python'],
      metrics: [
        { label: 'Accuracy', value: '99.2%' },
        { label: 'Speed', value: '500ms' },
        { label: 'Manual Time Saved', value: '-90%' }
      ]
    },
    {
      id: 'sales-lead',
      category: 'sales',
      title: 'AI Sales & Lead Generation Engine',
      icon: 'fas fa-funnel-dollar',
      color: '#F97316',
      desc: 'Automated prospect research, lead scoring, and personalized outreach email sequences. CRM-integrated to book meetings while you sleep.',
      tags: ['n8n', 'OpenAI', 'HubSpot', 'Apollo'],
      metrics: [
        { label: 'More Leads', value: '3x' },
        { label: 'Conv. Rate', value: '+40%' },
        { label: 'Time Saved', value: '85%' }
      ]
    },
    {
      id: 'predictive-analytics',
      category: 'analytics',
      title: 'Predictive Analytics & BI AI',
      icon: 'fas fa-chart-line',
      color: '#10B981',
      desc: 'Forecast revenue, detect customer churn risks 3 weeks in advance, and query complex databases using natural conversational English.',
      tags: ['Python', 'Prophet', 'Plotly', 'Gemini'],
      metrics: [
        { label: 'Forecast Accuracy', value: '94%' },
        { label: 'Look-Ahead', value: '30 Days' },
        { label: 'Dashboards', value: 'Real-time' }
      ]
    },
    {
      id: 'content-engine',
      category: 'content',
      title: 'AI Content Generation Suite',
      icon: 'fas fa-pen-nib',
      color: '#A78BFA',
      desc: 'SEO blog posts, product descriptions, email campaigns, and social media content written in your brand voice with direct CMS publishing.',
      tags: ['GPT-4', 'Claude', 'WordPress', 'Shopify'],
      metrics: [
        { label: 'Content Types', value: '50+' },
        { label: 'Languages', value: '12' },
        { label: 'Writing Time', value: '-80%' }
      ]
    },
    {
      id: 'voice-agent',
      category: 'support',
      title: 'AI Voice & Phone Receptionist',
      icon: 'fas fa-microphone-alt',
      color: '#F472B6',
      desc: 'Human-sounding inbound/outbound phone calls for appointment scheduling, customer intake, and phone surveys with ultra-low latency.',
      tags: ['Twilio', 'VAPI', 'Whisper', 'ElevenLabs'],
      metrics: [
        { label: 'Human-like Naturalness', value: '98%' },
        { label: 'Latency', value: '<250ms' },
        { label: 'Call Cost', value: '-70%' }
      ]
    },
    {
      id: 'rag-kb',
      category: 'automation',
      title: 'RAG Enterprise Knowledge Base',
      icon: 'fas fa-database',
      color: '#38BDF8',
      desc: 'Train custom AI on your entire company PDF archives, internal wikis, and SOPs. Instant precise answers with exact source page citations.',
      tags: ['Pinecone', 'Qdrant', 'LangChain', 'OpenAI'],
      metrics: [
        { label: 'Document Capacity', value: '10M+ Tokens' },
        { label: 'Search Speed', value: '< 1s' },
        { label: 'Hallucinations', value: 'Zero' }
      ]
    },
    {
      id: 'inventory-ai',
      category: 'analytics',
      title: 'Inventory & Demand Forecasting AI',
      icon: 'fas fa-boxes',
      color: '#10B981',
      desc: 'Predict stock demand requirements, auto-trigger reorders at optimal thresholds, and prevent stockouts or expensive warehouse overstock.',
      tags: ['Prophet', 'Supabase', 'n8n', 'Shopify'],
      metrics: [
        { label: 'Holding Costs', value: '-35%' },
        { label: 'Stockouts', value: '-92%' },
        { label: 'Profit Margin', value: '+28%' }
      ]
    },
    {
      id: 'email-marketing',
      category: 'sales',
      title: 'AI Hyper-Personalized Email Engine',
      icon: 'fas fa-envelope-open-text',
      color: '#F97316',
      desc: 'Hyper-personalized automated email sequences with optimal send-time prediction, AI subject line testing, and behavioral trigger flows.',
      tags: ['GPT-4', 'Mailchimp', 'SendGrid', 'n8n'],
      metrics: [
        { label: 'Open Rate', value: '+62%' },
        { label: 'Click Rate', value: '+38%' },
        { label: 'Average ROI', value: '5x' }
      ]
    }
  ];

  // Filter Tools
  const filteredTools = allToolsList.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ paddingTop: '100px', paddingBottom: '80px' }} className="section-dark-navy">
      {/* ──────────────────────────────────────────────────────────────────────────
         1. HERO SECTION WITH INTERACTIVE CHAT CARD
         ────────────────────────────────────────────────────────────────────────── */}
      <section className="ai-tools-hero-section">
        <div className="container">
          <div className="ai-hero-layout">
            {/* Left Hero Copy */}
            <div className="ai-hero-text-side">
              <span className="pill-badge orange mb-4 inline-flex items-center gap-2">
                <i className="fas fa-brain"></i> ENTERPRISE AI SUITE • DEPLOYED IN DAYS
              </span>
              <h1 className="section-title text-left hero-headline-custom">
                Intelligent <span className="gradient-text-blue">AI Tools</span> Built for <span className="gradient-text-orange">Modern Enterprises</span>
              </h1>
              <p className="section-subtitle text-left mb-6">
                9 production-ready AI solutions engineered to automate operational bottlenecks, scale customer interactions 24/7, and generate measurable ROI — seamlessly integrated into your existing tech stack.
              </p>

              <div className="hero-cta-group mb-8">
                <a href="#tools" className="cta-btn primary">
                  <i className="fas fa-robot"></i> Explore 9 AI Tools
                </a>
                <a href="#interactive-playground" className="cta-btn secondary">
                  <i className="fas fa-play-circle"></i> Try Live Demos
                </a>
              </div>

              {/* Hero Key Stats Bar */}
              <div className="hero-stats-strip">
                <div className="stat-pill">
                  <strong className="stat-num text-cyan">9</strong>
                  <span className="stat-text">Production Tools</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-pill">
                  <strong className="stat-num text-blue">100+</strong>
                  <span className="stat-text">Enterprise Pilots</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-pill">
                  <strong className="stat-num text-green">99.2%</strong>
                  <span className="stat-text">OCR Accuracy</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-pill">
                  <strong className="stat-num text-orange">14 Days</strong>
                  <span className="stat-text">Free Pilot</span>
                </div>
              </div>
            </div>

            {/* Right Interactive AI Support Agent Live Demo Card */}
            <div className="ai-hero-demo-side">
              <div className="glass-card hero-chat-card">
                <div className="chat-card-header">
                  <div className="live-indicator">
                    <span className="dot-pulse"></span>
                    <span className="live-title">AI Support Agent • Online</span>
                  </div>
                  <span className="badge-pill">GPT-4o Powered</span>
                </div>

                <div className="chat-messages-container">
                  {heroMessages.map((msg, index) => (
                    <div key={index} className={`chat-bubble-row ${msg.sender}`}>
                      <div className="chat-avatar">
                        <i className={msg.sender === 'ai' ? "fas fa-robot" : "fas fa-user"}></i>
                      </div>
                      <div className={`chat-bubble-bubble ${msg.sender}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {heroIsTyping && (
                    <div className="chat-bubble-row ai">
                      <div className="chat-avatar"><i className="fas fa-robot"></i></div>
                      <div className="chat-bubble-bubble ai typing">
                        <span className="dot-anim"></span>
                        <span className="dot-anim"></span>
                        <span className="dot-anim"></span>
                      </div>
                    </div>
                  )}
                  <div ref={heroChatEndRef} />
                </div>

                {/* Quick Action Buttons */}
                <div className="quick-prompts-row">
                  <button onClick={() => handleHeroSend('📦 Track my order #9482')} className="prompt-btn">
                    📦 Track Order
                  </button>
                  <button onClick={() => handleHeroSend('↩️ How do I return an item?')} className="prompt-btn">
                    ↩️ Free Returns
                  </button>
                  <button onClick={() => handleHeroSend('💳 What payment options do you support?')} className="prompt-btn">
                    💳 Payments
                  </button>
                  <button onClick={() => handleHeroSend('🚀 Request a 14-day free AI pilot')} className="prompt-btn highlight">
                    🚀 Free Pilot
                  </button>
                </div>

                {/* Input Bar */}
                <form onSubmit={(e) => { e.preventDefault(); handleHeroSend(); }} className="chat-input-bar">
                  <input
                    type="text"
                    placeholder="Ask AI agent anything (e.g. Order #9482)..."
                    value={heroInput}
                    onChange={(e) => setHeroInput(e.target.value)}
                    className="chat-input-field"
                  />
                  <button type="submit" className="chat-send-btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
         2. SEARCH & FILTERABLE 9 AI TOOLS GRID
         ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding-custom" id="tools">
        <div className="container">
          <div className="section-head-center">
            <span className="pill-badge cyan mb-3 inline-block">
              <i className="fas fa-cubes"></i> ENTERPRISE CATALOG
            </span>
            <h2 className="section-title">
              Production-Ready <span className="gradient-text-cyan">AI Solutions</span>
            </h2>
            <p className="section-subtitle">
              Browse our suite of 9 custom-engineered AI tools. Filter by operational category or technology stack.
            </p>
          </div>

          {/* Filter Bar & Search Input */}
          <div className="tools-filter-controls">
            <div className="search-box-wrap">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search AI tools, technologies (GPT-4o, n8n, RAG, Twilio)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="tools-search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="clear-search-btn">
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>

            <div className="category-filter-pills">
              <button
                className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All 9 Tools
              </button>
              <button
                className={`filter-pill ${selectedCategory === 'support' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('support')}
              >
                <i className="fas fa-headset"></i> Support & Voice
              </button>
              <button
                className={`filter-pill ${selectedCategory === 'automation' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('automation')}
              >
                <i className="fas fa-cogs"></i> Automation & RAG
              </button>
              <button
                className={`filter-pill ${selectedCategory === 'sales' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('sales')}
              >
                <i className="fas fa-chart-line"></i> Sales & Marketing
              </button>
              <button
                className={`filter-pill ${selectedCategory === 'analytics' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('analytics')}
              >
                <i className="fas fa-chart-pie"></i> Predictive Analytics
              </button>
              <button
                className={`filter-pill ${selectedCategory === 'content' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('content')}
              >
                <i className="fas fa-pen-fancy"></i> Content Engine
              </button>
            </div>
          </div>

          {/* 9 Tools Cards Grid */}
          <div className="tools-master-grid">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="glass-card tool-master-card">
                <div className="tool-card-top">
                  <div className="tool-icon-avatar" style={{ background: `${tool.color}15`, color: tool.color, borderColor: `${tool.color}40` }}>
                    <i className={tool.icon}></i>
                  </div>
                  <span className="category-tag-pill">{tool.category.toUpperCase()}</span>
                </div>

                <h3 className="tool-card-title">{tool.title}</h3>
                <p className="tool-card-desc">{tool.desc}</p>

                {/* Tech Stack Badges */}
                <div className="tool-tags-container">
                  {tool.tags.map((tag, i) => (
                    <span key={i} className="tech-badge">{tag}</span>
                  ))}
                </div>

                {/* 3 KPI Metrics */}
                <div className="tool-kpi-row">
                  {tool.metrics.map((m, idx) => (
                    <div key={idx} className="kpi-block">
                      <span className="kpi-val" style={{ color: tool.color }}>{m.value}</span>
                      <span className="kpi-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="tool-card-footer">
                  <a href="#interactive-playground" onClick={() => setActiveDemoTab(tool.id === 'doc-processing' ? 'document' : tool.id === 'sales-lead' ? 'sales' : tool.id === 'predictive-analytics' || tool.id === 'inventory-ai' ? 'analytics' : tool.id === 'content-engine' || tool.id === 'email-marketing' ? 'content' : tool.id === 'rag-kb' ? 'rag' : 'chatbot')} className="tool-demo-trigger-btn">
                    Launch Interactive Demo <i className="fas fa-arrow-right icon"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="no-results-box glass-card">
              <i className="fas fa-search-minus icon"></i>
              <h4>No AI Tools match "{searchQuery}"</h4>
              <p>Try searching for terms like "GPT-4o", "n8n", "RAG", "Twilio", or "Support".</p>
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="cta-btn secondary small">
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
         3. INTERACTIVE AI PLAYGROUND (LIVE TABBED DEMO SUITE)
         ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding-custom bg-gradient-dark" id="interactive-playground">
        <div className="container">
          <div className="section-head-center">
            <span className="pill-badge orange mb-3 inline-block">
              <i className="fas fa-play-circle"></i> LIVE DEMO PLAYGROUND
            </span>
            <h2 className="section-title">
              Test Live AI Tools <span className="gradient-text-orange">Right Now</span>
            </h2>
            <p className="section-subtitle">
              Interact with functional previews of our core AI systems. No login required.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="playground-tabs-bar">
            <button
              className={`playground-tab ${activeDemoTab === 'chatbot' ? 'active' : ''}`}
              onClick={() => setActiveDemoTab('chatbot')}
            >
              💬 AI Customer Chatbot
            </button>
            <button
              className={`playground-tab ${activeDemoTab === 'document' ? 'active' : ''}`}
              onClick={() => setActiveDemoTab('document')}
            >
              📄 Document OCR Processing
            </button>
            <button
              className={`playground-tab ${activeDemoTab === 'sales' ? 'active' : ''}`}
              onClick={() => setActiveDemoTab('sales')}
            >
              🎯 Sales Lead Engine
            </button>
            <button
              className={`playground-tab ${activeDemoTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveDemoTab('analytics')}
            >
              📊 Predictive Analytics
            </button>
            <button
              className={`playground-tab ${activeDemoTab === 'content' ? 'active' : ''}`}
              onClick={() => setActiveDemoTab('content')}
            >
              ✍️ AI Content Writer
            </button>
            <button
              className={`playground-tab ${activeDemoTab === 'rag' ? 'active' : ''}`}
              onClick={() => setActiveDemoTab('rag')}
            >
              🧠 RAG Knowledge Search
            </button>
          </div>

          {/* Active Playground Window */}
          <div className="glass-card playground-window">
            {/* Tab 1: Chatbot */}
            {activeDemoTab === 'chatbot' && (
              <div className="playground-layout-grid">
                <div className="demo-interactive-box">
                  <div className="box-header">
                    <span className="dot green"></span>
                    <span className="header-title">Live Chatbot Preview • Connected to Vector DB</span>
                  </div>
                  <div className="box-chat-messages">
                    {playgroundChat.map((m, idx) => (
                      <div key={idx} className={`chat-bubble-row ${m.sender}`}>
                        <div className={`chat-bubble-bubble ${m.sender}`}>{m.text}</div>
                      </div>
                    ))}
                  </div>
                  <div className="quick-prompts-row mb-3">
                    <button onClick={() => handlePlaygroundChatSend('📦 Track my order #12345')} className="prompt-btn">
                      📦 Track Order #12345
                    </button>
                    <button onClick={() => handlePlaygroundChatSend('↩️ How do I return an item?')} className="prompt-btn">
                      ↩️ Return Policy
                    </button>
                    <button onClick={() => handlePlaygroundChatSend('💳 Payment options')} className="prompt-btn">
                      💳 Payments
                    </button>
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); handlePlaygroundChatSend(); }} className="chat-input-bar">
                    <input
                      type="text"
                      placeholder="Type a support question..."
                      value={playgroundChatInput}
                      onChange={(e) => setPlaygroundChatInput(e.target.value)}
                      className="chat-input-field"
                    />
                    <button type="submit" className="chat-send-btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
                <div className="demo-explanation-box">
                  <h4 className="title-cyan"><i className="fas fa-robot"></i> AI Support Agent Specs</h4>
                  <ul className="specs-list">
                    <li><i className="fas fa-check-circle check"></i> Instant 24/7 automated resolution of customer queries</li>
                    <li><i className="fas fa-check-circle check"></i> RAG vector search over your FAQs, WooCommerce & Shopify</li>
                    <li><i className="fas fa-check-circle check"></i> Intelligent human escalation with full conversation history</li>
                    <li><i className="fas fa-check-circle check"></i> Deployable on Web Widgets, WhatsApp Business, Telegram</li>
                  </ul>
                  <div className="kpi-highlights">
                    <div className="kpi-pill"><strong>80%</strong><span>Query Resolution</span></div>
                    <div className="kpi-pill"><strong>&lt;2s</strong><span>Response Time</span></div>
                    <div className="kpi-pill"><strong>4.9★</strong><span>Customer Rating</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Document OCR */}
            {activeDemoTab === 'document' && (
              <div className="playground-layout-grid">
                <div className="demo-interactive-box">
                  <div className="box-header">
                    <span className="dot blue"></span>
                    <span className="header-title">Document OCR Processing Engine • GPT-4 Vision</span>
                  </div>
                  <div className="ocr-upload-zone" onClick={handleSimulateDoc}>
                    <i className="fas fa-cloud-upload-alt upload-icon"></i>
                    <h4>Click to Upload or Simulate Invoice Processing</h4>
                    <p>Supports PDF, PNG, JPG invoices, contracts & purchase orders</p>
                    <button className="cta-btn primary small mt-3" disabled={isProcessingDoc}>
                      {isProcessingDoc ? <span><i className="fas fa-spinner fa-spin"></i> Extracting Data...</span> : <span><i className="fas fa-magic"></i> Process Sample Invoice</span>}
                    </button>
                  </div>

                  {docResult && (
                    <div className="ocr-json-output">
                      <div className="json-header">EXTRACTED STRUCTURAL JSON DATA ({docResult.confidenceScore} CONFIDENCE)</div>
                      <pre className="json-body">
{JSON.stringify(docResult, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
                <div className="demo-explanation-box">
                  <h4 className="title-blue"><i className="fas fa-file-alt"></i> Intelligent Document AI</h4>
                  <ul className="specs-list">
                    <li><i className="fas fa-check-circle check"></i> Extract line items, tax, vendor details from unstructured PDFs</li>
                    <li><i className="fas fa-check-circle check"></i> 99.2% accuracy powered by OCR + GPT-4 Vision models</li>
                    <li><i className="fas fa-check-circle check"></i> Auto-populate QuickBooks, Xero, SAP, and custom PostgreSQL</li>
                    <li><i className="fas fa-check-circle check"></i> Exception handling workflow for human approval</li>
                  </ul>
                  <div className="kpi-highlights">
                    <div className="kpi-pill"><strong>99.2%</strong><span>Accuracy</span></div>
                    <div className="kpi-pill"><strong>500ms</strong><span>Speed / Page</span></div>
                    <div className="kpi-pill"><strong>-90%</strong><span>Manual Entry</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Sales Lead Prospecting */}
            {activeDemoTab === 'sales' && (
              <div className="playground-layout-grid">
                <div className="demo-interactive-box">
                  <div className="box-header">
                    <span className="dot orange"></span>
                    <span className="header-title">Sales Lead Prospecting & Outreach AI</span>
                  </div>
                  <form onSubmit={handleGenerateLeads} className="sales-form">
                    <label className="form-lbl">Enter target industry or business query:</label>
                    <div className="input-with-btn">
                      <input
                        type="text"
                        placeholder="e.g. SaaS Companies in Logistics, 50-200 Employees..."
                        value={salesQuery}
                        onChange={(e) => setSalesQuery(e.target.value)}
                        className="sales-input"
                      />
                      <button type="submit" className="cta-btn primary small" disabled={isGeneratingLeads}>
                        {isGeneratingLeads ? <i className="fas fa-spinner fa-spin"></i> : <><i className="fas fa-search"></i> Find Leads</>}
                      </button>
                    </div>
                  </form>

                  {salesLeads && (
                    <div className="leads-results-list">
                      {salesLeads.map((lead, idx) => (
                        <div key={idx} className="lead-card-item">
                          <div className="lead-header">
                            <strong className="lead-name">{lead.name}</strong>
                            <span className="fit-badge">{lead.fit}</span>
                          </div>
                          <div className="lead-title">{lead.title} • {lead.company}</div>
                          <div className="lead-meta"><i className="fas fa-map-marker-alt"></i> {lead.location} | <i className="fas fa-envelope"></i> {lead.email}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="demo-explanation-box">
                  <h4 className="title-orange"><i className="fas fa-funnel-dollar"></i> AI Sales Prospector</h4>
                  <ul className="specs-list">
                    <li><i className="fas fa-check-circle check"></i> Autonomous lead prospecting via LinkedIn, Apollo & Web Data</li>
                    <li><i className="fas fa-check-circle check"></i> Automated personalized email sequence dispatches via n8n</li>
                    <li><i className="fas fa-check-circle check"></i> Bi-directional sync with HubSpot, Salesforce & Pipedrive</li>
                    <li><i className="fas fa-check-circle check"></i> Auto-books meetings directly on Google Calendar / Calendly</li>
                  </ul>
                  <div className="kpi-highlights">
                    <div className="kpi-pill"><strong>3x</strong><span>Pipeline Growth</span></div>
                    <div className="kpi-pill"><strong>+40%</strong><span>Reply Rate</span></div>
                    <div className="kpi-pill"><strong>85%</strong><span>Time Saved</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Analytics */}
            {activeDemoTab === 'analytics' && (
              <div className="playground-layout-grid">
                <div className="demo-interactive-box">
                  <div className="box-header">
                    <span className="dot green"></span>
                    <span className="header-title">Predictive Analytics & Natural Language Query AI</span>
                  </div>
                  <form onSubmit={handleAnalyticsQuery} className="sales-form">
                    <label className="form-lbl">Ask any business data question in English:</label>
                    <div className="input-with-btn">
                      <input
                        type="text"
                        placeholder="e.g. Predict Q3 revenue and identify top performing channels..."
                        value={analyticsQuery}
                        onChange={(e) => setAnalyticsQuery(e.target.value)}
                        className="sales-input"
                      />
                      <button type="submit" className="cta-btn primary small">
                        <i className="fas fa-chart-bar"></i> Run Query
                      </button>
                    </div>
                  </form>

                  {analyticsResult && (
                    <div className="analytics-card-result">
                      <div className="analytics-kpi-grid">
                        <div className="kpi-box">
                          <span className="lbl">Forecast Revenue</span>
                          <strong className="val text-green">{analyticsResult.forecast}</strong>
                        </div>
                        <div className="kpi-box">
                          <span className="lbl">YoY Growth</span>
                          <strong className="val text-cyan">{analyticsResult.growth}</strong>
                        </div>
                        <div className="kpi-box">
                          <span className="lbl">Model Confidence</span>
                          <strong className="val text-blue">{analyticsResult.confidence}</strong>
                        </div>
                      </div>
                      <div className="insight-body">
                        <strong>AI Insight:</strong> {analyticsResult.insight}
                      </div>
                    </div>
                  )}
                </div>
                <div className="demo-explanation-box">
                  <h4 className="title-green"><i className="fas fa-chart-line"></i> Predictive BI Engine</h4>
                  <ul className="specs-list">
                    <li><i className="fas fa-check-circle check"></i> Natural language SQL querying — no data analyst required</li>
                    <li><i className="fas fa-check-circle check"></i> 30-day demand and revenue forecasting with Prophet ML</li>
                    <li><i className="fas fa-check-circle check"></i> Automatic churn risk detection with 3-week advance warnings</li>
                    <li><i className="fas fa-check-circle check"></i> Live interactive dashboard reporting built for executives</li>
                  </ul>
                  <div className="kpi-highlights">
                    <div className="kpi-pill"><strong>94%</strong><span>Forecast Accuracy</span></div>
                    <div className="kpi-pill"><strong>Real-time</strong><span>Sync</span></div>
                    <div className="kpi-pill"><strong>-70%</strong><span>Report Time</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 5: Content */}
            {activeDemoTab === 'content' && (
              <div className="playground-layout-grid">
                <div className="demo-interactive-box">
                  <div className="box-header">
                    <span className="dot purple"></span>
                    <span className="header-title">AI Content Generation Suite</span>
                  </div>
                  <div className="content-type-selector mb-3">
                    <button className={`type-btn ${contentType === 'blog' ? 'active' : ''}`} onClick={() => setContentType('blog')}>Blog Post</button>
                    <button className={`type-btn ${contentType === 'email' ? 'active' : ''}`} onClick={() => setContentType('email')}>Cold Email</button>
                    <button className={`type-btn ${contentType === 'social' ? 'active' : ''}`} onClick={() => setContentType('social')}>Social Post</button>
                  </div>
                  <div className="sales-form">
                    <div className="input-with-btn">
                      <input
                        type="text"
                        placeholder="Enter topic (e.g. n8n automation vs Zapier)..."
                        value={contentTopic}
                        onChange={(e) => setContentTopic(e.target.value)}
                        className="sales-input"
                      />
                      <button onClick={handleGenerateContent} className="cta-btn primary small" disabled={isGeneratingContent}>
                        {isGeneratingContent ? <i className="fas fa-spinner fa-spin"></i> : <><i className="fas fa-magic"></i> Generate</>}
                      </button>
                    </div>
                  </div>

                  {generatedContent && (
                    <div className="content-preview-box">
                      <pre className="content-text">{generatedContent}</pre>
                    </div>
                  )}
                </div>
                <div className="demo-explanation-box">
                  <h4 style={{ color: '#A78BFA' }}><i className="fas fa-pen-nib"></i> Content AI Specs</h4>
                  <ul className="specs-list">
                    <li><i className="fas fa-check-circle check"></i> Writes long-form SEO articles with metadata & schema</li>
                    <li><i className="fas fa-check-circle check"></i> Direct automated publishing to WordPress, Webflow, Shopify</li>
                    <li><i className="fas fa-check-circle check"></i> Multi-language output in 12+ international languages</li>
                    <li><i className="fas fa-check-circle check"></i> Maintains exact brand tone of voice and style guidelines</li>
                  </ul>
                  <div className="kpi-highlights">
                    <div className="kpi-pill"><strong>-80%</strong><span>Drafting Time</span></div>
                    <div className="kpi-pill"><strong>50+</strong><span>Templates</span></div>
                    <div className="kpi-pill"><strong>12</strong><span>Languages</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6: RAG Search */}
            {activeDemoTab === 'rag' && (
              <div className="playground-layout-grid">
                <div className="demo-interactive-box">
                  <div className="box-header">
                    <span className="dot cyan"></span>
                    <span className="header-title">RAG Knowledge Base Search</span>
                  </div>
                  <form onSubmit={handleRagSearch} className="sales-form">
                    <div className="input-with-btn">
                      <input
                        type="text"
                        placeholder="Ask anything about APITIDE security, SLA, or pricing..."
                        value={ragQuery}
                        onChange={(e) => setRagQuery(e.target.value)}
                        className="sales-input"
                      />
                      <button type="submit" className="cta-btn primary small">
                        <i className="fas fa-search"></i> Search Docs
                      </button>
                    </div>
                  </form>

                  {ragResult && (
                    <div className="analytics-card-result">
                      <div className="insight-body" style={{ background: 'rgba(56, 189, 248, 0.08)', borderColor: '#38BDF8' }}>
                        <strong className="text-cyan">RAG Verified Answer:</strong>
                        <p style={{ margin: '8px 0 0 0', color: '#F8FAFC' }}>{ragResult.answer}</p>
                      </div>
                      <div className="sources-list mt-3">
                        <span className="lbl">Vector Citations (Zero Hallucination):</span>
                        {ragResult.sources.map((s, idx) => (
                          <div key={idx} className="source-tag">
                            <i className="fas fa-file-pdf"></i> {s.title} ({s.page})
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="demo-explanation-box">
                  <h4 className="title-cyan"><i className="fas fa-database"></i> RAG Vector Search Engine</h4>
                  <ul className="specs-list">
                    <li><i className="fas fa-check-circle check"></i> Ingest company PDFs, Notion, Google Docs, Confluence</li>
                    <li><i className="fas fa-check-circle check"></i> High-speed vector embeddings via Pinecone & Qdrant</li>
                    <li><i className="fas fa-check-circle check"></i> Source page citations attached to every generated response</li>
                    <li><i className="fas fa-check-circle check"></i> Enterprise RBAC permissions to restrict confidential files</li>
                  </ul>
                  <div className="kpi-highlights">
                    <div className="kpi-pill"><strong>10M+</strong><span>Tokens</span></div>
                    <div className="kpi-pill"><strong>&lt; 1s</strong><span>Latency</span></div>
                    <div className="kpi-pill"><strong>Zero</strong><span>Hallucinations</span></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
         4. INDUSTRY USE-CASE SWITCHER
         ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding-custom" id="use-cases">
        <div className="container">
          <div className="section-head-center">
            <span className="pill-badge green mb-3 inline-block">
              <i className="fas fa-industry"></i> SECTOR VERTICALS
            </span>
            <h2 className="section-title">
              AI Tools Customized by <span className="gradient-text-blue">Industry</span>
            </h2>
            <p className="section-subtitle">
              Discover proven ROI metrics and operational use-cases customized for your specific sector.
            </p>
          </div>

          {/* Industry Pills */}
          <div className="industry-pills-bar">
            <button
              className={`ind-pill ${activeIndustry === 'ecommerce' ? 'active' : ''}`}
              onClick={() => setActiveIndustry('ecommerce')}
            >
              🛒 E-Commerce & Retail
            </button>
            <button
              className={`ind-pill ${activeIndustry === 'healthcare' ? 'active' : ''}`}
              onClick={() => setActiveIndustry('healthcare')}
            >
              🏥 Healthcare & Clinics
            </button>
            <button
              className={`ind-pill ${activeIndustry === 'finance' ? 'active' : ''}`}
              onClick={() => setActiveIndustry('finance')}
            >
              💰 Finance & Banking
            </button>
            <button
              className={`ind-pill ${activeIndustry === 'restaurant' ? 'active' : ''}`}
              onClick={() => setActiveIndustry('restaurant')}
            >
              🍽️ Hospitality & Food
            </button>
            <button
              className={`ind-pill ${activeIndustry === 'saas' ? 'active' : ''}`}
              onClick={() => setActiveIndustry('saas')}
            >
              ⚙️ SaaS & Tech
            </button>
            <button
              className={`ind-pill ${activeIndustry === 'realestate' ? 'active' : ''}`}
              onClick={() => setActiveIndustry('realestate')}
            >
              🏠 Real Estate & PropTech
            </button>
          </div>

          {/* Active Industry Cards Grid */}
          <div className="usecase-cards-grid">
            {activeIndustry === 'ecommerce' && (
              <>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">🤖</div>
                  <h4>AI Support Chatbot</h4>
                  <p>Auto-resolves shipping, order status, and return requests with Shopify sync.</p>
                  <span className="roi-badge text-cyan">ROI: -65% Support Costs</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">📦</div>
                  <h4>Inventory Forecasting</h4>
                  <p>Predict stock requirements, auto-trigger reorders, and prevent stockouts.</p>
                  <span className="roi-badge text-green">ROI: -35% Holding Costs</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">✉️</div>
                  <h4>AI Abandoned Cart Flow</h4>
                  <p>Hyper-personalized email sequences with AI subject lines and send-time optimization.</p>
                  <span className="roi-badge text-orange">ROI: +62% Open Rate</span>
                </div>
              </>
            )}

            {activeIndustry === 'healthcare' && (
              <>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">📋</div>
                  <h4>Medical Document OCR</h4>
                  <p>Extract diagnoses, prescriptions, and lab reports into EHR with 99.2% accuracy.</p>
                  <span className="roi-badge text-blue">ROI: -90% Admin Time</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">📅</div>
                  <h4>Patient Booking AI Bot</h4>
                  <p>Automated appointment scheduling and SMS reminders to eliminate no-shows.</p>
                  <span className="roi-badge text-green">ROI: -60% No-Shows</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">🧠</div>
                  <h4>Clinical RAG Knowledge Base</h4>
                  <p>Instant protocol lookups for doctors and nursing staff with source citations.</p>
                  <span className="roi-badge text-cyan">ROI: -70% Lookup Time</span>
                </div>
              </>
            )}

            {activeIndustry === 'finance' && (
              <>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">📊</div>
                  <h4>Risk & Fraud AI Analytics</h4>
                  <p>Real-time transaction fraud scoring and credit risk analysis on 50+ data signals.</p>
                  <span className="roi-badge text-orange">ROI: -40% Fraud Losses</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">📄</div>
                  <h4>KYC Document Intelligence</h4>
                  <p>Instant passport and bank statement extraction with automated compliance verification.</p>
                  <span className="roi-badge text-blue">ROI: -75% Processing Time</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">🤖</div>
                  <h4>AI Wealth Advisory Assistant</h4>
                  <p>Trained on investment products to answer customer queries with zero hallucinations.</p>
                  <span className="roi-badge text-green">ROI: +45% Lead Conversion</span>
                </div>
              </>
            )}

            {activeIndustry === 'restaurant' && (
              <>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">📞</div>
                  <h4>AI Phone Reservation Agent</h4>
                  <p>Inbound AI voice agent answers phone calls, books tables, and manages waitlists.</p>
                  <span className="roi-badge text-cyan">ROI: 100% Calls Answered</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">📦</div>
                  <h4>Ingredient Demand Forecasting</h4>
                  <p>Predict weekly food prep requirements to reduce food waste and inventory loss.</p>
                  <span className="roi-badge text-green">ROI: -30% Food Waste</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">⭐</div>
                  <h4>Review Response Automation</h4>
                  <p>AI monitors Google Reviews & Yelp, drafting personalized manager replies in seconds.</p>
                  <span className="roi-badge text-orange">ROI: +1.2★ Rating Increase</span>
                </div>
              </>
            )}

            {activeIndustry === 'saas' && (
              <>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">⚙️</div>
                  <h4>Churn Prediction Engine</h4>
                  <p>Detect product usage drops and alert account managers 3 weeks before customer churn.</p>
                  <span className="roi-badge text-orange">ROI: -28% Churn Rate</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">💬</div>
                  <h4>Developer Docs RAG Bot</h4>
                  <p>Answers API questions and generates code snippets directly from technical documentation.</p>
                  <span className="roi-badge text-blue">ROI: -75% Support Tickets</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">🎯</div>
                  <h4>AI Lead Enrichment Flow</h4>
                  <p>Enrich signup emails with company revenue, tech stack, and LinkedIn profile data.</p>
                  <span className="roi-badge text-cyan">ROI: 3x Qualified Leads</span>
                </div>
              </>
            )}

            {activeIndustry === 'realestate' && (
              <>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">🏠</div>
                  <h4>Property Qualification Bot</h4>
                  <p>Qualify home buyers on WhatsApp/Zillow 24/7 and schedule agent property tours.</p>
                  <span className="roi-badge text-cyan">ROI: 4x More Showings</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">📑</div>
                  <h4>Lease Contract OCR</h4>
                  <p>Extract tenant terms, rent amounts, and expiration dates into property management software.</p>
                  <span className="roi-badge text-blue">ROI: -85% Admin Work</span>
                </div>
                <div className="glass-card usecase-card">
                  <div className="icon-emoji">📞</div>
                  <h4>AI Phone Screening Agent</h4>
                  <p>Inbound AI voice receptionist screens tenant calls and filters pre-qualification data.</p>
                  <span className="roi-badge text-green">ROI: 80% Time Saved</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
         5. TRANSPARENT PRICING GRID
         ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding-custom bg-gradient-dark" id="pricing">
        <div className="container">
          <div className="section-head-center">
            <span className="pill-badge blue mb-3 inline-block">
              <i className="fas fa-tags"></i> TRANSPARENT PRICING
            </span>
            <h2 className="section-title">
              Flexible <span className="gradient-text-blue">AI Tool Deployment</span>
            </h2>
            <p className="section-subtitle">
              Fixed-scope monthly plans with zero hidden costs. Includes 14-day free pilot and full setup.
            </p>
          </div>

          <div className="pricing-cards-grid">
            {/* Starter Plan */}
            <div className="glass-card pricing-plan-card">
              <div className="plan-badge">STARTER</div>
              <div className="plan-price">
                <span className="currency">$</span>99<span className="period">/mo</span>
              </div>
              <p className="plan-desc">Ideal for small businesses deploying their first single AI tool with full integration.</p>

              <ul className="plan-features-list">
                <li><i className="fas fa-check check"></i> 1 AI Tool of your choice</li>
                <li><i className="fas fa-check check"></i> Up to 5,000 AI interactions/mo</li>
                <li><i className="fas fa-check check"></i> 2 custom API integration connections</li>
                <li><i className="fas fa-check check"></i> Email & chat support (24h SLA)</li>
                <li><i className="fas fa-check check"></i> Basic monitoring dashboard</li>
              </ul>

              <Link to="/contact?plan=starter" className="cta-btn secondary full-width mt-6">
                Start 14-Day Free Pilot
              </Link>
            </div>

            {/* Growth Plan (Featured) */}
            <div className="glass-card pricing-plan-card featured">
              <div className="popular-ribbon">MOST POPULAR</div>
              <div className="plan-badge text-orange">GROWTH SUITE</div>
              <div className="plan-price">
                <span className="currency">$</span>299<span className="period">/mo</span>
              </div>
              <p className="plan-desc">Full-stack AI suite for growing enterprises automating multiple departments simultaneously.</p>

              <ul className="plan-features-list">
                <li><i className="fas fa-check check"></i> 3 AI Tools bundled together</li>
                <li><i className="fas fa-check check"></i> Up to 50,000 AI interactions/mo</li>
                <li><i className="fas fa-check check"></i> Unlimited API & CRM integrations</li>
                <li><i className="fas fa-check check"></i> Priority 1-on-1 Slack engineering support</li>
                <li><i className="fas fa-check check"></i> Custom AI model training on your data</li>
                <li><i className="fas fa-check check"></i> Real-time Grafana analytics dashboard</li>
              </ul>

              <Link to="/contact?plan=growth" className="cta-btn primary full-width mt-6">
                Start Growth Pilot — Popular
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-card pricing-plan-card">
              <div className="plan-badge text-cyan">ENTERPRISE</div>
              <div className="plan-price custom">
                Custom
              </div>
              <p className="plan-desc">Bespoke AI architecture for enterprise leaders needing unlimited scale, white-labeling, and on-premise deployments.</p>

              <ul className="plan-features-list">
                <li><i className="fas fa-check check"></i> All 9 AI Tools included</li>
                <li><i className="fas fa-check check"></i> Unlimited AI interactions & throughput</li>
                <li><i className="fas fa-check check"></i> Dedicated AI Solutions Engineer</li>
                <li><i className="fas fa-check check"></i> 99.9% SLA uptime guarantee</li>
                <li><i className="fas fa-check check"></i> White-labeling & custom domain branding</li>
                <li><i className="fas fa-check check"></i> On-premise or private AWS/Azure cloud deployment</li>
              </ul>

              <Link to="/contact?plan=enterprise" className="cta-btn secondary full-width mt-6">
                Request Enterprise Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
         6. FAQ ACCORDION SECTION
         ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding-custom" id="faq">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-head-center">
            <span className="pill-badge cyan mb-3 inline-block">
              <i className="fas fa-question-circle"></i> FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="section-title">
              AI Tools <span className="gradient-text-cyan">FAQ</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about deployment timelines, data privacy, and pilot guarantees.
            </p>
          </div>

          <div className="faq-accordion-list">
            {[
              {
                q: 'How fast can an AI tool be deployed for my business?',
                a: 'Standard AI tools (e.g. AI Customer Support Agent, Document OCR, Content Engine) are configured and integrated into your CRM or website in 3 to 5 business days. Custom Enterprise architectures take 10 to 14 days.'
              },
              {
                q: 'Do you use my private company data to train public AI models?',
                a: 'Zero. We enforce strict enterprise privacy standards. All data processing occurs using zero-data-retention APIs or isolated private vector instances. Your business data is never sold or used to train public LLM models.'
              },
              {
                q: 'How does the 14-day free pilot work?',
                a: 'We configure 1 AI tool for your workflow free of charge for 14 days. You test live interactions with real data. If you are satisfied with the performance metrics and ROI, we activate your monthly subscription.'
              },
              {
                q: 'What integrations do your AI tools support?',
                a: 'Our tools connect via native n8n nodes, webhooks, and REST APIs to over 500+ platforms including HubSpot, Salesforce, Shopify, QuickBooks, Twilio, WhatsApp, Slack, PostgreSQL, AWS, and Google Workspace.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className={`glass-card faq-item-card ${openFaq === idx ? 'active' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-question-header">
                  <h4>{faq.q}</h4>
                  <i className={`fas ${openFaq === idx ? 'fa-minus' : 'fa-plus'} icon`}></i>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card cta-banner-card" style={{ padding: '50px 30px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,58,138,0.4))', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <h2 className="section-title mb-3">
              Ready to Automate Operations with <span className="gradient-text-cyan">Intelligent AI?</span>
            </h2>
            <p className="section-subtitle mb-6" style={{ maxWidth: '650px', margin: '0 auto 24px' }}>
              Schedule a 15-minute engineering call to claim your 14-day free pilot and custom system blueprint.
            </p>
            <Link to="/contact" className="cta-btn primary large">
              <i className="fas fa-rocket"></i> Claim Your 14-Day Free Pilot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
