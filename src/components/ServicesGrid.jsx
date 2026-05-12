import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import { SERVICES } from '../config/images'

const CARDS = [
  {
    title: 'Airport Transfers Bolton',
    desc: 'Stress-free airport transfers from Bolton to Manchester Airport, Liverpool and all major UK airports.',
    img: SERVICES.airport,
    alt: 'Minibus hire for airport transfers from Bolton to Manchester Airport',
  },
  {
    title: 'Group Travel Bolton',
    desc: 'Travel together in comfort from Bolton. Perfect for any group size across Greater Manchester.',
    img: SERVICES.group,
    alt: 'Group minibus hire in Bolton for private group travel across Greater Manchester',
  },
  {
    title: 'Wedding Minibus Bolton',
    desc: 'Arrive in style on your special day with our premium wedding minibus hire in Bolton.',
    img: SERVICES.wedding,
    alt: 'Wedding minibus hire in Bolton for bridal party and wedding guests',
  },
  {
    title: 'Day Trips from Bolton',
    desc: 'Explore the best places across the UK on minibus day trips from Bolton and Greater Manchester.',
    img: SERVICES.daytrips,
    alt: 'Minibus day trips from Bolton to the Lake District, Yorkshire and across the UK',
  },
  {
    title: 'Corporate Travel Bolton',
    desc: 'Professional corporate minibus hire in Bolton for business travel and client transfers.',
    img: SERVICES.corporate,
    alt: 'Corporate minibus hire in Bolton for business travel and client transfers in Greater Manchester',
  },
  {
    title: 'Events Transport Bolton',
    desc: 'Concerts, parties, sporting events and more — minibus hire in Bolton for every occasion.',
    img: SERVICES.events,
    alt: 'Minibus hire for events and occasions in Bolton including concerts and sporting events',
  },
]

export default function ServicesGrid() {
  return (
    <section
      className="bg-[#F6F7F9] dark:bg-slate-800 py-14 lg:py-20 transition-colors duration-300"
      aria-labelledby="services-grid-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-[#2E7D32] dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer in Bolton
          </p>
          <h2 id="services-grid-heading" className="text-[#263238] dark:text-slate-100 font-black text-3xl lg:text-4xl xl:text-5xl">
            Our Minibus Hire Services
          </h2>
          <div className="w-16 h-1 bg-[#2E7D32] mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map(({ title, desc, img, alt }) => (
            <article key={title}>
              <Link
                to="/services"
                className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden
                  shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/60
                  transition-all duration-300 flex flex-col h-full"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="533"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#263238] dark:text-slate-100 text-lg mb-1.5
                    group-hover:text-[#0D47A1] dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                  <span className="flex items-center gap-1 text-[#2E7D32] dark:text-green-400 font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more <FaChevronRight size={11} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
