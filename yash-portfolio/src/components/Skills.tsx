import { skillGroups } from '../data/skills'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-h">
      <h2 id="skills-h" className="big">Skills</h2>
      <Reveal className="skills">
        {skillGroups.map((g) => (
          <div key={g.title} className="skill-group">
            <h3>{g.title}</h3>
            <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
