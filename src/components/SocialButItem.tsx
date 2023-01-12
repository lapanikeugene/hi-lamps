import { useState } from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";


const SocialButItem =  (props:{type:string,link:string,mode:string}) =>{
    const [data, setData] = useState(props);

    return (
        <>
        {data.type==="instagram"&&<a href={data.link} target="_blank" >
                            <AiOutlineInstagram size={20} 
                                className={`${ data.mode? " fill-white" : "fill-stone-600" } 	cursor-pointer`} /></a>}
        {data.type==="facebook"&&<a href={data.link} target="_blank" >
                            <AiOutlineFacebook  size={20} 
                                className={`${data.mode? " fill-white" : "fill-stone-600"}  	cursor-pointer`}  /></a>}
        
        </> 
    )
} 



export default SocialButItem;