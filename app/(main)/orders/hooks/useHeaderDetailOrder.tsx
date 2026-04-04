"use client"

import { useNavbar } from "@/contexts/navbar/use-navbar";
import { useEffect } from "react";
import HeaderDetailOrderPage from "../components/HeaderDetailOrder";

const useHeaderDetailOrder = () => {
    const { setNavbar } = useNavbar()

    useEffect(() => {
        setNavbar(<HeaderDetailOrderPage />)

        return () => {
            setNavbar(null)
        }
    }, [setNavbar])

}

export default useHeaderDetailOrder;