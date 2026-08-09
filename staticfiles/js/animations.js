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
  // initCustomCursor(); // Disabled as per user request (restores default native cursor)
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
  initTestimonialSlider();
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

  // Safety fallback: if animation doesn't complete in 3s, force show all elements
  const safetyTimer = setTimeout(() => {
    gsap.set(['.hero-headline', '.hero-content > p', '.hero-buttons > *', '.hero-stats-grid > *', '.logo-ticker-container'], {
      opacity: 1, y: 0, clearProps: 'all'
    });
  }, 3000);

  const onDone = () => {
    clearTimeout(safetyTimer);
    // Ensure all elements are fully visible after animation
    gsap.set(['.hero-headline', '.hero-content > p', '.hero-buttons > *', '.hero-stats-grid > *', '.logo-ticker-container'], {
      clearProps: 'all'
    });
  };

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: onDone,
    onInterrupt: onDone,
  });

  tl.fromTo('.hero-headline',     { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 })
    .fromTo('.hero-content > p',  { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.6')
    .fromTo('.hero-buttons > *',  { opacity: 0, y: 25 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.6 }, '-=0.5')
    .fromTo('.hero-stats-grid > *', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 }, '-=0.4')
    .fromTo('.logo-ticker-container', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
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

/* ============================================================
   12. CLIENT SUCCESS STORIES SINGLE-ROW AUTO SLIDER (EVERY 5 SECONDS)
   ============================================================ */
function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  let currentIndex = 0;
  let autoSlideTimer = null;

  function getVisibleCount() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 4; // Show all 4 cards in a single row on desktop
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - getVisibleCount());
  }

  // Generate dots
  function renderDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const maxIdx = getMaxIndex();
    for (let i = 0; i <= maxIdx; i++) {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${i === currentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) currentIndex = maxIdx;

    const cardWidth = cards[0].offsetWidth;
    const gap = 28;
    const moveAmount = (cardWidth + gap) * currentIndex;

    track.style.transform = `translateX(-${moveAmount}px)`;

    // Update dots active state
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }
  }

  function goToSlide(idx) {
    const maxIdx = getMaxIndex();
    currentIndex = idx;
    if (currentIndex < 0) currentIndex = maxIdx;
    if (currentIndex > maxIdx) currentIndex = 0;
    updateSlider();
    resetAutoSlide();
  }

  function nextSlide() {
    const maxIdx = getMaxIndex();
    if (currentIndex >= maxIdx) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateSlider();
  }

  function prevSlide() {
    const maxIdx = getMaxIndex();
    if (currentIndex <= 0) {
      currentIndex = maxIdx;
    } else {
      currentIndex--;
    }
    updateSlider();
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(nextSlide, 5000); // Move every 5 seconds
  }

  function stopAutoSlide() {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });

  const wrapper = track.parentElement;
  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopAutoSlide);
    wrapper.addEventListener('mouseleave', startAutoSlide);
  }

  window.addEventListener('resize', () => {
    renderDots();
    updateSlider();
  });

  renderDots();
  updateSlider();
  startAutoSlide();
}

/* ============================================================
   ★ PREMIUM UI UPGRADE — Additional JS Enhancements
   ============================================================ */

/* ─── A. ENHANCED SCROLL-REVEAL (fade-up via IntersectionObserver) ──────── */
(function initPremiumScrollReveal() {
  const revealEls = document.querySelectorAll('.scroll-reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add BOTH classes for full compatibility with old + new CSS systems
        entry.target.classList.add('visible');
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -20px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
})();

/* ─── B. MOUSE-TRACKING RADIAL GLOW FOR ALL GLASS CARDS ─────────────────── */
(function initAllCardGlow() {
  function attachGlow(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  }

  // Apply to existing cards
  document.querySelectorAll('.glass-card, .service-card, .trust-stat-card, .industry-card').forEach(attachGlow);

  // Also handle dynamically added cards
  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => m.addedNodes.forEach(node => {
      if (node.nodeType === 1) {
        if (node.matches?.('.glass-card, .service-card')) attachGlow(node);
        node.querySelectorAll?.('.glass-card, .service-card').forEach(attachGlow);
      }
    }));
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();

/* ─── C. RIPPLE EFFECT ON CTA BUTTONS ───────────────────────────────────── */
(function initButtonRipple() {
  document.querySelectorAll('.cta-btn, .header-cta').forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';

    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size/2}px;
        top: ${e.clientY - rect.top - size/2}px;
        background: rgba(255,255,255,0.18);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.55s ease-out forwards;
        pointer-events: none;
        z-index: 10;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframe once
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes rippleEffect {
        to { transform: scale(1); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
})();

/* ─── D. PREMIUM FAQ SMOOTH HEIGHT TOGGLE ───────────────────────────────── */
(function initPremiumFAQ() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('active');

      // Close all other items smoothly
      document.querySelectorAll('.faq-item.active').forEach(openItem => {
        if (openItem !== item) {
          const openAnswer = openItem.querySelector('.faq-answer');
          openItem.classList.remove('active');
          if (openAnswer) {
            openAnswer.style.maxHeight = openAnswer.scrollHeight + 'px';
            requestAnimationFrame(() => {
              openAnswer.style.maxHeight = '0';
            });
          }
        }
      });

      // Toggle current item
      item.classList.toggle('active', !isOpen);
      if (answer) {
        if (!isOpen) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          requestAnimationFrame(() => {
            answer.style.maxHeight = '0';
          });
        }
      }
    });
  });
})();

/* ─── E. SUBTLE 3D TILT ON SERVICE CARDS (Desktop only) ─────────────────── */
(function initCardTilt() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll('.service-card.glass-card, .trust-stat-card.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rotX = ((e.clientY - cy) / (rect.height / 2)) * -5;
      const rotY = ((e.clientX - cx) / (rect.width / 2)) * 5;
      card.style.transform = `translateY(-8px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
    });
  });
})();

/* ─── F. SCROLL-BASED HEADER ENHANCEMENT ────────────────────────────────── */
(function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    header.classList.toggle('scrolled', current > 40);

    // Hide on scroll down, show on scroll up
    if (current > lastScroll && current > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScroll = current;
  }, { passive: true });
})();

/* ─── G. SECTION ENTRANCE COUNTERS (non-GSAP fallback) ──────────────────── */
(function initCounterFallback() {
  if (window.gsap && window.ScrollTrigger) return; // GSAP handles it

  const counters = document.querySelectorAll('.stat-number-value');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target || 0);
      const suffix = el.dataset.suffix || '';
      const isDecimal = target % 1 !== 0;
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = target * eased;
        el.textContent = (isDecimal ? val.toFixed(1) : Math.floor(val).toLocaleString()) + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = (isDecimal ? target.toFixed(1) : target.toLocaleString()) + suffix;
      }
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  counters.forEach(el => observer.observe(el));
})();

/* ─── H. ADD GSAP-STAGGER CLASS TO GRIDS FOR SMOOTHER ENTRANCES ─────────── */
(function tagGridsForStagger() {
  // Mark grid parents so GSAP can stagger their children
  document.querySelectorAll(
    '.services-grid, .industries-grid, .trust-stats-grid, .resource-grid, .partner-grid'
  ).forEach(grid => grid.classList.add('gsap-stagger'));
})();
