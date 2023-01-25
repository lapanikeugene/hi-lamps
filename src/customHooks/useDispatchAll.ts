import { useEffect } from "react";
import { getComments } from "../redux/comments/commentsActions";
import { flatGGetImages } from "../redux/flatGallery/flatGActions";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { getShopProductInfo } from "../redux/shop/shopActions";
import { activateShop } from "../redux/shop/shopSlice";
import { getSocialButsAction } from "../redux/socialButtons/socialButsActions";
import { getTextImageDataAction } from "../redux/textImage/textImageActions";


/**
 * hook that dispatch all commands at load of the site 
 * to get all information 
 */
 const useDispatchAllAtStart = ()=>
{   
    const resultMessage = "all initial dispatches dispatched"
    const dispatch = useAppDispatch();
    const shopSelector = useAppSelector(s => s.shop)
    useEffect(()=>{
        if(!shopSelector.isInit)
        {


        dispatch(activateShop());
        dispatch(getSocialButsAction());
        dispatch(getShopProductInfo());
        dispatch(flatGGetImages());
        dispatch(getTextImageDataAction());
        dispatch(getComments());       
        console.log(resultMessage,shopSelector.isInit)
        }
    },[])

    return resultMessage;




}

export default useDispatchAllAtStart;
