import useProductSearch from "@/contexts/product/use-product-search";
import type { Product } from "@/types/product";
import { useState, type ReactNode } from "react";
import { ProductContext } from "./product-context";

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [ products, setProducts ] = useState<Product[]>([])
    const [ keyword, setKeyword ] = useState("")
    
    const resultsSearch = useProductSearch(products, keyword);

    return (
            <ProductContext.Provider value={{
                setProducts,
                products,
                resultsSearch,
                keyword,
                setKeyword
            }}>
                {children}
            </ProductContext.Provider>
    )
}