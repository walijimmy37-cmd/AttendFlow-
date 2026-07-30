/**
 * AttendFlow - Interactive Components & UI Logic
 */
import { $, $$, validateEmail } from './utils.js';
import { trackEvent } from './analytics.js';

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
      trackEvent('theme_toggle', { mode: isDark ? 'dark' : 'light' });
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
        trackEvent('mobile_menu_open');
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
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
            const otherHeader = otherItem.querySelector('.accordion-header');
            const otherContent = otherItem.querySelector('.accordion-content');
            if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.style.maxHeight = '0px';
          }
        });

        // Toggle active state
        if (isActive) {
          item.classList.remove('active');
          header.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = '0px';
        } else {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';

          const questionText = header.querySelector('span')?.textContent || 'FAQ Item';
          trackEvent('faq_open', { question_id: item.id || 'faq', question: questionText });
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

      trackEvent('pricing_toggle_change', { billing: isAnnual ? 'annual' : 'monthly' });
    });
  }
}

// --------------------------------------------------------------------------
// 5. Demo Modal & Enhanced Lead Capture
// --------------------------------------------------------------------------
let lastLeadSubmitTime = 0;

export function initDemoModal() {
  const modalOverlay = $('#demoModal');
  const closeModalBtn = $('#closeModalBtn');
  const demoForm = $('#demoForm');
  const triggerBtns = $$('[data-modal-target="demoModal"]');
  const toggleMoreFieldsBtn = $('#toggleMoreFieldsBtn');
  const optionalFieldsContainer = $('#optionalFieldsContainer');
  const modalSuccessState = $('#modalSuccessState');
  const modalResetBtn = $('#modalResetBtn');

  // Open modal triggers
  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const ctaType = btn.dataset.ctaType || 'book_demo';
      const location = btn.dataset.location || 'page';

      modalOverlay?.classList.add('active');
      trackEvent('hero_cta_click', { cta_type: ctaType, location: location });
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

  // Toggle extra fields
  if (toggleMoreFieldsBtn && optionalFieldsContainer) {
    toggleMoreFieldsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isHidden = optionalFieldsContainer.style.display === 'none' || !optionalFieldsContainer.style.display;
      if (isHidden) {
        optionalFieldsContainer.style.display = 'block';
        toggleMoreFieldsBtn.textContent = '▲ Hide optional fields';
      } else {
        optionalFieldsContainer.style.display = 'none';
        toggleMoreFieldsBtn.textContent = '✨ Tell us a bit more (Optional)';
      }
    });
  }

  // Handle demo form submission
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Cooldown check (5 seconds)
      const now = Date.now();
      if (now - lastLeadSubmitTime < 5000) {
        showToast('⏳ Please wait a moment before submitting again.', 3000);
        return;
      }

      const emailInput = $('#demoEmail');
      const nameInput = $('#demoName');
      const companyInput = $('#demoCompany');
      const teamSizeInput = $('#demoTeamSize');
      const useCaseInput = $('#demoUseCase');

      if (!nameInput || !nameInput.value.trim()) {
        showToast('⚠️ Please enter your full name.', 3000);
        nameInput?.focus();
        return;
      }

      if (!emailInput || !validateEmail(emailInput.value)) {
        showToast('⚠️ Please enter a valid work email address.', 3000);
        emailInput?.focus();
        return;
      }

      lastLeadSubmitTime = now;

      const email = emailInput.value.trim();
      const name = nameInput.value.trim();
      const company = companyInput?.value?.trim() || 'N/A';
      const teamSize = teamSizeInput?.value || '1-15 Employees';
      const useCase = useCaseInput?.value || 'All of the above';

      // Log Analytics
      trackEvent('lead_form_submit', {
        location: 'modal',
        name,
        email,
        company,
        team_size: teamSize,
        use_case: useCase
      });

      // Show Thank You / Success State
      if (modalSuccessState && demoForm) {
        demoForm.style.display = 'none';
        modalSuccessState.style.display = 'block';
        const userEmailSpan = $('#successUserEmail');
        if (userEmailSpan) userEmailSpan.textContent = email;
      } else {
        modalOverlay?.classList.remove('active');
        demoForm.reset();
      }

      showToast(`✨ Welcome ${name}! Demo credentials dispatched to ${email}.`);
    });
  }

  // Reset modal state
  if (modalResetBtn) {
    modalResetBtn.addEventListener('click', () => {
      if (modalSuccessState && demoForm) {
        modalSuccessState.style.display = 'none';
        demoForm.style.display = 'flex';
        demoForm.reset();
        const surveyForm = $('#modalSurveyForm');
        if (surveyForm) surveyForm.reset();
      }
    });
  }

  // Handle optional survey submission inside modal success state
  const surveyForm = $('#modalSurveyForm');
  if (surveyForm) {
    surveyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedPainPoint = $('input[name="painPoint"]:checked', surveyForm)?.value || 'Not specified';
      const comment = $('#surveyComment', surveyForm)?.value?.trim() || '';

      trackEvent('lead_survey_submit', {
        pain_point: selectedPainPoint,
        comment: comment
      });

      showToast('🎉 Thank you for sharing your feedback! We will customize your demo accordingly.');
      const surveyBox = $('#modalSurveyBox');
      if (surveyBox) {
        surveyBox.innerHTML = '<div class="text-xs text-center text-accent font-semibold py-xs">✓ Feedback received! Your insights help us build a better workforce tool.</div>';
      }
    });
  }
}

