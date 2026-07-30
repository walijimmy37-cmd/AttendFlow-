# AttendFlow - Analytics Event Dictionary & Measurement Spec

This document specifies the complete telemetry schema, event instrumentation rules, and key performance indicator (KPI) dashboard structures for AttendFlow.

---

## 📊 Analytics Event Dictionary

All telemetry events are formatted as standardized JSON objects dispatched via `navigator.sendBeacon` or `fetch('/api/track')`.

| Event Name | Trigger Condition | Custom Properties | Primary Purpose |
| :--- | :--- | :--- | :--- |
| `page_view` | Initial DOM load | `title`, `referrer` | Track overall traffic & traffic source attribution |
| `hero_cta_click` | Clicking "Start 14-Day Free Trial" or "Book Demo" buttons | `cta_type`, `location` | Measure top-of-funnel conversion intent |
| `lead_form_submit` | Submitting the demo request modal | `name`, `email`, `company`, `team_size`, `use_case` | Lead capture & qualification |
| `lead_survey_submit` | Completing post-submission 1-question survey | `pain_point`, `comment` | Qualitative customer pain-point insight |
| `report_tab_change` | Clicking product preview report tabs | `tab_id` (`viewOverview`, `viewAttendance`, `viewExceptions`, `viewExports`) | Feature engagement tracking |
| `report_export_click` | Clicking sample report export buttons | `format` (`csv`, `xml`, `audit`) | Feature value validation |
| `pricing_toggle_change` | Switching between Monthly and Annual pricing | `billing` (`monthly`, `annual`) | Buyer pricing sensitivity check |
| `faq_open` | Expanding an FAQ accordion item | `question_id`, `question` | Pre-purchase friction identification |
| `dashboard_filter_change` | Changing department dropdown in preview | `department` | Industry interest tracking |
| `page_feedback` | Submitting "Was this page helpful?" widget | `rating` (`helpful`, `not_helpful`) | Page utility assessment |
| `share_click` | Clicking "Share Demo" button | `method` (`native`, `clipboard`, `prompt`) | Viral referral loop metric |
| `experiment_exposure` | URL query parameter experiment active | `experiment`, `variant` | A/B test attribution |

---

## 📈 Top-Level KPI Metrics Dashboard Spec

Track these 4 core metrics weekly in your analytics tool (PostHog, Mixpanel, Google Analytics 4, or Google Sheets):

```text
+---------------------------------------------------------------------------------+
|                              ATTENDFLOW KPI DASHBOARD                           |
+------------------------------------+--------------------------------------------+
| Metric                             | Benchmark Target                           |
+------------------------------------+--------------------------------------------+
| 1. Visitor-to-Lead Rate            | ≥ 5.5% (Hero CTA + Modal submit)          |
| 2. Interactive Preview Engagement | ≥ 42% (Clicked report tabs or filters)     |
| 3. Survey Completion Rate          | ≥ 35% of submitted leads                   |
| 4. Annual Pricing Interest         | ≥ 60% of pricing section views             |
+------------------------------------+--------------------------------------------+
```

---

## 🔍 Weekly Review Ritual Questions

Every Monday, review analytics data using these three questions:

1. **Where is funnel friction occurring?**
   - Compare `hero_cta_click` vs `lead_form_submit`. If CTA click is high but modal submission is low, shorten modal inputs.
2. **Which use-case resonates most with real visitors?**
   - Check `dashboard_filter_change` and `lead_form_submit` (`use_case`). Align marketing copy with the winning segment.
3. **What is the top reported pain point?**
   - Review `lead_survey_submit` (`pain_point`). Use the most frequent choice as the primary hero headline in the next A/B test.
