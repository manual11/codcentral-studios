import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect } from 'react'

export default function ContactPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <main tabIndex={-1}>
      <Nav />
      <Contact />
      <Footer />
    </main>
  )
}
