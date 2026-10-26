export const siteUrl = 'https://artechsolutionpk.com'

export const site = {
  name: 'AR Tech Solution',
  shortName: 'AR Tech',
  tagline:
    'AR Tech Solution is a CCTV and networking company in Lahore offering CCTV cameras, IP exchange, laptops and computers - with sale, installation and maintenance for homes, shops and offices. Get a free quote today.',
  ceo: {
    name: 'Muhammad Awais',
    title: 'CEO',
    photo: '/img/leadership/awais.jpg',
    phone: '+923184018083',
    phoneDisplay: '+92 318 4018083',
  },
  director: {
    name: 'Arslan Tariq',
    title: 'Director',
    photo: '/img/leadership/aslan.jpg',
    phone: '+923234040074',
    phoneDisplay: '+92 323 4040074',
  },
  phone: '+923184018083',
  phoneDisplay: '+92 318 4018083',
  email: 'artechsolution313@gmail.com',
}

export const telHref = `tel:${site.phone}`
export const mailHref = `mailto:${site.email}`
export const whatsappHref = `https://wa.me/${site.phone.replace('+', '')}`

export function personTelHref(person) {
  return `tel:${person.phone || site.phone}`
}

export function personWhatsAppHref(person) {
  const phone = (person.phone || site.phone).replace('+', '')
  return `https://wa.me/${phone}`
}

export const pageSeo = {
  home: {
    title: 'CCTV & Networking Company in Lahore | AR Tech Solution',
    description:
      'AR Tech Solution: CCTV cameras, networking, IP exchange (IP PBX), laptops and computers in Lahore. Sale, installation, maintenance. Get a free quote.',
  },
  about: {
    title: 'About AR Tech Solution | CCTV & IT Company in Lahore',
    description:
      'Meet AR Tech Solution, a Lahore company providing CCTV, networking, IP exchange and computer solutions with expert installation and reliable support.',
  },
  products: {
    title: 'CCTV Camera Packages & Networking Equipment in Lahore',
    description:
      'Buy CCTV camera packages, networking equipment, IP exchange systems, laptops and computers in Lahore. Get a free quote today.',
  },
  service: {
    title: 'CCTV Installation & Maintenance Services in Lahore | AR Tech',
    description:
      'Sale, expert installation, maintenance and support for CCTV, networking, IP exchange and computers in Lahore. Call or WhatsApp AR Tech Solution.',
  },
  feature: {
    title: 'Why Choose AR Tech Solution in Lahore',
    description:
      'AR Tech Solution combines quality CCTV, networking and computer products with expert installation and dependable support across Lahore.',
  },
  quote: {
    title: 'CCTV Camera Price in Lahore - Free Quote | AR Tech Solution',
    description:
      'Get a free quote and CCTV camera price in Lahore. Also networking, IP exchange, laptops and computers. Request your quote today!',
  },
  contact: {
    title: 'Contact AR Tech Solution | CCTV & Networking in Lahore',
    description:
      'Contact AR Tech Solution in Lahore for CCTV cameras, networking, IP exchange, laptops and computers. Call or WhatsApp today for a free quote.',
  },
  notFound: {
    title: `Page Not Found | ${site.name}`,
    description: `The page you requested was not found on ${site.name}.`,
  },
}

export const hero = {
  heading: 'Professional CCTV, Networking & Computer Solutions in Lahore',
  text: site.tagline,
}

export const aboutHome = {
  heading: 'About AR Tech Solution - CCTV & IT Company in Lahore',
  paragraphs: [
    'AR Tech Solution is a Lahore-based company providing CCTV cameras, networking, IP exchange, laptops and computers. We handle everything from choosing the right equipment to sale, purchase, installation and maintenance, for homes, shops and offices.',
    'We are committed to high-quality products, reliable installation and prompt support, so the security and IT performance of your business stays dependable. Call or WhatsApp us today for a free quote.',
  ],
}

export const aboutPage = {
  heading: 'Who We Are - CCTV & IT Solutions Company in Lahore',
  paragraphs: [
    'AR Tech Solution is a Lahore-based company providing CCTV cameras, networking, IP exchange (IP PBX), laptops and computers. We supply, install and maintain security and IT equipment for homes, shops, offices and growing businesses.',
    'Our team handles the full job: understanding your requirement, recommending the right equipment, neat installation, testing and after-sales support, so your system keeps working the way it should.',
    'We are committed to high-quality products, reliable installation and efficient support. Visit us at Aljanat Mall, 2nd Floor, Jora Pull, Zarrar Shaheed Road, Lahore, or call or WhatsApp us today for a free quote.',
  ],
}

