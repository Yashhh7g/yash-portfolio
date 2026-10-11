import { ArrowUpRight, Mail } from 'lucide-react'
import { site } from '../config/site'
import { skillGroups } from '../data/skills'

export function AboutSlide() {
  return (
    <div className="wrap">
      <h2 className="big">About</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>I'm a Computer Science & Engineering student (B.Tech, expected 2027) who learns by building: full-stack web apps with React, Node.js and MySQL, client work with Next.js, NestJS and PostgreSQL, and computer-vision experiments with Python, OpenCV and MediaPipe.</p>
          <p>I enjoy data structures, databases and software quality, and I'm exploring how AI can make everyday tools more useful. I'm looking for a software engineering internship or entry-level role where I can build reliable, user-centric software.</p>
        </div>
        <dl className="glass profile">
          <div><dt>Education</dt><dd>B.Tech, Computer Science & Engineering, expected 2027<br />Ashokrao Mane Group of Institutions (BATU)</dd></div>
          <div><dt>Based in</dt><dd>{site.location}</dd></div>
          <div><dt>Languages</dt><dd>English, Hindi, Marathi</dd></div>
          <div><dt>Looking for</dt><dd>Internship or entry-level software role</dd></div>
        </dl>
      </div>
    </div>
  )
}

export function SkillsSlide() {
  return (
    <div className="wrap">
      <h2 className="big">Skills</h2>
      <div className="skills">
        {skillGroups.map((g) => (
          <div key={g.title} className="glass skill-group">
            <h3>{g.title}</h3>
            <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContactSlide() {
  return (
    <div className="wrap contact">
      <h2 className="big">Let's build something together.</h2>
      <p className="contact-lead">I'm open to internships and entry-level roles. The fastest way to reach me is email.</p>
      <div className="actions">
        {site.email && <a className="btn btn-pink" href={`mailto:${site.email}`}><Mail size={18} aria-hidden="true" /> {site.email}</a>}
        {site.github && <a className="btn btn-glass" href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>}
        {site.linkedin && <a className="btn btn-glass" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>}
      </div>
    </div>
  )
}
