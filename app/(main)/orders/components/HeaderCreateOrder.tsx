"use client"

import { Search, ShoppingCart, X } from "lucide-react";
import { ButtonGo, ButtonIcon } from "@/components/ui/Button";
import { useCart } from "@/contexts/cart/use-cart";
import { PATHS } from "@/utils/paths";
import { SearchBar } from "./SearchBar";
import { useState } from "react";
import { cn } from "@/libs/tailwind";
import { useProduct } from "@/contexts/product/use-product";

export const HeaderCreateOrder = () => {
    const { toggleCart, totalQty, isCartOpen } = useCart();
    const { keyword, setKeyword } = useProduct();
    const [ isSearch, setIsSearch ] = useState(false);

    return ( 
        <nav className="grid grid-cols-[1fr_auto] h-15 items-center gap-3 justify-between px-4 transition-all  border-b border-gray-200">
            {!isSearch 
                ? <h3 className="text-md">Buat Pesanan</h3>
                : <SearchBar keyword={keyword} setKeyword={setKeyword} />
            }
            
            {/* menu */}
            <div className="flex gap-3">
                {/* Button Search */}
                <ButtonIcon
                    title="Cari Produk"
                    lucideIcon={Search}
                    className={cn(isSearch && "bg-gray-100")}
                    onClick={() => setIsSearch((prev) => !prev)}
                />

                {/* Toggle Cart */}
                <ButtonIcon
                    qty={totalQty}
                    title="Keranjang"
                    lucideIcon={ShoppingCart}
                    onClick={toggleCart}
                    className={cn(isCartOpen && "bg-gray-100")}
                />

                {/* Button close */}
                <ButtonGo
                    className="bg-transparent text-black hover:bg-gray-100 rounded-full p-2"
                    lucideIcon={X} href={PATHS.APP.ORDERS}
                />
            </div>
        </nav>
    )
}