import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Resources() {
  useEffect(() => {
    // Trigger dynamic interactions on mount
  }, []);

  return (
    <main style={{ paddingTop: '80px' }}>
{/*  ═══ HERO ═══  */}
  <section className="res-hero">
    <div className="container">
      <div className="section-eyebrow eyebrow-cyan" style={{"display": "inline-flex", "marginBottom": "16px"}}><i className="fas fa-folder-open"></i> Resource Center</div>
      <h1 style={{"fontSize": "clamp(2rem,5vw,3.5rem)", "fontWeight": "800", "lineHeight": "1.2", "marginBottom": "16px"}}>
        Blogs, Guides & <span className="gradient-text-cyan">Automation Library</span>
      </h1>
      <p style={{"fontSize": "1.05rem", "color": "#94A3B8", "maxWidth": "600px", "margin": "0 auto 24px"}}>Explore our library of enterprise whitepapers, step-by-step guides, workflow blueprints, and free automation templates.</p>
      
      <div className="search-box-wrap">
        <i className="fas fa-search search-icon"></i>
        <input type="text" className="search-input" id="search-bar" placeholder="Search resources, topics, platforms..." autoComplete="off" />
      </div>
    </div>
  </section>

  {/*  ═══ RESOURCES HUB CONTENT ═══  */}
  <section style={{"background": "#020617", "paddingBottom": "100px"}}>
    <div className="container">
      
      <div className="res-tabs-wrap">
        <div className="res-tabs" id="res-tabs">
          <button className="res-tab active" data-filter="all">All Resources</button>
          <button className="res-tab" data-filter="blog">Blogs</button>
          <button className="res-tab" data-filter="case">Case Studies</button>
          <button className="res-tab" data-filter="white">Whitepapers</button>
          <button className="res-tab" data-filter="guide">Guides</button>
          <button className="res-tab" data-filter="library">Automation Library</button>
          <button className="res-tab" data-filter="template">Templates</button>
          <button className="res-tab" data-filter="download">Free Downloads</button>
        </div>
      </div>

      <div className="res-grid" id="res-grid">
        
        {/*  Blog 1  */}
        <div className="res-card" data-type="blog">
          <div className="res-card-image">
            <div className="res-card-glow" style={{"background": "#3B82F6", "top": "10%", "left": "20%"}}></div>
            <div className="res-card-icon">🧠</div>
          </div>
          <div className="res-card-body">
            <div className="res-card-badge badge-blog">Blog</div>
            <h3>How Vector DBs Power Context-Aware AI Chatbots</h3>
            <p>A deep dive into embeddings, Pinecone vs. Qdrant vector databases, and how retrieval-augmented generation (RAG) prevents AI hallucinations.</p>
            <div className="res-card-footer">
              <span className="res-meta-text"><i className="far fa-calendar"></i> Jul 15, 2026</span>
              <button className="res-action-btn" onclick="readResource('blog-vector')">Read Post <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>

        {/*  Case Study 1  */}
        <div className="res-card" data-type="case">
          <div className="res-card-image">
            <div className="res-card-glow" style={{"background": "#10B981", "bottom": "10%", "right": "20%"}}></div>
            <div className="res-card-icon">📊</div>
          </div>
          <div className="res-card-body">
            <div className="res-card-badge badge-case">Case Study</div>
            <h3>SaaS Account Provisioning Automation</h3>
            <p>See how we automated account setup and CRM sync for a fast-growing B2B company, resolving 92% of setup tickets and saving 45 hours weekly.</p>
            <div className="res-card-footer">
              <span className="res-meta-text"><i className="fas fa-chart-line"></i> +92% Efficiency</span>
              <button className="res-action-btn" onclick="readResource('case-saas')">Read Case Study <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>

        {/*  Whitepaper 1  */}
        <div className="res-card" data-type="white">
          <div className="res-card-image">
            <div className="res-card-glow" style={{"background": "#8B5CF6", "top": "20%", "right": "10%"}}></div>
            <div className="res-card-icon">📄</div>
          </div>
          <div className="res-card-body">
            <div className="res-card-badge badge-white">Whitepaper</div>
            <h3>Enterprise AI Security & Data Governance</h3>
            <p>A comprehensive guide on securely deploying LLMs, protecting PII data, structuring localized vector databases, and SOC2 compliance.</p>
            <div className="res-card-footer">
              <span className="res-meta-text"><i className="fas fa-file-pdf"></i> 14 Pages</span>
              <button className="res-action-btn" onclick="openDownloadModal('Enterprise AI Security Whitepaper')">Download PDF <i className="fas fa-download"></i></button>
            </div>
          </div>
        </div>

        {/*  Guide 1  */}
        <div className="res-card" data-type="guide">
          <div className="res-card-image">
            <div className="res-card-glow" style={{"background": "#F97316", "bottom": "20%", "left": "10%"}}></div>
            <div className="res-card-icon">⚙️</div>
          </div>
          <div className="res-card-body">
            <div className="res-card-badge badge-guide">Guide</div>
            <h3>Step-by-Step n8n + OpenAI Setup</h3>
            <p>Learn how to connect n8n workflow variables to OpenAI API endpoints, parse structured responses, and write custom validation rules.</p>
            <div className="res-card-footer">
              <span className="res-meta-text"><i className="fas fa-clock"></i> 8 Min Read</span>
              <button className="res-action-btn" onclick="readResource('guide-n8n')">Read Guide <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>

        {/*  Library 1  */}
        <div className="res-card" data-type="library">
          <div className="res-card-image">
            <div className="res-card-glow" style={{"background": "#06B6D4", "top": "30%", "left": "40%"}}></div>
            <div className="res-card-icon">⚡</div>
          </div>
          <div className="res-card-body">
            <div className="res-card-badge badge-library">Automation Library</div>
            <h3>Slack + Zendesk AI Support Escalation</h3>
            <p>Visual workflow structure to parse Zendesk tickets with LLM, evaluate priority, and post real-time alerts to Slack channels with direct action items.</p>
            <div className="res-card-footer">
              <span className="res-meta-text"><i className="fas fa-code"></i> YAML Config</span>
              <button className="res-action-btn" onclick="inspectWorkflow('slack-escalation')">Inspect Code <i className="fas fa-code"></i></button>
            </div>
          </div>
        </div>

        {/*  Template 1  */}
        <div className="res-card" data-type="template">
          <div className="res-card-image">
            <div className="res-card-glow" style={{"background": "#EC4899", "top": "10%", "right": "30%"}}></div>
            <div className="res-card-icon">📋</div>
          </div>
          <div className="res-card-body">
            <div className="res-card-badge badge-template">Template</div>
            <h3>HubSpot Lead Enrichment Webhook</h3>
            <p>Ready-to-use webhook structure to auto-enrich fresh HubSpot signups using external lead APIs and n8n orchestration.</p>
            <div className="res-card-footer">
              <span className="res-meta-text"><i className="fas fa-puzzle-piece"></i> JSON Template</span>
              <button className="res-action-btn" onclick="inspectWorkflow('hubspot-enrich')">Inspect Code <i className="fas fa-code"></i></button>
            </div>
          </div>
        </div>

        {/*  Download 1  */}
        <div className="res-card" data-type="download">
          <div className="res-card-image">
            <div className="res-card-glow" style={{"background": "#0EA5E9", "bottom": "10%", "left": "30%"}}></div>
            <div className="res-card-icon">🚀</div>
          </div>
          <div className="res-card-body">
            <div className="res-card-badge badge-download">Free Download</div>
            <h3>Free Automation ROI Calculator</h3>
            <p>An interactive spreadsheet template to calculate hours saved, cost reductions, and exact payback periods for your AI projects.</p>
            <div className="res-card-footer">
              <span className="res-meta-text"><i className="fas fa-file-excel"></i> XLSX Calculator</span>
              <button className="res-action-btn" onclick="openDownloadModal('Free Automation ROI Calculator')">Download XLSX <i className="fas fa-download"></i></button>
            </div>
          </div>
        </div>

        {/*  Download 2 (Free AI Audit Blueprint)  */}
        <div className="res-card" data-type="download">
          <div className="res-card-image">
            <div className="res-card-glow" style={{"background": "#0EA5E9", "top": "20%", "left": "20%"}}></div>
            <div className="res-card-icon">📐</div>
          </div>
          <div className="res-card-body">
            <div className="res-card-badge badge-download">Free Download</div>
            <h3>AI Automation Audit Blueprint</h3>
            <p>Our official framework detailing how to assess operational bottlenecks, audit manual workflows, and plan high-yield AI integrations.</p>
            <div className="res-card-footer">
              <span className="res-meta-text"><i className="fas fa-file-pdf"></i> PDF Guide</span>
              <button className="res-action-btn" onclick="openDownloadModal('AI Automation Audit Blueprint')">Download PDF <i className="fas fa-download"></i></button>
            </div>
          </div>
        </div>

        {/*  Guide 2 (Claude 3.5 System Prompting)  */}
        <div className="res-card" data-type="guide">
          <div className="res-card-image">
            <div className="res-card-glow" style={{"background": "#F97316", "top": "10%", "right": "10%"}}></div>
            <div className="res-card-icon">📝</div>
          </div>
          <div className="res-card-body">
            <div className="res-card-badge badge-guide">Guide</div>
            <h3>Advanced Prompting for Agentic Workflows</h3>
            <p>How to construct stateful system prompts, configure tools schema, and write output parsers for Claude 3.5 and GPT-4o agent models.</p>
            <div className="res-card-footer">
              <span className="res-meta-text"><i className="fas fa-clock"></i> 10 Min Read</span>
              <button className="res-action-btn" onclick="readResource('guide-prompting')">Read Guide <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>

        {/*  No Results  */}
        <div className="no-results" id="no-results-panel">
          <i className="fas fa-search-minus"></i>
          <h3>No resources found</h3>
          <p>Try searching for different keywords or select another filter category.</p>
        </div>

      </div>

    </div>
  </section>

  {/*  ═══════════════ MODAL CONTAINER ═══════════════  */}
  <div className="modal-overlay" id="download-modal">
    <div className="modal-card">
      <button className="modal-close" onclick="closeModal()"><i className="fas fa-times"></i></button>
      <div id="modal-content-form">
        <div className="section-eyebrow eyebrow-orange" style={{"marginBottom": "12px"}}><i className="fas fa-download"></i> Lead Magnet</div>
        <h3 id="modal-title-text">Download Resource</h3>
        <p>Enter your details to receive the download link and exclusive AI insights straight to your inbox.</p>
        
        <form onsubmit="handleDownloadSubmit(event)">
          <div className="modal-form-group">
            <label htmlFor="lead-name">Full Name</label>
            <input type="text" className="modal-input" id="lead-name" placeholder="John Doe" required />
          </div>
          <div className="modal-form-group">
            <label htmlFor="lead-email">Business Email</label>
            <input type="email" className="modal-input" id="lead-email" placeholder="john@company.com" required />
          </div>
          <button type="submit" className="modal-btn" id="modal-submit-btn">Get Download Link</button>
        </form>
      </div>

      {/*  Success step  */}
      <div id="modal-content-success" style={{"display": "none", "textAlign": "center"}}>
        <i className="fas fa-check-circle" style={{"fontSize": "4rem", "color": "#10B981", "marginBottom": "16px", "display": "block"}}></i>
        <h3>Download Ready!</h3>
        <p style={{"marginBottom": "24px"}}>Thank you! We have sent a copy to your email. Click the button below to start your direct download immediately.</p>
        <button className="modal-btn" onclick="triggerDirectDownload()"><i className="fas fa-cloud-download-alt"></i> Start Download</button>
      </div>
    </div>
  </div>

  {/*  ═══════════════ CODE INSPECTION MODAL ═══════════════  */}
  <div className="modal-overlay" id="code-modal">
    <div className="modal-card" style={{"maxWidth": "600px"}}>
      <button className="modal-close" onclick="closeCodeModal()"><i className="fas fa-times"></i></button>
      <div className="section-eyebrow eyebrow-cyan" style={{"marginBottom": "12px"}}><i className="fas fa-code"></i> Workflow Inspector</div>
      <h3 id="code-title-text">Inspect Workflow Schema</h3>
      <p style={{"marginBottom": "16px"}}>Preview or copy the ready-to-import orchestration code for your automation platform.</p>
      
      <div className="code-box" id="code-box-content"></div>
      
      <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
        <button className="cta-btn primary" onclick="copyCode()" style={{"padding": "10px 20px", "fontSize": ".85rem"}}><i className="far fa-copy"></i> Copy YAML Code</button>
        <span className="copy-confirm" id="copy-confirm-text"><i className="fas fa-check"></i> Copied to clipboard!</span>
      </div>
    </div>
  </div>

  {/*  ═══════════════ READ MODAL ═══════════════  */}
  <div className="modal-overlay" id="read-modal">
    <div className="modal-card" style={{"maxWidth": "680px", "maxHeight": "85vh", "overflowY": "auto"}}>
      <button className="modal-close" onclick="closeReadModal()"><i className="fas fa-times"></i></button>
      <div id="read-badge-wrap" className="res-card-badge">Badge</div>
      <h3 id="read-title-text" style={{"fontSize": "1.6rem", "marginTop": "10px"}}>Post Title</h3>
      <p id="read-meta-text" style={{"fontSize": ".78rem", "color": "#64748B", "marginBottom": "20px"}}>Meta info</p>
      <div id="read-body-content" style={{"fontSize": ".92rem", "lineHeight": "1.75", "color": "#E2E8F0", "whiteSpace": "pre-line"}}>
        Article body goes here...
      </div>
    </div>
  </div>

  {/*  FOOTER  */}
    </main>
  );
}
