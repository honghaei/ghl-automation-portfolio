import { Link, useParams } from 'react-router-dom'
import { funnels } from '../data/funnels'
import './FunnelCaseStudy.css'

export default function FunnelCaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const funnel = funnels.find((item) => item.slug === slug && item.theme !== 'velora')

  if (!funnel) {
    return <main className="funnel-case-page"><div className="funnel-case-shell funnel-case-empty"><Link to="/#funnels">← Back to funnels</Link><h1>Funnel not found.</h1></div></main>
  }

  return (
    <main className={`funnel-case-page funnel-case-page--${funnel.theme}`}>
      <div className="funnel-case-shell">
        <Link className="funnel-case-back" to="/#funnels">← Back to featured funnels</Link>
        <header className="funnel-case-hero">
          <div className="funnel-case-hero-copy">
            <span className="funnel-case-eyebrow">GoHighLevel / Funnel Design / Portfolio Concept</span>
            <h1>{funnel.name}<span>.</span></h1>
            <p className="funnel-case-lead">{funnel.description}</p>
            <div className="funnel-case-tags"><span>{funnel.category}</span><span>{funnel.goal}</span><span>{funnel.steps.length} connected steps</span></div>
            <div className="funnel-case-hero-actions">
              <a href={funnel.previewUrl} target="_blank" rel="noopener noreferrer" className="funnel-case-primary">Explore live demo ↗</a>
              <a href="#funnel-case-evidence" className="funnel-case-outline">See project evidence ↓</a>
            </div>
          </div>
          <a className="funnel-case-hero-image" href={funnel.previewUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${funnel.name} live funnel`}>
            <img src={funnel.screenshots[0].src} alt={`Actual ${funnel.name} landing page, saved in GoHighLevel`} />
            <span>Actual GoHighLevel build ↗</span>
          </a>
        </header>
        <p className="funnel-case-disclaimer"><strong>Demonstration project:</strong> Fictional brand, not a client engagement. Sample-only interactions; no real consultation or coaching application is submitted. Links open GoHighLevel preview pages.</p>
      </div>

      <section className="funnel-case-section">
        <div className="funnel-case-shell funnel-case-summary-grid">
          <article><span className="funnel-case-eyebrow">01 / The objective</span><h2>A clear path from interest to action.</h2><p>{funnel.objective}</p></article>
          <article><span className="funnel-case-eyebrow">02 / The solution</span><h2>Brand, experience, and navigation together.</h2><p>{funnel.approach}</p></article>
        </div>
      </section>

      <section className="funnel-case-section">
        <div className="funnel-case-shell">
          <div className="funnel-case-section-title"><span className="funnel-case-eyebrow">03 / Funnel journey</span><h2>Three intentional steps.</h2><p>The working preview lets visitors explore the complete demo experience without entering real personal information.</p></div>
          <div className="funnel-case-steps">
            {funnel.steps.map((step, index) => <div className="funnel-case-step" key={step}><span>0{index + 1}</span><h3>{step}</h3>{index < funnel.steps.length - 1 && <span className="funnel-case-step-arrow" aria-hidden="true">→</span>}</div>)}
          </div>
          <div className="funnel-case-stage-links"><a href={funnel.previewUrl} target="_blank" rel="noopener noreferrer">Landing ↗</a><a href={funnel.formUrl} target="_blank" rel="noopener noreferrer">Sample form ↗</a><a href={funnel.thankYouUrl} target="_blank" rel="noopener noreferrer">Completion ↗</a></div>
        </div>
      </section>

      <section className="funnel-case-section" id="funnel-case-evidence">
        <div className="funnel-case-shell">
          <div className="funnel-case-section-title"><span className="funnel-case-eyebrow">04 / Project evidence</span><h2>Actual pages. Actual build.</h2><p>These are genuine saved GoHighLevel screenshots. Open any image to inspect the original capture.</p></div>
          <div className="funnel-case-evidence-grid">
            {funnel.screenshots.map((shot, i) => <figure className={`funnel-case-shot ${i === 0 ? 'funnel-case-shot--wide' : ''}`} key={shot.src}><a href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full screenshot: ${shot.title}`}><img src={shot.src} alt={`${funnel.name}: ${shot.title}`} loading="lazy" /><span>View screenshot ↗</span></a><figcaption><strong>{shot.title}</strong><small>{shot.note}</small></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="funnel-case-section">
        <div className="funnel-case-shell funnel-case-last-grid">
          <div><span className="funnel-case-eyebrow">05 / What this showcases</span><h2>Design with a working journey.</h2><div className="funnel-case-feature-tags">{funnel.features.map((feature) => <span key={feature}>{feature}</span>)}</div></div>
          <aside><span className="funnel-case-eyebrow">Verification notes</span><p>{funnel.testNote}</p><p>Preview URLs are hosted by GoHighLevel, not a custom production domain. No conversion or revenue figures are claimed.</p></aside>
        </div>
      </section>

      <section className="funnel-case-bottom"><div className="funnel-case-shell funnel-case-bottom-inner"><div><span className="funnel-case-eyebrow">Explore the finished work</span><h2>Experience the live funnel.</h2><p>Follow the full sample journey, from landing page to demo completion.</p></div><a href={funnel.previewUrl} target="_blank" rel="noopener noreferrer" className="funnel-case-primary">Open {funnel.name} ↗</a></div></section>
    </main>
  )
}
