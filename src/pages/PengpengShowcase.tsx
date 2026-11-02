import LeadSenseScrollShowcase, { ShowcaseProof } from '../components/LeadSenseScrollShowcase'
import { projects } from '../data/projects'
import './PengpengShowcase.css'

const project = projects.find(item => item.slug === 'pengpeng-ai-expense-tracker')!
const images = project.screenshots.filter(shot => Boolean(shot.image))
const paths = [
  { number:'01', title:'See the full financial picture', text:'Start at a connected dashboard showing total balance, daily spending, recent transactions and the category budgets that matter this month.' },
  { number:'02', title:'Give every peso a purpose', text:'Create category wallets, assign spending limits, move money between them and monitor the pace of expenses against available budget.' },
  { number:'03', title:'Plan for obligations and goals', text:'Track upcoming bills and subscriptions, organize payday allocations and make savings goals a visible part of the monthly plan.' },
  { number:'04', title:'Ask Pengpeng what the numbers mean', text:'Use local financial context to ask about spending patterns, risk of running out of budget and potential room to save.' },
]
const capabilities = [
 { no:'01', title:'Smart category wallets', text:'Dedicated wallet budgets with deposits, withdrawals, transfers, spending histories and monthly caps.', src:'/projects/pengpeng/03-wallets.png', tag:'CONTROL YOUR SPENDING' },
 { no:'02', title:'Bills and subscriptions', text:'A calendar-aware view of upcoming obligations, recurring payments, due dates and payment status.', src:'/projects/pengpeng/04-bills.png', tag:'STAY AHEAD OF PAYMENTS' },
 { no:'03', title:'Savings goals and payday planning', text:'Turn income into a plan with auto-split allocations, goal contributions, progress tracking and reports.', src:'/projects/pengpeng/06-profile-goals.png', tag:'BUILD BETTER FINANCIAL HABITS' },
]

