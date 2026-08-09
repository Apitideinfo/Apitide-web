/**
 * APITIDE — Phase 24: Premium Animation System
 * GSAP + ScrollTrigger | Lenis Smooth Scroll | Custom Cursor | Magnetic | Parallax
 */

'use strict';

/* ============================================================
   BOOT — wait for everything (GSAP, Lenis, DOM)
   ============================================================ */
window.addEventListener('load', () => {
  initScrollProgress();
  initCustomCursor();
  initMagneticButtons();

  if (window.Lenis) {
    initLenis();
  }

  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    initGSAPScrollReveals();
    initParallaxHero();
    initCounterGSAP();
    initHeroEntrance();
  }

  initFloatingShapes();
  initMarqueePauseOnHover();
  initGlassBorderGlow();
});

/* ============================================================
   1. LENIS SMOOTH SCROLL
   ============================================================ */
function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 2,
  });

  // Integrate with GSAP if available
  if (window.gsap && window.ScrollTrigger) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Expose for external use (sticky CTA scroll check)
  window._lenis = lenis;

  // Re-hook anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80, duration: 1.4 });
      }
    });
  });
}

/* ============================================================
   2. SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress-bar';
  bar.setAttribute('role', 'progressbar');
  bar.setAttribute('aria-label', 'Page scroll progress');
  document.body.prepend(bar);

  const update = () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
  };

  window.addEventListener('scroll', update, { passive: true });
}

/* ============================================================
   3. CUSTOM MOUSE FOLLOWER
   ============================================================ */
function initCustomCursor() {
  // Only on pointer devices
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(follower);
  document.body.appendChild(dot);
  document.body.classList.add('custom-cursor-active');

  let curX = 0, curY = 0, follX = 0, follY = 0;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    curX = e.clientX;
    curY = e.clientY;
    dot.style.left = curX + 'px';
    dot.style.top  = curY + 'px';
  });

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  function animate() {
    follX = lerp(follX, curX, 0.1);
    follY = lerp(follY, curY, 0.1);
    follower.style.left = follX + 'px';
    follower.style.top  = follY + 'px';
    rafId = requestAnimationFrame(animate);
  }
  animate();

  // Hover state changes
  const hoverTargets = 'a, button, .cta-btn, .service-card, .project-card, .magnetic-wrap, [data-cursor="hover"]';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hovered'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hovered'));
  });

  document.addEventListener('mousedown', () => follower.classList.add('clicked'));
  document.addEventListener('mouseup',   () => follower.classList.remove('clicked'));

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    follower.style.opacity = '0';
    dot.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    follower.style.opacity = '1';
    dot.style.opacity = '1';
  });
}

/* ============================================================
   4. MAGNETIC BUTTONS
   ============================================================ */
function initMagneticButtons() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  document.querySelectorAll('.cta-btn.primary, .cta-btn.orange-btn, .header-cta').forEach(btn => {
    btn.classList.add('magnetic-wrap');

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
      btn.style.transition = 'transform 0.1s ease';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });
}

/* ============================================================
   5. GSAP SCROLL REVEAL (Fade | Scale | Rotate | Stagger)
   ============================================================ */
