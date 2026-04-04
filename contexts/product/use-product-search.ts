import type { Product } from "@/types/product"
import { useMemo } from "react"

function useProductSearch(products: Product[], keyword: string) {

    return useMemo(() => {
        const search = keyword.toLowerCase().trim()
        if (!search) return products;

        return products.filter((product) => 
            product.id.toLowerCase().includes(search) ||
            product.name.toLowerCase().includes(search) ||
            product.color.toLowerCase().includes(search)
        )

        
    }, [keyword, products])
}

export default useProductSearch