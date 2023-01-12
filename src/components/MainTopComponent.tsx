import { useEffect, useState } from "react"
import { text } from "stream/consumers"
import { useService } from "../customHooks/useService"
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks"
import { getServicesData } from "../redux/services/servicesActions"
import { serviceItemInterface } from "../redux/services/servicesInterface"
import { getShopProductInfo } from "../redux/shop/shopActions"
import { shopFetchProductInfo } from "../redux/shop/shopService"
import percenter from "../redux/_assets/percenter"
import AddToCart from "./AddToCart"
import Gallery from "./Gallery"
import Stars from "./Stars"
import TopReviews from "./TopReviews"

const MainTopComponent = () => { 
    const dispatch = useAppDispatch();

    const [startedApp,setStartedApp] = useState(false);
    const shopSelector = useAppSelector(s=>s.shop);
    const cartSelector = useAppSelector(s=>s.cart);

    const serviceHook = useService();
    const [services,setServices] = useState<serviceItemInterface[]>();
  
    const [texts,setTexts] = useState({title:"",descr:"",descr2:""});
    const [prices,setPrices] = useState({price:"99",comparePrice:"120",specPrice:"99"});
    const [perOff,setPerOff] = useState(percenter(shopSelector.cprice,shopSelector.price));
    //fetch info only one time per component loaded. 
    // https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
   


    useEffect(()=>{
        setTexts({
            title:shopSelector.title,
            descr:shopSelector.descr,
            descr2:shopSelector.descrp2
        })
        setPrices({ price:shopSelector.price.toFixed(2),
                    comparePrice:shopSelector.cprice.toFixed(2),
                    specPrice: shopSelector.spec_price.toFixed(2)});
        
        setPerOff(percenter(shopSelector.cprice,shopSelector.price));

    },[shopSelector])

    useEffect(()=>{
        const price = cartSelector.notInCart > 1 ? shopSelector.spec_price : shopSelector.price;
        setPerOff(percenter( shopSelector.cprice,price))
    },[cartSelector.notInCart])

    useEffect(()=>{
        setServices(serviceHook);
    },[serviceHook])
  
    return (
        <div className="flex xxs:flex-col xxs:w-[330px] duo:w-[530px] lg:flex-row">
            <div className="w-50 xxs:mr-0 duo:flex-col lg:mr-5">
            <Gallery />
            </div>
            <div>
                <h1 className="uppercase m-0 mb-5 p-0 text-4xl text-black font-medium xxs:text-3xl xxs:text-center xxs:mt-5">{texts.title}</h1>
                <hr />
                <p className="my-5" dangerouslySetInnerHTML={{__html:texts.descr}} />
                <hr />
                <div className="flex justify-between">
                    <div>
                        <div className=" font-bold text-4xl drop-shadow-lg text-red-800 ">
                        ${`${cartSelector.notInCart >1 ? prices.specPrice : prices.price }`}
                            </div>
                        <div className="text-xl line-through font-bold  ">${prices.comparePrice}</div>

                    </div>
                    <div className="flex justify-around items-center" >
                        <TopReviews />
                    </div>

                </div>
                <AddToCart />
                <p className="font-bold mb-4" >{perOff}% OFF</p>
                <p className=" text-start" dangerouslySetInnerHTML={{__html:texts.descr2}}>
              
                </p>
                
                <div >
                    {services?.map((o:any,i)=>{

                        return(
                            <div key={`services-main-top-${i}`} className="flex justify-start items-center">
                                <img  src={`${o.icon}`} className="w-[40px] h-auto m-2" /> 
                                <span>{o.title}</span>
                            </div>
                        )
                    })}
                  


                </div>

            </div>
        </div>
    )
}


export default MainTopComponent 