export default function Workflow({ items }: { items: string[] }) {
  return (
    <div className="workflow-row" aria-label="Workflow preview">
      {items.map((item, index) => (
        <div className="workflow-item" key={item}>
          <div className="workflow-node">{item}</div>
          {index < items.length - 1 && <div className="workflow-arrow">→</div>}
        </div>
      ))}
    </div>
  )
}
