import { useEffect, useRef, useState } from 'react';
import {BsFillCaretRightFill,BsFillCaretLeftFill} from 'react-icons/bs'
import { useAppSelector } from '../redux/reduxHooks'
const Gallery  = ()=>{
    const gallerySelector = useAppSelector(s => s.shop.gallery);
    const [data,setData] = useState<string[]>([]);
    const interval = useRef<NodeJS.Timer | null>(null);
    const [runGallery,setRunGallery] = useState(false);
    useEffect(()=>{
        if(gallerySelector.length>0)
          {  setData(gallerySelector);
             setRunGallery(true)
        }
    },[gallerySelector])

   
   
    const slideLeft = (e:any) =>{

        let slider:HTMLElement = document.getElementById("slider") as HTMLElement;
        slider.scrollLeft -= 100; 
        

    }
    const slideRight = (e:any) =>{

        let slider:HTMLElement = document.getElementById("slider") as HTMLElement;
        slider.scrollLeft +=100; 
        // console.log(slider.scrollLeft);
        if(slider.scrollLeft==100)
        slider.scrollLeft -= 100;
    }

    const changeImage =  (url:string) =>{
        const image = document.getElementById('main-image') as HTMLImageElement;
        image.src =  url;
    }
    
    useEffect(()=>{
        let curImage = 0; 

        if(runGallery &&gallerySelector.length>0) {
            interval.current = setInterval(()=>{
                console.log(curImage);
             
                curImage = curImage >( data.length-1) ? 0 : curImage;
                console.log("change image to ", data[curImage],data,curImage,gallerySelector);
                // if(data[curImage])
                changeImage(data[curImage]);
              
                
                 curImage++; 
            
            },5000);

            // if (interval.current === null) { }
            return () => clearInterval(interval.current as NodeJS.Timeout)
        }
    },[runGallery,gallerySelector])

    const handleClickImage = (link:string) => (e:any) => {
        clearInterval(interval.current as NodeJS.Timeout);
        changeImage(link);
    }
    return (
        <div >
        <img id='main-image' className="object-cover max-w-[400px] h-[400px] xxs:w-[330px] duo:w-[500px] duo:max-w-[500px]  duo:ml-3 duo:text-center  lg:max-w-[430px] " src={`${data[0]}`} />
       
        <div className="relative flex items-center"> 
        <BsFillCaretLeftFill className='cursor-pointer opacity-50 hover:opacity-100' size={40} onClick={slideLeft} />
            <div id="slider" className="w-[300px] duo:w-[500px] lg:w-[390px] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide" >
            {data.map((o,i) =>(
                <img src={`${o}`} key={`gallery-${i}`} onClick={handleClickImage(o)} className="w-[100px] inline-block cursor-pointer p-1 hover:scale-105 ease-in-out duration-300"/>
                ))}
                </div>
                <BsFillCaretRightFill className='cursor-pointer opacity-50 hover:opacity-100' onClick={slideRight}  size={40} />
        </div>
       
        </div>
    )
}


export default Gallery