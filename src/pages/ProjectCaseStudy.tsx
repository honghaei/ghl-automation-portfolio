import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Workflow from '../components/Workflow'
import { projects } from '../data/projects'

export default function ProjectCaseStudy() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="section container not-found">
        <h1>Project not found.</h1>
        <Link className="text-link" to="/#development-projects">
          ← Back to development projects
        </Link>
      </main>
    )
  }

  return (
    <main>
      <section className="case-hero container">
        <Link className="back-link" to="/#development-projects">
          ← Back to development projects
        </Link>

        <div className="case-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="eyebrow">
              {project.category} · {project.type}
            </div>

            <h1>{project.title}</h1>
            <p>{project.summary}</p>

            <div className="tag-row large">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>

          <aside className="case-sidebar">
            <small>PROJECT STATUS</small>
            <strong>{project.status}</strong>
            <p>
              A detailed look at the problem, solution, project flow,
              features, and implementation behind this build.
            </p>
          </aside>
        </div>
      </section>

      <section className="section container">
        <div className="two-column">
          <article className="info-panel">
            <div className="eyebrow">THE PROBLEM</div>
            <h2>What needed to be solved</h2>
            <p>{project.problem}</p>
          </article>

          <article className="info-panel">
            <div className="eyebrow">THE SOLUTION</div>
            <h2>How I approached it</h2>
            <p>{project.solution}</p>
          </article>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading narrow">
          <div>
            <div className="eyebrow">PROJECT FLOW</div>
            <h2>How the system or experience moves</h2>
          </div>
        </div>

        <Workflow items={project.workflow} />
      </section>

      <section className="section container">
        <div className="section-heading narrow">
          <div>
            <div className="eyebrow">KEY FEATURES</div>
            <h2>What I built</h2>
          </div>
        </div>

        <div className="automation-list">
          {project.automations.map((item, index) => (
            <div key={item} className="automation-list-item">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">PROJECT EVIDENCE</div>
            <h2>Project screenshots.</h2>
          </div>

          <p>
            Selected screens and interfaces from the project will be shown here
            as the case study is documented.
          </p>
        </div>

        <div className="screenshot-grid">
          {project.screenshots.map((shot, index) => (
            <article className="screenshot-card" key={shot.title}>
              <div className="screenshot-placeholder">
                <span>
                  Project Screenshot {String(index + 1).padStart(2, '0')}
                </span>
                <strong>{shot.title}</strong>
              </div>

              <p>{shot.description}</p>
            </article>
          ))}
        </div>
      </section>

      {project.loomUrl && (
        <section className="section container">
          <div className="loom-panel">
            <div>
              <div className="eyebrow">VIDEO WALKTHROUGH</div>
              <h2>See the project in action.</h2>
              <p>
                Watch a short walkthrough covering the main features,
                implementation, and user experience.
              </p>
            </div>

            <a
              className="button button-primary"
              href={project.loomUrl}
              target="_blank"
              rel="noreferrer"
            >
              Watch Walkthrough ↗
            </a>
          </div>
        </section>
      )}
    </main>
  )
}
