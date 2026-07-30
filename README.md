# AttendFlow - Modern Workforce & Attendance Management SaaS

AttendFlow is a modern, high-conversion B2B SaaS landing page and interactive product showcase built for workforce management, employee tracking, leave management, and operational analytics.

---

## 🚀 How to Run the Project Locally

Because AttendFlow is built with clean semantic HTML, modular CSS, and vanilla JavaScript ES modules, you can launch it in multiple simple ways:

### Option 1: Direct File Access (Browser)
Simply double-click `index.html` or open it in any modern browser (Chrome, Safari, Firefox, Edge).

### Option 2: Vite Local Server (Recommended for Development)
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 📁 Project Structure Overview

```text
attendflow-landing/
├─ index.html          # Main semantic HTML5 landing page & interactive preview
├─ css/
│  ├─ base.css         # Resets, CSS variables, typography standards, spacing math
│  ├─ components.css   # Buttons, cards, navbar, hero dashboard mockup, pricing, timeline
│  ├─ layout.css       # Responsive grid system, flex helpers, section containers
│  ├─ utilities.css    # Spacing utilities, badge themes, scroll reveal initial states
│  └─ theme.css        # Dark mode variables & glassmorphism overrides
├─ js/
│  ├─ main.js          # Main entry point & component initialization
│  ├─ animations.js    # IntersectionObserver scroll reveal & animated count-up counters
│  ├─ components.js    # Dark mode toggle, mobile menu, FAQ accordion, demo modal, toast, pricing switch
│  └─ utils.js         # Debounce, throttle, DOM selector helpers, number formatters
└─ README.md           # Project documentation & customization guide
```

---

## 🎨 How to Customize

### 1. Colors & Branding
Modify global CSS variables in `css/base.css` and `css/theme.css`:

```css
:root {
  --color-primary: #2563EB;     /* Primary brand color */
  --color-secondary: #0F172A;   /* Dark brand background */
  --color-accent: #10B981;      /* Success/accent color */
  --color-bg: #F8FAFC;          /* Light mode background */
}
```

### 2. Fonts & Typography
Update `--font-sans` in `css/base.css` to swap in custom Google Fonts (such as Inter, Plus Jakarta Sans, or Outfit).

### 3. Copywriting & Pricing Tiers
- Edit pricing amounts and features inside `#pricing` in `index.html`.
- Modify initial counter values using `data-counter="99.8"` attributes on HTML elements.
