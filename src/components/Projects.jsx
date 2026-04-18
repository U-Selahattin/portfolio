import { projects } from '../data/content'
import { useInView } from '../hooks/useInView'
import s from './Projects.module.css'

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className={s.section} ref={ref}>
      <div className="container">
        <header className={`section-header ${inView ? 'visible' : ''}`}>
          <span className="section-num">04</span>
          <h2>Mes projets</h2>
        </header>

        <div className={s.grid}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`${s.card} reveal-up ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={s.cardTop}>
                <span className={s.tag}>{p.tag}</span>
                <div className={s.links}>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={`${s.linkBtn} ${s.liveBtn}`}>
                      Live ↗
                    </a>
                  )}
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className={s.linkBtn}>
                    GitHub ↗
                  </a>
                </div>
              </div>

              <h4>{p.title}</h4>
              <p>{p.description}</p>

              <div className={s.tech}>
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