/** @deprecated Prefer aboutHome / aboutPage */
export const aboutLead = aboutHome.paragraphs[0]
/** @deprecated Prefer aboutHome / aboutPage */
export const aboutPromise = aboutHome.paragraphs[1]

export const servicesHome = [
  {
    title: 'Sale & Purchase',
    icon: 'fa-shopping-bag',
    text: 'CCTV, networking, IP exchange and computer hardware supplied to match your site and budget in Lahore.',
  },
  {
    title: 'Expert Installation',
    icon: 'fa-tools',
    text: 'Neat CCTV, network cabling and IP exchange installation in Lahore, tested to work right the first time.',
  },
  {
    title: 'Reliable Maintenance',
    icon: 'fa-cogs',
    text: 'Regular checks, CCTV repair, network and computer maintenance so your equipment performs day after day.',
  },
  {
    title: 'Dedicated Support',
    icon: 'fa-headset',
    text: 'Direct help from our team for advice, quotes and on-site support across Lahore.',
  },
]

export const servicesPage = [
  {
    title: 'Sale & Purchase of CCTV & IT Equipment',
    icon: 'fa-shopping-bag',
    text: 'We supply CCTV cameras, networking equipment, IP exchange systems, laptops and computers. Tell us your site and budget and we will recommend the right products.',
  },
  {
    title: 'Expert CCTV & Network Installation',
    icon: 'fa-tools',
    text: 'Neat, professional installation of CCTV cameras, network cabling, WiFi and IP exchange in Lahore - mounted, configured and tested so everything works from day one.',
  },
  {
    title: 'Reliable Maintenance & Repair',
    icon: 'fa-cogs',
    text: 'Regular checks and repairs for CCTV systems, networks and computers. We fix problems like cameras not recording, slow WiFi and network drops.',
  },
  {
    title: 'Dedicated Support',
    icon: 'fa-headset',
    text: 'Call or WhatsApp our team for advice, quotes and on-site support anywhere in Lahore.',
  },
]

export const services = servicesHome

export const servicesHomeCopy = {
  heading: 'CCTV Installation, Maintenance & IT Support Services in Lahore',
}

export const servicesPageCopy = {
  heading: 'Our CCTV, Network & IT Services in Lahore',
  intro:
    'AR Tech Solution looks after your CCTV, network and computers from start to finish. We help you choose the right equipment, install it neatly, test it, and keep it running with regular maintenance and support. Whether you need CCTV camera installation for a home or shop, office LAN and WiFi cabling, an IP exchange for your team, or computers set up for staff, our Lahore team can do it. Call or WhatsApp us today to book your installation or get a free quote.',
}

export const productsHomeCopy = {
  heading: 'CCTV, Networking, IP Exchange & Computer Products in Lahore',
  intro:
    'Choose from CCTV camera packages, networking equipment, IP exchange systems, laptops and desktop computers. Get a free quote today - call or WhatsApp AR Tech Solution now.',
}

export const productsPageCopy = {
  heading: 'Buy CCTV Camera Packages, Networking & IP Exchange Equipment in Lahore',
  intro:
    'Looking for CCTV camera packages in Lahore? AR Tech Solution supplies CCTV cameras with NVR/DVR recorders, networking equipment, IP exchange systems, laptops and desktop computers for homes, shops and offices. Tap a product to see the brands we supply, then get your free quote today.',
}

export const reasons = [
  { icon: 'fa-shield-alt', label: 'Quality', value: 'Products' },
  { icon: 'fa-tools', label: 'Expert', value: 'Installation' },
  { icon: 'fa-cogs', label: 'Reliable', value: 'Maintenance' },
  { icon: 'fa-headset', label: 'Dedicated', value: 'Support' },
]

export const whyChooseUs = {
  heading: 'Why Choose AR Tech Solution in Lahore',
  text: 'AR Tech Solution combines quality CCTV, networking and computer products with expert installation and dependable support, so your home, shop or office in Lahore stays secure and connected. One team for your cameras, network, phones and computers. Request your free quote today.',
}

export const facts = [
  {
    icon: 'fa-video',
    num: '01',
    title: 'CCTV Cameras & Security Systems',
    text: 'HD and night vision CCTV cameras, NVR/DVR recording and mobile viewing for homes, shops and offices in Lahore.',
  },
  {
    icon: 'fa-sitemap',
    num: '02',
    title: 'Networking & IP Exchange',
    text: 'Office LAN, WiFi, Cat6 cabling and IP exchange (IP PBX) telephone systems that keep your team connected.',
  },
  {
    icon: 'fa-laptop',
    num: '03',
    title: 'Computers & Support',
    text: 'Business laptops, desktop computers and after-sales support so your workstations stay productive.',
  },
]

