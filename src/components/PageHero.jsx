import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <section className="relative bg-[#0D47A1] min-h-[260px] lg:min-h-[320px] flex items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover opacity-20"
          width="1920"
          height="600"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1]/90 to-[#0D47A1]/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-14">
        <h1 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl mb-3">{title}</h1>
        {subtitle && (
          <p className="text-blue-200 text-base lg:text-lg max-w-xl">{subtitle}</p>
        )}
        <nav aria-label="Breadcrumb" className="mt-4 flex items-center gap-2 text-xs text-blue-300 uppercase tracking-wide">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white font-semibold" aria-current="page">{title}</span>
        </nav>
      </div>
    </section>
  )
}
