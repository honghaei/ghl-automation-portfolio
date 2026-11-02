import { Link } from 'react-router-dom'
import ScrollProcessTimeline from '../components/ScrollProcessTimeline'
import { useEffect, useRef, useState } from 'react'
import './LeadSensePremium.css'

const liveUrl = 'https://leadsense-ai-research.netlify.app/demo/'

const metrics = [
  { value: '12,330', label: 'Historical shopping sessions', note: 'Real labeled UCI dataset' },
  { value: '0.6946', label: 'ROC-AUC', note: '0.5000 constant baseline' },
  { value: '0.2644', label: 'Average precision', note: '0.1549 prevalence baseline' },
  { value: '0.1238', label: 'Brier score', note: '0.1309 baseline · lower is better' },
]

const capabilities = [
  {
    no: '01',
    title: 'Interactive Session Explorer',
    body: 'A searchable workspace for inspecting validated shopping-session CSV data without inventing customer records or outcome labels.',
  },
  {
    no: '02',
    title: 'Single-Session Input Studio',
    body: 'An eight-feature input interface connected to strict server-side validation. Research inputs can be verified without exposing experimental prediction scores.',
  },
  {
    no: '03',
    title: 'Batch CSV Validation',
    body: 'Structured file imports with exact-column validation and clear feedback for supported shopping-session inputs.',
  },
  {
    no: '04',
    title: 'Model Performance Insights',
    body: 'Verified held-out evaluation, baseline comparisons and probability-calibration diagnostics presented in an accessible dashboard.',
  },
  {
    no: '05',
    title: 'Technical Research Documentation',
    body: 'A transparent record of dataset provenance, modeling decisions, limitations and the conditions required before any production prediction release.',
  },
  {
    no: '06',
    title: 'Full-Stack Production Deployment',
    body: 'A responsive Next.js web application backed by FastAPI, deployed through Netlify and Render with guarded public inference routes.',
  },
]

const gallery = [
  { title: 'Research Overview', detail: 'Real historical data, model performance and research status', src: '/projects/leadsense/overview.webp' },
  { title: 'Model Insights', detail: 'Holdout evaluation and baseline comparisons', src: '/projects/leadsense/model-insights.webp' },
  { title: 'Session Explorer', detail: 'Validated CSV records and session exploration', src: '/projects/leadsense/session-explorer.webp' },
  { title: 'Documentation', detail: 'Research methodology and product guidance', src: '/projects/leadsense/documentation.webp' }
]

const workflow = [
  ['Dataset audit', '12,330 historical e-commerce sessions; purchase-outcome distribution reviewed'],
  ['Feature engineering', 'Eight context-only inputs selected to reduce leakage risk'],
  ['Model research', 'Logistic regression with sigmoid probability calibration'],
  ['Holdout evaluation', 'One-time assessment on 1,233 held-out sessions'],
  ['API development', 'FastAPI input validation, research summaries and route safeguards'],
  ['Product deployment', 'Next.js frontend on Netlify and FastAPI backend on Render'],
]

