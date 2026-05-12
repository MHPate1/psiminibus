import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGoogle, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Fleet', to: '/fleet' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const SERVICES = [
  { label: 'Airport Transfers Bolton', to: '/services' },
  { label: 'Group Travel Bolton', to: '/services' },
  { label: 'Wedding Minibus Bolton', to: '/services' },
  { label: 'Day Trips from Bolton', to: '/services' },
  { label: 'Corporate Travel Bolton', to: '/services' },
  { label: 'Events Transport Bolton', to: '/services' },
]

export default function Footer() {
  return (
    <footer className="bg-[#263238] dark:bg-slate-950 text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + logo */}
          <div>
            <Link to="/" aria-label="PSI Minibuses — Home" className="inline-block mb-4">
              <img
                src="/logo-white.png"
                alt="PSI Minibuses and Travels Ltd"
                className="h-12 w-auto object-contain"
                width="120"
                height="48"
                loading="lazy"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 dark:text-slate-400">
              Professional <strong className="text-gray-300">minibus hire in Bolton</strong> and
              across Greater Manchester. Safe, reliable and comfortable travel — every journey.
            </p>
            <nav aria-label="Social media links">
              <div className="flex items-center gap-3 mt-5">
                {[
                  { href: 'https://facebook.com', label: 'PSI Minibuses on Facebook', Icon: FaFacebookF },
                  { href: 'https://instagram.com', label: 'PSI Minibuses on Instagram', Icon: FaInstagram },
                  { href: 'https://wa.me/447738320506', label: 'Chat with PSI Minibuses on WhatsApp', Icon: FaWhatsapp },
                  { href: 'https://google.com', label: 'PSI Minibuses on Google', Icon: FaGoogle },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 bg-white/10 hover:bg-[#2E7D32] rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </nav>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h2 className="text-white font-bold text-base uppercase tracking-wider mb-5">Quick Links</h2>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to + label}>
                  <Link to={to} className="text-sm text-gray-400 dark:text-slate-400 hover:text-[#2E7D32] dark:hover:text-green-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our services">
            <h2 className="text-white font-bold text-base uppercase tracking-wider mb-5">Services in Bolton</h2>
            <ul className="space-y-2.5">
              {SERVICES.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-gray-400 dark:text-slate-400 hover:text-[#2E7D32] dark:hover:text-green-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h2 className="text-white font-bold text-base uppercase tracking-wider mb-5">Contact Us</h2>
            <ul className="space-y-3">
              <li>
                <a href="tel:07738320506" className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#2E7D32] transition-colors">
                  <FaPhone className="text-[#2E7D32] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  07738 320506
                </a>
              </li>
              <li>
                <a href="mailto:info@psiminibuses.co.uk" className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#2E7D32] transition-colors break-all">
                  <FaEnvelope className="text-[#2E7D32] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  info@psiminibuses.co.uk
                </a>
              </li>
              <li>
                <a href="https://www.psiminibuses.co.uk" className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#2E7D32] transition-colors">
                  <FaGlobe className="text-[#2E7D32] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  www.psiminibuses.co.uk
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-gray-400">
                  <FaMapMarkerAlt className="text-[#2E7D32] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  Bolton, Greater Manchester, England
                </span>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} PSI Minibuses and Travels Ltd. All Rights Reserved.
            <span className="hidden sm:inline"> | Minibus Hire Bolton, Greater Manchester.</span>
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms &amp; Conditions</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
