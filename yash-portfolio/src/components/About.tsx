import { site } from '../config/site'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-h">
      <h2 id="about-h" className="big">About</h2>
      <Reveal className="about-text">
        <p>
          I'm a Computer Science & Engineering student (B.Tech, expected 2027) at Ashokrao Mane Group of Institutions, Maharashtra. I learn best by building: full-stack web applications with React, Node.js and MySQL, client work with Next.js, NestJS and PostgreSQL, and computer-vision experiments with Python, OpenCV and MediaPipe.
        </p>
        <p>
          I enjoy data structures, databases and software quality, and I'm exploring how AI can make everyday tools more useful. I'm looking for a software engineering internship or entry-level role where I can build reliable, user-centric software.
        </p>
        <p className="muted">Based in {site.location}. Languages: English, Hindi, Marathi.</p>
      </Reveal>
    </section>
  )
}
