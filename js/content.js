/**
 * AttendFlow - Structured Content Store
 * CMS-Ready data structures for FAQs, Use Cases, Features, and Testimonials.
 * Non-developers can easily add or edit content items here.
 */

export const USE_CASES_DATA = [
  {
    id: 'hybrid-tech',
    title: 'Hybrid Software & Tech Teams',
    subtitle: 'Flexible hours, async check-ins, and Slack standups',
    deptTag: 'engineering',
    deptLabel: 'Engineering',
    badge: 'Remote & Hybrid',
    icon: '💻',
    bullets: [
      'Automated web clock-in synced with IP whitelist boundaries',
      'Async daily standup attendance logging with core hours tracking',
      'Flexible PTO balances integrated with Jira sprint releases',
      'Instant supervisor notifications for missing daily check-ins'
    ],
    ctaText: 'Explore Engineering Roster →'
  },
  {
    id: 'call-center',
    title: 'Call Centers & BPO Operations',
    subtitle: 'Multi-shift rotations, break timers, and strict SLAs',
    deptTag: 'support',
    deptLabel: 'Customer Support',
    badge: 'Shift Heavy',
    icon: '🎧',
    bullets: [
      'Rotational morning, evening, and graveyard shift scheduling',
      'Real-time floor presence map showing active vs break agents',
      'Automated tardiness alerts sent via SMS/Email to supervisors',
      'Overtime compliance tracking with automated grace periods'
    ],
    ctaText: 'Inspect Operations Roster →'
  },
  {
    id: 'agencies',
    title: 'Agencies & Professional Services',
    subtitle: 'Client billable hours, project rosters, and monthly exports',
    deptTag: 'sales',
    deptLabel: 'Sales & Growth',
    badge: 'Client Billable',
    icon: '🚀',
    bullets: [
      'Client project tagging on employee check-in logs',
      'Automated PTO accruals and leave approval workflows',
      'One-click payroll CSV export compatible with Rippling & Gusto',
      'Utilization rate heatmaps for agency project managers'
    ],
    ctaText: 'View Growth Dashboard →'
  },
  {
    id: 'multi-site',
    title: 'Multi-Location Retail & Healthcare',
    subtitle: 'Geofenced mobile punch-in and kiosk tablet support',
    deptTag: 'operations',
    deptLabel: 'Operations',
    badge: 'Field & Multi-site',
    icon: '🏥',
    bullets: [
      'Geofenced mobile app punch-in for field staff & site workers',
      'Peer-to-peer shift swap approval flows for emergency coverage',
      'Regulatory break and overtime audit logs for HR compliance',
      'Tablet kiosk mode for physical front-desk biometric verification'
    ],
    ctaText: 'View Multi-site Roster →'
  }
];

export const FAQS_DATA = [
  {
    id: 'faq-1',
    question: 'What types of businesses is AttendFlow best for?',
    answer: 'AttendFlow is custom-tailored for growing startups, SMEs, software agencies, BPO call centers, healthcare facilities, and professional service companies with 5 to 5,000+ employees.'
  },
  {
    id: 'faq-2',
    question: 'How does attendance tracking work for remote workers?',
    answer: 'Remote employees can check in with 1-click from any web browser or mobile phone. You can optionally enable IP whitelist boundaries, GPS geofencing, or browser verification to ensure accurate location logging.'
  },
  {
    id: 'faq-3',
    question: 'Can I import existing employee data from Excel or CSV?',
    answer: 'Yes! Our built-in CSV Importer allows you to upload existing staff directories, past leave balances, and departmental assignments in under 2 minutes.'
  },
  {
    id: 'faq-4',
    question: 'Is there a free trial available?',
    answer: 'We offer a 14-day fully featured free trial with no credit card required. You can test all Growth tier features with your team immediately.'
  },
  {
    id: 'faq-5',
    question: 'How does role-based access control work?',
    answer: 'You can assign granular roles: Super Admin (full company access), HR Manager (leave approvals and roster edits), Department Lead (view team logs), and Employee (personal check-in and PTO requests).'
  },
  {
    id: 'faq-6',
    question: 'What kind of support do you offer?',
    answer: 'All plans include email and documentation access. Growth and Enterprise plans receive 24/7 priority live chat support and dedicated onboarding assistance.'
  }
];
