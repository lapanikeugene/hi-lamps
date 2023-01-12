import { useState } from "react";
import { openModal } from "../redux/modalSlice";
import { useAppDispatch } from "../redux/reduxHooks";

export default function useShowModal () {
  
    const dispatch = useAppDispatch();
    const openModalWin = (mode:string) =>{
     dispatch(openModal(mode));
    }

     return [openModalWin];
}


