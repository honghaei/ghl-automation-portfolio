import LeadSenseScrollShowcase, { ShowcaseProof } from '../components/LeadSenseScrollShowcase'
import ScrollProcessTimeline from '../components/ScrollProcessTimeline'
import { ghlProjects } from '../data/ghlProjects'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './CSquaredShowcase.css'

const project = ghlProjects.find((entry) => entry.slug === 'csquared-crm-sales-automation')!

const highlights = [
  { value: '08', label: 'Configured funnel steps', note: 'configured in GHL' },
  { value: '02', label: 'CRM pipelines', note: 'sales + rental operations' },
  { value: '13', label: 'Workflow designs', note: '1 controlled intake test' },
  { value: '01', label: 'Validated inquiry', note: 'controlled synthetic test' },
]

const journey = [
  { no: '01', label: 'Discover', title: 'Explore the rental offer', text: 'The branded landing page introduces the rental journey and leads the visitor to a request—not straight to payment.', state: 'Customer experience' },
  { no: '02', label: 'Plan', title: 'Specify the rental', text: 'The form collects the rental duration, handover date and time, method, and a Meetup location when relevant.', state: 'Form configured' },
  { no: '03', label: 'Submit', title: 'Receive an acknowledgement', text: 'The customer sees that the request was received. No availability, reservation, or payment is implied.', state: 'Synthetic test verified' },
  { no: '04', label: 'Record', title: 'Create a trackable CRM inquiry', text: 'GoHighLevel records an opportunity in Sales & Booking → New Inquiry, with an identity the team can inspect.', state: 'Synthetic test verified' },
  { no: '05', label: 'Review', title: 'Hold until evidence is trusted', text: 'Workflow 01 matches the approved synthetic identity and queues an internal validation task using the native opportunity ID.', state: 'Controlled HOLD path' },
]

const architecture = [
  {
    eyebrow: '01 / CUSTOMER EXPERIENCE',
    title: 'Give renters one clear place to start',
    description: 'A branded funnel introduces the camera, rental options, estimated costs and handover choices. It guides interested customers toward a request without falsely confirming availability.',
    value: 'Fewer unclear inquiries and a more consistent first impression.',
  },
  {
    eyebrow: '02 / ORGANIZED CRM',
    title: 'Keep rental information together',
    description: 'GoHighLevel stores an inquiry as a contact and opportunity with structured rental fields. Separate Sales & Booking and Rental Operations pipelines give the team a consistent place to review progress.',
    value: 'Less searching across chats, spreadsheets and disconnected notes.',
  },
  {
    eyebrow: '03 / GUARDED AUTOMATION',
    title: 'Route the right inquiry for review',
    description: 'Workflow 01 checks the approved synthetic test identity and opportunity conditions before generating an internal HOLD task. An inquiry cannot silently become a confirmed reservation.',
    value: 'One controlled intake test demonstrated a traceable internal review action.',
  },
  {
    eyebrow: '04 / RECORD CONNECTION',
    title: 'Match records across systems without guesswork',
    description: 'The integration design links GHL form submissions to their exact CRM opportunities, keeping separate source identifiers intact instead of guessing when IDs differ. This matching logic has been tested offline.',
    value: 'Designed to prevent mismatched renter records as the system expands; hosted connection is not yet activated.',
  },
  {
    eyebrow: '05 / PRIVATE DATA FOUNDATION',
    title: 'Prepare reliable records for future operations',
    description: 'A Supabase PostgreSQL schema and reconciliation controls provide a foundation for tracking rental requests and verifying which source record each one belongs to.',
    value: 'Database foundations are prepared and verified; live ingestion and automated fulfillment are a later phase.',
  },
]


