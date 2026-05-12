import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import WhatsAppBanner from '../components/WhatsAppBanner'
import { FaUsers, FaSuitcase, FaWifi, FaSnowflake, FaCheckCircle } from 'react-icons/fa'
import { HERO, FLEET } from '../config/images'

const VEHICLES = [
  {
    name: '8 Seater Minibus',
    imgUrl: FLEET.eight,
    alt: 'Clean 8 seater minibus available for hire in Bolton, Greater Manchester',
    seats: 8, luggage: 'Up to 8 bags',
    desc: 'Perfect for smaller groups, airport transfers from Bolton, and family trips. Compact yet spacious with comfortable seating and ample luggage space.',
    features: ['Air Conditioning', 'USB Charging Points', 'Ample Luggage Space', 'Comfortable Seating'],
  },
  {
    name: '12 Seater Minibus',
    imgUrl: FLEET.twelve,
    alt: 'Modern 12 seater minibus for group hire in Bolton and Greater Manchester',
    seats: 12, luggage: 'Up to 12 bags',
    desc: 'Our most popular vehicle for minibus hire in Bolton. Ideal for medium-sized groups, corporate travel, wedding guests, and day trips from Greater Manchester.',
    features: ['Air Conditioning', 'USB Charging Points', 'Large Luggage Hold', 'Reclining Seats'],
  },
  {
    name: '16 Seater Minibus',
    imgUrl: FLEET.sixteen,
    alt: 'Spacious 16 seater minibus for large group hire across Greater Manchester',
    seats: 16, luggage: 'Up to 16 bags',
    desc: 'Our largest vehicle — ideal for big groups, corporate events, and large-scale travel across Bolton, Greater Manchester, and beyond.',
    features: ['Air Conditioning', 'Wi-Fi Available', 'Overhead Storage', 'Extended Legroom'],
  },
]

const FLEET_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Our Fleet — Minibus Hire Bolton | PSI Minibuses',
  description: "PSI Minibuses' fleet of 8, 12, and 16 seater minibuses for hire in Bolton and Greater Manchester.",
  url: 'https://www.psiminibuses.co.uk/fleet',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.psiminibuses.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Our Fleet', item: 'https://www.psiminibuses.co.uk/fleet' },
  ]},
}

export default function Fleet() {
  return (
    <>
      <SEOHead
        title="Our Fleet — Minibus Hire Bolton"
        description="PSI Minibuses Bolton fleet — 8, 12, and 16 seater minibuses for hire across Bolton and Greater Manchester. Modern, clean, air-conditioned, and fully insured."
        path="/fleet"
        jsonLd={FLEET_JSONLD}
      />
      <PageHero title="Our Fleet" subtitle="Modern, clean, and comfortable 8–16 seater minibuses available for hire across Bolton and Greater Manchester." bgImage={HERO.fleet} />

      <section className="bg-[#F6F7F9] dark:bg-slate-800 py-14 lg:py-20 transition-colors duration-300" aria-labelledby="fleet-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#2E7D32] dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">Our Vehicles</p>
            <h2 id="fleet-heading" className="text-[#263238] dark:text-slate-100 font-black text-3xl lg:text-4xl">Choose Your Minibus in Bolton</h2>
            <div className="w-16 h-1 bg-[#2E7D32] mx-auto mt-4 rounded" />
            <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm lg:text-base">
              Every vehicle in our Bolton minibus hire fleet is fully insured, regularly serviced, and driven by professional, DBS-checked drivers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VEHICLES.map(({ name, imgUrl, alt, seats, luggage, desc, features }) => (
              <article key={name} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={imgUrl} alt={alt} className="w-full h-full object-cover" loading="lazy" width="700" height="450" />
                  <div className="absolute top-3 right-3 bg-[#0D47A1] text-white text-xs font-bold px-3 py-1.5 rounded-full">{seats} Seats</div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-[#263238] dark:text-slate-100 text-xl mb-2">{name}</h3>
                  <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-slate-500 mb-4 pb-4 border-b border-gray-100 dark:border-slate-700">
                    <span className="flex items-center gap-1"><FaUsers className="text-[#2E7D32]" aria-hidden="true" /> {seats} passengers</span>
                    <span className="flex items-center gap-1"><FaSuitcase className="text-[#2E7D32]" aria-hidden="true" /> {luggage}</span>
                  </div>
                  <ul className="space-y-1.5" aria-label={`${name} features`}>
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-300">
                        <FaCheckCircle className="text-[#2E7D32] dark:text-green-400 flex-shrink-0" size={13} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900 py-12 lg:py-16 transition-colors duration-300" aria-labelledby="standards-heading">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 id="standards-heading" className="text-[#263238] dark:text-slate-100 font-black text-2xl lg:text-3xl mb-4">Every Vehicle Meets the Highest Standards</h2>
          <p className="text-gray-500 dark:text-slate-400 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            All PSI Minibuses vehicles are cleaned before and after every journey, regularly serviced by certified mechanics, and fully insured for passenger transport across Bolton and Greater Manchester.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[{ icon: FaSnowflake, label: 'Air Conditioned' },{ icon: FaWifi, label: 'Wi-Fi Available' },{ icon: FaCheckCircle, label: 'Fully Insured' },{ icon: FaUsers, label: 'DBS Drivers' }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 p-4 bg-[#F6F7F9] dark:bg-slate-800 rounded-xl">
                <Icon className="text-[#0D47A1] dark:text-blue-400" size={24} aria-hidden="true" />
                <span className="text-sm font-semibold text-[#263238] dark:text-slate-200">{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/services" className="inline-flex items-center justify-center bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">View All Services</Link>
            <Link to="/contact" className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">Get a Quote for Bolton</Link>
          </div>
        </div>
      </section>

      <WhatsAppBanner />
    </>
  )
}
