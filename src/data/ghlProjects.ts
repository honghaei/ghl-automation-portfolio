export type GHLProject = {
  slug: string
  title: string
  badge: string
  status: string
  description: string
  tools: string[]
  problem: string
  solution: string
  workflow: string[]
  screenshots: {
    title: string
    description: string
  }[]
  image?: string
  loomUrl?: string
}

export const ghlProjects: GHLProject[] = [
  {
    slug: 'velora-aesthetics-crm-automation',
    title: 'Velora Aesthetics | CRM & Consultation Automation',
    badge: 'Verified Portfolio Demo',
    status: 'Featured Case Study',
    image: '/projects/velora/screenshots/01-funnel-pages/velora-landing-hero-editor.png',
    description:
      'A three-page consultation funnel connected to a GoHighLevel CRM and six automation workflows. The inquiry-to-booking journey was verified through real execution logs and delivered emails.',
    tools: ['GoHighLevel', 'CRM', 'Funnels', 'Automation', 'Calendars'],
    problem:
      'Consultation inquiries, lead qualification, calendar bookings, and follow-ups are harder to coordinate when records and steps are disconnected.',
    solution:
      'I connected a branded funnel to a structured pipeline, native qualification rules, a consultation calendar, and lifecycle workflows, then verified the core journey with one controlled test contact.',
    workflow: [
      'Inquiry Submitted',
      'Contact & Opportunity Created',
      'Qualified for Consultation',
      'Invitation Delivered',
      'Appointment Booked',
      'Confirmation Delivered',
    ],
    screenshots: [
      {title: 'Landing Page', description: 'Real branded inquiry landing page.'},
      {title: 'CRM Qualification', description: 'Qualification logic, stage movement, and eligibility guard.'},
      {title: 'Booking Confirmation', description: 'Verified appointment, redirect, and email delivery.'},
    ],
  },
  {
    slug: 'camera-rental-booking-automation',
    title: 'Camera Rental Booking & Automation System',
    badge: 'Real Business / In Progress',
    status: 'Featured',
    description:
      'A customer journey for a camera rental business covering inquiry, booking, availability, payment validation, reminders, pickup coordination, and post-rental follow-up.',
    tools: ['GoHighLevel', 'Forms', 'Calendars', 'Pipelines'],
    problem:
      'Rental inquiries, booking details, availability, payment confirmation, and customer follow-up can become difficult to manage manually as bookings increase.',
    solution:
      'The system is designed to centralize the rental journey inside GoHighLevel, from lead capture and booking to payment validation, reminders, pickup coordination, and post-rental follow-up.',
    workflow: [
      'Inquiry / Lead Capture',
      'Booking Form',
      'Availability Check',
      'Payment Validation',
      'Booking Confirmation',
      'Pickup Reminder',
      'Post-Rental Follow-Up',
    ],
    screenshots: [
      {
        title: 'Rental Funnel',
        description:
          'Show the customer-facing booking or inquiry flow.',
      },
      {
        title: 'Booking Form',
        description:
          'Show the form used to collect renter details and booking information.',
      },
      {
        title: 'Rental Pipeline',
        description:
          'Show how rental leads and bookings move through the CRM.',
      },
      {
        title: 'Automation Workflow',
        description:
          'Show confirmation, reminder, and follow-up automation logic.',
      },
    ],
  },

  {
    slug: 'csquared-crm-sales-automation',
    title: 'CSquared CRM & Sales Automation',
    badge: 'CRM Build',
    status: 'Completed Build',
    description:
      'A complete CRM setup with contacts, calendar, forms, web funnel, pipeline structure, and automated follow-up workflows.',
    tools: ['GoHighLevel', 'CRM', 'Workflows', 'Pipelines'],
    problem:
      'A business needs one organized system for capturing contacts, tracking opportunities, managing appointments, and reducing repetitive follow-up work.',
    solution:
      'I built the CRM structure from scratch, including contacts, forms, calendars, funnel pages, pipeline stages, and automated workflows to keep leads organized and moving.',
    workflow: [
      'Contact Capture',
      'Opportunity Creation',
      'Pipeline Management',
      'Calendar Booking',
      'Automated Follow-Up',
      'Manual Sales Handling',
      'Closed Won / Closed Lost',
    ],
    screenshots: [
      {
        title: 'CRM Pipeline',
        description:
          'Show the opportunity stages and how leads move through the sales process.',
      },
      {
        title: 'Forms & Calendar',
        description:
          'Show the lead capture and appointment-booking assets.',
      },
      {
        title: 'Funnel',
        description:
          'Show the customer-facing funnel used in the CRM journey.',
      },
      {
        title: 'Follow-Up Workflow',
        description:
          'Show the automation used to reduce manual follow-up work.',
      },
    ],
  },

  {
    slug: 'b2b-agency-sales-pipeline',
    title: 'B2B Agency Sales Pipeline',
    badge: 'Demo Project',
    status: 'System Design',
    description:
      'A sales automation system for lead capture, discovery calls, proposals, follow-ups, and closed-won or closed-lost outcomes.',
    tools: ['GoHighLevel', 'Pipelines', 'Email', 'Automation'],
    problem:
      'Agency leads can stall between initial contact, discovery calls, proposals, and follow-ups when there is no structured sales process.',
    solution:
      'The system creates a clear sales journey with pipeline movement, automated follow-ups, booking logic, proposal stages, and closed-won or closed-lost outcomes.',
    workflow: [
      'New Lead',
      'Initial Contact',
      'Discovery Call',
      'Proposal Sent',
      'Follow-Up',
      'Closed Won',
      'Closed Lost',
    ],
    screenshots: [
      {
        title: 'Sales Pipeline',
        description:
          'Show the stages used to manage agency opportunities.',
      },
      {
        title: 'Contact Workflow',
        description:
          'Show the automation after initial outreach.',
      },
      {
        title: 'Booking Workflow',
        description:
          'Show the logic used when a lead books a discovery call.',
      },
      {
        title: 'Proposal Follow-Up',
        description:
          'Show the reminder and closing logic after a proposal is sent.',
      },
    ],
  },
]
