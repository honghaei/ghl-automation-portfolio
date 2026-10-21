import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="portfolio-project-card">
      <span className="portfolio-project-category">{project.type}</span>

      {project.coverImage && (
        <a className="portfolio-project-cover" href={`/project/${project.slug}`} aria-label={`Explore ${project.title} case study`}>
          <img src={project.coverImage} alt={project.slug === 'lakbay-3d-philippines-tourism-map' ? 'Nationwide interactive 3D map of the Philippines in Lakbay' : `${project.title} preview`} loading="lazy" />
          <span>LIVE PROJECT</span>
        </a>
      )}

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

      <div className="portfolio-project-actions">
        <a
          className="portfolio-project-link"
          href={`/project/${project.slug}`}
          aria-label={`View ${project.title} case study`}
        >
          View Case Study <span aria-hidden="true">↗</span>
        </a>
        {project.liveUrl && (
          <a
            className="portfolio-project-link portfolio-project-live"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live ${project.title} website`}
          >
            Live Website <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}
