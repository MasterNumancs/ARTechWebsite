import { site } from '../../data/site'

export default function Copyright() {
  return (
    <div className="container-fluid py-4" style={{ background: '#000000' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; {new Date().getFullYear()} <span className="border-bottom">{site.name}</span>, All Rights Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            {site.ceo.title} | {site.ceo.name} · {site.director.title} | {site.director.name}
          </div>
        </div>
      </div>
    </div>
  )
}
