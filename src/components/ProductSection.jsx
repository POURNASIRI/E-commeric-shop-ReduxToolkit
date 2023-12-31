
import { lazy } from 'react'
import { storeData } from '../assets/data/dummyData'
import { Suspense } from 'react'
import Loader from './Loader'
// import ProductSectionItem from './ProductSectionItem'
 const ProductSectionItem = lazy(()=>import("./ProductSectionItem"))

function ProductSection() {
  return (
    <>
    <div className='bg-black w-[70%] p-2 mx-auto rounded-md mt-5'>
        <h3 className='text-2xl text-center text-orange-900 font-inter font-bold -tracking-wide'>
            SUMMER T-Shirt
        <span className='animate-fade-right animate-infinite animate-duration-[2000ms] text-5xl text-red-900'> SALE</span>
        </h3>
    </div>
    <div className=' grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-6xl'>
   
       {storeData.slice(0,6).map((product)=>{
          return(
            <div key={product.id}>
              <Suspense fallback={<Loader/>}>
                <ProductSectionItem
                {...product}
                />
              </Suspense>
            </div>
          )
        })}
      
    </div>
    </>
 
   
  )
}

export default ProductSection