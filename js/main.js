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

import { initAnalytics } from './analytics.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 AttendFlow Landing Site Initialized v3.4');

  // Initialize Event Instrumentation & Analytics
  initAnalytics();

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

