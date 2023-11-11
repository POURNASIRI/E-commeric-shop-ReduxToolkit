import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cartSlice";

function Cart({openModal,setOpen}) {

    const {cart,totalPrice} = useSelector(state=>state.cart)
     const dispatch = useDispatch()

  return (

    <>
          {
              cart.length > 0 ?
              <Dialog
              className="border-0 outline-0 "
              open={openModal}
              handler={()=>setOpen(false)}  
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Shopping Cart</DialogHeader>
              <DialogBody className="max-h-[650px] overflow-y-auto">
              
                  {
                      cart.map(product=>(
                          <div key={product.id}>
                              <div className="grid grid-cols-2 py-4" >
                                <div>
                                  <img className="h-[100px] rounded-md" 
                                  src={product.img} 
                                  alt={product.name} />
                                  <div className="max-w-xs">
                                      <p className="text-xs font-base leading-5">{product.text}</p>
                                  </div>
                                </div>
                                  <div className="flex flex-col items-start">
                                      <h4 className="text-black text-base font-inter font-bold">
                                          {product.name}
                                      </h4>
                                      <div>
                                          <p className="
                                          text-black text-xs font-bold py-1">Size: 
                                          <span>{product.size}</span>
                                          </p>
                                          <p className="
                                          text-black text-xs font-bold py-1 flex items-center">Color: 
                                            <div
                                              style={{backgroundColor:`${product.color}`, 
                                              height:"10px",width:"10px", 
                                              borderRadius:"50%",
                                              margin:"0 5px"
                                              }}></div>
                                          </p>
                                          <p className="
                                          text-black text-xs font-bold py-1" >Amount: 
                                          <span>{product.amount}</span></p>
                                          <p className="
                                          text-black text-xs font-bold py-1" >Price: 
                                          <span>{product.price}$</span></p>
                                          <p className="
                                          text-black text-xs font-bold py-1" >Total Item Price: 
                                          <span>{product.totalPrice}$</span></p>
                                        <div>
                                          <button 
                                            onClick={()=>dispatch(removeItem(product))}
                                           className="bg-red-700 p-1 text-white rounded-md">
                                            Remove
                                           </button>
                                        </div>
                                      </div>
                                  </div>
                              </div> 
                            
                          </div>
                      ))
                  }
                  <div>
                      <div className="border-t-[1px]">
                      <p className="
                          text-black text-xs font-bold py-1" >Total Price: 
                          <span> {totalPrice} $</span></p>
                      </div>
                  </div>
                
              
              </DialogBody>
            </Dialog>
            :
            <>
              <Dialog
              className="border-0 outline-0"
              open={openModal}
              handler={()=>setOpen(false)}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Shopping Cart</DialogHeader>
              <hr />
              <DialogBody>
              <div>
                  <h1 className="text-3xl font-inter font-bold py-4">Your cart is empty</h1>
                  <p className="text-xl font-inter text-black ">Add some Products</p>
              </div>
              </DialogBody>
            </Dialog>
            </>
          }
   
  </>
  )
}

export default Cart