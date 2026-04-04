"use client"

import { useNavbar } from "@/contexts/navbar/use-navbar";
import HeaderListOrder from "../components/HeaderListOrder";
import { useEffect } from "react";

const useHeaderListOrder = () => {
    const { setNavbar } = useNavbar()
    
    useEffect(() => {
        setNavbar(<HeaderListOrder />)

        return () => {
            setNavbar(null)
        }
    }, [setNavbar])
}

export default useHeaderListOrder;