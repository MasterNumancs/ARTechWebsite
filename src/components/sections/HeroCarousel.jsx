import { Link } from 'react-router-dom'
import { site, whatsappHref } from '../../data/site'

export default function HeroCarousel() {
  return (
    <section className="container-fluid p-0 pb-5">
      <div className="hero-brand py-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-white">
              <p className="hero-kicker mb-3">{site.name}</p>
              <h1 className="display-4 text-white animated slideInDown mb-4">
                Professional CCTV, networking, and computer solutions
              </h1>
              <p className="fs-5 text-white mb-4 pb-2" style={{ maxWidth: 560 }}>
                {site.tagline}
              </p>
              <Link to="/quote" className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">
                Free Quote
              </Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">
                WhatsApp Us
              </a>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <img src="/img/hero-products.jpg" alt={`${site.name} CCTV, networking, IP phones, and computers`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
