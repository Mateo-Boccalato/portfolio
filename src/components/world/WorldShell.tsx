import { Suspense, lazy, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { zoneOrder } from '../../content/portfolioContent'
import { shellFade } from '../../animations/motionPresets'
import { useZoneState } from '../../hooks/useZoneState'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { TideChart } from '../navigation/TideChart'
import { CommandPalette } from '../ui/CommandPalette'
import { OceanSwell } from './OceanSwell'

const OriginsZone = lazy(() =>
  import('./zones/OriginsZone').then((module) => ({ default: module.OriginsZone })),
)
const SkillReactorZone = lazy(() =>
  import('./zones/SkillReactorZone').then((module) => ({ default: module.SkillReactorZone })),
)
const MissionControlZone = lazy(() =>
  import('./zones/MissionControlZone').then((module) => ({ default: module.MissionControlZone })),
)
const TimelineTunnelZone = lazy(() =>
  import('./zones/TimelineTunnelZone').then((module) => ({ default: module.TimelineTunnelZone })),
)
const SignalRoomZone = lazy(() =>
  import('./zones/SignalRoomZone').then((module) => ({ default: module.SignalRoomZone })),
)

export function WorldShell() {
  const zoneIds = zoneOrder.map((zone) => zone.id)
  const { activeZone, activeIndex, setActiveZone, goToNext, goToPrevious } = useZoneState(zoneIds)
  const prefersReducedMotion = useReducedMotion()
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const isZoneSwipeBlocked = useRef(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        goToNext()
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        goToPrevious()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goToNext, goToPrevious])

  const renderActiveZone = () => {
    if (activeZone === 'origins') return <OriginsZone />
    if (activeZone === 'skills') return <SkillReactorZone />
    if (activeZone === 'missions') return <MissionControlZone />
    if (activeZone === 'timeline') return <TimelineTunnelZone />
    return <SignalRoomZone />
  }

  return (
    <div className={`world-shell ${prefersReducedMotion ? 'reduced-motion' : ''}`}>
      <header className="world-header">
        <p className="world-title">Mateo Boccalato</p>
        <div className="world-controls">
          <CommandPalette zones={zoneOrder} activeZone={activeZone} onSelectZone={setActiveZone} />
          <div className="world-stepper">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              aria-label="Previous section"
            >
              ‹
            </button>
            <span>
              {activeIndex + 1} of {zoneOrder.length}
            </span>
            <button
              type="button"
              onClick={goToNext}
              disabled={activeIndex === zoneOrder.length - 1}
              aria-label="Next section"
            >
              ›
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={activeZone}
          className="world-stage"
          variants={shellFade}
          initial={prefersReducedMotion ? false : 'initial'}
          animate="animate"
          exit={prefersReducedMotion ? undefined : 'exit'}
          onTouchStart={(event) => {
            const touch = event.touches[0]
            touchStart.current = { x: touch.clientX, y: touch.clientY }
            const target = event.target as HTMLElement | null
            isZoneSwipeBlocked.current = Boolean(
              target?.closest('[data-prevent-zone-swipe="true"]'),
            )
          }}
          onTouchEnd={(event) => {
            if (!touchStart.current) return
            if (isZoneSwipeBlocked.current) {
              touchStart.current = null
              isZoneSwipeBlocked.current = false
              return
            }
            const touch = event.changedTouches[0]
            const deltaX = touch.clientX - touchStart.current.x
            const deltaY = touch.clientY - touchStart.current.y
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 48) {
              if (deltaX < 0) goToNext()
              if (deltaX > 0) goToPrevious()
            }
            touchStart.current = null
            isZoneSwipeBlocked.current = false
          }}
        >
          <Suspense fallback={<div className="zone zone-loading">Loading…</div>}>
            {renderActiveZone()}
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <footer className="ocean">
        <OceanSwell />
        <TideChart zones={zoneOrder} activeZone={activeZone} onSelectZone={setActiveZone} />
      </footer>
    </div>
  )
}
