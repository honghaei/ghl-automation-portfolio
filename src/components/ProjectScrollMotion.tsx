import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/ProjectMotion.css'

/** Reveal major portfolio case-study sections as they enter the viewport.
 *  All content stays visible when IntersectionObserver or motion support is unavailable.
 */
export default function ProjectScrollMotion() {
  const { pathname } = useLocation()

  useEffect(() => {
    const supportedPage = pathname === '/' || /^\/(?:project|projects|ghl-project|funnel)\//.test(pathname)
    if (!supportedPage || !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const page = pathname === '/'
      ? document.querySelector<HTMLElement>('.portfolio-home')
      : document.querySelector<HTMLElement>('.app-shell > main, .ghl-case-page, .csq-page, .velora-case')
    if (!page) return

    // These have their own replayable intersection observers; the classic project
    // template uses Framer Motion. Avoid applying two opacity effects to one node.
    if (page.classList.contains('csq-page') || page.classList.contains('velora-case') ||
      page.querySelector('.case-hero')) return

    const isFlowDesk = pathname === '/ghl-project/flowdesk-support-ticketing-automation'
    let selector = ''
    if (isFlowDesk) {
      selector = '.fd-back-link, .fd-hero-copy, .fd-hero-visual, .fd-section-heading, ' +
        '.fd-impact-lead, .fd-impact-metric, .fd-story-spotlight, .fd-story-chapter, ' +
        '.fd-process-row, .fd-build-feature, .fd-build-item, ' +
        '.fd-evidence-chapter-heading, .fd-evidence-value-strip, .fd-evidence-showcase, ' +
        '.fd-evidence-selector, .fd-workflow-chapter-head, .fd-workflow-chapter-info, ' +
        '.fd-workflow-chapter-screens, .fd-communication-stages, .fd-delivery-evidence, ' +
        '.fd-verification-note, .fd-closing-card'
    } else if (pathname === '/') {
      selector = '.portfolio-hero-copy, .portfolio-focus-card, .portfolio-ghl-head, ' +
        '.portfolio-ghl-flagship, .portfolio-ghl-card--support, .portfolio-funnel-heading, ' +
        '.portfolio-funnel-grid > *, .portfolio-section-head, .portfolio-project-grid > *, ' +
        '.portfolio-about-copy, .portfolio-skills-grid > *, .portfolio-faq-shell, .portfolio-contact-panel'
    } else if (pathname.startsWith('/funnel/')) {
      selector = '.funnel-case-hero-copy, .funnel-case-hero-art, .funnel-case-proof-row > div, ' +
        '.funnel-case-section-title, .funnel-case-brief-grid > article, .funnel-case-journey-step'
    } else if (pathname === '/project/leadsense-ai') {
      selector = '.lsp-hero-copy, .lsp-hero-side, .lsp-section-heading, .lsp-roadmap-step, ' +
        '.lsp-evidence-scroll-step, .lsp-architecture > div'
    } else if (pathname.startsWith('/ghl-project/')) {
      selector = '.ghl-case-hero, .ghl-case-section-head, .ghl-case-panel, .ghl-case-flow-item, ' +
        '.ghl-case-verification-panel, .ghl-case-screenshot'
    } else {
      selector = '.dev-section-heading, .dev-problem-grid article, .dev-decision-grid article, ' +
        '.dev-journey-grid article, .dev-tech-grid article, .peng-section-intro, ' +
        '.peng-capability-row, .peng-signal-inner, .peng-insights, .peng-walkthrough, ' +
        '.dev-evidence-chapter, .dev-hero-copy'
    }
    const targets = Array.from(page.querySelectorAll<HTMLElement>(selector))
    if (!targets.length) return
    targets.forEach((target, i) => {
      target.classList.add('portfolio-motion-item')
      target.style.setProperty('--portfolio-motion-delay', `${(i % 3) * 60}ms`)
    })
    page.classList.add('portfolio-motion-enabled')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('portfolio-motion-visible', entry.isIntersecting)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' })

    targets.forEach(node => observer.observe(node))
    return () => {
      observer.disconnect()
      page.classList.remove('portfolio-motion-enabled')
      targets.forEach(node => {
        node.classList.remove('portfolio-motion-item', 'portfolio-motion-visible')
        node.style.removeProperty('--portfolio-motion-delay')
      })
    }
  }, [pathname])

  return null
}
