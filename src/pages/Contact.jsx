import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  useEffect(() => {
    // Trigger dynamic interactions on mount
  }, []);

  return (
    <main style={{ paddingTop: '80px' }}>
{/*  CONTACT HERO  */}
  <section className="hero contact-hero" id="contact-hero">
    <div className="hero-glow-blob"></div>
    <div className="container">
      <div className="hero-content">
        <h1>Let's Build Something <span className="gradient-text-blue">Incredible</span> Together</h1>
        <p>Get your free consultation within 24 hours. Submit your details, or lock in a time slot directly using the scheduler below.</p>
      </div>
    </div>
  </section>

  {/*  CONTACT CONTENT GRID  */}
  <main className="container" style={{"marginTop": "-40px", "marginBottom": "100px"}}>
    
    {/*  Messages alert box  */}
    
    <div className="messages">
      
      <div className="message "></div>
      
    </div>
    

    <div className="contact-grid">
      
      {/*  Left side: Contact Form  */}
      <section className="contact-form-section glass-card" style={{"padding": "0px", "background": "transparent", "border": "none", "backdropFilter": "none"}}>
        <div className="glass-card">
          <h2>Project Intake Form</h2>
          <p style={{"color": "var(--text-secondary)", "fontSize": "0.9rem", "marginBottom": "28px"}}>Fill in your details below and we'll send you a custom automation blueprint within 24 hours.</p>
          <form className="contact-form" id="contactForm" action="/contact" method="post" novalidate>
            
            
            <div className="form-row-2col">
              <div className="form-row">
                <label htmlFor="full_name">Full Name <span className="req">*</span></label>
                <input type="text" id="full_name" name="full_name" placeholder="Your Full Name" required autoComplete="name" />
                <span className="field-hint">First and last name</span>
              </div>
              <div className="form-row">
                <label htmlFor="email">Business Email <span className="req">*</span></label>
                <input type="email" id="email" name="email" placeholder="you@company.com" required autoComplete="email" />
                <span className="field-hint">We'll reply to this address</span>
              </div>
            </div>

            <div className="form-row-2col">
              <div className="form-row">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" autoComplete="tel" />
                <span className="field-hint">Include country code</span>
              </div>
              <div className="form-row">
                <label htmlFor="country">Country <span className="req">*</span></label>
                <div className="select-wrapper">
                  <select id="country" name="country" required>
                    <option value="" disabled selected>— Select your country —</option>
                    <option value="United States">🇺🇸 United States</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
                    <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                    <option value="Germany">🇩🇪 Germany</option>
                    <option value="France">🇫🇷 France</option>
                    <option value="Netherlands">🇳🇱 Netherlands</option>
                    <option value="Singapore">🇸🇬 Singapore</option>
                    <option value="India">🇮🇳 India</option>
                    <option value="Pakistan">🇵🇰 Pakistan</option>
                    <option value="Bangladesh">🇧🇩 Bangladesh</option>
                    <option value="South Africa">🇿🇦 South Africa</option>
                    <option value="Nigeria">🇳🇬 Nigeria</option>
                    <option value="Kenya">🇰🇪 Kenya</option>
                    <option value="New Zealand">🇳🇿 New Zealand</option>
                    <option value="Ireland">🇮🇪 Ireland</option>
                    <option value="Sweden">🇸🇪 Sweden</option>
                    <option value="Norway">🇳🇴 Norway</option>
                    <option value="Denmark">🇩🇰 Denmark</option>
                    <option value="Other">🌍 Other</option>
                  </select>
                  <i className="fas fa-chevron-down select-arrow"></i>
                </div>
              </div>
            </div>

            <div className="form-row-2col">
              <div className="form-row">
                <label htmlFor="project_type">Service Required <span className="req">*</span></label>
                <div className="select-wrapper">
                  <select id="project_type" name="project_type" required>
                    <option value="" disabled selected>— Select a service —</option>
                    <option value="AI Workflow & N8N Automation">⚙️ AI Workflow &amp; N8N Automation</option>
                    <option value="Web & Mobile Development">💻 Web &amp; Mobile Development</option>
                    <option value="AI Chatbots / RAG Systems">🤖 AI Chatbots &amp; RAG Systems</option>
                    <option value="AI Voice Agent">📞 AI Voice Agent</option>
                    <option value="CRM / Sales Automation">📈 CRM &amp; Sales Automation</option>
                    <option value="WhatsApp / Email Automation">💬 WhatsApp &amp; Email Automation</option>
                    <option value="Document AI / OCR">📄 Document AI &amp; OCR</option>
                    <option value="Enterprise Integration">🏢 Enterprise Integration</option>
                    <option value="Consulting & Audit">🔍 Workflow Consulting &amp; Audit</option>
                    <option value="Other">✨ Other Custom Solution</option>
                  </select>
                  <i className="fas fa-chevron-down select-arrow"></i>
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="industry">Your Industry <span className="req">*</span></label>
                <div className="select-wrapper">
                  <select id="industry" name="industry" required>
                    <option value="" disabled selected>— Select your industry —</option>
                    <option value="Healthcare & MedTech">🏥 Healthcare &amp; MedTech</option>
                    <option value="Finance & Accounting">💰 Finance &amp; Accounting</option>
                    <option value="Real Estate">🏠 Real Estate &amp; Property</option>
                    <option value="Legal Services">⚖️ Legal Services</option>
                    <option value="Manufacturing & Logistics">🏭 Manufacturing &amp; Logistics</option>
                    <option value="Education & EdTech">🎓 Education &amp; EdTech</option>
                    <option value="Restaurants & Food Services">🍽️ Restaurants &amp; Food Services</option>
                    <option value="Retail & E-Commerce">🛍️ Retail &amp; E-Commerce</option>
                    <option value="Hospitality & Hotels">🏨 Hospitality &amp; Hotels</option>
                    <option value="Construction & Infrastructure">🏗️ Construction &amp; Infrastructure</option>
                    <option value="Automotive">🚗 Automotive</option>
                    <option value="Government & Public Sector">🏛️ Government &amp; Public Sector</option>
                    <option value="SaaS & Technology">💡 SaaS &amp; Technology</option>
                    <option value="Startups">🚀 Startups</option>
                    <option value="Enterprise & Corporations">🏢 Enterprise &amp; Corporations</option>
                    <option value="Marketing & Advertising">📣 Marketing &amp; Advertising</option>
                    <option value="Other">🌐 Other</option>
                  </select>
                  <i className="fas fa-chevron-down select-arrow"></i>
                </div>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="budget_range">Estimated Budget <span className="req">*</span></label>
              <div className="select-wrapper">
                <select id="budget_range" name="budget_range" required>
                  <option value="" disabled selected>— Select your budget range —</option>
                  <option value="Under $500">💵 Under $500</option>
                  <option value="$500 – $2,000">💵 $500 – $2,000</option>
                  <option value="$2,000 – $5,000">💰 $2,000 – $5,000</option>
                  <option value="$5,000 – $15,000">💰 $5,000 – $15,000</option>
                  <option value="$15,000 – $50,000">💎 $15,000 – $50,000</option>
                  <option value="$50,000+">🏆 $50,000+ (Enterprise)</option>
                  <option value="Let's Discuss">🤝 Let's Discuss</option>
                </select>
                <i className="fas fa-chevron-down select-arrow"></i>
              </div>
              <span className="field-hint">This helps us tailor the right solution for you</span>
            </div>
            
            <div className="form-row">
              <label htmlFor="details">Project Details</label>
              <textarea id="details" name="details" rows="5" placeholder="Describe your current bottleneck, tools you use (N8N, Salesforce, HubSpot, etc.), and what outcome you want to achieve..."></textarea>
              <span className="field-hint">The more detail you share, the more precise our blueprint will be</span>
            </div>
            
            <button type="submit" className="cta-btn primary submit-btn" id="contactSubmitBtn">
              <i className="fas fa-paper-plane"></i> Send My Request
            </button>
            <p className="form-disclaimer"><i className="fas fa-lock"></i> Your data is secure and never shared. We respond within 24 hours.</p>
          </form>
        </div>
      </section>


      {/*  Right side: Cal.com simulation widget  */}
      <section className="scheduler-panel glass-card">
        <h2>Schedule Instantly</h2>
        <p>Choose a day and time slot to sync with our technical architect team.</p>
        
        {/*  Day Grid  */}
        <div className="cal-grid">
          <div className="cal-day" data-date="Monday">
            <span className="cal-day-name">Mon</span>
            <span className="cal-day-num">20</span>
          </div>
          <div className="cal-day" data-date="Tuesday">
            <span className="cal-day-name">Tue</span>
            <span className="cal-day-num">21</span>
          </div>
          <div className="cal-day" data-date="Wednesday">
            <span className="cal-day-name">Wed</span>
            <span className="cal-day-num">22</span>
          </div>
          <div className="cal-day" data-date="Thursday">
            <span className="cal-day-name">Thu</span>
            <span className="cal-day-num">23</span>
          </div>
          <div className="cal-day" data-date="Friday">
            <span className="cal-day-name">Fri</span>
            <span className="cal-day-num">24</span>
          </div>
        </div>

        {/*  Time slots  */}
        <div className="time-slots">
          <div className="cal-time">10:00 AM</div>
          <div className="cal-time">11:30 AM</div>
          <div className="cal-time">02:00 PM</div>
          <div className="cal-time">03:30 PM</div>
          <div className="cal-time">05:00 PM</div>
        </div>

        {/*  Selection Summary  */}
        <div className="selected-summary-box" id="selected-date-summary">
          {/*  Populated by JS  */}
        </div>

        <button type="button" className="cta-btn primary confirm-booking-btn" id="confirm-booking">Confirm Booking Slot</button>
      </section>

    </div>

    {/*  Direct contact info cards  */}
    <div className="contact-direct">
      <div className="direct-card glass-card scroll-reveal">
        <i className="fas fa-envelope"></i>
        <p>Send an email directly to our founder team for inquiries:</p>
        <a className="direct-link" href="mailto:apitideinfo@gmail.com">apitideinfo@gmail.com</a>
      </div>
      
      <div className="direct-card glass-card scroll-reveal">
        <i className="fas fa-phone"></i>
        <p>Talk to a technical architect directly to discuss details:</p>
        <a className="direct-link" href="tel:+917877813270">+91 7877813270</a>
      </div>
    </div>

  </main>

  {/*  FOOTER  */}
    </main>
  );
}
