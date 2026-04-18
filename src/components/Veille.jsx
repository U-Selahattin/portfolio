import { veille } from '../data/content'
import { useInView } from '../hooks/useInView'
import s from './Veille.module.css'

export default function Veille() {
  const [ref, inView] = useInView()
  return (
    <section id="veille" className={s.section} ref={ref}>
      <div className="container">
        <header className={`section-header ${inView ? 'visible' : ''}`}>
          <span className="section-num">05</span>
          <h2>Veille technologique</h2>
          <p className="section-sub">Thème : {veille.theme}</p>
        </header>
        <p className={`${s.intro} reveal-up ${inView ? 'visible' : ''}`}>{veille.intro}</p>
        <div className={s.timeline}>
          {veille.articles.map((a, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={i}
                className={`${s.item} ${isLeft ? s.left : s.right} ${isLeft ? 'reveal-left' : 'reveal-right'} ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className={s.date}>{a.date}</div>
                <div className={s.content}>
                  <div className={s.contentHeader}>
                    <h4>{a.title}</h4>
                    {a.articleUrl && a.articleUrl !== '#' ? (
                      <a href={a.articleUrl} target="_blank" rel="noopener noreferrer" className={s.articleLink}>
                        Lire l'article ↗
                      </a>
                    ) : (
                      <span className={s.source}>{a.source}</span>
                    )}
                  </div>
                  <p>{a.summary}</p>
                  {a.articleUrl && a.articleUrl !== '#' && (
                    <span className={s.sourceSmall}>{a.source}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
