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

  function setTestimonial(i) {
    testimonials.forEach((t, k) => t.classList.toggle('active', k === i));
    dots.forEach((d, k) => d.classList.toggle('active', k === i));
    if (counter) counter.textContent = `${String(i + 1).padStart(2, '0')} / 0${testimonials.length}`;
    tIdx = i;
  }

  // Directional slide transition.
  // direction: +1 = next (outgoing slides left, incoming from right)
  //            -1 = prev (outgoing slides right, incoming from left)
  function slideTo(newIdx, direction) {
    if (newIdx === tIdx) return;
    const outEl = testimonials[tIdx];
    const inEl = testimonials[newIdx];
    const isNext = direction > 0;

    // Position incoming off-screen without transition
    inEl.classList.remove('active', 'exit-left', 'exit-right');
    inEl.classList.add(isNext ? 'pre-enter-right' : 'pre-enter-left');
    // Force reflow so the pre-enter transform is applied before we animate
    void inEl.offsetHeight;

    // Animate outgoing off
    outEl.classList.remove('active');
    outEl.classList.add(isNext ? 'exit-left' : 'exit-right');

    // Animate incoming in
    inEl.classList.remove('pre-enter-right', 'pre-enter-left');
    inEl.classList.add('active');

    // Clean up exit classes on the previously-active after the animation finishes
    setTimeout(() => {
      outEl.classList.remove('exit-left', 'exit-right');
    }, 600);

    // Update indicators
    dots.forEach((d, k) => d.classList.toggle('active', k === newIdx));
    if (counter) counter.textContent = `${String(newIdx + 1).padStart(2, '0')} / 0${testimonials.length}`;
    tIdx = newIdx;
  }

  if (testimonials.length) {
    const AUTO_MS = 6500;
    let autoTimer = null;

    const advance = () => slideTo((tIdx + 1) % testimonials.length, 1);
    const retreat = () => slideTo((tIdx - 1 + testimonials.length) % testimonials.length, -1);

    const startAuto = () => {
      if (autoTimer) return;
      autoTimer = setInterval(advance, AUTO_MS);
    };
    const stopAuto = () => {
      if (!autoTimer) return;
      clearInterval(autoTimer);
      autoTimer = null;
    };
    const restartAuto = () => { stopAuto(); startAuto(); };

    if (prevBtn) prevBtn.addEventListener('click', () => { retreat(); restartAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { advance(); restartAuto(); });
    dots.forEach((d, k) => d.addEventListener('click', () => {
      if (k === tIdx) return;
      // Pick direction by shortest path around the loop
      const diff = k - tIdx;
      const forward = (diff + testimonials.length) % testimonials.length;
      const backward = testimonials.length - forward;
      const dir = forward <= backward ? 1 : -1;
      slideTo(k, dir);
      restartAuto();
    }));

    // Pause when tab is backgrounded so rotation doesn't burn cycles off-screen.
    // Intentionally NOT pausing on hover — cursor often parks on the carousel
    // while reading and freezes the rotation indefinitely.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAuto(); else startAuto();
    });

    startAuto();
  }

  // -- JOURNAL WINDOW click-to-expand-then-navigate
  const journalWindow = document.querySelector('.journal-window');
  if (journalWindow) {
    const targetHref = journalWindow.dataset.href;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const expandAndGo = () => {
      if (!targetHref) return;
      if (journalWindow.classList.contains('jw-expanding')) return;

      // Respect reduced motion — just navigate
      if (reducedMotion) {
        window.location.href = targetHref;
        return;
      }

      const rect = journalWindow.getBoundingClientRect();

      // Pin the window at its current on-screen coordinates
      journalWindow.style.position = 'fixed';
      journalWindow.style.top = rect.top + 'px';
      journalWindow.style.left = rect.left + 'px';
      journalWindow.style.width = rect.width + 'px';
      journalWindow.style.height = rect.height + 'px';
      journalWindow.style.margin = '0';
      journalWindow.style.maxWidth = 'none';
      journalWindow.classList.add('jw-expanding');

      // Lock body scroll while animation plays
      document.body.style.overflow = 'hidden';

      // Force reflow so the starting rect is committed before the transition
      void journalWindow.offsetHeight;

      // Grow to fullscreen
      journalWindow.style.transition =
        'top 620ms cubic-bezier(0.7, 0, 0.2, 1),' +
        ' left 620ms cubic-bezier(0.7, 0, 0.2, 1),' +
        ' width 620ms cubic-bezier(0.7, 0, 0.2, 1),' +
        ' height 620ms cubic-bezier(0.7, 0, 0.2, 1),' +
        ' border-radius 620ms ease';
      journalWindow.style.top = '0';
      journalWindow.style.left = '0';
      journalWindow.style.width = '100vw';
      journalWindow.style.height = '100vh';
      journalWindow.style.borderRadius = '0';

      // Near the end of the grow, fade the inner chrome so the browser
      // load flash to the entry page reads as one continuous motion.
      setTimeout(() => journalWindow.classList.add('jw-fading'), 520);

      // Navigate after the fade begins
      setTimeout(() => { window.location.href = targetHref; }, 860);
    };

    journalWindow.addEventListener('click', (e) => {
      // Let nested <a> elements do their own thing
      if (e.target.closest('a')) return;
      expandAndGo();
    });

    journalWindow.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        expandAndGo();
      }
    });
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
