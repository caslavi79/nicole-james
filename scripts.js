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

  // -- iOS SAFARI URL-BAR: scroll floor + sticky gating
  // Two coordinated tricks to keep the URL pill minimal across the
  // whole interaction:
  //
  // 1. Scroll floor — iOS Safari unconditionally expands the URL bar
  //    when scrollY hits exactly 0 (it's a platform-level affordance,
  //    not a layout bug). We push scrollY back to 1 any time it reaches
  //    0 so iOS always sees "1px of content above the viewport" and
  //    keeps the pill collapsed. The 1px is invisible.
  //
  // 2. Sticky gating — in-body `position: sticky` elements are also a
  //    URL-bar expansion trigger. The hero portrait (home) and hero
  //    video (about) are gated behind --portrait-pos / --hero-pos vars
  //    which start as `static` and flip to `sticky` once scroll begins.
  const root = document.documentElement.style;
  let stickyOn = false;
  const updateState = () => {
    if (window.scrollY < 1) {
      window.scrollTo({ top: 1, behavior: 'instant' });
    }
    const shouldBeOn = window.scrollY > 1;
    if (shouldBeOn !== stickyOn) {
      stickyOn = shouldBeOn;
      const v = shouldBeOn ? 'sticky' : 'static';
      root.setProperty('--portrait-pos', v);
      root.setProperty('--hero-pos', v);
    }
  };
  window.addEventListener('scroll', updateState, { passive: true });
  // Run after layout settles so scrollTo lands.
  requestAnimationFrame(updateState);

  // -- MOBILE PORTRAIT RELOCATE
  // On mobile, reparent the hero portrait out of .hero-grid and into
  // .sticky-stage directly, so the portrait's containing block is the
  // stage (not the short grid track). That gives `position: sticky` real
  // pin range. Desktop keeps the original layout.
  const portraitEl = document.querySelector('.hero-portrait');
  const stageEl = document.querySelector('.sticky-stage');
  const aboutEl = document.getElementById('about');
  if (portraitEl && stageEl && aboutEl) {
    const origParent = portraitEl.parentElement;
    const origNext = portraitEl.nextElementSibling;
    const mql = window.matchMedia('(max-width: 820px)');
    const relocate = () => {
      if (mql.matches) {
        if (portraitEl.parentElement !== stageEl) {
          stageEl.insertBefore(portraitEl, aboutEl);
        }
      } else {
        if (portraitEl.parentElement !== origParent) {
          origParent.insertBefore(portraitEl, origNext);
        }
      }
    };
    relocate();
    window.addEventListener('resize', relocate, { passive: true });
    window.addEventListener('orientationchange', relocate);
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

  // -- BLOG WINDOW click-to-expand → SPA-style swap
  // Clones the window into <body> so it escapes any ancestor stacking /
  // containing-block issues, animates the clone to fullscreen, fetches
  // the entry in parallel, swaps body under the clone, then fades the
  // clone out to reveal the real entry DOM.
  const blogWindow = document.querySelector('.blog-window');
  if (blogWindow) {
    const targetHref = blogWindow.dataset.href;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const expandAndGo = async () => {
      if (!targetHref) return;
      if (document.body.classList.contains('jw-transitioning')) return;
      document.body.classList.add('jw-transitioning');

      if (reducedMotion) { window.location.href = targetHref; return; }

      // Kick off the fetch immediately — done well before the animation ends.
      const fetchPromise = fetch(targetHref, { credentials: 'same-origin' })
        .then(r => r.ok ? r.text() : null)
        .catch(() => null);

      // Capture the current on-screen rect of the window (includes hover transform)
      const rect = blogWindow.getBoundingClientRect();

      // Clone the window; the clone is the one that animates.
      // We append it directly to <body> so it escapes sticky-stage / transform
      // containing-block weirdness in the original parents.
      const clone = blogWindow.cloneNode(true);
      clone.classList.add('jw-expanding');
      clone.removeAttribute('data-animate');
      clone.id = 'jw-overlay';
      Object.assign(clone.style, {
        position: 'fixed',
        top: rect.top + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px',
        height: rect.height + 'px',
        margin: '0',
        maxWidth: 'none',
        zIndex: '10000',
        transform: 'none',
        transition: 'none',
      });
      document.body.appendChild(clone);

      // Hide the original so we don't see it behind the clone.
      blogWindow.style.visibility = 'hidden';
      document.body.style.overflow = 'hidden';

      // Force reflow so the starting rect is committed.
      void clone.offsetHeight;

      // Animate to fullscreen.
      clone.style.transition =
        'top 620ms cubic-bezier(0.7, 0, 0.2, 1),' +
        ' left 620ms cubic-bezier(0.7, 0, 0.2, 1),' +
        ' width 620ms cubic-bezier(0.7, 0, 0.2, 1),' +
        ' height 620ms cubic-bezier(0.7, 0, 0.2, 1),' +
        ' border-radius 620ms ease';
      clone.style.top = '0';
      clone.style.left = '0';
      clone.style.width = '100vw';
      clone.style.height = '100vh';
      clone.style.borderRadius = '0';

      // Fade the clone's inner chrome so by the time we swap bodies the
      // clone is a solid bone rectangle — nothing flashes through.
      // Fade is 180ms (see CSS). We wait for it to fully complete.
      setTimeout(() => clone.classList.add('jw-fading'), 460);

      // Wait for: grow animation (620ms) + inner fade (180ms) + a frame.
      await new Promise(r => setTimeout(r, 660));
      const html = await fetchPromise;

      if (!html) {
        // Fallback: straight nav so the user still gets there.
        window.location.href = targetHref;
        return;
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Push URL + title FIRST so the entry DOM's relative URLs
      // (e.g. ../assets/...) resolve against the new location.
      history.pushState({ spa: true, from: location.href }, '', targetHref);
      document.title = doc.title || document.title;

      // Move the clone OUT of <body> so it survives the body swap.
      document.documentElement.appendChild(clone);

      // Swap body content with the entry's body. Clone is still fullscreen
      // solid bone on top, so this is invisible.
      document.body.innerHTML = doc.body.innerHTML;

      // Reset scroll + unlock.
      window.scrollTo(0, 0);
      document.body.style.overflow = '';
      document.body.classList.remove('jw-transitioning');

      // Re-run scripts.js so the entry page's nav hamburger, FAQ accordion
      // etc. attach to the new DOM. Cache-bust so the browser re-executes it.
      const s = document.createElement('script');
      s.src = 'scripts.js?r=' + Date.now();
      document.body.appendChild(s);

      // Wait TWO paint frames so the entry DOM is laid out before we fade
      // the clone out — prevents any "empty page" flash during reveal.
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => requestAnimationFrame(r));

      clone.style.transition = 'opacity 320ms ease';
      clone.style.opacity = '0';
      setTimeout(() => { clone.remove(); }, 340);
    };

    blogWindow.addEventListener('click', (e) => {
      // Let nested <a> tags do their own thing.
      if (e.target.closest('a')) return;
      expandAndGo();
    });

    blogWindow.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        expandAndGo();
      }
    });

    // Back/forward after a SPA swap: full reload is the safest path.
    window.addEventListener('popstate', () => { window.location.reload(); });
  }

  // -- AUTO-GROW textareas (no ugly manual-resize handle)
  const autoGrowTextareas = document.querySelectorAll('.form-field textarea');
  autoGrowTextareas.forEach((el) => {
    const fit = () => {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    };
    el.addEventListener('input', fit);
    // In case the browser restores value on back-nav
    fit();
  });

  // -- FAQ accordion (on blog page)
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

    // Mark the current page's nav link as active (terracotta).
    (() => {
      const path = location.pathname;
      let currentPage = null;
      if (path.includes('/blog/')) currentPage = 'blog';
      else if (/\/contact\.html$/.test(path)) currentPage = 'contact';
      else if (path === '/' || /\/index\.html$/.test(path) || path.endsWith('/')) currentPage = 'home';
      if (currentPage) {
        navOverlay.querySelectorAll(`.nav-overlay-link[data-page="${currentPage}"]`)
          .forEach((el) => el.classList.add('is-active'));
      }
    })();

    // iOS Safari URL-bar workaround: never lock the body. Both
    // body { overflow: hidden } AND body { position: fixed } are
    // documented iOS triggers that pop the URL bar into expanded
    // opaque mode. Instead, the overlay is already position:fixed
    // covering the whole viewport — we just trap touchmove on its
    // backdrop so scroll can't bleed through to the page underneath.
    const trapBackgroundTouch = (e) => {
      if (e.target === navOverlay) e.preventDefault();
    };

    const openMenu = () => {
      navOverlay.hidden = false;
      // force reflow so the transition plays from the hidden state
      void navOverlay.offsetWidth;
      navOverlay.classList.add('open');
      document.body.classList.add('nav-open');
      navOverlay.addEventListener('touchmove', trapBackgroundTouch, { passive: false });
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Close menu');
      // move focus into the overlay for a11y
      if (navClose) navClose.focus({ preventScroll: true });
    };

    const closeMenu = () => {
      navOverlay.classList.remove('open');
      document.body.classList.remove('nav-open');
      navOverlay.removeEventListener('touchmove', trapBackgroundTouch);
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

  // -- CONTACT CHOOSERS (phone / email action sheets)
  const chooserTriggers = document.querySelectorAll('[data-chooser]');
  const choosers = document.querySelectorAll('.chooser');

  const openChooser = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.hidden = false;
    void el.offsetWidth; // force reflow so the transition plays
    el.classList.add('open');
    document.body.classList.add('chooser-open');
  };

  const closeChooser = (el) => {
    el.classList.remove('open');
    const onEnd = () => {
      if (!el.classList.contains('open')) el.hidden = true;
      el.removeEventListener('transitionend', onEnd);
    };
    el.addEventListener('transitionend', onEnd);
    setTimeout(() => { if (!el.classList.contains('open')) el.hidden = true; }, 400);
    if (!document.querySelector('.chooser.open')) {
      document.body.classList.remove('chooser-open');
    }
  };

  chooserTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.dataset.chooser === 'phone' ? 'phoneChooser' : 'emailChooser';
      openChooser(target);
    });
  });

  choosers.forEach((chooser) => {
    // Close when clicking the backdrop or any element marked data-close.
    chooser.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-close') || e.target === chooser) {
        closeChooser(chooser);
      }
    });

    // Handle each chooser action.
    chooser.querySelectorAll('.chooser-action').forEach((action) => {
      action.addEventListener('click', (e) => {
        // Copy-to-clipboard action
        if (action.hasAttribute('data-copy')) {
          e.preventDefault();
          const text = action.dataset.copy;
          const original = action.textContent;
          const done = () => {
            action.textContent = 'Copied';
            setTimeout(() => {
              action.textContent = original;
              closeChooser(chooser);
            }, 700);
          };
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done, done);
          } else {
            // Legacy fallback
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); } catch (_) {}
            document.body.removeChild(ta);
            done();
          }
          return;
        }
        // Navigation actions (tel:, sms:, mailto:, web mail):
        // let the browser navigate, then close the sheet after a beat so
        // the user returns to a clean menu state.
        setTimeout(() => closeChooser(chooser), 120);
      });
    });
  });

  // Escape closes any open chooser.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.chooser.open').forEach(closeChooser);
    }
  });

})();
