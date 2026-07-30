/**
 * AttendFlow - Interactive Components & UI Logic
 */
import { $, $$ } from './utils.js';

// --------------------------------------------------------------------------
// 1. Dark Mode Management
// --------------------------------------------------------------------------
export function initDarkMode() {
  const toggleBtn = $('#themeToggleBtn');
  const html = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('attendflow_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.classList.add('dark-mode');
  } else {
    html.classList.remove('dark-mode');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      html.classList.toggle('dark-mode');
      const isDark = html.classList.contains('dark-mode');
      localStorage.setItem('attendflow_theme', isDark ? 'dark' : 'light');
      showToast(isDark ? '🌙 Switched to Dark Mode' : '☀️ Switched to Light Mode');
    });
  }
}

// --------------------------------------------------------------------------
// 2. Navigation & Mobile Menu
// --------------------------------------------------------------------------
export function initNavigation() {
  const navbar = $('#navbar');
  const mobileToggle = $('#mobileToggle');
  const mobileMenu = $('#mobileMenu');
  const navLinks = $$('.nav-link');

  // Sticky Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Mobile drawer toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.add('open');
        mobileToggle.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }
}

// --------------------------------------------------------------------------
// 3. FAQ Accordion
// --------------------------------------------------------------------------
export function initAccordion() {
  const accordionItems = $$('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (header && content) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other accordions for clean single accordion feel
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.accordion-content');
            if (otherContent) otherContent.style.maxHeight = '0px';
          }
        });

        // Toggle active state
        if (isActive) {
          item.classList.remove('active');
          content.style.maxHeight = '0px';
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });
}

// --------------------------------------------------------------------------
// 4. Pricing Switch Toggle (Monthly vs Annual)
// --------------------------------------------------------------------------
export function initPricingToggle() {
  const pricingSwitch = $('#pricingSwitch');
  const starterPrice = $('#starterPrice');
  const growthPrice = $('#growthPrice');
  const enterprisePrice = $('#enterprisePrice');
  const billingCycleLabels = $$('.billing-cycle-text');

  if (pricingSwitch) {
    pricingSwitch.addEventListener('click', () => {
      pricingSwitch.classList.toggle('active');
      const isAnnual = pricingSwitch.classList.contains('active');

      if (isAnnual) {
        if (starterPrice) starterPrice.textContent = '$15';
        if (growthPrice) growthPrice.textContent = '$39';
        if (enterprisePrice) enterprisePrice.textContent = '$79';
        billingCycleLabels.forEach(el => (el.textContent = '/user/mo (billed annually)'));
        showToast('🎉 20% Annual Discount Applied!');
      } else {
        if (starterPrice) starterPrice.textContent = '$19';
        if (growthPrice) growthPrice.textContent = '$49';
        if (enterprisePrice) enterprisePrice.textContent = '$99';
        billingCycleLabels.forEach(el => (el.textContent = '/user/mo (billed monthly)'));
      }
    });
  }
}

// --------------------------------------------------------------------------
// 5. Demo Modal & Lead Capture
// --------------------------------------------------------------------------
export function initDemoModal() {
  const modalOverlay = $('#demoModal');
  const closeModalBtn = $('#closeModalBtn');
  const demoForm = $('#demoForm');
  const triggerBtns = $$('[data-modal-target="demoModal"]');

  // Open modal triggers
  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay?.classList.add('active');
    });
  });

  // Close modal
  closeModalBtn?.addEventListener('click', () => {
    modalOverlay?.classList.remove('active');
  });

  // Close when clicking outside content box
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  // Handle demo form submission
  demoForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = $('#demoEmail');
    const nameInput = $('#demoName');

    if (emailInput && nameInput) {
      const email = emailInput.value;
      modalOverlay?.classList.remove('active');
      demoForm.reset();
      showToast(`✨ Thanks ${nameInput.value}! We sent demo access to ${email}.`);
    }
  });
}

// --------------------------------------------------------------------------
// 6. Toast Notification System
// --------------------------------------------------------------------------
export function showToast(message, duration = 3500) {
  let toastContainer = $('#toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// --------------------------------------------------------------------------
// 7. Back To Top Button
// --------------------------------------------------------------------------
export function initBackToTop() {
  const backBtn = $('#backToTop');

  if (backBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    });

    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// --------------------------------------------------------------------------
// 8. Button Ripple Effects
// --------------------------------------------------------------------------
export function initRippleEffect() {
  document.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('.btn');
    if (!targetBtn) return;

    const circle = document.createElement('span');
    const diameter = Math.max(targetBtn.clientWidth, targetBtn.clientHeight);
    const radius = diameter / 2;

    const rect = targetBtn.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const ripple = targetBtn.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    targetBtn.appendChild(circle);
  });
}

// --------------------------------------------------------------------------
// 9. Interactive Product Preview Mockup Tabs & Filters
// --------------------------------------------------------------------------
export function initDashboardInteractivePreview() {
  const deptFilterSelect = $('#dashboardDeptFilter');
  const tableRows = $$('.employee-row');
  const chartBars = $$('.interactive-chart-bar');

  if (deptFilterSelect) {
    deptFilterSelect.addEventListener('change', (e) => {
      const selectedDept = e.target.value.toLowerCase();
      tableRows.forEach(row => {
        const rowDept = row.dataset.dept?.toLowerCase();
        if (selectedDept === 'all' || rowDept === selectedDept) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
      showToast(`Filtered dashboard view for ${e.target.value}`);
    });
  }

  // Interactive Chart Bar hover / click tooltips
  chartBars.forEach(bar => {
    bar.addEventListener('click', () => {
      const day = bar.dataset.day || 'Day';
      const val = bar.dataset.val || '98%';
      showToast(`📊 ${day}: ${val} attendance rate`);
    });
  });
}
