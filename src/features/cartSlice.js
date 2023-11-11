import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        amount:0,
        totalAmount:0,
        totalPrice:0
    },
    reducers:{
        addtoCart(state,action){
            const productId = action.payload;
            const exisit = state.cart.find(
                (product)=>{
                    return(
                        product.id === productId.id && 
                        product.size === productId.size && 
                        product.color === productId.color
                    )
                }
            )
             if(exisit){
                exisit.amount ++;
                exisit.totalPrice += productId.price;
                state.totalAmount ++
                state.totalPrice += productId.price
             }else{
                state.cart.push({
                    id:productId.id,
                    price:productId.price,
                    size:productId.size,
                    img:productId.img,
                    text:productId.text,
                    amount:1,
                    totalPrice:productId.price,
                    name:productId.name,
                    color:productId.color

                });
                state.totalAmount ++;
                state.totalPrice += productId.price 
               
             }   
        },
        removeItem(state,action){
            const productId = action.payload;
            const exisit = state.cart.find(
                (product)=>{
                    return(
                        product.id === productId.id && 
                        product.size === productId.size && 
                        product.color === productId.color
                    )
                }
            )
            if(exisit.amount === 1){
                state.cart = state.cart.filter(
                    (product)=>{
                        return(
                            product.id !== productId.id ||
                            product.size !== productId.size ||
                            product.color !== productId.color 
                        )
                    }
                 
                );
                state.totalAmount --;
                state.totalPrice -= productId.price 
            }else{
                exisit.amount --;
                exisit.totalPrice -= productId.price;
                state.totalAmount --;
                state.totalPrice -= productId.price
            }
        }
    }
})

export default cartSlice.reducer
export const {addtoCart,removeItem} = cartSlice.actions