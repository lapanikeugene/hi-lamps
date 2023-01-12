import { useState,useEffect } from "react";

const TextImageItem = (props:{desc:string,image:string, direction:string}) => {

    const [direction, setDirection] = useState(props.direction==="reverse"? "lg:flex-row-reverse":"lg:flex-row")
    // const [directionR, setDirectionR] = useState(props.direction==="reverse"? "xxs:flex-colv":"xxs:flex-col")

    
    return (<div className={`flex justify-center flex-col-reverse xxs:mb-4 ${direction}`} >

        <div className="  mx-5 xxs:w-full  lg:w-1/2  " dangerouslySetInnerHTML={{__html: props.desc }}>
           
        </div>
        <div className=" xxs:w-full  lg:w-1/2">
        <img className="w-full	 h-auto " src={`${props.image}`}/>
        </div>
    </div>)
}


export default TextImageItem;