import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import MapEmbed from '../components/MapEmbed'
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'
import { HERO } from '../config/images'

const CONTACT_ITEMS = [
  { icon: FaPhone,        label: 'Phone',              value: '07738 320506',              href: 'tel:07738320506',                       desc: 'Call us directly — we answer quickly.' },
  { icon: FaWhatsapp,     label: 'WhatsApp',           value: 'Chat on WhatsApp',          href: 'https://wa.me/447738320506',            desc: 'Message us for an instant quote.', external: true },
  { icon: FaEnvelope,     label: 'General Enquiries',  value: 'info@psiminibuses.co.uk',   href: 'mailto:info@psiminibuses.co.uk',        desc: 'General enquiries and information.' },
  { icon: FaEnvelope,     label: 'Bookings & Quotes',  value: 'bookings@psiminibuses.co.uk', href: 'mailto:bookings@psiminibuses.co.uk', desc: 'Book a minibus or request a quote.' },
  { icon: FaMapMarkerAlt, label: 'Address',            value: 'Bolton, Greater Manchester, England', href: null,                          desc: 'Serving Bolton, Greater Manchester & the North West.' },
  { icon: FaClock,        label: 'Availability',       value: '24/7 Service',              href: null,                                    desc: "Early mornings, late nights, weekends — always available." },
]

const EMAIL_DEPTS = [
  { address: 'info@psiminibuses.co.uk',     label: 'General Enquiries' },
  { address: 'bookings@psiminibuses.co.uk', label: 'Bookings & Quotes' },
  { address: 'accounts@psiminibuses.co.uk', label: 'Accounts' },
  { address: 'drivers@psiminibuses.co.uk',  label: 'Drivers / Operations' },
]