export const serviceAreaCopy = {
  heading: 'CCTV & IT Services Across Lahore',
  subheading: 'All of Lahore',
  text: 'AR Tech Solution provides reliable CCTV installation, networking, Wi-Fi setup, access control, biometric systems, and IT support services across all of Lahore. Whether you need security solutions for your home, office, shop, or commercial property, our team is ready to help with your technical and security requirements. From CCTV camera installation and maintenance to network configuration and IT support, we serve customers throughout Lahore with solutions tailored to their needs. Contact AR Tech Solution today to discuss your requirements and get professional assistance.',
}

export const clientsHeading = 'Businesses That Trust AR Tech Solution'

export const quoteCopy = {
  homeHeading: 'Get a Free CCTV & Networking Quote in Lahore',
  homeText: 'Looking for CCTV cameras, networking, IP exchange or computers? Fill in the form and get your free quote today.',
  pageHeading: 'Get Your CCTV Camera Price in Lahore - Free Quote',
  pageText:
    'Tell us the product you need - CCTV cameras, networking, IP exchange, laptops or computers. Fill in the form and get your free quote today. For a faster quote, mention how many cameras you need, the type of place (home, shop or office) and your area in Lahore. Submit the form now.',
  notePlaceholder: 'Number of cameras, preferred brand or special note',
}

export const contactCopy = {
  heading: 'Get in Touch for CCTV, Networking & Computers',
  text: 'Call, email or send a WhatsApp message for CCTV cameras, networking, IP exchange or computers in Lahore. Visit us at Aljanat Mall, 2nd Floor, Jora Pull, Zarrar Shaheed Road, Lahore, or contact AR Tech Solution today for a free quote.',
}

export const leadershipHeading = 'Our Leadership Team'

export const office = {
  address: 'Aljanat Mall, 2nd Floor, Jora Pull, Zarrar Shaheed Road, Lahore, 54810',
  lat: 31.548404,
  lng: 74.407983,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Al+Jannat+Mall,+Jora+Pull,+Zarrar+Shaheed+Road,+Lahore',
  embedUrl:
    'https://maps.google.com/maps?q=31.548404,74.407983&z=17&hl=en&output=embed',
  areaEmbedUrl:
    'https://maps.google.com/maps?q=31.548404,74.407983&z=15&hl=en&output=embed',
}

export const clients = [
  { name: 'Sitara Fabrics', logo: '/img/clients/sitara-fabrics.jpg' },
  { name: 'English Shoes', logo: '/img/clients/english-shoes.jpg' },
  { name: 'Stylo', logo: '/img/clients/stylo.jpg' },
  { name: 'Future D Pakistan', logo: '/img/clients/future-d-pakistan.jpg' },
]

export const reviews = [
  {
    name: 'Imran K.',
    text: 'AR Tech Solution installed CCTV across our shop in Johar Town. The cameras were placed cleanly, recording was ready the same day, and they showed us how to check footage on a phone.',
  },
  {
    name: 'Hina S.',
    text: 'We needed a stable office network. Their team ran the cabling, set up the switches, and left every point labeled. Support answered the same day when we added more users.',
  },
  {
    name: 'Bilal A.',
    text: 'Our counter computers were slowing the shop down. AR Tech supplied business desktops, installed them, and moved our files without stopping the day’s work.',
  },
  {
    name: 'Nadia R.',
    text: 'The IP phone system they installed is clear and simple for the staff. They stayed until every extension worked and showed us how to add a new line later.',
  },
  {
    name: 'Usman T.',
    text: 'A camera went offline after a storm. The maintenance visit was quick, they repaired the connection, and the rest of the system stayed online the whole time.',
  },
  {
    name: 'Farah M.',
    text: 'They recommended the right cameras and network gear for our floor. Installation was neat, and they still pick up when we need a small change.',
  },
]

export const leadership = [site.ceo, site.director]

export function personLine(person) {
  return `${person.title} | ${person.name}`
}

export const leadershipLine = leadership.map(personLine).join('  ·  ')

export function buildWhatsAppUrl(message) {
  const params = new URLSearchParams({ text: message })
  return `${whatsappHref}?${params.toString()}`
}
