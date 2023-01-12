import { combineReducers } from "redux";
import cartReducer, { cartSlice } from "./cart/cartReducer";
import commentsReducer from "./comments/commentsReducer";
import flatGSlice from "./flatGallery/flatGSlice";
import modalReducer from "./modalSlice";
import servicesSlice from "./services/servicesSlice";
import shopSlice from "./shop/shopSlice";
import socialButsReducer from "./socialButtons/socialButsReducer";
import textImageReducer from "./textImage/textImageReducer";




export const reducers = combineReducers({modal:modalReducer,
                                        shop:shopSlice,
                                        services:servicesSlice,
                                        flatGallery:flatGSlice,
                                        social:socialButsReducer,
                                        textImage:textImageReducer,
                                        comments: commentsReducer,
                                        cart: cartReducer});

//TODO Разобраться что это за хрень.
export type CombineReducerState = ReturnType <typeof reducers>;