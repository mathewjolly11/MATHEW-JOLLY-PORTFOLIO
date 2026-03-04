/* =============================================
   PORTFOLIO — script.js
   ============================================= */

"use strict";

/* ── Cursor Glow ── */
const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow) {
  let mouseX = 0, mouseY = 0;
  let isMoving = false;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      window.requestAnimationFrame(() => {
        cursorGlow.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
        isMoving = false;
      });
      isMoving = true;
    }
  });
}

/* ── Navbar scroll effect ── */
const nav = document.getElementById('mainNav');
let scrollTicking = false;

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });

// Mobile nav scroll lock helper
const navMenu = document.getElementById('navMenu');
if (navMenu) {
  navMenu.addEventListener('show.bs.collapse', () => {
    document.body.classList.add('lock-scroll');
  });
  navMenu.addEventListener('hide.bs.collapse', () => {
    document.body.classList.remove('lock-scroll');
  });
}

/* ── Active nav link with IntersectionObserver ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserverOptions = {
  root: null,
  rootMargin: '-120px 0px -40% 0px',
  threshold: 0
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, navObserverOptions);

sections.forEach(sec => navObserver.observe(sec));

/* ── Smooth scroll for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const selector = anchor.getAttribute('href');
    if (selector === '#') return;
    try {
      const target = document.querySelector(selector);
      if (!target) return;
      e.preventDefault();
      
      const sidebar = document.getElementById('sidebarMenu');
      const headerOffset = 85; // Height of the fixed header + padding
      
      const scrollToTarget = () => {
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      };

      if (sidebar && sidebar.classList.contains('show')) {
        // Manually trigger close
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(sidebar) || new bootstrap.Offcanvas(sidebar);
        if (bsOffcanvas) bsOffcanvas.hide();
        
        // Wait for offcanvas to completely close before scrolling
        // This prevents the page from jumping back to top when body scroll unlocks
        setTimeout(scrollToTarget, 350);
      } else {
        scrollToTarget();
      }
    } catch (err) {
      // Ignore invalid selectors
    }
  });
});

/* ── Reveal on scroll ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Skill bars animate on reveal ── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target.querySelector('.skill-bar');
      if (bar) {
        setTimeout(() => { bar.style.width = bar.dataset.width; }, 200);
      }
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));

/* ── Typed text effect ── */
const typedEl = document.querySelector('.typed-text');
if (typedEl) {
  const words = ['Full Stack Developer', 'UI/UX Designer', 'React Developer', 'PHP Developer', 'Problem Solver'];
  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const word = words[wordIdx];
    if (!deleting) {
      typedEl.textContent = word.slice(0, ++charIdx);
      if (charIdx === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      typedEl.textContent = word.slice(0, --charIdx);
      if (charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 95);
  }
  type();
}

/* ── Counter animation ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + (el.dataset.suffix || '');
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value[data-target]').forEach(el => counterObserver.observe(el));

/* ── Contact form feedback ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    
    // Add your Google Apps Script URL here
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx8gAnf3IWWtygdJ6oLlpGTDgCPK2IOWkwCnxXVdd0BS05z_VPo_Ho9GmNVz-xPiN3S/exec';
    
    const btn = contactForm.querySelector('[type="submit"]');
    const origHtml = btn.innerHTML;

    try {
      // 1. Button Loading State (Modern Loader)
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing...';
      btn.style.opacity = '0.85';

      // 2. Prepare Data
      const formData = new FormData(contactForm);
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, value);
      });
      
      // 3. Submit to Google (Bulletproof method)
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        cache: 'no-cache',
        body: params.toString() // String encoding is best for no-cors
      });

      // 4. Success Feedback
      btn.innerHTML = '<i class="bi bi-check2"></i> Message Sent!';
      btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
      
      contactForm.reset();

      // Restore button after 4 seconds
      setTimeout(() => {
        btn.innerHTML = origHtml;
        btn.style.background = '';
      }, 4000);

    } catch (error) {
      console.error('Submission Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Please check your connection and try again.',
        background: '#111118',
        color: '#f0f0f8',
        confirmButtonColor: '#ef4444',
        heightAuto: false
      });
      btn.innerHTML = origHtml;
    } finally {
      // 5. Re-enable Button
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  });
}

/* ── Project card tilt effect ── */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── Project filter tabs ── */
document.querySelectorAll('.proj-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.proj-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.proj-item').forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ── Magnetic Buttons (Modern Hover) ── */
const magneticButtons = document.querySelectorAll('.btn-primary-custom, .btn-outline-custom');
magneticButtons.forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Move the button slightly towards the cursor
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  
  btn.addEventListener('mouseleave', () => {
    // Reset position smoothly
    btn.style.transform = '';
  });
});

/* ── Add explicit 'visible' class to section labels on scroll ── */
const labelObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      labelObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.section-label').forEach(el => labelObserver.observe(el));

/* ── Back to Top Logic ── */
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}



/* ── Show More Projects Logic ── */
const showMoreBtn = document.getElementById('showMoreProjects');
const hiddenProjects = document.querySelectorAll('.project-item-hidden');

if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
    const isShowing = showMoreBtn.classList.contains('active');
    
    hiddenProjects.forEach(proj => {
      if (!isShowing) {
        proj.classList.add('show');
      } else {
        proj.classList.remove('show');
      }
    });

    if (!isShowing) {
      showMoreBtn.innerHTML = '<i class="bi bi-dash-circle me-2"></i> Show Less';
      showMoreBtn.classList.add('active');
    } else {
      showMoreBtn.innerHTML = '<i class="bi bi-plus-circle me-2"></i> View More Projects';
      showMoreBtn.classList.remove('active');
      
      // Scroll back up to projects section start
      document.getElementById('projects').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

/* ── Show More Services Logic ── */
const showMoreServicesBtn = document.getElementById('showMoreServices');
const hiddenServices = document.querySelectorAll('.service-item-hidden');

if (showMoreServicesBtn) {
  showMoreServicesBtn.addEventListener('click', () => {
    const isShowing = showMoreServicesBtn.classList.contains('active');
    
    hiddenServices.forEach(service => {
      if (!isShowing) {
        service.classList.add('show');
      } else {
        service.classList.remove('show');
      }
    });

    if (!isShowing) {
      showMoreServicesBtn.innerHTML = '<i class="bi bi-dash-circle me-2"></i> Show Less';
      showMoreServicesBtn.classList.add('active');
    } else {
      showMoreServicesBtn.innerHTML = '<i class="bi bi-plus-circle me-2"></i> View All Services';
      showMoreServicesBtn.classList.remove('active');
      
      // Scroll back up to services section start
      document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}
