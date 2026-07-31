# AttendFlow - Modern Workforce & Attendance Management SaaS

AttendFlow is a modern, high-conversion B2B SaaS landing page and interactive workforce management preview built for employee tracking, leave management, shift scheduling, and operational analytics.

---

## 📁 Master Documentation Map

AttendFlow includes a complete, enterprise-grade business specification system categorized into 4 tiers:

### 🌟 1. Strategic Company Design
- `VISION.md` — 10-Year North-Star Vision & Ambition Scale Models
- `CAPITAL.md` — Capital Strategy, Funding Triggers & Financial Model
- `TEAM_ORG.md` — Phased Hiring Plan, Role Profiles & Org Structure
- `EQUITY_GOVERNANCE.md` — Cap Table, Incentives & Corporate Governance
- `LEGAL_COMPLIANCE.md` — Corporate Legal Foundations & Compliance Trajectory
- `CULTURE.md` — Core Values, Operating Principles & Meeting Norms
- `EXIT_OPTIONS.md` — Strategic Exit Pathways & M&A Drivers

### 🎯 2. Product Marketing & Positioning
- `POSITIONING.md` — One-Liner, 60-Sec Pitch & Target Audience Matrix
- `STORY.md` — Before/After Scenarios & Reusable Narrative Mini-Stories
- `CONTENT.md` — Message Hierarchy, Content Pillars & Microcopy Snippets
- `SALES_ENABLEMENT.md` — Demo Script, One-Pager & Email Outreach Sequences
- `PROOF.md` — Social Proof Framework & 1-Page Case Study Template
- `ROADMAP.md` — Product Feature Evolution & Multi-Page Migration Plan

### 🚀 3. Go-to-Market & Revenue Operations
- `GTM.md` — Ideal Customer Profiles (ICPs) & Strategic Motions
- `FUNNEL.md` — 4-Stage Conversion Funnel & Mathematical Model
- `INBOUND.md` — SEO Keyword Strategy, Content Calendar & Lead Magnets
- `OUTBOUND.md` — Prospecting Criteria & 6-Touch Outreach Sequences
- `REVENUE.md` — Pricing Model, Unit Economics & 12-Month Targets
- `PARTNERSHIPS.md` — Channel Program Tiers & Partner Outreach Sequences
- `OPS_STACK.md` — Internal Tooling, Lead Routing & Hygiene Rules
- `90_DAY_PLAN.md` — Tactical 90-Day Execution Sprints

### ⚙️ 4. Execution & Operating System
- `ATTENDFLOW_OS.md` — Master OS Navigation Map & Architectural Index
- `HOW_TO_USE_ATTENDFLOW.md` — Plain-Language Company Operating Guide & Start-Here Banner
- `STRATEGY_EXEC_LOOP.md` — Strategy-to-Execution Annual/Quarterly/Weekly Loop
- `PLANNING_CALENDAR.md` — Unified Annual, Quarterly & Monthly Planning Calendar
- `OPERATING_RHYTHM.md` — Weekly Operating Cadence & Time-Blocking Schedules
- `DASHBOARDS.md` — Executive, Growth, Sales & CS Scorecards
- `DECISION_FRAMEWORKS.md` — ICE Experiment Prioritization & Product Quadrants
- `CUSTOMER_LEARNING.md` — Customer Feedback Processing & Weekly Synthesis
- `RISKS.md` — Risk Register & Pre-Planned Contingency Playbooks
- `FOUNDER_PLAYBOOK.md` & `PLAYBOOK_FOUNDER.md` — Founder Weekly Routines & Executive Guides
- `PLAYBOOK_GTM.md` — Role Playbook for Growth, Marketing & Outbound Sales
- `PLAYBOOK_PRODUCT_CS.md` — Role Playbook for Engineering, Design & Customer Success
- `PLAYBOOK_OPS.md` — Role Playbook for Operations, Finance & Legal Close
- `METRICS_INDEX.md` — Single Source of Truth Definitions for Business KPIs
- `ONBOARDING.md` — 30-60-90 Day Employee Onboarding & Security Offboarding
- `OS_ADOPTION.md` — OS Internal Launch Strategy & 30-60-90 Day Milestones
- `OS_FEEDBACK.md` — Feedback Channels & Quarterly OS Maintenance Sessions
- `OS_KAIZEN.md` — Continuous Improvement Pillars & `os_experiment` Framework
- `OS_METRICS.md` — OS Health Dashboard & Effectiveness Benchmarks
- `MILESTONES.md` — Growth Stage Gates & Stage Exit Criteria
- `README_GOVERNANCE.md` & `OS_VERSIONING.md` — Document Governance & Change Management

### 🧭 5. Strategic Compass & 3–5 Year Playbook
- `ATTENDFLOW_CONTRACT.md` — The Founder & Company Operating Contract (2026–2031)
- `3_5_YEAR_NARRATIVE.md` — Strategic North-Star Narrative & 5-Year Scale Destination
- `FOCUS.md` — Strategic Themes, Priority Hierarchy & "What We Won't Do" Rules
- `3_5_YEAR_PRODUCT_MARKET.md` — 3-Phase Product Evolution & Market Expansion Roadmap
- `FOUNDER_3_5_YEAR.md` — Founder Personal Goals, Health Boundaries & Role Evolution
- `CULTURE_3_5_YEAR.md` — Scaling Core Values, Talent Density & Remote Hub Structure
- `FINANCE_LIFESTYLE_3_5_YEAR.md` — 5-Year Financial Trajectory & Dividend Allocation Model
- `SCENARIOS.md` & `TRIGGERS.md` — Scenario Futures & Quantitative Trigger Systems
- `STRESS_TESTS.md` & `CRISIS_PLAYBOOKS.md` — Sensitivity Stress-Tests & Emergency Response Playbooks
- `FUNDING_DECISIONS.md` & `ACQ_CONVERSATIONS.md` — Capital Raise Filters & M&A Data Room Protocols
- `RESILIENCE_DESIGN.md` — Financial, Operational & Cognitive Safety Margins

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
