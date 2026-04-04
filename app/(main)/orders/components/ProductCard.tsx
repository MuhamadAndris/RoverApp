"use client"

import Button from "@/components/ui/Button"
import { useCart } from "@/contexts/cart/use-cart"
import type { Product } from "@/types/product"
import { formatRupiah } from "@/utils/format"
import { Luggage } from "lucide-react"
import { useState } from "react"

export const ProductCard = ({product}:{product: Product}) => {
    const [ loading, setLoading ] = useState(false)
    const { addToCart } = useCart();
    
    const handleClick = async() => {
        setLoading((prev) => !prev)

        addToCart({...product, qty:1, productId:product.id, })

        await new Promise((resolve) => setTimeout(() => resolve(product), 500));
        setLoading((prev) => !prev)
    }

    return (
        <div className="bg-white border border-gray-300 p-3 rounded-xl max-h-70 grid grid-rows-[auto_auto_auto_auto_1fr]">
            <div className=" bg-gray-100 relative">
                <Luggage className="w-20 h-20 mx-auto" />
            </div>
            <h4 className="mt-2">{product.name}</h4>
            <p className="text-xs">{product.id}{' • ' + product.color || ''}{' • ' + product.size || ''}</p>
            <h4 className="flex products-center items-center">
                {formatRupiah(product.finalPrice)}
                {product.promo.label != "0" && <span className="bg-red-700 text-white text-xs ml-2 px-1 rounded-sm">{product.promo.label}</span>}
            </h4> 
            <div className="flex products-end pt-5">
                <Button label="Tambah" className="mt-auto" loading={loading} onClick={handleClick} />
            </div>
        </div>
    )
}