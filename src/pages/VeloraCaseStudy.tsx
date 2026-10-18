import { useEffect, useState } from 'react'
import './VeloraCaseStudy.css'

type Media = { src: string; title: string; caption: string }
type Workflow = { number: string; name: string; purpose: string; result: string; state: 'verified' | 'partial' | 'configured'; overview: string; detail: string }
type FlowStep = { title: string; note?: string; type?: 'trigger' | 'decision' | 'wait' | 'end' | 'action' }
type FlowBranch = { title: string; steps: string[]; note?: string }
type FlowMap = { preview: string[]; mainLabel: string; steps: FlowStep[]; branches: FlowBranch[]; footnote: string }

const screen = (folder: string, file: string) => `/projects/velora/screenshots/${folder}/${file}`
// Public-safe, purpose-cropped screenshots supplied by the project author on 18 Oct 2026.
const captured = (file: string) => screen('08-portfolio-updates', file)
const pipelineEvidence: Media = {
  src: captured('velora-pipeline-board-verified.png'),
  title: 'Actual Velora CRM pipeline',
  caption: 'Real GoHighLevel board: New Lead → Qualified → Consultation Booked, with all five configured stages visible.',
}
const bookedOpportunity: Media = {
  src: captured('velora-booked-opportunity-details.png'),
  title: 'Same Open opportunity, booked',
  caption: 'Actual opportunity detail fields showing Consultation Booked / Open. Personal contact fields were excluded from the crop.',
}
const calendarEvidence: Media = {
  src: captured('velora-calendar-week-bookings.png'),
  title: 'Actual Velora consultation calendar',
  caption: 'GoHighLevel weekly calendar with the October 20 test booking at 10:00 AM Manila time.',
}
const calendarMonth: Media = {
  src: captured('velora-calendar-month-overview.png'),
  title: 'October 2026 calendar overview',
  caption: 'Existing appointment entries in the Velora Aesthetics consultation calendar.',
}
const workflowList: Media = {
  src: captured('velora-six-published-workflows.png'),
  title: 'Six GoHighLevel workflows in one system',
  caption: 'Actual published Workflow 01–06 list; published status is not proof that every branch was tested.',
}
const leadCaptureBuilder: Media = {
  src: captured('velora-workflow01-clear-builder.png'),
  title: 'Workflow 01 — complete original builder path',
  caption: 'Actual GoHighLevel builder showing Form Submitted → Create Velora New Lead → End; cropped for legibility, not reconstructed.',
}
const slotEvidence: Media = {
  src: captured('velora-calendar-slots-in-funnel.png'),
  title: 'Consultation time-slot selection',
  caption: 'Actual calendar embedded in Velora’s booking page, including dates, available times, and Asia/Manila timezone.',
}

const landing: Media = {
  src: screen('01-funnel-pages', 'velora-landing-hero-editor.png'),
  title: 'A considered first impression',
  caption: 'Real Velora landing-page hero captured in the GoHighLevel editor.',
}
const booking: Media = {
  src: captured('velora-calendar-slots-in-funnel.png'),
  title: 'Consultation calendar and time slots',
  caption: 'Actual 30-minute consultation calendar with live date, available times, and Asia/Manila timezone.',
}
const thanks: Media = {
  src: captured('velora-thank-you-page-clean.png'),
  title: 'Thank You page',
  caption: 'The actual destination reached following the controlled booking.',
}

const workflows: Workflow[] = [
  {
    number: '01', name: 'Lead Capture', purpose: 'Converts an inquiry into one CRM opportunity in New Lead.',
    result: 'Opportunity creation verified in Phase 1', state: 'verified',
    overview: leadCaptureBuilder.src,
    detail: screen('04-workflow-details','velora-workflow01-opportunity-creation.png'),
  },
  {
    number: '02', name: 'Automated Lead Qualification', purpose: 'Routes by readiness, intent, service area and willingness to travel; eligible branches converge on a guarded invitation.',
    result: 'Qualified lead and one invitation verified; sending actions disabled after the test', state: 'verified',
    overview: screen('03-workflow-overviews','velora-workflow02-overview.png'),
    detail: screen('04-workflow-details','velora-workflow02-saved-guard.png'),
  },
  {
    number: '03', name: 'Consultation Booking', purpose: 'Finds the existing opportunity, moves it to Consultation Booked and sends the confirmation with relative reminder waits.',
    result: 'Booking, CRM movement and confirmation verified; later reminder delivery pending', state: 'verified',
    overview: screen('03-workflow-overviews','velora-workflow03-overview.png'),
    detail: screen('04-workflow-details','velora-workflow03-find-opportunity.png'),
  },
  {
    number: '04', name: 'Consultation Cancellation', purpose: 'Marks a cancelled consultation for follow-up and returns the matched opportunity to qualification.',
    result: 'Configured; full lifecycle behavior not signed off', state: 'configured',
    overview: screen('03-workflow-overviews','velora-workflow04-overview.png'),
    detail: screen('04-workflow-details','velora-workflow04-followup.png'),
  },
  {
    number: '05', name: 'Consultation Rescheduling', purpose: 'Routes appointment changes and sends a confirmation only when the appointment was rescheduled.',
    result: 'Non-rescheduled booking exit verified; full reschedule test pending', state: 'partial',
    overview: screen('03-workflow-overviews','velora-workflow05-overview.png'),
    detail: screen('04-workflow-details','velora-workflow05-rescheduled-condition.png'),
  },
  {
    number: '06', name: 'No-Show Recovery', purpose: 'Runs a three-email recovery sequence and assigns eligible leads to a later nurture path.',
    result: 'Configured and links corrected; complete recovery sequence not verified', state: 'configured',
    overview: screen('03-workflow-overviews','velora-workflow06-overview.png'),
    detail: screen('04-workflow-details','velora-workflow06-day14-wait.png'),
  },
]

