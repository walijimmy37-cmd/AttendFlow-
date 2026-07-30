# AttendFlow - Deployment & Environment Setup Guide

This guide details the static deployment strategy, environment configurations, and custom domain setup for launching AttendFlow to production.

---

## 🌐 Supported Deployment Platforms

AttendFlow is engineered as a lightweight, performance-optimized single page application (SPA) with zero mandatory runtime backend requirements. It can be hosted on any static cloud provider.

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Log into [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the `attendflow` repository.
4. Framework Preset: **Vite** (or **Other** for pure static HTML).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Option 2: Netlify
1. Log into [Netlify](https://netlify.com) and click **Add new site** → **Import an existing project**.
2. Select repository and set:
   - Build Command: `npm run build`
   - Publish directory: `dist`
3. Click **Deploy Site**.

### Option 3: Cloudflare Pages
1. Navigate to **Cloudflare Dashboard** → **Workers & Pages**.
2. Create application → **Pages** → Connect to Git.
3. Build setting: Vite preset (`npm run build`, output directory `dist`).

---

## 🔒 Custom Domain Setup & SSL

To configure a custom domain (e.g., `attendflow.io` or `app.attendflow.io`):

1. **DNS Settings**:
   - For Apex Domain (`attendflow.io`): Add an `A` record pointing to your host IP (e.g. `76.76.21.21` for Vercel, `104.198.14.52` for Netlify).
   - For Subdomain (`www` or `app`): Add a `CNAME` record pointing to `<your-app>.vercel.app` or `<your-app>.netlify.app`.
2. **TLS / SSL Certificates**:
   - Automatic 256-bit Let's Encrypt TLS certificates are provisioned upon DNS validation.

---

## ⚙️ Environment Variables & Detection

AttendFlow automatically detects its runtime environment via `js/analytics.js`:

```javascript
// Environment is automatically set to 'development' on local/dev hosts
// and 'production' on custom live domains.
const IS_DEV = getEnvironment() === 'development';
```

### Analytics Endpoint Override
To route telemetry data to a custom backend or proxy endpoint, define `window.ATTENDFLOW_ANALYTICS_ENDPOINT` before loading `main.js`:

```html
<script>
  window.ATTENDFLOW_ANALYTICS_ENDPOINT = "https://telemetry.yourdomain.com/collect";
</script>
```

---

## 📄 Custom 404 Error Handling

AttendFlow includes a dedicated, responsive `404.html` page. Most static hosts (Vercel, Netlify, Cloudflare) automatically route non-matching URLs to `404.html`.

For manual server configurations (Nginx / Apache):
```nginx
# Nginx 404 Fallback
error_page 404 /404.html;
```
