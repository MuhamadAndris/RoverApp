import type { Promo } from "./promo"

export type BaseProduct = {
    id: string
    brand: string
    name: string
    color: string
    size: string
}

export interface Product extends BaseProduct {
    img: Images[]

    normalPrice: number
    promo: Promo
    finalPrice: number
}

export type Images = {
    id: number
    url: string
    isPrimary: boolean
    title?: string
}