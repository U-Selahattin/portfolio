import { certifications } from '../data/content'
import { useInView } from '../hooks/useInView'
import { certLogoMap } from './CertLogos'
import s from './Certifications.module.css'

export default function Certifications() {
  const [ref, inView] = useInView()
  return (
    <section id="certifs" className={s.section} ref={ref}>
      <div className="container">
        <header className={`section-header ${inView ? 'visible' : ''}`}>
          <span className="section-num">03</span>
          <h2>Certifications</h2>
        </header>
        <div className={s.grid}>
          {certifications.map((c, i) => {
            const Wrapper = c.link ? 'a' : 'div'
            const props = c.link
              ? { href: c.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
              <Wrapper
                key={c.title}
                className={`${s.card} reveal-up ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
                {...props}
              >
                <div className={s.cardBar} />
                <div className={s.icon}>{certLogoMap[c.title] ?? c.icon}</div>
                <div className={s.body}>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
                <span className={s.badge}>{c.badge}</span>
                {c.link && <span className={s.ext}>↗</span>}
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
