"use client"

import { createContext, type ReactNode } from "react";

interface NavbarContextType {
    setNavbar: (node:ReactNode) => void
}

const NavbarContext = createContext<NavbarContextType | null>(null)

export default NavbarContext