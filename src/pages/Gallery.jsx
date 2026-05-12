import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import WhatsAppBanner from '../components/WhatsAppBanner'
import { HERO, GALLERY } from '../config/images'

const GALLERY_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'PSI Minibuses Bolton — Photo Gallery',
  description: 'Photos of PSI Minibuses and Travels Ltd fleet, drivers, and journeys across Bolton and Greater Manchester.',
  url: 'https://www.psiminibuses.co.uk/gallery',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.psiminibuses.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://www.psiminibuses.co.uk/gallery' },
  ]},
}

export default function Gallery() {
  return (
    <>
      <SEOHead
        title="Gallery — Minibus Hire Bolton"
        description="Photos of PSI Minibuses and Travels Ltd — our minibus fleet, drivers, and customer journeys across Bolton and Greater Manchester."
        path="/gallery"
        jsonLd={GALLERY_JSONLD}
      />
      <PageHero title="Gallery" subtitle="A glimpse of our minibus fleet, our team, and the journeys we've made possible across Bolton and Greater Manchester." bgImage={HERO.gallery} />

      <section className="bg-[#F6F7F9] dark:bg-slate-800 py-14 lg:py-20 transition-colors duration-300" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#2E7D32] dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">Our Work</p>
            <h2 id="gallery-heading" className="text-[#263238] dark:text-slate-100 font-black text-3xl lg:text-4xl">PSI Minibuses Bolton — Photo Gallery</h2>
            <div className="w-16 h-1 bg-[#2E7D32] mx-auto mt-4 rounded" />
            <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm">
              From <strong className="dark:text-slate-300">airport transfers from Bolton</strong> to wedding transport and group day trips across Greater Manchester.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY.map(({ url, caption, alt }, idx) => (
              <figure key={idx} className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md dark:shadow-slate-900/40 transition-shadow">
                <img
                  src={url}
                  alt={alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="800"
                  height="533"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">{caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="text-center text-gray-400 dark:text-slate-500 text-sm mt-10">
            More photos coming soon. Follow us on social media for the latest updates.
          </p>
          <div className="text-center mt-6">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/services" className="inline-flex items-center justify-center bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">Our Services</Link>
              <Link to="/fleet" className="inline-flex items-center justify-center border-2 border-[#0D47A1] dark:border-blue-500 text-[#0D47A1] dark:text-blue-400 hover:bg-[#0D47A1] hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-bold text-sm px-6 py-3.5 rounded transition-colors">View Our Fleet</Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppBanner />
    </>
  )
}
