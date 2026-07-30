# AttendFlow - Release Changelog

## [v3.4.0] - 2026-07-30
### Production Hardening & Analytics Release
- **Analytics & Instrumentation Layer**: Integrated `js/analytics.js` with `trackEvent()` helper supporting beacon/fetch fallback, session persistence, and custom properties.
- **Enhanced Lead Capture**: Upgraded demo modal form with client-side regex email validation, cooldown throttle (5s limit), optional company & team-size expansion, and an inline thank-you success state.
- **Sample Use Cases Section**: Added "Built for the Way Your Team Actually Works" section highlighting Hybrid Tech, Call Centers, Agencies, and Multi-site retail.
- **Interactive Report Views**: Added tabbed report switching inside product showcase preview (`Live Daily Roster`, `Monthly Breakdown`, `Late & Absent Exception Log`, `Exports & Payroll Hub`).
- **1-Click Payroll Exports**: Interactive export buttons for CSV, XML, and Audit log reports with toast feedback.
- **Accessibility & SEO**: Added ARIA labels, `role="dialog"`, `role="tablist"`, OpenGraph/Twitter social cards, and `prefers-reduced-motion` CSS overrides.
- **A/B Experimentation Engine**: Added `getExperimentVariant()` in `js/utils.js` supporting URL query parameters (e.g., `?hero=v2`, `?pricing=annual`) with localStorage caching.

## [v3.0.0] - 2026-07-28
### Initial Core Architecture Release
- **Design System**: Established variable-driven CSS theme architecture supporting light and dark modes.
- **Core Components**: Responsive Navbar drawer, FAQ accordion, Pricing tier toggle, Floating back-to-top button, Toast notifications, and Ripple click effects.
- **Live Mockup**: Built pure HTML/CSS interactive dashboard mockup with live department filtering.
