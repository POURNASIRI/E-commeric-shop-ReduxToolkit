import{configureStore} from '@reduxjs/toolkit'
import sliderSlice from './sliderSlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import authSlice from './authSlice'


const store = configureStore({
    reducer:{
        slider:sliderSlice,
        products:productSlice,
        cart:cartSlice,
        user:authSlice
    }
})


export default store