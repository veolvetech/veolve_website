import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import AboutPage from './pages/About'
import BlogsPage from './pages/Blogs'
import Contact from './pages/Contact'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PrivacyPolicy from './pages/Privacy'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollAndTitleFix() {
  const location = useLocation()

  useEffect(() => {
    // ensures Helmet recalculates on route change
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollAndTitleFix />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}
