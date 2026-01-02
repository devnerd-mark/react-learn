import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='logo'>MyBrand</h1>
        <ul className='nav-links'>
            <a href="#" onClick={() => handleScroll("home")}>Home</a>
            <a href="#">About</a>
            <a href="#">Testimonial</a>
            <a href="#">Contact</a>
        </ul>
    </nav>
  )
}

export default Navbar