import { createAsyncThunk } from "@reduxjs/toolkit";
import { flatGFetchGallery } from "./flatGService";


export const flatGGetImages = createAsyncThunk(
    "get images for flat library",
    async() =>{

        const result =await flatGFetchGallery() ;
        return result;
    
    }
) 