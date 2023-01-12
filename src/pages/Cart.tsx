import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { greenButtonCSS } from "../css classes/greenButton";
import { buyAction } from "../redux/cart/cartAction";
import { updateAmountInCart } from "../redux/cart/cartReducer";
import { closeModal } from "../redux/modalSlice";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";

const Cart = ()=>{
    const shopSelector = useAppSelector(s=>s.shop); 
    const cartSelector = useAppSelector(s=>s.cart);
    const dispatch = useAppDispatch()
    const [amount, setAmount]= useState(0);
    const [price, setPrice] = useState(0);
    const [spinner,setSpinner] = useState(false);
    useEffect(()=>{
        console.log("amount was changed")
        setAmount(cartSelector.amount);
        setPrice(cartSelector.amount >1 ? shopSelector.spec_price : shopSelector.price  )
    },[cartSelector.amount])

    const handleReset = ()=>{
        dispatch(updateAmountInCart(0));
        dispatch(closeModal());
    }

    const handleBuyBut=()=>{
        console.log(shopSelector.id)
        if(amount>0)
        {
            dispatch(buyAction({id:shopSelector.id,quantity:amount}));
            setSpinner(true)
        }
        
    }


    return(<>
   
    <div className="flex xxs:flex-col lg:flex-row">
        <div className="duo:flex duo:justify-center">
            <img className="object-cover h-auto duo:h-[300px] lg:h-[250px]" src={`${shopSelector.gallery[0]}`} />
        </div>
        <div className=" xxs:ml-0 lg:ml-5">
            <h3 className="font-bold mb-3 xxs:text-center xxs:mt-5">{shopSelector.title}</h3>
            <div className="mb-3 xxs:text-center lg:text-left" dangerouslySetInnerHTML={{__html:shopSelector.descrp2.slice(0,100)+"..." }}>
               
            </div>
            <div className=" font-bold text-blue-600  xxs:text-center lg:text-right">{amount} x ${price}</div>
            {amount>1&&<div className="xxs:text-center">
            20% Discount 
            </div>}
            <div className="uppercase font-bold text-blue-600  xxs:text-center lg:text-right">
                <span>SUBTOTAL</span> <span>${(price * amount).toFixed(2)}</span>
            </div>
            <div className="xxs:text-center">
                <button onClick={handleBuyBut} className={`${greenButtonCSS} xxs:w-[200px] lg:w-max`}>
                    {spinner ? <Spinner /> : "Procceed to Checkout" }
                    
                    </button>
            </div>
            <div className="text-center -mt-3">
                <button onClick={handleReset}>reset Cart</button>
            </div>
        </div>
    </div>
    </>)


}


export default Cart; 
