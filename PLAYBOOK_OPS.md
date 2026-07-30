# AttendFlow - Role Playbook: Operations, Legal & Finance

This document is the operational guide for Operations Managers, Financial Leads, and Legal/Compliance Officers at AttendFlow.

---

## 💵 1. Monthly Financial Close Checklist

On the **last business day of every month**, execute the following 5-step close process:

- [ ] Reconcile Stripe payment processor deposits against active paid subscriptions.
- [ ] Audit Monthly Recurring Revenue (MRR), Gross Margin, and Net Burn against `REVENUE.md`.
- [ ] Process partner revenue share payouts (15%-25%) for Tier 1 & Tier 2 partners (`PARTNERSHIPS.md`).
- [ ] Update 24-Month Pro Forma model in `CAPITAL.md` with actual expenses.
- [ ] Verify cash runway balance satisfies the **18-Month Minimum Runway Guardrail**.

---

## 🔒 2. Quarterly Security & Compliance Audit Checklist

Every 90 days, conduct a security compliance review:

- [ ] Audit user access controls and revoke credentials for departed staff/contractors.
- [ ] Perform automated vulnerability scan on API server routes (`/api/*`).
- [ ] Review Data Processing Addendums (DPAs) for any new enterprise clients.
- [ ] Backup encrypted database snapshots and verify 30-day data retention compliance (`LEGAL_COMPLIANCE.md`).

---

## 📑 3. Vendor & Tooling Management

- **Core Tool Inventory**: See `OPS_STACK.md` for designated tools (HubSpot, Calendly, Analytics.js).
- **Vendor Approval Rule**: Any software subscription exceeding **$100/month** requires written Founder approval.
