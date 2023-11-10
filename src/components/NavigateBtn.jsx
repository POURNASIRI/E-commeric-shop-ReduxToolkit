import React from 'react'
import { Button } from "@material-tailwind/react";
import {useDispatch} from 'react-redux'
import clothes from '../assets/images/clothes.jpg'
import { filtredProduct } from '../features/productSlice';
import { Link } from 'react-router-dom';
const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes", 
    "T-Shirts", 
    "Jeans",
    "Jackets",
    "Bags"
]

function NavigateBtn() {

        const dispatch = useDispatch()

  return (
    <div >
    <div className='flex items-center justify-center py-8'>
            {
                buttons.map(btn=>(
                    <div key={btn} className='mx-4'>
                        <Link to={`/filterProduct/${btn}`}>
                       <Button 
                       size='lg' 
                       color='gray' 
                       variant='outlined' 
                       ripple={true}
                       className='hover:bg-green-300 
                       duration-200 hover:text-white'
                       onClick={()=>dispatch(filtredProduct(btn))}
                       >
                        {btn}
                       </Button>
                        </Link>
                    </div>
                ))
            }
    </div>
            <div className='bg-black w-[70%] p-2 mx-auto rounded-md'>
                <h3 className='text-2xl text-center text-orange-900 font-inter font-bold -tracking-wide'>
                    SEALL UP TO <span className='animate-fade-right animate-infinite animate-duration-[2000ms] text-5xl text-red-900'>%50</span>
                </h3>
            </div>
                <div className='flex items-center justify-center mt-2'>
                    <img className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600' src={clothes} alt="" />
                </div>
    </div>
  )
}

export default NavigateBtn