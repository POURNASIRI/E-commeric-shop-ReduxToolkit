import { createSlice } from "@reduxjs/toolkit";
import {storeData} from '../assets/data/dummyData'




const productSlice =  createSlice({
    name:"products",
    initialState:{
        filtredProducts: 
        JSON.parse(sessionStorage.getItem("saveProducts")),
        singleProducts:JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
        error:false

    },
    reducers:{
        filtredProduct(state,action){
            const filter = storeData.filter(products => products.type === action.payload)
            state.filtredProducts = filter;
            const saveData = JSON.stringify(filter)
            sessionStorage.setItem("saveProducts", saveData)
            state.error = false
        },
        singleProduct(state,action){
           const single =state.filtredProducts.filter(product=> product.id === action.payload)
           state.singleProducts = single
           const singleProductData = JSON.stringify(single)
           sessionStorage.setItem("singleProduct", singleProductData)

        },
        filterGender(state,action){
            const gender = state.filtredProducts.filter(
            (product)=>product.gender === action.payload
            )
            state.error = false
            const oneGenderType = gender.length > 0
            if(oneGenderType){
                state.error = false
                state.filtredProducts = gender
                const saveData = JSON.stringify(gender)
                sessionStorage.setItem("gender", saveData)
            }else{
                state.error = true;
                state.filtredProducts = []
            }
        },
        sortByPrice(state){
            const price = state.filtredProducts.
            sort((a,b)=>a.price > b.price ? -1 : 1)

            let count = price.length;
            if(count > 1){
                state.filtredProducts = price
                const saveData = JSON.stringify(price)
                sessionStorage.setItem("price", saveData)
            }else{
                state.error = true;
                state.filtredProducts = [];
            }
        },
        filterColor(state,action){
                const color = state.filtredProducts.filter((product) =>
                  product.color.includes(action.payload)
                );
                state.error = false;
                if (color.length <= 0) {
                  state.error = true;
                  state.filtredProducts = [];
                } else {
                  state.error = false;
                  state.filtredProducts = color;
                  const saveState = JSON.stringify(color);
                  sessionStorage.setItem("filterColor", saveState);
                }
        },
        filterSize(state,action){
            const size = state.filtredProducts.filter((product) =>
            product.size.includes(action.payload)
          );
          state.error = false;
          if (size.length <= 0) {
            state.error = true;
            state.filtredProducts = [];
          } else {
            state.error = false;
            state.filtredProducts = size;
            const saveState = JSON.stringify(size);
            sessionStorage.setItem("filterSize", saveState);
          }
        }

    }

})
export default productSlice.reducer

export const {filtredProduct,
    singleProduct,
    filterGender,
    sortByPrice,
    filterColor,
    filterSize
} = productSlice.actions




// NOTE for Color and Size filtering if we use product.color === action.payload
// functinality dident work but we must use product.color.includes(action.payload) 