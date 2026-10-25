import { Link } from 'react-router-dom'
import { servicesHome, servicesHomeCopy, servicesPage, servicesPageCopy } from '../../data/site'

export default function Services({ variant = 'home' }) {
  const items = variant === 'page' ? servicesPage : servicesHome
  const copy = variant === 'page' ? servicesPageCopy : servicesHomeCopy

  return (
    <div id="service" className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <div className="bg-primary mb-3 mx-auto" style={{ width: 60, height: 2 }}></div>
          <h2 className="display-5 mb-3">{copy.heading}</h2>
          {copy.intro ? <p className="mb-5 mx-auto" style={{ maxWidth: 760 }}>{copy.intro}</p> : <div className="mb-5"></div>}
        </div>
        <div className="row g-0 service-row">
          {items.map((service, index) => (
            <div key={service.title} className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div className="service-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                  <i className={`fa ${service.icon} fa-2x text-primary`} aria-hidden="true"></i>
                </div>
                <h3 className="h4 mb-3">{service.title}</h3>
                <p className="mb-4">{service.text}</p>
                <Link className="btn" to="/quote">
                  <i className="fa fa-arrow-right text-white me-3"></i>Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
