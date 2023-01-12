import { createAsyncThunk } from "@reduxjs/toolkit";
import { stripePromise } from "../_assets/stripe";
import { sendOrderToserver } from "./cartService";


export  const buyAction = createAsyncThunk(
    "buy action",
    async (params:{id:number,quantity:number}) =>{
        const  stripe = await stripePromise; 
        const response = await sendOrderToserver({product:params});
        await stripe?.redirectToCheckout({
           sessionId:response.data.stripeSession.id,

        })
        return response;
    }
    )