/**
 * Product catalogue for AR Tech Solution.
 * Add, remove, or rename brands on any product — the hover/click panel reads this list.
 */
export const products = [
  {
    id: 'cctv',
    title: 'CCTV Cameras',
    summary: 'Dome, bullet, and NVR packages for shops, offices, and homes.',
    icon: 'fa-video',
    image: '/img/product-cctv.jpg',
    brands: ['Dahua', 'Hikvision', 'Uniview', 'CP Plus'],
  },
  {
    id: 'networking',
    title: 'Networking',
    summary: 'Switches, routers, access points, and structured cabling for reliable connectivity.',
    icon: 'fa-sitemap',
    image: '/img/product-network.jpg',
    brands: ['TP-Link', 'Cisco', 'MikroTik', 'D-Link', 'Ubiquiti'],
  },
  {
    id: 'ip-exchange',
    title: 'IP Exchange',
    summary: 'IP phones and exchange systems for clear, scalable business calling.',
    icon: 'fa-phone-alt',
    image: '/img/product-ipphone.jpg',
    brands: ['Grandstream', 'Yealink', 'Fanvil', 'Cisco'],
  },
  {
    id: 'computers',
    title: 'Laptops & Computers',
    summary: 'Business laptops, desktops, and complete PC setups ready for work.',
    icon: 'fa-laptop',
    image: '/img/product-laptop.jpg',
    brands: ['HP', 'Dell', 'Lenovo', 'ASUS', 'Acer'],
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === id) || null
}
