import { Link } from 'react-router-dom'
import { aboutLead, aboutPromise, site } from '../../data/site'

export default function About() {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
            <div className="position-relative h-100 about-visual">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="/img/hero-products.jpg"
                style={{ objectFit: 'cover' }}
                alt={`${site.name} product range`}
              />
            </div>
          </div>
          <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 pe-lg-0">
              <div className="bg-primary mb-3" style={{ width: 60, height: 2 }}></div>
              <h1 className="display-5 mb-4">About Us</h1>
              <p className="mb-3">{aboutLead}</p>
              <p className="mb-4 pb-2">{aboutPromise}</p>
              <div className="row g-4 mb-4 pb-3">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center">
                    <div className="btn-square bg-white rounded-circle" style={{ width: 64, height: 64 }}>
                      <i className="fa fa-user-tie fa-lg text-primary" aria-hidden="true"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-1">{site.ceo.name}</h5>
                      <p className="fw-medium text-primary mb-0">{site.ceo.title}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center">
                    <div className="btn-square bg-white rounded-circle" style={{ width: 64, height: 64 }}>
                      <i className="fa fa-check fa-lg text-primary" aria-hidden="true"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-1">Sale to Support</h5>
                      <p className="fw-medium text-primary mb-0">Full lifecycle</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/products" className="btn btn-primary rounded-pill py-3 px-5">View Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
