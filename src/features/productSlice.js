import { createSlice } from "@reduxjs/toolkit";
import {storeData} from '../assets/data/dummyData'



const productSlice =  createSlice({
    name:"products",
    initialState:{
        filtredProducts: 
        JSON.parse(sessionStorage.getItem("saveProducts")) || storeData,
        singleProducts:JSON.parse(sessionStorage.getItem("singleProduct")) || storeData

    },
    reducers:{
        filtredProduct(state,action){
            const filter = storeData.filter(products => products.type === action.payload)
            state.filtredProducts = filter;
            const saveData = JSON.stringify(filter)
            sessionStorage.setItem("saveProducts", saveData)
        },
        singleProduct(state,action){
           const single =state.filtredProducts.filter(product=> product.id === action.payload)
           state.singleProducts = single
           const singleProductData = JSON.stringify(single)
           sessionStorage.setItem("singleProduct", singleProductData)

        }
    }

})
export default productSlice.reducer

export const {filtredProduct,singleProduct} = productSlice.actions