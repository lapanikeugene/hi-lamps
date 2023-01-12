import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopFetchProductInfo } from "./shopService";


export const getShopProductInfo = createAsyncThunk( 
    'fetch/prodct-info',
    async ()=>{
        const response=  await shopFetchProductInfo();
        return response;
    }
);