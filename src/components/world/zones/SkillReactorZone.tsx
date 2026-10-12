import { useState } from 'react'
import { skillClusters } from '../../../content/portfolioContent'

export function SkillReactorZone() {
  const [activeCluster, setActiveCluster] = useState(skillClusters[0].label)

  const selected = skillClusters.find((cluster) => cluster.label === activeCluster) ?? skillClusters[0]

  return (
    <section className="zone zone--skills">
      <h2 className="zone-title">Skills</h2>
      <p className="zone-lead">Pick a board from the quiver to see what I ride with.</p>

      <div className="quiver-layout">
        <div
          className="quiver"
          role="tablist"
          aria-label="Skill categories"
          data-prevent-zone-swipe="true"
        >
          {skillClusters.map((cluster) => {
            const isActive = cluster.label === activeCluster
            return (
              <button
                key={cluster.label}
                type="button"
                role="tab"
                id={`board-${cluster.label}`}
                aria-selected={isActive}
                aria-controls="quiver-panel"
                className={`board ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCluster(cluster.label)}
              >
                <span>{cluster.label}</span>
              </button>
            )
          })}
        </div>

        <div
          id="quiver-panel"
          role="tabpanel"
          aria-labelledby={`board-${selected.label}`}
          className="quiver-panel"
        >
          <h3>{selected.label}</h3>
          <ul>
            {selected.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
