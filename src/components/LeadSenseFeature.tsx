import './LeadSensePortfolio.css'

const liveUrl = 'https://leadsense-ai-research.netlify.app/demo/'

export default function LeadSenseFeature() {
  return (
    <article className="ls-feature" aria-label="LeadSense AI machine learning research project">
      <div className="ls-feature-copy">
        <span className="ls-overline"><span className="ls-signal" />AI &amp; ML ENGINEERING</span>
        <h3>LeadSense AI<span className="ls-dot">.</span></h3>
        <p className="ls-deck">Purchase-Intent Research Platform</p>
        <p className="ls-feature-description">
          From raw shopping sessions to evidence-backed ML research. I built a full-stack
          platform that connects data auditing, probability calibration, strict API
          validation, and interactive model evaluation in one deployed web application.
        </p>
        <div className="ls-tech">
          {['Python', 'FastAPI', 'scikit-learn', 'Next.js', 'TypeScript'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="ls-feature-links">
          <a className="ls-feature-detail" href="/project/leadsense-ai" aria-label="Read the LeadSense AI case study">
            Explore Case Study <span aria-hidden="true">↗</span>
          </a>
          <a className="ls-feature-live" href={liveUrl} target="_blank" rel="noopener noreferrer">
            Visit Live App <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="ls-feature-visual">
        <div className="ls-visual-window">
          <div className="ls-window-bar">
            <span><i /><i /><i /></span>
            <span>LEADSENSE AI / RESEARCH WORKSPACE</span>
            <span className="ls-connected">LIVE</span>
          </div>
          <img
            src="/projects/leadsense/overview.webp"
            alt="Actual LeadSense AI overview dashboard showing 12,330 historical sessions, model evaluation metrics and API status"
            loading="lazy"
          />
        </div>
        <div className="ls-evidence-row">
          <div><strong>12,330</strong><span>Historical sessions</span></div>
          <div><strong>0.6946</strong><span>ROC-AUC</span></div>
          <div><strong>0.1238</strong><span>Brier score</span></div>
        </div>
        <div className="ls-feature-status">Research model evaluated <span>·</span> Live research workspace</div>
      </div>
    </article>
  )
}
