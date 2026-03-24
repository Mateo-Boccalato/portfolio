import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ZoneId } from '../../content/portfolioContent'

type CommandPaletteProps = {
  zones: { id: ZoneId; label: string; subtitle: string }[]
  activeZone: ZoneId
  onSelectZone: (zoneId: ZoneId) => void
}

export function CommandPalette({
  zones,
  activeZone,
  onSelectZone,
}: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsOpen((value) => !value)
      }
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const commands = useMemo(
    () =>
      zones.map((zone) => ({
        id: zone.id,
        label: `Open ${zone.label}`,
        description: zone.subtitle,
      })),
    [zones],
  )

  return (
    <>
      <button
        type="button"
        className="command-toggle"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span>Navigator</span>
        <kbd>⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="command-palette"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="command-palette__panel"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
            >
              <header>
                <p>Zone Switcher</p>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Close
                </button>
              </header>
              <ul>
                {commands.map((command) => (
                  <li key={command.id}>
                    <button
                      type="button"
                      onClick={() => {
                        onSelectZone(command.id)
                        setIsOpen(false)
                      }}
                      aria-current={activeZone === command.id ? 'page' : undefined}
                    >
                      <span>{command.label}</span>
                      <small>{command.description}</small>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
