import { createSlice } from "@reduxjs/toolkit";
import { getTextImageDataAction } from "./textImageActions";
import textImageInitState from "./textImageInitState";
import { textImageItemInterface } from "./textImageInterface";


export const textImageSlice = createSlice({
    name:"textimagesslice",
    initialState:textImageInitState,
    reducers:{},
    extraReducers:{
        [getTextImageDataAction.fulfilled.type]:(state,action) =>{
          
            console.log("get info about text-image", action.payload);
            const len = action.payload.data.data.length;
            const data:textImageItemInterface[] = [];
            for(let i = 0; i < len; i++)
            {
                data.push({
                    desc: action.payload.data.data[i].attributes.desc,
                    image:action.payload.data.data[i].attributes.image.data.attributes.url,
                    imgposition: action.payload.data.data[i].attributes.imgposition,    
                })
            }
            console.log("extracted data from text-image",data);
            state.items = data;

        }
    }
})



export default textImageSlice.reducer;