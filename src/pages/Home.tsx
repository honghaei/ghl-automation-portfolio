import { useState } from 'react'
import WhatsAppContact from '../components/WhatsAppContact'
import ProjectCard from '../components/ProjectCard'
import profilePhoto from '../assets/charles-jacob-lat.jpg'
import { projects } from '../data/projects'
import { ghlProjects } from '../data/ghlProjects'
import './HomeRedesign.css'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What do you actually build?',
    answer:
      'I build GoHighLevel automation systems, CRM workflows, responsive web applications, and mobile apps. I focus on practical systems that make business processes easier to manage and reduce repetitive work.',
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

  const openWhatsApp = () => {
    window.dispatchEvent(new Event('open-whatsapp-contact'))
  }

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
              <span className="accent">GHL Specialist</span> · Automation Specialist ·{' '}
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
                <p className="portfolio-home-eyebrow">GoHighLevel projects</p>
                <h2 id="ghl-projects-title">
                  Systems I can show, explain, and rebuild.
                </h2>
              </div>

              <p className="portfolio-ghl-head-right">
                These builds focus on the CRM structure, automation logic, customer journey,
                and operational flow behind the system — not only the front-end design.
              </p>
            </div>

            <div className="portfolio-ghl-grid">
              {ghlProjects.map((project) => (
                <article className="portfolio-ghl-card" key={project.slug}>
                  <div className="portfolio-ghl-card-top">
                    <span className="portfolio-ghl-badge">{project.badge}</span>
                    <span className="portfolio-ghl-status">{project.status}</span>
                  </div>

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
                    View case study <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
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

            <div className="portfolio-project-grid">
              {projects.map((project) => (
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
              <p className="portfolio-home-eyebrow">About me</p>
              <h2 id="about-title">
                Building practical systems with a developer&apos;s mindset.
              </h2>

              <p>
                I&apos;m Charles Jacob Lat, a Computer Science graduate focused on
                automation, web development, and application development. I enjoy taking a
                process or business problem, understanding how the pieces connect, and
                turning it into a working digital system.
              </p>

              <p>
                My work ranges from GoHighLevel CRM automation and workflow design to React
                web applications and React Native mobile apps. I approach each project with
                an emphasis on usability, maintainability, and solving the actual problem
                behind the build.
              </p>

              <div className="portfolio-about-pillars">
                <div className="portfolio-about-pillar">
                  <span>Automation</span>
                  <strong>GoHighLevel & CRM Systems</strong>
                </div>

                <div className="portfolio-about-pillar">
                  <span>Web</span>
                  <strong>React & TypeScript Development</strong>
                </div>

                <div className="portfolio-about-pillar">
                  <span>Apps</span>
                  <strong>React Native & Expo</strong>
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
              <p className="portfolio-home-eyebrow">Skills & technologies</p>
              <h2 id="skills-title">What I work with.</h2>
              <p>
                My toolkit spans CRM automation, modern frontend development, mobile
                development, databases, and business system design.
              </p>
            </div>

            <div className="portfolio-skills-grid">
              <article className="portfolio-skill-card">
                <h3>Automation & CRM</h3>
                <div className="portfolio-skill-list">
                  <span className="portfolio-chip green">GoHighLevel</span>
                  <span className="portfolio-chip">CRM Pipelines</span>
                  <span className="portfolio-chip">Workflows</span>
                  <span className="portfolio-chip">Funnels</span>
                  <span className="portfolio-chip">Forms</span>
                  <span className="portfolio-chip">Calendars</span>
                  <span className="portfolio-chip">Lead Nurturing</span>
                </div>
              </article>

              <article className="portfolio-skill-card">
                <h3>Web Development</h3>
                <div className="portfolio-skill-list">
                  <span className="portfolio-chip green">React</span>
                  <span className="portfolio-chip">TypeScript</span>
                  <span className="portfolio-chip">JavaScript</span>
                  <span className="portfolio-chip">HTML</span>
                  <span className="portfolio-chip">CSS</span>
                  <span className="portfolio-chip">PHP</span>
                  <span className="portfolio-chip">Responsive UI</span>
                </div>
              </article>

              <article className="portfolio-skill-card">
                <h3>Apps & Data</h3>
                <div className="portfolio-skill-list">
                  <span className="portfolio-chip green">React Native</span>
                  <span className="portfolio-chip">Expo</span>
                  <span className="portfolio-chip">MySQL</span>
                  <span className="portfolio-chip">Firebase</span>
                  <span className="portfolio-chip">CRUD</span>
                  <span className="portfolio-chip">Git</span>
                  <span className="portfolio-chip">GitHub</span>
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
