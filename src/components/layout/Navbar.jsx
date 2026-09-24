import { Link, NavLink } from 'react-router-dom'
import { site, whatsappHref } from '../../data/site'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
      <Link to="/" className="navbar-brand d-flex align-items-center py-2">
        <img className="navbar-logo" src="/img/logo-mark.jpg" alt={site.name} />
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-4 py-lg-0">
          <NavLink to="/" end className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            Products
          </NavLink>
          <NavLink to="/service" className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/quote" className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            Free Quote
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            Contact
          </NavLink>
        </div>
        <a className="btn btn-primary rounded-pill py-2 px-4 d-none d-lg-inline-flex" href={whatsappHref} target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp me-2"></i>
          WhatsApp
        </a>
      </div>
    </nav>
  )
}
