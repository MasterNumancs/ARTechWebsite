const testimonials = [
  { img: '/img/testimonial-1.jpg' },
  { img: '/img/testimonial-2.jpg' },
  { img: '/img/testimonial-3.jpg' },
]

export default function Testimonials() {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-primary mb-3 mx-auto" style={{ width: 60, height: 2 }}></div>
          <h1 className="display-5 mb-5">Testimonial</h1>
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
          {testimonials.map((item) => (
            <div
              key={item.img}
              className="testimonial-item text-center"
              data-dot={`<img class='img-fluid' src='${item.img}' alt=''>`}
            >
              <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
              <h4>Client Name</h4>
              <span className="text-primary">Profession</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
