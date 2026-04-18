import { about, btsSio, meta } from '../data/content'
import { useInView } from '../hooks/useInView'
import s from './About.module.css'

export default function About() {
  const [ref, inView] = useInView()
  return (
    <section id="about" className={s.section} ref={ref}>
      <div className="container">
        <header className={`section-header ${inView ? 'visible' : ''}`}>
          <span className="section-num">01</span>
          <h2>À propos</h2>
        </header>

        <div className={s.grid}>
          {/* ── Left: text ── */}
          <div className={`${s.text} reveal-left ${inView ? 'visible' : ''}`}>
            <p className={s.lead}>{about.lead}</p>
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className={s.infoGrid}>
              {about.info.map(item => (
                <div key={item.label} className={s.infoItem}>
                  <span className={s.infoLabel}>{item.label}</span>
                  <span className={s.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: visual ── */}
          <div className={`${s.visual} reveal-right ${inView ? 'visible' : ''}`}>
            <div className={s.avatarCard}>
              <div className={s.glow} />
              <div className={s.ring} />
              <div className={s.ring2} />
              <div className={s.initials}>SU</div>
              <div className={s.availBadge}>
                <span className={s.dot} />
                {meta.available ? 'Disponible' : 'Non disponible'}
              </div>
            </div>
            <div className={`${s.floatCard} ${s.fc1}`}>
              <span>🎓</span> BTS SIO 2024–2026
            </div>
            <div className={`${s.floatCard} ${s.fc2}`}>
              <span>💡</span> Veille techno active
            </div>
            <div className={`${s.floatCard} ${s.fc3}`}>
              <span>🚀</span> Open to work
            </div>
          </div>
        </div>

        {/* ── BTS SIO block ── */}
        <div className={`${s.btsBlock} reveal-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '.2s' }}>
          <div className={s.btsHeader}>
            <div className={s.btsBadge}>{btsSio.title}</div>
            <div>
              <h3 className={s.btsTitle}>{btsSio.subtitle}</h3>
              <p className={s.btsDesc}>{btsSio.description}</p>
            </div>
          </div>
          <div className={s.btsOptions}>
            {btsSio.options.map(opt => (
              <div key={opt.code} className={`${s.btsCard} ${opt.active ? s.btsCardActive : ''}`}>
                <div className={s.btsCardTop}>
                  <span className={s.btsCode}>{opt.code}</span>
                  {opt.active && <span className={s.btsChosen}>✓ Mon option</span>}
                </div>
                <p className={s.btsCardLabel}>{opt.label}</p>
                <p className={s.btsCardDesc}>{opt.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