const engineering = [
  {
    index: '01', concern: 'THE BUSINESS PROBLEM / TOO MANY DISCONNECTED MESSAGES',
    title: 'Make each inquiry easier to manage',
    approach: 'I structured the rental details—duration, preferred handover date and time, method and Meetup location—into an organized customer request and CRM opportunity. Instead of piecing together context from multiple messages, the team has a consistent starting record.',
    outcome: 'Less manual sorting and clearer information when staff review a request.',
  },
  {
    index: '02', concern: 'THE BUSINESS PROBLEM / UNCLEAR RENTAL NEXT STEPS',
    title: 'Give staff a repeatable process',
    approach: 'I configured separate pipelines for initial sales inquiries and rental operations, with stages covering application review, payment review and eventual fulfillment. The structure helps the business define who should act next without pretending all stages are automatic.',
    outcome: 'A consistent operational map that can support delegation and reduce follow-up confusion.',
  },
  {
    index: '03', concern: 'THE BUSINESS PROBLEM / REQUESTS MISTAKEN FOR BOOKINGS',
    title: 'Protect the team from premature commitments',
    approach: 'I designed the customer acknowledgement to say a request was received, not booked. The validated Workflow 01 path applies an exact test guard before creating an internal HOLD task. No availability claim, payment request or reservation is triggered.',
    outcome: 'The synthetic test proved controlled intake and internal review without an accidental booking.',
  },
  {
    index: '04', concern: 'THE BUSINESS PROBLEM / MULTIPLE SYSTEMS NEED THE SAME RECORD',
    title: 'Design reliable handoffs as the business grows',
    approach: 'GHL exposed distinct identifiers for what appeared to be a related inquiry. I preserved each identifier and built explicit association checks rather than linking records by assumption. The database reconciliation design is prepared for future integration.',
    outcome: 'A safer, auditable path for scaling the CRM into a connected rental-data system; live synchronization remains a separate rollout.',
  },
]


const buildMilestones = [
  { phase: 'DISCOVERY', title: 'Map the rental operation', detail: 'Define the renter experience, handover choices, inquiry data and the boundary between a request and a confirmed reservation.' },
  { phase: 'EXPERIENCE', title: 'Design the conversion journey', detail: 'Build eight GHL funnel steps, desktop/mobile layouts, native inquiry fields and a request-only acknowledgement.' },
  { phase: 'OPERATIONS', title: 'Structure the CRM', detail: 'Configure rental custom fields, two pipelines, a calendar and 13 workflow drafts, then isolate Workflow 01 behind an exact test guard.' },
  { phase: 'PROOF & SAFETY', title: 'Validate before automating', detail: 'Verify one synthetic inquiry and opportunity, examine native source IDs, install database reconciliation controls, and preserve evidence while hosted ingestion stays on HOLD.' },
]

const businessValue = [
  { title: 'A branded customer journey', detail: 'Eight configured funnel steps and preserved page designs introduce the rental offer, explain the process, and make it easy to understand the next action.' },
  { title: 'A structured inquiry record', detail: 'Native GHL form data and rental custom fields give staff a more reliable view of rental dates, duration, handover preferences, and the customer request.' },
  { title: 'Sales and rental operations visibility', detail: 'Two dedicated CRM pipelines create a clear process map for inquiries and downstream rental tasks.' },
  { title: 'A guarded first automation', detail: 'One controlled synthetic test verified the inquiry-to-opportunity journey and internal HOLD task without customer messaging or booking actions.' },
  { title: 'A documented operational blueprint', detail: 'Workflow drafts outline the planned identity, payment, handover, inspection and incident-review stages so a team can expand the system deliberately.' },
  { title: 'An integration-ready data design', detail: 'Offline-tested exact-record checks and Supabase database foundations support a future, trustworthy connection without silently merging unrelated records.' },
]

const stageNames = ['New Inquiry', 'Contacted / Booking Link Sent', 'Application In Progress', 'Verification Review', 'Deposit Pending', 'Payment Verification', 'Booking Confirmed']
const experienceShots = project.screenshots.filter((shot) => shot.group === 'experience')
const operationsShots = project.screenshots.filter((shot) => shot.group === 'operations')
const automationShots = project.screenshots.filter((shot) => shot.group === 'automation')

