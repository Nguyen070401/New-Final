//rafce

import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import JewelryPageProducts from '../components/JewelryPageProducts'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import ReactPagination from '../components/Pagination'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Slider/>
      <Categories/>
      <JewelryPageProducts/>
      <ReactPagination/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
