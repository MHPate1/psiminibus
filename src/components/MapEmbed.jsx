export default function MapEmbed() {
  return (
    <section
      className="bg-white dark:bg-slate-900 py-14 lg:py-20 transition-colors duration-300"
      aria-labelledby="map-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-[#2E7D32] dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">Find Us</p>
          <h2 id="map-heading" className="text-[#263238] dark:text-slate-100 font-black text-3xl lg:text-4xl">
            Our Location
          </h2>
          <div className="w-16 h-1 bg-[#2E7D32] mx-auto mt-4 rounded" />
          <p className="text-gray-500 dark:text-slate-400 mt-4 text-sm lg:text-base">
            PSI Minibuses and Travels Ltd is based in <strong className="dark:text-slate-300">Bolton, Greater Manchester</strong> —
            covering Bolton, Bury, Wigan, Horwich, Leigh and all surrounding areas.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md dark:shadow-slate-900/60 border border-gray-100 dark:border-slate-700 h-80 lg:h-[450px]">
          <iframe
            title="PSI Minibuses and Travels Ltd — Bolton, Greater Manchester"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38199.7!2d-2.4297!3d53.5779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b01c7a4f6c4f1%3A0xa63246bdbbf54d2d!2sBolton%2C%20Greater%20Manchester!5e0!3m2!1sen!2suk!4v1699000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="text-center text-gray-400 dark:text-slate-500 text-xs mt-4">
          Bolton, Greater Manchester, England — PSI Minibuses and Travels Ltd
        </p>
      </div>
    </section>
  )
}
