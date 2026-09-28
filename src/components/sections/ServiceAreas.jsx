import { Link } from 'react-router-dom'
import { office, site } from '../../data/site'

export default function ServiceAreas() {
  return (
    <div className="container-fluid service-area px-0 py-5">
      <div className="service-area-card">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6">
              <div className="service-area-copy h-100 d-flex flex-column justify-content-center">
                <h2 className="mb-2">Services Across Lahore</h2>
                <h3 className="mb-3">All of Lahore</h3>
                <p>
                  {site.name} provides CCTV, networking, IP exchange, and computer services across all of Lahore. From sale and installation to maintenance and on-site support, our team covers the whole city.
                </p>
                <Link className="btn btn-primary rounded-pill py-2 px-4 align-self-start" to="/quote">
                  <i className="fa fa-arrow-right me-2" aria-hidden="true"></i>
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-area-map">
                <iframe
                  title={`${site.name} service area in Lahore`}
                  src={office.areaEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
