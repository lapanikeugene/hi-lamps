import { createSlice } from "@reduxjs/toolkit";
import { linksInterface } from "./shocialButsInterface.";
import { getSocialButsAction } from "./socialButsActions";
import socialButInitState from "./socialButsInitState";



export const socialButsSlice = createSlice({
    name:"social buttons",
    initialState:socialButInitState,
    reducers:{},
    extraReducers:{
        [getSocialButsAction.fulfilled.type]:(state,action)=>{
            console.log("got social buttons info",action.payload);
            const buttons:linksInterface[] =[];
            const lenData  = action.payload.data.data.length ||0;

            for(let i = 0; i < lenData; i++){
                    buttons.push({
                                    link:  action.payload.data.data[i].attributes.link,
                                    type:  action.payload.data.data[i].attributes.type,
                    })
            }

            state.links = buttons;

        }
    }
})



export default socialButsSlice.reducer