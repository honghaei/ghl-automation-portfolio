import LeadSenseScrollShowcase, { ShowcaseProof } from '../components/LeadSenseScrollShowcase'
import { useEffect, useState } from 'react'
import ScrollProcessTimeline from '../components/ScrollProcessTimeline'
import './FlowDeskCaseStudy.css'

type ProofCard = {
  src: string
  fullSrc?: string
  label: string
  title: string
  caption: string
  span?: 'wide' | 'tall'
}

const proofStats = [
  {
    value: '08',
    label: 'Configured GHL workflows',
    detail: 'Lifecycle logic covering ticket intake, routing, communication, and reopening.',
  },
  {
    value: '05',
    label: 'Branded email templates',
    detail: 'Structured customer-facing email communication for updates and follow-ups.',
  },
  {
    value: '01',
    label: 'Unified support pipeline',
    detail: 'A single CRM structure for intake, triage, progress, customer follow-up, and resolution.',
  },
  {
    value: 'Live',
    label: 'Core GoHighLevel verification',
    detail: 'Intake, ticket creation, and reply-aware handling were verified inside GHL.',
  },
]

const storyCards = [
  {
    heading: 'Project purpose',
    body:
      'I designed FlowDesk to bring support operations into one accountable GoHighLevel workspace. Every inquiry becomes a structured ticket with a clear reference, stage, and next action.',
  },
  {
    heading: 'Problem',
    body:
      'Support teams lose time when requests, statuses, customer responses, and follow-ups are scattered across separate inboxes and manual trackers. Ownership becomes difficult to trace.',
  },
  {
    heading: 'How I solved it',
    body:
      'I built a unified support pipeline with ticket-specific fields, category-aware routing, workflow guards, coordinated status handling, and branded customer communications.',
  },
  {
    heading: 'Why it matters',
    body:
      'The result is a coherent system design: customer intake, CRM records, communications, and evidence-backed workflow configuration are connected rather than treated as separate tasks.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Submit a support request',
    body:
      'A branded GoHighLevel form collects customer details, issue category, support type, problem description, and optional supporting links.',
  },
  {
    step: '02',
    title: 'Create and structure the ticket',
    body:
      'The request becomes a CRM opportunity inside the dedicated FlowDesk support pipeline, with ticket data stored in purpose-built custom fields.',
  },
  {
    step: '03',
    title: 'Route based on category and urgency',
    body:
      'Workflow logic evaluates the request and sends it into the appropriate operational sequence for new, urgent, in-progress, awaiting-reply, or resolved handling.',
  },
  {
    step: '04',
    title: 'Send branded communication',
    body:
      'Customers receive consistent email updates using templates designed specifically for intake confirmation, information requests, reminders, and ticket updates.',
  },
  {
    step: '05',
    title: 'Handle email replies intelligently',
    body:
      'A controlled live test verified workflow-specific email reply detection and internal review. Exact ticket and cycle attribution remains an explicit integration safeguard.',
  },
  {
    step: '06',
    title: 'Resolve or reopen with control',
    body:
      'Successful and no-response closures use distinct policy states. Seven-day reopening and automated deadline policies are implemented in the offline-tested design, not claimed as unattended live operations.',
  },
]

const buildFeatures = [
  'Built in GoHighLevel with a dedicated support pipeline and ticket-specific data model.',
  'Structured custom fields for ticket number, category, support type, issue description, attachment URL, and resolution data.',
  'Eight distinct workflows for routing, stage logic, reminders, reply handling, and controlled reopen logic.',
  'Five branded email templates aligned to ticket lifecycle communication.',
  'Screenshot evidence grouped by task so clients can inspect the actual implementation, not only the final pitch.',
  'Operational thinking applied to CRM structure, not just front-end funnel design.',
]

