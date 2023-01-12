import axios from "axios"
import { CrudHeader, CrudHeaderWithBody, CrudLinks } from "../_assets/crudInfo"
import dateFormatter from "../_assets/dateFormatter";
import { updateRating } from "./commentsReducer";

export const fetchComments = async ()=>{
    const result = await axios.get(CrudLinks.comments,CrudHeader);
    return result;
}


/**
 * not necessary function at this moment
 
 */
export const uploadImage = async (params:{file:File}) =>{
    const formData = new FormData()
    formData.append('files',params.file);
    const result = await axios.post(CrudLinks.uploadImage,formData,CrudHeader);
    console.log(result.data);
    return result.data[0].url;
}


export const  createComment = async (params:{rating:number, desc:string,name:string,file?:File}) =>{
    console.log("starting to create comment....");
    const {rating, desc, name, file} = params;
    const formData = new FormData()
   
    // formData.append('rating',String(rating));
    // formData.append('reviewtext',desc);
    // formData.append('name',name);
    // formData.append('date',dateFormatter(new Date()));

    const data = {
        reviewtext: desc, //params.desc,
        name: name, ///params.name.value,
        date: dateFormatter(new Date()), ///new Date().toJSON(),
        rating: rating,
        publishedAt :null
   }

    if(file)
    formData.append("files.image",file);
    formData.append("data",JSON.stringify(data));

console.log(formData);
    const result = await axios.post(CrudLinks.createComment,
        formData,CrudHeaderWithBody(formData));
    return result;
}


export const sendMessageService =async (params:{message:string,email:string,name:string}) =>{

   
    const formData = new FormData();

    formData.append('data',JSON.stringify(params));
    console.log(params, JSON.stringify(params));

    const result = await axios.post(CrudLinks.sendMessage,formData,CrudHeaderWithBody(formData))
    console.log(result);
    return result;

}