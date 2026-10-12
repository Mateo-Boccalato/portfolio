import { useState } from 'react'
import { timeline, type TimelineEntry } from '../../../content/portfolioContent'

type Filter = 'all' | TimelineEntry['type']

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'course', label: 'Coursework' },
]

export function TimelineTunnelZone() {
  const [activeType, setActiveType] = useState<Filter>('all')

  const filtered =
    activeType === 'all' ? timeline : timeline.filter((entry) => entry.type === activeType)

  return (
    <section className="zone zone--timeline">
      <h2 className="zone-title">Experience</h2>
      <p className="zone-lead">Work, school, and the courses that shaped how I build.</p>

      <div className="segmented" role="group" aria-label="Filter experience" data-prevent-zone-swipe="true">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={filter.id === activeType}
            className={filter.id === activeType ? 'is-active' : ''}
            onClick={() => setActiveType(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <ol className="tide-table">
        {filtered.map((entry) => (
          <li key={`${entry.title}-${entry.period}`}>
            <p className="tide-table__period">{entry.period}</p>
            <div>
              <h3>{entry.title}</h3>
              <p className="tide-table__org">{entry.organization}</p>
              <ul>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
