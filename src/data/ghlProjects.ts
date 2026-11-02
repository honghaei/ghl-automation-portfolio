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
    image?: string
    label?: string
    group?: 'experience' | 'operations' | 'automation'
  }[]
  flowIntro?: string
  evidenceNote?: string
  verification?: {
    completed: string[]
    pending: string[]
  }
  heroImage?: string
  heroCaption?: string
  image?: string
  loomUrl?: string
}

export const ghlProjects: GHLProject[] = [
  {
    slug: 'flowdesk-support-ticketing-automation',
    title: 'FlowDesk | Support Ticketing & Automation',
    badge: 'Flagship GoHighLevel Project',
    status: 'Configured • Verified Core Flows',
    image: '/projects/flowdesk/flowdesk-cover.webp',
    heroImage: '/projects/flowdesk/flowdesk-cover.webp',
    heroCaption: 'Conceptual project cover based on FlowDesk architecture. The case study below includes genuine GoHighLevel evidence.',
    description:
      'A GoHighLevel-native support operations architecture combining structured ticket intake, eight lifecycle workflows, opportunity-based records, category routing, branded emails, and controlled reply handling.',
    tools: ['GoHighLevel', 'CRM', 'Workflows', 'Support Operations'],
    problem:
      'Support requests scattered across emails and manual notes lack a dependable operational record, consistent customer communication, and clear ticket ownership.',
    solution:
      'I designed a support pipeline and data model around native opportunity IDs; created a branded intake form, eight specialized workflows, five email templates, and guard-led lifecycle logic. Core intake, email delivery and reply detection were verified in GHL, while additional policy logic passed 715 offline tests.',
    workflow: [
      'Customer submits a structured support request',
      'Intake Router finds the eligible active ticket or creates a New/Open opportunity',
      'Native opportunity ID becomes the ticket reference',
      'Lifecycle workflows route by category, urgency and stage',
      'Additional information requests and email replies enter a controlled review path',
      'Successful and no-response closure policies are modeled distinctly',
      'Reopen window requires exact ticket and reply evidence before automatic operation',
    ],
    verification: {
      completed: [
        'Eight existing GoHighLevel workflows configured and documented',
        'Controlled intake, ticket creation, category routing, native ticket ID, and email delivery verified',
        'Workflow-specific email reply detection and internal-review notification verified',
        'Five branded email templates and a styled support intake form captured',
        '715 offline lifecycle and policy tests passed',
      ],
      pending: [
        'Unattended live 72/120/168-hour closure and reopen integration remains approval- and evidence-gated',
        'Exact reply-to-opportunity/cycle attribution and permanent duplicate-event guards require additional live integration',
      ],
    },
    evidenceNote:
      'Synthetic demonstration records and controlled email tests. Offline tests are separate from live production validation; workflow screenshots show configured Draft workflows, not a published unattended service.',
    screenshots: [
      { title: 'Branded FlowDesk intake', description: 'Illustrative intake design reference; not a claim of a live captured form.', image: '/projects/flowdesk/support-form-showcase.webp', label: 'Design concept', group: 'experience' },
      { title: 'GoHighLevel pipeline', description: 'Actual CRM opportunity board with support lifecycle stages.', image: '/projects/flowdesk/crm-pipeline-board.webp', label: 'GHL CRM', group: 'operations' },
      { title: 'Eight workflow overview', description: 'Saved workflow inventory in Draft state.', image: '/projects/flowdesk/crm-workflows-list.webp', label: 'GHL Automation', group: 'automation' },
    ],
  },
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
    title: 'CSQUARED | Camera Rental CRM & Intake Automation',
    badge: 'Camera Rental CRM & Automation',
    status: 'GHL CRM & Workflow Design',
    description:
      'I designed a camera-rental intake and operations system that organizes customer inquiries, centralizes CRM records, and helps rental teams reduce repetitive administrative work—from the initial request to a guarded internal review process.',
    tools: ['GoHighLevel', 'CRM', 'Guarded Workflows', 'Supabase'],
    image: '/projects/csquared/csquared-card-preview.webp',
    heroImage: '/projects/csquared/csquared-hero-showcase.webp',
    heroCaption: 'Custom project illustration based on the CSQUARED design; actual GHL screenshots are shown in the evidence gallery.',
    problem:
      'Rental inquiries contain equipment, dates, handover choices, and customer details that must be tracked reliably. Capturing a request should not accidentally confirm availability, payment, or a booking.',
    solution:
      'I built a branded rental-intake funnel and configured the GHL CRM, pipelines, custom fields, rental calendar, and 13 draft workflows. A controlled synthetic inquiry demonstrated the intake-to-opportunity path; Workflow 01 uses an exact guard to create an internal HOLD task. The separate PostgreSQL integration is designed to reject unverified source associations.',
    flowIntro:
      'The steps below describe the verified synthetic intake and HOLD path. They are not a live booking or payment journey.',
    workflow: [
      'Rental inquiry submitted (synthetic Meetup test)',
      'GHL contact and New Inquiry opportunity created',
      'Workflow 01 applies an exact synthetic-test guard',
      'Internal HOLD task references native opportunity ID',
      'Request remains unconfirmed — no booking or payment',
    ],
    verification: {
      completed: [
        'Eight configured GHL funnel steps and archived customer-facing page design previews',
        'Sales & Booking and Rental Operations pipelines, custom fields, and rental calendar',
        'Controlled synthetic form submission and matching CRM opportunity',
        'Workflow 01 guarded internal HOLD action evidenced by synthetic execution logs; 13 workflows retained in Draft',
        'Supabase schema migrations verified and an offline exact-record integration design prepared',
      ],
      pending: [
        'Authenticated end-to-end GHL-to-Supabase ingestion and database owner attestation',
        'Final form-rule equivalence and opportunity field-value verification',
        'Eleven later-stage workflow drafts still lack configured entry triggers; identity, payment, handover and inspection automation not validated',
        'Operational availability checks, bookings, payment processing, and inventory reservations',
      ],
    },
    evidenceNote:
      'Customer-facing images are offline design previews reconstructed from preserved GHL page sources. CRM, workflows, forms and execution logs are genuine GHL screenshots captured October 30, 2026; private test contact details were redacted. No live booking, payment, or hosted ingestion is claimed.',
    screenshots: [
      {
        title: 'Branded camera-rental landing',
        description: 'Offline reconstructed landing-page design, demonstrating the product offer and request-first call to action.',
        label: 'Offline design preview',
        group: 'experience',
        image: '/projects/csquared/preview-landing.webp',
      },
      {
        title: 'Rental planner & cost estimate',
        description: 'Handover date/time, duration and Meetup selection with an explanatory estimate. This is not live availability.',
        label: 'Offline design preview',
        group: 'experience',
        image: '/projects/csquared/preview-rental-planner.webp',
      },
      {
        title: 'Application & review process',
        description: 'Explains why requests, identity review, payment checks and actual reservations are separate decisions.',
        label: 'Offline design preview',
        group: 'experience',
        image: '/projects/csquared/preview-application-process.webp',
      },
      {
        title: 'Rental agreement overview',
        description: 'Archived agreement-page visual; signing is unavailable and the legal text still requires owner review.',
        label: 'Offline design preview',
        group: 'experience',
        image: '/projects/csquared/preview-agreement.webp',
      },
      {
        title: 'Identity review stage',
        description: 'Identity requirements and human review presented without claiming automated verification.',
        label: 'Offline design preview',
        group: 'experience',
        image: '/projects/csquared/preview-identity.webp',
      },
      {
        title: 'Deposit review stage',
        description: 'Draft deposit step. Payment collection and automated verification are not active.',
        label: 'Offline design preview',
        group: 'experience',
        image: '/projects/csquared/preview-deposit.webp',
      },
      {
        title: 'Confirmation gate',
        description: 'Draft customer-facing confirmation screen that makes no camera reservation.',
        label: 'Offline design preview',
        group: 'experience',
        image: '/projects/csquared/preview-confirmation.webp',
      },
      {
        title: 'GoHighLevel inquiry form',
        description: 'Existing native request form layout with renter and handover preferences.',
        label: 'GHL form capture',
        group: 'operations',
        image: '/projects/csquared/native-inquiry-form.webp',
      },
      {
        title: 'Sales & Booking pipeline',
        description: 'Seven configured CRM stages; synthetic inquiry visible in New Inquiry.',
        label: 'GHL configuration',
        group: 'operations',
        image: '/projects/csquared/sales-booking-pipeline.webp',
      },
      {
        title: 'Rental Operations pipeline',
        description: 'Separate eight-stage operations board; no opportunity was shown in this view.',
        label: 'GHL configuration',
        group: 'operations',
        image: '/projects/csquared/rental-operations-pipeline.webp',
      },
      {
        title: 'Rental record custom fields',
        description: 'Structured field definitions for dates, status, IDs, incidents, late fees and return handling.',
        label: 'GHL configuration',
        group: 'operations',
        image: '/projects/csquared/rental-custom-fields.webp',
      },
      {
        title: 'Controlled synthetic opportunity',
        description: 'One test opportunity preserved as New Inquiry / Open with FORM source and no confirmed booking; contact details redacted.',
        label: 'GHL synthetic test · redacted',
        group: 'operations',
        image: '/projects/csquared/synthetic-opportunity-redacted.webp',
      },
      {
        title: 'Rental calendar configuration',
        description: 'Existing CSQUARED calendar view; screenshot does not verify booking automation.',
        label: 'GHL configuration',
        group: 'operations',
        image: '/projects/csquared/rental-calendar.webp',
      },
      {
        title: 'Workflow 01 — guarded intake',
        description: 'Opportunity creation trigger, exact synthetic-match gate and internal HOLD task; identifying test condition redacted.',
        label: 'GHL builder · controlled path',
        group: 'automation',
        image: '/projects/csquared/workflow-01-builder-redacted.webp',
      },
      {
        title: 'Workflow 01 — execution evidence',
        description: 'Executed internal HOLD task and finished historical test path. No customer notification or reservation was performed.',
        label: 'GHL execution logs',
        group: 'automation',
        image: '/projects/csquared/workflow-01-execution.webp',
      },
      {
        title: 'Workflow 07 — identity queue',
        description: 'Document-status trigger and internal identity-review task illustrate how staff can be assigned sensitive verification work. This path has not been execution-tested.',
        label: 'GHL builder · Review design',
        group: 'automation',
        image: '/projects/csquared/workflow-07-builder.webp',
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
