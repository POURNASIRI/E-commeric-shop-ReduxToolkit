import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { singleProduct } from '../features/productSlice'


function ProductCart({products}) {
    const {id,name,text,price,color,img} = products

      const {type} = useParams()
      const dispatch = useDispatch()
      


  return (
    
  <Link to={`/filterProduct/${type}/${id}?name=${name}`}>
    <Card className="w-full px-4" onClick={()=>dispatch(singleProduct(id))}>
    <CardHeader shadow={false} floated={false} className="h-96">
      <img
        src={img}
        alt="card-image"
        className="h-full w-full object-cover"
      />
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
      <div className='flex mt-3 '>

        {
            color.map((col,index)=>{
                return(
                <div key={index}>
                    <div
                    style={{backgroundColor:`${col}`, 
                    height:"20px",width:"20px", 
                    borderRadius:"50%",
                    margin:"0 10px"
                    }}></div>
                </div>
                )
              })
            }
      </div>
    </CardBody>
    <CardFooter className="pt-0">
      <Button
        ripple={false}
        fullWidth={true}
        className="bg-blue-gray-900/10 text-blue-gray-900 
        shadow-none hover:scale-105 hover:shadow-none 
        focus:scale-105 focus:shadow-none active:scale-100"
        >
        Add to Cart
      </Button>
    </CardFooter>
  </Card>
</Link>
  )
}

export default ProductCart