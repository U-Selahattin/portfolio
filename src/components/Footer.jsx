import { meta } from '../data/content'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <a href="#hero" className={s.logo}>SU<span>.</span></a>

          <p>© {new Date().getFullYear()} {meta.name} — BTS SIO SLAM</p>

          <div className={s.links}>
            <a href={`mailto:${meta.email}`}>Email</a>
            {meta.github && meta.github !== '#' && (
              <a href={meta.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {meta.linkedin && meta.linkedin !== '#' && (
              <a href={meta.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            )}
            <a href="#hero" className={s.top}>↑ Haut</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
