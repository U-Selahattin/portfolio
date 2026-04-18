import { useEffect, useState } from 'react'
import s from './Nav.module.css'

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#certifs', label: 'Certifications' },
  { href: '#projects', label: 'Mes projets' },
  { href: '#veille', label: 'Veille' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
        <a href="#hero" className={s.logo}>SU<span>.</span></a>
        <ul className={s.links}>
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href="#contact" className={s.cta}>Contact</a></li>
        </ul>
        <button className={s.burger} onClick={() => setOpen(v => !v)} aria-label="Menu">
          <span className={open ? s.open : ''} />
          <span className={open ? s.open : ''} />
          <span className={open ? s.open : ''} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${s.mobile} ${open ? s.mobileOpen : ''}`} onClick={close}>
        <ul>
          {[...links, { href: '#contact', label: 'Contact' }].map(l => (
            <li key={l.href}>
              <a href={l.href} className={s.mobileLink} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
