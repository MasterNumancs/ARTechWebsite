import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getProductById, products } from '../../data/products'

function productIdFromHash(hash) {
  const id = hash.replace('#', '')
  return getProductById(id) ? id : null
}

export default function Products() {
  const { hash } = useLocation()
  const [openId, setOpenId] = useState(() => productIdFromHash(window.location.hash))
  const listRef = useRef(null)

  useEffect(() => {
    const id = productIdFromHash(hash)
    if (!id) return undefined

    setOpenId(id)
    const frame = requestAnimationFrame(() => {
      document.getElementById(`product-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })

    return () => cancelAnimationFrame(frame)
  }, [hash])

  useEffect(() => {
    function handleFocusProduct() {
      const id = productIdFromHash(window.location.hash)
      if (!id) return
      setOpenId(id)
      document.getElementById(`product-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    window.addEventListener('focus-product', handleFocusProduct)
    return () => window.removeEventListener('focus-product', handleFocusProduct)
  }, [])

  useEffect(() => {
    function handlePointerDown(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setOpenId(null)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpenId(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function toggleProduct(id) {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <div className="bg-primary mb-3 mx-auto" style={{ width: 60, height: 2 }}></div>
          <h1 className="display-5 mb-3">Our Products</h1>
          <p className="mb-5 mx-auto" style={{ maxWidth: 640 }}>
            Hover or tap a product to see the brands we supply for it.
          </p>
        </div>
        <div ref={listRef} className="row g-4">
          {products.map((product, index) => {
            const isOpen = openId === product.id
            return (
              <div key={product.id} id={`product-${product.id}`} className="col-md-6 col-lg-3">
                <article
                  className={`product-card h-100${isOpen ? ' is-open' : ''}`}
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`product-brands-${product.id}`}
                  onClick={() => toggleProduct(product.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      toggleProduct(product.id)
                    }
                  }}
                >
                  <div className={`product-card-media${product.cover ? ' is-cover' : ''}`}>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-card-body">
                    <h4 className="mb-3">{product.title}</h4>
                    <p className="mb-4">{product.summary}</p>
                    <span className="product-hint">
                      <i className="fa fa-tags me-2" aria-hidden="true"></i>
                      View brands
                    </span>
                  </div>
                  <div
                    id={`product-brands-${product.id}`}
                    className="product-brands"
                    data-wow-delay={`${0.1 + index * 0.2}s`}
                  >
                    <p className="product-brands-kicker mb-2">Available brands</p>
                    <h5 className="text-white mb-3">{product.title}</h5>
                    <ul className="product-brand-list">
                      {product.brands.map((brand) => (
                        <li key={brand}>{brand}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
