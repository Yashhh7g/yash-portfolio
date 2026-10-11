import { site } from '../config/site'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {site.name}</p>
      <p>
        {site.github && <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>}
        {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        {site.email && <a href={`mailto:${site.email}`}>Email</a>}
      </p>
    </footer>
  )
}
