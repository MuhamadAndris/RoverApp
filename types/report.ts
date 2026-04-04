import type { BasePromo } from "./promo"

export type TransactionReportByDate = {
    date: Date
    transactions: TransactionReport[]
}

export type TransactionReport = {
    id: string
    saler: string
    items: TransactionReportItem[]
}

export type TransactionReportItem = {
    id: string
    productId: string
    brand: string
    name: string
    color: string
    size: string
    qty: number
    finalPrice: number
    total: number
    promo: BasePromo
}


