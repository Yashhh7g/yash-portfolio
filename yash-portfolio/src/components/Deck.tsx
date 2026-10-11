import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { site } from '../config/site'
import { projects } from '../data/projects'
import Hero from './Hero'
import ProjectSlide from './ProjectSlide'
import { AboutSlide, SkillsSlide, ContactSlide } from './InfoSlides'

interface SlideDef { id: string; label: string; node: ReactNode }

// 3D page-turn: slides rotate in/out around the Y axis and travel in depth (z).
const variants3D: Variants = {
  enter: (d: number) => ({ opacity: 0, x: `${d * 45}%`, rotateY: d * 65, z: -700 }),
  center: { opacity: 1, x: '0%', rotateY: 0, z: 0 },
  exit: (d: number) => ({ opacity: 0, x: `${-d * 45}%`, rotateY: -d * 65, z: -700 }),
}
const variantsFade: Variants = { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }

export default function Deck() {
  const reduce = useReducedMotion()
  const [[i, dir], setPos] = useState<[number, number]>([0, 1])
  const lock = useRef(0)
  const touch = useRef<[number, number] | null>(null)

  const move = useCallback((fn: (c: number, n: number) => number) => {
    setPos((prev) => {
      const t = Math.max(0, Math.min(N_REF.current - 1, fn(prev[0], N_REF.current)))
      return t === prev[0] ? prev : [t, t > prev[0] ? 1 : -1]
    })
  }, [])

  // ✏️ Slide order. Project slides come from src/data/projects.ts automatically.
  const slides: SlideDef[] = [
    { id: 'home', label: 'Home', node: <Hero onStart={() => move((c) => c + 1)} /> },
    ...projects.map((p, k) => ({ id: p.id, label: p.title, node: <ProjectSlide project={p} index={k} /> })),
    { id: 'about', label: 'About', node: <AboutSlide /> },
    { id: 'skills', label: 'Skills', node: <SkillsSlide /> },
    { id: 'contact', label: 'Contact', node: <ContactSlide /> },
  ]
  const N = slides.length
  const N_REF = useRef(N)
  N_REF.current = N
  const slide = slides[i]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      if (e.key === 'ArrowRight' || e.key === 'PageDown') move((c) => c + 1)
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') move((c) => c - 1)
      else if (e.key === 'Home') move(() => 0)
      else if (e.key === 'End') move((_c, n) => n - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [move])

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) < 20 || Date.now() - lock.current < 900) return
    // If the slide itself is scrollable (small screens), let it scroll first.
    const sc = (e.target as HTMLElement).closest('.slide-scroll')
    if (sc && sc.scrollHeight > sc.clientHeight + 4) {
      if (e.deltaY > 0 && sc.scrollTop + sc.clientHeight < sc.scrollHeight - 4) return
      if (e.deltaY < 0 && sc.scrollTop > 4) return
    }
    lock.current = Date.now()
    move((c) => c + (e.deltaY > 0 ? 1 : -1))
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const s = touch.current
    touch.current = null
    if (!s) return
    const dx = e.changedTouches[0].clientX - s[0]
    const dy = e.changedTouches[0].clientY - s[1]
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) move((c) => c + (dx < 0 ? 1 : -1))
  }

  return (
    <div className="deck" id="deck" onWheel={onWheel}
      onTouchStart={(e) => { touch.current = [e.touches[0].clientX, e.touches[0].clientY] }} onTouchEnd={onTouchEnd}>
      <header className="hud-top">
        <button className="logo" onClick={() => move(() => 0)} aria-label="Go to first slide">YG</button>
        <nav className="dots" aria-label="Slides">
          {slides.map((s, k) => (
            <button key={s.id} onClick={() => move(() => k)} aria-label={`Go to slide ${k + 1}: ${s.label}`} aria-current={k === i ? 'true' : undefined}>
              <span />
            </button>
          ))}
        </nav>
        <p className="counter">{slide.label} · {String(i + 1).padStart(2, '0')}/{String(N).padStart(2, '0')}</p>
      </header>

      <p className="sr-only" aria-live="polite">Slide {i + 1} of {N}: {slide.label}</p>

      <div className="stage">
        <AnimatePresence initial={false} custom={dir}>
          <motion.section
            key={slide.id}
            className="slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${N}: ${slide.label}`}
            custom={dir}
            variants={reduce ? variantsFade : variants3D}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: reduce ? 0.2 : 0.9, ease: [0.22, 0.8, 0.2, 1] }}
          >
            <div className="slide-scroll">{slide.node}</div>
          </motion.section>
        </AnimatePresence>
      </div>

      <footer className="hud-bottom">
        <p>© {new Date().getFullYear()} {site.name}
          {site.github && <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>}
          {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {site.email && <a href={`mailto:${site.email}`}>Email</a>}
        </p>
        <div className="arrows">
          <button onClick={() => move((c) => c - 1)} disabled={i === 0} aria-label="Previous slide"><ChevronLeft size={22} /></button>
          <button onClick={() => move((c) => c + 1)} disabled={i === N - 1} aria-label="Next slide"><ChevronRight size={22} /></button>
        </div>
      </footer>
    </div>
  )
}
