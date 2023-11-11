import React, { useState } from 'react'
import {BsFillBagHeartFill} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/authSlice';




function Navbar() {

    const [open, setOpen] = useState(false);
    const {totalAmount} = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.user)
    const{name,image,authUser} = user
    
 
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
            <Link to={"/"}>
                 <img className='w-[100px] h-[100] rounded-full  object-cover' src="/images/7515317.jpg" alt="" />
            </Link>
        </div>
        <div className='flex flex-row items-center'>
            <button
            onClick={()=>dispatch(logout)}
             className='font-inter text-base font-medium 
            tracking-normal leading-none text-center mr-4'
            >Logout</button>
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
        {
            authUser &&
            <div className='flex items-center justify-center mx-4'>
                <img className='h-[40px] w-[40px] rounded-full' src={image} alt="" />
                <h4 className='ml-1 capitalize text-base font-bold'>Hi {name}</h4>
            </div>
        }
            
        </div>
    </div>
    </div>
  )
}

export default Navbar