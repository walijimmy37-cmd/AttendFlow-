# AttendFlow - Decision & Prioritization Frameworks

This document defines the RICE/ICE scoring models used to prioritize growth experiments, product feature engineering, and marketing channels.

---

## 🎲 1. Experiment Prioritization (ICE Model)

For marketing and UX experiments (from `EXPERIMENTS.md`), calculate the ICE score:

$$\text{ICE Score} = \text{Impact (1-5)} \times \text{Confidence (1-5)} \times \text{Ease (1-5)}$$

```text
+------------------------------------+--------+------------+------+-----------+
| Experiment Candidate               | Impact | Confidence | Ease | ICE Score |
+------------------------------------+--------+------------+------+-----------+
| 1. "Cut Admin 70%" Hero Headline   | 5      | 4          | 5    | 100       |
| 2. Add Gusto/Rippling Logo Badges  | 4      | 5          | 5    | 100       |
| 3. Post-Lead Survey Pain Question  | 3      | 4          | 4    | 48        |
| 4. Video Demo Background Modal     | 4      | 2          | 2    | 16        |
+------------------------------------+--------+------------+------+-----------+
```
*Rule: Execute top-scoring items (Score ≥ 80) first during weekly sprints.*

---

## 🛠️ 2. Product Feature Prioritization Matrix

When deciding whether to build a new feature or integration:

```text
+---------------------------------------------------------------------------------+
|                         FEATURE EVALUATION QUADRANT                            |
+------------------------------------+--------------------------------------------+
| High Impact / Low Effort (DO FIRST)| High Impact / High Effort (PLAN SPRINT)    |
| - Biometric Kiosk Mode (Tablet)    | - Native Slack/Teams Chatbot Punch-in      |
| - Custom Department Filters        | - Predictive AI Staffing Analytics         |
+------------------------------------+--------------------------------------------+
| Low Impact / Low Effort (DEFER)    | Low Impact / High Effort (KILL / AVOID)    |
| - Dark Mode Color Customizer       | - Custom In-App Audio Synthesizer          |
+------------------------------------+--------------------------------------------+
```

---

## 🌐 3. Channel Evaluation Matrix

Evaluate acquisition channels every 30 days using these 3 criteria:

1. **Scalability**: Can this channel bring >100 qualified leads per month?
2. **CAC Efficiency**: Is CAC payback under 6 months?
3. **Strategic Alignment**: Does this channel reach our core ICP decision-makers?
