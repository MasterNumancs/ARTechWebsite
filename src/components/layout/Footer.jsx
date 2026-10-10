import { Link, useLocation } from 'react-router-dom'
import { products } from '../../data/products'
import { mailHref, office, site, telHref, whatsappHref } from '../../data/site'

export default function Footer({ className = 'mt-5' }) {
  const { pathname, hash } = useLocation()

  function focusProduct(event, id) {
    if (pathname === '/products' && hash === `#${id}`) {
      event.preventDefault()
      window.dispatchEvent(new CustomEvent('focus-product'))
    }
  }

  function focusSection(event, to) {
    const [path, id] = to.split('#')
    if (pathname === path && hash === `#${id}`) {
      event.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const quickLinks = [
    { label: 'About Us', to: '/about#about' },
    { label: 'Our Services', to: '/service#service' },
    { label: 'Free Quote', to: '/quote#quote' },
    { label: 'Contact Us', to: '/contact#contact' },
  ]

  return (
    <div className={`container-fluid bg-dark text-secondary footer ${className} py-5 wow fadeIn`} data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">AR Tech Solution</h5>
            <p className="mb-2"><i className="fa fa-user-tie me-3"></i>{site.ceo.title} | {site.ceo.name}</p>
            <p className="mb-2"><i className="fa fa-user-tie me-3"></i>{site.director.title} | {site.director.name}</p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>
              <a className="text-secondary" href={telHref}>{site.phoneDisplay}</a>
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>
              <a className="text-secondary" href={mailHref}>{site.email}</a>
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>
              <a className="text-secondary" href={office.mapsUrl} target="_blank" rel="noreferrer">{office.address}</a>
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href={telHref} aria-label="Call">
                <i className="fa fa-phone-alt"></i>
              </a>
              <a className="btn btn-square btn-outline-secondary rounded-circle" href={mailHref} aria-label="Email">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Products</h5>
            {products.map((product) => (
              <Link key={product.id} className="btn btn-link" to={`/products#${product.id}`} onClick={(event) => focusProduct(event, product.id)}>{product.title}</Link>
            ))}
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            {quickLinks.map((link) => (
              <Link key={link.to} className="btn btn-link" to={link.to} onClick={(event) => focusSection(event, link.to)}>{link.label}</Link>
            ))}
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Need a quote?</h5>
            <p>Tell us the product and we will confirm available brands and a price.</p>
            <Link className="btn btn-primary py-2 px-4" to="/quote">Get a Free Quote</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
