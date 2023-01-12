import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {reducers} from "./combiner";
import createSagaMiddleware from "redux-saga"
// const stripe = require('stripe')('sk_test_51M3laBAPdmYGFspYa4pEfEds3mQTZnDLesyVpH5pPFpgdjrRq5AImqRLbDHKsHoEXTocfujm6q7xpco9pMF0eVwk00ABMZ1G00');


export const store
=() =>{
   const newSagaMiddleWare = createSagaMiddleware();
   return configureStore({
        
       reducer:reducers,
       // remove non-serial. value error 
       middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false, });
    }});
}



export type RootState = ReturnType<typeof reducers>;
// тип для самого стора
export type AppStore = ReturnType<typeof store>;
//если определить типы для диспатча, то неопределенные экшны нельзя будет задиспатчить. 
export type AppDispatch = AppStore['dispatch'];