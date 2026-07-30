# AttendFlow - Modern Workforce & Attendance Management SaaS

AttendFlow is a modern, high-conversion B2B SaaS landing page and interactive workforce management preview built for employee tracking, leave management, shift scheduling, and operational analytics.

---

## 🚀 How to Run the Project Locally

Because AttendFlow is built with clean semantic HTML, modular CSS, and vanilla JavaScript ES modules, you can launch it in multiple simple ways:

### Option 1: Vite Local Server (Recommended for Development)
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### Option 2: Direct Production Build Execution
```bash
npm run build
npm start
```

---

## 📁 Project Structure Overview

```text
attendflow-landing/
├─ index.html          # Main semantic HTML5 landing page & interactive preview
├─ CHANGELOG.md        # Version history & production release updates
├─ README.md           # Project documentation, developer handoff & analytics guide
├─ css/
│  ├─ base.css         # Resets, CSS variables, typography standards, prefers-reduced-motion
│  ├─ components.css   # Buttons, cards, navbar, hero dashboard mockup, report tabs, pricing
│  ├─ layout.css       # Responsive grid system, flex helpers, section containers
│  ├─ utilities.css    # Spacing utilities, badge themes, scroll reveal initial states
│  └─ theme.css        # Dark mode variables & glassmorphism overrides
├─ js/
│  ├─ main.js          # Entry point & component event wiring
│  ├─ analytics.js     # Lightweight analytics layer (trackEvent, sendBeacon/fetch fallback)
│  ├─ content.js       # CMS-ready JSON store for FAQs, Use Cases, and Features
│  ├─ animations.js    # IntersectionObserver scroll reveal & reduced-motion aware counters
│  ├─ components.js    # Dark mode toggle, mobile menu, report view tabs, lead validation
│  └─ utils.js         # Debounce, throttle, DOM selector helpers, email validator, experiment reader
```

---

## 📊 Analytics & Event Tracking Guide

AttendFlow includes a lightweight, production-ready event tracking module (`js/analytics.js`).

### Event Payload Structure
All events automatically log to console in dev mode and post JSON payloads to `/api/track` (or via `navigator.sendBeacon`):

```json
{
  "event": "hero_cta_click",
  "properties": {
    "cta_type": "free_trial",
    "location": "hero",
    "hero_variant": "v1"
  },
  "meta": {
    "session_id": "sess_x82f1k9_1772349000000",
    "timestamp": "2026-07-30T14:50:00.000Z",
    "url": "https://attendflow.io/?hero=v1"
  }
}
```

### Main Tracked Events
- `page_view`: Fired automatically on page load.
- `hero_cta_click`: Fired on primary hero button interactions.
- `lead_form_submit`: Fired when users request a demo or trial access.
- `report_tab_change`: Fired when switching mockup views (Roster, Monthly, Exceptions, Exports).
- `report_export_click`: Fired on CSV/XML export triggers.
- `pricing_toggle_change`: Fired when toggling annual vs monthly pricing.
- `faq_open`: Fired when expanding FAQ accordion items.

---

## 🧪 A/B Testing & Variant Foundations

You can test different visual variants using URL query parameters:
- `?hero=v2`: Activates alternate hero experiment tag.
- `?pricing=annual`: Sets default pricing toggle state.
- `?cta=book`: Alters CTA tracking tag.

Variants are read via `getExperimentVariant()` in `js/utils.js` and cached in `localStorage`.

---

## ♿ Accessibility & Performance Targets

AttendFlow is engineered for high performance and WCAG AA compliance:
- **Lighthouse Targets**: Performance ≥ 92, Accessibility = 100, Best Practices = 100, SEO = 100.
- **Keyboard Navigation**: Full focus ring support (`:focus-visible`) across all buttons, inputs, tabs, and drawer controls.
- **Reduced Motion**: Automatically disables scroll reveal delays and frame counting when `prefers-reduced-motion: reduce` is detected.