// Documentation-based maps, not altered or fabricated GoHighLevel screenshots.
// Reflect the saved Workflow 01–06 actions from the October 2026 handoff.
const workflowMaps: Record<string, FlowMap> = {
  '01': {
    preview: ['Inquiry submitted', 'Create New Lead', 'Finish'],
    mainLabel: 'Complete workflow — main path',
    steps: [
      { title: 'Velora consultation inquiry submitted', note: 'Form Submitted trigger, filtered to the existing Velora consultation inquiry form.', type: 'trigger' },
      { title: 'Create opportunity in New Lead', note: 'Velora Lead-to-Client pipeline · Open. Source: Velora Consultation Form. Duplicate opportunity override is not enabled.' },
      { title: 'End Workflow 01', note: 'The Opportunity Created event starts Workflow 02 separately.', type: 'end' },
    ],
    branches: [
      { title: 'Contact creation', steps: ['The embedded inquiry form creates or updates the contact before Workflow 01 runs.'], note: 'Not a Create Contact action inside this workflow.' },
      { title: 'Duplicate opportunity handling', steps: ['Saved account rules prevent creating another open opportunity for the same contact in this pipeline.'], note: 'Repeat submissions do not guarantee a new Opportunity Created event.' },
    ],
    footnote: 'Phase 1 verified one inquiry and one new opportunity. Shown here as an implementation map, not a screenshot of the builder.'
  },
  '02': {
    preview: ['Opportunity created', 'Qualify lead', 'Eight-part guard', 'Invitation control'],
    mainLabel: 'Qualified lead — main path',
    steps: [
      { title: 'Opportunity Created', note: 'Velora Aesthetics | Lead-to-Client pipeline.', type: 'trigger' },
      { title: 'Check consultation timeline', note: 'Separate active readiness from other outcomes.', type: 'decision' },
      { title: 'Check lead intent', note: 'Genuine interest proceeds; not-ready/unclear intent route elsewhere.', type: 'decision' },
      { title: 'Check service area / willingness to travel', note: 'Metro Manila and supported nearby locations qualify locally; willing outside-area leads can qualify through a second path.', type: 'decision' },
      { title: 'Mark Qualified; update opportunity', note: 'Set qualification status and move the same open opportunity to Qualified for Consultation.' },
      { title: 'Shared invitation eligibility guard', note: 'Eight AND conditions: approved email, qualification, no queued or sent tag, correct pipeline/open/stage, and email DND exclusion.', type: 'decision' },
      { title: 'Invitation sequence: currently disabled', note: 'Queue tag → invitation email → sent tag were used for one supervised Phase 1 test, then disabled and verified.' },
      { title: 'End workflow', type: 'end' },
    ],
    branches: [
      { title: 'Other outcomes', steps: ['Not ready → nurture update and tag → end', 'Unclear intent → manual review → end', 'Outside area, not willing to travel → manual review → end'] },
      { title: 'Second successful route', steps: ['Outside the local area + willing to travel → Qualified → shared eight-part guard.'] },
    ],
    footnote: 'Phase 1 verified the local qualified path only. Invitation actions are disabled after that test; negative branches and duplicate re-entry were not independently verified.'
  },
  '03': {
    preview: ['Confirmed booking', 'Find & move opportunity', 'Send confirmation', 'Timed reminders'],
    mainLabel: 'Found opportunity — full main path',
    steps: [
      { title: 'Confirmed appointment', note: 'Normal appointment on Velora Aesthetics | Consultation calendar.', type: 'trigger' },
      { title: 'Remove from No-Show Recovery', note: 'Stops Workflow 06 enrollment for a contact who has rebooked.' },
      { title: 'Find Existing Velora Opportunity', note: 'Most recently created Open opportunity in the Velora pipeline.', type: 'decision' },
      { title: 'Move to Consultation Booked', note: 'Update existing opportunity; keep status Open.' },
      { title: 'Send Consultation Confirmation Email', note: 'Executed once and delivered to the approved test inbox during Phase 2.' },
      { title: 'Wait until 24 hours before consultation', note: 'Relative to the appointment start.', type: 'wait' },
      { title: 'Send 24-hour reminder', note: 'Configured; future delivery not established.' },
      { title: 'Wait until 1 hour before consultation', note: 'Relative to the appointment start.', type: 'wait' },
      { title: 'Send 1-hour reminder', note: 'Configured; future delivery not established.' },
      { title: 'End workflow', type: 'end' },
    ],
    branches: [
      { title: 'Opportunity not found', steps: ['Notify administrator — missing Velora opportunity', 'Continue to the shared consultation confirmation path'], note: 'No replacement opportunity is created.' },
    ],
    footnote: 'Phase 2 verified booking, lookup, CRM update and confirmation delivery. The 24-hour wait was active; subsequent reminder delivery remained untested in the handoff.'
  },
  '04': {
    preview: ['Cancelled booking', 'Find opportunity', 'Flag for follow-up', 'Send cancellation email'],
    mainLabel: 'Opportunity found — main path',
    steps: [
      { title: 'Appointment status: Cancelled', note: 'Correct Velora consultation calendar.', type: 'trigger' },
      { title: 'Find cancelled booking opportunity', type: 'decision' },
      { title: 'Mark consultation for follow-up', note: 'Velora Qualification Status → Needs Follow-up.' },
      { title: 'Move cancelled lead to Qualified', note: 'Returns matching opportunity to Qualified for Consultation.' },
      { title: 'Send consultation cancellation email' },
      { title: 'End workflow', type: 'end' },
    ],
    branches: [
      { title: 'Opportunity not found', steps: ['Notify administrator of missing opportunity', 'Continue to cancellation confirmation path'] },
    ],
    footnote: 'Configuration inspected; full cancellation lifecycle execution and email delivery were not established in the final handoff.'
  },
  '05': {
    preview: ['Appointment event', 'Rescheduled?', 'Yes: confirmation', 'No: exit'],
    mainLabel: 'Actual workflow — complete branching logic',
    steps: [
      { title: 'Velora appointment-status event', note: 'Normal contact appointment; filtered to the Velora consultation calendar.', type: 'trigger' },
      { title: 'Check If Appointment Was Rescheduled', note: 'Evaluates whether Rescheduled = True.', type: 'decision' },
      { title: 'If True: Send Rescheduled Consultation Confirmation', note: 'The email executes only when the reschedule condition is met.' },
      { title: 'End the True branch', type: 'end' },
    ],
    branches: [
      { title: 'If condition is not met', steps: ['None branch → END with no rescheduling email.'], note: 'Phase 2 demonstrated this safe exit for a new, non-rescheduled booking.' },
    ],
    footnote: 'This small workflow is the full saved decision structure. An actual end-to-end reschedule remains partially verified; Workflow 05 does not recalculate Workflow 03 reminder waits.'
  },
  '06': {
    preview: ['No-show event', 'Recovery email sequence', 'Day 14 check', 'Nurture if eligible'],
    mainLabel: 'Opportunity found — main recovery path',
    steps: [
      { title: 'Appointment status: No-show', note: 'Filtered to the Velora consultation calendar.', type: 'trigger' },
      { title: 'Find No-Show Velora Opportunity', type: 'decision' },
      { title: 'Update qualification; move lead', note: 'Needs Follow-up contact status; opportunity returns to Qualified for Consultation.' },
      { title: 'Send No-Show Recovery Email 1' },
      { title: 'Wait 3 days', type: 'wait' },
      { title: 'Send No-Show Recovery Email 2' },
      { title: 'Wait 4 days', type: 'wait' },
      { title: 'Send Final No-Show Recovery Email' },
      { title: 'Wait 7 days more (Day 14)', type: 'wait' },
      { title: 'Check open qualified opportunity', type: 'decision' },
      { title: 'Add Nurture for Later tag if found' },
      { title: 'End workflow', type: 'end' },
    ],
    branches: [
      { title: 'Opportunity not found initially', steps: ['Notify administrator → End.'] },
      { title: 'Day 14 opportunity not found', steps: ['End without applying a nurture tag.'] },
    ],
    footnote: 'Corrected all three recovery booking links. The full 14-day recovery delivery sequence was not executed in the verified handoff.'
  },
}

