import { whatsappHref } from '../../data/site'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp fa-lg"></i>
    </a>
  )
}
