# AttendFlow - Post-Launch Experimentation Roadmap

This document outlines the Phase 1 A/B testing strategy for AttendFlow over the first 4–6 weeks post-launch, leveraging the built-in `getExperimentVariant()` framework.

---

## 🧪 Phase 1 Experiment Specs (Weeks 1–6)

### Experiment 1: Hero Positioning & Headline
- **URL Trigger**: `?hero=v1` vs `?hero=v2`
- **Control (v1)**: *"Modern Workforce Operations & Attendance Platform"*
- **Variant (v2)**: *"Cut Attendance Admin by 70% With 1-Click Roster Automation"*
- **Hypothesis**: Focusing on quantifiable pain relief ("Cut Admin by 70%") will resonate more strongly with operational decision makers than generic platform descriptions.
- **Primary Metric**: `hero_cta_click` conversion rate (Target: +18% lift).
- **Minimum Sample**: 500 unique visitors per variant.

### Experiment 2: Primary CTA Button Copy
- **URL Trigger**: `?cta=v1` vs `?cta=v2`
- **Control (v1)**: *"Start 14-Day Free Trial"*
- **Variant (v2)**: *"Explore Live Demo Workspace →"*
- **Hypothesis**: Offering immediate "Explore Demo Workspace" reduces perceived sign-up commitment and friction compared to "Free Trial".
- **Primary Metric**: Modal trigger click-through rate (`hero_cta_click`).
- **Minimum Sample**: 400 unique visitors per variant.

### Experiment 3: Pricing Table Highlight Strategy
- **URL Trigger**: `?pricing=v1` vs `?pricing=v2`
- **Control (v1)**: Growth Plan highlighted with blue border.
- **Variant (v2)**: Growth Plan highlighted + "Most Popular for Teams 15–50" badge.
- **Hypothesis**: Adding explicit team-size guidance reinforces social proof and speeds decision-making for growing teams.
- **Primary Metric**: `lead_form_submit` with selected Growth tier.
- **Minimum Sample**: 300 pricing section impressions.

---

## 📝 A/B Experiment Log Template

Copy this template into your team wiki or tracker when starting a new test:

```markdown
### Experiment: [Experiment Name]
- **Status**: [Draft / Active / Concluded]
- **Start Date**: YYYY-MM-DD | **End Date**: YYYY-MM-DD
- **Target Audience**: All traffic / Mobile only / Direct traffic
- **Hypothesis**: If we [change X], then [metric Y] will increase by [Z%] because [reason].

| Variant | Visitors | Conversions | Conversion Rate | Stat Significance |
| :--- | :--- | :--- | :--- | :--- |
| **Control (v1)** | 0 | 0 | 0.0% | Baseline |
| **Variant (v2)** | 0 | 0 | 0.0% | p-value: -- |

- **Decision**: [Adopt Variant / Retain Control / Further Test]
- **Key Learning**: [Insert key qualitative or quantitative takeaway]
```
