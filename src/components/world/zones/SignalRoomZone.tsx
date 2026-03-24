import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactChannels } from '../../../content/portfolioContent'

type SignalRoomZoneProps = {
  isActive: boolean
}

export function SignalRoomZone({ isActive }: SignalRoomZoneProps) {
  const [lockedChannelId, setLockedChannelId] = useState(contactChannels[0].id)
  const [copied, setCopied] = useState('')

  const locked = contactChannels.find((channel) => channel.id === lockedChannelId) ?? contactChannels[0]
  const isResumeChannel = locked.id === 'resume'

  const copyValue = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(value)
      window.setTimeout(() => setCopied(''), 1200)
    } catch {
      setCopied('Clipboard unavailable')
      window.setTimeout(() => setCopied(''), 1200)
    }
  }

  return (
    <motion.section className="zone zone--signal" animate={{ opacity: isActive ? 1 : 0.25 }}>
      <p className="zone-kicker">Contact</p>
      <h2>Launch a direct uplink</h2>
      <p className="zone-lead">
        Select a line, lock transmission, then send signal.
      </p>

      <div className="dispatch-layout">
        <div className="dispatch-channels glass-panel">
          {contactChannels.map((channel) => (
            <button
              key={channel.id}
              type="button"
              className={channel.id === lockedChannelId ? 'is-active' : ''}
              onClick={() => setLockedChannelId(channel.id)}
            >
              <span>{channel.label}</span>
              <small>{channel.value}</small>
            </button>
          ))}
        </div>

        <motion.div
          key={locked.id}
          className="dispatch-console glass-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p>Channel locked: {locked.label}</p>
          <h3>{locked.value}</h3>
          <div className="dispatch-actions">
            <a
              href={locked.href}
              target={isResumeChannel ? undefined : '_blank'}
              rel={isResumeChannel ? undefined : 'noreferrer'}
              download={isResumeChannel ? 'Mateo_Boccalato_Resume.pdf' : undefined}
            >
              {isResumeChannel ? 'Download' : 'Transmit'}
            </a>
            {!isResumeChannel && (
              <button type="button" onClick={() => copyValue(locked.value)}>
                Copy
              </button>
            )}
          </div>
          <small className="signal-feedback">{copied ? `Copied: ${copied}` : 'Awaiting relay'}</small>
        </motion.div>
      </div>
    </motion.section>
  )
}
