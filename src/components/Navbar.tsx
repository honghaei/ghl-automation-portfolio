import { Link, useLocation } from 'react-router-dom'
import type { MouseEvent } from 'react'

export default function Navbar() {
  const location = useLocation()
  const onHome = location.pathname === '/'

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (!onHome) return

    event.preventDefault()
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `/#${sectionId}`)
    }
  }

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link to="/" className="brand" aria-label="Home">
          <span className="brand-mark">CJ</span>
          <span>
            <strong>Charles Jacob Lat</strong>
            <small>Automation Specialist</small>
          </span>
        </Link>

        <div className="nav-links">
          <Link to="/#projects" onClick={(event) => scrollToSection(event, 'projects')}>Projects</Link>
          <Link to="/#capabilities" onClick={(event) => scrollToSection(event, 'capabilities')}>Capabilities</Link>
          <Link to="/#contact" onClick={(event) => scrollToSection(event, 'contact')} className="nav-cta">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
