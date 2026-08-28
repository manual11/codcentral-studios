import Nav from '../components/Nav'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect } from 'react'

export default function AboutPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <main tabIndex={-1}>
      <Nav />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
