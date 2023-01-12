import { createAsyncThunk } from "@reduxjs/toolkit";
import { servicesFetchData } from "./servicesService";



export const getServicesData = createAsyncThunk(
    "get services data",
    async ()=>{
        
        const result = await servicesFetchData();
        return result;
    }
)