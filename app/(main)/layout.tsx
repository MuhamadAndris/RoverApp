"use client"

import Sidebar from "@/components/navigation/sidebar/Sidebar";
import NavbarContext from "@/contexts/navbar/NavbarContext";
import { ProductProvider } from "@/contexts/product/ProductProvider";
import { CartProvider } from "@/contexts/cart/CartProvider";
import { type ReactNode, useState } from "react";

interface MainLayoutProps {
    children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const [ navbarContent, setNavbarContent ] = useState<ReactNode>(null)

    return (
        <CartProvider>
            <ProductProvider>
                <NavbarContext.Provider value={{ setNavbar:setNavbarContent }}>
                    <div className="grid grid-cols-[1fr] md:grid-cols-[auto_1fr] grid-rows-[auto_1fr] fixed w-full h-full">
                        {/* Sidebar */}
                        <Sidebar className="row-span-2 z-1" />
                        
                        {/* Navbar/Header */}
                        {navbarContent}

                        {/* Content */}
                        <div className="col-span-1 mb-17 md:mb-0 overflow-y-auto bg-gray-100">
                            {children}
                        </div>
                    </div>
                </NavbarContext.Provider>
            </ProductProvider>
        </CartProvider>
    )
}

export default MainLayout;