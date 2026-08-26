import { Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import CookieBanner from './components/CookieBanner'
import WhatsAppWidget from './components/WhatsAppWidget'
import HomePage from './components/HomePage'
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
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/biashara-mjini" element={<BiasharaMjiniPage />} />
        <Route path="/featured-business" element={<FeaturedBusinessPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/:section" element={<HomePage />} />
      </Routes>
    </>
  )
}
