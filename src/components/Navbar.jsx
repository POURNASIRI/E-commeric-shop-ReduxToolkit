import React, { useState } from 'react'
import {BsFillBagHeartFill} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'
import Cart from './Cart';
import { useSelector } from 'react-redux';




function Navbar() {

    const [open, setOpen] = useState(false);
    const {totalAmount} = useSelector(state=>state.cart)
 
    const handleOpen = () => {
        setOpen(true);
    }
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
        <div className='flex ml-1 cursor-pointer ' onClick={handleOpen}>
            {
                totalAmount > 0 ? <span className='rounded-full
                 bg-gray-300 px-2 font-inter 
                 text-sm mr-1'>{totalAmount}</span>
                 :
                 <BiShoppingBag className='text-xl text-red-400 '/>
            }
            <span className='text-xs ml-1 font-bold'> Shopping Cart </span>
            <div>{open && <Cart openModal={open} setOpen={setOpen}/>}</div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar