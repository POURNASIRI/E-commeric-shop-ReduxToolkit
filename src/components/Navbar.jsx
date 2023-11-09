import React from 'react'
import {BsFillBagHeartFill} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'

function Navbar() {
  return (
    <div>
    <div className='bg-black p-2 w-full shadow-xl'>
        <h3 className='text-white font-inter text-2xl font-bold tracking-normal 
        leading-none text-center animate-bounce w-[100] p-1 '>
            Shopping is easy
        </h3>
    </div>
    <div className=' flex justify-around items-center shadow-md'>
        <div>
        <img className='w-[100px] h-[100] rounded-full  object-cover' src="/images/7515317.jpg" alt="" />
        </div>
        <div className='flex flex-row items-center'>
            <button className='font-inter text-base font-medium 
            tracking-normal leading-none text-center mr-4'>Logout</button>
        <div className='flex '>
            <BsFillBagHeartFill className='text-xl text-red-400 '/>
            <span className='text-xs ml-1 font-bold'> Favorite </span>
        </div>
        <div className='flex  ml-1'>
            <BiShoppingBag className='text-xl text-red-400 '/>
            <span className='text-xs ml-1 font-bold'> Shopping Cart </span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar