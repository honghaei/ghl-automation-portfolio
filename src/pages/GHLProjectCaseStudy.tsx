import { ghlProjects } from '../data/ghlProjects'
import CSquaredShowcase from './CSquaredShowcase'
import ScrollProcessTimeline from '../components/ScrollProcessTimeline'
import './GHLProjectCaseStudy.css'

type GHLProjectCaseStudyProps = {
  slug?: string
}

function getSlugFromPath() {
  const parts = window.location.pathname.split('/').filter(Boolean)
  return parts[parts.length - 1] ?? ''
}

export default function GHLProjectCaseStudy({
  slug,
}: GHLProjectCaseStudyProps) {
  const activeSlug = slug ?? getSlugFromPath()
  const project = ghlProjects.find((item) => item.slug === activeSlug)

  if (activeSlug === 'csquared-crm-sales-automation') {
    return <CSquaredShowcase />
  }

  if (!project) {
    return (
      <div className="ghl-case-page">
        <main className="ghl-case-shell ghl-case-hero">
          <a className="ghl-case-back" href="/#projects">
            ← Back to GoHighLevel Projects
          </a>

          <div className="ghl-case-badge-row">
            <span className="ghl-case-badge">GoHighLevel Project</span>
          </div>

          <h1 className="ghl-case-title">Project not found.</h1>

          <p className="ghl-case-summary">
            This case study is not available. Return to the portfolio and choose
            another GoHighLevel project.
          </p>
        </main>
      </div>
    )
  }

  return (
    <div className="ghl-case-page">
      <main>
        <section className="ghl-case-shell ghl-case-hero">
          <a className="ghl-case-back" href="/#projects">
            ← Back to GoHighLevel Projects
          </a>

          <div className="ghl-case-badge-row">
            <span className="ghl-case-badge">{project.badge}</span>
            <span className="ghl-case-status">{project.status}</span>
          </div>

          <h1 className="ghl-case-title">{project.title}</h1>

          <p className="ghl-case-summary">{project.description}</p>

          <div className="ghl-case-tools">
            {project.tools.map((tool) => (
              <span className="ghl-case-tool" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </section>

        {project.heroImage && (
          <section className="ghl-case-shell ghl-case-hero-media" aria-label="Project visual preview">
            <a href={project.heroImage} target="_blank" rel="noreferrer" aria-label="Open the CSQUARED landing page screenshot">
              <img src={project.heroImage} alt="CSQUARED branded camera rental landing page in the GoHighLevel editor" />
            </a>
            <p>{project.heroCaption}</p>
          </section>
        )}

        <section className="ghl-case-section">
          <div className="ghl-case-shell ghl-case-grid">
            <article className="ghl-case-panel">
              <p className="ghl-case-kicker">The Problem</p>
              <h2>What needed to be solved.</h2>
              <p>{project.problem}</p>
            </article>

            <article className="ghl-case-panel">
              <p className="ghl-case-kicker">The Solution</p>
              <h2>How I structured the system.</h2>
              <p>{project.solution}</p>
            </article>
          </div>
        </section>

        <section className="ghl-case-section">
          <div className="ghl-case-shell">
            <div className="ghl-case-section-head">
              <p className="ghl-case-kicker">System Flow</p>
              <h2>How the customer journey moves.</h2>
              <p>
                {project.flowIntro ??
                  'A high-level view of how leads, bookings, opportunities, and follow-up actions move through the system from entry to outcome.'}
              </p>
            </div>

            <ScrollProcessTimeline title={`${project.title} / Documented system flow`} steps={project.workflow.map((step,index)=>({title:step,eyebrow:`PROCESS STAGE ${String(index + 1).padStart(2, '0')}`,detail:`Stage ${index+1} of the documented ${project.title} process. This is a process description, not evidence that every branch has been tested.`}))} note={project.verification ? 'Consult the implementation-status section below for the verified scope and remaining limitations.' : 'This high-level process illustrates the configured or planned workflow; it is not a claim of unattended customer execution.'}/>
          </div>
        </section>

        {project.verification && (
          <section className="ghl-case-section" aria-labelledby="ghl-case-verification-title">
            <div className="ghl-case-shell">
              <div className="ghl-case-section-head">
                <p className="ghl-case-kicker">Implementation Status</p>
                <h2 id="ghl-case-verification-title">Verified work vs. remaining integration.</h2>
                <p>What has been built and checked, without presenting unfinished booking capabilities as live.</p>
              </div>
              <div className="ghl-case-verification-grid">
                <article className="ghl-case-verification-panel">
                  <h3><span aria-hidden="true">✓</span> Built &amp; evidenced</h3>
                  <ul>{project.verification.completed.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article className="ghl-case-verification-panel ghl-case-verification-panel--pending">
                  <h3><span aria-hidden="true">○</span> Not yet verified / operational</h3>
                  <ul>{project.verification.pending.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
            </div>
          </section>
        )}

        <section className="ghl-case-section">
          <div className="ghl-case-shell">
            <div className="ghl-case-section-head">
              <p className="ghl-case-kicker">Project Evidence</p>
              <h2>Project screenshots.</h2>
              <p>
                {project.evidenceNote ??
                  'Selected CRM, funnel, booking, pipeline, and workflow screens from the build are documented here to show how the system works behind the scenes.'}
              </p>
            </div>

            <div className="ghl-case-screenshot-grid">
              {project.screenshots.map((screenshot, index) => (
                <article
                  className={`ghl-case-screenshot${screenshot.image ? ' ghl-case-screenshot--with-image' : ''}`}
                  key={screenshot.title}
                >
                  {screenshot.image && (
                    <a
                      className="ghl-case-screenshot-link"
                      href={screenshot.image}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open full-size screenshot: ${screenshot.title}`}
                    >
                      <img src={screenshot.image} alt={screenshot.title} loading="lazy" />
                      <span className="ghl-case-screenshot-expand">View full image ↗</span>
                    </a>
                  )}
                  <div className="ghl-case-screenshot-copy">
                    <span>
                      {screenshot.label ?? `Project Screenshot ${String(index + 1).padStart(2, '0')}`}
                    </span>
                    <h3>{screenshot.title}</h3>
                    <p>{screenshot.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {project.loomUrl && (
          <section className="ghl-case-section">
            <div className="ghl-case-shell">
              <div className="ghl-case-cta">
                <div>
                  <p className="ghl-case-kicker">Video Walkthrough</p>
                  <h2>See the system in action.</h2>
                  <p>
                    Watch a short walkthrough covering the CRM structure,
                    automation logic, and customer journey.
                  </p>
                </div>

                <a
                  className="ghl-case-button"
                  href={project.loomUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Walkthrough ↗
                </a>
              </div>
            </div>
          </section>
        )}

        <section className="ghl-case-section">
          <div className="ghl-case-shell">
            <div className="ghl-case-cta">
              <div>
                <p className="ghl-case-kicker">Work With Me</p>
                <h2>Need a system like this for your business?</h2>
                <p>
                  I&apos;m available for GoHighLevel CRM setup, automation,
                  funnels, pipelines, calendars, and workflow builds.
                </p>
              </div>

              <a className="ghl-case-button" href="/#contact">
                Contact Me ↗
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
