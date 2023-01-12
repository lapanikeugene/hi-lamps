import { useEffect, useRef, useState } from "react";
import { greenButtonCSS } from "../css classes/greenButton";
import useShowModal from "../hooks/modalHooks";
import { MODALS } from "../modals/modalsTypes";
import { buyAction } from "../redux/cart/cartAction";
import { updateAmountInCart, updateAmountNotCart } from "../redux/cart/cartReducer";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { spinnerTriger } from "../redux/shop/shopSlice";
import Spinner from "./Spinner";

const AddToCart = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const shopSelector = useAppSelector(s=>s.shop);
    const cartSelector = useAppSelector(s=>s.cart);
    const [spinner,setSpinner] = useState(false);
    const [spinner2,setSpinner2] = useState(false);
    const [isAdded,setAdded] = useState(false);
    const [openModalWin] = useShowModal();

    const handleChange =() =>{
        //console.log("change amount in cart to ",inputRef.current?.value)
        dispatch(updateAmountNotCart(inputRef.current?.value)) // add amount before adding in cart to show advantages; 
        setAdded(false);
    }

    const handleBuyBut = (n?:number)=>(e:any)=>{
        // dispatch(spinnerTriger());
        n? setSpinner2(true) : setSpinner(true);
         dispatch(buyAction({id:shopSelector.id,  quantity: n ? n : 
                                                  cartSelector.amount > 0 ?  cartSelector.amount : 1 })   )
    }
    const handleCart= ()=>{

        if(isAdded)
            openModalWin(MODALS.CART);
        else
            {dispatch(updateAmountInCart(inputRef.current?.value));
            }


        setAdded(true);
        
    }

    useEffect(()=>{
        console.log(isAdded);
    },[isAdded])

    useEffect(()=>{
        setAdded(cartSelector.amount>0)
    },[cartSelector.amount])

    // useEffect(()=>{
    //     setSpinner(shopSelector.spinner);
    // },[shopSelector.spinner])
    return (
        <div className="flex justify-center items-center gap-x-3 xxs:gap-x-1 xxs:text-xs">
            <input className="border rounded border-blue-700   p-1 h-[40px] focus:border-teal-500 focus:outline-none" type="number" min={1} max={99} defaultValue={1} onChange={handleChange} ref={inputRef}/>
            <button onClick={handleCart} className="w-max rounded-full bg-blue-500 hover:bg-blue-700 uppercase text-white font-bold my-3 py-2 px-6" >
               {isAdded ? "Show Cart" : "Add to Cart" }
            </button>
            <button onClick={handleBuyBut()} className="w-max rounded-full bg-blue-500 hover:bg-blue-700 uppercase text-white font-bold my-3 py-2 px-6">
               {spinner ? <Spinner/> : "Buy now" } </button>
            <button onClick={handleBuyBut(2)} className={greenButtonCSS}>
            {spinner2 ? <Spinner/> : "Buy 2" }</button>

        </div>
    )
}


export default AddToCart;