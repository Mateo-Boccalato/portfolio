import { motion } from 'framer-motion'
import type { ZoneId } from '../../content/portfolioContent'

type TideChartProps = {
  zones: { id: ZoneId; label: string; subtitle: string }[]
  activeZone: ZoneId
  onSelectZone: (zoneId: ZoneId) => void
}

// Tide height for t in [0, 1], as a percentage of the chart's height (0 = top).
// Roughly one and a quarter tide cycles across the chart.
const tideY = (t: number) => 50 - 30 * Math.sin(t * Math.PI * 2.5 + 0.5)

const CHART_INSET = 0.08

const TIDE_PATH = Array.from({ length: 101 }, (_, i) => {
  const t = i / 100
  return `${i === 0 ? 'M' : 'L'} ${t * 1000} ${tideY(t).toFixed(2)}`
}).join(' ')

export function TideChart({ zones, activeZone, onSelectZone }: TideChartProps) {
  return (
    <nav className="tide-chart" aria-label="Sections">
      <svg className="tide-chart__curve" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
        <path d={TIDE_PATH} />
      </svg>
      <ul>
        {zones.map((zone, idx) => {
          const isActive = zone.id === activeZone
          const t = CHART_INSET + (idx / (zones.length - 1)) * (1 - CHART_INSET * 2)
          return (
            <li
              key={zone.id}
              style={{ left: `${t * 100}%`, top: `${tideY(t)}%` }}
            >
              <button
                type="button"
                className={`tide-stop ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelectZone(zone.id)}
                aria-current={isActive ? 'page' : undefined}
                title={zone.subtitle}
              >
                <span className="tide-stop__mark" aria-hidden="true">
                  {isActive && (
                    <motion.span
                      className="tide-stop__buoy"
                      layoutId="tide-buoy"
                      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    />
                  )}
                </span>
                <span className="tide-stop__label">{zone.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
