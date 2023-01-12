import { createAsyncThunk } from "@reduxjs/toolkit";
import { createComment, fetchComments, sendMessageService, uploadImage } from "./commentsService";


export const getComments = createAsyncThunk(
    "get comments",
    async ()=>{
        try{
            const result = await fetchComments();
            return result;

        }catch(e:any){}
    }
)



export const addComment = createAsyncThunk(
    "add comment",
    async (params:{rating:number,desc:string,name:string,file?:File})=>{
        try{
            console.log("tarting added comment.......")
            const {file, rating, desc,name} = params;
            // let uploadedImage = null;
            // if(file)
            //     uploadedImage = await uploadImage({file});
            
            // console.log("link to uploaded image: ",uploadedImage);


            const result = await createComment({rating, desc,name,file});
            console.log("result after added comment:",result);
            return result;
        }catch(e:any){}
    }
)


export const sendMessage = createAsyncThunk(
    "send message by user",
   async (params:{message:string,email:string,name:string}) => {
        try{
            const result = await sendMessageService(params) ;
            return result;
        }catch(e:any){
            console.log(e)
        }
   }
)



