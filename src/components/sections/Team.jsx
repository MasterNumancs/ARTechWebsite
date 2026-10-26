import { leadership, leadershipHeading, personWhatsAppHref } from '../../data/site'

export default function Team() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-primary mb-3 mx-auto" style={{ width: 60, height: 2 }}></div>
          <h2 className="display-5 mb-5">{leadershipHeading}</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {leadership.map((person, index) => (
            <div key={person.title} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <a
                className="team-item team-call-card"
                href={personWhatsAppHref(person)}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp ${person.name} at ${person.phoneDisplay}`}
              >
                <div className="overflow-hidden position-relative">
                  <img src={person.photo} alt={person.name} />
                  <div className="team-social">
                    <span className="btn btn-square btn-dark rounded-circle m-1" aria-hidden="true">
                      <i className="fab fa-whatsapp"></i>
                    </span>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{person.name}</h5>
                  <span className="text-primary">{person.title}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
