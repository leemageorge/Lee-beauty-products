import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Seller from '../components/Seller'
import Categories from '../components/Categories'
import About from '../components/About'
import Footer from '../components/Footer'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Announcements />
        <Slider />
        <Seller />
        <Categories />
        <Products />
        <About />
        <Footer />
        
    </div>
  )
}

export default Home