function initGSAPScrollReveals() {
  const defaultProps = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0,
    duration: 0.9,
    ease: 'power3.out',
  };

  // Fade Up
  gsap.utils.toArray('.gsap-fade-up').forEach(el => {
    gsap.to(el, {
      ...defaultProps,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Fade Left
  gsap.utils.toArray('.gsap-fade-left').forEach(el => {
    gsap.to(el, {
      ...defaultProps,
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  // Fade Right
  gsap.utils.toArray('.gsap-fade-right').forEach(el => {
    gsap.to(el, {
      ...defaultProps,
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  // Scale In
  gsap.utils.toArray('.gsap-scale-in').forEach(el => {
    gsap.to(el, {
      ...defaultProps,
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
    });
  });

  // Rotate In
  gsap.utils.toArray('.gsap-rotate-in').forEach(el => {
    gsap.to(el, {
      ...defaultProps,
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  // Stagger children
  gsap.utils.toArray('.gsap-stagger').forEach(parent => {
    gsap.to(parent.children, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: parent,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

/* ============================================================
   6. HERO ENTRANCE (page load animation)
   ============================================================ */
function initHeroEntrance() {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-tag', { opacity: 0, y: 30, duration: 0.8 })
    .from('.hero-headline', { opacity: 0, y: 40, duration: 0.9 }, '-=0.5')
    .from('.hero-content > p', { opacity: 0, y: 30, duration: 0.7 }, '-=0.6')
    .from('.hero-buttons > *', { opacity: 0, y: 25, stagger: 0.12, duration: 0.6 }, '-=0.5')
    .from('.hero-stats-grid > *', { opacity: 0, y: 20, stagger: 0.08, duration: 0.6 }, '-=0.4')
    .from('.logo-ticker-container', { opacity: 0, y: 15, duration: 0.5 }, '-=0.3');
}

/* ============================================================
   7. PARALLAX HERO ELEMENTS
   ============================================================ */
function initParallaxHero() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  // Blob parallax
  const blob = document.querySelector('.hero-glow-blob');
  if (blob) {
    gsap.to(blob, {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });
  }

  // Canvas parallax (slower)
  const canvas = document.querySelector('.hero-canvas-container');
  if (canvas) {
    gsap.to(canvas, {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
    });
  }

  // Mouse parallax for floating shapes
  if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      document.querySelectorAll('.parallax-slow').forEach(el => {
        el.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
      });
      document.querySelectorAll('.parallax-medium').forEach(el => {
        el.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
      });
      document.querySelectorAll('.parallax-fast').forEach(el => {
        el.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      });
    });
  }
}

/* ============================================================
   8. GSAP ENHANCED COUNTER (replaces/enhances existing)
   ============================================================ */
function initCounterGSAP() {
  document.querySelectorAll('.stat-number-value').forEach(el => {
    const target = parseFloat(el.getAttribute('data-target') || '0');
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const isDecimal = (target % 1 !== 0);

    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => {
            const display = isDecimal ? obj.val.toFixed(1) : Math.floor(obj.val).toLocaleString();
            el.textContent = prefix + display + suffix;
          },
          onComplete: () => {
            el.textContent = prefix + (isDecimal ? target.toFixed(1) : target.toLocaleString()) + suffix;
          },
        });
      },
    });
  });
}

/* ============================================================
   9. FLOATING SHAPES (inject + animate)
   ============================================================ */
function initFloatingShapes() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Make hero position: relative if not already
  if (getComputedStyle(hero).position === 'static') {
    hero.style.position = 'relative';
  }

  const container = document.createElement('div');
  container.className = 'floating-shapes-container';
  container.setAttribute('aria-hidden', 'true');

  const shapes = [
    { type: 'circle', size: 300, top: '10%',  left: '-5%',  dur: '22s', color: 'var(--accent-blue)' },
    { type: 'circle', size: 180, top: '60%',  right: '5%',  dur: '18s', color: 'var(--accent-cyan)' },
    { type: 'blob',   size: 250, top: '30%',  left: '70%',  dur: '28s', color: 'var(--accent-orange)' },
    { type: 'ring',   size: 120, top: '75%',  left: '20%',  dur: '15s' },
    { type: 'ring',   size: 80,  top: '20%',  right: '25%', dur: '20s' },
    { type: 'circle', size: 80,  top: '85%',  right: '15%', dur: '25s', color: 'var(--accent-blue)' },
  ];

  shapes.forEach(s => {
    const el = document.createElement('div');
    el.className = `floating-shape ${s.type}`;
    el.style.cssText = `
      width: ${s.size}px;
      height: ${s.size}px;
      ${s.top    ? `top: ${s.top};`    : ''}
      ${s.bottom ? `bottom: ${s.bottom};` : ''}
      ${s.left   ? `left: ${s.left};`  : ''}
      ${s.right  ? `right: ${s.right};` : ''}
      --dur: ${s.dur};
      ${s.color && s.type !== 'ring' ? `background: ${s.color};` : ''}
      animation-delay: ${(Math.random() * -20).toFixed(1)}s;
    `;
    container.appendChild(el);
  });

  hero.insertBefore(container, hero.firstChild);
}

/* ============================================================
   10. MARQUEE PAUSE ON HOVER (CSS already handles it;
       JS fallback for cross-browser safety)
   ============================================================ */
function initMarqueePauseOnHover() {
  document.querySelectorAll('.marquee-track, .logo-slider-track').forEach(track => {
    track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
  });
}

/* ============================================================
   11. GRADIENT BORDER + GLASS HOVER GLOW TRACKING
   ============================================================ */
function initGlassBorderGlow() {
  document.querySelectorAll('.glass-hover-enhanced, .gradient-border-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}
