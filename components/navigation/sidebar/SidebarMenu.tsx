import { IconBriefcase, IconBriefcaseFilled, IconClipboardText, IconClipboardTextFilled, IconLayoutDashboard, IconLayoutDashboardFilled, IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftCollapseFilled, IconListDetails, IconListDetailsFilled, IconUser, IconUserFilled, type TablerIcon } from "@tabler/icons-react";
import { ComponentType } from "react";
import { PATHS } from "@/utils/paths";
import MenuItem from "./MenuItem";

export interface ListMenuValue {
    name: string;
    path: string;
    icon: {
        onActive: TablerIcon | ComponentType<{className?: string}>;
        onInactive: TablerIcon | ComponentType<{className?: string}>;
    }
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
    },
    {
        name: "Product",
        icon: {
            onActive: IconBriefcaseFilled,
            onInactive: IconBriefcase,
        },
        path: PATHS.APP.PRODUCTS
    }
]

interface MenuSidebarProps {
    isOpen: boolean;
}

const SidebarMenu = ({ isOpen }: MenuSidebarProps) => {
    return (
        <nav className="grid grid-cols-3 md:flex gap-1 md:justify-start md:flex-col  md:p-0 text-gray-700 ">
            {listMenu.map((item) => {
                return (
                    <MenuItem key={item.path} name={item.name} icon={item.icon} path={item.path} isOpen={isOpen} /> 
                )
            })}
        </nav>
    )
}

export default SidebarMenu;