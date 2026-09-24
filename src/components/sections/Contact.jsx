import { useState } from 'react'
import { buildWhatsAppUrl, mailHref, office, site, telHref, whatsappHref } from '../../data/site'

const emptyForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const [shareNote, setShareNote] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setError('Please add your name and a message.')
      return
    }

    setError('')
    const text = [
      `Message for ${site.name}`,
      `Name: ${form.name.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
      form.subject.trim() ? `Subject: ${form.subject.trim()}` : null,
      `Message: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
  }

  async function shareLocation() {
    const shareData = {
      title: site.name,
      text: `${site.name}, ${office.address}`,
      url: office.mapsUrl,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        setShareNote('')
        return
      } catch (err) {
        if (err && err.name === 'AbortError') return
      }
    }

    try {
      await navigator.clipboard.writeText(office.mapsUrl)
      setShareNote('Location link copied.')
    } catch {
      setShareNote(office.mapsUrl)
    }
  }

  return (
    <div className="container-fluid bg-light overflow-hidden px-lg-0">
      <div className="container contact px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 ps-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4">Contact Us</h1>
              </div>
              <p className="mb-4">
                Call, email, or send a WhatsApp message. The form below opens a ready-to-send chat with {site.name}.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={updateField} placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={updateField} placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" name="subject" value={form.subject} onChange={updateField} placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" value={form.message} onChange={updateField} style={{ height: 100 }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  {error ? <div className="col-12 text-danger">{error}</div> : null}
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send on WhatsApp</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
            <div className="position-relative h-100 contact-panel d-flex align-items-center p-5">
              <div>
                <p className="hero-kicker mb-3">Get in touch</p>
                <h3 className="text-white mb-4">{site.name}</h3>
                <p className="mb-3">
                  <i className="fa fa-user-tie me-3"></i>
                  {site.ceo.title} | {site.ceo.name}
                </p>
                <p className="mb-3">
                  <i className="fa fa-user-tie me-3"></i>
                  {site.director.title} | {site.director.name}
                </p>
                <p className="mb-3">
                  <i className="fa fa-phone-alt me-3"></i>
                  <a href={telHref}>{site.phoneDisplay}</a>
                </p>
                <p className="mb-3">
                  <i className="fa fa-envelope me-3"></i>
                  <a href={mailHref}>{site.email}</a>
                </p>
                <p className="mb-3">
                  <i className="fab fa-whatsapp me-3"></i>
                  <a href={whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                </p>
                <p className="mb-4">
                  <i className="fa fa-map-marker-alt me-3"></i>
                  {office.address}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <a className="btn btn-light rounded-pill py-2 px-4" href={office.mapsUrl} target="_blank" rel="noreferrer">
                    <i className="fa fa-location-arrow me-2"></i>
                    Open in Maps
                  </a>
                  <button className="btn btn-outline-light rounded-pill py-2 px-4" type="button" onClick={shareLocation}>
                    <i className="fa fa-share-alt me-2"></i>
                    Share Location
                  </button>
                </div>
                {shareNote ? <p className="mt-3 mb-0">{shareNote}</p> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="office-map mt-0">
          <iframe
            title={`${site.name} office location`}
            src={office.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
