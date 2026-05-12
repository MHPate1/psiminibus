import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../config/contact'

export default function WhatsAppBanner() {
  return (
    <section className="bg-[#2E7D32] py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 hidden sm:flex">
              <FaWhatsapp className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-white font-black text-xl lg:text-2xl">Need a Quick Quote?</h2>
              <p className="text-green-100 text-sm mt-0.5">
                Message us on WhatsApp for an instant response
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#2E7D32] hover:bg-gray-100 font-bold text-base px-8 py-4 rounded transition-colors min-h-[52px] w-full sm:w-auto justify-center flex-shrink-0"
          >
            <FaWhatsapp size={20} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
