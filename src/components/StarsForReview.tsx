import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { updateRating } from "../redux/comments/commentsReducer";
import { useAppDispatch } from "../redux/reduxHooks";

const StarsForReview = () =>{
    const dispatch = useAppDispatch();
    const [selectedStars,setSelectedStars] = useState(-1);
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectedStars = (n:number) => (e:any)=>{
        if(!isSelected)
            setSelectedStars(n)
    }
    const handleResetStars = ()=>{
        if(!isSelected)
            setSelectedStars(-1);
    }

    const handleSelectStars = (n:number) => (e:any) =>{
        console.log("selected ", n)
                setSelectedStars(n);
                dispatch(updateRating(n));
                setIsSelected(true);
      
    }

    return (
        <div className="flex" onMouseLeave={handleResetStars}>
        {Array(5).fill(0).map((o,i)=>(
            <span key={`stars-for-review-${i}`} >
              {selectedStars>=i+1 ?  <AiFillStar size={20}  onClick={handleSelectStars(i+1)}  onMouseEnter={handleSelectedStars(i+1)} className=" fill-amber-500  cursor-pointer" /> : 
                                         <AiOutlineStar size={20}  onClick={handleSelectStars(i+1)}  onMouseEnter={handleSelectedStars(i+1)} className=" fill-amber-500 cursor-pointer "   />}
            </span>
        ))}
    </div>
    )

}

export default StarsForReview;