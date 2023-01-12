import { createSlice } from "@reduxjs/toolkit";
import { getShopProductInfo } from "./shopActions";
import { shopInitialState } from "./shopInitialState";




// slice to get product info from server. 
export const shopSlice = createSlice({
    name:"shop-slice",
    initialState:shopInitialState,
    reducers:{
        activateShop: (state)=>{ state.isInit = true},
        spinnerTriger: (state)=>{state.spinner = true}
    },
    
    extraReducers:{
        [getShopProductInfo.fulfilled.type]:(state,action)=>{
            console.log(action.payload.data.data[0])
            const data =action.payload.data.data[0].attributes;
             console.log(action.payload.data.data[0].attributes);
            state.title = data.title;
            state.descr = data.desc_short;
            state.descrp2 =data.short_desc_2;
            state.price = data.price;
            state.cprice = data.compare_price;
            state.spec_price= data.special_price
            state.id = action.payload.data.data[0].id;
        
            // extract links to images. 
            const galleryData = data.images.data;
            const gallery:string[] = [];
            const len = galleryData.length;
            for(let i = 0; i < len; i++){
                gallery.push(galleryData[i].attributes.url)
            }


            console.log("top gallery links:",gallery);
            state.gallery = gallery;
        
        }

    }
})

export const  {activateShop,spinnerTriger} = shopSlice.actions;
export default shopSlice.reducer;


