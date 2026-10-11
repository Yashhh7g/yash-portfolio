import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// Short loading-screen intro (skipped for reduced-motion users).
export default function Loader() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(!reduce)
  useEffect(() => {
    if (!show) return
    const t = setTimeout(() => setShow(false), 1700)
    return () => clearTimeout(t)
  }, [show])
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="loader" role="status" aria-label="Loading portfolio" exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: 0.6 }}>
          <p className="loader-name">Yash Gupta</p>
          <p className="loader-sub">Loading portfolio</p>
          <div className="loader-bar"><i /></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
