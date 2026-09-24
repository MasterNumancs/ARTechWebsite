export const site = {
  name: 'AR Tech Solution',
  shortName: 'AR Tech',
  tagline: 'CCTV, networking, IP exchange, and computers — sold, installed, and supported.',
  ceo: {
    name: 'Awais Rajput',
    title: 'CEO',
  },
  phone: '+923184018083',
  phoneDisplay: '+92 318 4018083',
  email: 'artechsolution313@gmail.com',
}

export const telHref = `tel:${site.phone}`
export const mailHref = `mailto:${site.email}`
export const whatsappHref = `https://wa.me/${site.phone.replace('+', '')}`

export const aboutLead =
  'We provide professional solutions in CCTV cameras, networking, IP exchange, laptops and computers with complete sale, purchase, installation and maintenance services.'

export const aboutPromise =
  'We are committed to delivering high-quality products, reliable installations, and efficient support to ensure the security and performance of your business.'

export const services = [
  {
    title: 'Sale & Purchase',
    icon: 'fa-shopping-bag',
    text: 'Source and supply the right CCTV, network, IP exchange, and computer hardware for your site.',
  },
  {
    title: 'Expert Installation',
    icon: 'fa-tools',
    text: 'Clean, professional installation so cameras, networks, and systems work the first time.',
  },
  {
    title: 'Reliable Maintenance',
    icon: 'fa-cogs',
    text: 'Ongoing checks and repairs to keep security and IT equipment performing day after day.',
  },
  {
    title: 'Dedicated Support',
    icon: 'fa-headset',
    text: 'Direct help from our team when you need advice, a quote, or on-site support.',
  },
]

export const reasons = [
  { icon: 'fa-shield-alt', label: 'Quality', value: 'Products' },
  { icon: 'fa-tools', label: 'Expert', value: 'Installation' },
  { icon: 'fa-cogs', label: 'Reliable', value: 'Maintenance' },
  { icon: 'fa-headset', label: 'Dedicated', value: 'Support' },
]

export const facts = [
  {
    icon: 'fa-video',
    num: '01',
    title: 'CCTV & Security',
    text: 'Cameras, NVRs, and complete surveillance setups for homes and businesses.',
  },
  {
    icon: 'fa-sitemap',
    num: '02',
    title: 'Networking & IP',
    text: 'Structured networking and IP exchange solutions that keep teams connected.',
  },
  {
    icon: 'fa-laptop',
    num: '03',
    title: 'Computers & Support',
    text: 'Laptops, desktops, and after-sales care so your workstations stay productive.',
  },
]

export function buildWhatsAppUrl(message) {
  const params = new URLSearchParams({ text: message })
  return `${whatsappHref}?${params.toString()}`
}
