import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import Stars from "./Stars";

const TopReviews = () =>{
    const reviewSelector = useAppSelector(s=>s.comments);
    const [stars,setStars] = useState(5);
    const [reviewsAmount, setReviewsAmount] = useState(99);

    useEffect(()=>{
        const mean = reviewSelector.comments.reduce((total,x)=>(total+x.rating), 0)/reviewSelector.comments.length
        console.log(mean)
        setStars(Math.ceil(mean));
        setReviewsAmount(reviewSelector.comments.length);
    },[reviewSelector.comments])

    return(
        <>
           <Stars amount={stars}  />
                        {reviewsAmount} reviews
        </>
    )
}


export default TopReviews;