import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import WhatsAppBanner from '../components/WhatsAppBanner'
import { FaCheckCircle, FaUsers, FaCar, FaStar } from 'react-icons/fa'
import { HERO } from '../config/images'

const VALUES = [
  { icon: FaCheckCircle, title: 'Safety First',    desc: 'All vehicles are fully maintained and regularly inspected. Every driver is DBS checked, fully licensed, and professionally trained to DVSA standards.' },
  { icon: FaUsers,       title: 'Customer Focused', desc: 'Your journey matters to us. We go above and beyond to make sure every trip across Bolton and Greater Manchester is comfortable, punctual, and stress-free.' },
  { icon: FaCar,         title: 'Modern Fleet',     desc: 'Our fleet of 8–16 seater minibuses are clean, modern, and air-conditioned — perfect for airport transfers, weddings, and group travel in Bolton.' },
  { icon: FaStar,        title: 'Trusted Locally',  desc: 'With dozens of 5-star Google reviews, our reputation speaks for itself. PSI Minibuses is the preferred minibus hire choice across Bolton and Greater Manchester.' },
]

const STATS = [
  { number: '500+', label: 'Happy Customers' },
  { number: '5★',   label: 'Google Rating' },
  { number: '10+',  label: 'Years Experience' },
  { number: '24/7', label: 'Customer Support' },
]

const ABOUT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About PSI Minibuses and Travels Ltd — Bolton',
  description: 'PSI Minibuses and Travels Ltd — professional minibus hire company in Bolton, Greater Manchester. Fully licensed, insured, and trusted locally.',
  url: 'https://www.psiminibuses.co.uk/about',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.psiminibuses.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.psiminibuses.co.uk/about' },
  ]},
}

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us — Minibus Hire Bolton"
        description="PSI Minibuses and Travels Ltd is a professional minibus hire company based in Bolton, Greater Manchester. Fully licensed, DBS-checked drivers, modern fleet."
        path="/about"
        jsonLd={ABOUT_JSONLD}
      />
      <PageHero title="About PSI Minibuses" subtitle="Bolton's trusted minibus hire company — safe, reliable and comfortable travel, every journey." bgImage={HERO.about} />

      {/* Who we are */}
      <section className="bg-white dark:bg-slate-900 py-14 lg:py-20 transition-colors duration-300" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2E7D32] dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">Who We Are</p>
              <h2 id="about-heading" className="text-[#263238] dark:text-slate-100 font-black text-3xl lg:text-4xl mb-6">
                PSI Minibuses &amp; Travels Ltd — Bolton
              </h2>
              <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed mb-4">
                PSI Minibuses and Travels Ltd is a professional <strong className="dark:text-slate-300">minibus hire company based in Bolton,
                Greater Manchester</strong>. We provide safe, reliable, and comfortable travel solutions for individuals and groups
                across Bolton and the wider North West.
              </p>
              <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed mb-4">
                Whether you need <strong className="dark:text-slate-300">airport transfers from Bolton</strong> to Manchester Airport, a
                <strong className="dark:text-slate-300"> wedding minibus in Bolton</strong>, corporate coach hire, or a fun group day trip —
                our experienced team is here to get you there on time, every time.
              </p>
              <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                As a local Bolton business, we are fully licensed under DVSA regulations and comprehensively insured for
                passenger transport throughout Greater Manchester and beyond.
              </p>
              <ul className="space-y-2 mb-8" aria-label="Key credentials">
                {['Fully Licensed & Insured — DVSA regulated','DBS Checked Professional Drivers','Modern, Clean, Air-Conditioned Vehicles','Competitive, Transparent Pricing','24/7 Customer Support'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 dark:text-slate-300 text-sm">
                    <FaCheckCircle className="text-[#2E7D32] dark:text-green-400 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/services" className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">View Our Services</Link>
                <Link to="/contact" className="inline-flex items-center justify-center border-2 border-[#0D47A1] dark:border-blue-500 text-[#0D47A1] dark:text-blue-400 hover:bg-[#0D47A1] hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">Get a Quote</Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full bg-gradient-to-br from-[#0D47A1]/8 to-[#2E7D32]/8 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-10 lg:p-14 text-center">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 lg:p-10 inline-block mb-8">
                  <img
                    src="/logo.png"
                    alt="PSI Minibuses and Travels Ltd — Bolton, Greater Manchester"
                    className="h-20 lg:h-28 w-auto object-contain mx-auto dark:hidden"
                    width="280"
                    height="112"
                    loading="lazy"
                  />
                  <img
                    src="/logo-white.png"
                    alt="PSI Minibuses and Travels Ltd — Bolton, Greater Manchester"
                    className="h-20 lg:h-28 w-auto object-contain mx-auto hidden dark:block"
                    width="280"
                    height="112"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[['10+', 'Years in Bolton'],['500+', 'Happy Customers'],['24/7', 'Available'],['5★', 'Google Rated']].map(([num, label]) => (
                    <div key={label} className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm">
                      <p className="font-black text-2xl text-[#0D47A1] dark:text-blue-400">{num}</p>
                      <p className="text-xs text-gray-500 dark:text-slate-400 font-medium mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0D47A1] dark:bg-slate-800 py-12 lg:py-16 transition-colors duration-300" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map(({ number, label }) => (
              <div key={label}>
                <p className="text-white font-black text-4xl lg:text-5xl mb-1">{number}</p>
                <p className="text-blue-200 dark:text-slate-400 text-sm lg:text-base font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F6F7F9] dark:bg-slate-800 py-14 lg:py-20 transition-colors duration-300" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#2E7D32] dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">Our Promise</p>
            <h2 id="values-heading" className="text-[#263238] dark:text-slate-100 font-black text-3xl lg:text-4xl">Why Bolton Chooses PSI Minibuses</h2>
            <div className="w-16 h-1 bg-[#2E7D32] mx-auto mt-4 rounded" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50 transition-shadow">
                <div className="w-12 h-12 bg-[#0D47A1]/10 dark:bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-[#0D47A1] dark:text-blue-400" size={22} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#263238] dark:text-slate-100 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/fleet" className="inline-flex items-center justify-center bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-sm px-6 py-3 rounded transition-colors">View Our Fleet</Link>
              <Link to="/reviews" className="inline-flex items-center justify-center border-2 border-[#0D47A1] dark:border-blue-500 text-[#0D47A1] dark:text-blue-400 hover:bg-[#0D47A1] hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-bold text-sm px-6 py-3 rounded transition-colors">Read Customer Reviews</Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppBanner />
    </>
  )
}
