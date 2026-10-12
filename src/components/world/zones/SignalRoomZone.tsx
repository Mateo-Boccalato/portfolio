import { useRef, useState } from 'react'
import { contactChannels } from '../../../content/portfolioContent'

// Email and phone only offer Copy.
const actionLabels: Record<string, string> = {
  linkedin: 'Open LinkedIn',
  github: 'Open GitHub',
  resume: 'Download PDF',
}

export function SignalRoomZone() {
  const [copyStatus, setCopyStatus] = useState<{ id: string; ok: boolean } | null>(null)
  const resetTimer = useRef<number | undefined>(undefined)

  const copyValue = async (id: string, value: string) => {
    window.clearTimeout(resetTimer.current)
    try {
      await navigator.clipboard.writeText(value)
      setCopyStatus({ id, ok: true })
    } catch {
      setCopyStatus({ id, ok: false })
    }
    resetTimer.current = window.setTimeout(() => setCopyStatus(null), 1600)
  }

  return (
    <section className="zone zone--signal">
      <h2 className="zone-title">Contact</h2>
      <p className="zone-lead">Reach me any of these ways. Email gets the quickest reply.</p>

      <ul className="contact-list">
        {contactChannels.map((channel) => {
          const isResume = channel.id === 'resume'
          const status = copyStatus?.id === channel.id ? copyStatus : null
          return (
            <li key={channel.id}>
              <p className="contact-list__label">{channel.label}</p>
              <p className="contact-list__value">{isResume ? 'Mateo_Boccalato_Resume.pdf' : channel.value}</p>
              <div className="contact-list__actions">
                {actionLabels[channel.id] && (
                  <a
                    className="button button--primary"
                    href={channel.href}
                    target={isResume ? undefined : '_blank'}
                    rel={isResume ? undefined : 'noreferrer'}
                    download={isResume ? 'Mateo_Boccalato_Resume.pdf' : undefined}
                  >
                    {actionLabels[channel.id]}
                  </a>
                )}
                {!isResume && (
                  <button
                    type="button"
                    className="button"
                    onClick={() => copyValue(channel.id, channel.value)}
                  >
                    {status ? (status.ok ? 'Copied' : 'Copy failed') : 'Copy'}
                  </button>
                )}
              </div>
            </li>
          )
        })}
      </ul>
      <p className="visually-hidden" aria-live="polite">
        {copyStatus
          ? copyStatus.ok
            ? 'Copied to clipboard.'
            : 'Copying failed. Select the text and copy it manually.'
          : ''}
      </p>
    </section>
  )
}
