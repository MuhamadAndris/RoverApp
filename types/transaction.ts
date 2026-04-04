import type { Promo } from "./promo"
import type { Images } from "./product"

export type Transaction = {
    id: string
    storeId: string
    createdByUserId: string
    agentSalesByUserId: string
    svpUserId: string
    
    createdAt: Date
    updatedAt: Date

    totalAmount: number
    totalQty: number
    items: TransactionItem[]
}

export type TransactionItem = {
    id: string
    productId: string
    
    name: string
    brand: string
    img: Images[]

    color?: string
    size?: string

    qty: number

    normalPrice: number
    finalPrice: number

    promo: Promo
}