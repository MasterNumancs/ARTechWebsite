import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { site, whatsappHref } from '../../data/site'

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    function blockBackgroundScroll(event) {
      const drawer = document.getElementById('navbarCollapse')
      if (drawer && drawer.contains(event.target)) return
      event.preventDefault()
    }

    if (!menuOpen) return undefined

    const scrollY = window.scrollY
    const { documentElement, body } = document
    documentElement.classList.add('nav-drawer-open')
    body.classList.add('nav-drawer-open')
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('wheel', blockBackgroundScroll, { passive: false })
    document.addEventListener('touchmove', blockBackgroundScroll, { passive: false })

    return () => {
      documentElement.classList.remove('nav-drawer-open')
      body.classList.remove('nav-drawer-open')
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      window.scrollTo(0, scrollY)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('wheel', blockBackgroundScroll)
      document.removeEventListener('touchmove', blockBackgroundScroll)
    }
  }, [menuOpen])

  function goHomeTop(event) {
    event.preventDefault()
    setMenuOpen(false)
    if (pathname !== '/') {
      navigate('/')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
      <Link to="/" className="navbar-brand d-flex align-items-center py-2" onClick={goHomeTop}>
        <img className="navbar-logo" src="/img/logo-mark.png" alt={site.name} />
      </Link>
      <button
        type="button"
        className={`navbar-toggler${menuOpen ? ' is-open' : ''}`}
        aria-controls="navbarCollapse"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {menuOpen ? (
        <div
          className="navbar-drawer-backdrop d-lg-none"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      ) : null}
      <div className={`navbar-collapse${menuOpen ? ' is-open' : ''}`} id="navbarCollapse">
        <div className="navbar-nav ms-auto py-4 py-lg-0">
          <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            Products
          </NavLink>
          <NavLink to="/service" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/quote" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
            Free Quote
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}>
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
