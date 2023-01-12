import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { getServicesData } from "../redux/services/servicesActions";
import { serviceItemInterface } from "../redux/services/servicesInterface";

/**
 * custom hooks used to get data about services from server. 
 * @returns array of services
 */
export const useService = ()=>{
    const serviceSelector = useAppSelector(s=>s.services);
    const [services,setServices] = useState<serviceItemInterface[]>();
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getServicesData());
    },[])
    
    useEffect(()=>{
        // console.log("return services");
        setServices(serviceSelector.services);
    },[serviceSelector])

    
    return services;
}