const CONTACT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact PSI Minibuses — Minibus Hire Bolton',
  description: 'Contact PSI Minibuses and Travels Ltd for minibus hire in Bolton and Greater Manchester. Call, WhatsApp, or email for a free quote.',
  url: 'https://www.psiminibuses.co.uk/contact',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.psiminibuses.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.psiminibuses.co.uk/contact' },
  ]},
}

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us — Minibus Hire Bolton"
        description="Contact PSI Minibuses and Travels Ltd in Bolton, Greater Manchester. Call 07738 320506, WhatsApp, or email for a free minibus hire quote. Airport transfers, weddings, group travel and more."
        path="/contact"
        jsonLd={CONTACT_JSONLD}
      />

      <section className="relative bg-[#0D47A1] min-h-[220px] lg:min-h-[280px] flex items-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={HERO.contact} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" width="1920" height="600" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1]/90 to-[#0D47A1]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-14">
          <h1 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl mb-3">Contact PSI Minibuses Bolton</h1>
          <p className="text-blue-200 text-base lg:text-lg max-w-xl">Get in touch for a free, no-obligation quote for minibus hire in Bolton and Greater Manchester.</p>
          <nav aria-label="Breadcrumb" className="mt-4 flex items-center gap-2 text-xs text-blue-300 uppercase tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-semibold" aria-current="page">Contact</span>
          </nav>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900 py-14 lg:py-20 transition-colors duration-300" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left */}
            <div>
              <p className="text-[#2E7D32] dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
              <h2 id="contact-heading" className="text-[#263238] dark:text-slate-100 font-black text-3xl lg:text-4xl mb-3">
                Minibus Hire Bolton — We're Here to Help
              </h2>
              <p className="text-gray-500 dark:text-slate-400 text-base leading-relaxed mb-6">
                Whether you're looking to book <strong className="dark:text-slate-300">minibus hire in Bolton</strong>, need a quote for
                <strong className="dark:text-slate-300"> airport transfers</strong>, wedding transport, or group travel across
                <strong className="dark:text-slate-300"> Greater Manchester</strong> — reach out on any channel below.
              </p>

              {/* Business address */}
              <address className="not-italic bg-[#F6F7F9] dark:bg-slate-800 rounded-xl p-5 mb-6 border-l-4 border-[#0D47A1] dark:border-blue-500">
                <h3 className="font-bold text-[#263238] dark:text-slate-100 text-sm uppercase tracking-wide mb-2">Our Base — Bolton, Greater Manchester</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  PSI Minibuses and Travels Ltd<br />
                  Bolton, Greater Manchester, England<br />
                  <a href="tel:07738320506" className="text-[#0D47A1] dark:text-blue-400 hover:underline font-semibold">07738 320506</a>
                </p>
                <p className="text-gray-500 dark:text-slate-500 text-xs mt-2">Covering Bolton, Bury, Wigan, Horwich, Leigh and all of Greater Manchester.</p>
              </address>

              <ul className="space-y-3" aria-label="Contact methods">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, desc, external }) => (
                  <li key={label} className="flex items-start gap-4 p-4 bg-[#F6F7F9] dark:bg-slate-800 rounded-xl">
                    <div className="w-10 h-10 bg-[#0D47A1] rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Icon className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
                          className="font-bold text-[#0D47A1] dark:text-blue-400 hover:text-[#2E7D32] dark:hover:text-green-400 transition-colors text-sm">
                          {value}
                        </a>
                      ) : (
                        <p className="font-bold text-[#263238] dark:text-slate-100 text-sm">{value}</p>
                      )}
                      <p className="text-gray-500 dark:text-slate-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {/* Email departments */}
              <div className="border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                <div className="bg-[#0D47A1] dark:bg-slate-800 px-5 py-3">
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide">Email Addresses</h3>
                </div>
                <ul className="divide-y divide-gray-100 dark:divide-slate-700">
                  {EMAIL_DEPTS.map(({ address, label }) => (
                    <li key={address} className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 py-4 gap-1 hover:bg-[#F6F7F9] dark:hover:bg-slate-800 transition-colors">
                      <span className="text-gray-500 dark:text-slate-400 text-sm">{label}</span>
                      <a href={`mailto:${address}`} className="text-[#0D47A1] dark:text-blue-400 hover:text-[#2E7D32] dark:hover:text-green-400 font-semibold text-sm transition-colors break-all">
                        {address}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp */}
              <div className="bg-[#2E7D32] rounded-2xl p-7 text-white">
                <h3 className="font-black text-xl mb-2">Get a Free Minibus Hire Quote</h3>
                <p className="text-green-100 text-sm mb-5 leading-relaxed">
                  The fastest way to get a price for <strong>minibus hire in Bolton</strong> is via WhatsApp.
                  Send us your date, pick-up, destination, and number of passengers.
                </p>
                <a href="https://wa.me/447738320506" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-[#2E7D32] hover:bg-gray-100 font-bold text-sm px-6 py-3.5 rounded transition-colors w-full">
                  <FaWhatsapp size={18} aria-hidden="true" /> Open WhatsApp
                </a>
              </div>

              {/* Services links */}
              <aside className="bg-[#F6F7F9] dark:bg-slate-800 rounded-2xl p-6" aria-label="Services overview">
                <h3 className="font-bold text-[#263238] dark:text-slate-100 text-base mb-4">Our Minibus Hire Services in Bolton</h3>
                <ul className="space-y-2 mb-5">
                  {['Airport Transfers — Bolton to Manchester Airport','Wedding Minibus Hire Bolton','Group Travel across Greater Manchester','Day Trips from Bolton','Corporate Minibus Hire Bolton','Events & Occasions Transport'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-slate-300 text-sm">
                      <FaCheckCircle className="text-[#2E7D32] dark:text-green-400 flex-shrink-0" size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2">
                  <Link to="/services" className="text-center bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-sm px-4 py-3 rounded transition-colors">View All Services</Link>
                  <Link to="/fleet" className="text-center border-2 border-[#0D47A1] dark:border-blue-500 text-[#0D47A1] dark:text-blue-400 hover:bg-[#0D47A1] hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-bold text-sm px-4 py-3 rounded transition-colors">View Our Fleet</Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <MapEmbed />
    </>
  )
}
