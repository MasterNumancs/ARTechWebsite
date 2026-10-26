/**
 * Product catalogue for AR Tech Solution.
 * Add, remove, or rename brands on any product — the hover/click panel reads this list.
 */
export const products = [
  {
    id: 'cctv',
    title: 'CCTV Cameras',
    summary: 'Dome, bullet and IP camera packages with NVR/DVR recording for shops, offices and homes in Lahore.',
    summaryPage:
      'Dome, bullet and IP cameras in HD and night vision, with NVR/DVR recorders and mobile viewing. Complete CCTV camera packages for homes, shops, offices and warehouses in Lahore.',
    icon: 'fa-video',
    image: '/img/product-cctv-service.jpg',
    cover: true,
    brands: [
      'Dahua',
      'Hikvision',
      'Uniview',
      'CP Plus',
      'Polo',
      'Imou',
      'Ezviz',
      'Analog Camera',
      'IP Camera',
      'Wireless Camera',
    ],
  },
  {
    id: 'networking',
    title: 'Networking Equipment',
    summary: 'Switches, routers, WiFi access points and Cat6 cabling for fast, reliable office networks in Lahore.',
    summaryPage:
      'Switches, routers, WiFi access points and Cat6 cabling for office LAN and WiFi networks in Lahore - built for stable speed and easy expansion.',
    icon: 'fa-sitemap',
    image: '/img/product-network-service.jpg',
    cover: true,
    brands: ['TP-Link', 'Cisco', 'MikroTik', 'D-Link', 'Ubiquiti'],
  },
  {
    id: 'ip-exchange',
    title: 'IP Exchange (IP PBX)',
    summary:
      'IP phones and IP PBX telephone exchange systems with extensions and intercom for clear business calling in Lahore.',
    summaryPage:
      'IP phones and IP PBX telephone exchange systems with extensions and intercom for offices and growing businesses in Lahore.',
    icon: 'fa-phone-alt',
    image: '/img/product-ip-exchange-service.jpg',
    cover: true,
    brands: ['Grandstream', 'Yealink', 'Fanvil', 'Cisco'],
  },
  {
    id: 'computers',
    title: 'Laptops & Computers',
    summary: 'Business laptops, desktop computers and complete PC setups for offices, shops and professionals in Lahore.',
    summaryPage:
      'Business laptops, desktop computers and complete PC setups - ready for work. Suitable for offices, shops, schools and professionals in Lahore.',
    icon: 'fa-laptop',
    image: '/img/product-computer-service.jpg',
    cover: true,
    brands: ['HP', 'Dell', 'Lenovo', 'ASUS', 'Acer'],
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === id) || null
}
