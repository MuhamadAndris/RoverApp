"use client"

import { useEffect } from "react";
import { useNavbar } from "@/contexts/navbar/use-navbar";
import { HeaderCreateOrder } from "../components/HeaderCreateOrder";

const useHeaderCreateOrder = () => {
    const { setNavbar } = useNavbar();

    useEffect(() => {
        setNavbar(<HeaderCreateOrder />)
        
        return () => {
            setNavbar(null)
        }
    }, [setNavbar])
}

export default useHeaderCreateOrder;