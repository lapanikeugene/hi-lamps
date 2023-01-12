import { useState } from "react"
import useShowModal from "../hooks/modalHooks"
import { MODALS } from "../modals/modalsTypes"
import { openModal } from "../redux/modalSlice"
import { useAppDispatch } from "../redux/reduxHooks"
import SocialButtons from "./SocialButtons"

const BottomMenu = () => {
   const [openModalWin] = useShowModal();
    const showModal =  (mode:string) => (e:any)=>{
      
        openModalWin(mode);
    }
    
   
    return(
        <div className="flex  items-start w-screen bg-slate-800    xxs:flex-col-reverse xxs:justify-center xxs:py-5 xxs:items-center  lg:flex-row lg:justify-around lg:py-11">
                <SocialButtons mode="white" />
                <div className="flex flex-col justify-center items-start gap-y-4 text-white">
                    <h3 className="uppercase font-bold cursor-pointer">Information</h3>
                    <div className="text-center w-full cursor-pointer  " onClick={showModal(MODALS.PRIVACY)}>Privacy Policy</div>
                    <div className="text-center w-full  cursor-pointer " onClick={showModal(MODALS.REFUND)}>Refund policy</div>
                    <div className="text-center w-full cursor-pointer  " onClick={showModal(MODALS.SHIPPING)}>Shipping policy</div>
                    <div className="text-center w-full cursor-pointer  " onClick={showModal(MODALS.TERMS)}>Terms of service</div>
                </div>
                <div className="flex flex-col justify-center items-start gap-y-4 text-white xxs:mt-10 xxs:mb-10">
                    <h3 className="uppercase  font-bold">Contact Us</h3>
                    <div className="text-center w-full cursor-pointer  "  onClick={showModal(MODALS.CONTACT)}>Contact Page</div>
                
                </div>
        </div>
    )
}

export default BottomMenu