import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import NavigateBtn from './NavigateBtn'
import ProductSection from './ProductSection'

function Main() {
  return (
    <div>
        <Slider/>
        <NavigateBtn/>
        <ProductSection/>
    </div>
  )
}

export default Main