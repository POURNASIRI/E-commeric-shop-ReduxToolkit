import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addtoCart } from '../features/cartSlice';

function ProductSectionItem({
  id,
  name,
  img,
  text,
  size,
  price,
  color,
  totalPrice
}) {
   
   const dispatch = useDispatch()
    const difaultSize = size[1]
    const difaultColor = color[1]
   
  return (
   
    <Card className="w-96">
    <CardHeader  shadow={false} floated={false} className="h-96 relative">
      <img
        src={img}
        alt="card-image"
        className="h-full w-full object-cover "
      />
      <span className='absolute 
      top-7 right-2 
      rotate-[-45deg] 
      text-3xl font-bold text-orange-900'>SALE%</span>
    </CardHeader>
    <CardBody>
      <div className="mb-2 flex items-center justify-between">
        <Typography color="blue-gray" className="font-medium">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium">
          ${price}
        </Typography>
      </div>
      <Typography
        variant="small"
        color="gray"
        className="font-normal opacity-75"
      >
        {text}
      </Typography>
      <div className='flex justify-between items-center pt-4'>
      <Typography
        variant="small"
        color="gray"
        className="font-normal opacity-75"
      >
        Size left:{difaultSize}
      </Typography>
      <Typography
        variant="small"
        color="gray"
        className="font-normal opacity-75"
      >
         <div
          style={{backgroundColor:`${difaultColor}`, 
          height:"20px",width:"20px", 
          borderRadius:"50%",
          margin:"0 10px"
          }}></div>
      </Typography>
      </div>
    </CardBody>
    <CardFooter className="pt-0">
      <Button
        ripple={false}
        fullWidth={true}
        onClick={()=>dispatch(addtoCart({
          id:id,
          name:name,
          img:img,
          text:text,
          amount:1,
          size:difaultSize,
          price:price,
          color:difaultColor,
          totalPrice:totalPrice

        }))}
        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      >
        Add to Cart
      </Button>
    </CardFooter>
  </Card>
  )
}

export default ProductSectionItem