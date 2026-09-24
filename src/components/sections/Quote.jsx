import { useState } from 'react'
import { products } from '../../data/products'
import { buildWhatsAppUrl, site } from '../../data/site'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  note: '',
}

export default function Quote({ spaced = true }) {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const wrapperClass = spaced
    ? 'container-fluid bg-light overflow-hidden my-5 px-lg-0'
    : 'container-fluid bg-light overflow-hidden px-lg-0'

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setError('Please add your name, mobile number, and the product you need.')
      return
    }

    setError('')
    const message = [
      `Quote request for ${site.name}`,
      `Name: ${form.name.trim()}`,
      `Mobile: ${form.phone.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
      `Product: ${form.service}`,
      form.note.trim() ? `Note: ${form.note.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={wrapperClass}>
      <div className="container quote px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
            <div className="position-relative h-100 quote-visual">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="/img/product-desktop.jpg"
                style={{ objectFit: 'cover' }}
                alt="Business computers available from AR Tech Solution"
              />
            </div>
          </div>
          <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 pe-lg-0">
              <div className="bg-primary mb-3" style={{ width: 60, height: 2 }}></div>
              <h1 className="display-5 mb-5">Free Quote</h1>
              <p className="mb-4 pb-2">
                Tell us the product you need. We will confirm available brands and send pricing on WhatsApp.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={updateField}
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      className="form-control border-0"
                      placeholder="Your Mobile"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      name="service"
                      value={form.service}
                      onChange={updateField}
                      className="form-select border-0"
                      style={{ height: 55 }}
                    >
                      <option value="">Select A Product</option>
                      {products.map((product) => (
                        <option key={product.id} value={product.title}>
                          {product.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="note"
                      value={form.note}
                      onChange={updateField}
                      className="form-control border-0"
                      placeholder="Preferred brand or special note"
                    ></textarea>
                  </div>
                  {error ? <div className="col-12 text-danger">{error}</div> : null}
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Get A Free Quote</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
