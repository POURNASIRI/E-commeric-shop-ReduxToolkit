import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button } from "@material-tailwind/react";
import { addtoCart } from '../features/cartSlice';


function SingleProduct() {
  const {singleProducts}= useSelector(state=>state.products)
  const {id} = useParams()
  const productSize = singleProducts[0].size ? singleProducts[0].size : ""  
  const productColor = singleProducts[0].color 
  const[size,setSize] = useState(productSize)
  const[color,setColor] = useState(productColor)
  const dispatch = useDispatch()

  
  return (
    <div>
        {
          singleProducts
          .filter(product=> product.id === id)
          .map((item,index)=>(
            <div key={index} className='flex justify-center items-start py-10 gap-10 container mx-auto'>
                <div className=' bg-blue-gray-100'>
                  <img className='h-[650px] rounded-lg' src={item.img} alt={item.name} />
                </div>
                <div className='flex-1'>
                    <div className='mx-w-lg'>
                      <h5 className='text-2xl font-inter font-bold tracking-normal leading-normal'>{item.name}</h5>
                      <p className=' text-orange-900 text-xl 
                      font-bold font-inter
                       bg-black w-[100px] 
                       text-center rounded-full
                       my-5
                       '>15% OFF</p>
                       <p className=' text-gray-600 text-xl 
                      font-bold font-inter py-6'>{item.text}</p>
                    </div>
                    {
                      item.size? 
                      <div className='pb-4'>
                      <div className='w-[300px]'>
                        <label htmlFor="size" className='block text-xl my-4'>Select Size</label>
                        <select
                        className='w-[300px] outline-none border border-gray-500 rounded-lg p-2 '
                        name="size" 
                        onChange={(e)=>setSize(e.target.value)}
                        value={size}
                        id="size">
                          {
                            item.size.map(name=>(
                              <option  className="flex items-center gap-2 border-gray-400" 
                              key={name}
                              value={name}
                               >{name}</option>
                            ))
                          }
                         
                        </select>
                      </div>
                    </div>
                    :
                    <div className='pb-4'>
                    <div className='w-[300px]'>
                      <label htmlFor="size" className='block text-xl my-4'>Select Size</label>
                      <select
                      className='w-[300px] outline-none border border-gray-500 rounded-lg p-2 '
                      name="size"
                      disabled={true} 
                      onChange={(e)=>setSize(e.target.value)}
                      value={size}
                      id="size">
                        {
                          item?.size?.map(name=>(
                            <option  className="flex items-center gap-2 border-gray-400" 
                            key={name}
                            value={name}
                             >{name}</option>
                          ))
                        }
                       
                      </select>
                    </div>
                  </div>
                    }
                   <div>
                   <div className='pb-4'>
                      <div className='w-[300px]'>
                        <label htmlFor="size" className='block text-xl my-4'>Select Color</label>
                        <select
                        className='w-[300px] outline-none border border-gray-500 rounded-lg p-2 '
                        name="color" 
                        onChange={(e)=>setColor(e.target.value)}
                        value={color}
                        id="color">
                          {
                            item.color.map(name=>(
                              <option  className="flex items-center gap-2 border-gray-400" 
                              key={name}
                              value={name}
                               >{name}</option>
                            ))
                          }
                         
                        </select>
                      </div>
                      <div className="flex w-max gap-4 mt-[100px]">
                      <Button
                      variant='outlined'
                      ripple={true}
                      size='lg'
                      className='hover:bg-green-300 hover:text-white' 
                      color="gray"
                      onClick={()=> dispatch(addtoCart({
                        id:item.id,
                        name:item.name,
                        size:size,
                        img:item.img,
                        text:item.text,
                        color:color,
                        amount:1,
                        price:item.price,
                        totalPrice:item.price
                      }))}
                      >ADD TO CART</Button>
                    </div>
                    </div>
                   </div>
                </div>
            </div>
          ))

        }
        
    </div>
  )
}

export default SingleProduct