// --------------------------------------------------------------------------
// 6. On-Page Feedback Widget
// --------------------------------------------------------------------------
export function initFeedbackWidget() {
  const feedbackContainer = $('#feedbackWidget');
  if (!feedbackContainer) return;

  const yesBtn = $('#feedbackYesBtn');
  const noBtn = $('#feedbackNoBtn');
  const commentForm = $('#feedbackCommentForm');
  const submitCommentBtn = $('#submitFeedbackCommentBtn');
  const commentInput = $('#feedbackCommentInput');

  let selectedVote = null;

  const handleVote = (isHelpful) => {
    selectedVote = isHelpful ? 'helpful' : 'not_helpful';
    trackEvent('page_feedback', { rating: selectedVote, location: 'footer_widget' });
    
    showToast(isHelpful ? '👍 Thanks for your feedback!' : '🙏 Thank you! We will use this to improve.');
    
    if (commentForm) {
      commentForm.style.display = 'block';
    } else {
      feedbackContainer.innerHTML = '<span class="text-xs text-muted font-semibold">✓ Thanks for making AttendFlow better!</span>';
    }
  };

  yesBtn?.addEventListener('click', () => handleVote(true));
  noBtn?.addEventListener('click', () => handleVote(false));

  submitCommentBtn?.addEventListener('click', () => {
    const comment = commentInput?.value?.trim() || '';
    if (comment) {
      trackEvent('page_feedback_comment', { rating: selectedVote, comment });
      showToast('✨ Comment received! Thank you.');
    }
    feedbackContainer.innerHTML = '<span class="text-xs text-muted font-semibold">✓ Feedback submitted. Thank you!</span>';
  });
}

// --------------------------------------------------------------------------
// 7. Share Demo & Referral Launcher
// --------------------------------------------------------------------------
export function initShareButton() {
  const shareBtns = $$('[data-action="share-demo"]');

  shareBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const shareData = {
        title: 'AttendFlow - Modern Workforce Management',
        text: 'Check out AttendFlow: 1-click attendance tracking, automated leave requests, and payroll-ready CSV exports!',
        url: window.location.origin + window.location.pathname
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
          trackEvent('share_click', { method: 'native' });
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(shareData.url);
          showToast('🔗 Shareable link copied to clipboard!');
          trackEvent('share_click', { method: 'clipboard' });
        } else {
          showToast(`🔗 Share URL: ${shareData.url}`);
          trackEvent('share_click', { method: 'prompt' });
        }
      } catch (err) {
        // Quiet fallback on cancel or permission denial
      }
    });
  });
}

// --------------------------------------------------------------------------
// 9. Sales & Enterprise View Mode Handler (?view=sales or ?view=enterprise)
// --------------------------------------------------------------------------
export function initSalesViewMode() {
  const urlParams = new URLSearchParams(window.location.search);
  const viewMode = urlParams.get('view');

  if (viewMode === 'sales' || viewMode === 'enterprise') {
    trackEvent('sales_view_mode_activated', { mode: viewMode });

    // Highlight Enterprise elements & show banner
    const banner = document.createElement('div');
    banner.className = 'sales-mode-banner';
    banner.innerHTML = `
      <div class="container flex items-center justify-between py-xs text-xs font-semibold">
        <span>🛡️ <strong>Enterprise Sales Mode Active:</strong> SOC2 Compliance, Audit Logs & Custom SSO pre-selected.</span>
        <button class="btn btn-secondary btn-sm text-xs" onclick="this.parentElement.parentElement.remove()" style="padding: 2px 8px;">Dismiss</button>
      </div>
    `;
    banner.style.cssText = 'background: linear-gradient(90deg, #1E1B4B, #312E81); color: #EEF2FF; border-bottom: 1px solid #4338CA;';
    document.body.prepend(banner);

    // Auto-select Enterprise tier option in demo modal if opened
    const demoUseCase = $('#demoUseCase');
    if (demoUseCase) {
      demoUseCase.value = 'Payroll CSV Export';
    }
  }
}

// --------------------------------------------------------------------------
// 8. Toast Notification System
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
      trackEvent('back_to_top_click');
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
  const reportTabs = $$('.report-tab-btn');
  const reportPanels = $$('.dashboard-view-panel');
  const exportBtns = $$('[data-action="export-report"]');
  const useCaseLinks = $$('[data-dept-select]');

  // Department filter
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
      trackEvent('dashboard_filter_change', { department: selectedDept });
    });
  }

  // Report view tabs switcher ("Overview", "Attendance", "Late & Absent", "Exports")
  reportTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.targetView;

      reportTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      reportPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.style.display = 'block';
          panel.classList.add('active');
        } else {
          panel.style.display = 'none';
          panel.classList.remove('active');
        }
      });

      trackEvent('report_tab_change', { tab_id: targetId });
    });
  });

  // Export buttons
  exportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const format = btn.dataset.format || 'csv';
      showToast(`📥 Sample report exported (${format.toUpperCase()} generated)`);
      trackEvent('report_export_click', { format });
    });
  });

  // Interactive Chart Bar hover / click tooltips
  chartBars.forEach(bar => {
    bar.addEventListener('click', () => {
      const day = bar.dataset.day || 'Day';
      const val = bar.dataset.val || '98%';
      showToast(`📊 ${day}: ${val} attendance rate`);
      trackEvent('chart_bar_click', { day, value: val });
    });
  });

  // Use Case links auto-filtering preview
  useCaseLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetDept = link.dataset.deptSelect;
      if (deptFilterSelect) {
        deptFilterSelect.value = targetDept.toLowerCase();
        deptFilterSelect.dispatchEvent(new Event('change'));
      }
      const previewSection = $('#preview');
      previewSection?.scrollIntoView({ behavior: 'smooth' });
      trackEvent('use_case_click', { department: targetDept });
    });
  });
}

