import { createSlice } from "@reduxjs/toolkit";
import { flatGGetImages } from "./flatGActions";
import { fltGInitState } from "./flatGInitState";




export const flatGSlice = createSlice({
    name:"flat-gallery-slice",
    initialState:fltGInitState,
    reducers:{},
    extraReducers:{
        [flatGGetImages.fulfilled.type]:(state,action)=>{
            const data =  action.payload.data.data[0].attributes.images.data;
            const arr = [];
            for(let i = 0; i < data.length;i++)
            {
                arr.push(data[i].attributes.url);
            }

            // console.log("got gallery ",arr);
            state.gallery =arr;

        }
    },
})


export default flatGSlice.reducer;