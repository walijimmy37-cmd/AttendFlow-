/**
 * AttendFlow - Scroll Animations & Animated Counters
 */
import { $$ } from './utils.js';

// --------------------------------------------------------------------------
// 1. Scroll Reveal via IntersectionObserver
// --------------------------------------------------------------------------
export function initScrollReveal() {
  const revealElements = $$('.reveal');

  if (!('IntersectionObserver' in window)) {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observerInstance.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

// --------------------------------------------------------------------------
// 2. Animated Numerical Counters
// --------------------------------------------------------------------------
export function initAnimatedCounters() {
  const counterElements = $$('[data-counter]');

  if (counterElements.length === 0) return;

  const countUp = (el) => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad calculation
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = target * easeProgress;

      el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

      if (frame === totalFrames) {
        clearInterval(counterInterval);
        el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      }
    }, frameDuration);
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => observer.observe(el));
}
