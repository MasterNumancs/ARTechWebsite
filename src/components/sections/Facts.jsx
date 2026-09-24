import { facts } from '../../data/site'

export default function Facts() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {facts.map((fact) => (
            <div key={fact.num} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100 bg-dark p-4 p-xl-5">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="btn-square rounded-circle bg-primary" style={{ width: 64, height: 64 }}>
                    <i className={`fa ${fact.icon} text-white fa-lg`} aria-hidden="true"></i>
                  </div>
                  <h1 className="display-1 mb-0 text-white-50">{fact.num}</h1>
                </div>
                <h5 className="text-white">{fact.title}</h5>
                <hr className="w-25" />
                <span>{fact.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
