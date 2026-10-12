import type { Variants } from 'framer-motion'

export const shellFade: Variants = {
  initial: { opacity: 0, x: 24 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -24,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
}
