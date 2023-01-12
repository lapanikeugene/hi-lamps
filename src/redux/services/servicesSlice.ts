import { createSlice } from "@reduxjs/toolkit";
import { getServicesData } from "./servicesActions";
import { servicesInitState } from "./servicesInitState";
import serviceInterface, { serviceItemInterface } from "./servicesInterface";



export const servicesSlice = createSlice({
    name:"services",
    initialState:servicesInitState,
    reducers:{},
    extraReducers:{
        [getServicesData.fulfilled.type]: (state,action)=>{
            const arr:serviceItemInterface[] = []
            for(let i = 0; i< action.payload.data.data.length;i++)
            {
                arr.push( { title: action.payload.data.data[i].attributes.desc, 
                            icon: action.payload.data.data[i].attributes.icon.data.attributes.url})
            }
            state.services = arr;
        // console.log("service data: ",action.payload);
        }
    }
})


export default servicesSlice.reducer;