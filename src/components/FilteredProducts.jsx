import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCart from './ProductCart'
import { Button } from "@material-tailwind/react";
import Error from './Error'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  filtredProduct, 
  filterGender,
  sortByPrice,
  filterColor,
  filterSize 
} from '../features/productSlice';


function FilteredProducts() {

    const {filtredProducts,error} = useSelector(state=>state.products)
    const {type} = useParams()
      
    const genderBtn = ["male","female"]
    const colorBtn = [
      "red",
      "green",
      "purple",
      "yellow",
      "orange",
      "black",
      "blue",
      "brown"
    ]

    const sizeBtn = ["S","M","L","XL"]

    const dispatch = useDispatch()

  return (
    <div>
     <div className='pt-16'>
      <div className='pl-14'>
        <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal'>{type}</h1>
        <div className='flex items-center justify-between py-8'>
              <div className='flex gap-4 items-center'>
                {
                  genderBtn.map(item=>(
                    <Button
                    onClick={()=>dispatch(filterGender(item))} 
                    className='border border-gray-200' 
                    variant="text">
                      {item}
                    </Button>
                  ))
                }
                <Button
                onClick={()=>dispatch(sortByPrice())} 
                className='border border-gray-200' 
                variant="text">
                  High Price
                </Button>
                <Menu>
                  <MenuHandler>
                    <Button className='border border-gray-200' 
                    variant="text">Select Color</Button>
                  </MenuHandler>
                  <MenuList>
                    {
                      colorBtn.map(item=>(
                        <MenuItem 
                        className='text-base
                        font-semibold'
                        onClick={()=>dispatch(filterColor(item))}
                        key={item} 
                        style={{color:`${item}`}}>
                          {item}
                        </MenuItem>
                      ))
                    }
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button
                    disabled={type === "Bags"} 
                    className='border border-gray-200' 
                    variant="text">Select size</Button>
                  </MenuHandler>
                  <MenuList>
                    {
                      sizeBtn.map(item=>(
                        <MenuItem
                        onClick={()=>dispatch(filterSize(item))}
                        className='text-base
                        font-semibold' 
                        key={item}>
                          {item}
                        </MenuItem>
                      ))
                    }
                  </MenuList>
                </Menu>
              </div>
              <div className='pr-14'>
              <Button 
              onClick={()=>dispatch(filtredProduct(type))}
              className='border
               border-gray-200' 
              variant="text">Clear Filter
              </Button>
              </div>
        </div>
      </div>
      {
        error ? 
        <Error/> 
        :
        <div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
        {/* this filter for times when we don't use storage and our filterProducts state in productSlice is all data base */}
          {
            filtredProducts.filter(product=>(product.type === type))
            .map(products=>(
              <ProductCart key={products.id} products={products}/>
            ))
          }
        </div>
      }
    
     </div>
    </div>
  )
}

export default FilteredProducts