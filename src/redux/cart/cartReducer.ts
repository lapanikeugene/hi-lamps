import { createSlice } from "@reduxjs/toolkit";
import cartInitState from "./cartInitState";



export const cartSlice = createSlice({
    name:"cart slice",
    initialState:cartInitState,
    reducers:{
        updateAmountInCart: (state,action)=>{
            state.amount = action.payload;
        },
        updateAmountNotCart: (state,action)=>{
            state.notInCart = action.payload;
        }
    }
})


export const {updateAmountInCart,updateAmountNotCart} = cartSlice.actions;

export default cartSlice.reducer;