import Nav from '../components/Nav'
import Modules from '../components/Modules'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect } from 'react'

export default function ModulesPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <main tabIndex={-1}>
      <Nav />
      <Modules />
      <CTA />
      <Footer />
    </main>
  )
}
