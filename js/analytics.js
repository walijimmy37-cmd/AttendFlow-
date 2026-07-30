/**
 * AttendFlow - Analytics & Event Tracking Layer
 * Lightweight, production-ready event instrumentation.
 * Handles logging, beacon/fetch dispatch, session persistence, and A/B test tracking.
 */
import { getExperimentVariant } from './utils.js';

// Analytics Configuration
const ANALYTICS_CONFIG = {
  endpoint: '/api/track',
  debug: true, // Logs to console in development mode
  appName: 'AttendFlow',
  appVersion: '3.4.0'
};

// Session storage key for unique session ID
const SESSION_KEY = 'attendflow_session_id';

/**
 * Retrieves or generates a unique session ID for the user
 * @returns {string} Session identifier
 */
function getSessionId() {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

/**
 * Tracks an analytics event across the application
 * @param {string} eventName - Unique identifier for the event (e.g., 'hero_cta_click')
 * @param {Object} [eventProps={}] - Custom properties describing the interaction
 */
export function trackEvent(eventName, eventProps = {}) {
  const payload = {
    event: eventName,
    properties: {
      ...eventProps,
      hero_variant: getExperimentVariant('hero', 'v1'),
      pricing_variant: getExperimentVariant('pricing', 'v1'),
      cta_variant: getExperimentVariant('cta', 'v1')
    },
    meta: {
      session_id: getSessionId(),
      app_name: ANALYTICS_CONFIG.appName,
      app_version: ANALYTICS_CONFIG.appVersion,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      path: window.location.pathname,
      screen_width: window.innerWidth,
      theme: document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light'
    }
  };

  if (ANALYTICS_CONFIG.debug) {
    console.log(`📊 [Analytics] Track Event: "${eventName}"`, payload);
  }

  // Dispatch via navigator.sendBeacon if available, otherwise fetch with quiet error handling
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon(ANALYTICS_CONFIG.endpoint, blob);
    } else {
      fetch(ANALYTICS_CONFIG.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(() => {
        // Quiet catch for local dev environment without backend server endpoint
      });
    }
  } catch (err) {
    // Fail gracefully in sandboxed / offline environments
  }
}

/**
 * Initializes automatic analytics listeners for elements with data-track attributes
 */
export function initAnalytics() {
  // Track initial page view
  trackEvent('page_view', {
    referrer: document.referrer || 'direct',
    title: document.title
  });

  // Track clicks on elements carrying data-track attributes
  document.addEventListener('click', (e) => {
    const trackableEl = e.target.closest('[data-track]');
    if (trackableEl) {
      const eventName = trackableEl.dataset.track;
      const ctaType = trackableEl.dataset.ctaType;
      const plan = trackableEl.dataset.plan;
      const location = trackableEl.dataset.location;

      trackEvent(eventName, {
        cta_type: ctaType,
        plan: plan,
        location: location,
        text: trackableEl.textContent?.trim().substring(0, 40)
      });
    }
  });

  // Log active experiment exposure if query parameters are present
  const activeHero = getExperimentVariant('hero', null);
  if (activeHero) {
    trackEvent('experiment_exposure', { experiment: 'hero', variant: activeHero });
  }
}
