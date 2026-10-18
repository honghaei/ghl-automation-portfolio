import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectCaseStudy from './pages/ProjectCaseStudy'
import GHLProjectCaseStudy from './pages/GHLProjectCaseStudy'
import VeloraCaseStudy from './pages/VeloraCaseStudy'
import FunnelCaseStudy from './pages/FunnelCaseStudy'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Hash links to the homepage section can be used from other case-study routes.
      const target = document.getElementById(hash.slice(1))
      if (target) { target.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Web / App project case studies */}
        <Route path="/project/:slug" element={<ProjectCaseStudy />} />

        {/* Backward-compatible route for any older links */}
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />

        {/* Photography-led, non-collecting GoHighLevel funnel demonstrations */}
        <Route path="/funnel/:slug" element={<FunnelCaseStudy />} />

        {/* Featured Velora case study and other GoHighLevel projects */}
        <Route path="/ghl-project/velora-aesthetics-crm-automation" element={<VeloraCaseStudy />} />

        {/* GoHighLevel project case studies */}
        <Route path="/ghl-project/:slug" element={<GHLProjectCaseStudy />} />
      </Routes>

      <Footer />
    </div>
  )
}
