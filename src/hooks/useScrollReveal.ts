import { useEffect } from 'react'
import '../styles/scroll-reveal.css'

/** Replayable viewport reveals; reduced motion and no-JS remain readable. */
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
        entry.target.classList.toggle('showcase-scroll-visible', entry.isIntersecting)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' })

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
