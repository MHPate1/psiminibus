import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import WhatsAppBanner from '../components/WhatsAppBanner'
import { FaStar, FaGoogle, FaQuoteLeft } from 'react-icons/fa'
import { HERO } from '../config/images'

const REVIEWS = [
  { name: 'Sarah J.',   rating: 5, date: 'October 2024',   text: 'Excellent service from start to finish. Punctual, friendly and very professional. Used PSI for minibus hire in Bolton and cannot fault a thing. Highly recommend!' },
  { name: 'Michael T.', rating: 5, date: 'September 2024', text: 'Used PSI for airport transfers from Bolton to Manchester Airport and it was seamless. Driver was on time, vehicle was spotless. Best minibus hire near me — will definitely book again.' },
  { name: 'Emma R.',    rating: 5, date: 'August 2024',    text: 'Absolutely fantastic for our wedding minibus hire in Bolton. The driver was so helpful and made everything so easy. Our guests loved it — will be recommending to everyone!' },
  { name: 'James L.',   rating: 5, date: 'July 2024',      text: 'Great corporate minibus hire across Greater Manchester. Clean vehicles, professional drivers, always on time. We use PSI Minibuses Bolton regularly and they never disappoint.' },
  { name: 'Rachel K.',  rating: 5, date: 'June 2024',      text: 'We booked a day trip from Bolton to the Yorkshire Dales and it was perfect. PSI Minibuses is the best group travel Bolton has to offer!' },
  { name: 'David M.',   rating: 5, date: 'May 2024',       text: 'Brilliant service for our group night out in Greater Manchester. Easy to book, driver was waiting for us, got everyone home safely. Top marks all round.' },
  { name: 'Priya S.',   rating: 5, date: 'April 2024',     text: 'Used PSI for minibus hire in Bolton for a family occasion and was blown away by the professionalism. Clean, modern vehicle and an incredibly polite driver.' },
  { name: 'Tom H.',     rating: 5, date: 'March 2024',     text: 'Competitive pricing and fantastic service. Booked PSI for a sports club trip from Bolton — everything went perfectly. Already planning our next group travel to Manchester.' },
]

const REVIEWS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Customer Reviews — PSI Minibuses Bolton',
  description: "PSI Minibuses Bolton — 5-star Google rated minibus hire company. Read genuine customer reviews.",
  url: 'https://www.psiminibuses.co.uk/reviews',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '48', bestRating: '5', worstRating: '1' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.psiminibuses.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://www.psiminibuses.co.uk/reviews' },
  ]},
}

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < count ? 'text-yellow-400' : 'text-gray-200 dark:text-slate-600'} size={14} aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <>
      <SEOHead
        title="Customer Reviews — Minibus Hire Bolton"
        description="PSI Minibuses Bolton — rated 5 stars on Google with 48 reviews. Genuine customer reviews for minibus hire, airport transfers, weddings and group travel in Bolton and Greater Manchester."
        path="/reviews"
        jsonLd={REVIEWS_JSONLD}
      />
      <PageHero title="Customer Reviews" subtitle="Don't just take our word for it — hear from our happy passengers across Bolton and Greater Manchester." bgImage={HERO.reviews} />

      <section className="bg-[#0D47A1] dark:bg-slate-800 py-10 transition-colors duration-300" aria-label="Overall Google rating">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FaGoogle size={28} aria-hidden="true" />
            <p className="font-black text-4xl">5.0</p>
          </div>
          <div className="flex items-center justify-center gap-1 mb-2" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} className="text-yellow-400" size={22} aria-hidden="true" />)}
          </div>
          <p className="text-blue-200 dark:text-slate-400 text-sm">Based on 48 Google reviews — PSI Minibuses Bolton</p>
        </div>
      </section>

      <section className="bg-[#F6F7F9] dark:bg-slate-800 py-14 lg:py-20 transition-colors duration-300" aria-labelledby="reviews-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#2E7D32] dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
            <h2 id="reviews-heading" className="text-[#263238] dark:text-slate-100 font-black text-3xl lg:text-4xl">What Our Customers Say About PSI Minibuses</h2>
            <div className="w-16 h-1 bg-[#2E7D32] mx-auto mt-4 rounded" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {REVIEWS.map(({ name, rating, date, text }) => (
              <article key={name} className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50 transition-shadow relative">
                <FaQuoteLeft className="text-[#0D47A1]/10 dark:text-blue-400/10 absolute top-4 right-4" size={30} aria-hidden="true" />
                <Stars count={rating} />
                <blockquote>
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mt-3 mb-4">"{text}"</p>
                </blockquote>
                <footer className="border-t border-gray-100 dark:border-slate-700 pt-3">
                  <p className="font-bold text-[#263238] dark:text-slate-100 text-sm">{name}</p>
                  <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5">{date}</p>
                </footer>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <span className="inline-flex items-center justify-center gap-2 bg-[#0D47A1]/40 text-blue-200 text-sm px-8 py-3.5 rounded cursor-default select-none" title="Google review link coming soon">
                <FaGoogle aria-hidden="true" /> Google Review Link Coming Soon
              </span>
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-sm px-8 py-3.5 rounded transition-colors">
                Book Minibus Hire Bolton
              </Link>
            </div>
            <p className="text-gray-500 dark:text-slate-400 text-sm">
              Looking for <strong className="dark:text-slate-300">minibus hire near me</strong>?{' '}
              <Link to="/services" className="text-[#0D47A1] dark:text-blue-400 hover:underline font-semibold">View all our services</Link>{' '}or{' '}
              <Link to="/fleet" className="text-[#0D47A1] dark:text-blue-400 hover:underline font-semibold">browse our fleet</Link>.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppBanner />
    </>
  )
}
