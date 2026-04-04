import { createContext } from "react"
import type { Product } from "@/types/product"

interface ProductProps {
    setProducts: (products: Product[]) => void
    products: Product[]
    resultsSearch: Product[]
    keyword: string
    setKeyword: (keyword: string) => void
}

export const ProductContext = createContext<ProductProps | null>(null)