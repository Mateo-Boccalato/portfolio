import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { skillClusters } from '../../../content/portfolioContent'

type SkillReactorZoneProps = {
  isActive: boolean
}

export function SkillReactorZone({ isActive }: SkillReactorZoneProps) {
  const [activeCluster, setActiveCluster] = useState(skillClusters[0].label)

  const selected = useMemo(
    () => skillClusters.find((cluster) => cluster.label === activeCluster) ?? skillClusters[0],
    [activeCluster],
  )

  return (
    <motion.section className="zone zone--skills" animate={{ opacity: isActive ? 1 : 0.25 }}>
      <p className="zone-kicker">Skills</p>
      <h2>Infrastructure layers behind every build</h2>

      <div className="forge-shell glass-panel">
        <div className="forge-switcher" role="tablist" aria-label="Skill cluster selector">
          {skillClusters.map((cluster) => (
            <button
              key={cluster.label}
              type="button"
              role="tab"
              className={cluster.label === activeCluster ? 'is-active' : ''}
              onClick={() => setActiveCluster(cluster.label)}
              aria-selected={cluster.label === activeCluster}
            >
              <span>{cluster.label}</span>
              <small>District</small>
            </button>
          ))}
        </div>

        <div className="forge-panel">
          <motion.ul
            key={selected.label}
            className="skill-streets"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {selected.items.map((item, idx) => (
              <li key={item} style={{ ['--chip-delay' as string]: `${idx * 60}ms` }}>
                <span>{item}</span>
                <i />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  )
}
