import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import Reveal from './Reveal'
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

function PatternVisual({ index }: { index: number }) {
  return <div className={`pattern pattern-${index % 4}`} aria-hidden="true" />
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { featured, placeholder } = project
  return (
    <Reveal className={`card ${featured ? 'card-featured' : ''} ${placeholder ? 'card-placeholder' : ''}`}>
      <Tilt>
        <div className="card-visual">{featured ? <DocVisual /> : <PatternVisual index={index} />}</div>
        <div className="card-body">
          <p className="status">{project.status}</p>
          <h3>{project.title}</h3>
          <p className="subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          {project.highlights.length > 0 && (
            <ul>{project.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          )}
          <ul className="chips" aria-label="Technologies">
            {project.stack.map((t) => <li key={t}>{t}</li>)}
          </ul>
          {(project.github || project.demo) && (
            <div className="card-links">
              {project.github && (
                <a className="btn btn-dark" href={project.github} target="_blank" rel="noreferrer">
                  Source code <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              {project.demo && (
                <a className="btn btn-lime" href={project.demo} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      </Tilt>
    </Reveal>
  )
}
