import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function GlitchCursor() {
  const [point, setPoint] = useState({ x: 0, y: 0 })
  const [isPointerFine, setIsPointerFine] = useState(() =>
    window.matchMedia('(pointer: fine)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    const listener = (event: MediaQueryListEvent) => setIsPointerFine(event.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  useEffect(() => {
    if (!isPointerFine) return
    const onMove = (event: MouseEvent) => setPoint({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [isPointerFine])

  if (!isPointerFine) return null

  return (
    <motion.span
      className="glitch-cursor"
      animate={{ x: point.x - 9, y: point.y - 9 }}
      transition={{ type: 'spring', stiffness: 580, damping: 42, mass: 0.4 }}
    />
  )
}
