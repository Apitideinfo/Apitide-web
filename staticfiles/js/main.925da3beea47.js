/**
 * APITIDE - Premium AI Automation Agency
 * Core Interactive Features & Motion Effects
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollAnimations();
  initStatsCounter();
  initInteractiveGlow();
  init3DTilt();
  initParticles();
  initProjectsFilter();
  initCalendarWidget();
  initWatchDemoModal();
  initFaqAccordion();
  initTypewriter();
  initSolutionsFilter();
  initN8nShowcase();
  initIndustriesTab();
  initProcessTimeline();
  initStickyCta();
});

/* ==========================================================================
   1. MOBILE NAVBAR
   ========================================================================== */
function initNavbar() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('.header');

  if (mobileMenuToggle && navbar) {
    mobileMenuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu on clicking links
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });
  }

  // Scroll style for header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   2. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target); // Animates once
      }
    });
  }, observerOptions);

  // Add scroll-reveal class to headings, cards, and sections
  const elementsToReveal = document.querySelectorAll(
    '.service-card, .project-card, .why-card, .process-step, .stat-card, .about-vision-mission > div, .contact-direct > div, .tech-tile, .timeline-item, .work-proc-card, .trust-stat-card, .video-mockup-card'
  );
  
  elementsToReveal.forEach(el => {
    el.classList.add('scroll-reveal');
    revealObserver.observe(el);
  });
}

/* ==========================================================================
   3. STATISTICS COUNTER
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number-value');
  
  if (statNumbers.length === 0) return;

  const countUp = (element) => {
    const target = parseFloat(element.getAttribute('data-target'));
    const prefix = element.getAttribute('data-prefix') || '';
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = prefix + target.toLocaleString() + suffix;
        clearInterval(timer);
      } else {
        if (target % 1 === 0) {
          element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        } else {
          element.textContent = prefix + current.toFixed(1) + suffix;
        }
      }
    }, stepTime);
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => statsObserver.observe(num));
}

/* ==========================================================================
   4. RADIAL MOUSE GLOW & GLOW BLOBS
   ========================================================================== */
function initInteractiveGlow() {
  const glowCards = document.querySelectorAll('.service-card, .project-card, .why-card, .stat-card, .cal-day, .cal-time, .direct-card, .about-cta-card, .trust-stat-card');
  
  glowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Ambient glow background tracking
  const heroSection = document.querySelector('.hero, .services-hero, .about-hero, .contact-hero, .projects-hero');
  if (heroSection) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--bg-glow-x', `${x}%`);
      document.documentElement.style.setProperty('--bg-glow-y', `${y}%`);
    });
  }
}

/* ==========================================================================
   5. 3D TILT EFFECT FOR CARDS
   ========================================================================== */
function init3DTilt() {
  const tiltCards = document.querySelectorAll('.service-card, .project-card, .stat-card, .direct-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cardWidth = rect.width;
      const cardHeight = rect.height;
      
      const centerX = rect.left + cardWidth / 2;
      const centerY = rect.top + cardHeight / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      // Calculate rotation angles (max 10 degrees)
      const rotateX = (-10 * (mouseY / (cardHeight / 2))).toFixed(2);
      const rotateY = (10 * (mouseX / (cardWidth / 2))).toFixed(2);
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      card.style.transition = 'none';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });
}

/* ==========================================================================
   6. FLOATING NEURAL NETWORK PARTICLES
   ========================================================================== */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Set size
  function resizeCanvas() {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particlesArray = [];
  const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 70);
  const connectionDistance = 120;

  // Particle blueprint
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1; // Size 1-3px
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Bounce off walls
      if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
      if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Populate array
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }

  // Draw lines between particles
  function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const alpha = (1 - distance / connectionDistance) * 0.15;
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  // Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Grid subtle backdrop
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    particlesArray.forEach(particle => {
      particle.update();
      particle.draw();
    });
    connect();
    animationFrameId = requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   7. CASE STUDY PORTFOLIO SEARCH & FILTER
   ========================================================================== */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('project-search');

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  let activeCategory = 'all';
  let searchQuery = '';

  function filterProjects() {
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const title = card.querySelector('.project-title').textContent.toLowerCase();
      const desc = card.querySelector('.project-preview').textContent.toLowerCase();
      
      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        setTimeout(() => card.style.opacity = '1', 50);
      } else {
        card.style.opacity = '0';
        card.style.display = 'none';
      }
    });
  }

  // Category buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      filterProjects();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      filterProjects();
    });
  }
}

/* ==========================================================================
   8. CAL.COM APPOINTMENT SCHEDULER WIDGET SIMULATION
   ========================================================================== */
