import LeadSenseScrollShowcase, { ShowcaseProof } from '../components/LeadSenseScrollShowcase'
import ScrollProcessTimeline from '../components/ScrollProcessTimeline'
import type { Project } from '../data/projects'
import './DevelopmentShowcase.css'

type Module = { number: string; title: string; text: string }
type EvidenceChapter = { title: string; eyebrow: string; explanation: string; shots: number[] }
type CaseNarrative = {
  eyebrow: string; title: string; emphasis: string; subtitle: string; audience: string
  challenges: Module[]; decisions: Module[]; process: Module[]
  technology: { title: string; tools: string; purpose: string }[]
  evidence: EvidenceChapter[]; result: string; boundary: string
}

const details: Record<string, CaseNarrative> = {
  'lakbay-3d-philippines-tourism-map': {
    eyebrow: 'Interactive geospatial product / Live Next.js platform',
    title: 'The Philippines, explored', emphasis: 'in three dimensions.',
    subtitle: 'I built Lakbay as a location-first travel discovery platform where provinces, attractions, maps and destination stories work together in one immersive experience.',
    audience: 'For travelers, explorers and teams who want a more intuitive way to navigate and discover destinations across the Philippine archipelago.',
    challenges: [
      {number:'01',title:'Destination discovery is fragmented',text:'Travelers must switch between maps, articles, and photo collections to understand a destination. I wanted one experience that connects location, context, and practical discovery.'},
      {number:'02',title:'Geographic complexity',text:'The Philippines spans thousands of islands and dozens of provinces. The interface needs to reveal information progressively without overwhelming the map.'},
      {number:'03',title:'Unreliable source data',text:'Public map entries vary in quality. Places must be traceable and reviewable before appearing as confidently curated recommendations.'},
    ],
    decisions: [
      {number:'01',title:'3D exploration as the core interface',text:'I used CesiumJS to make the map itself the main product. Province labels, interactive borders, camera transitions, and zoom-aware attraction markers create context before detail.'},
      {number:'02',title:'Curation rather than uncontrolled pins',text:'A Supabase-backed destination directory tracks candidate attractions, evidence, and review states; ingestion tools support controlled discovery rather than publishing every map result.'},
      {number:'03',title:'From map curiosity to trip planning',text:'Destination previews link to rich detail pages and credited imagery, while a browser-persistent wishlist helps users collect places for later.'},
    ],
    process: [
      {number:'01',title:'Explore the Philippines',text:'Start from a nationwide 3D view with province boundaries and labels.'},
      {number:'02',title:'Find the relevant destination',text:'Search, select provinces, or use map navigation to narrow the geographic area.'},
      {number:'03',title:'Discover verified attractions',text:'Open curated pins, previews, categories and source-backed destination details.'},
      {number:'04',title:'Create a shortlist',text:'Save favorites and use gallery, location and direction details to plan an itinerary.'},
    ],
    technology: [
      {title:'Product interface',tools:'Next.js 16 · React · TypeScript',purpose:'Page architecture, responsive UI, search, favorites and destination presentation.'},
      {title:'Geospatial experience',tools:'CesiumJS · Cesium ion',purpose:'3D map rendering, geographic camera movement, province selection and attraction positioning.'},
      {title:'Destination data',tools:'Supabase · OpenStreetMap · Wikimedia',purpose:'Stored destination information, curation metadata, source verification and attributed imagery.'},
      {title:'Release workflow',tools:'GitHub · Netlify',purpose:'Version control, environment configuration and deployment of the live site.'},
    ],
    evidence: [
      {eyebrow:'01 / Exploration',title:'A map that invites discovery',explanation:'The real experience starts with geographic context. Users move from a nationwide view into selected provinces and attraction previews without losing their place.',shots:[0,1]},
      {eyebrow:'02 / Destination content',title:'From a pin to a meaningful place',explanation:'Destination profiles turn map coordinates into something useful: cultural or natural context, credited images and practical visit information.',shots:[2,3]},
      {eyebrow:'03 / Product utility',title:'Save places, then return to them',explanation:'A personal wishlist bridges discovery and trip planning. The saved state remains available in the browser.',shots:[4]},
    ],
    result:'A publicly deployed 3D tourism discovery experience with searchable geography, curated destination profiles and a usable saved-places journey.',
    boundary:'Destination coverage evolves through evidence-based review. Do not interpret every external map candidate as a verified attraction.',
  },
  'campusflow-learning-management-system': {
    eyebrow:'Full-stack academic systems / Laravel & MySQL',
    title:'Education workflows,',emphasis:'connected end to end.',
    subtitle:'CampusFlow brings enrollment validation, course access, instructor publishing and learner progress into one coherent role-based learning management experience.',
    audience:'Designed around the operational needs of registrars, instructors and students—each with distinct access and workflows.',
    challenges:[
      {number:'01',title:'Enrollment should determine access',text:'Students need a clear path from registrar approval to the subjects and learning resources they are entitled to access — without inconsistent permissions or manual workarounds.'},
      {number:'02',title:'Teaching materials are fragmented',text:'Instructors need a simple way to publish subject-specific modules and files, while students need predictable access, previews and downloads.'},
      {number:'03',title:'Progress and records must remain visible',text:'Students need a clear sense of learning progress. Administrators and instructors need reliable messaging and certificate records rather than scattered artifacts.'},
    ],
    decisions:[
      {number:'01',title:'Role-based academic journeys',text:'Registrar-reviewed placement governs subject enrollment; student and instructor dashboards reflect the access and tasks relevant to each role.'},
      {number:'02',title:'Subject → modules → files',text:'A consistent hierarchy organizes course content. Instructors can publish learning resources and students can preview, download and mark progress.'},
      {number:'03',title:'Support the complete school experience',text:'Certificate assignment and in-app messaging sit alongside learning activity, while responsive interface refinements keep daily tasks practical.'},
    ],
    process:[
      {number:'01',title:'Sign in and confirm academic access',text:'The experience starts with role-based authentication and verified enrollment requirements.'},
      {number:'02',title:'Open assigned subjects',text:'Students see only the subjects available through their approved academic placement.'},
      {number:'03',title:'Learn and track progress',text:'Module files open in protected previews or downloads; course progress updates as learning activities are completed.'},
      {number:'04',title:'Collaborate and document achievement',text:'Instructors manage content, students use messaging, and certificates remain available for preview and download.'},
    ],
    technology:[
      {title:'Backend & access',tools:'Laravel · PHP',purpose:'Role-aware application logic, routes, academic enrollment checks and resource handling.'},
      {title:'UI & templates',tools:'Blade · JavaScript · Responsive CSS',purpose:'Student and instructor screens, subject navigation, interactions and mobile-friendly page layouts.'},
      {title:'Data persistence',tools:'MySQL',purpose:'Courses, enrollments, modules, account records, certificates and message data.'},
      {title:'Development environment',tools:'Laragon · Local test data',purpose:'Isolated validation using fictional student, instructor and academic records.'},
    ],
    evidence:[
      {eyebrow:'01 / Student experience',title:'An academic dashboard with a clear next step',explanation:'The student journey connects a high-level overview with assigned subjects and module progress so learning content is accessible without hunting through menus.',shots:[0,1,2]},
      {eyebrow:'02 / Content delivery',title:'Modules built around usable course resources',explanation:'Files can be previewed in context, and instructors have a separate workspace for managing what learners can access.',shots:[3,4,5]},
      {eyebrow:'03 / Academic governance',title:'Enrollment before access',explanation:'The registrar verification interface documents the academic gate that connects enrollment eligibility to student subject access.',shots:[6]},
      {eyebrow:'04 / Records & communication',title:'Keep achievement and discussion in one place',explanation:'Certificates and instructor messaging extend the platform beyond a list of files into a coordinated student experience.',shots:[7,8,9,10]},
    ],
    result:'A complete local demonstration of enrollment-aware LMS workflows, subject and module management, progress tracking, certificate handling and role-based communication.',
    boundary:'Validated in an isolated local demonstration environment with fictional academic records; it is not described as a live institutional deployment.',
  },
  'iparcel-hrms': {
    eyebrow:'Business operations / React + PHP + MySQL',
    title:'One workspace for',emphasis:'the people behind the business.',
    subtitle:'IParcel HRMS unifies multi-company HR administration in a full-stack system—from employee records and timekeeping to leave approval, reporting and communication.',
    audience:'Designed around administrators coordinating people operations across IParcel Plus, IPXpress, Swift and Nagali.',
    challenges:[
      {number:'01',title:'One reliable view of employee records',text:'When multiple companies manage people separately, HR teams lose time reconciling information. A centralized, searchable workspace makes company-specific records easier to maintain and review.'},
      {number:'02',title:'Daily HR operations demand consistency',text:'Timekeeping, leave requests, departments and announcements involve recurring decisions that benefit from one predictable workflow.'},
      {number:'03',title:'Reporting should not require manual rework',text:'Managers need fast views of headcount, attendance, leave, and milestones with accessible export and print pathways.'},
    ],
    decisions:[
      {number:'01',title:'A unified administrator command center',text:'A multi-company dashboard and filterable employee directory give HR one entry point for operational oversight and record updates.'},
      {number:'02',title:'Purpose-built management screens',text:'Separate interfaces support attendance, leave review, departments and announcements, preserving clear workflows without forcing every operation into one generic form.'},
      {number:'03',title:'Connected backend and reporting layer',text:'The React/TypeScript frontend communicates with a PHP backend and MySQL, supporting persistent records, review states and export-ready reports.'},
    ],
    process:[
      {number:'01',title:'Authenticate as HR administrator',text:'Enter a dedicated workspace designed for administrative work and protected access.'},
      {number:'02',title:'Manage employees and departments',text:'Add, update, search and filter people records with company-specific controls.'},
      {number:'03',title:'Process attendance and leave',text:'Record time entries, inspect daily rosters, and review pending requests with approval history.'},
      {number:'04',title:'Communicate and report',text:'Publish announcements and generate operational report views with download and print support.'},
    ],
    technology:[
      {title:'Frontend',tools:'React · TypeScript · Vite',purpose:'Responsive management screens, administrator workflows, dashboards and filtering.'},
      {title:'Backend',tools:'PHP · Axios',purpose:'Request handling and communication between the administrative interface and persistence layer.'},
      {title:'Database',tools:'MySQL',purpose:'Structured employee, department, attendance, leave and reporting data.'},
      {title:'Development tools',tools:'XAMPP · GitHub',purpose:'Local backend/database development and source-version management.'},
    ],
    evidence:[
      {eyebrow:'01 / Administration entry',title:'A clear view of the workforce',explanation:'An administrator-focused login and dashboard make the multi-company operating context visible immediately.',shots:[0,1]},
      {eyebrow:'02 / People management',title:'Records that are easy to search and maintain',explanation:'The employee directory and department screens organize the workforce while preserving company-specific filters and editing actions.',shots:[2,5]},
      {eyebrow:'03 / Daily HR operations',title:'Attendance and leave, handled in one system',explanation:'Time entry controls, roster summaries, and request review support routine HR decisions with traceable states.',shots:[3,4]},
      {eyebrow:'04 / Reporting & oversight',title:'Communicate, measure and administer',explanation:'Announcement management, report previews and administrator settings complete the operations suite.',shots:[6,7,8]},
    ],
    result:'A completed full-stack HR management project demonstrating persistent CRUD operations, multi-company organization, daily workforce workflows and reporting interfaces.',
    boundary:'Screenshots document the implemented administrative system; no client adoption or quantified productivity improvement is claimed.',
  },
}

