import { Stripe } from "@stripe/stripe-js";
import axios from "axios";
import { CrudHeader, CrudLinks } from "../_assets/crudInfo";


export const sendOrderToserver = async (params:{product:{id: number, quantity: number}}) =>{
    const result = await axios.post(CrudLinks.order,{products:[params.product]},CrudHeader);
    
    return result ; 
}