import { ArrowUpRight, Mail } from 'lucide-react'
import { site } from '../config/site'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-h">
      <h2 id="contact-h" className="big">Let's build something together.</h2>
      <p className="contact-lead">I'm open to internships and entry-level roles. The fastest way to reach me is email.</p>
      <div className="hero-actions">
        {site.email && (
          <a className="btn btn-lime" href={`mailto:${site.email}`}>
            <Mail size={18} aria-hidden="true" /> {site.email}
          </a>
        )}
        {site.github && (
          <a className="btn btn-dark" href={site.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
        {site.linkedin && (
          <a className="btn btn-dark" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </section>
  )
}
