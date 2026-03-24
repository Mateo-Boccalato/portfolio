import { useState } from 'react'
import { motion } from 'framer-motion'
import { timeline } from '../../../content/portfolioContent'

type TimelineTunnelZoneProps = {
  isActive: boolean
}

export function TimelineTunnelZone({ isActive }: TimelineTunnelZoneProps) {
  const [activeType, setActiveType] = useState<'all' | 'work' | 'education' | 'course'>('all')

  const filtered =
    activeType === 'all' ? timeline : timeline.filter((entry) => entry.type === activeType)

  return (
    <motion.section className="zone zone--timeline" animate={{ opacity: isActive ? 1 : 0.25 }}>
      <p className="zone-kicker">Experience</p>
      <h2>Travel stations across work, education, and coursework</h2>

      <div className="timeline-filters">
        {(['all', 'work', 'education', 'course'] as const).map((filter) => (
          <button
            key={filter}
            type="button"
            className={filter === activeType ? 'is-active' : ''}
            onClick={() => setActiveType(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="archive-line" data-prevent-zone-swipe="true">
        {filtered.map((entry, idx) => (
          <motion.article
            key={`${entry.title}-${entry.period}`}
            className="archive-stop glass-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
          >
            <span className="archive-stop__node" aria-hidden="true" />
            <p className={`timeline-type timeline-type--${entry.type}`}>{entry.type}</p>
            <h3>{entry.title}</h3>
            <p>{entry.organization}</p>
            <small>{entry.period}</small>
            <ul>
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
