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
  loomUrl?: string
}

export const ghlProjects: GHLProject[] = [
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
    slug: 'med-spa-lead-to-client-automation',
    title: 'Med Spa Lead-to-Client Automation',
    badge: 'Advanced Demo Project',
    status: 'Flagship',
    description:
      'An end-to-end CRM and appointment automation system designed to move leads from qualification to booked consultations and follow-up.',
    tools: ['GoHighLevel', 'Funnels', 'Forms', 'Calendars'],
    problem:
      'Med spa leads can be lost when qualification, booking, reminders, no-show recovery, and post-consultation follow-up are handled manually.',
    solution:
      'The project connects lead capture, qualification, pipeline movement, booking, appointment reminders, consultation follow-up, and client conversion into one structured GoHighLevel system.',
    workflow: [
      'Lead Capture',
      'Qualification',
      'Pipeline Creation',
      'Consultation Booking',
      'Appointment Reminders',
      'Consultation Follow-Up',
      'Client Conversion',
    ],
    screenshots: [
      {
        title: 'Lead Capture Funnel',
        description:
          'Show the funnel and form used to capture and qualify leads.',
      },
      {
        title: 'Lead-to-Client Pipeline',
        description:
          'Show the CRM stages from new lead to converted client.',
      },
      {
        title: 'Booking Calendar',
        description:
          'Show the consultation calendar and booking experience.',
      },
      {
        title: 'Automation Workflow',
        description:
          'Show qualification, reminders, and follow-up logic.',
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