const crmProof: ProofCard[] = [
  {
    src: '/projects/flowdesk/support-form-showcase.webp',
    label: 'Intake design',
    title: 'Branded support request form',
    caption:
      'A polished support form collects the details a team needs at intake: who is asking, what went wrong, the assistance category, and supporting evidence.',
    span: 'tall',
  },
  {
    src: '/projects/flowdesk/crm-workflows-list.webp',
    label: 'Workflow inventory',
    title: 'Configured workflow list',
    caption:
      'Eight dedicated workflow builders divide ticket handling into clear responsibilities so changes can be inspected and maintained independently.',
    span: 'wide',
  },
  {
    src: '/projects/flowdesk/crm-pipeline-board.webp',
    label: 'Pipeline design',
    title: 'Support pipeline with ticket stages',
    caption:
      'A single pipeline gives operators a visual overview of tickets in New, Urgent, In Progress, Awaiting Reply, and Resolved stages.',
  },
  {
    src: '/projects/flowdesk/crm-pipeline-card-layout.webp',
    label: 'CRM visibility',
    title: 'Opportunity card configuration',
    caption:
      'Operators can identify relevant details at a glance instead of opening every ticket just to establish its context.',
  },
  {
    src: '/projects/flowdesk/crm-opportunity-category.webp',
    label: 'Ticket data',
    title: 'Structured opportunity details',
    caption:
      'Each ticket carries structured request details, reducing ambiguity during handoffs and follow-up.',
  },
  {
    src: '/projects/flowdesk/crm-custom-fields.webp',
    label: 'Custom schema',
    title: 'Custom fields built for support operations',
    caption:
      'Support-specific fields form the data model behind routing decisions, ticket references, issue context, and resolution evidence.',
  },
  {
    src: '/projects/flowdesk/crm-tags.webp',
    label: 'Routing assets',
    title: 'Tag structure for workflow support',
    caption:
      'Tags provide explicit classification and test-safety guards to help keep the correct automation path in scope.',
  },
  {
    src: '/projects/flowdesk/crm-opportunity-resolved.webp',
    label: 'Ticket record',
    title: 'Resolved ticket example',
    caption:
      'A resolved CRM record retains the issue context and outcome, supporting traceability beyond the initial conversation.',
  },
  {
    src: '/projects/flowdesk/crm-backup-snapshot.webp',
    label: 'System preservation',
    title: 'Snapshot / backup evidence',
    caption:
      'A snapshot inventory shows how the configuration can be documented and handed over rather than existing only as an undocumented demo.',
  },
]

const workflowProof: ProofCard[] = [
  {
    src: '/projects/flowdesk/workflow-01-intake-router.webp',
    fullSrc: '/projects/flowdesk/hd/workflow-01-full.png',
    label: 'Workflow 01',
    title: 'Intake Router',
    caption:
      'Validates approved intake, checks for eligible active tickets, records follow-ups, and creates a New/Open opportunity only when appropriate.',
    span: 'wide',
  },
  {
    src: '/projects/flowdesk/workflow-02-new-sequence.webp',
    fullSrc: '/projects/flowdesk/hd/workflow-02-full.png',
    label: 'Workflow 02',
    title: 'New Sequence',
    caption:
      'Assigns the native opportunity ID as the ticket reference and applies category tags using guarded comparisons.',
    span: 'tall',
  },
  {
    src: '/projects/flowdesk/workflow-03-urgent-sequence.webp',
    fullSrc: '/projects/flowdesk/hd/workflow-03-full.png',
    label: 'Workflow 03',
    title: 'Urgent Sequence',
    caption:
      'Uses Urgent/Open stage checks and ticket-reference conditions to notify the support owner of priority handling.',
  },
  {
    src: '/projects/flowdesk/workflow-04-in-progress.webp',
    fullSrc: '/projects/flowdesk/hd/workflow-04-full.png',
    label: 'Workflow 04',
    title: 'In Progress Sequence',
    caption:
      'Validates the ticket stage and sends internal progress notifications without allowing unrelated tickets to move through the wrong branch.',
  },
  {
    src: '/projects/flowdesk/workflow-05-awaiting-reply.webp',
    fullSrc: '/projects/flowdesk/hd/workflow-05-full.png',
    label: 'Workflow 05',
    title: 'Awaiting Reply Sequence',
    caption:
      'Separates a customer reply from a three-day timeout and preserves five-day closure-review logic. Unattended reminder/closure actions remain gated.',
    span: 'tall',
  },
  {
    src: '/projects/flowdesk/workflow-06-resolved.webp',
    fullSrc: '/projects/flowdesk/hd/workflow-06-full.png',
    label: 'Workflow 06',
    title: 'Resolved Sequence',
    caption:
      'Distinguishes Resolved/Won from Resolved/Abandoned, requiring a real resolution for successful closure reporting.',
  },
  {
    src: '/projects/flowdesk/workflow-07-reply-handler.webp',
    fullSrc: '/projects/flowdesk/hd/workflow-07-full.png',
    label: 'Workflow 07',
    title: 'Reply Handler',
    caption:
      'Detects replies to the designated workflow email in a controlled test and notifies the owner for exact-ticket review.',
  },
  {
    src: '/projects/flowdesk/workflow-08-reopen-window.webp',
    fullSrc: '/projects/flowdesk/hd/workflow-08-full.png',
    label: 'Workflow 08',
    title: 'Reopen Window',
    caption:
      'Marks a seven-day review checkpoint after closure; exact-ticket automatic reopening remains approval-gated until verified.',
  },
]

