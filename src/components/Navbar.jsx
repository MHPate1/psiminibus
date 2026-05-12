import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import TopBar from './TopBar'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Fleet', to: '/fleet' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <TopBar />
      <header
        className={`sticky top-0 z-50 bg-white dark:bg-slate-900 transition-all duration-300 ${
          scrolled
            ? 'shadow-md dark:shadow-slate-900/80'
            : 'border-b border-gray-100 dark:border-slate-700'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-24 lg:h-28">

          <Link
            to="/"
            className="flex items-center flex-shrink-0"
            aria-label="PSI Minibuses and Travels Ltd — Home"
          >
            <img
              src="/logo.png"
              alt="PSI Minibuses and Travels Ltd logo"
              className="block dark:hidden h-[90px] w-auto object-contain"
              height="90"
            />
            <img
              src="/logo-white(2).png"
              alt="PSI Minibuses and Travels Ltd logo"
              className="hidden dark:block h-[90px] w-auto object-contain mix-blend-screen"
              height="90"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors hover:text-[#2E7D32] dark:hover:text-green-400 ${
                    isActive
                      ? 'text-[#0D47A1] dark:text-blue-400 border-b-2 border-[#0D47A1] dark:border-blue-400 pb-0.5'
                      : 'text-[#263238] dark:text-slate-300'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop right-side controls */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-sm px-6 py-2.5 rounded transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="w-11 h-11 flex items-center justify-center text-[#263238] dark:text-slate-300 rounded"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen
                ? <FaTimes size={22} aria-hidden="true" />
                : <FaBars size={22} aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* Mobile full-screen overlay */}
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
          className={`lg:hidden fixed inset-0 top-[136px] bg-white dark:bg-slate-900 z-40 flex flex-col
            transition-all duration-300 ease-in-out
            ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
          <div className="flex flex-col px-6 pt-6 pb-4 gap-1 flex-1">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                tabIndex={menuOpen ? 0 : -1}
                className={({ isActive }) =>
                  `text-lg font-bold py-4 border-b border-gray-100 dark:border-slate-700 transition-colors ${
                    isActive
                      ? 'text-[#0D47A1] dark:text-blue-400'
                      : 'text-[#263238] dark:text-slate-200 hover:text-[#2E7D32] dark:hover:text-green-400'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              tabIndex={menuOpen ? 0 : -1}
              className="mt-6 flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-base px-6 py-4 rounded transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}
