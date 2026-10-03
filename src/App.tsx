import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectCaseStudy from './pages/ProjectCaseStudy'
import GHLProjectCaseStudy from './pages/GHLProjectCaseStudy'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Web / App project case studies */}
        <Route path="/project/:slug" element={<ProjectCaseStudy />} />

        {/* Backward-compatible route for any older links */}
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />

        {/* GoHighLevel project case studies */}
        <Route path="/ghl-project/:slug" element={<GHLProjectCaseStudy />} />
      </Routes>

      <Footer />
    </div>
  )
}
