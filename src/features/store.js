import{configureStore} from '@reduxjs/toolkit'
import sliderSlice from './sliderSlice'
import productSlice from './productSlice'


const store = configureStore({
    reducer:{
        slider:sliderSlice,
        products:productSlice
    }
})


export default store