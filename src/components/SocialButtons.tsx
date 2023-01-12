import { useEffect, useState } from "react";
import {AiOutlineInstagram,AiOutlineFacebook,  } from "react-icons/ai"
import { useAppSelector } from "../redux/reduxHooks"
import { linksInterface } from "../redux/socialButtons/shocialButsInterface.";
import SocialButItem from "./SocialButItem";

const SocialButtons = (props:{mode?:string})=>{
    const socialSelector = useAppSelector((s)=>s.social);
    const [buttons,setButtons] = useState<linksInterface[]>([]);


    useEffect(()=>{
        setButtons(socialSelector.links);
    },[socialSelector.links])

    return (
        <div className="flex p-2 gap-x-2 xxs:mt-5 xxs:flex-end xxs:w-screen xxs:ml-10 lg:w-[100px]">
            {buttons.map((o,i)=>{
               return <SocialButItem key={`social-button-${i}`} type={o.type} link={o.link} mode={props.mode|| ""} />
            })}
       
        </div>  
    )
}


export default SocialButtons