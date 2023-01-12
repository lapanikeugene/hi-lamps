import axios from "axios"
import { CrudHeader, CrudLinks } from "../_assets/crudInfo"






export const fetchSocialbutInfo = async ()=>{

    const result = await axios.get(CrudLinks.socialButs,CrudHeader);
    return result;

}