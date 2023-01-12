import { useEffect, useState } from "react";
import { flatGGetImages } from "../redux/flatGallery/flatGActions";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks"

const FlatGallery = ()=>{
    const gallerySelector = useAppSelector(s=>s.flatGallery);
    const [gallery,setGallery] = useState<string[]>([]);

    useEffect(()=>{
      setGallery(gallerySelector.gallery)
    },[gallerySelector])

    return (

        <div className='flex flex-row w-screen'>
        {gallery.map((o,i)=>{

          return(<img src={`${o}`} key={`flat-gallery-${i}`} className='w-1/4' />)
        })}
      
      
      </div>
    )
}


export default FlatGallery