const emailProof: ProofCard[] = [
  {
    src: '/projects/flowdesk/email-01-ticket-received.webp',
    label: 'Email 01',
    title: 'Ticket received',
    caption:
      'Acknowledges receipt with a clear ticket number, helping customers and staff refer to the same request.',
  },
  {
    src: '/projects/flowdesk/email-02-additional-info.webp',
    label: 'Email 02',
    title: 'Additional information needed',
    caption:
      'Highlights the specific missing information and invites a direct reply, avoiding vague back-and-forth messages.',
  },
  {
    src: '/projects/flowdesk/email-03-ticket-resolved.webp',
    label: 'Email 03',
    title: 'Ticket resolved',
    caption:
      'Communicates the recorded resolution in a consistent, reassuring branded format, with the relevant ticket reference.',
  },
  {
    src: '/projects/flowdesk/email-04-awaiting-reply-reminder.webp',
    label: 'Email 04',
    title: 'Awaiting reply reminder',
    caption:
      'Provides a purpose-built follow-up for unanswered information requests; live automatic reminder sending has not been enabled.',
  },
  {
    src: '/projects/flowdesk/email-05-added-to-existing-ticket.webp',
    label: 'Email 05',
    title: 'Reply added to existing ticket',
    caption:
      'Acknowledges that additional details have been captured for an existing ticket and are ready for team review.',
  },
]

const logProof: ProofCard[] = [
  {
    src: '/projects/flowdesk/log-07-intake-router.webp',
    label: 'Execution log',
    title: 'Intake Router log',
    caption:
      'An execution trail confirms that native intake conditions and actions were exercised during controlled tests.',
  },
  {
    src: '/projects/flowdesk/log-06-new-sequence.webp',
    label: 'Execution log',
    title: 'New Sequence log',
    caption:
      'New-ticket test history demonstrates that routing and opportunity-level actions can be inspected after execution.',
  },
  {
    src: '/projects/flowdesk/log-05-urgent-sequence.webp',
    label: 'Execution log',
    title: 'Urgent Sequence log',
    caption:
      'Urgent sequence history provides an audit trail for the priority-handling checks exercised in testing.',
  },
  {
    src: '/projects/flowdesk/log-04-in-progress.webp',
    label: 'Execution log',
    title: 'In Progress Sequence log',
    caption:
      'In Progress execution records help verify stage-specific review handling without inferring undocumented customer outcomes.',
  },
  {
    src: '/projects/flowdesk/log-03-awaiting-reply.webp',
    label: 'Execution log',
    title: 'Awaiting Reply Sequence log',
    caption:
      'Email 02 execution and the native wait are visible in execution history for the controlled synthetic conversation.',
  },
  {
    src: '/projects/flowdesk/log-02-resolved-sequence.webp',
    label: 'Execution log',
    title: 'Resolved Sequence log',
    caption:
      'Resolution workflow logs provide evidence of the exercised workflow path and its stage conditions.',
  },
  {
    src: '/projects/flowdesk/log-01-reply-handler.webp',
    label: 'Execution log',
    title: 'Reply Handler log',
    caption:
      'The live synthetic reply triggered the workflow-specific Reply Handler and its internal review notification.',
  },
]

