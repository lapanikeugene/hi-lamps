import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSocialbutInfo } from "./socialButsService";



export const getSocialButsAction = createAsyncThunk(
    "social buts info",
    async ()=>{
        try{

            const result = await fetchSocialbutInfo() ;
            return result; 
        }catch(e:any){
            console.log(e);
        }
    }

    
)