# AttendFlow - Early Warning Trigger & Signal System

This document details the quantitative thresholds, qualitative signals, and scenario transition triggers for AttendFlow.

---

## 🚨 1. Early Warning Indicator Matrix

```text
+----------------------------------------------------------------------------------+
|                            QUANTITATIVE TRIGGER THRESHOLDS                       |
+-----------------------+-----------------------+-----------------------+----------+
| Metric Category       | Green (Normal)        | Yellow (Warning)      | Red (Trigger)|
+-----------------------+-----------------------+-----------------------+----------+
| MoM Revenue Growth    | ≥ 12.0% MoM           | 5.0% - 11.9% MoM      | < 5.0% MoM |
| Trial Activation Rate | ≥ 65.0%               | 50.0% - 64.9%         | < 50.0%  |
| Gross Logo Churn      | < 2.0% / month        | 2.0% - 3.4% / month   | ≥ 3.5% / mo|
| CAC Payback Period    | ≤ 4.5 Months          | 4.6 - 6.5 Months      | > 6.5 Months|
| Net Burn Multiple     | ≤ 1.2x                | 1.3x - 1.8x           | > 1.8x   |
+----------------------------------------------------------------------------------+
```

---

## 👂 2. Qualitative Signal Mapping

In addition to quantitative metrics, leadership monitors 4 qualitative signals during Friday retrospectives:

- **Signal 1: Messaging Decay**: Cold outbound email reply rates drop below 2.0% for 2 consecutive weeks -> Trigger messaging audit in `OUTBOUND.md`.
- **Signal 2: Integration Friction**: Over 30% of demo drop-offs cite missing integration with a specific tool -> Trigger product sprint adjustment in `DECISION_FRAMEWORKS.md`.
- **Signal 3: Offer Rejection**: Candidates decline job offers due to compensation or market uncertainty -> Review option pool and compensation mix in `TEAM_ORG.md`.
- **Signal 4: Inbound M&A/Investor Signals**: More than 3 tier-1 investors reach out within 30 days -> Trigger capital strategy review in `CAPITAL.md`.

---

## 🔄 3. Scenario Transition Matrix

```text
+----------------------------------------------------------------------------------+
|                            SCENARIO TRANSITION RULES                             |
+-------------------+-----------------------------------+--------------------------+
| Target Scenario   | Trigger Threshold Combination     | Activated Playbook       |
+-------------------+-----------------------------------+--------------------------+
| Transition to     | Inbound Demos > 50/wk AND         | Scenario B Playbook      |
| Scenario B        | CAC Payback < 3.5 Months          | (`SCENARIOS.md`)         |
+-------------------+-----------------------------------+--------------------------+
| Transition to     | Logo Churn ≥ 3.5% AND             | Scenario C Playbook      |
| Scenario C        | Revenue Growth < 5.0% MoM         | (`SCENARIOS.md`)         |
+-------------------+-----------------------------------+--------------------------+
| Transition to     | Competitor launches free copycat  | Scenario D Playbook      |
| Scenario D        | AND deal loss to competitor > 25% | (`SCENARIOS.md`)         |
+-------------------+-----------------------------------+--------------------------+
```
