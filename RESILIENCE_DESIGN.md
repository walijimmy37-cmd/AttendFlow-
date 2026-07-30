# AttendFlow - Resilience & Margin Design Framework

This document defines how AttendFlow embeds financial, operational, and cognitive safety margins into the company architecture to ensure long-term durability.

---

## 🛡️ 1. Financial Resilience & Variable Cost Structure

- **18-Month Runway Floor**: Maintain a strict minimum operating reserve of 18 months (`CAPITAL.md`).
- **Flexible Variable Cost Structure**: Utilize contractors and usage-based software tools for non-core functions prior to committing to fixed payroll overhead.
- **Experiment Stop-Loss Rule**: Cap all new marketing or channel experiments at a maximum spend of $1,500 unless CAC payback under 5 months is proven.

---

## ⚙️ 2. Operational Resilience & Bus Factor Redundancy

```text
+----------------------------------------------------------------------------------+
|                            OPERATIONAL REDUNDANCY MATRIX                         |
+-----------------------+-----------------------+----------------------------------+
| Functional Domain     | Primary Owner         | Designated Secondary Backup      |
+-----------------------+-----------------------+----------------------------------+
| Outbound & Sales      | Founder / CEO         | Dedicated SDR Lead               |
| Product Architecture  | Lead Engineer / CTO   | Senior Full-Stack Contractor     |
| Customer Support      | Customer Success Lead | Founder / Ops Manager            |
| Finance & Payroll     | Operations Lead       | CEO / External Accounting Firm   |
+-----------------------+-----------------------+----------------------------------+
```
*Rule: Conduct a bi-annual "Bus Factor Audit" where each primary owner hands off key responsibilities for 3 days to test operational documentation clarity.*

---

## 🧠 3. Cognitive Resilience & Focus Protection

- **Rule of 3 Concurrent Bets**: The company strictly limits active strategic bets to a maximum of 3 at any given time. No new major initiative is launched until a current bet is completed, killed, or integrated into routine operations.
- **"No New Big Thing" Policy**: Once quarterly OKRs are set in `PLANNING_CALENDAR.md`, mid-quarter strategic pivots are prohibited unless a Red Alert Trigger from `TRIGGERS.md` is activated.
- **Quarterly Reflection Blocks**: Leadership schedules a 1-day offsite at the end of every quarter dedicated entirely to strategic reflection, scenario review, and cognitive reset.
