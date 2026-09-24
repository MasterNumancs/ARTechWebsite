import { mailHref, site, telHref } from '../../data/site'

export default function Topbar() {
  return (
    <div className="container-fluid bg-dark px-5">
      <div className="row gx-4 d-none d-lg-flex">
        <div className="col-lg-6 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <div className="btn-sm-square rounded-circle bg-primary me-2">
              <small className="fa fa-user-tie text-white"></small>
            </div>
            <small>{site.ceo.title} | {site.ceo.name}</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <div className="btn-sm-square rounded-circle bg-primary me-2">
              <small className="fa fa-envelope-open text-white"></small>
            </div>
            <small>
              <a className="text-white" href={mailHref}>{site.email}</a>
            </small>
          </div>
        </div>
        <div className="col-lg-6 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3">
            <div className="btn-sm-square rounded-circle bg-primary me-2">
              <small className="fa fa-phone-alt text-white"></small>
            </div>
            <small>
              <a className="text-white" href={telHref}>{site.phoneDisplay}</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