function initCalendarWidget() {
  const calDays = document.querySelectorAll('.cal-day');
  const calTimes = document.querySelectorAll('.cal-time');
  const submitBookingBtn = document.getElementById('confirm-booking');
  const selectedDateText = document.getElementById('selected-date-summary');
  const contactDetailsTextarea = document.getElementById('details');

  if (calDays.length === 0) return;

  let selectedDay = '';
  let selectedTime = '';

  calDays.forEach(day => {
    day.addEventListener('click', () => {
      calDays.forEach(d => d.classList.remove('selected'));
      day.classList.add('selected');
      selectedDay = day.getAttribute('data-date');
      updateSummary();
    });
  });

  calTimes.forEach(time => {
    time.addEventListener('click', () => {
      calTimes.forEach(t => t.classList.remove('selected'));
      time.classList.add('selected');
      selectedTime = time.textContent.strip ? time.textContent.strip() : time.textContent.trim();
      updateSummary();
    });
  });

  function updateSummary() {
    if (selectedDay || selectedTime) {
      let text = 'Selected: ';
      if (selectedDay) text += `📅 ${selectedDay}`;
      if (selectedTime) text += `  ⏰ ${selectedTime}`;
      selectedDateText.textContent = text;
      selectedDateText.classList.add('visible');
    }
  }

  if (submitBookingBtn) {
    submitBookingBtn.addEventListener('click', () => {
      if (!selectedDay || !selectedTime) {
        alert('Please select both a date and a time slot first!');
        return;
      }
      
      // Auto fill the Django form details field
      if (contactDetailsTextarea) {
        const text = `I would like to schedule a consultation on ${selectedDay} at ${selectedTime}.\n\n` + contactDetailsTextarea.value;
        contactDetailsTextarea.value = text;
        contactDetailsTextarea.focus();
        
        // Scroll to form submit
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}

/* ==========================================================================
   9. VIDEO WATCH DEMO POPUP
   ========================================================================== */
function initWatchDemoModal() {
  const watchDemoBtn = document.getElementById('watch-demo-btn');
  const videoModal = document.getElementById('video-demo-modal');
  const closeModal = document.querySelector('.video-modal-close');
  const videoIframe = document.getElementById('demo-video-iframe');

  if (!watchDemoBtn || !videoModal) return;

  watchDemoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Autoplay simulation/src trigger (can add standard YouTube embed if requested)
    if (videoIframe) {
      videoIframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; // placeholder video
    }
  });

  const closeAction = () => {
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
    if (videoIframe) {
      videoIframe.src = "";
    }
  };

  if (closeModal) {
    closeModal.addEventListener('click', closeAction);
  }

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      closeAction();
    }
  });
}

// Modal open/close helpers for general project modals
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   10. FAQ ACCORDION TOGGLER
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all items
        faqItems.forEach(faq => faq.classList.remove('active'));
        // Open current if not active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   11. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const typewriterText = document.getElementById('typewriter-text');
  if (!typewriterText) return;

  const words = ["While You Sleep.", "At Global Scale.", "On Autopilot.", "With Absolute Safety."];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typewriterText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriterText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 2000; // Pause at the end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   12. AI SOLUTIONS TAB FILTER
   ========================================================================== */
function initSolutionsFilter() {
  const tabBtns = document.querySelectorAll('.solutions-tab-btn');
  const solutionCards = document.querySelectorAll('.solution-card');

  if (tabBtns.length === 0 || solutionCards.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active class
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      solutionCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   13. N8N SHOWCASE FLOW CYCLE
   ========================================================================== */
function initN8nShowcase() {
  const nodes = document.querySelectorAll('.flow-node');
  const connectors = document.querySelectorAll('.flow-connector');
  if (nodes.length === 0) return;

  let activeIndex = 0;

  function cycle() {
    // Reset all
    nodes.forEach(n => n.classList.remove('active'));
    connectors.forEach(c => c.classList.remove('active'));

    // Set current active node
    nodes[activeIndex].classList.add('active');

    // Trigger connector animation
    if (activeIndex < connectors.length) {
      setTimeout(() => {
        connectors[activeIndex].classList.add('active');
      }, 500); // delay connector pulse slightly after node activates
    }

    // Prepare next
    activeIndex = (activeIndex + 1) % nodes.length;
    setTimeout(cycle, 2200); // cycle every 2.2 seconds
  }

  cycle();
}

/* ==========================================================================
   14. INDUSTRIES INTERACTIVE TABS
   ========================================================================== */
function initIndustriesTab() {
  const tabs = document.querySelectorAll('.industry-tab-btn');
  const details = document.querySelectorAll('.industry-detail-card');
  if (tabs.length === 0 || details.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Get target industry name
      const targetIndustry = tab.dataset.industry;

      // Hide all detail cards
      details.forEach(card => {
        card.classList.remove('active');
        if (card.id === `ind-${targetIndustry}`) {
          card.classList.add('active');
        }
      });
      });
    });
  });
}

/* ==========================================================================
   15. INTERACTIVE PROCESS TIMELINE (PHASE 17)
   ========================================================================== */
function initProcessTimeline() {
  const container = document.querySelector('.process-container');
  const steps = document.querySelectorAll('.process-step');
  const progressLine = document.querySelector('.process-progress-line');
  if (!container || steps.length === 0 || !progressLine) return;

  const updateTimeline = () => {
    const containerRect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate how far down the timeline container we've scrolled
    const startScroll = containerRect.top - (viewportHeight / 2);
    const containerHeight = containerRect.height;
    
    let progress = 0;
    if (startScroll < 0) {
      progress = Math.min(Math.abs(startScroll) / containerHeight, 1);
    }
    
    // Update progress bar height
    progressLine.style.height = `${progress * 100}%`;

    // Toggle active class on steps
    steps.forEach(step => {
      const stepRect = step.getBoundingClientRect();
      // Activate when step is past the middle of the screen
      const stepTrigger = viewportHeight * 0.7;
      if (stepRect.top < stepTrigger) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateTimeline);
  updateTimeline(); // Initial check
}

/* ==========================================================================
   16. STICKY FLOATING CTA BAR (PHASE 21)
   ========================================================================== */
function initStickyCta() {
  const bar = document.querySelector('.sticky-cta-bar');
  if (!bar) return;

  const checkScroll = () => {
    if (window.scrollY > 500) {
      bar.classList.add('show');
    } else {
      bar.classList.remove('show');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
}


