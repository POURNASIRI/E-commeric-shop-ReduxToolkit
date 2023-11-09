import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { dotslide, nextSlide, prevSlide } from '../features/sliderSlice'
import {sliderData} from '../assets/data/dummyData'

function Slider() {
       
   const sliderIndex = useSelector(state=>state.slider.value)
   const dispatch = useDispatch()

     
  return (
    <div className='relative bp-4'>
        <div>
            {/* this is slider section */}
            {
                sliderData.map(({img,text,id})=>(
                    <div key={id}
                    className={`${id === sliderIndex ? 'opacity-100 scale-100':`opacity-0 scale-95`} duration-100 ease-in-out`}
                    >
                    <div>
                        {
                           id === sliderIndex && 
                           <img className='h-[500px] w-full object-cover ' src={img} alt='shoes' />
                        }
                   
                    </div>
                    <div className='absolute top-4 mx-[20%] text-center'>
                        <p className='text-blue-gray-50 text-5xl font-inter font-extrabold capitalize tracking-normal leading-normal'>
                            {id === sliderIndex && text}
                        </p>
                    </div>
                    </div>
                ))}
        </div>
        {/* this is for dot blow in image slide to change slider */}
        <div className='flex absolute bottom-10 left-[45%]'>
            {
                sliderData.map((_,index )=>(
                    <div className='mr-4' key={index}>
                        <div className={`${(index + 1) === sliderIndex ? 
                        `bg-green-300 `
                        : `bg-white`} rounded-full p-4 cursor-pointer`}
                        onClick={()=>dispatch(dotslide(index + 1))}
                        ></div>
                    </div>
                ))
            }

        </div>
        <button className='absolute top-[50%] right-4 rounded-full bg-white p-2 hover:bg-green-300' onClick={()=>dispatch(nextSlide(sliderIndex + 1))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

        </button>
        <button className='absolute top-[50%] left-4 rounded-full bg-white p-2 hover:bg-green-300'   onClick={()=>dispatch(prevSlide(sliderIndex - 1))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        </button>
    </div>
  )
}

export default Slider