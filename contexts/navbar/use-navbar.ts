"use client"

import { useContext } from "react"
import NavbarContext from "./NavbarContext"

export const useNavbar = () => {
    const context = useContext(NavbarContext)

    if(!context) {
        throw new Error("UseNavbar must be used inside Provider")
    }

    return context
}