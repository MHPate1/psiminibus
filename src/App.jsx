import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Fleet from './pages/Fleet'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900 transition-colors duration-300">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
