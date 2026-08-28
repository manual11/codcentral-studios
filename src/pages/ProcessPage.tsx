import Nav from '../components/Nav'
import Process from '../components/Process'
import Maintenance from '../components/Maintenance'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect } from 'react'

export default function ProcessPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <main tabIndex={-1}>
      <Nav />
      <Process />
      <Maintenance />
      <CTA />
      <Footer />
    </main>
  )
}