function DevelopmentEvidenceChapter({ chapter, screenshots, index }: { chapter: EvidenceChapter; screenshots: Project['screenshots']; index: number }) {
  const selectedShots = chapter.shots.map(id => screenshots[id]).filter(shot => Boolean(shot?.image))
  if (!selectedShots.length) return null
  return <article className="dev-showcase-chapter">
    <header className="dev-showcase-chapter-heading">
      <span className="dev-kicker">{chapter.eyebrow}</span>
      <span className="dev-showcase-counter">CHAPTER {String(index + 1).padStart(2, '0')} / {String(selectedShots.length).padStart(2, '0')} SCREENS</span>
    </header>
    <h3 className="dev-showcase-editorial-title">{chapter.title}</h3>
    <p className="dev-showcase-editorial-lead">{chapter.explanation}</p>
    <LeadSenseScrollShowcase
      title={`${chapter.eyebrow} / Project screens`}
      steps={selectedShots.map(shot=>({title:shot.title,description:shot.description,eyebrow:chapter.eyebrow}))}
      renderContent={(_step, shotIndex) => {
        const shot = selectedShots[shotIndex]
        return <ShowcaseProof image={shot.image ?? ''} title={shot.title} description={shot.description}
          eyebrow={`REAL SCREEN / ${String(shotIndex+1).padStart(2,'0')} of ${selectedShots.length}`} />
      }}
    />
  </article>
}