function EvidenceStory({ items, number, eyebrow, headline, value }: { items: typeof project.screenshots; number: string; eyebrow: string; headline: string; value: string }) {
  const available = items.filter(item => Boolean(item.image))
  if (!available.length) return null
  return <section className="csq-evidence-story csq-lss-evidence">
    <header className="csq-evidence-story-heading">
      <span>{number} / {eyebrow}</span>
      <h3>{headline}</h3>
      <p>{value}</p>
    </header>
    <LeadSenseScrollShowcase
      title={`CSQUARED / ${eyebrow}`}
      steps={available.map(shot=>({title:shot.title,description:shot.description,eyebrow:shot.label ?? eyebrow}))}
      renderContent={(_step,index)=>{
        const shot=available[index]
        return <ShowcaseProof image={shot.image ?? ''} title={shot.title}
          eyebrow={`${shot.label ?? eyebrow} / ${String(index+1).padStart(2,'0')}`}
          description={shot.description} />
      }}
    />
  </section>
}

export default function CSquaredShowcase() {
  useScrollReveal('csq-page', '.csq-hero-content, .csq-hero-visual, .csq-proof-item, .csq-section-heading, .csq-problem-grid > article, .csq-solution-banner, .csq-build-step, .csq-journey-step, .csq-branch-note, .csq-human-review-card, .csq-architecture-row, .csq-decision, .csq-stage, .csq-demo-panel, .csq-evidence-key > div, .csq-gallery-heading, .csq-gallery-card, .csq-audit-item, .csq-value-item, .csq-bottom-cta')
  return (
    <div className="csq-page">
      <main>
        <section className="csq-hero csq-container" aria-labelledby="csq-main-title">
          <a className="csq-back" href="/#projects">← Back to portfolio</a>
          <div className="csq-hero-layout">
            <div className="csq-hero-content">
              <div className="csq-eyebrow"><span className="csq-glow-dot" /> FEATURED CASE STUDY <span className="csq-eyebrow-divider">/</span> GOHIGHLEVEL × POSTGRESQL</div>
              <p className="csq-project-name">CSQUARED <span> / Camera Rental Systems</span></p>
              <h1 id="csq-main-title">From rental inquiry to a <em>more organized operation.</em></h1>
              <p className="csq-hero-lede">I designed a camera-rental intake and operations system to structure inquiries, centralize CRM records, and reduce repetitive administrative work. From branded rental pages to a guarded internal review workflow, every step has a clear purpose: help staff work with organized information and avoid premature booking decisions.</p>
              <div className="csq-action-row">
                <a className="csq-button csq-button--primary" href="#journey">Explore the customer journey <span aria-hidden="true">↗</span></a>
                <a className="csq-button csq-button--ghost" href="https://sites.leadconnectorhq.com/preview/TxW05UaeRCIABpcu6blp?notrack=true" target="_blank" rel="noopener noreferrer">Open funnel preview <span aria-hidden="true">↗</span></a>
              </div>
              <p className="csq-hero-caveat"><span aria-hidden="true">●</span> Verified synthetic intake · Organized CRM pipelines · Human-reviewed decisions</p>
            </div>
            <div className="csq-hero-visual">
              <div className="csq-visual-toolbar"><span className="csq-visual-dots" aria-hidden="true">● ● ●</span><span>CSQUARED · project concept artwork</span><span className="csq-visual-label">SHOWCASE</span></div>
              <div className="csq-hero-art"><img src="/projects/csquared/csquared-hero-showcase.webp" alt="Concept illustration combining CSQUARED rental pages and its CRM automation design" decoding="async" /></div>
              <div className="csq-visual-footer"><span>BRANDED RENTAL OPERATIONS</span><span>Illustrative case-study artwork</span></div>
            </div>
          </div>
        </section>

        <section className="csq-proof-band" aria-label="Project scope and evidence">
          <div className="csq-container csq-proof-grid">
            {highlights.map((item) => (
              <div className="csq-proof-item" key={item.label}>
                <strong>{item.value}</strong><div><b>{item.label}</b><small>{item.note}</small></div>
              </div>
            ))}
          </div>
        </section>

        <section className="csq-section csq-container" id="challenge">
          <div className="csq-section-heading"><span className="csq-kicker">01 / THE BUSINESS PROBLEM</span><h2>Every inquiry contains decisions a simple form <span>cannot safely make.</span></h2><p>Camera rentals require more than capturing a phone number. A customer has to choose equipment, dates, timing, and handover logistics. The business needs a clear operating record before it can promise availability or accept payment.</p></div>
          <div className="csq-problem-grid">
            <article><div className="csq-icon">01</div><h3>Fragmented information</h3><p>Rental details spread across messages and forms are difficult to reconcile into one actionable customer request.</p></article>
            <article><div className="csq-icon">02</div><h3>Premature confirmation</h3><p>A form submission must not automatically mean a camera is available, a deposit is due, or a reservation exists.</p></article>
            <article><div className="csq-icon">03</div><h3>Unreliable record matching</h3><p>CRM events and form APIs may describe the same event with different IDs. Linking the wrong records can trigger the wrong actions.</p></article>
          </div>
          <div className="csq-solution-banner"><span className="csq-solution-star" aria-hidden="true">✳</span><div><span className="csq-kicker">THE DESIGN PRINCIPLE</span><h3>Capture first. Verify identity. Act only when the evidence is trustworthy.</h3><p>That principle shaped the customer-facing pages, CRM stages, guarded workflow, and private database integration.</p></div></div>
        </section>

        <section className="csq-section csq-container" id="build-process">
          <div className="csq-section-heading"><span className="csq-kicker">02 / THE BUILD PROCESS</span><h2>From rental requirements to <span>evidence-backed automation.</span></h2><p>My work covered more than page design: I translated the business process into customer screens, CRM data, guarded workflow behavior and a private integration architecture.</p></div>
          <ScrollProcessTimeline title="CSQUARED / Build process" steps={buildMilestones.map(item=>({title:item.title,detail:item.detail,eyebrow:item.phase}))}/>
        </section>

        <section className="csq-section csq-section--tint" id="journey">
          <div className="csq-container">
            <div className="csq-section-heading"><span className="csq-kicker">03 / CUSTOMER JOURNEY</span><h2>From first click to a <span>traceable request.</span></h2><p>The customer-facing process sets expectations early, while the CRM turns a request into an organized internal review. This is how the verified synthetic intake is structured.</p></div>
            <ScrollProcessTimeline title="CSQUARED / Customer journey" steps={journey.map(step=>({title:step.title,detail:step.text,eyebrow:`${step.no} / ${step.state} / ${step.label}`}))} note="Request ≠ approved booking. Human review controls commitments and payment."/>
            <div className="csq-branch-note"><span className="csq-branch-pill">MEETUP / VERIFIED SOURCE MAPPINGS</span><span className="csq-branch-pill csq-branch-pill--muted">GRABEXPRESS / FUTURE HANDOVER BRANCH</span><p>The form distinguishes Meetup from delivery options. Five Meetup source fields were verified from the Forms API evidence, supporting a clear first-phase rental intake. Delivery mapping and full opportunity-value reconciliation remain future checks.</p></div>
            <div className="csq-human-review-intro">
              <span className="csq-kicker">WHERE AUTOMATION ENDS AND GOOD JUDGMENT STARTS</span>
              <h3>Automate the handoff. <span>Keep people in control of the commitment.</span></h3>
              <p>The goal isn't to replace every staff decision. It's to collect the right details, keep the CRM organized, and place a specific review task in front of the team before anyone promises a camera, asks for payment, or confirms a booking.</p>
            </div>
            <div className="csq-human-review-grid" aria-label="Intake automation and human approval checkpoints">
              <article className="csq-human-review-card">
                <span className="csq-human-review-label">01 / CAPTURE &amp; ROUTE</span>
                <h4>What the intake system handles</h4>
                <p>In the controlled synthetic test, the form produced a CRM contact and New Inquiry opportunity. Workflow 01 checked the approved test conditions and created a traceable internal HOLD task against the native opportunity ID.</p>
                <span className="csq-review-foot">Verified using one synthetic inquiry</span>
              </article>
              <article className="csq-human-review-card">
                <span className="csq-human-review-label">02 / REVIEW &amp; DECIDE</span>
                <h4>Why an administrator checks the request</h4>
                <p>Identity documents, equipment condition and availability, requested handover arrangements, and proof of payment all require trustworthy evidence. An administrative task gives staff a defined place to check these items rather than letting a form submission authorize them.</p>
                <span className="csq-review-foot">Human approval is intentional, not a missing automated decision</span>
              </article>
              <article className="csq-human-review-card">
                <span className="csq-human-review-label">03 / APPROVE &amp; COORDINATE</span>
                <h4>What happens after a real review</h4>
                <p>Once the business confirms the renter, camera and terms, staff can coordinate the reservation and Meetup handover. Identity, payment, and fulfillment workflows are mapped as later stages—not presented here as automatically executed or live.</p>
                <span className="csq-review-foot">Booking only after explicit business approval</span>
              </article>
            </div>
          </div>
        </section>

        <section className="csq-section csq-container" id="architecture">
          <div className="csq-section-heading"><span className="csq-kicker">04 / SYSTEM ARCHITECTURE</span><h2>More than a funnel. <span>A controlled operating system.</span></h2><p>Each part answers a practical question: how does a renter submit a clear request, how does the team track it, who reviews it, and how can the same record stay consistent as the business grows?</p></div>
            <ScrollProcessTimeline title="CSQUARED / Architecture layers" steps={architecture.map(layer=>({title:layer.title,eyebrow:layer.eyebrow,detail:`${layer.description} ${layer.value}`}))} note="System layers are distinct from executed bookings: approval, payments and fulfillment remain review-controlled or future-phase activities."/>
        </section>

        <section className="csq-section csq-section--tint" id="decisions">
          <div className="csq-container"><div className="csq-section-heading"><span className="csq-kicker">05 / REDUCING ADMIN WORK</span><h2>How the system <span>reduces manual work.</span></h2><p>The goal was to simplify daily rental operations: less information chasing, clearer handoffs, fewer accidental commitments, and a reliable process for the team.</p></div>
            <div className="csq-decisions">
              {engineering.map((item) => (
                <article className="csq-decision" key={item.index}><span className="csq-decision-index">CASE {item.index}</span><div><p className="csq-decision-problem">{item.concern}</p><h3>{item.title}</h3><p>{item.approach}</p><div className="csq-decision-outcome"><strong>Business value</strong><span>{item.outcome}</span></div></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="csq-section csq-container" id="operations">
          <div className="csq-section-heading"><span className="csq-kicker">06 / CRM DESIGN</span><h2>A pipeline the team can <span>actually operate.</span></h2><p>The Sales & Booking pipeline gives the team a clear view of a request from first contact through manual review. A separate eight-stage Rental Operations pipeline maps what needs to happen once a rental is approved—so ownership and next steps do not get lost.</p></div>
          <ScrollProcessTimeline title="CSQUARED / Sales & Booking pipeline" steps={stageNames.map((name,index)=>({title:name,eyebrow:`SALES & BOOKING / STAGE ${String(index+1).padStart(2,'0')}`,detail:index===0?'The only confirmed synthetic opportunity was recorded here as New Inquiry / Open.':`Configured Sales & Booking stage ${index+1}. This is a workflow stage, not evidence of an automatically completed customer booking.`}))} note="Separate pipeline: Rental Operations has eight configured stages. Manual approvals and real booking confirmation remain human-controlled."/>
          <div className="csq-stage-foot"><span>● Verified synthetic opportunity: <strong>New Inquiry / Open</strong></span><span>Rental Operations: <strong>8 configured stages</strong></span></div>
        </section>

        <section className="csq-section csq-section--tint" id="evidence">
          <div className="csq-container">
            <div className="csq-section-heading">
              <span className="csq-kicker">07 / PROJECT EVIDENCE</span>
              <h2>Designed for renters. <span>Engineered for control.</span></h2>
              <p>See the difference between the reconstructed customer-facing screens and the native GoHighLevel implementation. Every screenshot comes from the preserved project or the new owner-provided capture set.</p>
            </div>
            <div className="csq-demo-panel">
              <div><span className="csq-kicker">BROWSE THE EXPERIENCE</span><h3>See the rental journey for yourself.</h3><p>Explore the CSQUARED funnel preview, then review the screenshots below to see how the customer experience connects to the actual GHL configuration.</p><small>The external link opens a GoHighLevel preview. It is not a live booking test; page availability depends on GHL access.</small></div>
              <a className="csq-button csq-button--primary" href="https://sites.leadconnectorhq.com/preview/TxW05UaeRCIABpcu6blp?notrack=true" target="_blank" rel="noopener noreferrer">View funnel preview <span aria-hidden="true">↗</span></a>
            </div>
            <div className="csq-evidence-key">
              <div><span className="csq-evidence-mark csq-evidence-mark--concept" /> <strong>Offline reconstructed design</strong><small>Visual preview only · not a live published funnel</small></div>
              <div><span className="csq-evidence-mark csq-evidence-mark--ghl" /> <strong>Native GoHighLevel evidence</strong><small>Actual GHL settings, stages, forms, workflows and synthetic logs</small></div>
            </div>
            <EvidenceStory items={experienceShots} number="01" eyebrow="THE CUSTOMER JOURNEY" headline="A rental experience designed for clarity." value="See how the customer moves from discovering the camera offering to understanding the requirements, costs and next steps before making a request. These are reconstructed visual previews, not proof of an active booking." />
            <EvidenceStory items={operationsShots} number="02" eyebrow="THE CRM FOUNDATION" headline="A place for every rental detail." value="The GoHighLevel configurations show how request data enters the CRM, how teams view opportunities and how structured fields remove ambiguity from day-to-day review." />
            <EvidenceStory items={automationShots} number="03" eyebrow="VALIDATION AND SAFEGUARDS" headline="Automation with accountability." value="The guarded intake and execution records illustrate the difference between a configured workflow, a verified synthetic test, and future review paths—not a promise of automatic booking." />
          </div>
        </section>

        <section className="csq-section csq-container" id="workflow-audit">
          <div className="csq-section-heading">
            <span className="csq-kicker">08 / WORKFLOW DESIGN</span>
            <h2>A customer journey mapped <span>to operational responsibility.</span></h2>
            <p>Beyond lead capture, a rental business needs dependable identity reviews, payment checks, handovers, returns and incident handling. I organized the process into dedicated workflow designs, beginning with the controlled intake and an administrative review queue.</p>
          </div>
          <div className="csq-audit-grid">
            <article className="csq-audit-item csq-audit-item--tested"><span className="csq-audit-number">01</span><span className="csq-audit-tag">Tested with synthetic data</span><h3>Inquiry intake &amp; validation HOLD</h3><p>GHL opportunity trigger, exact synthetic identity guard, successful internal task execution and no customer-facing booking action.</p></article>
            <article className="csq-audit-item"><span className="csq-audit-number">07</span><span className="csq-audit-tag">Internal review design</span><h3>Identity-review assignment</h3><p>A document-status trigger and administrator task give the team a defined point to inspect identity evidence. This workflow remains a configuration example; identity approval is not automatic.</p></article>
            <article className="csq-audit-item"><span className="csq-audit-number">→</span><span className="csq-audit-tag">Human-first safety model</span><h3>Approval before fulfillment</h3><p>The wider process defines checkpoints for payment, camera handover, inspection, and exceptions. They illustrate the planned operational handoffs; only the guarded intake has verified execution evidence.</p></article>
          </div>
        </section>

        <section className="csq-section csq-container" id="status">
          <div className="csq-section-heading"><span className="csq-kicker">09 / PROJECT VALUE</span><h2>Proof over promises. <span>What works—and what's next.</span></h2><p>Here is what the CSQUARED build gives a camera-rental team: a clearer customer experience, organized CRM records, and a solid foundation for automating more of the rental operation.</p></div>
          <div className="csq-value-grid">
            {businessValue.map((item, index) => (
              <article className="csq-value-item" key={item.title}>
                <span className="csq-value-number">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="csq-section csq-section--cta">
          <div className="csq-container csq-bottom-cta"><div><span className="csq-kicker">LET'S BUILD SOMETHING RELIABLE</span><h2>Your business needs more than connected tools. <em>It needs a system you can trust.</em></h2><p>I build GoHighLevel funnels, CRM pipelines, operational workflows, and integration logic—with attention to how data moves, what happens on failure, and what should never run without approval.</p></div><a className="csq-button csq-button--primary" href="/#contact">Discuss your project <span aria-hidden="true">↗</span></a></div>
        </section>
      </main>
    </div>
  )
}
