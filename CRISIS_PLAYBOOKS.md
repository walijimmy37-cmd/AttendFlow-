# AttendFlow - Crisis Management & Emergency Response Playbooks

This document outlines the general crisis protocols, immediate 24-72 hour response steps, decision rights, and specific playbooks for tech, business, team, and macro crises.

---

## 🚨 1. General Crisis Protocol (First 24–72 Hours)

When a high-severity crisis emerges, leadership executes this 3-phase emergency protocol:

```text
+-----------------------+-----------------------+-----------------------+
| Phase 1: Stabilize    | Phase 2: Communicate  | Phase 3: Assess & Act |
| (Hours 0 - 6)         | (Hours 6 - 24)        | (Hours 24 - 72)       |
+-----------------------+-----------------------+-----------------------+
| - Stop the bleeding   | - Issue status update | - Root-cause audit    |
| - Isolate affected    |   to internal team &  | - Implement fix & patch|
|   systems/accounts    |   impacted clients    | - Publish post-mortem |
| - Convene Crisis Core | - Single spokesperson | - Update `RISKS.md`   |
+-----------------------+-----------------------+-----------------------+
```

---

## 🔒 2. Crisis Playbook 1: Security Incident / Data Breach

- **Trigger**: Unauthorized access to customer database or employee check-in log data.
- **Immediate Response**:
  1. Revoke compromised credentials and rotate database API keys within **< 15 minutes**.
  2. Enforce global password reset for affected tenant admin accounts.
  3. Send formal security notice to affected customer compliance officers within **< 24 hours** as required by DPA (`LEGAL_COMPLIANCE.md`).
  4. Perform third-party security pen-test audit and issue post-mortem summary within **< 48 hours**.

---

## 💵 3. Crisis Playbook 2: Sudden Revenue / Cash Shock

- **Trigger**: Single key enterprise account cancels (> 15% of MRR) OR unexpected cash collection delay.
- **Immediate Response**:
  1. Founder conducts emergency call with cancelling account to negotiate save offer or transition period.
  2. Immediately pause non-essential software subscriptions and contractor retainers (`OPS_STACK.md`).
  3. Launch targeted 20% annual prepay upgrade offer to top 30 active accounts to inject immediate cash flow.

---

## 🧘 4. Crisis Playbook 3: Founder Burnout / Key Person Departure

- **Trigger**: Core team member or founder faces sudden incapacity or departure.
- **Immediate Response**:
  1. Activate Bus Factor cross-training documentation from `PLAYBOOK_OPS.md` and `PLAYBOOK_PRODUCT_CS.md`.
  2. Re-assign critical daily responsibilities:
     - Inbound sales & demo leads -> Designated Sales Lead or SDR.
     - Production deployment & hotfixes -> Technical Co-Founder / Lead Dev.
  3. Engage pre-vetted contractor network to cover operational gaps within **48 hours**.
