import { Link, useParams } from 'react-router-dom'
import ScrollProcessTimeline from '../components/ScrollProcessTimeline'
import { funnels } from '../data/funnels'
import './FunnelCaseStudy.css'

type FunnelStory = {
  kicker: string
  headline: string
  highlight: string
  narrative: string
  businessProblem: string
  conversionGoal: string
  audienceExperience: string
  decisions: { title: string; body: string }[]
  captions: string[]
  buildNotes: string[]
  closing: string
}

const stories: Record<string, FunnelStory> = {
  'aura-skin-studio': {
    kicker: 'Editorial experience / GoHighLevel funnel design',
    headline: 'Designed to inspire trust',
    highlight: 'in aesthetic care.',
    narrative: 'I build premium, conversion-focused GoHighLevel funnels for aesthetic clinics and skincare brands. AURA demonstrates the full experience: compelling clinic positioning, a carefully guided consultation journey, polished mobile design, and a clear next step for prospective clients. The result is the kind of branded digital front door I can adapt to a real clinic’s services and workflow.',
    businessProblem: 'A skincare brand needs to communicate trust and premium positioning before asking someone to take action. A disconnected landing page and form can make the experience feel transactional and dilute the message.',
    conversionGoal: 'Build a clear, low-friction path to a sample consultation while maintaining a consistent editorial identity across three connected pages.',
    audienceExperience: 'Visitors first understand the studio’s positioning, then explore a structured consultation experience, and finish with an honest demonstration completion state. No real appointment or inquiry is submitted.',
    decisions: [
      { title: 'Brand before form', body: 'A restrained visual system—warm ivory, burgundy, confident serif typography, and high-quality skincare imagery—creates context before the call to action.' },
      { title: 'Clear progression', body: 'Three linked GoHighLevel pages carry the visitor through discovery, sample consultation, and completion without losing the design language.' },
      { title: 'Validation without collection', body: 'Required-field behavior was included for interaction quality while keeping the experience explicitly sample-only and non-collecting.' },
    ],
    captions: [
      'The landing experience is the first trust-building moment. Photography, editorial typography, and one clear consultation action establish the visual direction.',
      'The consultation step turns interest into a guided, low-friction interaction with clear form hierarchy and validation.',
      'The closing screen confirms the sample journey is complete without implying a real booking or submission.',
      'The GoHighLevel builder view documents the three connected pages behind the branded customer experience.',
    ],
    buildNotes: ['GoHighLevel funnel builder', 'Responsive landing and form pages', 'Custom branded styling', 'Connected three-step navigation', 'Sample-only interaction and validation'],
    closing: 'AURA demonstrates the level of brand presentation and thoughtful conversion UX I can build for an aesthetics practice: professional first impressions, clear patient journeys, functional GoHighLevel pages, and a foundation ready for authorized CRM integration.',
  },
  'forme-coaching': {
    kicker: 'High-impact conversion design / GoHighLevel funnels',
    headline: 'Make the first step feel',
    highlight: 'like forward progress.',
    narrative: 'FORME is a fictional fitness coaching funnel designed to communicate purpose, build motivation, and guide visitors into a focused sample application. I paired a high-contrast visual system with an intentional three-stage journey.',
    businessProblem: 'Fitness offers can become visually noisy or vague about the next action. The challenge was to communicate a strong program identity while making the application process easy to understand and complete.',
    conversionGoal: 'Create a direct path from program discovery to a structured sample application, keeping messaging, navigation, and screen design consistent throughout.',
    audienceExperience: 'Visitors see a bold coaching proposition, move into a responsive application with sample choices, and receive a clear completion message. The experience is a demonstration and does not collect or send a real coaching application.',
    decisions: [
      { title: 'Focused value proposition', body: 'Bold headings, disciplined spacing, black-and-lime accents, and professional training imagery emphasize the offer and reduce decision friction.' },
      { title: 'Application-oriented UX', body: 'The second page organizes sample questions into a readable sequence with responsive field groups and clear validation feedback.' },
      { title: 'Credible finish', body: 'The final screen maintains visual consistency and confirms only the simulated journey—not a real application or coaching commitment.' },
    ],
    captions: [
      'An energetic, highly legible landing page presents the coaching proposition and drives attention toward the primary application action.',
      'The structured application illustrates hierarchy, input clarity, sample choices, and responsive form behavior.',
      'A purpose-built completion screen closes the experience cleanly without suggesting user data was submitted.',
      'GoHighLevel evidence shows the landing, application, and completion pages as one connected funnel.',
    ],
    buildNotes: ['GoHighLevel funnel builder', 'Branded black-and-lime design system', 'Responsive application interface', 'Three connected funnel steps', 'Sample-only interaction and validation'],
    closing: 'The project demonstrates my ability to translate a service offer into a focused customer journey: messaging, page hierarchy, conversion controls, and functional implementation working together.',
  },
}

