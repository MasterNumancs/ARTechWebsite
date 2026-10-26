import { Link } from 'react-router-dom'
import { aboutHome, aboutPage, site } from '../../data/site'

export default function About({ variant = 'home' }) {
  const copy = variant === 'about' ? aboutPage : aboutHome

  return (
    <div id="about" className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
            <div className="position-relative h-100 about-visual">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="/img/about-us.jpg"
                style={{ objectFit: 'cover' }}
                alt={`${site.name} team in a planning meeting`}
              />
            </div>
          </div>
          <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 pe-lg-0">
              <div className="bg-primary mb-3" style={{ width: 60, height: 2 }}></div>
              <h2 className="display-5 mb-4">{copy.heading}</h2>
              {copy.paragraphs.map((paragraph, index) => (
                <p key={paragraph.slice(0, 24)} className={index === copy.paragraphs.length - 1 ? 'mb-4 pb-2' : 'mb-3'}>
                  {paragraph}
                </p>
              ))}
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
                      <i className="fa fa-user-tie fa-lg text-primary" aria-hidden="true"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-1">{site.director.name}</h5>
                      <p className="fw-medium text-primary mb-0">{site.director.title}</p>
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