export default function PengpengShowcase(){
 return <main className="peng-case">
   <div className="peng-shell"><a className="peng-back" href="/#development-projects">← Back to development projects</a></div>
   <section className="peng-hero peng-shell">
     <div className="peng-hero-copy">
       <span className="peng-kicker">REACT NATIVE · PERSONAL FINANCE · CONTEXT-AWARE AI</span>
       <h1>Pengpeng — <em>The Smart AI Expense Tracker.</em></h1>
       <p className="peng-lead">I built Pengpeng to make personal finance easier to understand and act on. It connects daily spending, wallets, recurring bills, payday allocations and savings goals with a smart financial companion that uses your saved records to explain patterns, identify budget risks and guide more intentional decisions.</p>
       <p className="peng-hero-sub">More than a transaction log, Pengpeng brings the tools for tracking money, setting limits, preparing for bills and building sustainable saving habits into one approachable mobile experience.</p>
       <div className="peng-tags">{['React Native','Expo','AsyncStorage','Local retrieval & analytics','Personal finance UX'].map(t=><span key={t}>{t}</span>)}</div>
       <div className="peng-actions"><a href="#peng-how" className="peng-btn peng-btn--primary">Explore how Pengpeng works ↘</a><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="peng-btn peng-btn--ghost">View source code ↗</a></div>
       <small className="peng-safe-note">Local-first financial data · Personalized context from saved transactions · No claim of model retraining or financial advice</small>
     </div>
     <div className="peng-hero-display"><div className="peng-halo"/><img className="peng-hero-phone" src="/projects/pengpeng/01-splash.png" alt="Original Pengpeng splash screen"/><div className="peng-assistant-chip"><img src="/projects/pengpeng/pengpeng-avatar.png" alt=""/><div><strong>Meet Pengpeng</strong><span>Your financial context, explained.</span></div></div></div>
   </section>
   <section className="peng-signal"><div className="peng-shell peng-signal-inner"><div><strong>One connected view</strong><span>Transactions, balances, wallets</span></div><div><strong>Plan ahead</strong><span>Bills, payday, saving goals</span></div><div><strong>Context-aware insights</strong><span>Ask questions about your records</span></div><div><strong>Local-first</strong><span>Persistent personal finance data</span></div></div></section>
   <section className="peng-section peng-shell" id="peng-how"><div className="peng-section-intro"><span className="peng-kicker">01 / THE FINANCIAL PROBLEM</span><h2>Tracking expenses is useful. <em>Understanding your money is better.</em></h2><p>People can record every purchase and still be unsure whether they can afford an upcoming bill or meet their savings target. Pengpeng was designed to connect those decisions, not leave them scattered across disconnected screens.</p></div><div className="peng-strategy"><div className="peng-strategy-anchor"><img src="/projects/pengpeng/05-pengpeng-ai.png" alt="Pengpeng context-aware insights on a mobile screen"/><p>Understand what your money is doing — not just where it went.</p></div><div className="peng-strategy-story">{paths.map(p=><article key={p.number}><span>{p.number}</span><div><h3>{p.title}</h3><p>{p.text}</p></div></article>)}</div></div></section>
   <section className="peng-section peng-section--tint"><div className="peng-shell"><div className="peng-section-intro"><span className="peng-kicker">02 / EVERYDAY CAPABILITIES</span><h2>A practical toolkit for <em>more confident decisions.</em></h2><p>Every capability was built to contribute to one goal: helping people see, control and plan the money they have.</p></div><div className="peng-capability-list">{capabilities.map((feature,i)=><article className={`peng-capability-row${i%2?' peng-capability-row--reverse':''}`} key={feature.no}><div className="peng-capability-visual"><img src={feature.src} alt={feature.title} loading="lazy"/></div><div className="peng-capability-description"><span className="peng-kicker">{feature.no} / {feature.tag}</span><h3>{feature.title}</h3><p>{feature.text}</p><span className="peng-detail-line">Designed, implemented and integrated with the rest of the app's financial experience.</span></div></article>)}</div></div></section>
   <section className="peng-section peng-shell"><div className="peng-insights"><div><span className="peng-kicker">03 / THE INTELLIGENCE LAYER</span><h2>Pengpeng responds to <em>your own financial context.</em></h2><p>Instead of giving every user the same generic budgeting tips, Pengpeng retrieves relevant data from locally saved transactions, categories, budgets and goals. It uses that context and financial calculations to produce personalized spending explanations and practical warnings.</p><p>This retrieval-augmented, rules-and-analytics approach can grow more relevant as a user records more financial activity. It is not represented as an AI model that retrains itself on private user data.</p></div><div className="peng-insights-questions"><span>EXAMPLE QUESTIONS THE SYSTEM IS DESIGNED TO ADDRESS</span><blockquote>“Where did most of my money go this month?”</blockquote><blockquote>“Which wallet is close to its spending limit?”</blockquote><blockquote>“How much room do I have to save?”</blockquote></div></div></section>
   <section className="peng-section peng-shell" id="peng-screens"><div className="peng-section-intro"><span className="peng-kicker">04 / PRODUCT WALKTHROUGH</span><h2>Explore the real <em>mobile experience.</em></h2><p>Scroll the page to move through the real application screens in order, or choose a feature directly. Open the selected image to view the full-resolution screenshot.</p></div><LeadSenseScrollShowcase
     className="peng-lss-walkthrough"
     title="Pengpeng / Product walkthrough"
     steps={images.map(shot=>({title:shot.title,description:shot.description,eyebrow:'ACTUAL MOBILE APPLICATION'}))}
     renderContent={(_step, index)=> {
       const shot=images[index]
       return <ShowcaseProof image={shot.image ?? ''} title={shot.title} description={shot.description} eyebrow={`SCREEN ${String(index+1).padStart(2,'0')} / ${images.length}`}/>
     }}
   /></section>
   <section className="peng-section peng-shell"><div className="peng-outcome"><span className="peng-kicker">ENGINEERING & PRODUCT DESIGN</span><h2>A complete mobile finance system, built end to end.</h2><p>Pengpeng combines first-run onboarding, responsive mobile screens, finance-specific data flows, local persistence, budget calculations and personalized insight generation. The project demonstrates how I connect product experience with application state, business rules and real user needs.</p><a className="peng-btn peng-btn--primary" href="/#contact">Discuss a similar application ↗</a></div></section>
 </main>
}
