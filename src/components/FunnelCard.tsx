import { Link } from 'react-router-dom'
import type { FunnelProject } from '../data/funnels'

export default function FunnelCard({ funnel }: { funnel: FunnelProject }) {
  return (
    <article className={`funnel-showcase-card funnel-showcase-card--${funnel.theme}`}>
      <a href={funnel.previewUrl} target="_blank" rel="noopener noreferrer" className="funnel-showcase-image" aria-label={`Open ${funnel.name} live preview in a new tab`}>
        <img src={funnel.screenshots[0].src} alt={`${funnel.name} GoHighLevel landing page screenshot`} loading="lazy" />
        <span className="funnel-showcase-image-chip">View actual funnel ↗</span>
      </a>
      <div className="funnel-showcase-info">
        <div className="funnel-showcase-meta"><span>{funnel.category}</span><span>{funnel.steps.length} steps</span></div>
        <h3>{funnel.name}</h3>
        <p>{funnel.description}</p>
        <div className="funnel-showcase-kind">{funnel.goal} <span aria-hidden="true">·</span> Portfolio demonstration</div>
        <div className="funnel-showcase-actions">
          <a className="funnel-showcase-visit" href={funnel.previewUrl} target="_blank" rel="noopener noreferrer">View live funnel <span aria-hidden="true">↗</span></a>
          <Link className="funnel-showcase-details" to={funnel.caseStudyPath}>View case study <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </article>
  )
}
