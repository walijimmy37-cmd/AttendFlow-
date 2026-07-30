# AttendFlow - Operational Tech Stack & RevOps Workflows

This document specifies the internal tools, lead routing workflows, data hygiene guidelines, and customer support processes powering AttendFlow.

---

## 🛠️ 1. Modern RevOps Stack Architecture

```text
[ Web Leads & Demo Requests ] ---> [ Webhook / Analytics.js ]
                                            |
                                            v
                                 [ CRM / Lead Pipeline ]
                                 (HubSpot / Airtable)
                                            |
                   +------------------------+------------------------+
                   |                                                 |
                   v                                                 v
       [ Sales Follow-up ]                                [ Automated Email ]
       (Calendly / Gmail)                                 (Outreach / Customer.io)
```

| Function | Tool / Technology | Secondary Alternative | Primary Purpose |
| :--- | :--- | :--- | :--- |
| **CRM & Pipeline** | HubSpot Free / Airtable | Google Sheets | Track leads, deal stages & MRR |
| **Demo Scheduling** | Calendly / Cal.com | HubSpot Meetings | Automated sales calendar booking |
| **Telemetry & Web** | Analytics.js + Cloudflare | PostHog / GA4 | Capture event metrics & conversion data |
| **Support Inbox** | Help Scout / Shared Gmail | Crisp / Intercom | Single-view customer inquiry handling |

---

## 🔄 2. Automated Lead Routing Workflow

1. **Lead Submission**: User submits form on `attendflow.io` (e.g., Demo Modal, Survey, or Partner Form).
2. **Event Dispatch**: `trackEvent('lead_form_submit')` fires and sends JSON payload via `navigator.sendBeacon`.
3. **CRM Ingestion**: Automated webhook creates new Contact & Deal record in CRM with property `Lead_Source = Web_Interactive_Demo`.
4. **Instant Notification**: Internal Slack / Teams channel `#leads-attendflow` receives instant notification with company size and use case.
5. **SLA Response Goal**: Lead contacted via email/LinkedIn in **< 15 minutes**.

---

## 🧹 3. Data Hygiene & Maintenance Standards

- **Mandatory Lead Fields**: First Name, Email, Company Name, Team Size (1-15, 16-50, 51-200, 201+), Primary Use Case.
- **Weekly Lead Audit**: Every Friday, purge spam submissions and update deal stage probabilities.
- **Strict Deduplication**: Match incoming leads by domain suffix (e.g. `@company.com`) to prevent multi-contact duplication.