/** One large screenshot with meaningful, selectable documentation instead of a card wall. */
/** LeadSense-style evidence display: normal page scrolling, active proof on the right. */
function EvidenceExplorer({ items, onOpen, layout = 'regular' }: {
  items: ProofCard[]
  onOpen: (card: ProofCard) => void
  layout?: 'regular' | 'email' | 'logs'
}) {
  return <LeadSenseScrollShowcase
    className={`fd-lss-evidence fd-lss-evidence--${layout}`}
    title={layout === 'email' ? 'FlowDesk / Customer communication' : layout === 'logs' ? 'FlowDesk / Execution evidence' : 'FlowDesk / CRM evidence'}
    steps={items.map(item=>({title:item.title,description:item.caption,eyebrow:item.label}))}
    renderContent={(_step, index) => {
      const item=items[index]
      return <ShowcaseProof
        image={item.src} fullImage={item.fullSrc} title={item.title}
        description={item.caption} eyebrow={`${item.label} / ${String(index+1).padStart(2,'0')} of ${items.length}`}
        onOpen={()=>onOpen(item)}
      />
    }}
  />
}

const workflowChapters = [
  {
    no: '01', phase: 'Intake and classification', title: 'Every request starts with a traceable ticket.',
    pitch: 'A CRM is valuable only when the first record is reliable. These builders establish the ticket and organize it for the right operational team.',
    items: workflowProof.slice(0, 2),
    results: ['Approved inquiry validation', 'Existing-ticket lookup', 'Native ticket reference and category routing'],
  },
  {
    no: '02', phase: 'Operations and escalation', title: 'Make progress visible. Make urgency actionable.',
    pitch: 'Different ticket stages should lead to different responsibilities. These workflows keep urgent work and normal in-progress support distinct.',
    items: workflowProof.slice(2, 4),
    results: ['Urgency-specific conditions', 'Operator notifications', 'Stage and status checks'],
  },
  {
    no: '03', phase: 'Conversation and resolution', title: 'Customer communication stays connected to the ticket.',
    pitch: 'An information request is not simply another email. The system needs question context, reply-aware branches, and separate successful versus no-response closure decisions.',
    items: workflowProof.slice(4, 6),
    results: ['Reply-versus-timeout branch', '72/120-hour review checkpoints', 'Distinct resolution and abandonment rules'],
  },
  {
    no: '04', phase: 'Reply review and reopening', title: 'Follow-up needs evidence, not guesses.',
    pitch: 'Customer replies and post-closure activity require safeguards. This final pair captures workflow-specific responses and preserves a controlled review window.',
    items: workflowProof.slice(6, 8),
    results: ['Workflow-specific email reply detection', 'Internal review notifications', 'Seven-day reopen review checkpoint'],
  },
]

function WorkflowPhase({ chapter, chapterIndex, onOpen }: { chapter: typeof workflowChapters[number]; chapterIndex: number; onOpen: (item: ProofCard) => void }) {
  return <section className={`fd-workflow-chapter fd-lss-chapter${chapterIndex % 2 ? ' is-reversed' : ''}`} key={chapter.no}>
    <header className="fd-workflow-chapter-head">
      <div><span>{chapter.no} / {chapter.phase}</span><h4>{chapter.title}</h4></div>
      <p>{chapter.pitch}</p>
    </header>
    <LeadSenseScrollShowcase
      title={`FlowDesk / ${chapter.phase}`}
      steps={chapter.items.map(item=>({title:item.title,description:item.caption,eyebrow:item.label}))}
      renderContent={(_step, index) => {
        const item=chapter.items[index]
        return <div className="fd-lss-workflow-proof">
          <ShowcaseProof image={item.src} fullImage={item.fullSrc}
            title={item.title} description={item.caption} eyebrow={item.label}
            onOpen={()=>onOpen(item)} />
          <details className="fd-lss-workflow-details">
            <summary>Configuration highlights</summary>
            <ul>{chapter.results.map(result=><li key={result}>{result}</li>)}</ul>
          </details>
        </div>
      }}
    />
  </section>
}

