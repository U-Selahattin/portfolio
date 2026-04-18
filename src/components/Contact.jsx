import { useState } from 'react'
import { meta } from '../data/content'
import { useInView } from '../hooks/useInView'
import s from './Contact.module.css'

export default function Contact() {
  const [ref, inView] = useInView()
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 3500)
  }

  return (
    <section id="contact" className={s.section} ref={ref}>
      <div className="container">
        <header className={`section-header ${inView ? 'visible' : ''}`}>
          <span className="section-num">06</span>
          <h2>Contact</h2>
        </header>
        <div className={s.grid}>
          <div className={`${s.left} reveal-left ${inView ? 'visible' : ''}`}>
            <h3>Travaillons ensemble</h3>
            <p>Disponible pour une alternance, un stage ou tout projet de développement.</p>
            <div className={s.items}>
              <a href={`mailto:${meta.email}`} className={s.item}>
                <div className={s.ciIcon}>✉</div>
                <div>
                  <span className={s.ciLabel}>Email</span>
                  <span className={s.ciValue}>{meta.email}</span>
                </div>
              </a>
              <a href={`tel:${meta.phone.replace(/\s/g, '')}`} className={s.item}>
                <div className={s.ciIcon}>📞</div>
                <div>
                  <span className={s.ciLabel}>Téléphone</span>
                  <span className={s.ciValue}>{meta.phone}</span>
                </div>
              </a>
              <div className={s.item}>
                <div className={s.ciIcon}>📍</div>
                <div>
                  <span className={s.ciLabel}>Localisation</span>
                  <span className={s.ciValue}>{meta.location}</span>
                </div>
              </div>
            </div>
          </div>

          <form className={`${s.form} reveal-right ${inView ? 'visible' : ''}`} onSubmit={handleSubmit}>
            <div className={s.row}>
              <div className={s.group}>
                <label>Nom complet</label>
                <input type="text" placeholder="Jean Dupont" required />
              </div>
              <div className={s.group}>
                <label>Email</label>
                <input type="email" placeholder="jean@exemple.fr" required />
              </div>
            </div>
            <div className={s.group}>
              <label>Sujet</label>
              <input type="text" placeholder="Proposition d'alternance" />
            </div>
            <div className={s.group}>
              <label>Message</label>
              <textarea rows={5} placeholder="Bonjour Selahattin, ..." required />
            </div>
            <button type="submit" className={`${s.submit} ${sent ? s.success : ''}`}>
              {sent ? '✓ Message envoyé !' : <>Envoyer le message <span>→</span></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
