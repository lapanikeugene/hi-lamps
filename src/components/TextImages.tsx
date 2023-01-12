import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import { textImageItemInterface } from "../redux/textImage/textImageInterface";
import Services from "./Services";
import TextImageItem from "./TextImageItem";



const TextImages = () =>{
    const textImageSelector = useAppSelector(s=>s.textImage);
    const [mapElements, setMapElements] = useState<textImageItemInterface[]> ([]);

    useEffect(()=>{
        setMapElements(textImageSelector.items);
    },[textImageSelector.items])

    useEffect(()=>{
        console.log("text-image component mounted")
    },[])
    return (<>
     {mapElements.map((o,i)=>{ 
        return (<>
                        <TextImageItem key={`text-image-${i}`} 
                                        desc={o.desc} 
                                        image={o.image} 
                                        direction={i%2==0 ? 'reverse' : ""} />
                {(i+1)%2==0 && <Services />}
                </>)})}
    </>)
}



export default TextImages;