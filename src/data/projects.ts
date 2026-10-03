export type Project = {
  slug: string
  title: string
  type: string
  status: string
  summary: string
  problem: string
  solution: string
  stack: string[]
  automations: string[]
  workflow: string[]
  screenshots: { title: string; description: string }[]
  loomUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'camera-rental-automation',
    title: 'Camera Rental Booking & Automation System',
    type: 'Real Business / In Progress',
    status: 'Featured',
    summary:
      'A customer journey for a camera rental business covering inquiry, booking, availability, payment validation, reminders, pickup coordination, and post-rental follow-up.',
    problem:
      'Rental inquiries can become repetitive and difficult to track when availability, payment confirmation, reminders, and pickup details are handled manually across multiple channels.',
    solution:
      'I designed a centralized GoHighLevel workflow that captures rental inquiries, organizes customers inside a pipeline, sends booking instructions, handles reminders, and keeps the rental process structured from inquiry to completion.',
    stack: ['GoHighLevel', 'Forms', 'Calendars', 'Pipelines', 'Workflows', 'Email/SMS', 'Canva'],
    automations: [
      'Inquiry capture and source tagging',
      'Rental qualification form',
      'Booking confirmation sequence',
      'Payment validation follow-up',
      'Pickup and return reminders',
      'Completed rental follow-up',
    ],
    workflow: ['Inquiry', 'Qualification', 'Booking', 'Payment', 'Pickup', 'Return', 'Follow-up'],
    screenshots: [
      { title: 'Rental Funnel', description: 'Add your landing page or booking funnel screenshot here.' },
      { title: 'Booking Form', description: 'Show the actual fields, rental rules, and booking details.' },
      { title: 'Pipeline', description: 'Show how inquiries move from new lead to completed rental.' },
      { title: 'Workflow', description: 'Show the backend automation that handles confirmations and reminders.' },
    ],
  },
  {
    slug: 'med-spa-lead-system',
    title: 'Med Spa Lead-to-Client Automation',
    type: 'Advanced Demo Project',
    status: 'Flagship',
    summary:
      'An end-to-end CRM and appointment automation system designed to turn paid traffic into qualified consultations and paying clients.',
    problem:
      'Med spas often lose leads because of slow follow-up, inconsistent appointment reminders, no-show leakage, and disconnected sales tracking.',
    solution:
      'I built a modular GoHighLevel system with qualification logic, opportunity management, booking automation, no-show recovery, sales follow-up, onboarding, review requests, and reactivation campaigns.',
    stack: ['GoHighLevel', 'Funnels', 'Surveys', 'Calendars', 'Pipelines', 'Workflows', 'Payments'],
    automations: [
      'Lead scoring and qualification',
      'Appointment booking and reminders',
      'No-show and cancellation recovery',
      'Treatment offer and payment follow-up',
      'Client onboarding',
      'Review and referral automation',
      '90-day reactivation campaign',
    ],
    workflow: ['Traffic', 'Lead Capture', 'Qualification', 'Booking', 'Consultation', 'Payment', 'Client', 'Review'],
    screenshots: [
      { title: 'Lead Funnel', description: 'Show the main offer and CTA.' },
      { title: 'Qualification Logic', description: 'Show conditional branches and lead scoring.' },
      { title: 'CRM Pipeline', description: 'Show appointment, proposal, payment, and outcome stages.' },
      { title: 'No-Show Recovery', description: 'Show the recovery workflow and booking exit condition.' },
      { title: 'Onboarding', description: 'Show what happens after payment is received.' },
      { title: 'Review Automation', description: 'Show the post-service review and referral workflow.' },
    ],
  },
  {
    slug: 'csquared-crm',
    title: 'CSquared CRM & Sales Automation',
    type: 'CRM Build',
    status: 'Completed Build',
    summary:
      'A full CRM setup built from scratch with contacts, calendar, forms, web funnel, pipeline structure, and automated follow-up workflows.',
    problem:
      'The sales process needed a centralized system for lead capture, scheduling, follow-up, and opportunity tracking.',
    solution:
      'I created the CRM structure from the ground up, connected the lead capture process to the pipeline, and automated repetitive follow-up actions to reduce manual work and missed leads.',
    stack: ['GoHighLevel', 'CRM', 'Calendar', 'Forms', 'Funnels', 'Workflow Automation'],
    automations: [
      'Contact creation and organization',
      'Form-to-pipeline routing',
      'Appointment scheduling',
      'Automated follow-up sequences',
      'Opportunity stage movement',
    ],
    workflow: ['Lead Capture', 'Contacted', 'Booked Call', 'Proposal', 'Follow-up', 'Closed Won / Lost'],
    screenshots: [
      { title: 'CRM Dashboard', description: 'Show the completed account structure.' },
      { title: 'Pipeline', description: 'Show the stages and opportunity organization.' },
      { title: 'Workflow', description: 'Show the automation that handles repetitive follow-up.' },
      { title: 'Funnel', description: 'Show the web funnel or form entry point.' },
    ],
  },
  {
    slug: 'agency-sales-pipeline',
    title: 'B2B Agency Sales Pipeline',
    type: 'Demo Project',
    status: 'System Design',
    summary:
      'A sales automation system for agencies that manages lead capture, discovery calls, proposals, follow-ups, and closed-won or closed-lost outcomes.',
    problem:
      'Agency leads can fall through the cracks when outreach, discovery calls, proposal follow-ups, and pipeline updates are handled manually.',
    solution:
      'The system connects pipeline stages to dedicated workflows so each prospect receives the right communication based on their current sales stage and behavior.',
    stack: ['GoHighLevel', 'Pipelines', 'Calendar', 'Email', 'Workflows', 'Opportunity Automation'],
    automations: [
      'New lead intake',
      'Contacted stage follow-up',
      'Booked-call automation',
      'Proposal follow-up',
      'Closed-lost timeout logic',
    ],
    workflow: ['New Lead', 'Contacted', 'Booked Call', 'Proposal Sent', 'Closed Won', 'Closed Lost'],
    screenshots: [
      { title: 'Pipeline', description: 'Show the sales stages.' },
      { title: 'Contacted Workflow', description: 'Show the 3-day and 7-day follow-up logic.' },
      { title: 'Booked Call Workflow', description: 'Show appointment-triggered stage movement.' },
      { title: 'Proposal Workflow', description: 'Show follow-up and closed-lost automation.' },
    ],
  },
]
