import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import Hero from './Hero'
import Ticker from './Ticker'
import About from './About'
import Modules from './Modules'
import Results from './Results'
import CaseStudy from './CaseStudy'
import Process from './Process'
import Maintenance from './Maintenance'
import TrustedBy from './TrustedBy'
import Testimonials from './Testimonials'
import BlogTeaser from './BlogTeaser'
import Newsletter from './Newsletter'
import WeeklyPlanner from './WeeklyPlanner'
import CTA from './CTA'
import Contact from './Contact'
import Footer from './Footer'
import SOPManager from './SOPManager'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HomePage() {
  useScrollReveal()
  const { section } = useParams<{ section?: string }>()

  useEffect(() => {
    // Support both /contact route param and /#contact hash
    const target = section || window.location.hash.replace('#', '')
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    }
  }, [section])

  return (
    <main id="main-content" tabIndex={-1}>
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <TrustedBy />
      <Modules />
      <Results />
      <CaseStudy />
      <Process />
      <Maintenance />
      <Testimonials />
      <BlogTeaser />
      <Newsletter />
      <WeeklyPlanner />
      <SOPManager />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