function WorkflowPreview({ flow, onOpen }: { flow: Workflow; onOpen: () => void }) {
  const preview = workflowMaps[flow.number].preview
  return <button type="button" className="velora-flow-preview" onClick={onOpen} aria-label={`Open complete process map for Workflow ${flow.number}`}>
    <span className="velora-flow-preview-top"><strong>WORKFLOW MAP</strong><span>Documented configuration · Not a screenshot</span></span>
    <span className="velora-flow-preview-steps">{preview.map((item, index) => <span key={item} className="velora-flow-preview-step"><small>{String(index + 1).padStart(2,'0')}</small><b>{item}</b></span>)}</span>
    <span className="velora-flow-preview-bottom">Open complete workflow map <span aria-hidden="true">↗</span></span>
  </button>
}

function WorkflowFullMap({ flow, onClose, onEvidence }: { flow: Workflow; onClose: () => void; onEvidence: () => void }) {
  const map = workflowMaps[flow.number]
  return <div className="velora-flow-overlay" role="presentation" onClick={onClose}>
    <section className="velora-flow-dialog" role="dialog" aria-modal="true" aria-labelledby="velora-flow-dialog-title" onClick={event => event.stopPropagation()}>
      <header className="velora-flow-dialog-head">
        <div><small>VELORA / AUTOMATION {flow.number}</small><h2 id="velora-flow-dialog-title">{flow.name}</h2><p>Documented process diagram reconstructed from the saved GoHighLevel configuration. Not an original builder screenshot.</p></div>
        <button type="button" onClick={onClose} aria-label="Close process map">✕</button>
      </header>
      <div className="velora-flow-dialog-content">
        <div><p className="velora-flow-lane-heading">{map.mainLabel}</p><ol className="velora-flow-full-steps">
          {map.steps.map((step, i) => <li className={`velora-flow-full-step velora-flow-type-${step.type ?? 'action'}`} key={i}>
            <span className="velora-flow-node-index">{step.type === 'end' ? '✓' : String(i+1).padStart(2,'0')}</span>
            <div><strong>{step.title}</strong>{step.note && <p>{step.note}</p>}</div>
          </li>)}
        </ol></div>
        <aside className="velora-flow-alternatives"><p className="velora-flow-lane-heading">Branches and safeguards</p>
          {map.branches.map(branch => <section key={branch.title} className="velora-flow-branch"><strong>{branch.title}</strong><ul>{branch.steps.map(s=><li key={s}>{s}</li>)}</ul>{branch.note && <p>{branch.note}</p>}</section>)}
          <div className="velora-flow-map-note"><strong>Verification context</strong><p>{map.footnote}</p></div>
        </aside>
      </div>
      <footer className="velora-flow-dialog-footer"><span>Workflow documentation · October 2026</span><button type="button" onClick={onEvidence}>View actual GoHighLevel capture ↗</button></footer>
    </section>
  </div>
}

