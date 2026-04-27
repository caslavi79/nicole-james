// ============================================================
// NICOLE JAMES · SITE INTERACTIONS
// Vanilla JS. No framework.
// ============================================================

(function () {
  'use strict';

  // -- SCROLL TO TOP ON RELOAD / FRESH NAV
  // Default Safari behavior on refresh is to restore the prior scroll
  // position. Users were complaining that hitting refresh kept them
  // mid-page instead of back at the top. We:
  //   * Detect "reload" / "navigate" via PerformanceNavigationTiming
  //     and immediately scroll to (0, 0) — overrides Safari's restore.
  //   * Re-run the same logic on `pageshow` for any non-bfcache event.
  //   * Skip both branches if the URL has a hash (anchor link), so
  //     /services.html#carousel still scrolls to that anchor.
  //   * Skip on bfcache restore (e.persisted === true) — that's a back
  //     navigation, the user expects to land where they left off.
  (function () {
    const goTop = () => { if (!window.location.hash) window.scrollTo(0, 0); };
    try {
      const nav = performance.getEntriesByType('navigation')[0];
      const t = nav ? nav.type : 'navigate';
      if (t === 'reload' || t === 'navigate') goTop();
    } catch (e) { goTop(); }
    window.addEventListener('pageshow', (e) => {
      if (!e.persisted) goTop();
    });
  })();

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

  // -- STICKY GATING (iOS Safari URL-bar fix)
  // In-body `position: sticky` elements cause iOS Safari to hold the URL
  // bar in expanded opaque mode. The CSS uses
  // `position: var(--portrait-pos|--hero-pos, static)` for the home
  // portrait + about hero. We flip them to `sticky` whenever the user
  // is scrolled (scrollY > 0), and back to `static` whenever they're
  // at the very top — so at every "rest" position (top of page, menu
  // closed, etc.) iOS sees no in-body sticky elements and renders the
  // minimal floating URL pill. The transition fires at scrollY=0 which
  // is also the natural state where the sticky pin wouldn't be engaged
  // anyway, so visual behavior is identical.
  const root = document.documentElement.style;
  let stickyOn = false;
  const updateStickyState = () => {
    const shouldBeOn = window.scrollY > 0;
    if (shouldBeOn === stickyOn) return;
    stickyOn = shouldBeOn;
    const v = shouldBeOn ? 'sticky' : 'static';
    root.setProperty('--portrait-pos', v);
    root.setProperty('--hero-pos', v);
  };
  window.addEventListener('scroll', updateStickyState, { passive: true });
  updateStickyState();

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

    // iOS Safari URL-bar workaround: the previous lock used
    // `body { overflow: hidden }` which iOS reads as "page no longer
    // scrollable" and pops the URL bar into expanded opaque mode (the
    // bone strip behind the URL pill that lagged behind the menu
    // animation). Switching to a position:fixed body lock with restored
    // scroll position keeps iOS thinking the page is still scrollable.
    let savedScrollY = 0;
    const lockBody = () => {
      savedScrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    };
    const unlockBody = () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, savedScrollY);
    };

    const openMenu = () => {
      navOverlay.hidden = false;
      // force reflow so the transition plays from the hidden state
      void navOverlay.offsetWidth;
      navOverlay.classList.add('open');
      document.body.classList.add('nav-open');
      lockBody();
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Close menu');
      // move focus into the overlay for a11y
      if (navClose) navClose.focus({ preventScroll: true });
    };

    const closeMenu = () => {
      navOverlay.classList.remove('open');
      document.body.classList.remove('nav-open');
      unlockBody();
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

  // -- BUILDING CAROUSEL (services hero)
  //
  // MOBILE PATH (≤820px) — native-scroll auto-drift with infinite wrap.
  //   - Drives `carousel.scrollLeft += dt * SPEED` each frame.
  //   - Originals are cloned twice so the DOM is [SET-A | SET-B | SET-C],
  //     three identical copies in a row. The user lives in SET-B.
  //   - When auto-drift or user-inertia carries scrollLeft past the
  //     [0.5x, 2.5x] originalWidth band, we silently jump by ±originalWidth.
  //     The seam is invisible because the sets look identical.
  //   - touchstart pauses; touchend resumes after a short debounce
  //     so finger-flick inertia + scroll-snap settle first.
  //   - No `transform`, no track wrapper, no pointerleave dependency,
  //     so iOS Safari can't get stuck in a frozen state.
  //
  // DESKTOP PATH (>820px) — original transform-based marquee with
  //   cloned cards and arrow-button nudges. Untouched from before.
  const bldgCar = document.getElementById('bldgCarousel');
  if (bldgCar && window.matchMedia('(max-width: 820px)').matches) {
    // -------- MOBILE CAROUSEL --------
    // Implementation notes (lessons from earlier broken versions):
    //   * iOS Safari sometimes returns 0 from getBoundingClientRect() on
    //     the very first RAF if images are still resolving. We retry the
    //     measurement until we get a non-zero card width.
    //   * iOS Safari rounds the integer `scrollLeft` getter and can drop
    //     fractional accumulation if you do `scrollLeft += SPEED*dt` per
    //     frame. We track `driftPos` as a float, only WRITE to scrollLeft.
    //   * `scroll-snap-type: proximity` can snap-back during a programmatic
    //     scroll on iOS. We turn snap OFF during auto-drift and turn it
    //     back ON only while the user's finger is on the carousel.
    //   * `pointerleave` doesn't fire reliably on iOS Safari after a tap,
    //     so we use `touchstart`/`touchend` only.
    const originals = Array.from(bldgCar.querySelectorAll('.bldg-card'));
    if (originals.length > 0) {
      // Clone twice so we have 3 identical sets in a row: [A | B | C].
      // The user starts in B. When auto-drift or finger-inertia carries
      // them past [0.5×, 2.5×] setWidth, we silently jump by ±setWidth.
      for (let i = 0; i < 2; i++) {
        originals.forEach(c => {
          const clone = c.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          // Clones must NOT be focusable — would double-tab through links.
          clone.setAttribute('tabindex', '-1');
          bldgCar.appendChild(clone);
        });
      }

      // Snap is only enabled while the user is touching. During auto-drift
      // it's off, otherwise iOS may snap back to a fixed point each frame.
      // setProperty('important') beats the !important in the mobile CSS
      // safety-belt rule.
      const setSnap = (val) => bldgCar.style.setProperty('scroll-snap-type', val, 'important');
      setSnap('none');
      bldgCar.style.scrollBehavior = 'auto'; // never smooth — kills drift

      let setWidth = 0;       // width of one original set including gaps
      let driftPos = 0;       // float scroll position we control
      let touching = false;
      let resumeAt = 0;
      const SPEED = 28;       // px/sec — readable on a phone

      const measure = () => {
        const cs = getComputedStyle(bldgCar);
        const gap = parseFloat(cs.columnGap || cs.gap) || 0;
        const cardW = originals[0].getBoundingClientRect().width;
        if (cardW > 0) {
          setWidth = (cardW + gap) * originals.length;
          return true;
        }
        return false;
      };

      // Persistence — sessionStorage keeps the carousel position across
      // navigations within the same tab, so leaving services.html and
      // coming back doesn't reset a 34-building drift to zero.
      const STORAGE_KEY = 'njBldgCarMobile_v1';
      const restoreOrAnchor = () => {
        if (setWidth <= 0) return;
        let pos = setWidth; // default: start of the middle (cloned) set
        try {
          const saved = parseFloat(sessionStorage.getItem(STORAGE_KEY));
          if (!isNaN(saved) && saved > 0) {
            pos = saved;
            // If viewport changed since save, normalize into a valid band.
            while (pos >= setWidth * 2.5) pos -= setWidth;
            while (pos < setWidth * 0.5) pos += setWidth;
          }
        } catch (e) { /* sessionStorage may throw in private mode */ }
        driftPos = pos;
        bldgCar.scrollLeft = driftPos;
      };

      // Try to measure immediately; if not ready, keep retrying until cards
      // have non-zero width (typically resolves within a frame or two,
      // longer if images dictate layout).
      const tryStart = () => {
        if (measure()) {
          restoreOrAnchor();
          return true;
        }
        return false;
      };
      if (!tryStart()) {
        let attempts = 0;
        const retry = () => {
          if (tryStart() || ++attempts > 60) return;
          requestAnimationFrame(retry);
        };
        requestAnimationFrame(retry);
        // Final safety nets if RAF + image timing is weird.
        window.addEventListener('load', tryStart, { once: true });
        setTimeout(tryStart, 800);
      }

      window.addEventListener('resize', () => {
        if (measure()) {
          driftPos = setWidth + (bldgCar.scrollLeft % setWidth);
          bldgCar.scrollLeft = driftPos;
        }
      }, { passive: true });

      const wrap = () => {
        if (setWidth <= 0) return;
        if (driftPos >= setWidth * 2.5) {
          driftPos -= setWidth;
          bldgCar.scrollLeft = driftPos;
        } else if (driftPos < setWidth * 0.5) {
          driftPos += setWidth;
          bldgCar.scrollLeft = driftPos;
        }
      };

      let last = performance.now();
      const tick = (now) => {
        const dt = Math.min(50, now - last) / 1000;
        last = now;
        if (touching) {
          // User is dragging — sync our float cursor to their position.
          driftPos = bldgCar.scrollLeft;
        } else if (now >= resumeAt && setWidth > 0) {
          // Auto-drift: float math, single write to scrollLeft.
          driftPos += SPEED * dt;
          bldgCar.scrollLeft = driftPos;
        } else {
          // In the resume-grace window after touchend — don't fight inertia.
          driftPos = bldgCar.scrollLeft;
        }
        wrap();
        requestAnimationFrame(tick);
      };
      requestAnimationFrame((t) => { last = t; tick(t); });

      bldgCar.addEventListener('touchstart', () => {
        touching = true;
        // Re-enable snap so the lift snaps to the nearest card.
        setSnap('x proximity');
      }, { passive: true });
      const release = () => {
        touching = false;
        driftPos = bldgCar.scrollLeft;
        resumeAt = performance.now() + 900; // let inertia + snap finish
        last = performance.now();
        // Turn snap back off so our auto-drift isn't fought next tick.
        // Wait a beat so the snap-on-release animation completes first.
        setTimeout(() => {
          if (!touching) setSnap('none');
        }, 500);
      };
      bldgCar.addEventListener('touchend', release, { passive: true });
      bldgCar.addEventListener('touchcancel', release, { passive: true });

      // Also wrap on every native scroll event, so finger-flick inertia
      // that crosses a boundary loops smoothly without waiting for the
      // next tick.
      bldgCar.addEventListener('scroll', () => {
        if (touching) driftPos = bldgCar.scrollLeft;
        wrap();
      }, { passive: true });

      // Save position periodically + on tab hide / page unload so it
      // survives navigation. Interval keeps the saved value fresh
      // for the case where the user kills the tab without an unload.
      const persist = () => {
        if (setWidth <= 0) return;
        try { sessionStorage.setItem(STORAGE_KEY, String(driftPos)); } catch (e) {}
      };
      setInterval(persist, 1000);
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') persist();
      });
      window.addEventListener('pagehide', persist);
    }
  } else if (bldgCar) {
    // True endless loop: as the leftmost card scrolls fully out of view,
    // detach it and append to the end (and bump the offset by its width
    // so visually nothing changes). The card list is conceptually infinite.
    bldgCar.style.overflow = 'hidden';
    bldgCar.style.scrollSnapType = 'none';
    bldgCar.style.display = 'flex';
    bldgCar.style.gap = '0';
    bldgCar.style.padding = '8px 0';

    const originals = Array.from(bldgCar.querySelectorAll('.bldg-card'));
    originals.forEach(c => {
      c.style.flex = '0 0 clamp(200px, 26vw, 300px)';
      c.style.scrollSnapAlign = 'none';
    });
    const track = document.createElement('div');
    track.className = 'bldg-marquee-track';
    track.style.display = 'flex';
    track.style.gap = 'clamp(16px, 1.5vw, 24px)';
    track.style.flex = '0 0 auto';
    track.style.willChange = 'transform';
    track.style.paddingLeft = 'clamp(16px, 1.5vw, 24px)';
    originals.forEach(c => track.appendChild(c));
    // Clone enough copies that we always have buffer to fill the viewport
    // ahead of the visible cards — at least one full extra set, plus a bit.
    for (let i = 0; i < 2; i++) {
      originals.forEach(c => {
        const clone = c.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      });
    }
    bldgCar.appendChild(track);

    let offset = 0;
    let totalDrift = 0; // monotonic — total px drifted since first load. Used to persist position.
    const GAP = 24; // approximate gap; recomputed below per resize
    let gap = GAP;
    const computeGap = () => {
      const cs = getComputedStyle(track);
      gap = parseFloat(cs.columnGap || cs.gap) || 24;
    };
    computeGap();
    window.addEventListener('resize', computeGap, { passive: true });

    // Persistence — restore position after navigation. We save totalDrift
    // (modulo one full original-set cycle) and replay it on load by
    // moving N cards from front to back, then setting the residual offset.
    const STORAGE_KEY_DESK = 'njBldgCarDesk_v1';
    let replayDone = false;
    const replayDrift = () => {
      if (replayDone) return true;
      let saved = NaN;
      try { saved = parseFloat(sessionStorage.getItem(STORAGE_KEY_DESK)); } catch (e) {}
      // No saved value: nothing to replay; mark done so we move on.
      if (isNaN(saved) || saved <= 0) { replayDone = true; return true; }
      const card = track.firstElementChild;
      if (!card) return false;
      const cardW = card.getBoundingClientRect().width;
      if (cardW <= 0) return false; // not laid out yet — caller will retry
      const stride = cardW + gap;
      const cardsToMove = Math.floor(saved / stride);
      const moveN = Math.min(cardsToMove, track.children.length - 1);
      for (let i = 0; i < moveN; i++) {
        track.appendChild(track.firstElementChild);
      }
      offset = -(saved - moveN * stride);
      totalDrift = saved;
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      replayDone = true;
      return true;
    };

    const SPEED = 28; // px/sec — gentle drift, pauses on hover
    let last = performance.now();
    let paused = false;

    const tick = (now) => {
      const dt = Math.min(50, now - last) / 1000;
      last = now;
      if (!paused) {
        const delta = SPEED * dt;
        offset -= delta;
        totalDrift += delta;
        // While the leftmost card is fully off-screen on the left, recycle it.
        // First card position relative to viewport = offset + 0 to offset + cardWidth.
        // It's fully gone when offset + cardWidth + gap <= 0, i.e. offset <= -(cardWidth + gap)
        let first = track.firstElementChild;
        while (first) {
          const w = first.getBoundingClientRect().width;
          if (offset + w + gap <= 0) {
            track.appendChild(first);
            offset += w + gap;
            first = track.firstElementChild;
          } else break;
        }
        track.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
      requestAnimationFrame(tick);
    };
    // Try replay across up to 6 frames so cards have time to lay out.
    // Once replay succeeds (or there's nothing to replay), kick off tick.
    let replayAttempts = 0;
    const startWhenReady = () => {
      if (replayDrift() || ++replayAttempts > 6) {
        last = performance.now();
        requestAnimationFrame(tick);
      } else {
        requestAnimationFrame(startWhenReady);
      }
    };
    startWhenReady();

    bldgCar.addEventListener('mouseenter', () => { paused = true; });
    bldgCar.addEventListener('mouseleave', () => { paused = false; });
    let hoverActive = false;
    bldgCar.addEventListener('pointerenter', () => { hoverActive = true; paused = true; });
    bldgCar.addEventListener('pointerleave', () => { hoverActive = false; paused = false; });

    // Arrow buttons nudge the offset by N card-widths (4 desktop / 2 mobile)
    const bldgPrev = document.getElementById('bldgArrowPrev');
    const bldgNext = document.getElementById('bldgArrowNext');
    const nudge = (dir) => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const stepCount = isMobile ? 2 : 4;
      const card = track.firstElementChild;
      if (!card) return;
      const cardW = card.getBoundingClientRect().width + gap;
      const totalDelta = dir * cardW * stepCount;

      // Pause auto-drift during the tween so it doesn't fight us
      paused = true;
      // Reconcile the DOM IMMEDIATELY for the case where dir < 0 (going backward):
      // pre-pull enough cards from the end to the front so the tween has room
      // to reveal them on the left.
      if (dir < 0) {
        let need = cardW * stepCount + 50;
        while (need > 0) {
          const last = track.lastElementChild;
          if (!last) break;
          track.insertBefore(last, track.firstElementChild);
          const w = last.getBoundingClientRect().width + gap;
          offset -= w;
          need -= w;
        }
        // Apply pre-shift instantly (no transition) so user doesn't see the jump
        track.style.transition = 'none';
        track.style.transform = `translate3d(${offset}px, 0, 0)`;
        // Force reflow so the next transform is animated
        void track.offsetWidth;
      }

      track.style.transition = 'transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1)';
      offset -= totalDelta;
      totalDrift += totalDelta; // keep persistence in sync with arrow nudges
      track.style.transform = `translate3d(${offset}px, 0, 0)`;

      setTimeout(() => {
        track.style.transition = '';
        // For forward motion, recycle off-screen-left cards now (no visual change)
        if (dir > 0) {
          let first = track.firstElementChild;
          while (first) {
            const w = first.getBoundingClientRect().width;
            if (offset + w + gap <= 0) {
              track.appendChild(first);
              offset += w + gap;
              first = track.firstElementChild;
            } else break;
          }
          track.style.transform = `translate3d(${offset}px, 0, 0)`;
        }
        // Resume auto-drift only if mouse isn't currently over the carousel
        if (!hoverActive) paused = false;
        // Resync the tick clock so dt doesn't jump
        last = performance.now();
      }, 720);
    };
    if (bldgPrev) bldgPrev.addEventListener('click', () => nudge(-1));
    if (bldgNext) bldgNext.addEventListener('click', () => nudge(1));

    // Persist totalDrift so leaving and returning to the page doesn't
    // reset the marquee. We modulo by one full cycle (numCards * stride)
    // so the saved value stays bounded even after long sessions.
    const persistDesk = () => {
      const card = track.firstElementChild;
      if (!card || originals.length === 0) return;
      const cardW = card.getBoundingClientRect().width;
      if (cardW <= 0) return;
      const stride = cardW + gap;
      const cycleW = stride * originals.length;
      try {
        sessionStorage.setItem(STORAGE_KEY_DESK, String(totalDrift % cycleW));
      } catch (e) {}
    };
    setInterval(persistDesk, 1000);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') persistDesk();
    });
    window.addEventListener('pagehide', persistDesk);
  }

})();
