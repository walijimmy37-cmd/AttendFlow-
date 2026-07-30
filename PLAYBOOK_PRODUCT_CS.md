# AttendFlow - Role Playbook: Product Engineering & Customer Success

This document specifies the execution guidelines for Product Engineers, UI/UX Designers, and Customer Success Leads at AttendFlow.

---

## 🛠️ 1. Product Engineering & Feature Prioritization

Engineers follow the **ICE Prioritization Model** (`DECISION_FRAMEWORKS.md`) to rank sprint backlog items:

```text
+---------------------------------------------------------------------------------+
|                       SPRINT BACKLOG EVALUATION QUADRANT                        |
+------------------------------------+--------------------------------------------+
| Must-Have (High ICE Score)         | Strategic Growth Bets (Plan Sprint)        |
| - 1-Click Gusto & Rippling Exports | - Native Slack / MS Teams Punch-in Bot     |
| - IP Whitelist & Geofence Checks   | - Biometric Tablet Kiosk Mode              |
+------------------------------------+--------------------------------------------+
| Low Priority (Defer)               | Out of Scope (Do Not Build)                |
| - Custom UI Dark Mode Themes       | - Complex Unsolicited Audio Synthesizer    |
+------------------------------------+--------------------------------------------+
```

---

## 💙 2. Customer Success & Onboarding Workflow

### The 4-Step Customer Onboarding Loop
1. **Welcome & Workspace Provisioning (Day 1)**: Send automated welcome email with workspace credentials and pre-loaded sample roster data.
2. **Setup Assistance Call (Day 2)**: Help customer admin configure department structures, IP whitelists, and grace period rules.
3. **First Payroll Run Verification (Day 14)**: Assist customer HR team in generating and verifying their first audit-ready CSV export.
4. **Account Health Review (Day 30)**: Review active user clock-in frequency; if activation < 70%, trigger proactive support consultation.

---

## 🚨 3. Support Ticket Escalation & SLA Protocols

- **Tier 1 (Account Access & Basic Usage)**: Resolved by Customer Success within **< 2 Hours**.
- **Tier 2 (CSV Export Data Mismatch / API Bug)**: Escalated to Product Engineering; patch released within **< 12 Hours**.
- **Tier 3 (Service Outage / Security Incident)**: Follow 4-step Incident Response Protocol in `LEGAL_COMPLIANCE.md`; contain within **< 15 Mins**.
