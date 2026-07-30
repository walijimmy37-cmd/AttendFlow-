# AttendFlow - Governance, Decision Log & Contributor Onboarding

This document establishes document governance rules, a central decision log, and an onboarding guide for new team members and contractors.

---

## 📜 1. Document Governance & Single Source of Truth

To prevent documentation fragmentation, adhere to these 3 governance rules:

1. **Single Source of Truth**: Every operational topic has exactly ONE designated file.
2. **Version Headers**: Major strategic documents must maintain a "Last Updated" timestamp header.
3. **No Duplicate Specifications**: Never duplicate technical or GTM specs across files. Reference by path instead.

### Master Document Directory
- **Positioning & Narrative**: `POSITIONING.md` & `STORY.md`
- **Content & Sales Collateral**: `CONTENT.md` & `SALES_ENABLEMENT.md`
- **Go-to-Market & Funnel**: `GTM.md`, `FUNNEL.md`, `INBOUND.md`, `OUTBOUND.md`
- **Revenue & Partnerships**: `REVENUE.md` & `PARTNERSHIPS.md`
- **Operations & Systems**: `OPERATING_RHYTHM.md`, `DASHBOARDS.md`, `RISKS.md`, `FOUNDER_PLAYBOOK.md`

---

## 📋 2. Central Decision Log

Record all major strategic, pricing, and product decisions here:

```text
+--------------+-----------------------+-----------------------+-----------------------+
| Date         | Decision Context      | Decision Made         | Review Date           |
+--------------+-----------------------+-----------------------+-----------------------+
| 2026-07-30   | Initial Launch Pricing| Established $19, $49, | 2026-10-30 (Q4 Rev)   |
|              | tier structure        | and $99/mo plans      |                       |
+--------------+-----------------------+-----------------------+-----------------------+
| 2026-07-30   | Integration Priority  | Selected Gusto/Rippling| 2026-09-15           |
|              | CSV export focus      | as primary v1 format  |                       |
+--------------+-----------------------+-----------------------+-----------------------+
```

---

## 👋 3. Team & Contractor Quick-Start Onboarding Guide

Welcome to the AttendFlow team! Follow this 3-step setup guide to get up to speed:

1. **Read the Vision & Positioning**: Start by reviewing `POSITIONING.md` and `STORY.md` to understand our target ICPs and core narrative.
2. **Review Your Functional Playbook**:
   - Marketing / Copywriters: Read `CONTENT.md` and `INBOUND.md`.
   - Sales / Outbound SDRs: Read `OUTBOUND.md` and `SALES_ENABLEMENT.md`.
   - Operators / Engineers: Read `OPERATING_RHYTHM.md` and `OPS_STACK.md`.
3. **Access Demo Environment**: Test the live interactive dashboard at `https://attendflow.io/#preview` using query parameter `?view=sales`.
