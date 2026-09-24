import { reasons, site } from '../../data/site'

export default function Features({ spaced = true }) {
  const wrapperClass = spaced
    ? 'container-fluid bg-light overflow-hidden my-5 px-lg-0'
    : 'container-fluid bg-light overflow-hidden px-lg-0'

  return (
    <div className={wrapperClass}>
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 ps-lg-0">
              <div className="bg-primary mb-3" style={{ width: 60, height: 2 }}></div>
              <h1 className="display-5 mb-5">Why Choose Us</h1>
              <p className="mb-4 pb-2">
                {site.name} focuses on quality hardware, expert installation, reliable maintenance, and dedicated support for your business.
              </p>
              <div className="row g-4">
                {reasons.map((item) => (
                  <div key={item.label} className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="btn-square bg-white rounded-circle" style={{ width: 64, height: 64 }}>
                        <i className={`fa ${item.icon} fa-lg text-primary`} aria-hidden="true"></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-primary mb-2">{item.label}</p>
                        <h5 className="mb-0">{item.value}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
            <div className="position-relative h-100 feature-visual">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="/img/product-cctv.jpg"
                style={{ objectFit: 'cover' }}
                alt="CCTV cameras and NVR from AR Tech Solution"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
