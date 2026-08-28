import { Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import CookieBanner from './components/CookieBanner'
import WhatsAppWidget from './components/WhatsAppWidget'

// Main landing page
import HomePage from './components/HomePage'

// Section pages
import AboutPage from './pages/AboutPage'
import ModulesPage from './pages/ModulesPage'
import ResultsPage from './pages/ResultsPage'
import ProcessPage from './pages/ProcessPage'
import ContactPage from './pages/ContactPage'

// Standalone pages
import BlogPage from './components/BlogPage'
import RealEstatePage from './components/RealEstatePage'
import BiasharaMjiniPage from './components/BiasharaMjiniPage'
import FeaturedBusinessPage from './components/FeaturedBusinessPage'
import TermsPage from './components/TermsPage'
import PrivacyPage from './components/PrivacyPage'

export default function App() {
  return (
    <>
      <Cursor />
      <CookieBanner />
      <WhatsAppWidget />
      <Routes>
        {/* Landing */}
        <Route path="/" element={<HomePage />} />

        {/* Section pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Full standalone pages */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/biashara-mjini" element={<BiasharaMjiniPage />} />
        <Route path="/featured-business" element={<FeaturedBusinessPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </>
  )
}
