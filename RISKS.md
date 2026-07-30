# AttendFlow - Risk Register & Contingency Playbook

This document details key operational risks, early warning indicator thresholds, and pre-planned contingency playbooks for AttendFlow.

---

## 🚨 1. Operational Risk Matrix

```text
+-----------------------+-----------------------+-----------------------+
| Category              | Identified Risk       | Severity / Likelihood |
+-----------------------+-----------------------+-----------------------+
| Market Risk           | Slower adoption in    | Medium / Medium       |
|                       | conservative sectors  |                       |
+-----------------------+-----------------------+-----------------------+
| GTM Risk              | Outbound response     | High / Low            |
|                       | rate drops < 1.0%     |                       |
+-----------------------+-----------------------+-----------------------+
| Product Risk          | High churn due to     | High / Low            |
|                       | missing Slack bot     |                       |
+-----------------------+-----------------------+-----------------------+
| Unit Economics Risk   | CAC payback exceeds   | Medium / Low          |
|                       | 6 months              |                       |
+-----------------------+-----------------------+-----------------------+
```

---

## ⚠️ 2. Early Warning Indicators & Thresholds

- **Warning 1: Trial-to-Paid Drops Below 15%** (Target ≥ 25%).
- **Warning 2: Outbound Reply Rate Drops Below 2.0%** (Target ≥ 4.0%).
- **Warning 3: Logo Churn Exceeds 3.0% / Month** (Target < 2.0%).
- **Warning 4: Customer Acquisition Cost Exceeds $400** (Target ≤ $280).

---

## 🛡️ 3. Pre-Planned Contingency Playbooks

### Contingency Play A: Outbound Conversion Underperforms
- **Trigger**: Outbound response rate remains < 2.0% for 2 consecutive weeks.
- **Action**: Switch outreach focus to ICP 1 (Agencies) with immediate offer of a pre-configured Gusto CSV template export test.

### Contingency Play B: Trial Activation Rate Drops Below 50%
- **Trigger**: Activated trials drop below 50% for 10 days.
- **Action**: Deploy automated 3-email onboarding sequence highlighting 3-second 1-click check-in and department filtering.

### Contingency Play C: Churn Spikes Due to Missing Integrations
- **Trigger**: > 30% of exit surveys cite missing HRIS integration.
- **Action**: Accelerate Q3 Slack/Teams webhook integration development into active sprint.
