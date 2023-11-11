import{configureStore} from '@reduxjs/toolkit'
import sliderSlice from './sliderSlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'


const store = configureStore({
    reducer:{
        slider:sliderSlice,
        products:productSlice,
        cart:cartSlice
    }
})


export default store