export const isDetailedDevelopmentProject = (slug?: string) => Boolean(slug && details[slug])

export default function DevelopmentShowcase({ project }: { project: Project }) {
  const story = details[project.slug]
  if (!story) return null
  return <main className={`dev-case dev-case--${project.slug.split('-')[0]}`}>
    <section className="dev-case-shell dev-hero">
      <a className="dev-back" href="/#development-projects">← Back to development projects</a>
      <div className="dev-hero-grid">
        <div className="dev-hero-copy">
          <span className="dev-kicker">{story.eyebrow}</span>
          <p className="dev-project-name">{project.title}</p>
          <h1>{story.title} <em>{story.emphasis}</em></h1>
          <p className="dev-lead">{story.subtitle}</p>
          <div className="dev-tag-row">{project.stack.slice(0,5).map(item=><span key={item}>{item}</span>)}</div>
          <div className="dev-action-row">{project.liveUrl&&<a className="dev-btn dev-btn--primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Open live project ↗</a>}{project.githubUrl&&<a className="dev-btn dev-btn--ghost" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View source code ↗</a>}<a className="dev-btn dev-btn--ghost" href="#dev-evidence">Explore project evidence ↓</a></div>
          <p className="dev-verified"><span>●</span> {project.status} · {story.boundary}</p>
        </div>
        <div className="dev-hero-visual"><div className="dev-window-chrome"><span>● ● ●</span><span>PROJECT / REAL APPLICATION SCREEN</span><span>SHOWCASE</span></div><img src={project.screenshots[0]?.image ?? project.coverImage} alt={`${project.title} interface screenshot`} /><div className="dev-hero-visual-foot"><span>{project.type}</span><span>Evidence from the project</span></div></div>
      </div>
    </section>

    <section className="dev-case-band"><div className="dev-case-shell dev-band-grid"><div><strong>{project.stack.length.toString().padStart(2,'0')}</strong><span>Key technologies</span></div><div><strong>{story.process.length.toString().padStart(2,'0')}</strong><span>Core process steps</span></div><div><strong>{project.screenshots.length.toString().padStart(2,'0')}</strong><span>Documented app screens</span></div><div><strong>{project.status.includes('Live')?'LIVE':'BUILT'}</strong><span>{project.status.includes('Live')?'Publicly deployed':'Working implementation'}</span></div></div></section>

    <section className="dev-section dev-case-shell"><div className="dev-section-heading"><span className="dev-kicker">01 / Project context</span><h2>Understanding the problem <em>before building the interface.</em></h2><p>{story.audience}</p></div><div className="dev-problem-grid">{story.challenges.map(item=><article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><div className="dev-solution-statement"><span>THE DESIGN OBJECTIVE</span><h3>{project.solution}</h3></div></section>

    <section className="dev-section dev-section--surface"><div className="dev-case-shell"><div className="dev-section-heading"><span className="dev-kicker">02 / The implementation strategy</span><h2>Decisions that turn <em>requirements into a product.</em></h2><p>These are the architectural and product choices behind the screens—not just a list of features.</p></div><div className="dev-decision-grid">{story.decisions.map(item=><article key={item.number}><span>{item.number} / DECISION</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

    <section className="dev-section dev-case-shell"><div className="dev-section-heading"><span className="dev-kicker">03 / How the system works</span><h2>From the first action <em>to a useful outcome.</em></h2><p>The workflow below follows the real product design and helps explain how a user moves through the system.</p></div><ScrollProcessTimeline title={`${project.title} / Product journey`} steps={story.process.map(item=>({title:item.title,detail:item.text,eyebrow:`STEP ${item.number}`}))}/></section>

    <section className="dev-section dev-section--surface"><div className="dev-case-shell"><div className="dev-section-heading"><span className="dev-kicker">04 / Engineering stack</span><h2>Technology chosen <em>for a reason.</em></h2><p>Each technology supports a specific responsibility, from the user interface to data persistence and deployment.</p></div><div className="dev-tech-grid">{story.technology.map(item=><article key={item.title}><span>{item.title}</span><h3>{item.tools}</h3><p>{item.purpose}</p></article>)}</div></div></section>

    <section className="dev-section dev-case-shell" id="dev-evidence">
      <div className="dev-section-heading"><span className="dev-kicker">05 / Product in action</span><h2>Real screens. <em>Clear implementation decisions.</em></h2><p>Explore each part of the product through larger, interactive project evidence. Choose a screen to read what it does, then open the original image for full-resolution inspection.</p></div>
      <div className="dev-showcase-chapters">{story.evidence.map((chapter,index)=><DevelopmentEvidenceChapter chapter={chapter} screenshots={project.screenshots} index={index} key={chapter.title}/>)}</div>
    </section>

    <section className="dev-section dev-case-shell"><div className="dev-summary-panel"><div><span className="dev-kicker">06 / The outcome</span><h2>Built to solve a real workflow—not just fill a gallery.</h2><p>{story.result}</p><p className="dev-scope-note">Scope and verification: {story.boundary}</p></div><div className="dev-summary-actions">{project.liveUrl&&<a className="dev-btn dev-btn--primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Explore the live project ↗</a>}<a className="dev-btn dev-btn--ghost" href="/#contact">Discuss a similar system ↗</a></div></div></section>
  </main>
}
