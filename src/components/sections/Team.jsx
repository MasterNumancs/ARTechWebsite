import { site, whatsappHref } from '../../data/site'

export default function Team() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-primary mb-3 mx-auto" style={{ width: 60, height: 2 }}></div>
          <h1 className="display-5 mb-5">Leadership</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <div className="team-monogram" aria-hidden="true">AR</div>
                <div className="team-social">
                  <a className="btn btn-square btn-dark rounded-circle m-1" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">{site.ceo.name}</h5>
                <span className="text-primary">{site.ceo.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
