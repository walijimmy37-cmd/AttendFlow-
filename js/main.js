/**
 * AttendFlow - Main Entry Point & Event Wiring
 */
import {
  initDarkMode,
  initNavigation,
  initAccordion,
  initPricingToggle,
  initDemoModal,
  initBackToTop,
  initRippleEffect,
  initDashboardInteractivePreview
} from './components.js';

import {
  initScrollReveal,
  initAnimatedCounters
} from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 AttendFlow Landing Site Initialized');

  // Initialize UI Components
  initDarkMode();
  initNavigation();
  initAccordion();
  initPricingToggle();
  initDemoModal();
  initBackToTop();
  initRippleEffect();
  initDashboardInteractivePreview();

  // Initialize Scroll & Visual Animations
  initScrollReveal();
  initAnimatedCounters();
});