export default function LeadSenseCaseStudy() {
  const [activeArea, setActiveArea] = useState<'research' | 'experience' | 'delivery'>('research')
  const [activeShot, setActiveShot] = useState(0)
  const capabilityScrollRef = useRef<HTMLDivElement | null>(null)
  const evidenceScrollRef = useRef<HTMLDivElement | null>(null)
  const areas = {
    research: [capabilities[3], capabilities[4]],
    experience: [capabilities[0], capabilities[1]],
    delivery: [capabilities[2], capabilities[5]],
  }
  useEffect(() => {
    const track = capabilityScrollRef.current
    if (!track) return
    let frame = 0
    const update = () => {
      frame = 0
      const steps = [...track.querySelectorAll<HTMLElement>('[data-capability-step]')]
      const navbarHeight = document.querySelector<HTMLElement>('.portfolio-navbar-wrap')?.getBoundingClientRect().height ?? 110
      const focusLine = navbarHeight + (window.innerHeight - navbarHeight) * 0.5
      let chosen: 'research' | 'experience' | 'delivery' = 'research'
      let closest = Number.POSITIVE_INFINITY
      for (const step of steps) {
        const rect = step.getBoundingClientRect()
        const distance = rect.top <= focusLine && rect.bottom >= focusLine
          ? 0
          : Math.min(Math.abs(rect.top - focusLine), Math.abs(rect.bottom - focusLine))
        if (distance < closest) {
          closest = distance
          chosen = step.dataset.capabilityStep as typeof chosen
        }
      }
      setActiveArea(previous => previous === chosen ? previous : chosen)
    }
    const queueUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    window.addEventListener('scroll', queueUpdate, { passive: true })
    window.addEventListener('resize', queueUpdate)
    queueUpdate()
    return () => {
      window.removeEventListener('scroll', queueUpdate)
      window.removeEventListener('resize', queueUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const track = evidenceScrollRef.current
    if (!track) return
    let frame = 0
    const update = () => {
      frame = 0
      const steps = Array.from(track.querySelectorAll<HTMLElement>('[data-evidence-step]'))
      const navbarHeight = document.querySelector<HTMLElement>('.portfolio-navbar-wrap')?.getBoundingClientRect().height ?? 110
      const focusLine = navbarHeight + (window.innerHeight - navbarHeight) * 0.5
      let next = 0
      let closest = Number.POSITIVE_INFINITY
      for (const step of steps) {
        const rect = step.getBoundingClientRect()
        const distance = rect.top <= focusLine && rect.bottom >= focusLine
          ? 0 : Math.min(Math.abs(rect.top - focusLine), Math.abs(rect.bottom - focusLine))
        if (distance < closest) {
          closest = distance
          next = Number(step.dataset.evidenceStep ?? 0)
        }
      }
      setActiveShot(previous => previous === next ? previous : next)
    }
    const queue = () => { if (!frame) frame = window.requestAnimationFrame(update) }
    window.addEventListener('scroll', queue, { passive: true })
    window.addEventListener('resize', queue)
    queue()
    return () => {
      window.removeEventListener('scroll', queue)
      window.removeEventListener('resize', queue)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <main className="lsp-page">
      <div className="lsp-shell">
        <Link className="lsp-back" to="/#development-projects">
          {String.fromCharCode(8592)} Back to development projects
        </Link>

        <section className="lsp-hero">
          <div className="lsp-hero-copy">
            <div className="lsp-eyebrow">AI &amp; ML ENGINEERING / CASE STUDY</div>
            <h1>LeadSense <span>AI.</span></h1>
            <h2>From historical data to a live, evidence-backed machine learning product.</h2>
            <p className="lsp-lead">
              I built LeadSense AI to demonstrate what it takes to move beyond
              an experimental model and engineer the full product around it.
              Starting with real, imbalanced e-commerce session data, I
              developed the research pipeline, validated its performance,
              built the Python API, and delivered an interactive web workspace
              that makes complex machine learning results understandable.
            </p>
            <p className="lsp-lead-secondary">
              Visitors can try the interactive research workspace themselves:
              explore real session records, enter sample session data, and
              validate inputs through the connected application. The product
              is ready to demonstrate model research and input handling;
              public prediction scores remain disabled until release checks are complete.
            </p>
            <div className="lsp-tags">
              {['Python','FastAPI','scikit-learn','Next.js','TypeScript','Netlify','Render'].map(t =>
                <span key={t}>{t}</span>
              )}
            </div>
            <div className="lsp-actions">
              <a className="lsp-primary" href={liveUrl} target="_blank" rel="noopener noreferrer">
                Try the Interactive Workspace {'\u2197'}
              </a>
              <a className="lsp-secondary" href="#engineering">
                See How I Built It &darr;
              </a>
            </div>
            <div className="lsp-live-invite">
              <strong>Try it yourself — without creating an account.</strong>
              <p>Open the live workspace to examine model results, explore shopping sessions, and test the input-validation experience. Individual purchase predictions are intentionally not public yet.</p>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">Launch the research demo ↗</a>
            </div>
          </div>

          <aside className="lsp-hero-aside">
            <div className="lsp-logo-panel">
              <img
                src="/projects/leadsense/leadsense-ai-logo.png"
                alt="LeadSense AI brand logo"
              />
            </div>
            <div className="lsp-status-kicker">PROJECT STATUS</div>
            <h3>Live Research Workspace</h3>
            <p>
              Deployed web experience, connected Python API, verified model
              evaluation, structured data validation and public technical documentation.
            </p>
            <div className="lsp-status-points">
              <span><i /> Frontend deployed</span>
              <span><i /> API connected</span>
              <span><i /> Research evaluated</span>
            </div>
          </aside>
        </section>

        <section className="lsp-impact">
          <div>
            <span className="lsp-eyebrow">THE ENGINEERING VALUE</span>
            <h2>More than a trained model.</h2>
            <p>
              LeadSense AI showcases my ability to own an AI application
              from research to release: analyzing data, building and testing
              the backend, designing the user experience, resolving deployment
              issues and documenting what the system can genuinely prove.
            </p>
          </div>
          <div className="lsp-impact-highlights">
            <strong>End-to-end ownership</strong>
            <strong>Full-stack ML engineering</strong>
            <strong>Verified research evidence</strong>
          </div>
        </section>

        <section className="lsp-section">
          <div className="lsp-section-heading">
            <div>
              <span className="lsp-eyebrow">VERIFIED RESEARCH RESULTS</span>
              <h2>Performance backed by real evaluation.</h2>
            </div>
            <p>
              These are genuine results from historical research, not fictional
              sales predictions, simulated customers or claimed production outcomes.
            </p>
          </div>
          <div className="lsp-metric-grid">
            {metrics.map(metric => (
              <article className="lsp-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>
          <div className="lsp-research-detail">
            <div><strong>1,233</strong><span>Final holdout sessions</span></div>
            <div><strong>0.0188</strong><span>Expected calibration error</span></div>
            <div><strong>31.45%</strong><span>Top-decile precision</span></div>
          </div>
        </section>

        <section className="lsp-section" id="engineering">
          <div className="lsp-section-heading">
            <div>
              <span className="lsp-eyebrow">THE BUILD</span>
              <h2>One product. Multiple engineering disciplines.</h2>
            </div>
            <p>
              I connected the research process to a real, usable application
              instead of leaving the results inside a notebook.
            </p>
          </div>
          <ScrollProcessTimeline title="LeadSense AI / Research to delivery" steps={workflow.map(([title, detail], index)=>({title,detail,eyebrow:`ENGINEERING PHASE ${String(index+1).padStart(2,'0')}`}))} note="Public prediction scores remain guarded pending release checks."/>
        </section>

        <section className="lsp-section">
          <div className="lsp-section-heading">
            <div>
              <span className="lsp-eyebrow">APPLICATION CAPABILITIES</span>
              <h2>Built for exploration, validation and clarity.</h2>
            </div>
          </div>
          <p className="lsp-scroll-instruction">Scroll through the three engineering layers. The selected capabilities update as each stage enters view.</p>
          <div className="lsp-capability-editorial lsp-capability-scrollscape" ref={capabilityScrollRef}>
            <div className="lsp-capability-selectors" aria-label="Capabilities revealed through scrolling">
              {([
                ['research', '01', 'Research & evaluation', 'Understand the model and its evidence.'],
                ['experience', '02', 'Interactive product', 'Explore sessions and test supported inputs.'],
                ['delivery', '03', 'Backend & deployment', 'Validate the full-stack engineering.'],
              ] as const).map(([id, number, title, detail]) => (
                <div data-capability-step={id} className={`lsp-capability-scroll-step${activeArea === id ? ' is-active' : ''}`} key={id} aria-current={activeArea === id ? 'step' : undefined}>
                  <div className="lsp-capability-scroll-number">{number}</div>
                  <div><strong>{title}</strong><p>{detail}</p><small>Scroll to explore this layer</small></div>
                  <div className="lsp-capability-mobile-copy">
                    {areas[id].map(feature => <p key={feature.no}><b>{feature.title}</b> — {feature.body}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="lsp-capability-details lsp-capability-sticky" aria-live="polite">
              <div className="lsp-capability-progress"><span>CAPABILITY LAYER</span><strong>{activeArea === 'research' ? '01' : activeArea === 'experience' ? '02' : '03'} / 03</strong></div>
              <span className="lsp-eyebrow">SELECTED CAPABILITIES</span>
              {areas[activeArea].map((feature, index) => (
                <article className="lsp-capability-detail" key={feature.no}>
                  <span>0{index + 1} / {feature.no}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
              <p className="lsp-capability-context">This is a real interface connected to a validated research API, not a simulated prediction dashboard.</p>
              <div className="lsp-capability-indicator" aria-hidden="true"><i className={activeArea === 'research' ? 'is-active' : ''}/><i className={activeArea === 'experience' ? 'is-active' : ''}/><i className={activeArea === 'delivery' ? 'is-active' : ''}/></div>
            </div>
          </div>
        </section>

        <section className="lsp-section">
          <div className="lsp-section-heading">
            <div>
              <span className="lsp-eyebrow">ACTUAL PROJECT EVIDENCE</span>
              <h2>Explore the working application.</h2>
            </div>
            <p>
              Screenshots captured from LeadSense AI's research interface,
              documenting the features and results available in the application.
            </p>
          </div>
          <p className="lsp-scroll-instruction">Scroll through the four real screens. The featured image and explanation progress automatically as you explore the product.</p>
          <div className="lsp-evidence-scrollscape" ref={evidenceScrollRef}>
            <div className="lsp-evidence-stories">
              {gallery.map((shot, index) => (
                <article data-evidence-step={index} className={`lsp-evidence-scroll-step${activeShot === index ? ' is-active' : ''}`} key={shot.title}>
                  <div className="lsp-evidence-scroll-number">{String(index + 1).padStart(2,'0')} <span>/ {String(gallery.length).padStart(2,'0')}</span></div>
                  <h3>{shot.title}</h3>
                  <p>{shot.detail}</p>
                  <small>{index === 0 ? 'Research context and model status' : index === 1 ? 'Measured performance and baselines' : index === 2 ? 'Validated dataset exploration' : 'Transparent research decisions'}</small>
                  <a className="lsp-evidence-mobile-image" href={shot.src} target="_blank" rel="noopener noreferrer"><img src={shot.src} alt={shot.title} loading="lazy" />View screenshot in full resolution ↗</a>
                </article>
              ))}
            </div>
            <div className="lsp-evidence-sticky">
              <div className="lsp-evidence-sticky-heading"><span>PRODUCT WALKTHROUGH</span><strong>{String(activeShot + 1).padStart(2,'0')} / {String(gallery.length).padStart(2,'0')}</strong></div>
              <a className="lsp-evidence-featured-image" href={gallery[activeShot].src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${gallery[activeShot].title} in full resolution`}>
                <img src={gallery[activeShot].src} alt={gallery[activeShot].title} loading="eager" />
                <span>View full-size screenshot ↗</span>
              </a>
              <div className="lsp-evidence-featured-copy" aria-live="polite"><h3>{gallery[activeShot].title}</h3><p>{gallery[activeShot].detail}</p></div>
              <div className="lsp-evidence-progress" aria-label="Evidence progress">{gallery.map((shot,index) => <span key={shot.title} className={activeShot === index ? 'is-active' : ''} />)}</div>
            </div>
          </div>
        </section>

        <section className="lsp-section">
          <div className="lsp-section-heading">
            <div>
              <span className="lsp-eyebrow">SYSTEM ARCHITECTURE</span>
              <h2>A research pipeline delivered as a web product.</h2>
            </div>
          </div>
          <div className="lsp-architecture">
            <div>
              <small>01 / DATA &amp; MODEL</small>
              <h3>Python + scikit-learn</h3>
              <p>Dataset audit, preprocessing, logistic regression, calibration and holdout evaluation.</p>
            </div>
            <span className="lsp-arrow">{String.fromCharCode(8594)}</span>
            <div>
              <small>02 / SERVICE LAYER</small>
              <h3>FastAPI</h3>
              <p>Research summaries, strict input validation, protected routes and documented API behavior.</p>
            </div>
            <span className="lsp-arrow">{String.fromCharCode(8594)}</span>
            <div>
              <small>03 / EXPERIENCE</small>
              <h3>Next.js + TypeScript</h3>
              <p>Responsive exploration, input studios, charts, research insights and documentation.</p>
            </div>
          </div>
        </section>

        <section className="lsp-section">
          <div className="lsp-two-panel">
            <article>
              <span className="lsp-eyebrow">ENGINEERING DECISIONS</span>
              <h2>Designed to protect research integrity.</h2>
              <p>
                The model uses eight context-only features: SpecialDay, Month,
                OperatingSystems, Browser, Region, TrafficType, VisitorType
                and Weekend. The final evaluation was conducted once against
                a separately held-out test set.
              </p>
              <p>
                Rather than presenting unreliable certainty, I documented the
                imbalanced purchase outcomes, used baseline comparisons,
                examined probability calibration and separated public research
                tools from protected experimental inference.
              </p>
            </article>
            <article className="lsp-scope-panel">
              <span className="lsp-eyebrow">RESEARCH SCOPE</span>
              <h2>Transparent about what is deployed.</h2>
              <p>
                This is a live research application, not a production
                purchase-prediction service or generic CRM lead scorer.
                Public users can inspect evaluated research and validate
                supported inputs; individual and batch prediction scoring
                are not publicly released.
              </p>
              <p>
                The research model remains a candidate pending external
                validation and further production-readiness review.
                This boundary is an intentional engineering safeguard,
                not an indication that the web application is offline.
              </p>
            </article>
          </div>
        </section>

        <section className="lsp-footer-cta">
          <span className="lsp-eyebrow">EXPLORE THE WORK</span>
          <h2>See the complete research workspace in action.</h2>
          <p>
            Explore the data, model insights, validation tools and documentation
            in the publicly deployed LeadSense AI application.
          </p>
          <a className="lsp-primary" href={liveUrl} target="_blank" rel="noopener noreferrer">
            Open LeadSense AI {'\u2197'}
          </a>
        </section>
      </div>
    </main>
  )
}