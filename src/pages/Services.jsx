import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import WhatsAppBanner from '../components/WhatsAppBanner'
import { FaChevronRight } from 'react-icons/fa'
import { HERO, SERVICES as SVC_IMAGES } from '../config/images'

const SERVICES = [
  {
    id: 'airport-transfers',
    title: 'Airport Transfers Bolton',
    imgUrl: SVC_IMAGES.airport,
    alt: 'Minibus hire for airport transfers from Bolton to Manchester Airport',
    desc: 'Start and end your journey stress-free with our reliable airport transfer service from Bolton. We cover Manchester Airport, Liverpool John Lennon, Leeds Bradford, and all other major UK airports. Our drivers track your flight in real time.',
    features: ['Meet & Greet service at all terminals','Live flight tracking — no waiting for delays','Early morning & late night pickups from Bolton','Manchester Airport, Liverpool, Leeds Bradford & more'],
  },
  {
    id: 'group-travel',
    title: 'Group Travel Bolton',
    imgUrl: SVC_IMAGES.group,
    alt: 'Group minibus hire in Bolton for school trips and private group travel',
    desc: "Travelling as a group from Bolton? Our spacious 8–16 seater minibuses make group travel across Greater Manchester easy and affordable. Perfect for school trips, sports clubs, family outings, and any shared group journey.",
    features: ['8 to 16 seats — ideal group sizes','Comfortable & fully air-conditioned','Ample luggage space for all passengers','Flexible pick-up points across Bolton'],
  },
  {
    id: 'weddings',
    title: 'Wedding Minibus Hire Bolton',
    imgUrl: SVC_IMAGES.wedding,
    alt: 'Wedding minibus hire in Bolton for bridal party and wedding guests',
    desc: 'Make your special day even more memorable with our elegant wedding minibus hire in Bolton. We provide punctual, stylish transport for the bridal party, family, and guests — ensuring everyone arrives together and on time.',
    features: ['Decorated vehicles available on request','Professional, smartly dressed chauffeur','On-time arrival — guaranteed','Coordination with your full wedding schedule'],
  },
  {
    id: 'day-trips',
    title: 'Day Trips & Tours from Bolton',
    imgUrl: SVC_IMAGES.daytrips,
    alt: 'Minibus day trips and tours from Bolton to the Lake District and Yorkshire',
    desc: "Explore the best of the UK with our day trip minibus hire from Bolton. From the breathtaking Lake District and Yorkshire Dales to coastal towns and city breaks — we'll get your group there in comfort.",
    features: ['Flexible, fully customisable itineraries','All-day hire — you set the schedule','National destinations from Bolton','Return journeys always included'],
  },
  {
    id: 'corporate',
    title: 'Corporate Minibus Hire Bolton',
    imgUrl: SVC_IMAGES.corporate,
    alt: 'Corporate minibus hire in Bolton for business travel and client transfers',
    desc: 'Impress clients and move your team professionally with our corporate minibus hire in Bolton and across Greater Manchester. Our discreet, punctual service is trusted by businesses for conference transfers and staff shuttle runs.',
    features: ['Corporate accounts & invoice billing','Regular scheduled routes for staff','Wi-Fi on request','Conference, exhibition & event transfers'],
  },
  {
    id: 'events',
    title: 'Events & Occasions Transport Bolton',
    imgUrl: SVC_IMAGES.events,
    alt: 'Minibus hire for events and occasions in Bolton including concerts and sporting events',
    desc: "Concerts, football matches, festivals, birthday parties — whatever the occasion in Bolton or Greater Manchester, we'll get your group there and back safely. No parking headaches, no designated drivers.",
    features: ['Late-night pickups — no time pressure','Flexible return times to suit your event','Stadium, arena & venue transfers','Safe and reliable return for everyone'],
  },
]

const SERVICES_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Minibus Hire Services Bolton — PSI Minibuses',
  description: 'Full range of minibus hire services in Bolton and Greater Manchester.',
  url: 'https://www.psiminibuses.co.uk/services',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.psiminibuses.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.psiminibuses.co.uk/services' },
  ]},
}

export default function Services() {
  return (
    <>
      <SEOHead
        title="Minibus Hire Services Bolton"
        description="PSI Minibuses Bolton — airport transfers, wedding minibus hire, group travel, corporate coach hire, day trips and events transport across Bolton and Greater Manchester. Free quote today."
        path="/services"
        jsonLd={SERVICES_JSONLD}
      />
      <PageHero title="Minibus Hire Services in Bolton" subtitle="From airport transfers to wedding transport — professional minibus hire across Bolton and Greater Manchester." bgImage={HERO.services} />

      <section className="bg-white dark:bg-slate-900 py-14 lg:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed">
              PSI Minibuses and Travels Ltd provides a full range of <strong className="dark:text-slate-300">minibus hire services in Bolton</strong> and
              across <strong className="dark:text-slate-300">Greater Manchester</strong>. Whether you're looking for <strong className="dark:text-slate-300">minibus hire near me</strong> or
              planning ahead for a special occasion, we have the right vehicle and service for you.
            </p>
          </div>

          <div className="space-y-20">
            {SERVICES.map(({ id, title, imgUrl, alt, desc, features }, idx) => (
              <article key={id} id={id} className="grid lg:grid-cols-2 gap-10 items-center" aria-labelledby={`service-heading-${id}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={imgUrl}
                    alt={alt}
                    className="rounded-2xl shadow-md dark:shadow-slate-900/40 w-full object-cover h-64 lg:h-80"
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 id={`service-heading-${id}`} className="text-[#263238] dark:text-slate-100 font-black text-2xl lg:text-3xl mb-4">{title}</h2>
                  <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2 mb-6" aria-label={`${title} features`}>
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-700 dark:text-slate-300 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[#2E7D32] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <FaChevronRight className="text-white" size={8} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-sm px-6 py-3 rounded transition-colors">
                    Book This Service <FaChevronRight size={11} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-16 bg-[#F6F7F9] dark:bg-slate-800 rounded-2xl p-8 text-center" aria-label="Related pages">
            <h2 className="text-[#263238] dark:text-slate-100 font-black text-xl mb-3">Ready to Book Minibus Hire in Bolton?</h2>
            <p className="text-gray-500 dark:text-slate-400 text-sm mb-6 max-w-xl mx-auto">
              View our fleet of 8–16 seater minibuses or get in touch for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/fleet" className="inline-flex items-center justify-center bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">View Our Fleet</Link>
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">Get a Free Quote</Link>
            </div>
          </aside>
        </div>
      </section>

      <WhatsAppBanner />
    </>
  )
}
