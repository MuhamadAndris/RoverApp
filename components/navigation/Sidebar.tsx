"use client"

import { useState, type ComponentType } from "react";
import { cn } from "@/libs/tailwind";
import { SidebarItem } from "./SidebarItem";
import { IconClipboardText, IconClipboardTextFilled, IconLayoutDashboard, IconLayoutDashboardFilled, IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftCollapseFilled, IconListDetails, IconListDetailsFilled, IconUser, IconUserFilled, type TablerIcon } from "@tabler/icons-react";
import { useCart } from "@/contexts/cart/use-cart";
import { PATHS } from "@/utils/paths";

export interface ListMenuValue {
    name: string;
    path: string;
    icon: {
        onActive: TablerIcon | ComponentType<{className?: string}>;
        onInactive: TablerIcon | ComponentType<{className?: string}>;
    }
}

const Sidebar = ({className}: {className?: string}) => {
    const [isOpen, setIsOpen] = useState(false);

    const { isCartOpen, closeCart  } = useCart()
    
    if (isOpen && isCartOpen) {
        setIsOpen((prev) => !prev)
    }
    

    const listMenu: ListMenuValue[] = [
        {
            name: "Dashboard",
            path: PATHS.APP.DASHBOARD,
            icon: {
                onActive: IconLayoutDashboardFilled,
                onInactive: IconLayoutDashboard,
            }
        },
        {
            name: "Order",
            icon: {
                onActive: IconListDetailsFilled,
                onInactive: IconListDetails,
            },
            path: PATHS.APP.ORDERS
        },
        {
            name: "Laporan",
            icon: {
                onActive: IconClipboardTextFilled,
                onInactive: IconClipboardText,
            },
            path: PATHS.APP.REPORTS
        }
    ]

    const UserIcon = {
        onActive: IconUserFilled,
        onInactive: IconUser,
    }

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
            <header className={cn(
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
            </header>

            <nav className="grid grid-cols-3 md:flex gap-1 md:justify-start md:flex-col  md:p-0 text-gray-700 ">
                {listMenu.map((item) => {
                    return (
                        <SidebarItem key={item.path} name={item.name} icon={item.icon} path={item.path} isOpen={isOpen} /> 
                    )
                })}
            </nav>

            <footer>
                <div className={cn(
                    "hidden md:flex py-4"
                )}>
                    <SidebarItem name="Profile" icon={UserIcon} path={PATHS.APP.PROFILE} isOpen={isOpen} />
                </div>
            </footer>
        </aside>
    )
}

export default Sidebar;