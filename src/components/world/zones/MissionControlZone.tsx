import { type CSSProperties, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { missions } from '../../../content/portfolioContent'

type MissionControlZoneProps = {
  isActive: boolean
}

const routePositions: Array<{ x: string; y: string }> = [
  { x: '18%', y: '72%' },
  { x: '36%', y: '54%' },
  { x: '58%', y: '40%' },
  { x: '78%', y: '24%' },
  { x: '30%', y: '28%' },
  { x: '66%', y: '68%' },
]

export function MissionControlZone({ isActive }: MissionControlZoneProps) {
  const [activeMissionId, setActiveMissionId] = useState(missions[0].id)

  const activeMission = useMemo(
    () => missions.find((mission) => mission.id === activeMissionId) ?? missions[0],
    [activeMissionId],
  )

  return (
    <motion.section className="zone zone--missions" animate={{ opacity: isActive ? 1 : 0.25 }}>
      <p className="zone-kicker">Projects</p>
      <h2>Project lines mapped like transit routes</h2>

      <div className="route-grid">
        <div className="route-map glass-panel">
          <svg
            className="route-map__grid"
            viewBox="0 0 400 300"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path d="M24 260 L90 220 L170 160 L250 145 L360 80" />
            <path d="M32 60 L140 96 L210 130 L300 190 L372 250" />
          </svg>
          {missions.map((mission, idx) => {
            // Keep stop coordinates deterministic so nodes never jump between renders.
            // If more missions are added than preset positions, coordinates cycle.
            const position = routePositions[idx % routePositions.length]

            return (
              <button
                key={mission.id}
                type="button"
                className={`route-stop ${mission.id === activeMissionId ? 'is-active' : ''}`}
                style={
                  {
                    ['--route-x' as string]: position.x,
                    ['--route-y' as string]: position.y,
                  } as CSSProperties
                }
                onClick={() => setActiveMissionId(mission.id)}
              >
                <span className="route-stop__dot" aria-hidden="true" />
                <span className="route-stop__meta">
                  <strong>{mission.title}</strong>
                  <small>{mission.period}</small>
                </span>
              </button>
            )
          })}
        </div>

        <motion.article
          key={activeMission.id}
          className="route-dossier glass-panel"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <header>
            <h3>{activeMission.title}</h3>
            <p>{activeMission.summary}</p>
            <small>{activeMission.impact}</small>
          </header>
          <ul>
            {activeMission.detail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="route-stack">
            {activeMission.stack.map((stackItem) => (
              <span key={stackItem}>{stackItem}</span>
            ))}
          </div>
          {activeMission.links && (
            <p className="route-links">
              {activeMission.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </p>
          )}
        </motion.article>
      </div>
    </motion.section>
  )
}
