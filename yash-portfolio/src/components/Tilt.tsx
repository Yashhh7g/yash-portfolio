import { useRef, type ReactNode } from 'react'

// 3D tilt + moving light glare that follows the mouse. Mouse only (touch/reduced motion skip it).
export default function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null)
  const enabled = () =>
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const move = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || !enabled()) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg) translateZ(0)`
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const leave = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <article ref={ref} className={`tilt ${className ?? ''}`} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </article>
  )
}
