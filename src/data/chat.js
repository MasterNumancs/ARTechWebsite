import { products } from './products'
import { site } from './site'

function brandLine(product) {
  return `${product.title}: ${product.brands.join(', ')}`
}

export const chatQuickQuestions = [
  { id: 'products', label: 'What do you sell?' },
  { id: 'cctv', label: 'CCTV brands?' },
  { id: 'networking', label: 'Networking brands?' },
  { id: 'install', label: 'Do you install?' },
  { id: 'quote', label: 'How do I get a quote?' },
  { id: 'contact', label: 'Contact details' },
]

const topicReplies = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'salam', 'assalam', 'aoa'],
    answer: `Hello! Welcome to ${site.name}. I can help with products, brands, installation, quotes, and contact details.`,
  },
  {
    id: 'install',
    keywords: ['install', 'installation', 'maintain', 'maintenance', 'repair', 'service', 'support'],
    answer: 'Yes. We handle expert installation, reliable maintenance, and dedicated support after the sale — not only supply.',
  },
  {
    id: 'quote',
    keywords: ['quote', 'price', 'pricing', 'cost', 'rate', 'charges', 'budget'],
    answer: 'Share the product and preferred brand, and we will confirm availability and pricing. Use Free Quote on the site, or continue this chat on WhatsApp.',
  },
  {
    id: 'contact',
    keywords: ['contact', 'phone', 'mobile', 'whatsapp', 'email', 'number', 'call'],
    answer: `You can reach ${site.name} here:\nPhone: ${site.phoneDisplay}\nEmail: ${site.email}\nWhatsApp: ${site.phoneDisplay}`,
  },
  {
    id: 'ceo',
    keywords: ['ceo', 'owner', 'awais', 'rajput'],
    answer: `${site.ceo.title} of ${site.name} is ${site.ceo.name}.`,
  },
  {
    id: 'cctv',
    keywords: ['cctv', 'camera', 'cameras', 'nvr', 'dvr', 'surveillance', 'dahua', 'hikvision', 'uniview'],
    answer: `Yes — we supply and install CCTV systems. Available brands for CCTV cameras: ${products.find((item) => item.id === 'cctv').brands.join(', ')}.`,
  },
  {
    id: 'networking',
    keywords: ['network', 'networking', 'switch', 'router', 'wifi', 'cable', 'mikrotik', 'tp-link', 'ubiquiti'],
    answer: `We provide networking hardware and cabling. Brands: ${products.find((item) => item.id === 'networking').brands.join(', ')}.`,
  },
  {
    id: 'ip-exchange',
    keywords: ['ip exchange', 'ip phone', 'pbx', 'voip', 'intercom', 'yealink', 'grandstream'],
    answer: `We supply IP exchange and IP phone systems. Brands: ${products.find((item) => item.id === 'ip-exchange').brands.join(', ')}.`,
  },
  {
    id: 'computers',
    keywords: ['laptop', 'laptops', 'computer', 'computers', 'desktop', 'pc', 'notebook'],
    answer: `We sell laptops and desktop computers. Brands: ${products.find((item) => item.id === 'computers').brands.join(', ')}.`,
  },
  {
    id: 'products',
    keywords: ['product', 'products', 'sell', 'offer', 'available', 'catalogue', 'catalog'],
    answer: `We provide CCTV cameras, networking, IP exchange, laptops and computers — with sale, purchase, installation and maintenance.\n\n${products.map(brandLine).join('\n')}`,
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank', 'ok', 'okay', 'great'],
    answer: 'You are welcome. Ask another question, or tap WhatsApp if you want to talk to the team directly.',
  },
]

function hasKeyword(text, keywords) {
  return keywords.some((keyword) => new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text))
}

export function answerChat(rawQuery) {
  const query = rawQuery.trim()
  if (!query) {
    return `Please type a question, or pick one of the topics below. I can also connect you on WhatsApp at ${site.phoneDisplay}.`
  }

  const match = topicReplies.find((topic) => hasKeyword(query, topic.keywords))
  if (match) return match.answer

  return `I can help with products, brands, installation, quotes, and contact details. If you need a person, continue on WhatsApp at ${site.phoneDisplay}.`
}

export function getQuickAnswer(id) {
  const topic = topicReplies.find((item) => item.id === id)
  return topic ? topic.answer : answerChat(id)
}

export const chatWelcome = `Hi, I am the ${site.name} assistant. Ask a general question or pick a topic below.`