const testEvidence: Media[] = [
  {src:screen('05-testing-evidence','velora-phase1-workflow01-success.png'),title:'Workflow 01 execution',caption:'Recorded opportunity creation after the inquiry was submitted.'},
  {src:screen('05-testing-evidence','velora-phase1-workflow02-success.png'),title:'Workflow 02 qualification',caption:'Successful qualifying branch and invitation actions, executed once.'},
  {src:screen('06-email-automation','velora-phase1-email-delivery-statistics.png'),title:'Invitation delivery',caption:'One qualified booking invitation delivered during the Phase 1 test.'},
  {src:screen('05-testing-evidence','velora-phase2-workflow03-execution.png'),title:'Workflow 03 execution',caption:'Booking triggered an update of the existing opportunity and the confirmation action.'},
  {src:screen('05-testing-evidence','velora-phase2-reminder-schedule.png'),title:'Relative reminder wait',caption:'Recorded 24-hour reminder wait; future reminder delivery was not verified.'},
  {src:screen('06-email-automation','velora-phase2-gmail-inbox-user.png'),title:'Confirmed email receipt',caption:'Booking confirmation received in the approved Gmail test inbox.'},
]

const stages = ['New Lead', 'Qualified for Consultation', 'Consultation Booked', 'Consultation Completed', 'Treatment Consideration']
const viewerMedia: Media[] = [
  landing, booking, thanks, pipelineEvidence, calendarEvidence, calendarMonth, workflowList, leadCaptureBuilder, slotEvidence,
  ...testEvidence,
  ...workflows.flatMap((w):Media[]=>[
    {src:w.overview,title:`Workflow ${w.number} — ${w.name}`,caption:`Original GoHighLevel builder viewport; may show only part of the workflow. ${w.purpose}`},
    {src:w.detail,title:`Workflow ${w.number} — configuration detail`,caption:w.result},
  ]),
]

