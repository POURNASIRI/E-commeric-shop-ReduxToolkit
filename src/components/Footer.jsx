import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div>
        <div className='flex items-center justify-center'>
            <hr className='h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none' />
        </div>
        <div className='flex items-center justify-around pt-4'>
        <img className='w-[250px] h-[250] rounded-full  object-cover' src="/images/7515317.jpg" 
        alt="" />
            <div>
                <p className='text-black text-sm font-inter font-bold'>
                    CopyRight &copy {year} by E.Develop.com
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer