import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCart from './ProductCart'


function FilteredProducts() {

    const {filtredProducts} = useSelector(state=>state.products)
    const {type} = useParams()
    

  return (
    <div>
     <div className='pt-16'>
      <div className='pl-14'>
        <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal'>{type}</h1>
      </div>
      <div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
        {/* this filter for times when we don't use storage and our filterProducts state in productSlice is all data base */}
          {
            filtredProducts.filter(product=>(product.type === type))
            .map(products=>(
              <ProductCart key={products.id} products={products}/>
            ))
          }
      </div>
     </div>
    </div>
  )
}

export default FilteredProducts