export default function VeloraCaseStudy() {
  const [opened, setOpened] = useState<Media | null>(null)
  const [activeFlow, setActiveFlow] = useState<Workflow | null>(null)
  const [showCrmProof, setShowCrmProof] = useState(false)

  useEffect(() => {
    if (!opened && !activeFlow && !showCrmProof) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpened(null); setActiveFlow(null); setShowCrmProof(false); return }
      if (!opened) return
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const index = viewerMedia.findIndex(item => item.src === opened.src)
        if (index !== -1) {
          const direction = event.key === 'ArrowRight' ? 1 : -1
          setOpened(viewerMedia[(index + direction + viewerMedia.length) % viewerMedia.length])
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [opened, activeFlow, showCrmProof])

  const openMedia = (item: Media) => setOpened(item)

  return (
    <div className="velora-case">
      <div className="velora-case-shell">
        <a href="/#projects" className="velora-back">← Back to GoHighLevel projects</a>
        <header className="velora-hero">
          <div className="velora-hero-text">
            <p className="velora-eyebrow">Featured Case Study <span aria-hidden="true">/</span> GoHighLevel</p>
            <span className="velora-mark">VELORA <small>A E S T H E T I C S</small></span>
            <h1>From first inquiry to <em>confirmed consultation.</em></h1>
            <p className="velora-intro">A branded three-page funnel, structured CRM pipeline and six connected automations built for a fictional aesthetics clinic — with the core inquiry-to-booking journey validated through real test executions.</p>
            <div className="velora-hero-links">
              <a href="#velora-evidence" className="velora-btn velora-btn-primary">Explore the evidence <span>↘</span></a>
              <a href="https://sites.leadconnectorhq.com/preview/9LiLqC8xcpYr0i7ZtACM?notrack=true" target="_blank" rel="noopener noreferrer" className="velora-btn velora-btn-outline">Preview the funnel ↗</a>
            </div>
            <p className="velora-demo-note">Independent portfolio demonstration · No real clinic or client performance claims · Preview form policies are not production-ready.</p>
          </div>
          <button type="button" className="velora-hero-picture velora-media-button" onClick={() => openMedia(landing)} aria-label="View full Velora landing page screenshot">
            <img src={landing.src} alt="Actual Velora Aesthetics landing page with cream background, editorial typography and brown gradient arch" />
            <span className="velora-photo-label">Actual funnel design <span aria-hidden="true">↗</span></span>
          </button>
        </header>
        <div className="velora-facts" aria-label="Project at a glance">
          <div><strong>03</strong><span>Connected funnel pages</span></div>
          <div><strong>06</strong><span>Automation workflows</span></div>
          <div><strong>02</strong><span>Core test phases verified</span></div>
          <div><strong>01</strong><span>End-to-end test contact</span></div>
        </div>
      </div>

      <section className="velora-section velora-section-dark" id="velora-story">
        <div className="velora-case-shell velora-two-col">
          <div>
            <p className="velora-eyebrow">01 / The challenge</p>
            <h2>Connected operations, not disconnected steps.</h2>
          </div>
          <div className="velora-paragraphs">
            <p>Consultation leads arrive at different levels of readiness. Without a consistent flow, staff can lose track of eligibility, accidentally duplicate opportunities, manually send booking details, or miss follow-up after scheduling changes.</p>
            <p>I designed Velora as a connected <strong>GoHighLevel CRM demonstration</strong>: an inquiry feeds native qualification rules, an opportunity moves through defined pipeline stages, and a calendar booking updates that same record.</p>
            <p>My work covered pipeline architecture, custom fields, forms, page design, conditional branches, email automations, troubleshooting, and supervised integration testing.</p>
            <div className="velora-stack"><span>GoHighLevel</span><span>LeadConnector</span><span>CRM</span><span>Funnels</span><span>Calendars</span><span>Email Automation</span></div>
          </div>
        </div>
      </section>

      <section className="velora-section velora-section-cream velora-problems-section" id="velora-problems">
        <div className="velora-case-shell">
          <div className="velora-heading-row"><div><p className="velora-eyebrow">02 / Problems solved</p><h2>Less manual chasing. More visibility.</h2></div><p>For this fictional clinic scenario, I designed a connected system to address recurring operational problems — then verified the core path with an actual test inquiry and booking.</p></div>
          <div className="velora-problem-grid">
            {[
              {problem:'Inquiries scattered across disconnected steps',solution:'A single form starts contact creation and one opportunity in the CRM pipeline.',proof:'Phase 1: one inquiry, one opportunity'},
              {problem:'Unqualified leads booking without review',solution:'Readiness, intent, service area and travel conditions route contacts to qualification, nurture or manual review.',proof:'Qualified path verified; other paths configured'},
              {problem:'Repeated follow-up and duplicate opportunity records',solution:'A shared eligibility guard, opportunity lookup and test-only invitation tags help control the journey.',proof:'One invitation delivered; duplicate re-entry not tested'},
              {problem:'Booking status disconnected from lead history',solution:'Calendar booking moves the existing Open opportunity to Consultation Booked and sends an automated confirmation.',proof:'Phase 2: one appointment and email verified'},
            ].map((item,i)=><article className="velora-problem-card" key={item.problem}><small>ISSUE {String(i+1).padStart(2,'0')}</small><h3>{item.problem}</h3><p>{item.solution}</p><span>{item.proof}</span></article>)}
          </div>
        </div>
      </section>

      <section className="velora-section velora-section-cream" id="velora-funnel">
        <div className="velora-case-shell">
          <div className="velora-heading-row"><div><p className="velora-eyebrow">03 / The experience</p><h2>Three pages. One thoughtful journey.</h2></div><p>Every page is part of the actual saved Velora funnel. The following screenshots are from the working demonstration.</p></div>
          <div className="velora-funnel-grid">
            {[{...landing,n:'01',label:'Landing & inquiry',desc:'A branded entry point captures goals and qualification inputs before inviting a booking.'},{...booking,n:'02',label:'Consultation booking',desc:'A native 30-minute calendar booking form uses the existing test contact.'},{...thanks,n:'03',label:'Thank You & next steps',desc:'The actual appointment submission redirected to the next funnel step.'}].map(item=>(
              <article className="velora-funnel-item" key={item.n}>
                <button className="velora-media-button velora-funnel-image" type="button" onClick={()=>openMedia(item)} aria-label={`Open ${item.label} screenshot`}><img src={item.src} alt={item.title} loading="lazy" /><span>View screenshot ↗</span></button>
                <div className="velora-funnel-copy"><span>{item.n}</span><div><h3>{item.label}</h3><p>{item.desc}</p></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="velora-section velora-section-dark" id="velora-architecture">
        <div className="velora-case-shell">
          <p className="velora-eyebrow">04 / CRM Architecture</p>
          <div className="velora-heading-row"><h2>One opportunity. A visible lifecycle.</h2><p>The inquiry form creates or updates the contact; Workflow 01 creates the opportunity; qualification and booking update the same Open record.</p></div>
          <ol className="velora-stage-list">
            {stages.map((stage,i)=><li key={stage} className={i < 3 ? 'velora-stage-tested' : ''}><span>{String(i+1).padStart(2,'0')}</span><strong>{stage}</strong><small>{i===0?'Created in Phase 1':i===1?'Reached in Phase 1':i===2?'Reached in Phase 2':'Configured stage'}</small></li>)}
          </ol>
          <div className="velora-crm-evidence">
            <div className="velora-crm-evidence-main">
              <button type="button" className="velora-proof-image velora-media-button" onClick={()=>openMedia(pipelineEvidence)} aria-label="View actual Velora CRM pipeline full size"><img src={pipelineEvidence.src} alt="Actual five-column Velora pipeline board showing the booked IntegrationTest opportunity" loading="lazy"/><span>Enlarge pipeline ↗</span></button>
              <div><small>THE ACTUAL PIPELINE</small><h3>Five stages. One visible customer journey.</h3><p>Real pipeline board with the booked test opportunity visible. The first three stages were exercised during the two controlled test phases.</p></div>
            </div>
            <div className="velora-crm-execution-card">
              <div className="velora-crm-execution-kicker"><span>CRM EXECUTION</span><span className="velora-crm-execution-verified">✓ PHASES 1 &amp; 2 VERIFIED</span></div>
              <h3>Same record. Clear progress.</h3>
              <p>The inquiry created one Open opportunity. Qualification and the confirmed booking moved that same opportunity forward.</p>
              <ol className="velora-crm-execution-timeline" aria-label="Verified Velora opportunity lifecycle">
                <li><span className="velora-crm-execution-step">01</span><div><strong>New Lead</strong><small>Created following the inquiry · Phase 1</small></div></li>
                <li><span className="velora-crm-execution-step">02</span><div><strong>Qualified for Consultation</strong><small>Automated qualification · Phase 1</small></div></li>
                <li className="velora-crm-execution-current"><span className="velora-crm-execution-step">03</span><div><strong>Consultation Booked</strong><small>Existing opportunity updated · Phase 2</small></div></li>
              </ol>
              <div className="velora-crm-execution-facts"><div><small>FINAL STAGE</small><strong>Consultation Booked</strong></div><div><small>RECORD STATUS</small><strong><span className="velora-crm-open-dot"/> Open</strong></div></div>
              <button type="button" className="velora-crm-execution-action" onClick={()=>setShowCrmProof(true)}>Inspect actual CRM record <span aria-hidden="true">↗</span></button>
              <small className="velora-crm-execution-disclosure">The record screenshot shows the final state; execution logs corroborate the automated transitions.</small>
            </div>
          </div>
          <div className="velora-calendar-section">
            <div className="velora-heading-row"><div><p className="velora-eyebrow">The connected calendar</p><h2>Bookings become visible, not just emails.</h2></div><p>A 30-minute consultation calendar is linked to the funnel. The weekly view shows the confirmed integration-test booking; later reminder delivery remains unverified.</p></div>
            <button type="button" className="velora-calendar-wide velora-media-button" onClick={()=>openMedia(calendarEvidence)} aria-label="Enlarge Velora consultation calendar"><img src={calendarEvidence.src} alt="Real GoHighLevel weekly booking calendar showing Velora IntegrationTest on October 20" loading="lazy"/><span>View calendar evidence ↗</span></button>
            <div className="velora-calendar-link-row"><span>Actual GoHighLevel calendar · Asia/Manila (GMT+8) · 30-minute consultations</span><button type="button" onClick={()=>openMedia(calendarMonth)}>View monthly overview ↗</button><button type="button" onClick={()=>openMedia(slotEvidence)}>View available time slots ↗</button></div>
          </div>
        </div>
      </section>

      <section className="velora-section velora-section-cream" id="velora-workflows">
        <div className="velora-case-shell">
          <div className="velora-heading-row"><div><p className="velora-eyebrow">05 / Automation architecture</p><h2>Six workflows, built around the customer.</h2></div><p>Complete, readable process maps reconstructed from saved workflow settings; actual builder screenshots remain accessible as evidence. Testing status is identified per workflow.</p></div>
          <div className="velora-workflow-grid">
            {workflows.map(flow=>{
              const screenshot: Media={src:flow.overview,title:`Workflow ${flow.number} — ${flow.name}`,caption:flow.purpose}
              const detail: Media={src:flow.detail,title:`Workflow ${flow.number} — details`,caption:flow.result}
              return <article className="velora-workflow-card" key={flow.number}>
                <WorkflowPreview flow={flow} onOpen={()=>setActiveFlow(flow)} />
                <div className="velora-workflow-body"><div className="velora-workflow-top"><span>WORKFLOW {flow.number}</span><span className={`velora-status velora-status-${flow.state}`}>{flow.state === 'verified' ? 'Core path verified' : flow.state === 'partial'?'Partially verified':'Configured'}</span></div><h3>{flow.name}</h3><p>{flow.purpose}</p><div className="velora-workflow-result">{flow.result}</div><div className="velora-workflow-links"><button className="velora-detail-link" type="button" onClick={()=>setActiveFlow(flow)}>Complete workflow map <span>↗</span></button><button className="velora-detail-link" type="button" onClick={()=>openMedia(detail)}>Actual configuration <span>↗</span></button><button className="velora-detail-link velora-detail-secondary" type="button" onClick={()=>openMedia(screenshot)}>Original builder capture <span>↗</span></button></div></div>
              </article>
            })}
          </div>
          <div className="velora-implementation-evidence">
            <button type="button" className="velora-proof-image velora-media-button" onClick={()=>openMedia(leadCaptureBuilder)} aria-label="View Workflow 01 complete builder path"><img src={leadCaptureBuilder.src} alt="Actual GoHighLevel workflow 01 showing Form Submitted trigger, Create Velora New Lead action, and End" loading="lazy"/><span>View builder ↗</span></button>
            <div><small>ORIGINAL GHL BUILDER</small><h3>Lead Capture — trigger to opportunity.</h3><p>The original Workflow 01 capture now includes its complete compact trigger → action → end sequence. The map above explains the logic; this screenshot proves it is configured in GoHighLevel.</p><button type="button" onClick={()=>openMedia(workflowList)} className="velora-detail-link">View all six published workflows ↗</button></div>
          </div>
          <div className="velora-inline-warning"><strong>Workflow 02 demo safeguard:</strong> Invitations were restricted to one approved test inbox; the queued-tag, invitation-email and sent-tag actions were disabled after the supervised test. The system does not claim a production-grade appointment access gate.</div>
        </div>
      </section>

      <section className="velora-section velora-section-dark" id="velora-evidence">
        <div className="velora-case-shell">
          <div className="velora-heading-row"><div><p className="velora-eyebrow">06 / Testing and results</p><h2>Built, then verified.</h2></div><p>These are observed outcomes from one controlled October 2026 demonstration—not sales conversions or estimates of time saved.</p></div>
          <div className="velora-results-grid">
            <article><span className="velora-result-index">PHASE 01</span><h3>Inquiry to invitation</h3><p>One form submission. One matching contact and opportunity. Correct qualification and pipeline movement. One invitation sent and received in Gmail.</p><div className="velora-result-facts"><span>1 inquiry</span><span>1 delivered invitation</span><span>0 failed actions reported</span></div><button type="button" onClick={()=>openMedia(testEvidence[1])}>View execution evidence ↗</button></article>
            <article><span className="velora-result-index">PHASE 02</span><h3>Booking to confirmation</h3><p>One consultation booked for October 20, 2026 at 10:00 AM Manila time. Original CRM records reused, Thank You redirect confirmed, and email received.</p><div className="velora-result-facts"><span>1 appointment</span><span>CRM stage updated</span><span>Confirmation delivered</span></div><button type="button" onClick={()=>openMedia(testEvidence[3])}>View execution evidence ↗</button></article>
          </div>
          <div className="velora-evidence-gallery">
            <div className="velora-gallery-head"><div><p className="velora-eyebrow">Execution records</p><h3>The evidence behind the results</h3></div><p>Only workflow execution and email delivery records appear here. Funnel designs, pipeline and calendar screenshots are already shown in their respective sections.</p></div>
            <div className="velora-evidence-grid">{testEvidence.map(item=><button type="button" className="velora-media-button velora-evidence-card" key={item.src} onClick={()=>openMedia(item)} aria-label={`Enlarge ${item.title}`}><img src={item.src} alt={item.title} loading="lazy"/><span><strong>{item.title}</strong><small>{item.caption}</small><em>View full evidence ↗</em></span></button>)}</div>
          </div>
        </div>
      </section>

      <section className="velora-section velora-section-cream" id="velora-learnings">
        <div className="velora-case-shell velora-two-col"><div><p className="velora-eyebrow">07 / Engineering decisions</p><h2>The details that make automation dependable.</h2></div><div className="velora-learnings"><article><span>01</span><div><h3>Shared invitation logic</h3><p>Both successful qualification paths converge on one guarded invitation branch rather than maintaining two drifting sets of rules.</p></div></article><article><span>02</span><div><h3>Reuse instead of duplicate</h3><p>A Find Opportunity action updates the existing Open record on confirmed booking. The Phase 2 test verified that record continuity.</p></div></article><article><span>03</span><div><h3>Delivery isn't just a tag</h3><p>Execution logs, provider delivery statistics and actual Gmail receipt were checked separately.</p></div></article><article><span>04</span><div><h3>Documenting the edges</h3><p>Missing production policy pages, ambiguous PST wording, manual existing-booking checks and untested lifecycle scenarios are disclosed rather than presented as complete.</p></div></article></div></div>
      </section>

      <section className="velora-section velora-section-dark velora-finale">
        <div className="velora-case-shell"><p className="velora-eyebrow">A tested demonstration, not a client success claim</p><h2>From idea to <em>working customer journey.</em></h2><p>The next improvements are comprehensive returning-contact, cancellation, rescheduling and recovery tests; clearer Manila timezone rendering; proper privacy links; and authoritative calendar-state protection before any production deployment.</p><div className="velora-hero-links"><a className="velora-btn velora-btn-primary" href="/#contact">Discuss a CRM project ↗</a><a className="velora-btn velora-btn-outline" href="/#projects">Back to projects →</a></div></div>
      </section>

      {showCrmProof && (
        <div className="velora-crm-proof-backdrop" role="presentation" onClick={()=>setShowCrmProof(false)}>
          <section className="velora-crm-proof-dialog" role="dialog" aria-modal="true" aria-labelledby="velora-crm-proof-title" onClick={event=>event.stopPropagation()}>
            <header className="velora-crm-proof-dialog-header">
              <div><small>ACTUAL GOHIGHLEVEL EVIDENCE · PHASE 2</small><h2 id="velora-crm-proof-title">The same opportunity reached <em>Consultation Booked.</em></h2><p>A real, redacted record capture paired with the verification context. No simulated CRM interface or invented figures.</p></div>
              <button type="button" onClick={()=>setShowCrmProof(false)} aria-label="Close CRM evidence">✕</button>
            </header>
            <div className="velora-crm-proof-dialog-main">
              <figure className="velora-crm-proof-screenshot">
                <img src={bookedOpportunity.src} alt="Actual GoHighLevel opportunity record with Velora Aesthetics pipeline, Consultation Booked stage, Open status and Velora Consultation Form source" />
                <figcaption>Original GoHighLevel record evidence · private contact information excluded</figcaption>
              </figure>
              <aside className="velora-crm-proof-record">
                <span className="velora-crm-execution-verified">✓ VERIFIED DURING PHASE 2</span>
                <h3>What this proves</h3>
                <dl>
                  <div><dt>Pipeline</dt><dd>Velora Aesthetics | Lead-to-Client</dd></div>
                  <div><dt>Stage</dt><dd>Consultation Booked</dd></div>
                  <div><dt>Status</dt><dd>Open</dd></div>
                  <div><dt>Source</dt><dd>Velora Consultation Form</dd></div>
                </dl>
                <p>Workflow execution records and the Phase 2 test confirmed that the original contact and opportunity were reused. This screenshot documents the final record, not every intermediate step on its own.</p>
                <button type="button" onClick={()=>{setShowCrmProof(false);openMedia(pipelineEvidence)}}>See the actual pipeline board ↗</button>
              </aside>
            </div>
          </section>
        </div>
      )}
      {activeFlow && <WorkflowFullMap flow={activeFlow} onClose={()=>setActiveFlow(null)} onEvidence={()=>{const f = activeFlow;setActiveFlow(null);openMedia({src:f.detail,title:`Workflow ${f.number} — actual configuration capture`,caption:`Original GoHighLevel screenshot (captured viewport, not necessarily a full-workflow view). ${f.result}`})}} />}
      {opened && <div className="velora-lightbox" role="presentation" onClick={()=>setOpened(null)}><div className="velora-lightbox-content" role="dialog" aria-modal="true" aria-label={opened.title} onClick={event=>event.stopPropagation()}><div className="velora-lightbox-bar"><div><strong>{opened.title}</strong><small>{opened.caption}</small></div><button type="button" onClick={()=>setOpened(null)} aria-label="Close screenshot">✕</button></div><img src={opened.src} alt={opened.title}/><div className="velora-lightbox-actions"><button type="button" onClick={()=>{const idx=viewerMedia.findIndex(m=>m.src===opened.src);setOpened(viewerMedia[(idx-1+viewerMedia.length)%viewerMedia.length])}}>← Previous</button><span>Actual project evidence · Redacted</span><button type="button" onClick={()=>{const idx=viewerMedia.findIndex(m=>m.src===opened.src);setOpened(viewerMedia[(idx+1)%viewerMedia.length])}}>Next →</button></div></div></div>}
    </div>
  )
}
