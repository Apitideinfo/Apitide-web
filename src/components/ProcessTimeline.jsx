import React, { useEffect, useRef, useState } from 'react';

const steps = [
  { num: '01', title: 'Discovery & Audit', text: 'We perform deep operational scans of your workflow, mapping team bottlenecks, identifying repetitive manual tasks, and calculating automation feasibility parameters.' },
  { num: '02', title: 'Technical Research', text: 'We analyze tool integration APIs, audit legacy database constraints, inspect authentication flows, and select the optimal tech stack for your systems.' },
  { num: '03', title: 'Architecture Strategy', text: 'We sequence data flow pipelines, establish secure access policies, diagram cloud infrastructure layers, and define operational ROI target metrics.' },
  { num: '04', title: 'System Wireframe', text: 'We structure visual layout components, draft backend logic routes, map trigger-action flows, and wire up database schema nodes.' },
  { num: '05', title: 'Premium UI/UX Design', text: 'We convert wireframes into sleek, glassmorphic interfaces with custom palettes, rich styling tokens, and micro-interaction curves.' },
  { num: '06', title: 'Development & Code', text: 'Our developers code secure full-stack software interfaces, configure custom API gateways, and construct production-ready n8n nodes.' },
  { num: '07', title: 'Rigorous Testing', text: 'We trigger end-to-end sandbox loads, test error-handling fail-safes, validate webhooks under load, and implement prompt alignment filters.' },
  { num: '08', title: 'Production Deployment', text: 'We deploy final assets onto scalable cloud instances (AWS, Railway, Vercel, Netlify), direct live webhook pipelines, and implement DNS records.' },
  { num: '09', title: 'Continuous Monitoring', text: 'We coordinate real-time error logger dispatches, inspect trace parameters, trigger warning alerts on Slack channels, and trace status checks.' },
  { num: '10', title: 'Iterative Optimization', text: 'We tune prompt variables, cache database query structures to minimize latency, adjust resource pipelines, and optimize operational speed limits.' },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeSteps, setActiveSteps] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startScroll = rect.top - viewportHeight / 2;
      const containerHeight = rect.height;

      let progress = 0;
      if (startScroll < 0) {
        progress = Math.min(Math.abs(startScroll) / containerHeight, 1);
      }
      setProgressHeight(progress * 100);

      const stepElements = containerRef.current.querySelectorAll('.process-step');
      const newActive = new Set();
      stepElements.forEach((el, index) => {
        const stepRect = el.getBoundingClientRect();
        if (stepRect.top < viewportHeight * 0.75) {
          newActive.add(index);
        }
      });
      setActiveSteps(newActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-light-slate" id="process">
      <div className="container">
        <h2 className="section-title">
          Our SDLC-Based <span className="gradient-text-blue">Process</span>
        </h2>
        <p className="section-subtitle">
          We follow the Software Development Life Cycle (SDLC) adapted for rapid AI & automation engineering.
        </p>

        <div className="process-container" ref={containerRef}>
          <div className="process-progress-line" style={{ height: `${progressHeight}%` }}></div>

          {steps.map((step, idx) => {
            const isActive = activeSteps.has(idx);
            return (
              <div key={idx} className={`process-step ${isActive ? 'active' : ''}`}>
                <div className="process-step-marker">{idx + 1}</div>
                <div className="process-step-content">
                  <div className="process-step-card">
                    <span className="process-number">Phase {step.num} - SDLC</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
