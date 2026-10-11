import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { site } from '../config/site'

const HeroScene = lazy(() => import('./HeroScene'))

// 3D only on wide screens and when reduced motion is not requested.
function useShow3D() {
  const reduce = useReducedMotion()
  const [wide, setWide] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 700px)')
    const update = () => setWide(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return wide && !reduce
}

export default function Hero({ onStart }: { onStart: () => void }) {
  const show3D = useShow3D()
  const reduce = useReducedMotion()
  const rise = (i: number) =>
    reduce ? {} : { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 1.5 + i * 0.12, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } }

  return (
    <div className="wrap hero">
      <div className="hero-visual" aria-hidden="true">
        <div className="orb" />
        {show3D && <Suspense fallback={null}><HeroScene /></Suspense>}
      </div>
      <div className="float-chips" aria-hidden="true">
        <span className="glass chip-a">Python</span>
        <span className="glass chip-b">React</span>
        <span className="glass chip-c">RAG</span>
      </div>
      <div className="hero-copy">
        <motion.p className="role-tag" {...rise(0)}>{site.role}</motion.p>
        <motion.h1 {...rise(1)}>Yash<br />Gupta</motion.h1>
        <motion.p className="hero-lead" {...rise(2)}>
          A developer interested in software engineering, AI and creative digital experiences. I learn by building real things, from full-stack apps to computer-vision tools.
        </motion.p>
        <motion.div className="actions" {...rise(3)}>
          <a className="btn btn-pink" href={site.resumeHref} download={site.resumeFileName}>
            <Download size={18} aria-hidden="true" /> Download Resume
          </a>
          <button className="btn btn-glass" onClick={onStart}>
            Start missions <ArrowRight size={18} aria-hidden="true" />
          </button>
        </motion.div>
        <p className="hint">Use the ← → keys, swipe or scroll to change slides</p>
      </div>
    </div>
  )
}
