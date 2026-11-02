import LeadSenseScrollShowcase from './LeadSenseScrollShowcase'

export type ProcessStep = { title: string; detail: string; eyebrow?: string }

export default function ScrollProcessTimeline({
  steps, title, note,
}: { steps: ProcessStep[]; title: string; note?: string }) {
  return <LeadSenseScrollShowcase
    title={title}
    note={note}
    className="lss-process"
    steps={steps.map(step => ({
      title: step.title, description: step.detail, eyebrow: step.eyebrow,
    }))}
    renderContent={(step, index) => <div className="lss-process-proof">
      <small>{step.eyebrow ?? `ACTIVE PROCESS STAGE ${String(index + 1).padStart(2,'0')}`}</small>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>}
  />
}
