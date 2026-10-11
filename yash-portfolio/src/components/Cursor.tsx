import { useEffect, useRef } from 'react'

// Lime ring that follows the mouse. Desktop (mouse) only; skipped on touch and for reduced motion.
// The normal cursor is never hidden.
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (!ok || !el) return
    el.style.display = 'block'
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      const hot = (e.target as HTMLElement).closest('a, button')
      el.classList.toggle('hot', !!hot)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div ref={ref} className="cursor" aria-hidden="true" />
}
