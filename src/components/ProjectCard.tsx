import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="portfolio-project-card">
      <span className="portfolio-project-category">{project.type}</span>

      <h3>{project.title}</h3>

      <p>{project.summary}</p>

      <div className="portfolio-project-tech">
        {project.stack.slice(0, 4).map((item, index) => (
          <span
            className={`portfolio-chip${index === 0 ? ' green' : ''}`}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      <a
        className="portfolio-project-link"
        href={`/project/${project.slug}`}
        aria-label={`View ${project.title} case study`}
      >
        View Case Study <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}
