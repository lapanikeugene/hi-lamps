import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTextImageData } from "./textImageService";



export const getTextImageDataAction = createAsyncThunk(
    "gettextimagedata",
    async () => {
        try{
            const result = await fetchTextImageData();
            return result;
        }catch(e:any) { console.log(e)}
    }
)

