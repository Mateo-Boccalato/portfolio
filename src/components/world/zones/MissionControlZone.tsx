import { useState } from 'react'
import { motion } from 'framer-motion'
import { missions } from '../../../content/portfolioContent'

export function MissionControlZone() {
  const [activeMissionId, setActiveMissionId] = useState(missions[0].id)

  const activeMission = missions.find((mission) => mission.id === activeMissionId) ?? missions[0]

  return (
    <section className="zone zone--missions">
      <h2 className="zone-title">Projects</h2>
      <p className="zone-lead">Things I&apos;ve shipped, built for clients, and made for fun.</p>

      <div className="projects-layout">
        <ul className="project-list" data-prevent-zone-swipe="true">
          {missions.map((mission) => (
            <li key={mission.id}>
              <button
                type="button"
                className={`project-pick ${mission.id === activeMissionId ? 'is-active' : ''}`}
                aria-pressed={mission.id === activeMissionId}
                onClick={() => setActiveMissionId(mission.id)}
              >
                <strong>{mission.title}</strong>
                <small>{mission.period}</small>
              </button>
            </li>
          ))}
        </ul>

        <motion.article
          key={activeMission.id}
          className="project-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          aria-live="polite"
        >
          <h3>{activeMission.title}</h3>
          <p className="project-detail__period">{activeMission.period}</p>
          <p className="project-detail__summary">{activeMission.summary}</p>
          <p className="project-detail__impact">{activeMission.impact}</p>
          <ul className="project-detail__notes">
            {activeMission.detail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="project-detail__stack" aria-label="Built with">
            {activeMission.stack.map((stackItem) => (
              <li key={stackItem}>{stackItem}</li>
            ))}
          </ul>
          {activeMission.links && (
            <p className="project-detail__links">
              {activeMission.links.map((link) => (
                <a key={link.href} className="button" href={link.href} target="_blank" rel="noreferrer">
                  {link.label === 'GitHub' ? 'View on GitHub' : `Visit ${link.label.toLowerCase()}`}
                </a>
              ))}
            </p>
          )}
        </motion.article>
      </div>
    </section>
  )
}
