import Nav from '../components/Nav'
import Results from '../components/Results'
import CaseStudy from '../components/CaseStudy'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect } from 'react'

export default function ResultsPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <main tabIndex={-1}>
      <Nav />
      <Results />
      <CaseStudy />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
