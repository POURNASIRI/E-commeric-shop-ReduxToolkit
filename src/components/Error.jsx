import React from 'react'
import { Alert } from "@material-tailwind/react";

function Error() {
  return (
    <div className='grid 
    grid-cols-1 
    items-center 
    justify-items-center'>
        <div className='w-[96]'>
        <Alert
        className='
        font-bold
        text-xl 
        font-inter' 
        color='red'>
            Sorry no products match filter search...
            Clear the filter and try again
        </Alert>;
        </div>
    </div>
  )
}

export default Error