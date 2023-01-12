import { AiOutlineClose } from "react-icons/ai"
import modalSlice from "../redux/modalSlice";
import { useAppDispatch,useAppSelector } from "../redux/reduxHooks"
import { openModal,closeModal } from "../redux/modalSlice";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import Contacts from "../pages/Contacts";
import Privacy from "../pages/Privacy";
import { MODALS } from "./modalsTypes";
import Refund from "../pages/Refund";
import Shipping from "../pages/Shipping";
import Terms from "../pages/Terms";
import AddReview from "../pages/AddReview";
import Cart from "../pages/Cart";

const BaseModal = () =>{
    const dispatch = useAppDispatch();
    const selector = useAppSelector((s)=>s.modal)
    const [modalType,setModalType] = useState('NaM');
    const titles =new Map<any, string>([
        [MODALS.CONTACT,"Contact"],
        [MODALS.PRIVACY,"Privacy policy"],
        [MODALS.REFUND,"Refund policy"],
        [MODALS.SHIPPING,"Shipping policy"],
        [MODALS.TERMS,"Terms of service"],
        [MODALS.ADD_REVIEW,"Add your review"],
        [MODALS.CART,"Your Cart"]
    ]
    )
    const modals =new Map<any, JSX.Element>([
        [MODALS.CONTACT,<Contacts />],
        [MODALS.PRIVACY,<Privacy />],
        [MODALS.REFUND,<Refund />],
        [MODALS.SHIPPING,<Shipping />],
        [MODALS.TERMS,<Terms />],
        [MODALS.ADD_REVIEW,<AddReview />],
        [MODALS.CART,<Cart />],
    ]
    )

    useEffect(()=>{
        setModalType(selector.mode);
    },[selector])

    const closeModalA = ()=>{
        dispatch(closeModal())
    }
    return(
        <div    id="defaultModal" 
                aria-hidden="true" 
        className=" flex justify-center items-center pt-10 bg-neutral-500/50 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full xxs:h-full xxs:p-1">

        <div className="relative  w-full h-2xl max-h-2xl max-w-2xl md:h-auto md:h-screen   xxs:w-[330px] duo:w-[500px] lg:w-[700px] ">
            <div className="relative overflow-auto  bg-white rounded-lg shadow dark:bg-gray-700 duo:max-h-[700px] xxs:max-h-[500px] ">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                   <span>{titles.get(modalType)}</span>
                 
                    </h3>
                        <AiOutlineClose onClick={closeModalA} className=" fill-gray-400   hover:text-gray-900  cursor-pointer"/>
                </div>
                <div className="flex flex-col justify-center m-8 p-3">
                    {modals.get(modalType)}
               
                </div>
            </div>

        </div>

    </div>)
}

export default BaseModal