import { useEffect,useState } from "react";
import {AiOutlineInstagram,AiOutlineFacebook,  } from "react-icons/ai"
import {BsBasket } from "react-icons/bs"
import useShowModal from "../hooks/modalHooks";
import { MODALS } from "../modals/modalsTypes";
import { useAppSelector } from "../redux/reduxHooks";
import SocialButtons from "./SocialButtons";
import TopMenu from "./TopMenu";
const Header = ()=>{
    const [openModalWin] = useShowModal();
    const cartSelector = useAppSelector(s=>s.cart);
    const [isShown, setIsShown] = useState(false);

    const handleBasket = ()=>{
        if(cartSelector.amount>0)
        openModalWin(MODALS.CART);
    }

    useEffect(()=>{
      
        setIsShown(cartSelector.amount>0);
        
    },[cartSelector.amount])
    return(
        <div>
            <div className="flex justify-between  items-center xxs:flex-col lg:flex-row">
                <SocialButtons />
            <img src="assets/logo.avif" />
            <div  onClick={handleBasket} className="xxs:my-5" > 
            <BsBasket size={20} className="fill-stone-600	cursor-pointer" />
           {isShown&& <div className="-top-3 flex justify-center  cursor-pointer items-center relative bg-blue-500 rounded-full text-white text-[8px] w-4 h-4 ">
                <span>{cartSelector.amount}</span>
                </div>}

            </div>
            </div>
            <hr />
            <TopMenu />
        </div>
    )
}



export default Header;