function WorkflowChapters({ onOpen }: { onOpen: (item: ProofCard) => void }) {
  return <div className="fd-workflow-chapters">
    {workflowChapters.map((chapter, index) => <WorkflowPhase key={chapter.no} chapter={chapter} chapterIndex={index} onOpen={onOpen} />)}
  </div>
}

export default function FlowDeskCaseStudy() {
  const [activeProof, setActiveProof] = useState<ProofCard | null>(null)
  const [zoom, setZoom] = useState(1)
  const [fitEntire, setFitEntire] = useState(true)
  const [naturalWidth, setNaturalWidth] = useState(1600)

  useEffect(() => {
    if (!activeProof) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProof(null)
    }
    window.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeProof])

  const openProof = (card: ProofCard) => {
    setZoom(1)
    setNaturalWidth(1600)
    setFitEntire(true)
    setActiveProof(card)
  }

  return (
    <main className="fd-case-page">
      <section className="fd-case-shell fd-hero">
        <a className="fd-back-link" href="/#projects">
          ← Back to portfolio
        </a>

        <div className="fd-hero-grid">
          <div className="fd-hero-copy">
            <p className="fd-eyebrow">Flagship case study / built in GoHighLevel</p>
            <h1>Support operations, built as a system.</h1>
            <p className="fd-lead">
              FlowDesk is my flagship GoHighLevel build — a support ticketing and
              automation system designed to turn incoming requests into structured CRM
              records, route them through defined operational stages, and keep communication
              consistent through branded, reply-aware workflows.
            </p>

            <div className="fd-hero-pills">
              <span>GoHighLevel</span>
              <span>Support ticketing</span>
              <span>CRM workflow design</span>
              <span>Operational automation</span>
            </div>

            <div className="fd-hero-actions">
              <a className="fd-btn fd-btn--primary" href="#fd-evidence">
                Review project evidence ↗
              </a>
              <a className="fd-btn fd-btn--secondary" href="#fd-architecture">
                See how the system works
              </a>
            </div>

            <p className="fd-note">
              Marketed as a portfolio system, but grounded in real build evidence: workflow
              configuration, pipeline structure, branded communication, and execution logs.
            </p>
          </div>

          <div className="fd-hero-visual">
            <img src="/projects/flowdesk/flowdesk-cover.webp" alt="FlowDesk conceptual brand showcase of a GoHighLevel-native support ticketing system" />
            <div className="fd-hero-visual-meta">
              <span>Flagship project cover · conceptual visual</span>
              <strong>Actual GoHighLevel evidence appears below</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="fd-case-shell fd-stats-section">
        <div className="fd-section-heading">
          <p className="fd-section-kicker">Why this project matters</p>
          <h2>A stronger signal for clients who need systems, not just pages.</h2>
          <p>
            FlowDesk positions me as someone who can work at the process level: designing
            CRM structures, workflow logic, communication flows, and operational handling
            inside GoHighLevel.
          </p>
        </div>

        <div className="fd-impact-band">
          <div className="fd-impact-lead">
            <span>ONE CONNECTED OPERATION</span>
            <strong>Built beyond the funnel.</strong>
            <p>Ticket intake, pipeline records, email communication, and lifecycle decisions were designed to work together.</p>
          </div>
          <div className="fd-impact-metrics">
            {proofStats.map((stat) => (
              <div className="fd-impact-metric" key={stat.label}>
                <strong>{stat.value}</strong>
                <div><h3>{stat.label}</h3><p>{stat.detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fd-case-shell fd-story-section">
        <div className="fd-section-heading fd-story-intro">
          <p className="fd-section-kicker">From business problem to system design</p>
          <h2>A support operation designed with intent.</h2>
          <p>Rather than adding disconnected automations, I mapped the customer request, the internal decision points, and the evidence needed at each stage.</p>
        </div>
        <div className="fd-story-editorial">
          <div className="fd-story-spotlight">
            <span>01 / {storyCards[0].heading}</span>
            <h3>One place for every support request.</h3>
            <p>{storyCards[0].body}</p>
            <div className="fd-story-route"><span>REQUEST</span><b>→</b><span>TICKET</span><b>→</b><span>RESOLUTION</span></div>
          </div>
          <div className="fd-story-chapters">
            {storyCards.slice(1).map((card, index) => (
              <article className="fd-story-chapter" key={card.heading}>
                <span>{String(index + 2).padStart(2, '0')}</span>
                <div><h3>{card.heading}</h3><p>{card.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fd-case-shell fd-process-section" id="fd-architecture">
        <div className="fd-section-heading">
          <p className="fd-section-kicker">How it works</p>
          <h2>The GoHighLevel support journey, step by step.</h2>
          <p>
            The system was designed around a clear operational flow so support requests do
            not stay as loose messages — they become manageable tickets with defined
            handling logic.
          </p>
        </div>

        <ScrollProcessTimeline title="FlowDesk / Support lifecycle" steps={processSteps.map(step=>({title:step.title,detail:step.body,eyebrow:`STEP ${step.step} / OPERATIONS`}))} note="Native CRM evidence is distinguished from configured, offline-tested and integration-gated automation."/>
      </section>

      <section className="fd-case-shell fd-build-section">
        <div className="fd-section-heading">
          <p className="fd-section-kicker">What I built</p>
          <h2>Implementation scope inside GoHighLevel.</h2>
          <p>
            The implementation connects customer intake, the CRM data model, communication templates,
            and state-aware workflows. Each component was designed for a specific operating responsibility.
          </p>
        </div>

        <div className="fd-build-editorial">
          <aside className="fd-build-feature">
            <span>TECHNICAL APPROACH</span>
            <h3>One platform. Multiple operational layers.</h3>
            <p>GoHighLevel connects the visible customer experience with the behind-the-scenes ticketing decisions.</p>
            <div className="fd-build-feature-tags"><span>CRM</span><span>WORKFLOWS</span><span>EMAIL</span><span>VALIDATION</span></div>
          </aside>
          <ol className="fd-build-list">
            {buildFeatures.map((feature, index) => (
              <li className="fd-build-item" key={feature}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{feature}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fd-case-shell fd-evidence-section" id="fd-evidence">
        <div className="fd-section-heading">
          <p className="fd-section-kicker">Inside the build / GoHighLevel evidence</p>
          <h2>Not just a concept. Here is how the system is built.</h2>
          <p>Explore the actual CRM structure, automation builders, email communications, and execution history. Each chapter explains the business responsibility behind the implementation.</p>
        </div>

        <nav className="fd-evidence-jump" aria-label="FlowDesk implementation chapters">
          <a href="#fd-intake">01 / CRM foundation</a>
          <a href="#fd-workflows">02 / Automation workflows</a>
          <a href="#fd-emails">03 / Branded communication</a>
          <a href="#fd-validation">04 / Execution evidence</a>
        </nav>

        <section className="fd-evidence-chapter" id="fd-intake">
          <div className="fd-evidence-chapter-heading">
            <div><span>01 / CUSTOMER INTAKE AND OPERATIONS</span><h3>From a support inquiry to an organized CRM record.</h3></div>
            <p>I designed the customer-facing intake and internal ticket structure together. A team receives clean request details rather than manually reconstructing issues from scattered messages.</p>
          </div>
          <ScrollProcessTimeline title="FlowDesk / Customer intake to CRM" steps={[
            {title:'Customer request',eyebrow:'01 / CAPTURE',detail:'The branded support form records the issue, contact, category and available supporting information.'},
            {title:'Guarded routing',eyebrow:'02 / CLASSIFY',detail:'Category, support type and duplicate-ticket checks determine the appropriate internal handling path.'},
            {title:'Native opportunity ID',eyebrow:'03 / RECORD',detail:'A native CRM opportunity provides the traceable ticket identifier; the controlled test verifies the eligible intake path.'},
            {title:'Support team review',eyebrow:'04 / OPERATE',detail:'Pipeline stages, custom fields and execution evidence let the team inspect the current state without asserting unverified live automation.'},
          ]} note="Configured workflows and controlled synthetic tests are identified separately; no outbound customer communications are claimed as live."/>
          <div className="fd-crm-evidence-intro" aria-labelledby="fd-crm-evidence-title">
            <div className="fd-crm-evidence-intro-heading">
              <p className="fd-crm-evidence-kicker">CRM DESIGN / 07 SCREEN WALKTHROUGH</p>
              <h3 id="fd-crm-evidence-title">Inside the CRM: <span>Pipeline design &amp; configuration.</span></h3>
            </div>
            <p className="fd-crm-evidence-intro-copy">
              The four intake steps above explain how a support request becomes a ticket.
              Next is a <strong>separate seven-screen walkthrough</strong> of the actual
              GoHighLevel CRM — beginning with <strong>01 / Pipeline design</strong>.
              The numbering below identifies CRM screenshots, not a restart of the intake process.
            </p>
          </div>
          <EvidenceExplorer items={crmProof.filter(item => item.title !== 'Configured workflow list' && item.title !== 'Branded support request form')} onOpen={openProof} />
          <p className="fd-evidence-footnote">The separate automation builder inventory appears in the workflow chapter below, alongside the actual workflow logic.</p>
        </section>

        <section className="fd-evidence-chapter" id="fd-workflows">
          <div className="fd-evidence-chapter-heading">
            <div><span>02 / WORKFLOW AUTOMATION</span><h3>Eight workflows. Four operational responsibilities.</h3></div>
            <p>Instead of one oversized automation, I separated intake, escalation, communication, and review into dedicated GoHighLevel workflows. This makes each responsibility easier to reason about, inspect, and extend.</p>
          </div>
          <div className="fd-workflow-inventory">
            <div><span>THE WORKFLOW FOUNDATION</span><h4>Eight purpose-built GHL workflows, one support operation.</h4><p>The workflow inventory provides an overview of the dedicated automations. Explore the four chapters below to see what each builder is responsible for.</p></div>
            <button type="button" onClick={() => openProof(crmProof[1])} aria-label="Inspect the GoHighLevel workflow inventory"><img src="/projects/flowdesk/crm-workflows-list.webp" alt="GoHighLevel workflow inventory" loading="lazy" /><span>View workflow inventory ↗</span></button>
          </div>
          <WorkflowChapters onOpen={openProof} />
        </section>

        <section className="fd-evidence-chapter" id="fd-emails">
          <div className="fd-evidence-chapter-heading">
            <div><span>03 / CUSTOMER COMMUNICATION</span><h3>Every support update feels like one brand.</h3></div>
            <p>The support experience continues after the form is submitted. I designed five purpose-built email templates with ticket references, clear requests, consistent visual hierarchy, and direct next steps.</p>
          </div>
          <ScrollProcessTimeline title="FlowDesk / Customer communication" steps={[
            {title:'Acknowledge',detail:'Confirm the ticket has been received and provide its reference.'},
            {title:'Clarify',detail:'Request missing information before advancing the support decision.'},
            {title:'Follow up',detail:'Record a reply or request further action against the correct ticket.'},
            {title:'Resolve',detail:'Communicate the outcome under controlled closure rules.'},
          ]} note="The configured templates and controlled test evidence do not imply unattended live sending."/>
          <EvidenceExplorer items={emailProof} onOpen={openProof} layout="email" />
          <div className="fd-delivery-evidence">
            <button type="button" onClick={() => openProof({src:'/projects/flowdesk/email-delivery-gmail.webp',label:'Controlled delivery evidence',title:'Information request delivered to Gmail',caption:'Actual email evidence from the controlled synthetic test.'})}>
              <img src="/projects/flowdesk/email-delivery-gmail.webp" alt="FlowDesk controlled support email delivered to Gmail" loading="lazy" />
              <span>View genuine delivery evidence ↗</span>
            </button>
            <div><span>TESTED IN A REAL INBOX</span><h4>Designed, configured, and delivered.</h4><p>The information-request path was tested with a synthetic ticket, rendering its ticket number and requested details in Gmail. This validates that specific supervised delivery, not every future unattended send.</p></div>
          </div>
        </section>

        <section className="fd-evidence-chapter" id="fd-validation">
          <div className="fd-evidence-chapter-heading">
            <div><span>04 / EXECUTION AND VERIFICATION</span><h3>A workflow diagram is only the beginning.</h3></div>
            <p>My implementation process includes checking how a workflow actually executes. These logs show the configuration being exercised inside GoHighLevel, while separate offline tests validate additional lifecycle and safety rules.</p>
          </div>
          <EvidenceExplorer items={logProof} onOpen={openProof} layout="logs" />
          <div className="fd-verification-note"><strong>What is verified</strong><p>Controlled native intake and reply-handling tests, workflow execution history, and a passing offline policy suite. Automatic ticket-cycle association, unattended closure, and reopening remain integration-gated.</p></div>
        </section>
      </section>

      <section className="fd-case-shell fd-closing-section">
        <div className="fd-closing-card">
          <div>
            <p className="fd-section-kicker">Have a business process you want to automate?</p>
            <h2>Need a system like FlowDesk for your business?</h2>
            <p>Tell me what your team handles today, where the manual work happens, and what you want to improve. I can help design and build a GoHighLevel solution around your actual process — from CRM pipelines and forms to workflows, customer communication, and operational handoffs.</p>
          </div>
          <a className="fd-btn fd-btn--primary" href="mailto:latcharlesjacob@gmail.com?subject=GoHighLevel%20System%20Inquiry">
            Discuss your project ↗
          </a>
        </div>
      </section>
      {activeProof && (
        <div className="fd-lightbox" role="dialog" aria-modal="true" aria-label={`Evidence viewer: ${activeProof.title}`}>
          <div className="fd-lightbox-header">
            <div>
              <span>{activeProof.label}</span>
              <strong>{activeProof.title}</strong>
            </div>
            <div className="fd-lightbox-tools">
              <button type="button" onClick={() => setFitEntire(true)} aria-pressed={fitEntire}>Fit entire</button>
              <button type="button" onClick={() => {setFitEntire(false);setZoom(1)}}>100% pixels</button>
              <button type="button" onClick={() => {setFitEntire(false);setZoom((z) => Math.max(0.25, Number((z - 0.25).toFixed(2))))}} aria-label="Zoom out">−</button>
              <span>{fitEntire ? "Fit" : `${Math.round(zoom * 100)}%`}</span>
              <button type="button" onClick={() => {setFitEntire(false);setZoom((z) => Math.min(3, Number((z + 0.25).toFixed(2))))}} aria-label="Zoom in">+</button>
              <button type="button" onClick={() => {setZoom(1);setFitEntire(true)}}>Reset</button>
              <button type="button" className="fd-lightbox-close" onClick={() => setActiveProof(null)} aria-label="Close image viewer">×</button>
            </div>
          </div>
          <div className="fd-lightbox-scroll" tabIndex={0}>
            <img className={fitEntire ? "fd-lightbox-image--fit" : "fd-lightbox-image--pixels"} src={activeProof.fullSrc ?? activeProof.src} alt={activeProof.title} onLoad={(event) => setNaturalWidth(event.currentTarget.naturalWidth)} style={fitEntire ? undefined : { width: `${naturalWidth * zoom}px` }} />
          </div>
          <p className="fd-lightbox-caption">{activeProof.caption} · Fit entire shows the complete builder; 100% pixels and zoom let you inspect details. Press Escape to close.</p>
        </div>
      )}
    </main>
  )
}
