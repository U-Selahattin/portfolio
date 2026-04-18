import { useState } from 'react'
import { meta } from '../data/content'
import { useInView } from '../hooks/useInView'
import s from './Contact.module.css'

// 👉 Remplace par ton ID Formspree (voir README ou instructions)
const FORMSPREE_ID = 'xlgabyzg'

export default function Contact() {
  const [ref, inView] = useInView()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const data = new FormData(e.target)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        e.target.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const btnLabel = {
    idle:    <> Envoyer le message <span>→</span></>,
    sending: '⏳ Envoi en cours...',
    success: '✓ Message envoyé !',
    error:   '✗ Erreur — réessaie',
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

          <form
            className={`${s.form} reveal-right ${inView ? 'visible' : ''}`}
            onSubmit={handleSubmit}
          >
            <div className={s.row}>
              <div className={s.group}>
                <label>Nom complet</label>
                <input name="name" type="text" placeholder="Jean Dupont" required />
              </div>
              <div className={s.group}>
                <label>Email</label>
                <input name="email" type="email" placeholder="jean@exemple.fr" required />
              </div>
            </div>
            <div className={s.group}>
              <label>Sujet</label>
              <input name="subject" type="text" placeholder="Proposition d'alternance" />
            </div>
            <div className={s.group}>
              <label>Message</label>
              <textarea name="message" rows={5} placeholder="Bonjour Selahattin, ..." required />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`${s.submit} ${status === 'success' ? s.success : ''} ${status === 'error' ? s.error : ''}`}
            >
              {btnLabel[status]}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
