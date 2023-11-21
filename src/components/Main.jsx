import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import NavigateBtn from './NavigateBtn'
import ProductSection from './ProductSection'
import Footer from './Footer'
import { Loader } from './Loader'

function Main() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <NavigateBtn/>
        <ProductSection/>
        <Footer/>
    </div>
  )
}

export default Main