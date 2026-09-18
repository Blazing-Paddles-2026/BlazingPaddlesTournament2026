/* Blazing Paddles 2026 — minimal interactivity */

(function () {
  'use strict';

  // ---- Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---- Theme toggle (dark default; in-memory only for preview compatibility)
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
    });
  }

  // ---- Sticky header scroll state
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Mobile menu
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.querySelector('.primary-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

/* Persistent floating Register CTA — visible once past the hero button */
(function () {
  var pill = document.getElementById('floatingRegister');
  if (!pill) return;
  var hero = document.querySelector('.hero-ctas');
  var footer = document.querySelector('.site-footer') || document.querySelector('footer');

  function update() {
    // Show early so short (phone) viewports are never left without a CTA
    var heroPast = hero ? (hero.getBoundingClientRect().bottom < 0) : false;
    var past = heroPast || window.scrollY > 260;
    // Hide when the footer's own Register button is already on screen
    var footerVisible = false;
    if (footer) {
      var fr = footer.getBoundingClientRect();
      footerVisible = fr.top < window.innerHeight - 80;
    }
    pill.classList.toggle('is-visible', past && !footerVisible);
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
})();
