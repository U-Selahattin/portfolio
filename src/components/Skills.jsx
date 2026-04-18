import { skills, techPills } from '../data/content'
import { useInView } from '../hooks/useInView'
import s from './Skills.module.css'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className={s.section} ref={ref}>
      <div className="container">
        <header className={`section-header ${inView ? 'visible' : ''}`}>
          <span className="section-num">02</span>
          <h2>Compétences</h2>
        </header>

        <div className={s.grid}>
          {skills.map((cat, i) => (
            <div
              key={cat.category}
              className={`${s.card} reveal-up ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={s.icon}>{cat.icon}</div>
              <h3>{cat.category}</h3>
              <ul>
                {cat.items.map(item => (
                  <li key={item.name}>
                    <div className={s.skillHeader}>
                      <span className={s.skillName}>{item.name}</span>
                      <span className={s.skillPct}>{item.level}%</span>
                    </div>
                    <div className={s.bar}>
                      <div
                        className={s.fill}
                        style={{ width: inView ? `${item.level}%` : '0%', transitionDelay: `${i * 0.08 + 0.3}s` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`reveal-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '.36s' }}>
          <p className={s.pillsLabel}>Stack technique</p>
          <div className={s.pills}>
            {techPills.map(t => (
              <span key={t} className={s.pill}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
