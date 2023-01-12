import { useRef, useState } from "react";
import { sendMessage } from "../redux/comments/commentsActions";
import { closeModal } from "../redux/modalSlice";
import { useAppDispatch } from "../redux/reduxHooks"

const Contacts = () => {
    const dispatch = useAppDispatch();
    const nameRef =     useRef<HTMLInputElement>(null);
    const emailRef =    useRef<HTMLInputElement>(null);
    const messageRef =  useRef<HTMLTextAreaElement>(null);
    const [isError,setError] = useState(false)
    const [isSend, setIsSend]  = useState(false);
    const [textError, setTextError] = useState("")

    const handleClick = ()=>{
        if( messageRef.current?.value.length===0    || 
            emailRef.current?.value.length ===0     || 
            nameRef.current?.value.length===0){
                setError(true);
                setTextError("Please fill in all the fields");
                return;
            }
        if (!(/\S+@\S+\.\S+/.test(emailRef.current!.value)))
            {
                setTextError("email is not correct");
                setError(true);
                return;
            }



        dispatch(sendMessage({  message:    messageRef.current?.value   || "" ,
                                email:      emailRef.current?.value     || "" , 
                                name:       nameRef.current?.value      || ""
                            }));
        setError(false);
        setIsSend(true);
    }
    const handleClose = ()=>{
        dispatch(closeModal());
       }
    return(
        <div className="flex flex-col justify-center">
                <h1 className=" text-3xl text-center">Send us Message</h1>
                <div className="flex justify-around my-6 xxs:flex-col">

                <input  placeholder="Your Name" 
                        className="border" 
                        ref={nameRef} 
                        required></input>

                <input  placeholder="your email" 
                        className="border" 
                        type={"email"}
                        ref={emailRef} 
                        required></input>
                </div>
                <textarea   placeholder="your massage" 
                            rows={5}  
                            className="border  border-stone-500"
                            ref={messageRef} 
                            required ></textarea>
                {isError&&  <p className="text-red-500 font-bold">{textError}</p>}  
                {isSend?    <div >
                        <span className="font-bold">Thank you! Your message was sent.</span> 
                        <button onClick={handleClose} className={"text-green-400 ml-3"}>Close window</button> 
                    </div>  :                           
                <button     onClick={handleClick}
                            className="rounded-full bg-blue-500 hover:bg-blue-700 uppercase text-white font-bold my-3 py-2 px-6">Send message</button>}
        </div>
    )
}


export default Contacts