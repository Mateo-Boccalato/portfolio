import { motion } from 'framer-motion'
import type { ZoneId } from '../../content/portfolioContent'

type MiniMapProps = {
  zones: { id: ZoneId; label: string; subtitle: string }[]
  activeZone: ZoneId
  onSelectZone: (zoneId: ZoneId) => void
}

export function MiniMap({ zones, activeZone, onSelectZone }: MiniMapProps) {
  return (
    <nav className="mini-map" aria-label="Zone navigation">
      <p className="mini-map__label">City Grid</p>
      <ul className="mini-map__list">
        {zones.map((zone, idx) => {
          const isActive = zone.id === activeZone
          return (
            <li key={zone.id}>
              <button
                type="button"
                className={`mini-map__item ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelectZone(zone.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="mini-map__station" aria-hidden="true" />
                <span className="mini-map__index">0{idx + 1}</span>
                <span className="mini-map__meta">
                  <span>{zone.label}</span>
                  <small>{zone.subtitle}</small>
                </span>
                {isActive && (
                  <motion.span
                    className="mini-map__pulse"
                    layoutId="zone-pulse"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
