import { useEffect, useState } from "react";
import useShowModal from "../hooks/modalHooks";
import { MODALS } from "../modals/modalsTypes";
import { commentItemInterface } from "../redux/comments/commentsInterface";
import { useAppSelector } from "../redux/reduxHooks"
import ReviewElement from "./ReviewElement"

const Reviews =()=>{
    const reviewSelector = useAppSelector((s)=>s.comments);
    const [reviewMap,setReviewMap] = useState<commentItemInterface[]>([])
    const [openModalWin] = useShowModal();
    useEffect(()=>{
        setReviewMap(reviewSelector.comments)

    },[reviewSelector.comments])
   


    const handleAddReviewModal = ()=>{
            openModalWin(MODALS.ADD_REVIEW);
    }

    return(<div className="my-5">
        <h1 className=" text-5xl xxs:text-3xl xxs:text-center">Customer Reviews</h1>
        <div className="xxs:text-center">
            <button onClick={handleAddReviewModal} className="rounded-full bg-blue-500 hover:bg-blue-700 uppercase text-white font-bold my-3 py-2 px-6">
            Add your review
            </button>
        </div>
        <div className="container m-auto grid  xxs:grid-cols-1 xxs:gap-0 duo:grid-cols-2 duo:gap-2 lg:grid-cols-4 lg:gap-3 ">
            {reviewMap.map((o,i)=>{
                return(
                    <ReviewElement   key={`review-${i}`} 
                                            stars={o.rating} 
                                            name={o.name}
                                            date = {o.date}
                                            desc = {o.desc} 
                                            image={o.img}
                                            />
                )
            })}
         
        </div>
    </div>)
}

export default Reviews
