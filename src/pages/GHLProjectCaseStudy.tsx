import { ghlProjects } from '../data/ghlProjects'
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
                A high-level view of how leads, bookings, opportunities, and
                follow-up actions move through the system from entry to outcome.
              </p>
            </div>

            <div className="ghl-case-flow">
              {project.workflow.map((step, index) => (
                <div className="ghl-case-flow-item" key={step}>
                  <span className="ghl-case-flow-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ghl-case-section">
          <div className="ghl-case-shell">
            <div className="ghl-case-section-head">
              <p className="ghl-case-kicker">Project Evidence</p>
              <h2>Project screenshots.</h2>
              <p>
                Selected CRM, funnel, booking, pipeline, and workflow screens
                from the build are documented here to show how the system works
                behind the scenes.
              </p>
            </div>

            <div className="ghl-case-screenshot-grid">
              {project.screenshots.map((screenshot, index) => (
                <article
                  className="ghl-case-screenshot"
                  key={screenshot.title}
                >
                  <span>
                    Project Screenshot {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{screenshot.title}</h3>
                  <p>{screenshot.description}</p>
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
