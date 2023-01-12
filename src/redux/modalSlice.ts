import {createSlice, PayloadAction} from  '@reduxjs/toolkit'
import { modalInitState } from './modalInitState';

export const modalSlice = createSlice(
    {
        name:"modals",
        initialState:modalInitState,
        reducers:{
            openModal: (state, action:PayloadAction<string>)=>{
                state.isOpened = true;
                state.mode = action.payload;
            },
            closeModal: (state) =>{
                state.isOpened=false;
            }

        },

    }
)


export const {openModal,closeModal} = modalSlice.actions;
export default modalSlice.reducer; 