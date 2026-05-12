import { FaShieldAlt, FaBus, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const BADGES = [
  { icon: FaShieldAlt, title: 'Safe & Reliable',      desc: 'Your safety is our top priority on every journey' },
  { icon: FaBus,       title: 'Modern Fleet',          desc: 'Comfortable vehicles 8 to 16 seater' },
  { icon: FaClock,     title: 'On Time',               desc: 'Punctual, professional and dependable' },
  { icon: FaMapMarkerAlt, title: 'Local Bolton Experts', desc: 'Proudly serving Bolton & Greater Manchester' },
]

export default function TrustBadges() {
  return (
    <section
      className="bg-white dark:bg-slate-900 py-10 lg:py-14 -mt-1 transition-colors duration-300"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="trust-heading" className="sr-only">Why choose PSI Minibuses in Bolton</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" role="list">
          {BADGES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              role="listitem"
              className="flex flex-col items-center text-center p-5 lg:p-6 rounded-xl
                border border-gray-100 dark:border-slate-700
                bg-white dark:bg-slate-800
                shadow-sm hover:shadow-md dark:hover:shadow-slate-900/60
                hover:-translate-y-0.5 transition-all duration-200"
            >
              <div
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-[#0D47A1] dark:border-blue-500
                  flex items-center justify-center mb-3"
                aria-hidden="true"
              >
                <Icon className="text-[#0D47A1] dark:text-blue-400" size={20} />
              </div>
              <h3 className="font-bold text-[#263238] dark:text-slate-100 text-sm lg:text-base mb-1">{title}</h3>
              <p className="text-gray-500 dark:text-slate-400 text-xs lg:text-sm leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
