"use client"

import { cn } from "@/libs/tailwind"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    keyword: string
    setKeyword: (keyword: string) => void
}

export const SearchBar = ({ keyword, setKeyword, className, ...props }: Props) => {
    const [ onFocused, setOnFocused ] = useState(false)
    const [ value, setValue ] = useState(keyword)

    useEffect(() => {
        const timer = setTimeout(() => {
            setKeyword(value)
        }, 300)

        return () => {
            setKeyword("")
            clearTimeout(timer)
        }
    }, [value, setKeyword])

    return (
        <div className={cn(
            "border-2 border-transparent rounded-full",
            onFocused && "border-gray-700")
        }>
            <div className={cn(
                "flex items-center px-4",
                "rounded-full",
                "bg-gray-100 border border-transparent",
                onFocused 
                    ? "bg-white"
                    : "hover:border-gray-300"
            )}>
                <Search size={16} />
                <input
                    id={props.id || "search-bar"}
                    name={props.name || "search-bar"}
                    type="search"
                    placeholder="Cari produk..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    autoFocus
                    className={cn(
                        "flex-1",
                        "px-3 py-2",
                        "text-sm",
                        "focus:outline-none",
                        "rounded-full",
                        className
                    )}

                    onFocus={()=> setOnFocused(true)}
                    onBlur={()=> setOnFocused(false)}
                    {...props}
                />
            </div>
        </div>
    )
}