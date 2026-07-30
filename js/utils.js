/**
 * AttendFlow - Utility & Helper Functions
 */

// Debounce function to limit execution rate of frequent events (e.g., scroll, resize)
export function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function to ensure execution at most once per wait interval
export function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Format numbers with commas (e.g. 10000 -> 10,000)
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Safe element selector helper
export function $(selector, scope = document) {
  return scope.querySelector(selector);
}

export function $$(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

/**
 * Validates email format using standard RFC 5322 regex pattern
 * @param {string} email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase().trim());
}

/**
 * Reads experiment variant from URL query param (e.g. ?hero=v2) or localStorage
 * @param {string} experimentName - e.g. 'hero', 'pricing', 'cta'
 * @param {string} defaultValue - e.g. 'v1'
 * @returns {string} active variant identifier
 */
export function getExperimentVariant(experimentName, defaultValue = 'v1') {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramVal = urlParams.get(experimentName);
    if (paramVal) {
      localStorage.setItem(`exp_${experimentName}`, paramVal);
      return paramVal;
    }
    const storedVal = localStorage.getItem(`exp_${experimentName}`);
    if (storedVal) return storedVal;
  } catch (e) {
    // Graceful fallback
  }
  return defaultValue;
}

