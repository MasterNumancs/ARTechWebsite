import { Link } from 'react-router-dom'
import { services } from '../../data/site'

export default function Services() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <div className="bg-primary mb-3 mx-auto" style={{ width: 60, height: 2 }}></div>
          <h1 className="display-5 mb-5">Our Services</h1>
        </div>
        <div className="row g-0 service-row">
          {services.map((service, index) => (
            <div key={service.title} className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div className="service-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                  <i className={`fa ${service.icon} fa-2x text-primary`} aria-hidden="true"></i>
                </div>
                <h4 className="mb-3">{service.title}</h4>
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
