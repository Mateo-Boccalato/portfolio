import { motion } from 'framer-motion'
import { about } from '../../../content/portfolioContent'
import { staggerItem, staggerParent } from '../../../animations/motionPresets'

type OriginsZoneProps = { isActive: boolean }

export function OriginsZone({ isActive }: OriginsZoneProps) {
  return (
    <motion.section
      className="zone zone--origins"
      initial="initial"
      animate={isActive ? 'animate' : 'initial'}
      variants={staggerParent}
    >
      <motion.p className="zone-kicker" variants={staggerItem}>
        About
      </motion.p>
      <motion.h1 variants={staggerItem}>{about.name}</motion.h1>
      <motion.p className="zone-lead" variants={staggerItem}>
        {about.title}
      </motion.p>

      <div className="district-grid">
        <motion.article className="glass-panel district-card" variants={staggerItem}>
          <h2>Identity Beacon</h2>
          <p>{about.objective}</p>
          {about.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.article>

        <motion.div className="district-radar glass-panel" variants={staggerItem}>
          <div className="district-radar__visual" aria-hidden="true">
            <span className="ring ring--1" />
            <span className="ring ring--2" />
            <span className="ring ring--3" />
            <span className="arc arc--a" />
            <span className="arc arc--b" />
            <span className="arc arc--c" />
          </div>
          <small>Live district scan: software x machine intelligence</small>
        </motion.div>
      </div>

      <motion.ul className="district-stats" variants={staggerItem}>
        {about.stats.map((item) => (
          <li key={item.label}>
            <span>{item.value}</span>
            <small>{item.label}</small>
          </li>
        ))}
      </motion.ul>
    </motion.section>
  )
}
