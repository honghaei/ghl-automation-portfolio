import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import profilePhoto from '../assets/charles-jacob-lat.jpg'

const capabilities = [
  ['CRM Architecture', 'Pipelines, stages, opportunities, tags, custom fields, and contact organization.'],
  ['Workflow Automation', 'Behavior-based email/SMS sequences, If/Else logic, waits, goals, and workflow handoffs.'],
  ['Funnels & Forms', 'Lead capture funnels, qualification forms, booking flows, and conversion-focused pages.'],
  ['Calendars & Booking', 'Appointment scheduling, reminders, rescheduling, no-show recovery, and internal notifications.'],
  ['Lead Nurturing', 'Follow-up systems designed to keep leads moving without repetitive manual work.'],
  ['Sales Operations', 'Proposal, payment, onboarding, review, referral, and reactivation automations.'],
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const sectionId = location.hash.replace('#', '')
    const section = document.getElementById(sectionId)

    if (section) {
      requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.hash])

  return (
    <main>
      <section className="hero container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="eyebrow">GOHIGHLEVEL • CRM • AUTOMATION</div>
          <h1>I build systems that turn leads into <span>booked calls, customers, and repeat business.</span></h1>
          <p className="hero-lead">
            I’m Charles Jacob Lat, a GoHighLevel and automation specialist focused on building practical CRM systems, sales pipelines, funnels, and workflows that reduce manual work and keep leads moving.
          </p>
          <div className="hero-actions">
            <a href="/projects/med-spa-lead-system" className="button button-primary">View Featured Case Study</a>
            <a href="#about" className="button button-secondary">About Me</a>
          </div>
          <div className="micro-proof">
            <span>CRM builds</span><span>Workflow logic</span><span>Funnels</span><span>Lead nurturing</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-console"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="console-head">
            <span></span><span></span><span></span>
            <p>Automation overview</p>
          </div>
          <div className="console-grid">
            <div className="metric-card"><small>Active systems</small><strong>04</strong><span>Portfolio builds</span></div>
            <div className="metric-card"><small>Core focus</small><strong>CRM</strong><span>Lead-to-client journeys</span></div>
          </div>
          <div className="automation-card">
            <div className="automation-line"><b>01</b><span>Lead captured</span><em>Trigger</em></div>
            <div className="automation-line"><b>02</b><span>Opportunity created</span><em>CRM</em></div>
            <div className="automation-line"><b>03</b><span>Qualification branch</span><em>If / Else</em></div>
            <div className="automation-line"><b>04</b><span>Appointment nurture</span><em>Workflow</em></div>
            <div className="automation-line active"><b>05</b><span>Booked call</span><em>Goal reached</em></div>
          </div>
        </motion.div>
      </section>

      <section className="signal-bar">
        <div className="container signal-grid">
          <div><strong>System-first</strong><span>Not just attractive pages</span></div>
          <div><strong>Modular workflows</strong><span>Cleaner and easier to maintain</span></div>
          <div><strong>Business logic</strong><span>Built around real customer journeys</span></div>
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="section-heading">
          <div>
            <div className="eyebrow">FEATURED BUILDS</div>
            <h2>Systems I can show, explain, and rebuild.</h2>
          </div>
          <p>Each case study focuses on the business problem, the backend automation, and the customer journey—not only the front-end design.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </section>

      <section className="section container" id="about">
        <div className="about-layout">
          <motion.div
            className="about-photo-card"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-photo-frame">
              <img src={profilePhoto} alt="Charles Jacob Lat" className="about-photo" />
              <div className="about-photo-overlay" />
            </div>
            <div className="about-photo-meta">
              <div>
                <strong>Charles Jacob Lat</strong>
                <span>GoHighLevel & Automation Specialist</span>
              </div>
              <span className="available-dot">Available</span>
            </div>
          </motion.div>

          <motion.div
            className="about-intro"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow">ABOUT ME</div>
            <h2>Building systems with both technical and business thinking.</h2>
            <p>
              I’m Charles Jacob Lat, a Computer Science graduate and GoHighLevel automation specialist focused on building systems that make business processes simpler, more organized, and easier to scale.
            </p>
            <p>
              My technical background helps me approach automation beyond simply connecting actions together. I look at how leads move through a business, where repetitive work can be reduced, and how the CRM should be structured so the entire customer journey stays clear and manageable.
            </p>
            <p>
              I use GoHighLevel to build CRM pipelines, automated workflows, funnels, booking systems, lead nurturing sequences, forms, calendars, and client onboarding processes. I continue sharpening those skills by building real-world systems and portfolio projects around practical business problems.
            </p>
          </motion.div>
        </div>

        <div className="about-cards about-cards-row">
          <motion.div className="about-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span>01</span>
            <small>BACKGROUND</small>
            <h3>Computer Science</h3>
            <p>A technical foundation in systems, software, structured thinking, and problem solving.</p>
          </motion.div>
          <motion.div className="about-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
            <span>02</span>
            <small>SPECIALIZATION</small>
            <h3>GoHighLevel</h3>
            <p>CRM architecture, workflows, funnels, pipelines, calendars, lead nurturing, and automation.</p>
          </motion.div>
          <motion.div className="about-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <span>03</span>
            <small>APPROACH</small>
            <h3>Problem Solving</h3>
            <p>Understand the process first, identify the friction, then automate what actually matters.</p>
          </motion.div>
        </div>
      </section>

      <section className="section container" id="capabilities">
        <div className="section-heading narrow">
          <div>
            <div className="eyebrow">WHAT I BUILD</div>
            <h2>GoHighLevel systems with the operations behind them.</h2>
          </div>
        </div>
        <div className="capability-grid">
          {capabilities.map(([title, description], index) => (
            <motion.div
              key={title}
              className="capability-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <span className="cap-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="process-box">
          <div>
            <div className="eyebrow">HOW I THINK</div>
            <h2>Start with the customer journey. Then automate the repetitive work.</h2>
          </div>
          <div className="process-steps">
            <span>01 Map the process</span>
            <span>02 Build the CRM structure</span>
            <span>03 Connect triggers & actions</span>
            <span>04 Test every path</span>
            <span>05 Improve the handoffs</span>
          </div>
        </div>
      </section>

      <section className="section container" id="contact">
        <div className="contact-panel">
          <div>
            <div className="eyebrow">AVAILABLE FOR GHL WORK</div>
            <h2>Need someone who can build the system, not just follow clicks?</h2>
            <p>I’m available for freelance projects, ongoing GoHighLevel support, and remote opportunities. If you have a system that needs to be built, cleaned up, or automated, let’s connect.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:latcharlesjacob@gmail.com">Email Me</a>
            <a className="button button-secondary" href="https://wa.me/639674101235" target="_blank" rel="noreferrer">WhatsApp Me</a>
          </div>
        </div>
      </section>
    </main>
  )
}
