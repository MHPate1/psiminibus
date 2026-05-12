import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/447738320506"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
