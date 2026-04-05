import { cn } from "@/libs/tailwind";
import type { TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";

type MenuItemProps = {
    path: string;
    icon: {
        onActive: TablerIcon | ComponentType<{className?: string}>;
        onInactive: TablerIcon | ComponentType<{className?: string}>;
    }
    name: string;
    isOpen: boolean;
}

const MenuItem = ({
    path,
    icon,
    name,
    isOpen,
}: MenuItemProps) => {
    const defaultStyleIcon = cn( "w-6 h-6 md:w-6 md:h-6 mx-auto", isOpen ? "md:mr-2 md:inline-block" : "md:m-0" )
    const ActiveIcon = icon.onActive;
    const InactiveIcon = icon.onInactive;
    const pathName = usePathname();
    const isActive = pathName === path;

    return (
        <Link
            title={name} 
            href={path}
            className= {cn(
                "hover:bg-gray-100",
                "hover:text-gray-950",
                "hover:font-medium",
                
                // Mobile
                "rounded-md",
                "text-center grid justify-center items-center gap-0",

                // Desktop
                "md:mx-auto",
                "block p-1",

                // Active page
                isActive && 
                "bg-gray-100 text-gray-950 font-bold hover:font-bold",

                isOpen 
                  // detail 
                  ? "md:text-left rounded-lg md:px-3 md:py-2 md:w-full"

                  // sort
                  : "md:rounded-full md:w-11 md:h-11 md:flex md:justify-center md:items-center",
            )}
        >
            {(
        <>
          {isActive ? (
            <ActiveIcon className={defaultStyleIcon} />
          ) : (
            <InactiveIcon className={defaultStyleIcon} />
          )}

          <span
            className={cn(
              "block",
              "text-[10px]",
              "md:text-[14px]",
              "md:inline",
              !isOpen && "md:hidden"
            )}
          >
            {name}
          </span>
        </>
      )}
        </Link> 
    )
}

export default MenuItem;