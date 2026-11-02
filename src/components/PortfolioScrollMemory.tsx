import { useEffect } from 'react'

export const portfolioScrollKey = 'portfolio:last-case-origin:v6'
export const portfolioCaseVisitKey = 'portfolio:visited-case-study:v6'

/** Keep the exact previous viewport, not just a generic #projects anchor. */
export default function PortfolioScrollMemory() {
  useEffect(() => {
    const captureLink = (event: MouseEvent) => {
      if (window.location.pathname !== '/' || event.defaultPrevented) return
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return
      const element = event.target
      if (!(element instanceof Element)) return
      const anchor = element.closest<HTMLAnchorElement>('a[href]')
      if (!anchor || (anchor.target && anchor.target !== '_self')) return

      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (!/^\/(?:ghl-project|project|projects|funnel)\//.test(url.pathname)) return
      try {
        window.sessionStorage.setItem(portfolioScrollKey, JSON.stringify({
          scrollY: window.scrollY,
          source: window.location.pathname,
        }))
      } catch {
        // Storage may be unavailable; navigation should still work.
      }
    }
    document.addEventListener('click', captureLink, true)
    return () => document.removeEventListener('click', captureLink, true)
  }, [])
  return null
}
