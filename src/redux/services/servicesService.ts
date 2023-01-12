import axios from "axios";
import { CrudHeader, CrudLinks } from "../_assets/crudInfo";



export const servicesFetchData = async()=>{

 try{
    const result = await axios.get(CrudLinks.services,CrudHeader);
    return result;    
    

 }  catch(e:any){
    console.log(e);
 } 

}