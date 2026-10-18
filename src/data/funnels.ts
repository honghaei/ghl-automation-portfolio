/** Public portfolio demonstrations; URLs are GoHighLevel previews, not production domains. */
export type FunnelProject = {
  slug: string
  name: string
  category: string
  goal: string
  description: string
  objective: string
  approach: string
  theme: 'aura' | 'forme' | 'velora'
  steps: readonly string[]
  features: readonly string[]
  screenshots: readonly { src: string; title: string; note: string }[]
  previewUrl: string
  formUrl: string
  thankYouUrl: string
  caseStudyPath: string
  testNote: string
  demo: boolean
}

export const funnels: FunnelProject[] = [
  {
    slug: 'aura-skin-studio',
    name: 'AURA Skin Studio',
    category: 'Luxury Skincare',
    goal: 'Consultation Experience',
    description: 'An editorial, photography-led skincare funnel with a sample-only consultation journey, designed for clarity and calm conversion.',
    objective: 'Design a compelling skincare inquiry experience that takes visitors from the brand story to a clear consultation call to action.',
    approach: 'I created a distinct warm-ivory and burgundy design, integrated licensed skincare photography, and connected three responsive GoHighLevel pages with non-collecting sample validation.',
    theme: 'aura',
    steps: ['Discover the studio', 'Explore a sample consultation', 'See demo completion'],
    features: ['GoHighLevel funnel builder', 'Three connected pages', 'Responsive editorial layout', 'Sample-only dropdown validation', 'Photography-led branding'],
    screenshots: [
      { src: '/projects/aura/screenshots/aura-landing-desktop-ghl-preview.png', title: 'Landing page', note: 'Photography-led hero and consultation CTA' },
      { src: '/projects/aura/screenshots/aura-consultation-desktop-ghl-preview.png', title: 'Consultation experience', note: 'Sample selections with required-field checks' },
      { src: '/projects/aura/screenshots/aura-thank-you-desktop-ghl-preview.png', title: 'Demo completion', note: 'No inquiry or appointment is submitted' },
      { src: '/projects/aura/screenshots/aura-funnel-steps.jpg', title: 'GoHighLevel funnel structure', note: 'Three saved, connected steps' },
    ],
    previewUrl: 'https://sites.leadconnectorhq.com/preview/Qz41Bkf7zB953xXlomQo?notrack=true',
    formUrl: 'https://sites.leadconnectorhq.com/preview/zV7aja06xhu0Ke4v8PGH?notrack=true',
    thankYouUrl: 'https://sites.leadconnectorhq.com/preview/Hw8s3QrMzGFjOOUSw9y9?notrack=true',
    caseStudyPath: '/funnel/aura-skin-studio',
    testNote: 'Owner-tested three-step journey and mobile experience in Chrome Incognito, October 2026.',
    demo: true,
  },
  {
    slug: 'forme-coaching',
    name: 'FORME Coaching',
    category: 'Fitness Coaching',
    goal: 'Coaching Application',
    description: 'A high-contrast fitness funnel pairing professional workout photography with a structured, sample-only coaching application.',
    objective: 'Create a focused application journey for a fictional fitness brand, with straightforward program messaging and a prominent next step.',
    approach: 'I built three branded GoHighLevel pages with bold black-and-lime typography, real workout imagery, responsive sections, and client-side demonstration choices.',
    theme: 'forme',
    steps: ['Explore coaching', 'Try the sample application', 'See demo completion'],
    features: ['GoHighLevel funnel builder', 'Three connected pages', 'Responsive athletic design', 'Sample-only application validation', 'Professional fitness photography'],
    screenshots: [
      { src: '/projects/forme/screenshots/forme-landing-desktop-ghl-preview.png', title: 'Landing page', note: 'Workout photography and application CTA' },
      { src: '/projects/forme/screenshots/forme-application-desktop-ghl-preview.png', title: 'Coaching application', note: 'Interactive sample-only application' },
      { src: '/projects/forme/screenshots/forme-thank-you-desktop-ghl-preview.png', title: 'Demo completion', note: 'Application demonstration finished without data collection' },
      { src: '/projects/forme/screenshots/forme-funnel-steps.jpg', title: 'GoHighLevel funnel structure', note: 'Three saved, connected steps' },
    ],
    previewUrl: 'https://sites.leadconnectorhq.com/preview/xBQyM5fBrJorEAEjRucj?notrack=true',
    formUrl: 'https://sites.leadconnectorhq.com/preview/CzFMgZz7FTQbfyIWpgdc?notrack=true',
    thankYouUrl: 'https://sites.leadconnectorhq.com/preview/ummwm0UpesZA1Ojr9uvJ?notrack=true',
    caseStudyPath: '/funnel/forme-coaching',
    testNote: 'Owner-tested three-step journey and mobile experience in Chrome Incognito, October 2026.',
    demo: true,
  },
  {
    slug: 'velora-aesthetics',
    name: 'Velora Aesthetics',
    category: 'Aesthetics Consultation',
    goal: 'CRM-Connected Booking',
    description: 'A three-page consultation funnel backed by a structured GoHighLevel pipeline and six lifecycle workflows, with real controlled execution evidence.',
    objective: 'Connect lead capture, qualification, booking invitations, and consultation confirmation in one visible CRM opportunity journey.',
    approach: 'I built the funnel, mapped a lead-to-client pipeline, configured six workflows, and tested a controlled inquiry-to-confirmation journey while keeping test-only restrictions.',
    theme: 'velora',
    steps: ['Send a consultation inquiry', 'Qualified lead receives a booking invitation', 'Complete booking and receive confirmation'],
    features: ['GoHighLevel funnel builder', 'CRM pipeline and six workflows', 'Conditional lead qualification', 'Booking calendar', 'Verified invitation and confirmation emails'],
    screenshots: [
      { src: '/projects/velora/screenshots/01-funnel-pages/velora-landing-hero-editor.png', title: 'Landing page', note: 'Branded inquiry funnel' },
      { src: '/projects/velora/screenshots/01-funnel-pages/velora-thank-you-desktop-user.png', title: 'Thank You page', note: 'Verified redirect after controlled booking' },
    ],
    previewUrl: 'https://sites.leadconnectorhq.com/preview/9LiLqC8xcpYr0i7ZtACM?notrack=true',
    formUrl: 'https://sites.leadconnectorhq.com/preview/ppZPt0vaKXx6qKc6YOxK?notrack=true',
    thankYouUrl: 'https://sites.leadconnectorhq.com/preview/UukaUcrxgf3p3RS3l4LE?notrack=true',
    caseStudyPath: '/ghl-project/velora-aesthetics-crm-automation',
    testNote: 'Controlled Phase 1 and Phase 2 core journey verified; other lifecycle scenarios are not claimed fully tested.',
    demo: true,
  },
]
