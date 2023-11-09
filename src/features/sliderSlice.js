import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../assets/data/dummyData";

const sliderSlice = createSlice({
    name:"slider",
    initialState:{
        value:1,
        length:sliderData.length
    },
    reducers:{
        nextSlide(state,action){
            state.value = action.payload > state.length ? 1 : action.payload
        },
        prevSlide(state,action){
            state.value = action.payload < 1 ? state.length : action.payload
        },
        dotslide(state,action){
            const slide = action.payload
            state.value = slide
        }
    }
})

export default sliderSlice.reducer

export const{nextSlide,prevSlide,dotslide} = sliderSlice.actions