import { useEffect, useState } from "react";
import { useService } from "../customHooks/useService";
import { buyAction } from "../redux/cart/cartAction";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { serviceItemInterface } from "../redux/services/servicesInterface";
import Spinner from "./Spinner";

const Services = () => {
    const serviceHook = useService();
    const dispatch = useAppDispatch();
    const cartAmount = useAppSelector(s=>s.cart.amount);
    const goodId = useAppSelector(s=>s.shop.id);
    const [servicesArr,setServicesArray] = useState<serviceItemInterface[]>();
    const [spinner,setSpinner] = useState(false);

    useEffect(()=>{
        setServicesArray(serviceHook);
    },[serviceHook]);

    const handleBuyNow = ()=>{
        setSpinner(true);
        dispatch(buyAction({id:goodId, quantity:cartAmount>0 ? cartAmount : 1}))
    }

    return(
     <div className="my-5">
        <hr className="h-px border-0 bg-gray-300" />
        <div className="flex lg:flex-row justify-between xxs:flex-col">
            {servicesArr?.map((o:any,i)=>{
                return  (<div key={`services-component-${i}`} className="flex">
                <img  src={`${o.icon}`} className="w-[40px] max-h-[40px]  m-2"/>
                <span>{o.title}</span>
                </div>)

            })}
            
        
            <div className="xxs:text-center">
                <button onClick={handleBuyNow} className=" w-max rounded-full bg-blue-500 hover:bg-blue-700 uppercase text-white font-bold my-3 py-2 px-6">
                    {spinner ? <Spinner /> : "Buy NOW"}</button>
            </div>

        </div>
        <hr   className="h-px border-0 bg-gray-300" />
        </div>
    )
}


export default Services;

