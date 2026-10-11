import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import Tilt from './Tilt'

// Document-inspired visual for DocuMind: text lines with highlighted "retrieved" passages.
function DocVisual() {
  return (
    <div className="doc-visual" aria-hidden="true">
      <div className="doc-page">
        {[70, 95, 85, 60, 90, 75, 88, 50].map((w, i) => (
          <span key={i} className={[1, 5].includes(i) ? 'hit' : ''} style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="doc-query"><i /> semantic query</div>
    </div>
  )
}

// GTA-style status stamp, derived honestly from the status text in projects.ts.
function stampFor(p: Project) {
  if (p.status.startsWith('Completed')) return { text: 'Mission passed', cls: 'passed' }
  if (p.status.startsWith('Ongoing')) return { text: 'In progress', cls: 'live' }
  if (p.placeholder) return { text: 'Locked', cls: 'locked' }
  return { text: 'Featured mission', cls: 'feat' }
}

export default function ProjectSlide({ project, index }: { project: Project; index: number }) {
  const stamp = stampFor(project)
  return (
    <div className="wrap mission">
      <Tilt className="mission-visual glass">
        {project.featured ? <DocVisual /> : <div className={`pattern pattern-${index % 5}`} aria-hidden="true" />}
        <span className="watermark" aria-hidden="true">{project.title}</span>
      </Tilt>
      <div className="mission-info">
        <p className="mission-no">{project.placeholder ? 'Locked' : `Mission ${String(index + 1).padStart(2, '0')}`}</p>
        <h2 className="big">{project.title}</h2>
        <p className="subtitle">{project.subtitle}</p>
        <p className={`stamp ${stamp.cls}`}>{stamp.text}<small>{project.status}</small></p>
        <p>{project.description}</p>
        {project.highlights.length > 0 && <ul className="highlights">{project.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
        <ul className="chips" aria-label="Technologies">{project.stack.map((t) => <li key={t}>{t}</li>)}</ul>
        {(project.github || project.demo) && (
          <div className="actions">
            {project.github && <a className="btn btn-glass" href={project.github} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={16} aria-hidden="true" /></a>}
            {project.demo && <a className="btn btn-pink" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
          </div>
        )}
      </div>
    </div>
  )
}
