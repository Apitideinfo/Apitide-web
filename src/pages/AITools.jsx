import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AITools() {
  // Search & Category Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Hero Chatbot State
  const [heroMessages, setHeroMessages] = useState([
    { sender: 'ai', text: '👋 Hello! I am APITIDE’s Enterprise AI Support Agent. How can I assist your business operations today?' }
  ]);
  const [heroInput, setHeroInput] = useState('');
  const [heroIsTyping, setHeroIsTyping] = useState(false);
  const heroChatEndRef = useRef(null);

  // Interactive Playground Tab State
  const [activeDemoTab, setActiveDemoTab] = useState('chatbot');

  // Interactive Playground Sub-States
  const [playgroundChat, setPlaygroundChat] = useState([
    { sender: 'ai', text: '🤖 I am trained on enterprise product catalogs, FAQs, and policies. Try asking a support or order question!' }
  ]);
  const [playgroundChatInput, setPlaygroundChatInput] = useState('');

  // OCR Document Processing State
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
  const [openFaq, setOpenFaq] = useState(0);

  // Auto-scroll hero chat container
  useEffect(() => {
    heroChatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [heroMessages, heroIsTyping]);

  // Hero Chat Message Handler
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
        aiReply = '📦 Order #9482 is currently in transit via FedEx Express. Estimated delivery: Tomorrow at 2:00 PM.';
      } else if (lower.includes('return') || lower.includes('refund')) {
        aiReply = '↩️ Returns are 100% free within 30 days. Would you like me to issue a prepaid shipping label now?';
      } else if (lower.includes('payment') || lower.includes('pay')) {
        aiReply = '💳 We accept Stripe, Credit Cards, Apple Pay, PayPal, and Direct Bank Wire Transfers with automated invoicing.';
      } else if (lower.includes('pilot') || lower.includes('demo') || lower.includes('book')) {
        aiReply = '🚀 Fantastic! Click "Book Consultation" below to claim your 14-day free pilot with our engineering team.';
      }

      setHeroMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
      setHeroIsTyping(false);
    }, 900);
  };

  // Playground Chat Handler
  const handlePlaygroundChatSend = (customText) => {
    const textToSend = customText || playgroundChatInput;
    if (!textToSend.trim()) return;

    setPlaygroundChat(prev => [...prev, { sender: 'user', text: textToSend }]);
    if (!customText) setPlaygroundChatInput('');

    setTimeout(() => {
      let aiReply = 'Our RAG pipeline fetched exact details from your internal vector database with zero hallucinations.';
      const lower = textToSend.toLowerCase();
      if (lower.includes('track') || lower.includes('12345')) {
        aiReply = '📦 Order #12345 verified: Status — Out for delivery with courier. Driver arrival window: 1:30 PM - 3:00 PM.';
      } else if (lower.includes('return') || lower.includes('policy')) {
        aiReply = '↩️ Enterprise Return Policy: Items in original packaging are eligible for 100% instant refund within 30 days.';
      } else if (lower.includes('payment')) {
        aiReply = '💳 Supported Gateways: Stripe, Visa, Mastercard, AMEX, ACH Wire Transfer, and USD Stablecoins.';
      }

      setPlaygroundChat(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 750);
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
        invoiceDate: '2026-08-10',
        totalAmount: '$14,850.00',
        tax: '$1,188.00',
        lineItems: [
          { description: 'Server Container Hosting Cluster', qty: 4, unitPrice: '$2,500.00' },
          { description: 'n8n Enterprise Automation License', qty: 1, unitPrice: '$4,850.00' }
        ],
        ocrConfidenceScore: '99.4%',
        processingTime: '420ms',
        status: 'Auto-Approved & Dispatched to QuickBooks ERP'
      });
    }, 1100);
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
        { name: 'David Vance', title: 'VP of Engineering', company: 'Apex Global Logistics', location: 'Austin, TX', matchScore: '98% Ideal Fit', email: 'd.vance@apexlogistics.io' },
        { name: 'Sarah Jenkins', title: 'Chief Operations Officer', company: 'FinPulse Systems', location: 'New York, NY', matchScore: '95% Ideal Fit', email: 's.jenkins@finpulse.com' },
        { name: 'Elena Rostova', title: 'Head of Automation', company: 'CloudScale SaaS', location: 'San Francisco, CA', matchScore: '92% Ideal Fit', email: 'elena@cloudscale.app' }
      ]);
    }, 1000);
  };

  // Simulate Analytics Query
  const handleAnalyticsQuery = (e) => {
    e.preventDefault();
    if (!analyticsQuery.trim()) return;

    setTimeout(() => {
      setAnalyticsResult({
        userQuery: analyticsQuery,
        forecastedRevenue: '$184,500.00',
        yoyGrowthRate: '+32.4% YoY',
        modelConfidence: '96.2%',
        executiveInsight: 'Based on Q2 sales velocity and active n8n automation pipelines, projected Q3 revenue exceeds target by $42K. Key driver: Automated lead response workflows.'
      });
    }, 850);
  };

  // Simulate Content Generation
  const handleGenerateContent = () => {
    if (!contentTopic.trim()) return;
    setIsGeneratingContent(true);
    setGeneratedContent('');

    setTimeout(() => {
      setIsGeneratingContent(false);
      let output = '';
      if (contentType === 'blog') {
        output = `Title: How Self-Hosted n8n Workflows Cut SaaS Operational Costs by 70%\n\nIn 2026, enterprise tech teams are shifting from legacy Zapier subscriptions toward self-hosted n8n automation pipelines. By embedding custom FastAPI wrappers and AI nodes, engineering organizations save thousands monthly while preserving 100% data privacy...`;
      } else if (contentType === 'email') {
        output = `Subject: Quick question regarding your team's inbound lead response time\n\nHi [First Name],\n\nWe noticed your team is currently handling inbound lead qualification manually. Our AI Sales Agent connects with HubSpot to engage prospects in under 15 seconds, increasing meeting booking rates by 3x.\n\nWould you be open to a 5-minute interactive preview this Thursday?`;
      } else {
        output = `🚀 Autonomous AI Voice & Chat Agents are now live for enterprise operations! Automate 80% of customer support tickets with zero hallucinations. Built on RAG vector search and n8n workflows. #AIAutomation #n8n #EnterpriseAI`;
      }
      setGeneratedContent(output);
    }, 950);
  };

  // Simulate RAG Search
  const handleRagSearch = (e) => {
    e.preventDefault();
    if (!ragQuery.trim()) return;

    setTimeout(() => {
      setRagResult({
        verifiedAnswer: 'APITIDE provides a 14-day free pilot with 99.9% SLA uptime guarantees, enterprise AES-256 data encryption, and zero public LLM model data training on client business data.',
        citations: [
          { document: 'APITIDE_Security_Architecture_v4.2.pdf', location: 'Section 3.1, Page 12' },
          { document: 'SLA_Uptime_Service_Agreement.docx', location: 'Section 2.4, Page 4' }
        ]
      });
    }, 750);
  };

  // Master 9 AI Tools Collection
  const allTools = [
    {
      id: 'support-agent',
      category: 'support',
      title: 'AI Customer Support Agent',
      icon: 'fas fa-comment-dots',
      accentColor: '#38BDF8',
      desc: '24/7 intelligent voice and chat support agent trained on your business knowledge. Resolves 80% of inquiries autonomously.',
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
      accentColor: '#2563EB',
      desc: 'Extract, classify, and structure invoices, contracts, and forms at scale with 99.2% accuracy. Auto-populates ERPs and databases.',
      tags: ['OCR', 'GPT-4 Vision', 'FastAPI', 'Python'],
      metrics: [
        { label: 'Accuracy', value: '99.2%' },
        { label: 'Speed', value: '420ms' },
        { label: 'Manual Work', value: '-90%' }
      ]
    },
    {
      id: 'sales-lead',
      category: 'sales',
      title: 'AI Sales & Lead Prospector',
      icon: 'fas fa-funnel-dollar',
      accentColor: '#F97316',
      desc: 'Automated prospect research, lead scoring, and personalized outreach sequences. CRM-integrated to book meetings while you sleep.',
      tags: ['n8n', 'OpenAI', 'HubSpot', 'Apollo'],
      metrics: [
        { label: 'Pipeline Growth', value: '3x' },
        { label: 'Reply Rate', value: '+40%' },
        { label: 'Time Saved', value: '85%' }
      ]
    },
    {
      id: 'predictive-analytics',
      category: 'analytics',
      title: 'Predictive Analytics & BI AI',
      icon: 'fas fa-chart-line',
      accentColor: '#10B981',
      desc: 'Forecast revenue, detect customer churn risks 3 weeks in advance, and query complex databases using conversational English.',
      tags: ['Python', 'Prophet', 'Plotly', 'Gemini'],
      metrics: [
        { label: 'Forecast Accuracy', value: '94%' },
        { label: 'Look-Ahead', value: '30 Days' },
        { label: 'Sync Speed', value: 'Real-time' }
      ]
    },
    {
      id: 'content-engine',
      category: 'content',
      title: 'AI Content Generation Suite',
      icon: 'fas fa-pen-nib',
      accentColor: '#A78BFA',
      desc: 'SEO blog posts, product descriptions, email campaigns, and social media written in your brand voice with automated CMS publishing.',
      tags: ['GPT-4', 'Claude', 'WordPress', 'Shopify'],
      metrics: [
        { label: 'Content Types', value: '50+' },
        { label: 'Languages', value: '12' },
        { label: 'Drafting Time', value: '-80%' }
      ]
    },
    {
      id: 'voice-agent',
      category: 'support',
      title: 'AI Voice & Phone Receptionist',
      icon: 'fas fa-microphone-alt',
      accentColor: '#F472B6',
      desc: 'Human-sounding inbound/outbound phone calls for appointment scheduling, intake, and customer surveys with ultra-low latency.',
      tags: ['Twilio', 'VAPI', 'Whisper', 'ElevenLabs'],
      metrics: [
        { label: 'Human-like Tone', value: '98%' },
        { label: 'Latency', value: '<250ms' },
        { label: 'Call Cost', value: '-70%' }
      ]
    },
    {
      id: 'rag-kb',
      category: 'automation',
      title: 'RAG Enterprise Knowledge Base',
      icon: 'fas fa-database',
      accentColor: '#38BDF8',
      desc: 'Train custom AI on your entire company PDF archives, internal wikis, and SOPs. Instant precise answers with exact source citations.',
      tags: ['Pinecone', 'Qdrant', 'LangChain', 'OpenAI'],
      metrics: [
        { label: 'Capacity', value: '10M+ Tokens' },
        { label: 'Search Latency', value: '< 1s' },
        { label: 'Hallucinations', value: 'Zero' }
      ]
    },
    {
      id: 'inventory-ai',
      category: 'analytics',
      title: 'Inventory Demand AI',
      icon: 'fas fa-boxes',
      accentColor: '#10B981',
      desc: 'Predict stock demand requirements, auto-trigger reorders at optimal thresholds, and prevent stockouts or warehouse overstock.',
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
      title: 'AI Hyper-Personalized Email',
      icon: 'fas fa-envelope-open-text',
      accentColor: '#F97316',
      desc: 'Automated email sequences with optimal send-time prediction, AI subject line testing, and dynamic behavioral trigger flows.',
      tags: ['GPT-4', 'Mailchimp', 'SendGrid', 'n8n'],
      metrics: [
        { label: 'Open Rate', value: '+62%' },
        { label: 'Click Rate', value: '+38%' },
        { label: 'Average ROI', value: '5x' }
      ]
    }
  ];

  // Filtered Tools Array
  const filteredTools = allTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="aitools-page">
      <main className="aitools-main-wrapper">

        {/* ──────────────────────────────────────────────────────────────────────────
           1. HERO SECTION: INTENTIONAL, FOCUSED, HIGH-IMPACT
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="aitools-hero-section" id="hero">
          <div className="aitools-container">
            <div className="aitools-hero-grid">
              
              {/* Left Column: Focused Copy & CTAs */}
              <div className="aitools-hero-left">
                <div className="aitools-badge">
                  <span className="aitools-badge-dot"></span>
                  <span>Enterprise AI Suite • Production Ready</span>
                </div>

                <h1 className="aitools-hero-title">
                  Intelligent <span className="aitools-gradient-cyan">AI Tools</span> Built for <span className="aitools-gradient-orange">Modern Operations</span>
                </h1>

                <p className="aitools-hero-subtitle">
                  9 production-ready AI solutions engineered to automate operational bottlenecks, scale customer interactions 24/7, and generate measurable ROI — deployed in days, not months.
                </p>

                <div className="aitools-hero-actions">
                  <a href="#solutions" className="aitools-btn aitools-btn-primary">
                    <i className="fas fa-cubes"></i> Explore 9 AI Solutions
                  </a>
                  <a href="#interactive-playground" className="aitools-btn aitools-btn-secondary">
                    <i className="fas fa-play-circle"></i> Try Live Playground
                  </a>
                </div>
              </div>

              {/* Right Column: Refined Live Support Agent Card */}
              <div className="aitools-hero-right">
                <div className="aitools-card aitools-chat-card">
                  <div className="aitools-chat-header">
                    <div className="aitools-chat-status">
                      <span className="aitools-green-dot"></span>
                      <span className="aitools-status-text">AI Support Agent • Online</span>
                    </div>
                    <span className="aitools-tag-pill">GPT-4o Powered</span>
                  </div>

                  <div className="aitools-chat-messages">
                    {heroMessages.map((msg, i) => (
                      <div key={i} className={`aitools-msg-row ${msg.sender}`}>
                        <div className="aitools-msg-avatar">
                          <i className={msg.sender === 'ai' ? "fas fa-robot" : "fas fa-user"}></i>
                        </div>
                        <div className={`aitools-msg-bubble ${msg.sender}`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {heroIsTyping && (
                      <div className="aitools-msg-row ai">
                        <div className="aitools-msg-avatar"><i className="fas fa-robot"></i></div>
                        <div className="aitools-msg-bubble ai typing">
                          <span className="aitools-pulse-dot"></span>
                          <span className="aitools-pulse-dot"></span>
                          <span className="aitools-pulse-dot"></span>
                        </div>
                      </div>
                    )}
                    <div ref={heroChatEndRef} />
                  </div>

                  {/* Quick Prompts */}
                  <div className="aitools-prompts-row">
                    <button onClick={() => handleHeroSend('📦 Track my order #9482')} className="aitools-prompt-btn">
                      📦 Track Order
                    </button>
                    <button onClick={() => handleHeroSend('↩️ How do I return an item?')} className="aitools-prompt-btn">
                      ↩️ Free Returns
                    </button>
                    <button onClick={() => handleHeroSend('💳 Payment options')} className="aitools-prompt-btn">
                      💳 Payments
                    </button>
                    <button onClick={() => handleHeroSend('🚀 Request a 14-day free AI pilot')} className="aitools-prompt-btn highlight">
                      🚀 Free Pilot
                    </button>
                  </div>

                  {/* Input Form */}
                  <form onSubmit={(e) => { e.preventDefault(); handleHeroSend(); }} className="aitools-chat-form">
                    <input
                      type="text"
                      placeholder="Ask AI agent (e.g. Order #9482)..."
                      value={heroInput}
                      onChange={(e) => setHeroInput(e.target.value)}
                      className="aitools-chat-input"
                    />
                    <button type="submit" className="aitools-chat-send" aria-label="Send message">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           2. TRUST & CREDIBILITY METRICS BAR
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="aitools-trust-bar-section">
          <div className="aitools-container">
            <div className="aitools-trust-grid">
              <div className="aitools-trust-item">
                <span className="aitools-trust-val text-cyan">9</span>
                <span className="aitools-trust-lbl">Enterprise AI Solutions</span>
              </div>
              <div className="aitools-trust-divider"></div>
              <div className="aitools-trust-item">
                <span className="aitools-trust-val text-blue">100+</span>
                <span className="aitools-trust-lbl">Active Enterprise Pilots</span>
              </div>
              <div className="aitools-trust-divider"></div>
              <div className="aitools-trust-item">
                <span className="aitools-trust-val text-green">99.2%</span>
                <span className="aitools-trust-lbl">Document OCR Accuracy</span>
              </div>
              <div className="aitools-trust-divider"></div>
              <div className="aitools-trust-item">
                <span className="aitools-trust-val text-orange">14 Days</span>
                <span className="aitools-trust-lbl">Free Evaluation Pilot</span>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           3. AI SOLUTIONS CATALOG (SEARCH, FILTER & CARDS)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="aitools-section" id="solutions">
          <div className="aitools-container">
            
            <div className="aitools-section-header">
              <span className="aitools-eyebrow text-cyan">
                <i className="fas fa-cubes"></i> ENTERPRISE CATALOG
              </span>
              <h2 className="aitools-section-title">
                Production-Ready <span className="aitools-gradient-cyan">AI Solutions</span>
              </h2>
              <p className="aitools-section-subtitle">
                Browse our catalog of 9 custom-engineered AI tools. Filter by operational function or technology stack.
              </p>
            </div>

            {/* Controls Bar */}
            <div className="aitools-controls-wrap">
              <div className="aitools-search-box">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  placeholder="Search AI tools, technologies (GPT-4o, n8n, RAG, Twilio)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="aitools-search-field"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="aitools-clear-btn" aria-label="Clear search">
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>

              <div className="aitools-filter-pills">
                <button
                  className={`aitools-pill ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All 9 Solutions
                </button>
                <button
                  className={`aitools-pill ${selectedCategory === 'support' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('support')}
                >
                  <i className="fas fa-headset"></i> Support & Voice
                </button>
                <button
                  className={`aitools-pill ${selectedCategory === 'automation' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('automation')}
                >
                  <i className="fas fa-cogs"></i> Automation & RAG
                </button>
                <button
                  className={`aitools-pill ${selectedCategory === 'sales' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('sales')}
                >
                  <i className="fas fa-chart-line"></i> Sales & Marketing
                </button>
                <button
                  className={`aitools-pill ${selectedCategory === 'analytics' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('analytics')}
                >
                  <i className="fas fa-chart-pie"></i> Predictive Analytics
                </button>
                <button
                  className={`aitools-pill ${selectedCategory === 'content' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('content')}
                >
                  <i className="fas fa-pen-fancy"></i> Content Engine
                </button>
              </div>
            </div>

            {/* 9 Tools Grid */}
            <div className="aitools-cards-grid">
              {filteredTools.map((tool) => (
                <div key={tool.id} className="aitools-card aitools-tool-card">
                  <div className="aitools-tool-card-header">
                    <div
                      className="aitools-icon-avatar"
                      style={{ background: `${tool.accentColor}15`, color: tool.accentColor, borderColor: `${tool.accentColor}35` }}
                    >
                      <i className={tool.icon}></i>
                    </div>
                    <span className="aitools-cat-tag">{tool.category.toUpperCase()}</span>
                  </div>

                  <h3 className="aitools-tool-title">{tool.title}</h3>
                  <p className="aitools-tool-desc">{tool.desc}</p>

                  <div className="aitools-tech-badges">
                    {tool.tags.map((tag, idx) => (
                      <span key={idx} className="aitools-badge-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="aitools-kpi-row">
                    {tool.metrics.map((m, idx) => (
                      <div key={idx} className="aitools-kpi-item">
                        <span className="aitools-kpi-val" style={{ color: tool.accentColor }}>{m.value}</span>
                        <span className="aitools-kpi-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="aitools-card-footer">
                    <a
                      href="#interactive-playground"
                      onClick={() => setActiveDemoTab(
                        tool.id === 'doc-processing' ? 'document' :
                        tool.id === 'sales-lead' ? 'sales' :
                        tool.id === 'predictive-analytics' || tool.id === 'inventory-ai' ? 'analytics' :
                        tool.id === 'content-engine' || tool.id === 'email-marketing' ? 'content' :
                        tool.id === 'rag-kb' ? 'rag' : 'chatbot'
                      )}
                      className="aitools-tool-cta-btn"
                    >
                      Test in Playground <i className="fas fa-arrow-right icon"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="aitools-no-results aitools-card">
                <i className="fas fa-search-minus icon"></i>
                <h4>No AI Solutions found matching "{searchQuery}"</h4>
                <p>Try searching for terms like "GPT-4o", "n8n", "RAG", "Twilio", or "Support".</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="aitools-btn aitools-btn-secondary"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           4. INTERACTIVE PLAYGROUND (TEST LIVE AI TOOLS)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="aitools-section aitools-bg-darker" id="interactive-playground">
          <div className="aitools-container">
            
            <div className="aitools-section-header">
              <span className="aitools-eyebrow text-orange">
                <i className="fas fa-play-circle"></i> INTERACTIVE PLAYGROUND
              </span>
              <h2 className="aitools-section-title">
                Test Live AI Tools <span className="aitools-gradient-orange">Right Now</span>
              </h2>
              <p className="aitools-section-subtitle">
                Interact with functional previews of our core AI systems. No login or API keys required.
              </p>
            </div>

            {/* Playground Tabs */}
            <div className="aitools-tabs-bar">
              <button
                className={`aitools-tab-btn ${activeDemoTab === 'chatbot' ? 'active' : ''}`}
                onClick={() => setActiveDemoTab('chatbot')}
              >
                💬 AI Customer Chatbot
              </button>
              <button
                className={`aitools-tab-btn ${activeDemoTab === 'document' ? 'active' : ''}`}
                onClick={() => setActiveDemoTab('document')}
              >
                📄 Document OCR Processing
              </button>
              <button
                className={`aitools-tab-btn ${activeDemoTab === 'sales' ? 'active' : ''}`}
                onClick={() => setActiveDemoTab('sales')}
              >
                🎯 Sales Lead Prospector
              </button>
              <button
                className={`aitools-tab-btn ${activeDemoTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveDemoTab('analytics')}
              >
                📊 Predictive Analytics
              </button>
              <button
                className={`aitools-tab-btn ${activeDemoTab === 'content' ? 'active' : ''}`}
                onClick={() => setActiveDemoTab('content')}
              >
                ✍️ AI Content Writer
              </button>
              <button
                className={`aitools-tab-btn ${activeDemoTab === 'rag' ? 'active' : ''}`}
                onClick={() => setActiveDemoTab('rag')}
              >
                🧠 RAG Knowledge Search
              </button>
            </div>

            {/* Active Playground Workspace */}
            <div className="aitools-card aitools-playground-card">
              
              {/* Tab 1: AI Chatbot */}
              {activeDemoTab === 'chatbot' && (
                <div className="aitools-playground-grid">
                  <div className="aitools-widget-box">
                    <div className="aitools-widget-header">
                      <span className="aitools-dot green"></span>
                      <span className="aitools-widget-title">Live Chatbot Preview • Vector DB Connected</span>
                    </div>
                    <div className="aitools-widget-messages">
                      {playgroundChat.map((m, i) => (
                        <div key={i} className={`aitools-msg-row ${m.sender}`}>
                          <div className={`aitools-msg-bubble ${m.sender}`}>{m.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="aitools-prompts-row mb-3">
                      <button onClick={() => handlePlaygroundChatSend('📦 Track my order #12345')} className="aitools-prompt-btn">
                        📦 Track Order #12345
                      </button>
                      <button onClick={() => handlePlaygroundChatSend('↩️ How do I return an item?')} className="aitools-prompt-btn">
                        ↩️ Return Policy
                      </button>
                      <button onClick={() => handlePlaygroundChatSend('💳 Payment options')} className="aitools-prompt-btn">
                        💳 Payments
                      </button>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); handlePlaygroundChatSend(); }} className="aitools-chat-form">
                      <input
                        type="text"
                        placeholder="Type a support question..."
                        value={playgroundChatInput}
                        onChange={(e) => setPlaygroundChatInput(e.target.value)}
                        className="aitools-chat-input"
                      />
                      <button type="submit" className="aitools-chat-send" aria-label="Send query">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>

                  <div className="aitools-widget-info">
                    <h4 className="text-cyan"><i className="fas fa-robot"></i> AI Support Agent Specs</h4>
                    <ul className="aitools-specs-list">
                      <li><i className="fas fa-check-circle check"></i> Autonomous 24/7 resolution of customer support inquiries</li>
                      <li><i className="fas fa-check-circle check"></i> RAG vector search over your FAQs, WooCommerce & Shopify</li>
                      <li><i className="fas fa-check-circle check"></i> Intelligent human escalation with complete chat history</li>
                      <li><i className="fas fa-check-circle check"></i> Deployable on Web Widgets, WhatsApp Business, Telegram</li>
                    </ul>
                    <div className="aitools-widget-kpis">
                      <div className="aitools-kpi-badge">
                        <strong>80%</strong>
                        <span>Auto Resolution</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>&lt;2s</strong>
                        <span>Response Time</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>4.9★</strong>
                        <span>CSAT Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Document OCR */}
              {activeDemoTab === 'document' && (
                <div className="aitools-playground-grid">
                  <div className="aitools-widget-box">
                    <div className="aitools-widget-header">
                      <span className="aitools-dot blue"></span>
                      <span className="aitools-widget-title">Document Processing Engine • GPT-4 Vision</span>
                    </div>

                    <div className="aitools-ocr-zone" onClick={handleSimulateDoc}>
                      <i className="fas fa-cloud-upload-alt upload-icon"></i>
                      <h4>Click to Upload or Simulate Invoice Processing</h4>
                      <p>Supports PDF, PNG, JPG invoices, contracts & purchase orders</p>
                      <button className="aitools-btn aitools-btn-primary small mt-3" disabled={isProcessingDoc}>
                        {isProcessingDoc ? <span><i className="fas fa-spinner fa-spin"></i> Extracting Data...</span> : <span><i className="fas fa-magic"></i> Process Sample Invoice</span>}
                      </button>
                    </div>

                    {docResult && (
                      <div className="aitools-json-output">
                        <div className="json-title">EXTRACTED STRUCTURAL JSON DATA ({docResult.ocrConfidenceScore} CONFIDENCE)</div>
                        <pre className="json-content">
{JSON.stringify(docResult, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>

                  <div className="aitools-widget-info">
                    <h4 className="text-blue"><i className="fas fa-file-alt"></i> Document Intelligence AI</h4>
                    <ul className="aitools-specs-list">
                      <li><i className="fas fa-check-circle check"></i> Extract line items, tax, vendor details from unstructured PDFs</li>
                      <li><i className="fas fa-check-circle check"></i> 99.2% accuracy powered by custom OCR + GPT-4 Vision</li>
                      <li><i className="fas fa-check-circle check"></i> Auto-populate QuickBooks, Xero, SAP, and custom PostgreSQL</li>
                      <li><i className="fas fa-check-circle check"></i> Human-in-the-loop exception handling workflow</li>
                    </ul>
                    <div className="aitools-widget-kpis">
                      <div className="aitools-kpi-badge">
                        <strong>99.2%</strong>
                        <span>OCR Accuracy</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>420ms</strong>
                        <span>Per Page</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>-90%</strong>
                        <span>Manual Work</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Sales Lead Prospector */}
              {activeDemoTab === 'sales' && (
                <div className="aitools-playground-grid">
                  <div className="aitools-widget-box">
                    <div className="aitools-widget-header">
                      <span className="aitools-dot orange"></span>
                      <span className="aitools-widget-title">Sales Lead Prospecting & Outreach AI</span>
                    </div>

                    <form onSubmit={handleGenerateLeads} className="aitools-widget-form">
                      <label className="field-lbl">Enter target industry or business query:</label>
                      <div className="field-row">
                        <input
                          type="text"
                          placeholder="e.g. SaaS Companies in Logistics, 50-200 Employees..."
                          value={salesQuery}
                          onChange={(e) => setSalesQuery(e.target.value)}
                          className="aitools-chat-input"
                        />
                        <button type="submit" className="aitools-btn aitools-btn-primary small" disabled={isGeneratingLeads}>
                          {isGeneratingLeads ? <i className="fas fa-spinner fa-spin"></i> : <><i className="fas fa-search"></i> Find Leads</>}
                        </button>
                      </div>
                    </form>

                    {salesLeads && (
                      <div className="aitools-leads-list">
                        {salesLeads.map((lead, i) => (
                          <div key={i} className="aitools-lead-card">
                            <div className="lead-top">
                              <strong className="lead-name">{lead.name}</strong>
                              <span className="match-tag">{lead.matchScore}</span>
                            </div>
                            <div className="lead-sub">{lead.title} • {lead.company}</div>
                            <div className="lead-meta"><i className="fas fa-map-marker-alt"></i> {lead.location} | <i className="fas fa-envelope"></i> {lead.email}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="aitools-widget-info">
                    <h4 className="text-orange"><i className="fas fa-funnel-dollar"></i> AI Sales Prospector</h4>
                    <ul className="aitools-specs-list">
                      <li><i className="fas fa-check-circle check"></i> Autonomous lead prospecting via LinkedIn, Apollo & Web Data</li>
                      <li><i className="fas fa-check-circle check"></i> Automated personalized email sequence dispatches via n8n</li>
                      <li><i className="fas fa-check-circle check"></i> Bi-directional sync with HubSpot, Salesforce & Pipedrive</li>
                      <li><i className="fas fa-check-circle check"></i> Auto-books meetings directly on Google Calendar / Calendly</li>
                    </ul>
                    <div className="aitools-widget-kpis">
                      <div className="aitools-kpi-badge">
                        <strong>3x</strong>
                        <span>Pipeline Growth</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>+40%</strong>
                        <span>Reply Rate</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>85%</strong>
                        <span>Time Saved</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Analytics AI */}
              {activeDemoTab === 'analytics' && (
                <div className="aitools-playground-grid">
                  <div className="aitools-widget-box">
                    <div className="aitools-widget-header">
                      <span className="aitools-dot green"></span>
                      <span className="aitools-widget-title">Predictive Analytics & Natural Language Query AI</span>
                    </div>

                    <form onSubmit={handleAnalyticsQuery} className="aitools-widget-form">
                      <label className="field-lbl">Ask any business data question in English:</label>
                      <div className="field-row">
                        <input
                          type="text"
                          placeholder="e.g. Predict Q3 revenue and identify top performing channels..."
                          value={analyticsQuery}
                          onChange={(e) => setAnalyticsQuery(e.target.value)}
                          className="aitools-chat-input"
                        />
                        <button type="submit" className="aitools-btn aitools-btn-primary small">
                          <i className="fas fa-chart-bar"></i> Run Query
                        </button>
                      </div>
                    </form>

                    {analyticsResult && (
                      <div className="aitools-analytics-result">
                        <div className="analytics-metrics-grid">
                          <div className="metric-box">
                            <span className="lbl">Forecast Revenue</span>
                            <strong className="val text-green">{analyticsResult.forecastedRevenue}</strong>
                          </div>
                          <div className="metric-box">
                            <span className="lbl">YoY Growth</span>
                            <strong className="val text-cyan">{analyticsResult.yoyGrowthRate}</strong>
                          </div>
                          <div className="metric-box">
                            <span className="lbl">Confidence</span>
                            <strong className="val text-blue">{analyticsResult.modelConfidence}</strong>
                          </div>
                        </div>
                        <div className="insight-box">
                          <strong>AI Executive Insight:</strong> {analyticsResult.executiveInsight}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="aitools-widget-info">
                    <h4 className="text-green"><i className="fas fa-chart-line"></i> Predictive BI Engine</h4>
                    <ul className="aitools-specs-list">
                      <li><i className="fas fa-check-circle check"></i> Natural language SQL querying — no data analyst required</li>
                      <li><i className="fas fa-check-circle check"></i> 30-day demand and revenue forecasting with Prophet ML</li>
                      <li><i className="fas fa-check-circle check"></i> Automatic churn risk detection with 3-week advance warnings</li>
                      <li><i className="fas fa-check-circle check"></i> Live interactive dashboard reporting built for executives</li>
                    </ul>
                    <div className="aitools-widget-kpis">
                      <div className="aitools-kpi-badge">
                        <strong>94%</strong>
                        <span>Accuracy</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>Real-time</strong><span>Sync</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>-70%</strong><span>Report Time</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 5: Content AI */}
              {activeDemoTab === 'content' && (
                <div className="aitools-playground-grid">
                  <div className="aitools-widget-box">
                    <div className="aitools-widget-header">
                      <span className="aitools-dot purple"></span>
                      <span className="aitools-widget-title">AI Content Generation Suite</span>
                    </div>

                    <div className="aitools-type-selector mb-3">
                      <button className={`type-pill ${contentType === 'blog' ? 'active' : ''}`} onClick={() => setContentType('blog')}>Blog Post</button>
                      <button className={`type-pill ${contentType === 'email' ? 'active' : ''}`} onClick={() => setContentType('email')}>Cold Email</button>
                      <button className={`type-pill ${contentType === 'social' ? 'active' : ''}`} onClick={() => setContentType('social')}>Social Post</button>
                    </div>

                    <div className="aitools-widget-form">
                      <div className="field-row">
                        <input
                          type="text"
                          placeholder="Enter topic (e.g. n8n automation vs Zapier)..."
                          value={contentTopic}
                          onChange={(e) => setContentTopic(e.target.value)}
                          className="aitools-chat-input"
                        />
                        <button onClick={handleGenerateContent} className="aitools-btn aitools-btn-primary small" disabled={isGeneratingContent}>
                          {isGeneratingContent ? <i className="fas fa-spinner fa-spin"></i> : <><i className="fas fa-magic"></i> Generate</>}
                        </button>
                      </div>
                    </div>

                    {generatedContent && (
                      <div className="aitools-content-preview">
                        <pre className="content-output-text">{generatedContent}</pre>
                      </div>
                    )}
                  </div>

                  <div className="aitools-widget-info">
                    <h4 style={{ color: '#A78BFA' }}><i className="fas fa-pen-nib"></i> Content AI Specs</h4>
                    <ul className="aitools-specs-list">
                      <li><i className="fas fa-check-circle check"></i> Writes long-form SEO articles with metadata & schema</li>
                      <li><i className="fas fa-check-circle check"></i> Direct automated publishing to WordPress, Webflow, Shopify</li>
                      <li><i className="fas fa-check-circle check"></i> Multi-language output in 12+ international languages</li>
                      <li><i className="fas fa-check-circle check"></i> Maintains exact brand tone of voice and style guidelines</li>
                    </ul>
                    <div className="aitools-widget-kpis">
                      <div className="aitools-kpi-badge">
                        <strong>-80%</strong><span>Drafting Time</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>50+</strong><span>Templates</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>12</strong><span>Languages</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 6: RAG Search */}
              {activeDemoTab === 'rag' && (
                <div className="aitools-playground-grid">
                  <div className="aitools-widget-box">
                    <div className="aitools-widget-header">
                      <span className="aitools-dot cyan"></span>
                      <span className="aitools-widget-title">RAG Knowledge Base Vector Search</span>
                    </div>

                    <form onSubmit={handleRagSearch} className="aitools-widget-form">
                      <div className="field-row">
                        <input
                          type="text"
                          placeholder="Ask anything about APITIDE security, SLA, or pricing..."
                          value={ragQuery}
                          onChange={(e) => setRagQuery(e.target.value)}
                          className="aitools-chat-input"
                        />
                        <button type="submit" className="aitools-btn aitools-btn-primary small">
                          <i className="fas fa-search"></i> Search Docs
                        </button>
                      </div>
                    </form>

                    {ragResult && (
                      <div className="aitools-rag-output mt-3">
                        <div className="rag-answer-box">
                          <strong className="text-cyan">RAG Verified Answer:</strong>
                          <p>{ragResult.verifiedAnswer}</p>
                        </div>
                        <div className="rag-citations-box mt-3">
                          <span className="citation-title">Vector Citations (Zero Hallucination):</span>
                          {ragResult.citations.map((c, i) => (
                            <div key={i} className="citation-tag">
                              <i className="fas fa-file-pdf"></i> {c.document} ({c.location})
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="aitools-widget-info">
                    <h4 className="text-cyan"><i className="fas fa-database"></i> RAG Vector Search Engine</h4>
                    <ul className="aitools-specs-list">
                      <li><i className="fas fa-check-circle check"></i> Ingest company PDFs, Notion, Google Docs, Confluence</li>
                      <li><i className="fas fa-check-circle check"></i> High-speed vector embeddings via Pinecone & Qdrant</li>
                      <li><i className="fas fa-check-circle check"></i> Source page citations attached to every generated response</li>
                      <li><i className="fas fa-check-circle check"></i> Enterprise RBAC permissions to restrict confidential files</li>
                    </ul>
                    <div className="aitools-widget-kpis">
                      <div className="aitools-kpi-badge">
                        <strong>10M+</strong><span>Tokens</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>&lt; 1s</strong><span>Latency</span>
                      </div>
                      <div className="aitools-kpi-badge">
                        <strong>Zero</strong><span>Hallucinations</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           5. TECHNICAL ARCHITECTURE & DEPLOYMENT PIPELINE
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="aitools-section" id="architecture">
          <div className="aitools-container">
            <div className="aitools-section-header">
              <span className="aitools-eyebrow text-blue">
                <i className="fas fa-sitemap"></i> SYSTEM ARCHITECTURE
              </span>
              <h2 className="aitools-section-title">
                How AI Tools Integrate With <span className="aitools-gradient-blue">Your Enterprise Stack</span>
              </h2>
              <p className="aitools-section-subtitle">
                Scalable, secure, and cloud-native pipeline. From ingestion to output — monitored 24/7 with 99.9% uptime guarantees.
              </p>
            </div>

            {/* Architecture Pipeline Visual */}
            <div className="aitools-arch-pipeline">
              
              {/* Layer 1: Data Ingestion */}
              <div className="aitools-pipeline-layer">
                <span className="layer-title text-cyan">01 • DATA INGESTION</span>
                <div className="layer-nodes">
                  <div className="node-item"><i className="fas fa-database"></i> SQL Databases</div>
                  <div className="node-item"><i className="fas fa-file-alt"></i> PDF & Docs</div>
                  <div className="node-item"><i className="fab fa-shopify"></i> Shopify / CRMs</div>
                  <div className="node-item"><i className="fas fa-plug"></i> Webhooks & APIs</div>
                </div>
              </div>

              <div className="aitools-pipeline-connector"><i className="fas fa-chevron-down"></i></div>

              {/* Layer 2: AI Core */}
              <div className="aitools-pipeline-layer highlight-cyan">
                <span className="layer-title text-cyan">02 • AI PROCESSING CORE</span>
                <div className="layer-nodes">
                  <div className="node-item"><i className="fas fa-brain"></i> LLM Router (GPT-4o / Claude)</div>
                  <div className="node-item"><i className="fas fa-vector-square"></i> Vector DB (Pinecone)</div>
                  <div className="node-item"><i className="fas fa-eye"></i> OCR Vision Model</div>
                </div>
              </div>

              <div className="aitools-pipeline-connector"><i className="fas fa-chevron-down"></i></div>

              {/* Layer 3: n8n Automation Engine */}
              <div className="aitools-pipeline-layer highlight-orange">
                <span className="layer-title text-orange">03 • AUTOMATION & RULES ENGINE (n8n)</span>
                <div className="layer-nodes">
                  <div className="node-item"><i className="fas fa-cogs"></i> n8n Business Logic Workflows</div>
                  <div className="node-item"><i className="fas fa-shield-alt"></i> Enterprise Rules & Compliance</div>
                </div>
              </div>

              <div className="aitools-pipeline-connector"><i className="fas fa-chevron-down"></i></div>

              {/* Layer 4: Output & Systems */}
              <div className="aitools-pipeline-layer highlight-green">
                <span className="layer-title text-green">04 • OUTPUT CHANNELS & ERP SYNC</span>
                <div className="layer-nodes">
                  <div className="node-item"><i className="fab fa-slack"></i> Slack / Teams</div>
                  <div className="node-item"><i className="fas fa-envelope"></i> Email Sequences</div>
                  <div className="node-item"><i className="fas fa-calculator"></i> QuickBooks ERP</div>
                  <div className="node-item"><i className="fab fa-whatsapp"></i> WhatsApp Bot</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           6. PROMOTIONAL OFFER BANNER
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="aitools-section aitools-bg-darker" id="promo-banner">
          <div className="aitools-container">
            <div className="aitools-promo-banner-wrap">
              <Link to="/contact">
                <img
                  src="/static/images/industry_banner.png"
                  alt="Up to 35% Off on Professional Software Development Services"
                  className="aitools-promo-banner-img"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           7. PRICING SECTION: CLEAR, BALANCED, HIGH-CONVERSION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="aitools-section" id="pricing">
          <div className="aitools-container">
            
            <div className="aitools-section-header">
              <span className="aitools-eyebrow text-blue">
                <i className="fas fa-tags"></i> TRANSPARENT PRICING
              </span>
              <h2 className="aitools-section-title">
                Flexible <span className="aitools-gradient-blue">AI Tool Deployment</span>
              </h2>
              <p className="aitools-section-subtitle">
                Fixed-scope monthly plans with zero hidden costs. Includes 14-day free evaluation pilot.
              </p>
            </div>

            <div className="aitools-pricing-grid">
              
              {/* Starter Plan */}
              <div className="aitools-card aitools-pricing-card">
                <div className="plan-name">STARTER</div>
                <div className="plan-price-wrap">
                  <span className="currency">$</span>
                  <span className="amount">99</span>
                  <span className="period">/mo</span>
                </div>
                <p className="plan-desc">Ideal for small businesses deploying their first AI tool with full integration.</p>

                <ul className="plan-features">
                  <li><i className="fas fa-check check"></i> 1 AI Tool of your choice</li>
                  <li><i className="fas fa-check check"></i> Up to 5,000 AI interactions/mo</li>
                  <li><i className="fas fa-check check"></i> 2 custom API integration connections</li>
                  <li><i className="fas fa-check check"></i> Email & chat support (24h SLA)</li>
                  <li><i className="fas fa-check check"></i> Basic monitoring dashboard</li>
                </ul>

                <Link to="/contact?plan=starter" className="aitools-btn aitools-btn-secondary full-width mt-auto">
                  Start 14-Day Free Pilot
                </Link>
              </div>

              {/* Growth Plan (RECOMMENDED / FEATURED) */}
              <div className="aitools-card aitools-pricing-card featured">
                <div className="popular-badge">MOST POPULAR</div>
                <div className="plan-name text-orange">GROWTH SUITE</div>
                <div className="plan-price-wrap">
                  <span className="currency">$</span>
                  <span className="amount">299</span>
                  <span className="period">/mo</span>
                </div>
                <p className="plan-desc">Full-stack AI suite for growing enterprises automating multiple departments simultaneously.</p>

                <ul className="plan-features">
                  <li><i className="fas fa-check check"></i> 3 AI Tools bundled together</li>
                  <li><i className="fas fa-check check"></i> Up to 50,000 AI interactions/mo</li>
                  <li><i className="fas fa-check check"></i> Unlimited API & CRM integrations</li>
                  <li><i className="fas fa-check check"></i> Priority 1-on-1 Slack engineering support</li>
                  <li><i className="fas fa-check check"></i> Custom AI model training on your data</li>
                  <li><i className="fas fa-check check"></i> Real-time Grafana analytics dashboard</li>
                </ul>

                <Link to="/contact?plan=growth" className="aitools-btn aitools-btn-primary full-width mt-auto">
                  Start Growth Pilot — Popular
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="aitools-card aitools-pricing-card">
                <div className="plan-name text-cyan">ENTERPRISE</div>
                <div className="plan-price-wrap custom-price">
                  Custom
                </div>
                <p className="plan-desc">Bespoke AI architecture for enterprise leaders needing unlimited scale, white-labeling, and on-premise deployments.</p>

                <ul className="plan-features">
                  <li><i className="fas fa-check check"></i> All 9 AI Tools included</li>
                  <li><i className="fas fa-check check"></i> Unlimited AI interactions & throughput</li>
                  <li><i className="fas fa-check check"></i> Dedicated AI Solutions Engineer</li>
                  <li><i className="fas fa-check check"></i> 99.9% SLA uptime guarantee</li>
                  <li><i className="fas fa-check check"></i> White-labeling & custom domain branding</li>
                  <li><i className="fas fa-check check"></i> On-premise or private AWS/Azure cloud deployment</li>
                </ul>

                <Link to="/contact?plan=enterprise" className="aitools-btn aitools-btn-secondary full-width mt-auto">
                  Request Enterprise Quote
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           8. FAQ ACCORDION SECTION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="aitools-section aitools-bg-darker" id="faq">
          <div className="aitools-container max-w-4xl">
            
            <div className="aitools-section-header">
              <span className="aitools-eyebrow text-cyan">
                <i className="fas fa-question-circle"></i> FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="aitools-section-title">
                AI Tools <span className="aitools-gradient-cyan">FAQ</span>
              </h2>
              <p className="aitools-section-subtitle">
                Everything you need to know about deployment timelines, data privacy, and pilot guarantees.
              </p>
            </div>

            <div className="aitools-faq-list">
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
                  q: 'How does the 14-day free evaluation pilot work?',
                  a: 'We configure 1 AI tool for your workflow free of charge for 14 days. You test live interactions with real data. If you are satisfied with the performance metrics and ROI, we activate your monthly subscription.'
                },
                {
                  q: 'What integrations do your AI tools support?',
                  a: 'Our tools connect via native n8n nodes, webhooks, and REST APIs to over 500+ platforms including HubSpot, Salesforce, Shopify, QuickBooks, Twilio, WhatsApp, Slack, PostgreSQL, AWS, and Google Workspace.'
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className={`aitools-card aitools-faq-item ${openFaq === i ? 'active' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="faq-head">
                    <h4>{faq.q}</h4>
                    <i className={`fas ${openFaq === i ? 'fa-minus' : 'fa-plus'} icon`}></i>
                  </div>
                  {openFaq === i && (
                    <div className="faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
           9. FINAL CONVERSION CTA BANNER
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="aitools-section aitools-cta-section">
          <div className="aitools-container">
            <div className="aitools-card aitools-cta-banner">
              <h2 className="aitools-section-title mb-3">
                Ready to Automate Operations with <span className="aitools-gradient-cyan">Intelligent AI?</span>
              </h2>
              <p className="aitools-section-subtitle mb-6 max-w-2xl mx-auto">
                Schedule a 15-minute engineering call to claim your 14-day free pilot and custom system blueprint.
              </p>
              <Link to="/contact" className="aitools-btn aitools-btn-primary large">
                <i className="fas fa-rocket"></i> Claim Your 14-Day Free Pilot
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
