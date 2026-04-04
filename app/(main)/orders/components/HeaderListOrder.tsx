"use client"

import { PATHS } from "@/utils/paths";
import { ButtonGo, ButtonIcon } from "@/components/ui/Button";
import { Filter, Search } from "lucide-react";
import { Dropdown, SelectDate } from "@/components/ui/Input";
import { useProduct } from "@/contexts/product/use-product";
import { useState } from "react";
import { cn } from "@/libs/tailwind";
import { SearchBar } from "./SearchBar";

const HeaderListOrder = () => {
    const [ onSearch, setOnSearch ] = useState(false);
    const { keyword, setKeyword } = useProduct();
    const [ onFilter, setOnFilter ] = useState(false)
    
    return (
        <nav className={cn(
            "px-4 grid  border-b border-gray-200",
            onFilter
                ? "grid-rows-[auto_auto] py-4"
                : "grid-rows-1 h-15",
        )}>
            <div className={cn(
                "grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-1",
                onFilter && "mb-4"
            )}>
                {!onSearch 
                    ? <h3 className="">Riwayat Pesanan</h3>
                    : <SearchBar keyword={keyword} setKeyword={setKeyword} />
                }

                {/* Button Search */}
                 <ButtonIcon
                    className={cn(onSearch && "bg-gray-100")}
                    title="Cari Produk"
                    lucideIcon={Search}
                    onClick={() => {
                            setOnSearch((prev) => !prev) 
                            setOnFilter(false)
                        }
                    }
                />

                {/* Btn Filter */}
                <ButtonIcon
                    className={cn(onFilter && "bg-gray-100")}
                    title="Filter"
                    lucideIcon={Filter} onClick={() => {
                        setOnFilter((prev) => !prev)
                        setOnSearch(false)
                    }} />

                {/* Btn Create Order */}
                <ButtonGo className="w-20 text-center" href={PATHS.APP.NEWORDER} label="Tambah" />
            </div>
            
            {onFilter && 
                <div className="
                    grid items-end gap-x-3
                    grid-rows-[auto_auto]
                    grid-cols-[repeat(auto-fill,minmax(150px,1fr))]
                ">
                    {/* Category */}
                    <Dropdown label="kategori" options={["Tampilkan semua", "Koper", "Cover"]} />

                    {/* Saler */}
                    <Dropdown label="Penjual" options={["Andris", "Rijal"]} />
                    
                    {/* Start date */}
                    <SelectDate label="Dari tanggal" />

                    {/* End Date */}
                    <SelectDate label="Sampai tanggal" />
                </div>
            }
        </nav>
    )
}

export default HeaderListOrder;