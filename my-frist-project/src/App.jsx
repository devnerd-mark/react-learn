import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Testimonial from './Testimonial'
import Contact from './Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Testimonial/>
      <Contact/>

    </div>
  )
}

export default App