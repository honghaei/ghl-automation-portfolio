import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './LeadSenseScrollShowcase.css'

export type ShowcaseStep = {
  title: string
  description?: string
  eyebrow?: string
}

/**
 * Uses the SAME native-document-scroll / focus-line selection model as
 * LeadSense Application Capabilities. The left editorial chapters supply
 * real scroll height; the selected right-hand evidence follows in a sticky
 * viewport. No synthetic scroll runs, wheel capture or nested scrollers.
 */
export default function LeadSenseScrollShowcase({
  title,
  steps,
  renderContent,
  className = '',
  note,
}: {
  title: string
  steps: ShowcaseStep[]
  renderContent: (step: ShowcaseStep, index: number) => ReactNode
  className?: string
  note?: string
}) {
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root || !steps.length) return
    let frame = 0
    const update = () => {
      frame = 0
      const nav = document.querySelector<HTMLElement>('.portfolio-navbar-wrap')
      const navHeight = nav?.getBoundingClientRect().height ?? 100
      root.style.setProperty('--lss-nav-offset', `${Math.ceil(navHeight) + 12}px`)
      const focus = navHeight + (window.innerHeight - navHeight) * 0.5
      const stageNodes = root.querySelectorAll<HTMLElement>('[data-lss-index]')
      let nearest = 0
      let distance = Number.POSITIVE_INFINITY
      stageNodes.forEach((stage, index) => {
        const rect = stage.getBoundingClientRect()
        const current = rect.top <= focus && rect.bottom >= focus
          ? 0
          : Math.min(Math.abs(rect.top - focus), Math.abs(rect.bottom - focus))
        if (current < distance) {
          distance = current
          nearest = index
        }
      })
      setActive(old => old === nearest ? old : nearest)
    }
    const queue = () => { if (!frame) frame = window.requestAnimationFrame(update) }
    const resize = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(queue)
    const nav = document.querySelector<HTMLElement>('.portfolio-navbar-wrap')
    if (nav) resize?.observe(nav)
    window.addEventListener('scroll', queue, { passive: true })
    window.addEventListener('resize', queue)
    window.addEventListener('pageshow', queue)
    queue()
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      resize?.disconnect()
      window.removeEventListener('scroll', queue)
      window.removeEventListener('resize', queue)
      window.removeEventListener('pageshow', queue)
    }
  }, [steps.length])

  if (!steps.length) return null
  const goTo = (index: number) => {
    const root = rootRef.current
    const target = root?.querySelectorAll<HTMLElement>('[data-lss-index]')[index]
    if (!target) return
    // The native scrolling interaction is independent of pointer position.
    // No wheel handlers, preventDefault or nested overflow containers.
    const navHeight = document.querySelector<HTMLElement>('.portfolio-navbar-wrap')?.getBoundingClientRect().height ?? 100
    const viewportHeight = Math.max(0, window.innerHeight - navHeight)
    const targetMiddle = target.getBoundingClientRect().top + window.scrollY + target.offsetHeight / 2
    window.scrollTo({
      top: Math.max(0, targetMiddle - navHeight - viewportHeight / 2),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  return <section className={`lss-scrollscape${steps.length === 1 ? ' is-single' : ''} ${className}`} ref={rootRef} aria-label={title}>
    <div className="lss-chapters" aria-label={`${title} steps`}>
      {steps.map((step, index) =>
        <article key={`${index}-${step.title}`} className={`lss-chapter${active === index ? ' is-active' : ''}`} data-lss-index={index}>
          <button type="button" className="lss-chapter-button"
            aria-current={active === index ? 'step' : undefined}
            onClick={() => goTo(index)}>
            <span className="lss-chapter-number">{String(index + 1).padStart(2,'0')}</span>
            <span className="lss-chapter-text">
              {step.eyebrow && <small>{step.eyebrow}</small>}
              <strong>{step.title}</strong>
              {step.description && <span>{step.description}</span>}
              <em>Scroll to explore this step</em>
            </span>
          </button>
          <div className="lss-mobile-content">{renderContent(step, index)}</div>
        </article>
      )}
    </div>
    <div className="lss-sticky">
      <div className="lss-view">
        <header className="lss-view-header">
          <span>{title}</span>
          <strong>{String(active + 1).padStart(2,'0')} / {String(steps.length).padStart(2,'0')}</strong>
        </header>
        <div className="lss-featured" key={active}>
          {renderContent(steps[active], active)}
        </div>
        <footer className="lss-view-footer">
          <span>{note ?? 'Scroll the page to explore · scroll upward to revisit'}</span>
          <div aria-label={`Step ${active + 1} of ${steps.length}`} className="lss-progress">
            {steps.map((step, index) =>
              <button type="button" key={`${index}-${step.title}`}
                className={index === active ? 'is-active' : ''}
                onClick={() => goTo(index)}
                aria-label={`Go to ${step.title}`}
                aria-current={index === active ? 'step' : undefined}/>
            )}
          </div>
        </footer>
      </div>
    </div>
  </section>
}


/** Image evidence remains an exact, inspectable original — never a mockup. */
export function ShowcaseProof({
  image, fullImage, title, description, eyebrow, onOpen,
}: {
  image: string
  fullImage?: string
  title: string
  description?: string
  eyebrow?: string
  onOpen?: () => void
}) {
  const src = fullImage ?? image
  return <div className="lss-proof">
    {eyebrow && <small className="lss-proof-label">{eyebrow}</small>}
    {onOpen
      ? <button type="button" className="lss-proof-image" onClick={onOpen}
          aria-label={`Inspect original screenshot: ${title}`}>
          <img src={image} alt={title} loading="lazy"/>
          <span>Inspect original screenshot ↗</span>
        </button>
      : <a className="lss-proof-image" href={src} target="_blank" rel="noopener noreferrer"
          aria-label={`Inspect original screenshot: ${title}`}>
          <img src={image} alt={title} loading="lazy"/>
          <span>Inspect original screenshot ↗</span>
        </a>
    }
    <strong className="lss-proof-title">{title}</strong>
    {description && <p className="lss-proof-caption">{description}</p>}
  </div>
}
