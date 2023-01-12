import axios from "axios"
import { CrudHeader, CrudLinks } from "../_assets/crudInfo"



export const fetchTextImageData = async ()=>{

    const result = await axios.get(CrudLinks.textImage,CrudHeader);
    return result;

}