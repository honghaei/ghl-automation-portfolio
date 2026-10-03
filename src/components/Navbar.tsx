import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import avatar from '../assets/charles-avatar.png'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  const isProjectPage =
    location.pathname.startsWith('/project/') ||
    location.pathname.startsWith('/projects/') ||
    location.pathname.startsWith('/ghl-project/')

  const activeHash = location.hash || '#home'

  const isActive = (section: string) => {
    if (isProjectPage) {
      return section === 'projects'
    }

    return activeHash === `#${section}`
  }

  const navClass = (section: string) =>
    `portfolio-nav-link${isActive(section) ? ' is-active' : ''}`

  return (
    <header className="portfolio-navbar-wrap">
      <nav className="portfolio-navbar" aria-label="Primary navigation">
        <a className="portfolio-brand" href="/#home" onClick={closeMenu}>
          <span className="portfolio-avatar-shell">
            <img
              className="portfolio-avatar"
              src={avatar}
              alt="Charles Jacob Lat avatar"
            />
          </span>

          <span className="portfolio-brand-copy">
            <span className="portfolio-brand-name">Charles Jacob Lat</span>
            <span className="portfolio-brand-role">
              GHL Specialist · Automation · Web Dev · App Dev
            </span>
          </span>
        </a>

        <div className="portfolio-nav-links">
          <a className={navClass('home')} href="/#home">
            Home
          </a>

          <a className={navClass('about')} href="/#about">
            About
          </a>

          <a className={navClass('projects')} href="/#projects">
            Projects
          </a>

          <a className={navClass('skills')} href="/#skills">
            Skills
          </a>

          <a className={navClass('faqs')} href="/#faqs">
            FAQs
          </a>
        </div>

        <a className="portfolio-contact-link" href="/#contact">
          Contact Me
          <span className="portfolio-contact-arrow" aria-hidden="true">
            ↗
          </span>
        </a>

        <button
          className="portfolio-mobile-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>

      <div
        className={`portfolio-mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <a href="/#home" onClick={closeMenu}>
          Home
        </a>
        <a href="/#about" onClick={closeMenu}>
          About
        </a>
        <a href="/#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="/#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="/#faqs" onClick={closeMenu}>
          FAQs
        </a>

        <a
          className="portfolio-mobile-contact"
          href="/#contact"
          onClick={closeMenu}
        >
          Contact Me ↗
        </a>
      </div>
    </header>
  )
}
