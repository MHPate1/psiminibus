/**
 * Central image registry — swap any URL here and it updates everywhere.
 * All photos sourced from Unsplash free CDN.
 * Format: ?w=<px>&q=80   (add &h=<px>&fit=crop for forced aspect ratio)
 */

const U = 'https://images.unsplash.com'

// ─── Hero / full-width backgrounds (1920px) ──────────────────────────────────
export const HERO = {
  home:     `${U}/photo-1544620347-c4fd4a3d5957?w=1920&q=80`,   // coach bus on road
  services: `${U}/photo-1474487548417-781cb6d646f3?w=1920&q=80`, // empty open highway
  about:    `${U}/photo-1449965408869-eaa3f722e40d?w=1920&q=80`, // driving through countryside
  fleet:    `${U}/photo-1570125909232-eb263c188f7e?w=1920&q=80`, // white coach exterior
  gallery:  `${U}/photo-1491438590914-bc09fcaaf77a?w=1920&q=80`, // group of happy travellers
  reviews:  `${U}/photo-1529156069898-49953e39b3ac?w=1920&q=80`, // smiling group of people
  contact:  `${U}/photo-1436491865332-7a61a109cc05?w=1920&q=80`, // plane at airport gate
}

// ─── Service images (800×500) ─────────────────────────────────────────────────
export const SERVICES = {
  airport:   `${U}/photo-1530521954074-e64f6810b32d?w=800&q=80`, // airport terminal interior
  group:     `${U}/photo-1543269865-cbf427effbad?w=800&q=80`,    // group of friends laughing
  wedding:   `${U}/photo-1519225421980-715cb0215aed?w=800&q=80`, // outdoor wedding
  daytrips:  `${U}/photo-1506905925346-21bda4d32df4?w=800&q=80`, // mountain coastal road
  corporate: `${U}/photo-1556157382-97eda2d62296?w=800&q=80`,    // business professionals
  events:    `${U}/photo-1540575467063-178a50c2df87?w=800&q=80`, // concert crowd
}

// ─── Fleet vehicles (700×450) ────────────────────────────────────────────────
export const FLEET = {
  eight:    `${U}/photo-1558618666-fcd25c85cd64?w=700&q=80`,    // Mercedes van exterior
  twelve:   `${U}/photo-1570125909232-eb263c188f7e?w=700&q=80`, // white coach side-on
  sixteen:  `${U}/photo-1544620347-c4fd4a3d5957?w=700&q=80`,   // large coach bus
}

// ─── About page (800×600) ────────────────────────────────────────────────────
export const ABOUT = {
  team: `${U}/photo-1507003211169-0a1dd7228f2d?w=800&q=80`, // professional driver portrait
}

// ─── Gallery (mixed heights) ─────────────────────────────────────────────────
export const GALLERY = [
  { url: `${U}/photo-1570125909232-eb263c188f7e?w=800&q=80`,   caption: 'Our Bolton Minibus Fleet',      alt: 'PSI Minibuses fleet of coaches parked in Bolton, Greater Manchester' },
  { url: `${U}/photo-1436491865332-7a61a109cc05?w=800&q=80`,   caption: 'Airport Transfers from Bolton', alt: 'Minibus for airport transfers from Bolton to Manchester Airport' },
  { url: `${U}/photo-1519225421980-715cb0215aed?w=800&q=80`,   caption: 'Wedding Transport Bolton',      alt: 'Wedding minibus hire in Bolton for bridal party transport' },
  { url: `${U}/photo-1473773508845-188df298d2d1?w=800&q=80`,   caption: 'Day Trips from Bolton',         alt: 'Minibus day trip from Bolton to the Lake District and North West' },
  { url: `${U}/photo-1556157382-97eda2d62296?w=800&q=80`,      caption: 'Corporate Travel Bolton',       alt: 'Corporate minibus hire in Bolton for business and client transfers' },
  { url: `${U}/photo-1540575467063-178a50c2df87?w=800&q=80`,   caption: 'Events Transport Bolton',       alt: 'Minibus hire for concerts and events in Bolton and Greater Manchester' },
  { url: `${U}/photo-1544620347-c4fd4a3d5957?w=800&q=80`,      caption: 'Comfortable Interiors',         alt: 'Interior of a clean, modern minibus available for hire in Bolton' },
  { url: `${U}/photo-1507003211169-0a1dd7228f2d?w=800&q=80`,   caption: 'Professional Drivers',          alt: 'PSI Minibuses professional driver ready for minibus hire in Bolton' },
  { url: `${U}/photo-1529156069898-49953e39b3ac?w=800&q=80`,   caption: 'Group Travel Bolton',           alt: 'Group travel by minibus from Bolton, Greater Manchester' },
  { url: `${U}/photo-1449965408869-eaa3f722e40d?w=800&q=80`,   caption: 'Serving Bolton & Beyond',       alt: 'PSI Minibuses on the road serving Bolton and Greater Manchester' },
  { url: `${U}/photo-1488646953014-85cb44e25828?w=800&q=80`,   caption: 'Meet & Greet Service',          alt: 'Meet and greet airport transfer service from Bolton' },
  { url: `${U}/photo-1558618666-fcd25c85cd64?w=800&q=80`,      caption: 'Minibus Fleet Bolton',          alt: 'PSI Minibuses vehicles for hire in Bolton, Greater Manchester' },
]
