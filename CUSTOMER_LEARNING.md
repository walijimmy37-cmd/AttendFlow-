# AttendFlow - Customer Feedback & Learning System

This document details feedback collection points, feedback categorization tags, synthesis routines, and closed-loop product iteration workflows.

---

## 👂 1. Feedback Collection Touchpoints

```text
[ On-Page Feedback Widget ] ----> (Helpful / Not Helpful + Comment)
[ Post-Lead Modal Survey  ] ----> (Biggest Pain Point Selection)
[ Demo / Trial Exit Form  ] ----> (Reason for Not Upgrading)
[ Support Inquiries       ] ----> (Feature Requests & Friction Points)
```

---

## 🏷️ 2. Feedback Categorization Tag Schema

Log all qualitative feedback into your central CRM or spreadsheet tagged with one of these 6 standardized categories:

- `#PRICING`: Concerns regarding tier structure, user add-on costs, or annual discount.
- `#INTEGRATION`: Requests for specific HRIS/Payroll connectors (e.g. Gusto, Slack, Workday).
- `#USABILITY`: UX friction, navigation confusion, or mobile layout suggestions.
- `#SECURITY`: Questions about SOC2, IP whitelisting, geofencing, or data residency.
- `#FEATURE`: Requests for new capabilities (e.g. shift swap marketplace, kiosk mode).
- `#ONBOARDING`: Questions regarding setup speed, CSV header formatting, or staff invite links.

---

## 📊 3. Feedback Processing & Weekly Synthesis Template

During the Friday Retrospective, aggregate feedback into this summary table:

```text
+---------------------+-----------------------+-------------------+-------------------+
| Top Category Tag    | Total Mentions / Wk   | Representative Quote| Action Taken      |
+---------------------+-----------------------+-------------------+-------------------+
| #INTEGRATION        | 14 Mentions           | "Do you export directly| Added Rippling & |
|                     |                       | to Rippling CSV?" | Gusto logo badges |
+---------------------+-----------------------+-------------------+-------------------+
| #SECURITY           | 8 Mentions            | "Can we lock punches| Highlighted IP    |
|                     |                       | to office Wi-Fi?" | Whitelist feature |
+---------------------+-----------------------+-------------------+-------------------+
```
