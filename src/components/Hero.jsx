import { Link } from 'react-router-dom'
import { FaWhatsapp, FaChevronRight } from 'react-icons/fa'
import { WHATSAPP_URL } from '../config/contact'

export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] flex items-start overflow-hidden bg-[#263238]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover object-center opacity-40"
          width="1920"
          height="1080"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1]/80 via-[#263238]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-[12vh] pb-10 lg:pt-[14vh] lg:pb-14 w-full">
        <div className="max-w-2xl">
          <p className="inline-block bg-[#2E7D32] text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest mb-5">
            Minibus Hire Bolton &amp; Greater Manchester
          </p>

          <h1 id="hero-heading" className="text-white font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-3">
            Safe, Reliable &amp;<br />
            Comfortable<br />
            Travel
          </h1>

          <p className="text-[#66BB6A] font-semibold italic text-2xl sm:text-3xl lg:text-4xl mb-6">
            Every Journey.
          </p>

          <p className="text-gray-300 text-sm sm:text-base mb-10 leading-relaxed">
            Airport Transfers &bull; Group Travel &bull; Day Trips<br className="sm:hidden" />
            <span className="hidden sm:inline"> &bull; </span>
            Weddings &bull; Corporate Travel &bull; Events
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-base px-8 py-4 rounded transition-colors min-h-[52px] w-full sm:w-auto"
            >
              Get a Quote <FaChevronRight size={12} aria-hidden="true" />
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#263238] font-bold text-base px-8 py-4 rounded transition-colors min-h-[52px] w-full sm:w-auto"
            >
              Our Services
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-base px-8 py-4 rounded transition-colors min-h-[52px] w-full sm:w-auto"
            >
              <FaWhatsapp size={18} aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
