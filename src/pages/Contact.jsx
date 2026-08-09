import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Workflow & n8n Automation',
    budget: '$1,000 - $5,000',
    message: '',
  });

  const [statusMsg, setStatusMsg] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMsg({ text: 'Please fill in all required fields (Name, Email, Message).', type: 'error' });
      return;
    }

    setLoading(true);
    setStatusMsg({ text: '', type: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMsg({ text: data.message || 'Message sent successfully!', type: 'success' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'AI Workflow & n8n Automation',
          budget: '$1,000 - $5,000',
          message: '',
        });
      } else {
        setStatusMsg({ text: data.error || 'Failed to submit form.', type: 'error' });
      }
    } catch (err) {
      setStatusMsg({ text: 'Network error submitting inquiry. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ paddingTop: '90px' }}>
      <section className="section-dark-navy">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'center' }}>
            Book Your Free <span className="gradient-text-blue">AI Consultation</span>
          </h1>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Discuss your workflow bottlenecks, project scope, or enterprise software modernization with our AI engineers.
          </p>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginTop: '40px' }}>
            {/* Contact Info */}
            <div className="contact-info-card glass-card" style={{ padding: '30px' }}>
              <h3>Get In Touch Direct</h3>
              <p style={{ color: '#cbd5e1', margin: '15px 0 25px 0', lineHeight: 1.6 }}>We respond to all enterprise inquiries within 24 hours. Fill out the form or reach out via direct channels:</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}><i className="fas fa-envelope"></i></div>
                  <div>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block' }}>Email Us</span>
                    <a href="mailto:apitideinfo@gmail.com" style={{ color: '#fff', fontWeight: 600 }}>apitideinfo@gmail.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#06b6d4' }}><i className="fas fa-phone-alt"></i></div>
                  <div>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block' }}>Call / WhatsApp</span>
                    <a href="tel:+917877813270" style={{ color: '#fff', fontWeight: 600 }}>+91 78778 13270</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block' }}>Global Head Office</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>India & Worldwide Client Network</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card glass-card" style={{ padding: '30px' }}>
              <h3>Send Inquiry</h3>
              <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-control" placeholder="John Doe" />
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>Service Interest</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="form-control">
                      <option>AI Workflow & n8n Automation</option>
                      <option>Full-Stack Web & Mobile Apps</option>
                      <option>AI Voice Agents & RAG Chatbots</option>
                      <option>Enterprise Stack Modernization</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>Estimated Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="form-control">
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>Project Scope / Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="form-control" placeholder="Describe your workflow bottlenecks or software requirements..."></textarea>
                </div>

                <button type="submit" className="cta-btn primary" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                  {loading ? <i className="fas fa-spinner fa-spin"> Submitting...</i> : <><i className="fas fa-paper-plane"></i> Submit Inquiry</>}
                </button>

                {statusMsg.text && (
                  <div className={`newsletter-msg ${statusMsg.type}`} style={{ display: 'block', marginTop: '15px', textAlign: 'center' }}>
                    {statusMsg.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
