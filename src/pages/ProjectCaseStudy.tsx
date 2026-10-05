import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Workflow from '../components/Workflow'
import { projects } from '../data/projects'

const revealSection = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: {
    duration: 0.58,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
}


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
      <motion.section className="case-hero container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <Link className="back-link" to="/#development-projects">
          ← Back to development projects
        </Link>

        <div className="case-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="eyebrow">{project.category} · {project.type}</div>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>

            <div className="tag-row large">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>

            {project.githubUrl && (
              <div style={{ marginTop: 24 }}>
                <a
                  className="button button-primary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repository ↗
                </a>
              </div>
            )}
          </motion.div>

          <motion.aside
            className="case-sidebar"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.62, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            style={
              project.heroIcon
                ? {
                    alignSelf: 'start',
                    marginTop: 8,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }
                : undefined
            }
          >
            {project.heroIcon && (
              <div
                style={{
                  width: 118,
                  height: 118,
                  borderRadius: '50%',
                  padding: 5,
                  marginBottom: 26,
                  background:
                    'linear-gradient(135deg, rgba(79,217,255,.95), rgba(99,120,255,.9))',
                  boxShadow: '0 0 34px rgba(79,217,255,.18)',
                }}
              >
                <img
                  src={project.heroIcon}
                  alt={`${project.title} icon`}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            )}

            <small style={{ textAlign: 'center' }}>PROJECT STATUS</small>
            <strong style={{ textAlign: 'center' }}>{project.status}</strong>
            <p style={{ textAlign: 'center', maxWidth: 280 }}>
              {project.statusDescription ??
                'A detailed look at the problem, solution, project flow, features, implementation, and visual proof behind this build.'}
            </p>
          </motion.aside>
        </div>
      </motion.section>

      <motion.section className="section container" {...revealSection}>
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
      </motion.section>

      <motion.section className="section container" {...revealSection}>
        <motion.div
          className="section-heading narrow"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="eyebrow">PROJECT FLOW</div>
            <h2>How the system or experience moves</h2>
          </div>
        </motion.div>
        <Workflow items={project.workflow} />
      </motion.section>

      <motion.section className="section container" {...revealSection}>
        <motion.div
          className="section-heading narrow"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="eyebrow">KEY FEATURES</div>
            <h2>What I built</h2>
          </div>
        </motion.div>

        <div className="automation-list">
          {project.automations.map((item, index) => (
            <motion.div
              key={item}
              className="automation-list-item"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{
                duration: 0.42,
                delay: Math.min(index * 0.055, 0.32),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="section container" {...revealSection}>
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="eyebrow">PROJECT EVIDENCE</div>
            <h2>Project screenshots.</h2>
          </div>
          <p>
            Selected clean screens from the working build, presented without
            Expo Go development overlays.
          </p>
        </motion.div>

        <div className="screenshot-grid">
          {project.screenshots.map((shot, index) => (
            <motion.article
              className="screenshot-card"
              key={shot.title}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.06, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
            >
              {shot.image ? (
                <div style={{
                  background: '#07101f',
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  <img
                    src={shot.image}
                    alt={shot.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      maxWidth: 430,
                      height: 'auto',
                      display: 'block',
                      borderRadius: 14,
                    }}
                  />
                </div>
              ) : (
                <div className="screenshot-placeholder">
                  <span>Project Screenshot {String(index + 1).padStart(2, '0')}</span>
                  <strong>{shot.title}</strong>
                </div>
              )}
              <p>
                <strong>{shot.title}</strong>
                <br />
                {shot.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {project.loomUrl && (
        <motion.section className="section container" {...revealSection}>
          <div className="loom-panel">
            <div>
              <div className="eyebrow">VIDEO WALKTHROUGH</div>
              <h2>See the project in action.</h2>
              <p>
                Watch a short walkthrough covering the main features,
                implementation, and user experience.
              </p>
            </div>
            <a className="button button-primary" href={project.loomUrl} target="_blank" rel="noreferrer">
              Watch Walkthrough ↗
            </a>
          </div>
        </motion.section>
      )}
    </main>
  )
}
