import { useEffect } from 'react'
import '../styles/scroll-reveal.css'

/** Progressive, one-time viewport reveals; normal page layout remains visible without JS. */
export function useScrollReveal(pageClass: string, selectors: string) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(`.${pageClass}`)
    if (!root) return

    const targets = Array.from(root.querySelectorAll<HTMLElement>(selectors))
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    targets.forEach((target, index) => {
      target.classList.add('showcase-scroll-item')
      target.style.setProperty('--showcase-reveal-delay', `${Math.min(index % 4, 3) * 65}ms`)
    })
    root.classList.add('showcase-scroll-enabled')

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('showcase-scroll-visible')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -22px 0px' })

    targets.forEach(target => observer.observe(target))
    return () => {
      observer.disconnect()
      root.classList.remove('showcase-scroll-enabled')
      targets.forEach(target => {
        target.classList.remove('showcase-scroll-item', 'showcase-scroll-visible')
        target.style.removeProperty('--showcase-reveal-delay')
      })
    }
  }, [pageClass, selectors])
}
