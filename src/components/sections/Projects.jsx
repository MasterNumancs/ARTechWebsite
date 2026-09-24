const projects = [
  { img: '/img/portfolio-1.jpg', category: 'Business Security', filter: 'first', delay: '0.1s' },
  { img: '/img/portfolio-2.jpg', category: 'Fire Detection', filter: 'second', delay: '0.3s' },
  { img: '/img/portfolio-3.jpg', category: 'Access Control', filter: 'first', delay: '0.5s' },
  { img: '/img/portfolio-4.jpg', category: 'Alarm Systems', filter: 'second', delay: '0.1s' },
  { img: '/img/portfolio-5.jpg', category: 'CCTV & Video', filter: 'first', delay: '0.3s' },
  { img: '/img/portfolio-6.jpg', category: 'Smart Home', filter: 'second', delay: '0.5s' },
]

export default function Projects() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-primary mb-3 mx-auto" style={{ width: 60, height: 2 }}></div>
          <h1 className="display-5 mb-5">Our Projects</h1>
        </div>
        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12 text-center">
            <ul className="list-inline mb-5" id="portfolio-flters">
              <li className="mx-2 active" data-filter="*">All</li>
              <li className="mx-2" data-filter=".first">Complete Projects</li>
              <li className="mx-2" data-filter=".second">Ongoing Projects</li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container">
          {projects.map((project) => (
            <div
              key={project.img}
              className={`col-lg-4 col-md-6 portfolio-item ${project.filter} wow fadeInUp`}
              data-wow-delay={project.delay}
            >
              <div className="portfolio-inner">
                <img className="img-fluid w-100" src={project.img} alt="" />
                <div className="text-center p-4">
                  <p className="text-primary mb-2">{project.category}</p>
                  <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                </div>
                <div className="portfolio-text text-center bg-white p-4">
                  <p className="text-primary mb-2">{project.category}</p>
                  <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-square btn-primary rounded-circle mx-1" href={project.img} data-lightbox="portfolio">
                      <i className="fa fa-eye"></i>
                    </a>
                    <a className="btn btn-square btn-primary rounded-circle mx-1" href="">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
