import { useRef, useState } from "react";
import StarsForReview from "../components/StarsForReview";
import { greenButtonCSS } from "../css classes/greenButton";
import { addComment } from "../redux/comments/commentsActions";
import { closeModal } from "../redux/modalSlice";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";



export const AddReview = ()=>{
    const [isSend, setIsSend]  = useState(false)
    const [isError, setError] = useState(false);
    /// null for typescript 
   const inputRef = useRef<HTMLInputElement>(null);
   const txtAreaRef =  useRef<HTMLTextAreaElement>(null);
   const [selectedFile,setSelectedFile] = useState<File>();
   const dispatch = useAppDispatch();
   const ratingSelector = useAppSelector(s=>s.comments.userRating)

   const handleSend = ()=>{
    console.log("photo? ", selectedFile)
    console.log(txtAreaRef.current?.value);
    console.log(inputRef.current?.value);
    if(txtAreaRef.current?.value.length ===0 || inputRef.current?.value.length ===0){
        setError(true)
        return;
    }
    dispatch(addComment({   file: selectedFile ,
                            rating:ratingSelector < 1 ? 5 : ratingSelector,
                            desc:txtAreaRef.current?.value|| "",
                            name:inputRef.current?.value||"",
                        }));

    setError(false);
    setIsSend(true);

   }

   const handleSelectFile = (e:any) =>{
    setSelectedFile(e.target.files[0]);

   }
   const handleClose = ()=>{
    dispatch(closeModal());
   }
    return (
        <>
        <StarsForReview />
        <input  name="name" 
                ref={inputRef} 
                placeholder={"Your name"}  
                maxLength={25}
                className="border pl-1 my-3  border-gray-500" />
        <input  type="file" 
                onChange={handleSelectFile}  
                className="border mb-3  border-gray-500"/>
        <textarea   name="review"
                    maxLength={150}
                    rows={5}  
                    ref={txtAreaRef} 
                    className="border mb-3 border-gray-500" />

        {isError&&  <p className="text-red-500 font-bold">Please add your name or/and message</p>}
        {isSend?    <div >
                        <span className="font-bold">Thank you! Your review will appear on the site soon.</span> 
                        <button onClick={handleClose} className={"text-green-400 ml-3"}>Close window</button> 
                    </div>  : 
                    <button onClick={handleSend} 
                            className={greenButtonCSS} > send </button>}
        </>
    )
}


export default AddReview;