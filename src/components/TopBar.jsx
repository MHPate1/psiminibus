import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, EMAIL } from '../config/contact'

export default function TopBar() {
  return (
    <div className="bg-[#263238] dark:bg-slate-950 text-white text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10">

        {/* Contact — full text on sm+, icons only on mobile */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-1.5 hover:text-green-400 transition-colors min-h-[44px]"
            aria-label="Call PSI Minibuses"
          >
            <FaPhone className="text-[#2E7D32] flex-shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-1.5 hover:text-green-400 transition-colors min-h-[44px]"
            aria-label="Email PSI Minibuses"
          >
            <FaEnvelope className="text-[#2E7D32] flex-shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">{EMAIL}</span>
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-1">
          <span className="hidden sm:inline text-gray-400 text-xs mr-2 uppercase tracking-widest">
            Follow Us
          </span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="w-8 h-8 flex items-center justify-center rounded hover:text-[#2E7D32] transition-colors">
            <FaFacebookF aria-hidden="true" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="w-8 h-8 flex items-center justify-center rounded hover:text-[#2E7D32] transition-colors">
            <FaInstagram aria-hidden="true" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
            className="w-8 h-8 flex items-center justify-center rounded hover:text-[#2E7D32] transition-colors">
            <FaWhatsapp aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
