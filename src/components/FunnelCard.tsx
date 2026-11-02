import { Link } from 'react-router-dom'
import type { FunnelProject } from '../data/funnels'

export default function FunnelCard({ funnel }: { funnel: FunnelProject }) {
  return (
    <article className={`funnel-showcase-card funnel-showcase-card--${funnel.theme}`}>
      <Link to={funnel.caseStudyPath} className="funnel-showcase-image" aria-label={`Explore ${funnel.name} case study`}>
        <img src={funnel.screenshots[0].src} alt={`${funnel.name} GoHighLevel landing page screenshot`} loading="lazy" />
        <span className="funnel-showcase-image-chip">Explore case study ↗</span>
      </Link>
      <div className="funnel-showcase-info">
        <div className="funnel-showcase-meta"><span>{funnel.category}</span><span>{funnel.steps.length} steps</span></div>
        <h3><Link to={funnel.caseStudyPath} className="funnel-showcase-title-link">{funnel.name}</Link></h3>
        <p>{funnel.description}</p>
        <div className="funnel-showcase-kind">{funnel.goal} <span aria-hidden="true">·</span> Portfolio demonstration</div>
        <div className="funnel-showcase-actions">
          <Link className="funnel-showcase-visit" to={funnel.caseStudyPath}>Explore case study <span aria-hidden="true">↗</span></Link>
          <a className="funnel-showcase-details" href={funnel.previewUrl} target="_blank" rel="noopener noreferrer">View live funnel <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </article>
  )
}
