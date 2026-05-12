import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import ServicesGrid from '../components/ServicesGrid'
import MapEmbed from '../components/MapEmbed'
import WhatsAppBanner from '../components/WhatsAppBanner'
import { FaStar, FaCheckCircle } from 'react-icons/fa'

const HOME_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Minibus Hire Bolton | PSI Minibuses and Travels Ltd',
  description: 'PSI Minibuses and Travels Ltd — professional minibus hire in Bolton and Greater Manchester.',
  url: 'https://www.psiminibuses.co.uk/',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.psiminibuses.co.uk/' },
    ],
  },
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Minibus Hire Bolton"
        description="PSI Minibuses and Travels Ltd — professional minibus hire in Bolton and Greater Manchester. Airport transfers, weddings, group travel, corporate hire and day trips. Call 07738 320506."
        path="/"
        jsonLd={HOME_JSONLD}
      />

      <Hero />
      <TrustBadges />
      <ServicesGrid />

      {/* Why Choose Us */}
      <section
        className="bg-white dark:bg-slate-900 py-14 lg:py-20 transition-colors duration-300"
        aria-labelledby="why-choose-heading"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2E7D32] dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">
                Trusted in Bolton
              </p>
              <h2 id="why-choose-heading" className="text-[#263238] dark:text-slate-100 font-black text-3xl lg:text-4xl mb-5">
                Bolton's Chosen Minibus Hire Company
              </h2>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                Whether you need <strong className="dark:text-slate-300">minibus hire in Bolton</strong> for an airport run,
                a wedding, a corporate event, or a group day out — PSI Minibuses and Travels Ltd is the trusted local
                choice across <strong className="dark:text-slate-300">Greater Manchester</strong>. Every vehicle is modern,
                clean, and driven by a fully licensed professional.
              </p>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
                From <strong className="dark:text-slate-300">airport transfers from Bolton</strong> to Manchester Airport and
                beyond, to bespoke wedding transport and private group travel — we cover it all. We're proud to be a local
                business serving Bolton, Bury, Wigan, Horwich and the wider Greater Manchester area.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Fully Licensed & Insured — DVSA certified',
                  'Modern fleet: 8, 12, and 16 seater minibuses',
                  'Professional, DBS-checked drivers',
                  '24/7 availability including early mornings and late nights',
                  'Competitive, transparent pricing — no hidden fees',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 dark:text-slate-300 text-sm">
                    <FaCheckCircle className="text-[#2E7D32] dark:text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/about"
                  className="inline-flex items-center justify-center bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">
                  About PSI Minibuses
                </Link>
                <Link to="/fleet"
                  className="inline-flex items-center justify-center border-2 border-[#0D47A1] dark:border-blue-500 text-[#0D47A1] dark:text-blue-400 hover:bg-[#0D47A1] hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">
                  View Our Fleet
                </Link>
              </div>
            </div>

            {/* Review snippet */}
            <aside aria-label="Customer review highlight">
              <div className="bg-[#F6F7F9] dark:bg-slate-800 rounded-2xl p-8 shadow-sm dark:shadow-slate-900/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#0D47A1] dark:text-blue-400 font-black text-lg">Google</span>
                  <span className="font-black text-3xl text-[#263238] dark:text-slate-100">5.0</span>
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={18} aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-400 dark:text-slate-500 mb-5">Based on 48 reviews</p>

                <blockquote className="space-y-4">
                  {[
                    { text: '"Excellent service from start to finish. Punctual, friendly and very professional. Highly recommend!"', author: 'Sarah J.' },
                    { text: '"Used PSI for airport transfers from Bolton to Manchester Airport — seamless every time."', author: 'Michael T.' },
                    { text: '"Perfect wedding minibus in Bolton. Our guests were so impressed."', author: 'Emma R.' },
                  ].map(({ text, author }) => (
                    <figure key={author} className="border-l-4 border-[#2E7D32] pl-4">
                      <p className="text-gray-600 dark:text-slate-400 text-sm italic leading-relaxed">{text}</p>
                      <figcaption className="text-gray-400 dark:text-slate-500 text-xs mt-1 font-semibold">— {author}</figcaption>
                    </figure>
                  ))}
                </blockquote>

                <Link to="/reviews"
                  className="inline-flex items-center gap-1 text-[#0D47A1] dark:text-blue-400 font-semibold text-sm mt-5 hover:underline">
                  Read all reviews →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <WhatsAppBanner />
      <MapEmbed />
    </>
  )
}
