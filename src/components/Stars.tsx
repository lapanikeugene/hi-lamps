
import {AiFillStar, AiOutlineStar} from "react-icons/ai"


const Stars = (props:{amount:number}) => {


    return (
        <div className="flex">
            {Array(5).fill(0).map((o,i)=>(
                <span>
                    {props.amount>=i+1 ?    <AiFillStar size={20} className=" fill-amber-500" /> : 
                                            <AiOutlineStar size={20}  className=" fill-amber-500"  />}
                </span>
            ))}
        </div>
    )
}


export default Stars;