import React from 'react'

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonial">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>⭐⭐⭐⭐⭐</p>
          <p>"Amazing website, easy to understand and use!"</p>
          <span>- John Doe</span>
        </div>
        <div className="testimonial-card">
          <p>⭐⭐⭐⭐⭐</p>
          <p>"I learned React faster than I thought possible."</p>
          <span>- Jane Smith</span>
        </div>
      </div>
    </section>
  )
}

export default Testimonial