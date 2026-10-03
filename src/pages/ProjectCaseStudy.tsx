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
        <Link className="text-link" to="/">← Back to portfolio</Link>
      </main>
    )
  }

  return (
    <main>
      <section className="case-hero container">
        <Link className="back-link" to="/">← Back to portfolio</Link>
        <div className="case-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="eyebrow">{project.type}</div>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="tag-row large">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </motion.div>
          <div className="case-sidebar">
            <small>PROJECT STATUS</small>
            <strong>{project.status}</strong>
            <p>Replace the screenshot placeholders below with real captures from your GoHighLevel account.</p>
          </div>
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
            <h2>How I designed the system</h2>
            <p>{project.solution}</p>
          </article>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading narrow">
          <div>
            <div className="eyebrow">CUSTOMER JOURNEY</div>
            <h2>How the workflow moves</h2>
          </div>
        </div>
        <Workflow items={project.workflow} />
      </section>

      <section className="section container">
        <div className="section-heading narrow">
          <div>
            <div className="eyebrow">AUTOMATION BREAKDOWN</div>
            <h2>What the backend handles</h2>
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
            <div className="eyebrow">BUILD PROOF</div>
            <h2>Show the actual system.</h2>
          </div>
          <p>These are intentionally placeholders. Replace each one with a real screenshot before publishing the project.</p>
        </div>
        <div className="screenshot-grid">
          {project.screenshots.map((shot, index) => (
            <div className="screenshot-card" key={shot.title}>
              <div className="screenshot-placeholder">
                <span>Screenshot {String(index + 1).padStart(2, '0')}</span>
                <strong>{shot.title}</strong>
              </div>
              <p>{shot.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="loom-panel">
          <div>
            <div className="eyebrow">VIDEO WALKTHROUGH</div>
            <h2>Add a 2–4 minute Loom demonstration.</h2>
            <p>Walk through the funnel, pipeline, workflow logic, and one complete test contact journey. This is one of the strongest pieces of proof you can show a client.</p>
          </div>
          <a className="button button-primary" href={project.loomUrl || '#'}>Add Loom link</a>
        </div>
      </section>
    </main>
  )
}
