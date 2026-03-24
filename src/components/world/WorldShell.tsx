import { Suspense, lazy, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { zoneOrder } from '../../content/portfolioContent'
import { shellFade } from '../../animations/motionPresets'
import { useZoneState } from '../../hooks/useZoneState'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { MiniMap } from '../navigation/MiniMap'
import { CommandPalette } from '../ui/CommandPalette'

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
    if (activeZone === 'origins') return <OriginsZone isActive />
    if (activeZone === 'skills') return <SkillReactorZone isActive />
    if (activeZone === 'missions') return <MissionControlZone isActive />
    if (activeZone === 'timeline') return <TimelineTunnelZone isActive />
    return <SignalRoomZone isActive />
  }

  return (
    <div className={`world-shell ${prefersReducedMotion ? 'reduced-motion' : ''}`}>
      <header className="world-header">
        <div>
          <p className="world-title">Mateo Boccalato Portfolio</p>
          <p className="world-subtitle">Explore sections to decode Mateo&apos;s work.</p>
        </div>
        <div className="world-controls">
          <button type="button" onClick={goToPrevious} aria-label="Previous zone">
            West
          </button>
          <span>
            {activeIndex + 1}/{zoneOrder.length}
          </span>
          <button type="button" onClick={goToNext} aria-label="Next zone">
            East
          </button>
        </div>
      </header>

      <MiniMap zones={zoneOrder} activeZone={activeZone} onSelectZone={setActiveZone} />
      <CommandPalette zones={zoneOrder} activeZone={activeZone} onSelectZone={setActiveZone} />

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
          <Suspense fallback={<div className="zone zone-loading">Loading zone...</div>}>
            {renderActiveZone()}
          </Suspense>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}
