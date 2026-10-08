export default function Workflow({ items }: { items: string[] }) {
  return (
    <div className="workflow-row" aria-label="Workflow preview">
      {items.map((item, index) => (
        <div className="workflow-item" key={item}>
          <div className="workflow-node">
            <span className="workflow-step">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="workflow-label">{item}</span>
          </div>
          {index < items.length - 1 && (
            <div className="workflow-arrow" aria-hidden="true">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
