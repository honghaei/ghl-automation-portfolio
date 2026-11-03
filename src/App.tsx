
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectCaseStudy from './pages/ProjectCaseStudy'
import LeadSenseCaseStudy from './pages/LeadSenseCaseStudy'
import GHLProjectCaseStudy from './pages/GHLProjectCaseStudy'
import VeloraCaseStudy from './pages/VeloraCaseStudy'
import FunnelCaseStudy from './pages/FunnelCaseStudy'
import FlowDeskCaseStudy from './pages/FlowDeskCaseStudy'
import ProjectScrollMotion from './components/ProjectScrollMotion'
import PortfolioScrollMemory, {
  portfolioScrollKey,
  portfolioCaseVisitKey,
} from './components/PortfolioScrollMemory'

// Shared background for every portfolio route
import HomeWaveBackground from './components/HomeWaveBackground'
import './pages/HomeBlueWave.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const isCaseStudy =
      /^\/(?:ghl-project|project|projects|funnel)\//.test(pathname)

    if (isCaseStudy) {
      try {
        window.sessionStorage.setItem(portfolioCaseVisitKey, '1')
      } catch {
        // no-op
      }
    }

    if (pathname === '/') {
      let savedY: number | null = null

      try {
        if (window.sessionStorage.getItem(portfolioCaseVisitKey) === '1') {
          const saved = window.sessionStorage.getItem(portfolioScrollKey)
          const parsed = saved
            ? JSON.parse(saved) as { scrollY?: number; source?: string }
            : null

          if (
            parsed?.source === '/' &&
            typeof parsed.scrollY === 'number' &&
            Number.isFinite(parsed.scrollY)
          ) {
            savedY = Math.max(0, parsed.scrollY)
          }
        }
      } catch {
        // Fall back to normal navigation
      }

      if (savedY !== null) {
        const top = savedY
        const restore = () =>
          window.scrollTo({ top, behavior: 'instant' })

        const frame = window.requestAnimationFrame(restore)
        const short = window.setTimeout(restore, 130)
        const medium = window.setTimeout(restore, 420)
        const finish = window.setTimeout(() => {
          restore()
          try {
            window.sessionStorage.removeItem(portfolioCaseVisitKey)
          } catch {
            // no-op
          }
        }, 750)

        return () => {
          window.cancelAnimationFrame(frame)
          window.clearTimeout(short)
          window.clearTimeout(medium)
          window.clearTimeout(finish)
        }
      }
    }

    if (hash) {
      const target = document.getElementById(hash.slice(1))

      if (target) {
        target.scrollIntoView({ behavior: 'instant' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div className="app-shell">
      {/* Fixed blue-wave background shared by every page */}
      <HomeWaveBackground />

      <ScrollToTop />
      <PortfolioScrollMemory />
      <ProjectScrollMotion />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Web and app project case studies */}
        <Route
          path="/project/leadsense-ai"
          element={<LeadSenseCaseStudy />}
        />
        <Route path="/project/:slug" element={<ProjectCaseStudy />} />

        {/* Backward-compatible project links */}
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />

        {/* GoHighLevel funnel case studies */}
        <Route path="/funnel/:slug" element={<FunnelCaseStudy />} />

        {/* Featured GoHighLevel case studies */}
        <Route
          path="/ghl-project/flowdesk-support-ticketing-automation"
          element={<FlowDeskCaseStudy />}
        />
        <Route
          path="/ghl-project/velora-aesthetics-crm-automation"
          element={<VeloraCaseStudy />}
        />

        {/* Other GoHighLevel project case studies */}
        <Route
          path="/ghl-project/:slug"
          element={<GHLProjectCaseStudy />}
        />
      </Routes>

      <Footer />
    </div>
  )
}
