import axios from "axios"
import { CrudHeader, CrudLinks } from "../_assets/crudInfo";



export const shopFetchProductInfo = async () =>
{
    try{
    return await axios.get(CrudLinks.prodcucts,CrudHeader)
    }catch(e:any){
        console.log(e);
    }
}