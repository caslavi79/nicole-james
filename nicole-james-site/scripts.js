// ============================================================
// NICOLE JAMES · SITE INTERACTIONS
// Vanilla JS. No framework.
// ============================================================

(function () {
  'use strict';

  // -- NAV scroll behavior
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // -- SCROLL REVEAL
  const revealTargets = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('in'));
  }

  // -- SERVICES accordion (click to expand, click × to collapse)
  const svcRow = document.getElementById('svcRow');
  if (svcRow) {
    const cards = svcRow.querySelectorAll('.svc-card');
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const idx = card.getAttribute('data-idx');
        const currentlyExpanded = svcRow.getAttribute('data-expanded');
        // If clicking the expanded card, collapse it
        if (currentlyExpanded === idx) {
          svcRow.setAttribute('data-expanded', '');
        } else {
          svcRow.setAttribute('data-expanded', idx);
        }
      });
    });
  }

  // -- TESTIMONIAL carousel
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.testimonial-dot');
  const counter = document.getElementById('tCounter');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');
  let tIdx = 0;

  function showTestimonial(i) {
    testimonials.forEach((t, k) => t.classList.toggle('active', k === i));
    dots.forEach((d, k) => d.classList.toggle('active', k === i));
    if (counter) counter.textContent = `${String(i + 1).padStart(2, '0')} / 0${testimonials.length}`;
    tIdx = i;
  }

  if (testimonials.length) {
    if (prevBtn) prevBtn.addEventListener('click', () => showTestimonial((tIdx - 1 + testimonials.length) % testimonials.length));
    if (nextBtn) nextBtn.addEventListener('click', () => showTestimonial((tIdx + 1) % testimonials.length));
    dots.forEach((d, k) => d.addEventListener('click', () => showTestimonial(k)));
  }

  // -- FAQ accordion (on journal page)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const q = item.querySelector('.faq-q');
    if (q) {
      q.addEventListener('click', () => item.classList.toggle('open'));
    }
  });

  // -- Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // -- MOBILE NAV (hamburger overlay)
  const navToggle = document.getElementById('navToggle');
  const navOverlay = document.getElementById('navOverlay');
  const navClose = document.getElementById('navClose');

  if (navToggle && navOverlay) {
    const overlayLinks = navOverlay.querySelectorAll('a');

    const openMenu = () => {
      navOverlay.hidden = false;
      // force reflow so the transition plays from the hidden state
      void navOverlay.offsetWidth;
      navOverlay.classList.add('open');
      document.body.classList.add('nav-open');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Close menu');
      // move focus into the overlay for a11y
      if (navClose) navClose.focus({ preventScroll: true });
    };

    const closeMenu = () => {
      navOverlay.classList.remove('open');
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      // wait for transition before hiding from a11y tree
      const onEnd = () => {
        navOverlay.hidden = true;
        navOverlay.removeEventListener('transitionend', onEnd);
      };
      navOverlay.addEventListener('transitionend', onEnd);
      // fallback in case transitionend doesn't fire (e.g. reduced motion)
      setTimeout(() => { if (!navOverlay.classList.contains('open')) navOverlay.hidden = true; }, 400);
      navToggle.focus({ preventScroll: true });
    };

    navToggle.addEventListener('click', () => {
      if (navOverlay.classList.contains('open')) closeMenu();
      else openMenu();
    });

    if (navClose) navClose.addEventListener('click', closeMenu);

    // close on link tap
    overlayLinks.forEach((link) => link.addEventListener('click', closeMenu));

    // close on tap outside (click on the overlay background itself, not inner content)
    navOverlay.addEventListener('click', (e) => {
      if (e.target === navOverlay) closeMenu();
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navOverlay.classList.contains('open')) closeMenu();
    });

    // If viewport grows past mobile while open, close cleanly
    const mql = window.matchMedia('(min-width: 721px)');
    const onMqChange = (ev) => {
      if (ev.matches && navOverlay.classList.contains('open')) closeMenu();
    };
    if (mql.addEventListener) mql.addEventListener('change', onMqChange);
    else if (mql.addListener) mql.addListener(onMqChange);
  }

})();
