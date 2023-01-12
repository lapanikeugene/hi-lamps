import axios from "axios";
import { CrudHeader, CrudLinks } from "../_assets/crudInfo";

export const flatGFetchGallery = async () =>{

    try{
          const result = await  axios.get(CrudLinks.flatGallery,CrudHeader);

          return result;
    }catch(e:any){
        console.log(e);
    }
}