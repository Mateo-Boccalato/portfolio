import { useEffect, useMemo, useState } from 'react'
import type { ZoneId } from '../content/portfolioContent'

const STORAGE_KEY = 'portfolio-active-zone'

export function useZoneState(zoneIds: ZoneId[]) {
  const [activeZone, setActiveZone] = useState<ZoneId>(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ZoneId | null
    if (stored && zoneIds.includes(stored)) return stored
    return zoneIds[0]
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, activeZone)
  }, [activeZone])

  const index = useMemo(() => zoneIds.indexOf(activeZone), [zoneIds, activeZone])

  const goToIndex = (nextIndex: number) => {
    const bounded = Math.min(Math.max(nextIndex, 0), zoneIds.length - 1)
    setActiveZone(zoneIds[bounded])
  }

  return {
    activeZone,
    activeIndex: Math.max(index, 0),
    setActiveZone,
    goToPrevious: () => goToIndex(index - 1),
    goToNext: () => goToIndex(index + 1),
  }
}
