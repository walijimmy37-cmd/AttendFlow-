# AttendFlow - Metrics & KPIs Single Source of Truth Index

This document defines every official business, growth, financial, and product metric used across AttendFlow, including mathematical formulas, owners, and review cadences.

---

## 📈 1. Financial & Revenue Metrics

| Metric Name | Mathematical Formula / Exact Definition | Metric Owner | Review Cadence | Primary Location |
| :--- | :--- | :--- | :--- | :--- |
| **Monthly Recurring Revenue (MRR)** | $\sum (\text{Active Monthly Subscriptions}) + \text{Seat Add-ons}$ | CEO / Finance | Weekly / Monthly | `REVENUE.md`, `DASHBOARDS.md` |
| **Annual Run Rate (ARR)** | $\text{MRR} \times 12$ | CEO / Finance | Monthly | `REVENUE.md` |
| **Average Revenue Per Account (ARPA)** | $\frac{\text{Total MRR}}{\text{Total Active Paid Accounts}}$ | RevOps | Monthly | `REVENUE.md`, `FUNNEL.md` |
| **Net Revenue Retention (NRR)** | $\frac{\text{Starting MRR} + \text{Expansion} - \text{Churn} - \text{Contraction}}{\text{Starting MRR}} \times 100$ | Customer Success | Monthly | `REVENUE.md`, `CAPITAL.md` |
| **Gross Logo Churn Rate** | $\frac{\text{Accounts Cancelled in Month}}{\text{Total Accounts at Start of Month}} \times 100$ | Customer Success | Weekly / Monthly | `REVENUE.md`, `RISKS.md` |

---

## 🚀 2. Growth & Marketing Metrics

| Metric Name | Mathematical Formula / Exact Definition | Metric Owner | Review Cadence | Primary Location |
| :--- | :--- | :--- | :--- | :--- |
| **Visitor-to-Lead Conversion Rate** | $\frac{\text{Form Submissions (Modal/Survey)}}{\text{Total Unique Visitors}} \times 100$ | Growth Marketing | Weekly | `FUNNEL.md`, `DASHBOARDS.md` |
| **Lead-to-Demo Rate** | $\frac{\text{Completed Demos / Trial Activations}}{\text{Total Qualified Leads}} \times 100$ | Sales Lead | Weekly | `FUNNEL.md` |
| **Demo-to-Paid Rate** | $\frac{\text{New Paid Accounts}}{\text{Completed Demos / Active Trials}} \times 100$ | Account Exec | Weekly | `FUNNEL.md` |
| **Customer Acquisition Cost (CAC)** | $\frac{\text{Total Sales \& Marketing Expenses}}{\text{New Paid Accounts Acquired}}$ | Growth Marketing | Monthly | `REVENUE.md`, `CAPITAL.md` |
| **CAC Payback Period** | $\frac{\text{CAC}}{\text{ARPA} \times \text{Gross Margin \%}}$ | CEO / RevOps | Monthly | `REVENUE.md` |

---

## ⚙️ 3. Product & Customer Success Metrics

| Metric Name | Mathematical Formula / Exact Definition | Metric Owner | Review Cadence | Primary Location |
| :--- | :--- | :--- | :--- | :--- |
| **Trial Activation Rate** | $\frac{\text{Trials testing 1-click check-in or CSV export}}{\text{Total Started Trials}} \times 100$ | Product Lead | Weekly | `DASHBOARDS.md` |
| **Export Execution Volume** | Total payroll CSV/XML files generated per account | Lead Engineer | Weekly | `DASHBOARDS.md` |
| **Support SLA Response Time** | Average time from ticket creation to first human response | Customer Success | Weekly | `PLAYBOOK_PRODUCT_CS.md` |
