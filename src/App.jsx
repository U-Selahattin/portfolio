import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Veille from './components/Veille'
import Contact from './components/Contact'
import Footer from './components/Footer'
import s from './App.module.css'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Veille />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />

      {/* Back to top */}
      <button
        className={`${s.toTop} ${showTop ? s.toTopVisible : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Haut de page"
      >
        ↑
      </button>
    </>
  )
}
