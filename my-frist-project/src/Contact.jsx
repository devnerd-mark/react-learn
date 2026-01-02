import React from 'react'

const Contact = () => {
  return (
     <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Email: hello@mybrand.com</p>
      <p>Phone: +123 456 7890</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact