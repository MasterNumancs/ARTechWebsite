import { useRef, useState } from 'react'
import { reviews } from '../../data/site'

const previewCount = 2
const avatarColors = ['#0B4EA2', '#146C94', '#1B4F72', '#0E6B5C', '#2457A6', '#0A5275']

export default function Reviews() {
  const sectionRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? reviews : reviews.slice(0, previewCount)

  function showLess() {
    setExpanded(false)
    const section = sectionRef.current
    if (!section) return
    const top = section.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="reviews-section container-xxl py-5" aria-label="Client reviews">
      <div className="container">
        <div className="text-center">
          <p className="reviews-kicker mb-2">Reviews</p>
          <h2 className="reviews-title">What Our Clients Say</h2>
        </div>
        <div className="row g-3 justify-content-center">
          {visible.map((review) => (
            <div key={review.name} className="col-12 col-lg-6">
              <article className="review-card">
                <div className="review-head">
                  <span className="review-avatar" style={{ background: avatarColors[reviews.indexOf(review) % avatarColors.length] }} aria-hidden="true">
                    {review.name.trim().charAt(0)}
                  </span>
                  <span className="review-name">{review.name}</span>
                </div>
                <div className="review-stars" aria-label="5 star rating">
                  <i className="fas fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star" aria-hidden="true"></i>
                </div>
                <p>{review.text}</p>
              </article>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-primary rounded-pill py-3 px-5 reviews-toggle"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              if (expanded) showLess()
              else setExpanded(true)
            }}
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        </div>
      </div>
    </section>
  )
}
