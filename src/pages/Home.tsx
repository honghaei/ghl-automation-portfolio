import { useMemo, useState } from 'react'
import WhatsAppContact from '../components/WhatsAppContact'
import ProjectCard from '../components/ProjectCard'
import LeadSenseFeature from '../components/LeadSenseFeature'
import profilePhoto from '../assets/charles-jacob-lat.jpg'
import { projects } from '../data/projects'
import { ghlProjects } from '../data/ghlProjects'
import { funnels } from '../data/funnels'
import FunnelCard from '../components/FunnelCard'
import './FunnelShowcase.css'
import './HomeRedesign.css'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What do you actually build?',
    answer:
      'I build GoHighLevel funnels, automation systems, CRM workflows, responsive web applications, and mobile apps. I focus on practical systems that make business processes easier to manage and reduce repetitive work.',
  },
  {
    question: 'What platforms and technologies do you work with?',
    answer:
      'My work includes GoHighLevel, React, TypeScript, React Native, Expo, JavaScript, HTML, CSS, PHP, MySQL, Firebase, and other tools depending on the needs of the project.',
  },
  {
    question: 'Do you only work with GoHighLevel?',
    answer:
      'No. GoHighLevel and automation are one of my main specializations, but I also build web applications, mobile applications, dashboards, and business systems.',
  },
  {
    question: 'Can you build full websites and apps?',
    answer:
      'Yes. I can work on frontend interfaces, responsive websites, CRUD-based systems, mobile applications, and the supporting logic needed to turn an idea into a working product.',
  },
  {
    question: 'Are you available for freelance or remote work?',
    answer:
      'Yes. I am open to freelance projects and remote opportunities involving GoHighLevel, automation, web development, and app development.',
  },
  {
    question: 'How can I contact you?',
    answer:
      'You can reach me through email at latcharlesjacob@gmail.com or use the WhatsApp contact button on this portfolio to view and copy my number.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number>(0)

  // Present CampusFlow ahead of HRMS without changing their case-study records.
  const orderedDevelopmentProjects = useMemo(() => {
    const items = [...projects]
    const hrms = items.findIndex(project => project.slug === 'iparcel-hrms')
    const campusflow = items.findIndex(project => project.slug === 'campusflow-learning-management-system')
    if (hrms !== -1 && campusflow !== -1) {
      ;[items[hrms], items[campusflow]] = [items[campusflow], items[hrms]]
    }
    return items
  }, [])

  const openWhatsApp = () => {
    window.dispatchEvent(new Event('open-whatsapp-contact'))
  }

  const flowdeskProject = useMemo(
    () => ghlProjects.find((project) => project.slug === 'flowdesk-support-ticketing-automation'),
    []
  )

  const supportingGhlProjects = useMemo(
    () =>
      ghlProjects.filter((project) =>
        ['velora-aesthetics-crm-automation', 'csquared-crm-sales-automation'].includes(
          project.slug
        )
      ),
    []
  )

  return (
    <div className="portfolio-home" id="home">
      <main>
        <section className="portfolio-home-section portfolio-hero">
          <div className="portfolio-hero-copy">
            <p className="portfolio-home-eyebrow">Open for opportunities</p>

            <h1 className="portfolio-hero-title">
              Hi, I&apos;m <span className="accent">Charles Jacob Lat</span>
            </h1>

            <p className="portfolio-hero-roles">
              <span className="accent">GHL Specialist</span> · Funnel Builder · Automation Specialist ·{' '}
              <span className="accent">Web Developer</span> · App Developer
            </p>

            <p className="portfolio-hero-description">
              I build systems, websites, and applications that solve practical business
              problems — from GoHighLevel CRM automation and lead workflows to responsive
              web applications and cross-platform mobile experiences.
            </p>

            <div className="portfolio-hero-actions">
              <a className="portfolio-primary-btn" href="#projects">
                View My Work <span aria-hidden="true">↗</span>
              </a>

              <a className="portfolio-secondary-btn" href="#about">
                About Me
              </a>
            </div>
          </div>

          <div className="portfolio-focus-grid" aria-label="Areas of expertise">
            <article className="portfolio-focus-card">
              <div className="portfolio-focus-icon">⚙</div>
              <h3>Automation Systems</h3>
              <p>
                GoHighLevel CRM architecture, pipelines, funnels, workflows, lead nurturing,
                appointment automation, and business process automation.
              </p>
              <div className="portfolio-chip-row">
                <span className="portfolio-chip green">GoHighLevel</span>
                <span className="portfolio-chip">CRM</span>
                <span className="portfolio-chip">Workflows</span>
              </div>
            </article>

            <article className="portfolio-focus-card">
              <div className="portfolio-focus-icon">&lt;/&gt;</div>
              <h3>Web Development</h3>
              <p>
                Responsive websites and web applications focused on usability, clean
                interfaces, business logic, and real-world workflows.
              </p>
              <div className="portfolio-chip-row">
                <span className="portfolio-chip green">React</span>
                <span className="portfolio-chip">TypeScript</span>
                <span className="portfolio-chip">Web Apps</span>
              </div>
            </article>

            <article className="portfolio-focus-card">
              <div className="portfolio-focus-icon">▯</div>
              <h3>App Development</h3>
              <p>
                Cross-platform mobile applications with practical features, interactive
                interfaces, local or cloud data, and business-focused functionality.
              </p>
              <div className="portfolio-chip-row">
                <span className="portfolio-chip green">React Native</span>
                <span className="portfolio-chip">Expo</span>
                <span className="portfolio-chip">Mobile</span>
              </div>
            </article>

            <article className="portfolio-focus-card">
              <div className="portfolio-focus-icon">◇</div>
              <h3>Business Systems</h3>
              <p>
                Systems for managing operations such as inventory, employees, learning
                content, customer data, transactions, and internal processes.
              </p>
              <div className="portfolio-chip-row">
                <span className="portfolio-chip green">CRUD</span>
                <span className="portfolio-chip">Dashboards</span>
                <span className="portfolio-chip">Data</span>
              </div>
            </article>
          </div>
        </section>

        <section
          className="portfolio-ghl-section"
          id="projects"
          aria-labelledby="ghl-projects-title"
        >
          <div className="portfolio-home-section">
            <div className="portfolio-ghl-head">
              <div className="portfolio-ghl-head-left">
                <p className="portfolio-home-eyebrow">GoHighLevel projects / built & validated</p>
                <h2 id="ghl-projects-title">Systems I can show, explain, and rebuild.</h2>
              </div>

              <p className="portfolio-ghl-head-right">
                Three documented GoHighLevel builds — from branded customer journeys to
                engineered CRM and support workflows. Each project is presented with
                implementation detail, operational context, and proof.
              </p>
            </div>

            {flowdeskProject && (
              <article className="portfolio-ghl-flagship" aria-label="Featured FlowDesk project">
                <a className="portfolio-ghl-flagship-hitarea"
                   href="/ghl-project/flowdesk-support-ticketing-automation"
                   aria-label="View the FlowDesk flagship case study — click anywhere on this project card" />
                <div className="portfolio-ghl-flagship-copy">
                  <div className="portfolio-ghl-flagship-badges">
                    <span className="portfolio-ghl-badge">★ Flagship GHL project</span>
                    <span className="portfolio-ghl-badge portfolio-ghl-badge--muted">
                      Built in GoHighLevel
                    </span>
                  </div>

                  <h3>{flowdeskProject.title}</h3>

                  <p className="portfolio-ghl-flagship-description">
                    FlowDesk is my flagship GoHighLevel systems build: a structured support
                    ticketing solution that turns incoming issues into CRM-managed tickets
                    with category routing, stage-aware workflow logic, branded email
                    communication, and reply-aware handling.
                  </p>

                  <div className="portfolio-ghl-metrics" aria-label="FlowDesk proof points">
                    <div className="portfolio-ghl-metric">
                      <strong>08</strong>
                      <span>Configured GHL workflows</span>
                    </div>
                    <div className="portfolio-ghl-metric">
                      <strong>05</strong>
                      <span>Branded email templates</span>
                    </div>
                    <div className="portfolio-ghl-metric">
                      <strong>01</strong>
                      <span>Unified support pipeline</span>
                    </div>
                    <div className="portfolio-ghl-metric">
                      <strong>Live</strong>
                      <span>Core intake & reply verification</span>
                    </div>
                  </div>

                  <div className="portfolio-chip-row">
                    {['GoHighLevel', 'Support System', 'CRM Pipeline', 'Automation'].map((tool, index) => (
                      <span className={`portfolio-chip${index === 0 ? ' green' : ''}`} key={tool}>
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="portfolio-ghl-flagship-actions">
                    <a
                      className="portfolio-primary-btn"
                      href="/ghl-project/flowdesk-support-ticketing-automation"
                    >
                      Explore flagship case study <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      className="portfolio-secondary-link"
                      href="/ghl-project/flowdesk-support-ticketing-automation#fd-evidence"
                    >
                      View real GHL evidence <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                </div>

                <a
                  className="portfolio-ghl-flagship-visual"
                  href="/ghl-project/flowdesk-support-ticketing-automation"
                  aria-label="Open FlowDesk case study"
                >
                  <img
                    src={flowdeskProject.image}
                    alt="FlowDesk showcase preview"
                    loading="lazy"
                  />
                </a>
              </article>
            )}

            <div className="portfolio-ghl-support-grid">
              {supportingGhlProjects.map((project) => (
                <article
                  className={`portfolio-ghl-card portfolio-ghl-card--support${
                    project.slug === 'csquared-crm-sales-automation'
                      ? ' portfolio-ghl-card--csquared'
                      : ''
                  }`}
                  key={project.slug}
                >
                  <div className="portfolio-ghl-card-top">
                    <span className="portfolio-ghl-badge">{project.badge}</span>
                    <span className="portfolio-ghl-status">{project.status}</span>
                  </div>

                  {project.image && (
                    <div className="portfolio-ghl-preview">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="portfolio-chip-row">
                    {project.tools.map((tool, index) => (
                      <span
                        className={`portfolio-chip${index === 0 ? ' green' : ''}`}
                        key={tool}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    className="portfolio-ghl-link"
                    href={`/ghl-project/${project.slug}`}
                    aria-label={`View ${project.title} case study`}
                  >
                    View existing case study <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-funnels-section" id="funnels" aria-labelledby="portfolio-funnels-heading">
          <div className="portfolio-home-section">
            <div className="portfolio-funnel-heading">
              <div>
                <p className="portfolio-home-eyebrow">Live GoHighLevel funnel demos</p>
                <h2 id="portfolio-funnels-heading">Designed to convert. Built to explore.</h2>
              </div>
              <p>Three distinct brand journeys, each with a live, browsable funnel and a documented case study—from sample-only demos to CRM-integrated booking.</p>
            </div>
            <div className="portfolio-funnel-grid">
              {funnels.map((funnel) => <FunnelCard key={funnel.slug} funnel={funnel} />)}
            </div>
            <p className="portfolio-funnel-footnote">Portfolio demonstrations using GoHighLevel preview URLs. AURA and FORME are fictional, non-collecting interactive demos; Velora’s CRM results come from controlled tests.</p>
          </div>
        </section>

        <section
          className="portfolio-content-section"
          id="development-projects"
          aria-labelledby="development-projects-title"
        >
          <div className="portfolio-home-section">
            <div className="portfolio-section-head">
              <p className="portfolio-home-eyebrow">Featured development projects</p>
              <h2 id="development-projects-title">Web and app projects.</h2>
              <p>
                A selection of projects that showcase my experience across mobile
                development, web applications, and business systems.
              </p>
            </div>

            <LeadSenseFeature />

            <div className="portfolio-project-grid">
              {orderedDevelopmentProjects.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="portfolio-content-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="portfolio-home-section portfolio-about-grid">
            <div className="portfolio-about-photo">
              <img src={profilePhoto} alt="Charles Jacob Lat" />
            </div>

            <div className="portfolio-about-copy">
              <p className="portfolio-home-eyebrow">About me / engineering & automation</p>
              <h2 id="about-title">
                I turn business processes into <span className="accent">well-built digital systems.</span>
              </h2>

              <p>
                I&apos;m a Computer Science graduate specializing in GoHighLevel automation,
                CRM operations, full-stack web development, and mobile applications.
                I combine the technical side of development with an understanding of how
                a business actually works — from customer intake to internal operations,
                reporting, and the user experience.
              </p>

              <p>
                My work includes multi-step GoHighLevel ticketing and qualification workflows,
                responsive applications, CRM pipelines, database-backed dashboards,
                interactive 3D experiences, and context-aware financial tools.
                I design the underlying logic, build the interface, validate the behavior,
                and document the result so a client can understand how the system operates.
              </p>

              <p>
                <strong>What you can expect:</strong> proactive problem-solving, clear communication,
                deliberate testing, and ownership of the project from requirements to a
                practical deliverable. I focus on systems that are easy to use, explain,
                extend, and maintain.
              </p>

              <div className="portfolio-about-pillars">
                <div className="portfolio-about-pillar">
                  <span>Architect</span>
                  <strong>CRM processes &amp; workflow logic</strong>
                </div>

                <div className="portfolio-about-pillar">
                  <span>Build</span>
                  <strong>Full-stack web &amp; mobile products</strong>
                </div>

                <div className="portfolio-about-pillar">
                  <span>Validate</span>
                  <strong>Testing, reliability &amp; documentation</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="portfolio-content-section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="portfolio-home-section">
            <div className="portfolio-section-head">
              <p className="portfolio-home-eyebrow">Skills &amp; technical capabilities</p>
              <h2 id="skills-title">The tools behind the systems I build.</h2>
              <p>
                My skills combine workflow architecture, frontend development, backend integration,
                mobile engineering, data handling, and reliable delivery. Each capability is
                demonstrated through the projects featured on this site.
              </p>
            </div>

            <div className="portfolio-skills-grid portfolio-skills-grid--updated">
              <article className="portfolio-skill-card">
                <span className="portfolio-skill-kicker">01 / Business automation</span>
                <h3>GoHighLevel &amp; CRM Systems</h3>
                <p>Support-ticket pipelines, lead qualification, stage-based workflows, email sequences, appointment journeys and API-aware integrations.</p>
                <div className="portfolio-skill-list">
                  {['GoHighLevel', 'CRM Pipelines', 'Workflows & Triggers', 'Forms & Funnels', 'Custom Fields', 'Email Automation', 'Webhooks', 'REST APIs', 'A2P 10DLC Configuration'].map(skill => <span className="portfolio-chip" key={skill}>{skill}</span>)}
                </div>
              </article>

              <article className="portfolio-skill-card">
                <span className="portfolio-skill-kicker">02 / Web engineering</span>
                <h3>Full-Stack Applications</h3>
                <p>Production-oriented interfaces, role-based business systems, reusable components, API integrations and structured data operations.</p>
                <div className="portfolio-skill-list">
                  {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Laravel', 'PHP', 'MySQL', 'Responsive UI'].map(skill => <span className="portfolio-chip" key={skill}>{skill}</span>)}
                </div>
              </article>

              <article className="portfolio-skill-card">
                <span className="portfolio-skill-kicker">03 / Mobile &amp; geospatial</span>
                <h3>Apps &amp; Interactive Experiences</h3>
                <p>Cross-platform mobile products, local-first persistence, finance dashboards and advanced map-based discovery interfaces.</p>
                <div className="portfolio-skill-list">
                  {['React Native', 'Expo', 'AsyncStorage', 'React Navigation', 'CesiumJS', 'OpenStreetMap', 'Wikimedia', 'UI/UX Design'].map(skill => <span className="portfolio-chip" key={skill}>{skill}</span>)}
                </div>
              </article>

              <article className="portfolio-skill-card">
                <span className="portfolio-skill-kicker">04 / Data &amp; delivery</span>
                <h3>AI, Data &amp; Deployment</h3>
                <p>Evidence-backed machine-learning research, Python APIs, database-backed architecture, version control and tested release workflows.</p>
                <div className="portfolio-skill-list">
                  {['Python', 'FastAPI', 'scikit-learn', 'Local RAG', 'Supabase', 'Git & GitHub', 'Netlify', 'Render', 'Testing & QA'].map(skill => <span className="portfolio-chip" key={skill}>{skill}</span>)}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="portfolio-content-section"
          id="faqs"
          aria-labelledby="faq-title"
        >
          <div className="portfolio-home-section">
            <div className="portfolio-faq-shell">
              <div className="portfolio-faq-header">
                <p className="portfolio-home-eyebrow">FAQs</p>
                <h2 id="faq-title">Quick answers.</h2>
                <p>A few things clients and employers usually want to know.</p>
              </div>

              {faqs.map((faq, index) => {
                const isOpen = openFaq === index

                return (
                  <div
                    className={`portfolio-faq-item${isOpen ? ' is-open' : ''}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="portfolio-faq-button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span className="portfolio-faq-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="portfolio-faq-question">{faq.question}</span>
                      <span className="portfolio-faq-icon" aria-hidden="true">
                        +
                      </span>
                    </button>

                    <div className="portfolio-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section
          className="portfolio-content-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="portfolio-home-section">
            <div className="portfolio-contact-panel">
              <div>
                <p className="portfolio-home-eyebrow">Available for work</p>
                <h2 id="contact-title">Have a project or opportunity in mind?</h2>
                <p>
                  I&apos;m open to GoHighLevel, automation, web development, app
                  development, freelance, and remote opportunities.
                </p>
              </div>

              <div className="portfolio-contact-actions">
                <a
                  className="portfolio-primary-btn"
                  href="mailto:latcharlesjacob@gmail.com"
                >
                  Email Me
                </a>

                <button
                  className="portfolio-secondary-btn"
                  type="button"
                  onClick={openWhatsApp}
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppContact />
    </div>
  )
}
