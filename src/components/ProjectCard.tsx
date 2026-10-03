import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06 }}
    >
      <div className="project-topline">
        <span className="pill">{project.type}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-row">
        {project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
      </div>
      <Link className="text-link" to={`/projects/${project.slug}`}>View case study →</Link>
    </motion.article>
  )
}
