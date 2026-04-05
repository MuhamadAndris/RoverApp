"use client"

import { useState } from "react";
import { cn } from "@/libs/tailwind";
import SidebarToggle from "./SidebarToggle";
import ProfileMenu from "./ProfileMenu";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({className}: {className?: string}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <aside
            className={cn(
                // basic styles
                "p-2",
                "bg-white text-gray-800",

                // mobile styles
                "fixed bottom-0 left-0 right-0",
                "border-t border-gray-200",

                // desktop styles
                "md:relative",
                "md:border-t-0",
                "md:border-r",
                "md:grid md:grid-rows-[auto_1fr_auto]",

                isOpen ? "md:w-64 md:px-3" : "md:w-auto",

                // cosumetic styles
                className
            )}
        >
            <SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} />

            <SidebarMenu isOpen={isOpen} />
            
            <ProfileMenu isOpen={isOpen} />
            
        </aside>
    )
}

export default Sidebar;