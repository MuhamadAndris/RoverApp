"use client"

import { useCart } from "@/contexts/cart/use-cart";
import { cn } from "@/libs/tailwind";
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftCollapseFilled, IconUserFilled } from "@tabler/icons-react";

interface SidebarToggleProps {
    isOpen: boolean
    setIsOpen: (value:boolean | ((prev: boolean) => boolean)) => void
}

const SidebarToggle = ({
    isOpen,
    setIsOpen
}:SidebarToggleProps ) => {

    const { isCartOpen, closeCart  } = useCart()
    
    if (isOpen && isCartOpen) {
        setIsOpen((prev) => !prev)
    }

    return (
        <div className={cn(
            "hidden md:flex",
            isOpen ? "py-4 justify-end" : "p-0 mb-4 justify-center transform rotate-180"
        )}>
            <a title={isOpen ? "Tutup sidebar" : "Buka sidebar"}>
                {isOpen 
                ?
                    <IconLayoutSidebarLeftCollapseFilled 
                        className="cursor-e-resize p-2 w-10 h-10 hover:bg-gray-100 hover:rounded-md"
                        onClick={() => setIsOpen(false)}
                    />
                :
                    <IconLayoutSidebarLeftCollapse
                        className="cursor-e-resize p-2 w-10 h-10 hover:bg-gray-100 hover:rounded-md"
                        onClick={() => {
                            setIsOpen(true)
                            closeCart()
                        }}
                    />
                }
            </a>
        </div>
    )
}

export default SidebarToggle;