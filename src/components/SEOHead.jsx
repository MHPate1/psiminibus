import { useEffect } from 'react'

const BASE_URL = 'https://www.psiminibuses.co.uk'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`

/**
 * Injects per-page SEO: document.title, meta description, OG tags,
 * canonical link, and optional JSON-LD structured data block.
 */
export default function SEOHead({ title, description, path = '', ogImage, jsonLd }) {
  const fullTitle = `${title} | PSI Minibuses and Travels Ltd | Bolton`
  const canonical = `${BASE_URL}${path}`
  const image = ogImage || DEFAULT_IMAGE

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:image"]', 'content', image)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', image)

    let canonicalEl = document.querySelector('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.rel = 'canonical'
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.href = canonical

    // Inject page-level JSON-LD (removed on unmount to avoid duplication)
    const existing = document.getElementById('page-jsonld')
    if (existing) existing.remove()

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = 'page-jsonld'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      const s = document.getElementById('page-jsonld')
      if (s) s.remove()
    }
  }, [fullTitle, description, canonical, image, jsonLd])

  return null
}
