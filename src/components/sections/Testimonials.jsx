import { clients, site } from '../../data/site'

export default function Testimonials() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <div className="bg-primary mb-3 mx-auto" style={{ width: 60, height: 2 }}></div>
          <h1 className="display-5 mb-3">Our Clients</h1>
          <p className="mb-5">
            Brands that already trust {site.name} for CCTV, networking, and on-site support.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {clients.map((client) => (
            <div key={client.name} className="col-6 col-md-3">
              <div className="client-logo h-100 d-flex align-items-center justify-content-center p-3">
                <img src={client.logo} alt={client.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
