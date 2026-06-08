/* ============================================================
   TOOCREATE — Interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Nav scroll state ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    const close = () => { menu.classList.remove('open'); document.body.style.overflow = ''; };
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(r => io.observe(r));
    // Safety: ensure everything shows even if IO is slow (print / capture contexts)
    setTimeout(() => reveals.forEach(r => r.classList.add('in')), 1800);
  } else {
    reveals.forEach(r => r.classList.add('in'));
  }

  /* ---------- Animated counters ---------- */
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const formatNum = (val, decimals) => {
    return val.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };
  const animateNum = (el) => {
    const target = parseFloat(el.dataset.num);
    const decimals = (el.dataset.num.split('.')[1] || '').length;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    // "mb" format: target is in millions, counts up showing "###M+",
    // then snaps to billions ("#B+") once it crosses 1000M.
    const mb = el.dataset.format === 'mb';
    const render = (val) => {
      if (mb) {
        if (val >= 1000) return prefix + formatNum(val / 1000, val % 1000 === 0 ? 0 : 1) + 'B+';
        return prefix + formatNum(val, 0) + 'M+';
      }
      return prefix + formatNum(val, decimals) + suffix;
    };
    const finalText = render(target);
    const dur = mb ? 2200 : 1700;
    let start = null, done = false;
    const finish = () => { if (!done) { done = true; el.textContent = finalText; } };
    const step = (ts) => {
      if (done) return;
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      el.textContent = render(target * easeOut(p));
      if (p < 1) requestAnimationFrame(step);
      else finish();
    };
    requestAnimationFrame(step);
    // Safety: timers aren't throttled like rAF — guarantee the final value lands
    // even if the tab is backgrounded and the animation frame never paints.
    setTimeout(finish, dur + 200);
  };
  const counters = document.querySelectorAll('[data-num]');
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateNum(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => co.observe(c));
  } else {
    counters.forEach(c => animateNum(c));
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
        o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = [...document.querySelectorAll('section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const linkFor = id => navLinks.find(l => l.getAttribute('href') === '#' + id);
  if ('IntersectionObserver' in window && sections.length) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const link = linkFor(e.target.id);
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => so.observe(s));
  }

  /* ---------- Hero parallax on motif ---------- */
  const motif = document.querySelector('.hero-motif');
  if (motif && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let raf;
    window.addEventListener('scroll', () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        motif.style.transform = `translateY(calc(-50% + ${y * 0.12}px)) rotate(${y * 0.01}deg)`;
        raf = null;
      });
    }, { passive: true });
  }

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