const stageNames = ['01 / LANDING EXPERIENCE', '02 / INTERACTIVE STEP', '03 / COMPLETION', '04 / PLATFORM IMPLEMENTATION']

export default function FunnelCaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const funnel = funnels.find((item) => item.slug === slug && item.theme !== 'velora')

  if (!funnel) {
    return <main className="funnel-case-page"><div className="funnel-case-shell funnel-case-empty"><Link to="/#funnels">← Back to funnels</Link><h1>Funnel not found.</h1></div></main>
  }

  const story = stories[funnel.slug]
  const urls = [funnel.previewUrl, funnel.formUrl, funnel.thankYouUrl]

  return (
    <main className={`funnel-case-page funnel-case-page--${funnel.theme}`}>
      <div className="funnel-case-shell">
        <Link className="funnel-case-back" to="/#funnels">← All GoHighLevel funnels</Link>
        <header className="funnel-case-hero" aria-labelledby="funnel-title">
          <div className="funnel-case-hero-copy">
            <span className="funnel-case-eyebrow">{story.kicker}</span>
            <p className="funnel-case-brand">{funnel.name} <span>/ Customer experience case study</span></p>
            <h1 id="funnel-title">{story.headline} <em>{story.highlight}</em></h1>
            <p className="funnel-case-lead">{story.narrative}</p>
            <div className="funnel-case-tags"><span>Built in GoHighLevel</span><span>{funnel.goal}</span><span>3 connected screens</span></div>
            <div className="funnel-case-hero-actions">
              <a href={funnel.previewUrl} target="_blank" rel="noopener noreferrer" className="funnel-case-primary">Explore working preview ↗</a>
              <a href="#funnel-experience" className="funnel-case-outline">Explore the customer journey ↓</a>
            </div>
            {funnel.theme === 'aura' && <a className="funnel-case-client-cta" href="/#contact">Own an aesthetics or medical practice? Let's build a branded consultation journey for your business ↗</a>}
            <p className="funnel-case-disclaimer"><strong>Demonstration build.</strong> Fictional brand with sample-only interactions. No real consultation, coaching application, or appointment is submitted.</p>
          </div>
          <div className="funnel-case-hero-art">
            <a className="funnel-case-hero-image" href={funnel.previewUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open working ${funnel.name} funnel`}>
              <img src={funnel.screenshots[0].src} alt={`Actual ${funnel.name} GoHighLevel landing experience`} />
              <span>Visit actual GoHighLevel preview ↗</span>
            </a>
            <div className="funnel-case-hero-art-bottom"><span>CREATIVE DIRECTION / WORKING FUNNEL</span><span>{funnel.name.toUpperCase()}</span></div>
          </div>
        </header>
      </div>

      <section className="funnel-case-proof-band" aria-label="Implementation facts">
        <div className="funnel-case-shell funnel-case-proof-row">
          <div><strong>03</strong><span>Connected funnel steps</span></div>
          <div><strong>GHL</strong><span>Native platform builder</span></div>
          <div><strong>Responsive</strong><span>Desktop and mobile</span></div>
          <div><strong>Tested</strong><span>Sample journey verification</span></div>
        </div>
      </section>

      <section className="funnel-case-section" id="funnel-problem">
        <div className="funnel-case-shell">
          <div className="funnel-case-section-title"><span className="funnel-case-eyebrow">01 / The brief</span><h2>Not just a landing page. <em>A designed customer journey.</em></h2><p>{story.conversionGoal}</p></div>
          <div className="funnel-case-brief-grid">
            <article><span>THE BUSINESS CHALLENGE</span><h3>What needed solving</h3><p>{story.businessProblem}</p></article>
            <article><span>MY APPROACH</span><h3>How I addressed it</h3><p>{funnel.approach}</p></article>
            <article><span>THE CUSTOMER EXPERIENCE</span><h3>What the visitor actually does</h3><p>{story.audienceExperience}</p></article>
          </div>
        </div>
      </section>

      <section className="funnel-case-section funnel-case-section--process" id="funnel-experience">
        <div className="funnel-case-shell">
          <div className="funnel-case-section-title"><span className="funnel-case-eyebrow">02 / Journey architecture</span><h2>Three connected stages. <em>One clear direction.</em></h2><p>Each step is designed to earn the next action. Open the live pages to inspect the working demo—not only these screenshots.</p></div>
          <ScrollProcessTimeline title={`${funnel.name} / Funnel journey`} steps={funnel.steps.map((step,i)=>({title:step,detail:story.captions[i] ?? 'A step in the visitor journey.',eyebrow:`FUNNEL STEP ${String(i+1).padStart(2,'0')}`}))} note="Use the original page links below to explore the actual saved funnel previews."/>
          <nav className="funnel-case-journey" aria-label="Open the three funnel preview pages">
            {funnel.steps.map((step, i) => <a href={urls[i]} key={step} target="_blank" rel="noopener noreferrer" className="funnel-case-journey-step"><span>{String(i + 1).padStart(2,'0')} / LIVE PAGE</span><h3>{step}</h3><p>{story.captions[i]}</p><b>Explore step ↗</b></a>)}
          </nav>
        </div>
      </section>

      <section className="funnel-case-section">
        <div className="funnel-case-shell">
          <div className="funnel-case-section-title"><span className="funnel-case-eyebrow">03 / Experience decisions</span><h2>Deliberate design, <em>supported by implementation.</em></h2><p>The interaction and visual choices serve a practical purpose: strengthen trust, reduce uncertainty, and make the desired action unmistakable.</p></div>
          <div className="funnel-case-decisions">
            {story.decisions.map((item, i) => <article key={item.title}><span>{String(i + 1).padStart(2,'0')}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="funnel-case-section funnel-case-section--work" id="funnel-case-evidence">
        <div className="funnel-case-shell">
          <div className="funnel-case-section-title"><span className="funnel-case-eyebrow">04 / Walk through the actual build</span><h2>From first impression <em>to completed journey.</em></h2><p>Each image shows a genuine page or builder view from the saved GoHighLevel project. Each screen has a different purpose in the customer experience.</p></div>
          <div className="funnel-case-storyboard">
            {funnel.screenshots.map((shot, i) => <article className={`funnel-case-scene${i % 2 === 1 ? ' funnel-case-scene--reverse' : ''}`} key={shot.src}>
              <a className="funnel-case-scene-media" href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={`View complete ${shot.title} screenshot`}>
                <img src={shot.src} alt={`${funnel.name}: ${shot.title}`} loading="lazy" />
                <span>View original capture ↗</span>
              </a>
              <div className="funnel-case-scene-copy"><span className="funnel-case-eyebrow">{stageNames[i] || `0${i + 1} / PROJECT EVIDENCE`}</span><h3>{shot.title}</h3><p>{story.captions[i] || shot.note}</p><small>{shot.note}</small>{i < 3 && <a href={urls[i]} target="_blank" rel="noopener noreferrer">Open this step ↗</a>}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="funnel-case-section">
        <div className="funnel-case-shell funnel-case-delivery">
          <div className="funnel-case-delivery-intro"><span className="funnel-case-eyebrow">05 / Implementation</span><h2>Built directly <em>inside GoHighLevel.</em></h2><p>I was responsible for bringing the visual design and working navigation into the native funnel builder, not merely producing a static mockup.</p><p className="funnel-case-verification">{funnel.testNote} The project is a controlled demonstration; conversion or revenue results are not claimed.</p></div>
          <div className="funnel-case-delivery-list">{story.buildNotes.map((note,i)=><div key={note}><span>{String(i+1).padStart(2,'0')}</span><strong>{note}</strong></div>)}</div>
        </div>
      </section>

      <section className="funnel-case-section funnel-case-bottom"><div className="funnel-case-shell funnel-case-bottom-inner"><div><span className="funnel-case-eyebrow">The outcome / What this demonstrates</span><h2>Brand experience meets <em>technical execution.</em></h2><p>{story.closing}</p><p className="funnel-case-outcome-note">Available to build conversion-oriented GoHighLevel funnels and more advanced CRM workflows.</p></div><div className="funnel-case-bottom-actions"><a className="funnel-case-primary" href={funnel.previewUrl} target="_blank" rel="noopener noreferrer">Explore {funnel.name} ↗</a><a className="funnel-case-outline" href="/#contact">Discuss a project ↗</a></div></div></section>
    </main>
  )
}
